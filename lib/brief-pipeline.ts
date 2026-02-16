import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import * as cheerio from "cheerio";
import { jsPDF } from "jspdf";

// Types
interface AssessmentPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  industry: string;
  teamSize: string;
  annualRevenueRange: string;
  tools: string;
  mostTimeQuestion: string;
  idealOutcome: string;
  aiToolsQuestion: string;
  biggestFrustration: string;
  budgetRange: string;
  timeline: string;
  additionalNotes: string;
}

interface ScrapedData {
  title: string;
  metaDescription: string;
  ogTags: Record<string, string>;
  headings: string[];
  textContent: string;
  themeColor: string;
}

interface Opportunity {
  title: string;
  description: string;
  impact: string;
  complexity: string;
  estimatedROI: string;
}

interface AnalysisResult {
  companySnapshot: {
    name: string;
    industry: string;
    description: string;
    currentTools: string;
  };
  opportunities: Opportunity[];
  recommendedTier: string;
  tierRationale: string;
}

// Brand colors
const GOLD = "#D4AF37";
const BLACK = "#000000";
const WHITE = "#F5F5F5";
const GRAY = "#888888";

// ── Scraping ──
async function scrapeWebsite(url: string): Promise<ScrapedData | null> {
  try {
    if (!url || (!url.startsWith("http://") && !url.startsWith("https://"))) {
      url = `https://${url}`;
    }
    const res = await fetch(url, {
      headers: { "User-Agent": "SlateworksBot/1.0" },
      signal: AbortSignal.timeout(8000),
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    const ogTags: Record<string, string> = {};
    $('meta[property^="og:"]').each((_, el) => {
      const prop = $(el).attr("property") || "";
      ogTags[prop] = $(el).attr("content") || "";
    });

    const headings: string[] = [];
    $("h1, h2").each((_, el) => {
      const t = $(el).text().trim();
      if (t) headings.push(t);
    });

    // Extract text
    $("script, style, nav, footer, header").remove();
    const textContent = $("body").text().replace(/\s+/g, " ").trim().slice(0, 2000);

    return {
      title: $("title").text().trim(),
      metaDescription: $('meta[name="description"]').attr("content") || "",
      ogTags,
      headings: headings.slice(0, 10),
      textContent,
      themeColor: $('meta[name="theme-color"]').attr("content") || "",
    };
  } catch (e) {
    console.error("Scrape failed:", e);
    return null;
  }
}

// ── AI Analysis ──
async function analyzeWithAI(
  payload: AssessmentPayload,
  scraped: ScrapedData | null
): Promise<AnalysisResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("No ANTHROPIC_API_KEY");

  const client = new Anthropic({ apiKey });

  const scrapedContext = scraped
    ? `\nWebsite data:\n- Title: ${scraped.title}\n- Description: ${scraped.metaDescription}\n- Headings: ${scraped.headings.join(", ")}\n- Content preview: ${scraped.textContent.slice(0, 1000)}`
    : "\nNo website data available.";

  const prompt = `Analyze this business and identify AI automation opportunities. Return ONLY valid JSON.

Company: ${payload.company}
Industry: ${payload.industry}
Role: ${payload.role}
Team Size: ${payload.teamSize}
Revenue: ${payload.annualRevenueRange}
Current Tools: ${payload.tools}
Biggest time sink: ${payload.mostTimeQuestion}
Ideal outcome: ${payload.idealOutcome}
AI experience: ${payload.aiToolsQuestion}
Biggest frustration: ${payload.biggestFrustration}
Budget: ${payload.budgetRange}
Timeline: ${payload.timeline}
Notes: ${payload.additionalNotes}
${scrapedContext}

Return JSON matching this exact schema:
{
  "companySnapshot": { "name": string, "industry": string, "description": string (2-3 sentences), "currentTools": string },
  "opportunities": [{ "title": string, "description": string (2-3 sentences), "impact": "high"|"medium"|"low", "complexity": "simple"|"moderate"|"complex", "estimatedROI": string }] (3-5 opportunities),
  "recommendedTier": "audit"|"build"|"partner",
  "tierRationale": string (2-3 sentences)
}

Tiers: audit = discovery/assessment ($2-5K), build = implementation ($5-25K), partner = ongoing strategic partnership ($5K+/mo)`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";
  // Extract JSON from potential markdown code blocks
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in AI response");
  return JSON.parse(jsonMatch[0]) as AnalysisResult;
}

function fallbackAnalysis(payload: AssessmentPayload): AnalysisResult {
  return {
    companySnapshot: {
      name: payload.company,
      industry: payload.industry,
      description: `${payload.company} is a ${payload.industry} company with a team of ${payload.teamSize}.`,
      currentTools: payload.tools,
    },
    opportunities: [
      {
        title: "Workflow Automation",
        description: `Based on your response about "${payload.mostTimeQuestion}", there are clear opportunities to automate repetitive processes.`,
        impact: "high",
        complexity: "moderate",
        estimatedROI: "10-20 hours saved per week",
      },
      {
        title: "AI-Powered Customer Experience",
        description:
          "Implement intelligent customer interaction tools to improve response times and satisfaction.",
        impact: "medium",
        complexity: "moderate",
        estimatedROI: "30% faster response times",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Consolidate and analyze your existing data to surface actionable insights automatically.",
        impact: "high",
        complexity: "simple",
        estimatedROI: "Better strategic decisions with less manual analysis",
      },
    ],
    recommendedTier: "audit",
    tierRationale:
      "We recommend starting with an AI Audit to map your current processes and identify the highest-impact automation opportunities before building.",
  };
}

// ── PDF Generation ──
function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function addPageFooter(doc: jsPDF, pageNum: number) {
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  // Gold line at top
  doc.setDrawColor(...hexToRgb(GOLD));
  doc.setLineWidth(0.5);
  doc.line(20, 12, w - 20, 12);
  // Footer text
  doc.setFontSize(8);
  doc.setTextColor(...hexToRgb(GRAY));
  doc.text("slateworks.io", w / 2, h - 10, { align: "center" });
  doc.text(`${pageNum}`, w - 20, h - 10, { align: "right" });
}

function generatePDF(
  analysis: AnalysisResult,
  payload: AssessmentPayload
): string {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  let pageNum = 1;

  // ── Page 1: Cover ──
  doc.setFillColor(...hexToRgb(BLACK));
  doc.rect(0, 0, w, h, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text("AI Opportunity Brief", w / 2, 90, { align: "center" });

  // Gold divider
  doc.setDrawColor(...hexToRgb(GOLD));
  doc.setLineWidth(1);
  doc.line(60, 100, w - 60, 100);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(24);
  doc.setTextColor(...hexToRgb(WHITE));
  doc.text(analysis.companySnapshot.name || payload.company, w / 2, 120, {
    align: "center",
  });

  doc.setFontSize(14);
  doc.setTextColor(...hexToRgb(GRAY));
  doc.text(`Prepared for ${payload.name}`, w / 2, 135, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text("Prepared by Slateworks", w / 2, h - 30, { align: "center" });

  doc.setFontSize(9);
  doc.setTextColor(...hexToRgb(GRAY));
  doc.text(new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), w / 2, h - 22, { align: "center" });

  // ── Page 2: Company Snapshot ──
  doc.addPage();
  pageNum++;
  doc.setFillColor(...hexToRgb(BLACK));
  doc.rect(0, 0, w, h, "F");
  addPageFooter(doc, pageNum);

  let y = 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text("Company Snapshot", 20, y);
  y += 15;

  const snapshot = analysis.companySnapshot;
  const snapshotFields = [
    ["Company", snapshot.name],
    ["Industry", snapshot.industry],
    ["Overview", snapshot.description],
    ["Current Tools", snapshot.currentTools],
    ["Team Size", payload.teamSize],
    ["Revenue Range", payload.annualRevenueRange],
  ];

  for (const [label, value] of snapshotFields) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...hexToRgb(GOLD));
    doc.text(label, 20, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...hexToRgb(WHITE));
    const lines = doc.splitTextToSize(value || "N/A", w - 45);
    doc.text(lines, 20, y);
    y += lines.length * 5 + 6;
  }

  // ── Pages 3-4: Opportunities ──
  doc.addPage();
  pageNum++;
  doc.setFillColor(...hexToRgb(BLACK));
  doc.rect(0, 0, w, h, "F");
  addPageFooter(doc, pageNum);

  y = 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text("AI Opportunities", 20, y);
  y += 15;

  for (const opp of analysis.opportunities) {
    if (y > h - 50) {
      doc.addPage();
      pageNum++;
      doc.setFillColor(...hexToRgb(BLACK));
      doc.rect(0, 0, w, h, "F");
      addPageFooter(doc, pageNum);
      y = 25;
    }

    // Card background
    doc.setFillColor(30, 30, 30);
    doc.roundedRect(18, y - 5, w - 36, 50, 3, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...hexToRgb(GOLD));
    doc.text(opp.title, 24, y + 4);

    // Badges
    const impactColor = opp.impact === "high" ? "#22C55E" : opp.impact === "medium" ? "#EAB308" : "#94A3B8";
    doc.setFontSize(8);
    doc.setTextColor(...hexToRgb(impactColor));
    doc.text(`Impact: ${opp.impact.toUpperCase()}`, 24, y + 12);
    doc.setTextColor(...hexToRgb(GRAY));
    doc.text(`Complexity: ${opp.complexity}`, 70, y + 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...hexToRgb(WHITE));
    const descLines = doc.splitTextToSize(opp.description, w - 55);
    doc.text(descLines, 24, y + 20);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(...hexToRgb(GOLD));
    doc.text(`Est. ROI: ${opp.estimatedROI}`, 24, y + 38);

    y += 58;
  }

  // ── Last Page: Recommended Engagement ──
  doc.addPage();
  pageNum++;
  doc.setFillColor(...hexToRgb(BLACK));
  doc.rect(0, 0, w, h, "F");
  addPageFooter(doc, pageNum);

  y = 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text("Recommended Engagement", 20, y);
  y += 15;

  const tierLabels: Record<string, string> = {
    audit: "AI Audit & Discovery",
    build: "AI Build & Implementation",
    partner: "Strategic AI Partnership",
  };
  const tierPricing: Record<string, string> = {
    audit: "$2,000 - $5,000",
    build: "$5,000 - $25,000",
    partner: "$5,000+/month",
  };

  const tier = analysis.recommendedTier;

  doc.setFillColor(30, 30, 30);
  doc.roundedRect(18, y - 5, w - 36, 60, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text(tierLabels[tier] || tier, 24, y + 8);

  doc.setFontSize(12);
  doc.setTextColor(...hexToRgb(WHITE));
  doc.text(tierPricing[tier] || "", 24, y + 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...hexToRgb(WHITE));
  const rationaleLines = doc.splitTextToSize(analysis.tierRationale, w - 55);
  doc.text(rationaleLines, 24, y + 28);

  y += 75;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text("Next Steps", 20, y);
  y += 10;

  const steps = [
    "1. Review this brief and identify your top priorities",
    "2. Schedule a 30-minute strategy call with our team",
    "3. We'll build a detailed implementation roadmap",
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...hexToRgb(WHITE));
  for (const step of steps) {
    doc.text(step, 24, y);
    y += 8;
  }

  y += 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...hexToRgb(GOLD));
  doc.text("Book your call: slateworks.io/services", 20, y);
  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...hexToRgb(GRAY));
  doc.text("joey@slateworks.io", 20, y);

  // Return base64
  return doc.output("datauristring").split(",")[1];
}

// ── Email ──
async function sendEmails(
  payload: AssessmentPayload,
  analysis: AnalysisResult,
  pdfBase64: string
) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const companyName = analysis.companySnapshot.name || payload.company;
  const filename = `AI-Opportunity-Brief-${companyName.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`;

  // Email to prospect
  await resend.emails.send({
    from: "Slateworks <sammy@send.slateworks.io>",
    to: payload.email,
    subject: `Your AI Opportunity Brief — ${companyName}`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #D4AF37;">Your AI Opportunity Brief is Ready</h2>
      <p>Hi ${payload.name},</p>
      <p>Thanks for completing the AI assessment. We've analyzed your business and identified key opportunities where AI can drive real impact for ${companyName}.</p>
      <p>Your personalized brief is attached. Inside you'll find:</p>
      <ul>
        <li>A snapshot of your current operations</li>
        <li>Specific AI opportunities tailored to your business</li>
        <li>Our recommended engagement approach</li>
      </ul>
      <p>Ready to discuss? <a href="https://slateworks.io/services" style="color: #D4AF37;">Book a strategy call</a> and we'll walk through it together.</p>
      <p>Best,<br/>The Slateworks Team</p>
    </div>`,
    attachments: [{ filename, content: pdfBase64 }],
  });

  // Email to Joey
  const formDataHtml = Object.entries(payload)
    .map(([k, v]) => `<strong>${k}:</strong> ${v || "N/A"}`)
    .join("<br/>");

  await resend.emails.send({
    from: "Slateworks <sammy@send.slateworks.io>",
    to: "joey@slateworks.io",
    subject: `New Brief Generated: ${companyName}`,
    html: `<div style="font-family: Arial, sans-serif;">
      <h2>New AI Opportunity Brief Generated</h2>
      <p><strong>Recommended Tier:</strong> ${analysis.recommendedTier}</p>
      <p><strong>Rationale:</strong> ${analysis.tierRationale}</p>
      <hr/>
      <h3>Form Data</h3>
      <p>${formDataHtml}</p>
    </div>`,
    attachments: [{ filename, content: pdfBase64 }],
  });
}

// ── Main Pipeline ──
export async function generateAndSendBrief(payload: AssessmentPayload) {
  console.log(`[Brief Pipeline] Starting for ${payload.company}`);

  // Step 1: Scrape
  const scraped = await scrapeWebsite(payload.website);
  console.log(`[Brief Pipeline] Scrape: ${scraped ? "success" : "skipped"}`);

  // Step 2: AI Analysis
  let analysis: AnalysisResult;
  try {
    analysis = await analyzeWithAI(payload, scraped);
    console.log("[Brief Pipeline] AI analysis complete");
  } catch (e) {
    console.error("[Brief Pipeline] AI failed, using fallback:", e);
    analysis = fallbackAnalysis(payload);
  }

  // Step 3: Generate PDF
  const pdfBase64 = generatePDF(analysis, payload);
  console.log("[Brief Pipeline] PDF generated");

  // Step 4: Send emails
  await sendEmails(payload, analysis, pdfBase64);
  console.log(`[Brief Pipeline] Emails sent for ${payload.company}`);
}
