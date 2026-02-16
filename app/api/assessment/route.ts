import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateAndSendBrief } from "@/lib/brief-pipeline";

type AssessmentPayload = {
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
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const ipRateLimit = new Map<string, { count: number; expiresAt: number }>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  for (const [key, value] of ipRateLimit.entries()) {
    if (value.expiresAt <= now) {
      ipRateLimit.delete(key);
    }
  }

  const entry = ipRateLimit.get(ip);
  if (!entry || entry.expiresAt <= now) {
    ipRateLimit.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  ipRateLimit.set(ip, entry);
  return false;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: unknown): AssessmentPayload {
  if (typeof body !== "object" || body === null) {
    throw new Error("Invalid payload.");
  }

  const data = body as Record<string, unknown>;

  return {
    name: asString(data.name),
    email: asString(data.email),
    company: asString(data.company),
    role: asString(data.role),
    website: asString(data.website),
    industry: asString(data.industry),
    teamSize: asString(data.teamSize),
    annualRevenueRange: asString(data.annualRevenueRange),
    tools: asString(data.tools),
    mostTimeQuestion: asString(data.mostTimeQuestion),
    idealOutcome: asString(data.idealOutcome),
    aiToolsQuestion: asString(data.aiToolsQuestion),
    biggestFrustration: asString(data.biggestFrustration),
    budgetRange: asString(data.budgetRange),
    timeline: asString(data.timeline),
    additionalNotes: asString(data.additionalNotes),
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeForHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("\n", "<br />");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const payload = parsePayload(await request.json());

    const required = [
      payload.name,
      payload.email,
      payload.company,
      payload.role,
      payload.industry,
      payload.teamSize,
      payload.annualRevenueRange,
      payload.tools,
      payload.mostTimeQuestion,
      payload.idealOutcome,
      payload.aiToolsQuestion,
      payload.biggestFrustration,
      payload.budgetRange,
      payload.timeline,
    ];

    if (required.some((value) => !value)) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Skipping assessment email delivery.");
      return NextResponse.json({ success: false, error: "Email service unavailable." }, { status: 503 });
    }

    const summaryLines = [
      "New AI services assessment submitted on slateworks.io",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company}`,
      `Role: ${payload.role}`,
      `Website: ${payload.website || "N/A"}`,
      `Industry: ${payload.industry}`,
      `Team Size: ${payload.teamSize}`,
      `Annual Revenue Range: ${payload.annualRevenueRange}`,
      `Tools: ${payload.tools}`,
      `What takes the most time: ${payload.mostTimeQuestion}`,
      `What you wish just happened: ${payload.idealOutcome}`,
      `Tried AI tools: ${payload.aiToolsQuestion}`,
      `Biggest frustration: ${payload.biggestFrustration}`,
      `Budget Range: ${payload.budgetRange}`,
      `Timeline: ${payload.timeline}`,
      `Anything else: ${payload.additionalNotes || "N/A"}`,
      `Submitted At: ${new Date().toISOString()}`,
    ];

    const summaryHtml = summaryLines
      .map((line) => `<p style="margin: 0 0 8px 0;">${sanitizeForHtml(line)}</p>`) 
      .join("");

    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Slateworks <sammy@send.slateworks.io>",
        to: "joey@slateworks.io",
        replyTo: payload.email,
        subject: `AI Assessment: ${payload.company}`,
        html: `<h2>New AI Assessment Submission</h2>${summaryHtml}`,
        text: summaryLines.join("\n"),
      });
    } catch (error) {
      console.error("Failed to deliver assessment email through Resend.", error);
      return NextResponse.json({ success: false, error: "Unable to deliver assessment notification." }, { status: 502 });
    }

    // Fire-and-forget: generate AI brief + PDF
    void generateAndSendBrief(payload).catch((err) =>
      console.error("[Brief Pipeline] Error:", err)
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Assessment submission failed.", error);
    return NextResponse.json({ success: false, error: "Failed to submit assessment." }, { status: 500 });
  }
}
