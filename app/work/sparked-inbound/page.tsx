import CaseStudyPage from "@/components/work/case-study-page";

export const metadata = {
  title: "Sparked Inbound — Slateworks",
  description:
    "How Slateworks built the Three Gaps Diagnostic for Sparked Inbound — an AI tool that reads a visitor's website, applies Sparked's brand framework, and returns a personalized messaging diagnosis in 90 seconds.",
};

export default function SparkedInboundCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "Inbound → Pipeline",
        title: "Sparked Inbound",
        subtitle:
          "How a marketing agency turned their proprietary framework into a 90-second AI diagnostic — proving expertise and qualifying leads before the first sales call.",
        description:
          "Sparked Inbound is a brand messaging agency. Their edge is the Three Gaps framework — a method for diagnosing exactly where a company's messaging breaks down: the Identity Gap, the Translation Gap, and the Consistency Gap. That framework lived inside their team, surfacing only after a prospect already booked a call. Slateworks built tools.sparkedinbound.com to put it in front of every visitor — and turn the diagnosis itself into the top of their pipeline.",
        timeline: "Built and shipped, iterating live",
        challenge:
          "Most agency sites ask visitors to fill out a contact form and wait. Sparked wanted the opposite — a tool that proves the team's expertise the moment a visitor lands, and qualifies them as a lead in the same motion. The problem: their Three Gaps framework is judgment-heavy work. It isn't a quiz. It has to read a company's actual website, apply Sparked's pillars against what's said (and what isn't), and return a diagnosis specific enough to be worth a founder's time — without a human in the loop.",
        solution:
          "Slateworks built the Three Gaps Diagnostic in TypeScript with Claude (Anthropic) as the reasoning engine. A visitor pastes their URL; the tool reads the homepage and a couple of key pages, pre-fills a four-step intake (Business Basics → Strengths & Proof → Audience → Online Presence), and returns a personalized diagnosis of their Identity, Translation, and Consistency gaps in roughly 90 seconds — free. The interaction itself is the marketing: every visitor walks away with specific, useful insight in Sparked's voice, which doubles as proof of expertise. Strong-fit companies route directly to founder conversations; the rest leave with a clear next step and a reason to come back.",
        techStack: [
          "TypeScript",
          "Next.js",
          "Claude AI (Anthropic)",
          "Tailwind CSS",
          "Vercel",
        ],
        keyFeatures: [
          "Paste-a-URL flow — tool reads the visitor's homepage and key pages automatically",
          "Sparked's Three Gaps framework (Identity, Translation, Consistency) encoded into a Claude prompt system",
          "Four-step intake wizard pre-filled from the site read, reviewable in seconds",
          "90-second personalized messaging diagnosis, free for the visitor",
          "Manual-entry fallback for prospects without a live site",
          "High-fit diagnoses route to direct conversations with Sparked's founders",
        ],
        projectUrl: "https://tools.sparkedinbound.com",
        heroImage: "/images/sparked-inbound-hero.jpg",
        heroOverlayClassName:
          "bg-gradient-to-br from-black/85 via-zinc-950/75 to-zinc-900/55",
        galleryImages: [
          {
            src: "/images/sparked-inbound-framework.jpg",
            caption:
              "The Three Gaps — Identity, Translation, Consistency — Sparked's proprietary brand framework, encoded as the diagnostic's reasoning model",
          },
          {
            src: "/images/sparked-inbound-intake.jpg",
            caption:
              "The four-step intake: Business Basics → Strengths & Proof → Audience → Online Presence — pre-filled from the visitor's website, ready to review in seconds",
          },
        ],
      }}
    />
  );
}
