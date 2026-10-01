export type Build = {
  name: string;
  url: string;
  href: string;
  external?: boolean;
  image: string;
  description: string;
};

/** Client builds shown on the homepage and the /work index, in display order. */
export const clientBuilds: Build[] = [
  {
    name: "Profluence",
    url: "profluence.com",
    href: "/work/profluence",
    image: "/images/profluence-landing.jpg",
    description: "The platform behind a private sports-business network — media, community, and technology.",
  },
  {
    name: "Profluence Advisory",
    url: "advisory.profluence.com",
    href: "https://advisory.profluence.com/",
    external: true,
    image: "/images/profluence-advisory-live.jpg",
    description: "A growth-advisory product with a free AI diagnostic as its front door.",
  },
  {
    name: "Profluence Capital",
    url: "profluencecapital.com",
    href: "https://profluencecapital.com/",
    external: true,
    image: "/images/profluence-capital-live.jpg",
    description: "The investor-facing home for a sports, media, and entertainment venture fund.",
  },
  {
    name: "Sparked Inbound",
    url: "sparkedinbound.com",
    href: "/work/sparked-inbound",
    image: "/images/sparked-inbound-intake.jpg",
    description: "An AI brand-messaging diagnostic that reads a site and returns an analysis in 90 seconds.",
  },
  {
    name: "Suncoast Harvest",
    url: "suncoastharvest.com",
    href: "https://suncoastharvest.com/",
    external: true,
    image: "/images/suncoast-harvest-hero.jpg",
    description: "The product platform for a sustainable-agriculture supplier — catalog, labels, and ordering.",
  },
];

/** Earlier studio experiments — listed on /work, each with its own case study. */
export const experiments = [
  { name: "All Saints", kind: "Catholic AI companion", href: "/work/all-saints" },
  { name: "All Suspects", kind: "AI-generated mystery game", href: "/work/all-suspects" },
  { name: "Haven", kind: "AI home redesign concepts", href: "/work/haven" },
  {
    name: "Before Bedtime Adventures",
    kind: "AI-personalized printed storybooks",
    href: "/work/before-bedtime-adventures",
  },
];
