import CaseStudyPage from "@/components/work/case-study-page";

export const metadata = {
  title: "SPARQ Certified — Slateworks",
  description:
    "How Slateworks built a high-conversion landing page that helped SPARQ sign 100+ facilities to a waitlist in 30 days.",
};

export default function SparqCertifiedCaseStudyPage() {
  return (
    <CaseStudyPage
      data={{
        category: "Process → Profit",
        title: "SPARQ Certified",
        subtitle:
          "A dedicated intake landing page that turned facility interest into a 100+ facility waitlist in 30 days.",
        description:
          "SPARQ's facility partnership program was gaining momentum. Inbound interest was strong, but the intake process was ad hoc. Facilities were emailing, calling, and DMing from every channel with no unified path to evaluate the partnership, understand revenue potential, or commit. SPARQ needed a single, compelling destination that could qualify, educate, and convert facilities at scale.",
        timeline: "2 weeks to build, 30 days to 100+ facilities",
        challenge:
          "SPARQ had proven demand — facilities wanted to become certified testing centers — but no systematic way to capture and convert that interest. The team was fielding scattered inquiries manually, unable to show revenue projections, and losing momentum with prospects who needed a clear next step. Without a dedicated intake experience, high-intent facilities were slipping through the cracks.",
        solution:
          "Slateworks designed and built sparqcertified.com as a standalone conversion-focused landing page. The site included a revenue calculator that let facilities model their profit from SPARQ testing, clear program tiers (Assessment, Drop-In, External Combines), social proof with real facility count and athlete numbers, and a streamlined partnership request form. Everything was engineered to answer one question: 'What do I get and how much do I make?'",
        techStack: [
          "Next.js",
          "Tailwind CSS",
          "Vercel",
          "HubSpot",
        ],
        keyFeatures: [
          "Revenue calculator with real facility modeling",
          "Three clear partnership tiers with pricing",
          "Live social proof: facility count, athlete numbers, ROI stats",
          "Streamlined partnership request form",
          "Mobile-first design for coaches on the go",
          "SEO-optimized for facility partnership searches",
        ],
        projectUrl: "https://sparqcertified.com/",
        heroImage: "/images/sparqcertified-hero.jpg",
        heroOverlayClassName:
          "bg-gradient-to-br from-black/90 via-zinc-950/85 to-zinc-900/60",
        galleryImages: [
          {
            src: "/images/sparqcertified-screenshot.png",
            caption:
              "SparqCertified.com — the facility partnership landing page built to capture and convert inbound facility interest at scale",
          },
        ],
      }}
    />
  );
}
