import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ClosingCta from "@/components/studio/closing-cta";
import Reveal from "@/components/studio/reveal";
import SectionLabel from "@/components/studio/section-label";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";

interface CaseStudyData {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  challenge: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  projectUrl?: string;
  platform?: string;
  price?: string;
  heroImage: string;
  /** Legacy dark-theme overlay; unused in the studio layout. */
  heroOverlayClassName?: string;
  galleryImages?: { src: string; caption: string }[];
}

interface CaseStudyPageProps {
  data: CaseStudyData;
}

function displayHost(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function CaseStudyPage({ data }: CaseStudyPageProps) {
  const facts = [
    { label: "Timeline", value: data.timeline },
    ...(data.platform ? [{ label: "Platform", value: data.platform }] : []),
    ...(data.price ? [{ label: "Price", value: data.price }] : []),
    { label: "Stack", value: data.techStack.join(" · ") },
  ];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-28 md:px-8 md:pb-16 md:pt-40">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>
          <div className="mt-10">
            <SectionLabel index="●">{data.category}</SectionLabel>
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">{data.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-soft md:text-xl">{data.subtitle}</p>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-paper p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{fact.label}</dt>
                <dd className="mt-2 text-[15px] leading-snug text-ink">{fact.value}</dd>
              </div>
            ))}
            {data.projectUrl && (
              <a
                href={data.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-ink p-5 text-paper transition-colors hover:bg-signal"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/60 group-hover:text-paper/80">
                  Live
                </span>
                <span className="mt-2 flex items-center justify-between gap-2 text-[15px]">
                  {displayHost(data.projectUrl)}
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </span>
              </a>
            )}
          </dl>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-rule bg-paper-deep">
              <img src={data.heroImage} alt={`${data.title} — product screenshot`} className="w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[16rem_1fr]">
          <SectionLabel index="01">Overview</SectionLabel>
          <p className="max-w-3xl font-display text-xl leading-snug text-ink md:text-2xl">{data.description}</p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-14 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
          <Reveal>
            <SectionLabel index="02">The problem</SectionLabel>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{data.challenge}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel index="03">What we built</SectionLabel>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{data.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <SectionLabel index="04">Highlights</SectionLabel>
          <ul className="mt-10 grid border-t border-ink md:grid-cols-2">
            {data.keyFeatures.map((feature, i) => (
              <li key={feature} className="flex gap-5 border-b border-rule py-5 md:odd:pr-8 md:even:pl-8">
                <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] leading-snug text-ink">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {data.galleryImages && data.galleryImages.length > 0 && (
        <section className="border-b border-rule">
          <div className="mx-auto max-w-6xl space-y-12 px-5 py-20 md:px-8 md:py-24">
            {data.galleryImages.map((img) => (
              <Reveal key={img.src}>
                <figure>
                  <div className="overflow-hidden rounded-xl border border-rule bg-paper-deep">
                    <img src={img.src} alt={img.caption} loading="lazy" className="w-full object-cover" />
                  </div>
                  {img.caption && (
                    <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <ClosingCta title="Want something like this built?" />
      <SiteFooter />
    </main>
  );
}
