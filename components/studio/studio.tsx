import { ArrowUpRight } from "lucide-react";
import LoopVideo from "@/components/studio/loop-video";
import Reveal from "@/components/studio/reveal";
import SectionLabel from "@/components/studio/section-label";

const recasa = {
  name: "Recasa",
  url: "getrecasa.com",
  href: "https://getrecasa.com/",
  video: "/video/recasa-reveal.mp4",
  poster: "/video/recasa-poster.jpg",
  alt: "Recasa app revealing AI redesigns of real backyards and patios, before and after",
  description:
    "Photograph a room and watch AI redesign it in about a minute — same walls, same windows, same layout. Subscriptions and credit packs were live on launch day.",
  stats: [
    { value: "21 days", label: "first commit to the App Store" },
    { value: "Day 1", label: "monetized at launch" },
  ],
};

export default function Studio({ index = "02" }: { index?: string }) {
  return (
    <section id="studio" className="scroll-mt-20 bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="[&_p]:text-paper/50">
          <SectionLabel index={index}>Slateworks Studio</SectionLabel>
        </div>
        <div className="mt-5 grid gap-6 md:grid-cols-[1fr_22rem] md:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] md:text-5xl">
            We ship our own products, too.
          </h2>
          <p className="leading-relaxed text-paper/60">
            The same agent-driven system we run for clients builds and operates our own apps — with real users and real
            revenue on the line.
          </p>
        </div>

        <Reveal className="mt-14">
          <a
            href={recasa.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid overflow-hidden rounded-xl border border-paper/10 bg-paper/[0.03] transition-colors hover:border-paper/30 lg:grid-cols-[1.25fr_1fr]"
          >
            <div className="border-b border-paper/10 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-1.5 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-paper/20" />
                <span className="h-2 w-2 rounded-full bg-paper/20" />
                <span className="h-2 w-2 rounded-full bg-paper/20" />
                <span className="ml-3 font-mono text-[11px] text-paper/40">{recasa.url}</span>
              </div>
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#f3ece2]">
                <p className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#a8492b]">
                  Before → after
                </p>
                <LoopVideo
                  src={recasa.video}
                  poster={recasa.poster}
                  label={recasa.alt}
                  className="h-[88%] w-auto rounded-[1.1rem] shadow-[0_24px_48px_-20px_rgba(80,40,20,0.45)] ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="flex flex-col p-7 md:p-10">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-semibold">{recasa.name}</h3>
                <ArrowUpRight className="h-5 w-5 text-paper/40 transition-colors group-hover:text-signal" />
              </div>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-paper/65">{recasa.description}</p>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-paper/10 pt-6">
                {recasa.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl font-semibold tracking-tight text-paper">{stat.value}</dd>
                    <dd className="mt-1 text-sm text-paper/50">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
