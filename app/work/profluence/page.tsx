import CaseStudyPage from "@/components/work/case-study-page";

export const metadata = {
  title: "Profluence — Slateworks",
  description:
    "How Slateworks turned Profluence's broken intake loop into a repeatable partnership engine — 250+ qualified leads captured and a new revenue motion launched.",
};

export default function ProuenceCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "Broken Loop → Engine",
        title: "Profluence",
        subtitle:
          "How a broken intake loop became a repeatable partnership engine — 250+ qualified leads captured and a new revenue motion launched in under 3 months.",
        description:
          "Profluence's intake loop was broken. Founder decks came in, but qualification, routing, partner follow-up, and performance visibility were all too manual. Every submission had to be reviewed, graded, and organized by hand before the right founders ever got a conversation. The loop never closed on its own — so it ate their margins and capped their growth.",
        timeline: "3 weeks to launch, iterating monthly",
        challenge:
          "Founders emailed their decks directly. A team member had to open each one, evaluate it against their criteria, grade it, then organize it within their process — manually. The loop had no automatic signal, decision, or follow-up, so every step waited on a person. As volume grew, the bottleneck got worse. Strong founders slipped through the cracks. The team spent more time sorting than investing. What started as a manageable workflow had become a full-time job that didn't scale.",
        solution:
          "Slateworks mapped the intake loop end-to-end, then built the system that closed it. Founders now submit through a structured intake flow. The system qualifies, scores, routes, and surfaces the strongest opportunities automatically — and makes the whole pipeline visible. The team focuses on conversations, not spreadsheets. The same loop opened a new revenue motion: service partners now access qualified founder data that Profluence was previously throwing away. What was a manual bottleneck is now a repeatable partnership engine that runs and improves.",
        techStack: [
          "Next.js",
          "Claude AI (Anthropic)",
          "Railway",
          "Vercel",
          "Tailwind CSS",
        ],
        keyFeatures: [
          "Custom intake loop replaced manual email chaos",
          "250+ qualified leads captured in 3 months",
          "Automatic qualification, scoring, and routing",
          "Manual review reduced — the team focuses on deals, not data entry",
          "Partner pipeline created from qualified founder data",
          "New revenue motion launched off the same loop",
        ],
        projectUrl: "https://profluence-landing.vercel.app",
        heroImage: "/images/profluence-hero.jpg",
        heroOverlayClassName:
          "bg-gradient-to-br from-black/90 via-zinc-950/85 to-zinc-900/60",
        galleryImages: [
          {
            src: "/images/profluence-landing.jpg",
            caption:
              "Profluence.com — the network's public-facing site, built and maintained by Slateworks",
          },
        ],
      }}
    />
  );
}
