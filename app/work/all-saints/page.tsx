import CaseStudyPage from "@/components/work/case-study-page";

export default function AllSaintsCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "Catholic AI Companion",
        title: "All Saints",
        subtitle: "Conversations with the communion of saints — a Catholic AI companion for counsel, study, and spiritual formation.",
        description:
          "All Saints is a contemplative AI companion that lets users ask real questions of the great saints and receive grounded, formation-oriented responses. The app combines a saint directory, conversation modes, prompt starters, and optional ElevenLabs voice playback inside a dark, sacred-study interface.",
        timeline: "Internal product build",
        challenge:
          "Designing a faith-forward AI experience that felt reverent and useful — not gimmicky — while supporting multiple saints, modes of conversation, and voice-enabled interaction.",
        solution:
          "We built a focused companion interface around saint selection, counsel/study/formation modes, guided prompt chips, and a chat input that can pair text-first responses with configured voice playback.",
        techStack: [
          "Next.js",
          "Claude AI",
          "ElevenLabs voice",
          "Tailwind CSS",
          "Vercel",
        ],
        keyFeatures: [
          "Saint companion directory",
          "Counsel, study, and formation modes",
          "Guided prompt starters",
          "Text-first AI conversations",
          "Optional voice playback",
          "Dark ecclesial interface with gold accents",
        ],
        projectUrl: "https://allsaints.slateworks.io",
        heroImage: "/images/allsaints-hero.png",
        heroOverlayClassName:
          "bg-gradient-to-br from-black/85 via-stone-950/80 to-amber-950/35",
        galleryImages: [
          {
            src: "/images/allsaints-app.png",
            caption:
              "All Saints pairs a saint directory with counsel, study, and formation modes inside a contemplative AI chat interface.",
          },
        ],
      }}
    />
  );
}
