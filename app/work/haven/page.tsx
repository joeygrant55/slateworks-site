import CaseStudyPage from "@/components/work/case-study-page";

export default function HavenCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "AI Home Redesign App",
        title: "Haven",
        subtitle: "AI-powered redesign concepts for homeowners and real estate teams.",
        description:
          "Snap a photo of any room and see it transformed with AI-generated design concepts. Save, organize, and track your home renovation projects. Built for homeowners and real estate agents.",
        timeline: "4 weeks concept to App Store submission",
        challenge:
          "Making AI redesigns look realistic and actionable, not just artistic renders.",
        solution:
          "We implemented a fine-tuned generation pipeline that preserves room structure while transforming style, producing outputs users can actually execute.",
        techStack: [
          "React Native",
          "AI/ML (image generation)",
          "Cloud Storage",
          "iOS",
        ],
        keyFeatures: [
          "Photo-to-redesign AI",
          "Project organization (Pinterest-style boards)",
          "Room tracking",
          "Before/after comparisons",
        ],
        platform: "iOS (App Store)",
        heroImage: "/images/haven-hero.jpg",
        heroOverlayClassName:
          "bg-gradient-to-br from-amber-950/80 via-stone-900/65 to-black/70",
      }}
    />
  );
}
