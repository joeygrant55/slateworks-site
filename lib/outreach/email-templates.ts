/**
 * Cold Outreach Email Templates for Slateworks Service Pipeline
 * 
 * 3-touch sequence: Value → Case Study → Direct Ask
 * All emails drive to slateworks.io/services assessment form
 * 
 * Variables: {{name}}, {{company}}, {{industry}}, {{painPoint}}, {{opportunity}}
 */

export const EMAIL_SEQUENCES = {
  // Touch 1: Pure value, no pitch
  touch1_value: {
    subject: "{{company}} + AI: a quick thought",
    body: `Hi {{name}},

I've been looking at how {{industry}} companies are using AI to cut operational overhead, and {{company}} caught my eye.

Most businesses in your space are still doing {{painPoint}} manually. The ones pulling ahead are automating it — not with off-the-shelf tools, but with AI built around how they actually work.

One example: {{opportunity}}.

No pitch here. Just thought it was worth flagging.

Joey Grant
Slateworks — slateworks.io`,
    delay: 0, // send immediately
  },

  // Touch 2: Social proof / case study (5 days later)
  touch2_proof: {
    subject: "Re: {{company}} + AI: a quick thought",
    body: `Following up on my last note.

We recently helped a mid-market company automate a process that was eating 20+ hours a week across their team. Built a custom AI workflow in about 3 weeks. Their ops lead said it felt like hiring two people.

If {{company}} has similar bottlenecks — scheduling, data entry, reporting, client communication — we can usually spot the highest-ROI opportunity in a free 5-minute assessment.

Takes 2 minutes to fill out, and we'll send back a custom AI Opportunity Brief for {{company}} within the hour:

→ slateworks.io/services#assessment

Either way, no pressure.

Joey Grant
Slateworks`,
    delay: 5, // days after touch 1
  },

  // Touch 3: Direct, respectful close (10 days after touch 1)
  touch3_direct: {
    subject: "Quick question, {{name}}",
    body: `{{name}} — last note from me.

Is AI something {{company}} is actively exploring, or is it on the back burner for now?

If it's on your radar, our free AI assessment takes 2 minutes and we'll send you a custom report on where AI could save {{company}} the most time and money:

→ slateworks.io/services#assessment

If the timing's off, totally get it. Happy to reconnect whenever it makes sense.

Joey Grant
Slateworks — slateworks.io`,
    delay: 10, // days after touch 1
  },
} as const;

/**
 * Industry-specific pain points and opportunities for template personalization
 */
export const INDUSTRY_HOOKS: Record<string, { painPoints: string[]; opportunities: string[] }> = {
  "fitness": {
    painPoints: [
      "scheduling trainers and managing class bookings across locations",
      "manually tracking member attendance and engagement patterns",
      "writing personalized workout plans for each client",
    ],
    opportunities: [
      "AI that predicts class demand and auto-optimizes trainer schedules — cutting no-shows by 30%+",
      "Automated member re-engagement when attendance drops, personalized to their goals",
      "AI-generated workout plans based on member history, adjusted weekly",
    ],
  },
  "real-estate": {
    painPoints: [
      "writing unique property descriptions for every listing",
      "qualifying leads manually before showing properties",
      "keeping up with market comps across multiple neighborhoods",
    ],
    opportunities: [
      "AI that generates listing descriptions, social posts, and email campaigns per property in seconds",
      "An AI lead qualifier that asks the right questions and books showings for pre-qualified buyers only",
      "Automated market analysis that surfaces pricing opportunities before your competitors see them",
    ],
  },
  "healthcare": {
    painPoints: [
      "patient intake paperwork and insurance verification",
      "appointment scheduling and follow-up reminders across providers",
      "clinical documentation eating into face-time with patients",
    ],
    opportunities: [
      "AI-powered intake that pre-fills forms from insurance cards and prior records",
      "Smart scheduling that accounts for provider preferences, patient history, and no-show risk",
      "Ambient documentation that drafts clinical notes from the visit conversation",
    ],
  },
  "legal": {
    painPoints: [
      "document review and contract analysis taking hours per client",
      "research across case law databases for each new matter",
      "tracking billable hours and generating detailed invoices",
    ],
    opportunities: [
      "AI contract review that flags risks, missing clauses, and unusual terms in minutes",
      "Legal research assistant that finds relevant precedents and summarizes them",
      "Automated time tracking and invoice generation from calendar + email activity",
    ],
  },
  "ecommerce": {
    painPoints: [
      "writing product descriptions for hundreds or thousands of SKUs",
      "customer support tickets piling up with repetitive questions",
      "manually analyzing which products to promote or discount",
    ],
    opportunities: [
      "AI that generates SEO-optimized product descriptions from specs and photos at scale",
      "Customer support AI that handles 80% of tickets instantly, escalates the rest",
      "Demand forecasting and dynamic pricing that maximizes margin automatically",
    ],
  },
  "professional-services": {
    painPoints: [
      "proposal writing taking days for each new client opportunity",
      "project status reporting across multiple client engagements",
      "knowledge trapped in email threads and Slack channels",
    ],
    opportunities: [
      "AI proposal generator that drafts custom proposals from your past wins + client intake",
      "Automated project dashboards that pull status from tools your team already uses",
      "Internal knowledge base AI that answers team questions from your collective history",
    ],
  },
  "construction": {
    painPoints: [
      "estimating material costs and labor hours for bids",
      "tracking safety compliance across job sites",
      "managing change orders and keeping projects on budget",
    ],
    opportunities: [
      "AI estimating tool trained on your historical project data for faster, more accurate bids",
      "Automated safety compliance checks from job site photos and daily logs",
      "Change order tracking that predicts budget impact before approvals",
    ],
  },
  "restaurant": {
    painPoints: [
      "inventory management and food cost tracking",
      "staff scheduling across shifts and locations",
      "responding to reviews and managing online reputation",
    ],
    opportunities: [
      "AI inventory forecasting that reduces food waste by predicting demand from weather, events, and history",
      "Smart scheduling that balances labor costs with expected foot traffic",
      "Automated review responses that match your brand voice and flag issues for management",
    ],
  },
};

export type IndustryKey = keyof typeof INDUSTRY_HOOKS;
