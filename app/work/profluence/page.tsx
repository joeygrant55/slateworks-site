import CaseStudyPage from "@/components/work/case-study-page";

export const metadata = {
  title: "Profluence — Slateworks",
  description:
    "How Slateworks found a broken process eating Profluence's margins, replaced it with custom software, and turned it into a profit center.",
};

export default function ProuenceCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "Process → Profit",
        title: "Profluence",
        subtitle:
          "How a broken intake process became a profit center — 250+ qualified leads and a new revenue stream in under 3 months.",
        description:
          "Profluence's founders were drowning in inbound. Decks and applications arrived by email, scattered across inboxes and spreadsheets. Someone had to manually review, grade, and organize every submission before the right founders ever got a conversation. The process was eating their margins and capping their growth.",
        timeline: "3 weeks to launch, iterating monthly",
        challenge:
          "Founders emailed their decks directly. A team member had to open each one, evaluate it against their criteria, grade it, then organize it within their process — manually. As volume grew, the bottleneck got worse. Strong founders slipped through the cracks. The team spent more time sorting than actually investing. What started as a manageable workflow had become a full-time job that didn't scale.",
        solution:
          "Slateworks evaluated the process end-to-end, then built a custom web application that replaced the manual workflow entirely. Founders now submit through a structured intake flow. The system organizes, scores, and surfaces the strongest opportunities automatically. The team focuses on conversations, not spreadsheets. The same software also opened a new revenue channel — service partners now access qualified founder data that Profluence was previously throwing away.",
        techStack: [
          "Next.js",
          "Claude AI (Anthropic)",
          "Railway",
          "Vercel",
          "Tailwind CSS",
        ],
        keyFeatures: [
          "Custom intake flow replaced email chaos",
          "Automated scoring and organization",
          "Team focuses on deals, not data entry",
          "250+ qualified leads in 3 months",
          "New revenue stream from partner access to qualified data",
          "Helped close multiple large partnerships through better inbound handling",
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
