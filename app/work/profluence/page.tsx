import CaseStudyPage from "@/components/work/case-study-page";

export const metadata = {
  title: "Profluence — Slateworks",
  description:
    "How a lightweight web application helped a local business manage 230+ submissions and support a $100K partnership in under 3 months.",
};

export default function ProuenceCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "Lightweight Web Application",
        title: "Profluence",
        subtitle:
          "A lightweight web application that helped a local business manage 230+ submissions in under 3 months and support a $100K partnership.",
        description:
          "Profluence needed a better way to handle growing inbound demand without turning every submission into a manual review project. We built a lightweight web application that made intake, review, and follow-up much easier for the team running it.",
        timeline: "3 weeks to launch, iterating monthly",
        challenge:
          "As inbound submissions grew, the process was getting harder to manage by hand. Reviewing each entry manually was slow, inconsistent, and pulled time away from higher-value conversations. A basic form and spreadsheet setup was no longer enough.",
        solution:
          "We built a simple web application around that workflow. Submissions come in through a cleaner intake flow, the system helps organize and analyze them, and the team can focus on the strongest opportunities instead of sorting through everything manually.",
        techStack: [
          "Next.js",
          "Claude AI (Anthropic)",
          "Railway",
          "Vercel",
          "Tailwind CSS",
        ],
        keyFeatures: [
          "Custom intake flow for inbound submissions",
          "Simple internal review and ranking system",
          "Cleaner handoff from submission to follow-up",
          "230+ submissions processed in 3 months",
          "$100K partnership supported by better inbound handling",
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
