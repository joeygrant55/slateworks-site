import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/studio/reveal";
import SectionLabel from "@/components/studio/section-label";

type Build = {
  name: string;
  url: string;
  href: string;
  external?: boolean;
  image: string;
  description: string;
};

const builds: Build[] = [
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

function BuildCard({ build, featured = false }: { build: Build; featured?: boolean }) {
  const inner = (
    <>
      <div
        className={`overflow-hidden rounded-lg border border-rule bg-paper-deep ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}
      >
        <img
          src={build.image}
          alt={`${build.name} — ${build.url}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className={`font-semibold text-ink ${featured ? "text-2xl" : "text-xl"}`}>{build.name}</h3>
          <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-ink-soft">{build.description}</p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-signal" />
      </div>
      <p className="mt-3 font-mono text-[11px] text-ink-muted">{build.url}</p>
    </>
  );

  return build.external ? (
    <a href={build.href} target="_blank" rel="noopener noreferrer" className="group block">
      {inner}
    </a>
  ) : (
    <Link href={build.href} className="group block">
      {inner}
    </Link>
  );
}

export default function Work() {
  const [featured, ...rest] = builds;

  return (
    <section id="work" className="scroll-mt-20 border-b border-rule bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel index="03">Selected client work</SectionLabel>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
            Shipped, live, and in use.
          </h2>
          <Link
            href="/work"
            className="text-sm font-medium text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
          >
            All work
          </Link>
        </div>

        <div className="mt-14">
          <Reveal>
            <BuildCard build={featured} featured />
          </Reveal>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {rest.map((build, i) => (
            <Reveal key={build.name} delay={(i % 2) * 0.1}>
              <BuildCard build={build} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
