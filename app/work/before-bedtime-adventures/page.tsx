import CaseStudyPage from "@/components/work/case-study-page";

export default function BeforeBedtimeAdventuresCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "AI Personalized Storybooks",
        title: "Before Bedtime Adventures",
        subtitle: "Magical family storybooks generated from your photos and delivered in premium print.",
        description:
          "Upload family vacation photos and AI transforms them into magical, personalized storybooks with Disney-quality illustrations. Premium printed keepsake books delivered to your door.",
        timeline: "2 weeks concept to production",
        challenge:
          "Generating consistent, high-quality illustrations across an entire book while maintaining character likeness.",
        solution:
          "We built a multi-pass generation pipeline with style locking and character consistency checks to keep visuals cohesive page to page.",
        techStack: [
          "Next.js",
          "AI Generation (illustrations)",
          "Stripe (payments)",
          "Lulu Print API (fulfillment)",
        ],
        keyFeatures: [
          "Photo-to-story AI",
          "Disney-quality illustration generation",
          "Personalized narratives",
          "Premium print fulfillment",
          "Gift-ready packaging",
        ],
        price: ".99 per book (premium keepsake quality)",
        projectUrl: "https://before-bedtime-adventures.vercel.app",
        heroImage:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1920&q=80",
        heroOverlayClassName:
          "bg-gradient-to-br from-black/80 via-indigo-950/65 to-amber-900/45",
      }}
    />
  );
}
