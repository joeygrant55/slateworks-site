import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClosingCta from "@/components/studio/closing-cta";
import PageIntro from "@/components/studio/page-intro";
import Reveal from "@/components/studio/reveal";
import SectionLabel from "@/components/studio/section-label";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";
import Studio from "@/components/studio/studio";
import { BuildCard } from "@/components/studio/work";
import { clientBuilds, experiments } from "@/lib/work";

export const metadata = {
  title: "Work — Slateworks",
  description:
    "Products and platforms Slateworks has designed, built, and shipped — for clients and for our own studio.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        label="Work"
        title="Shipped, live, and in use."
        lede="Client platforms, our own studio apps, and the experiments that taught us how to build both."
      />

      <section className="border-b border-rule py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionLabel index="01">Client work</SectionLabel>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {clientBuilds.map((build, i) => (
              <Reveal key={build.name} delay={(i % 2) * 0.1}>
                <BuildCard build={build} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Studio index="02" />

      <section className="border-b border-rule py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionLabel index="03">Experiments</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            Earlier builds from the studio bench.
          </h2>
          <ul className="mt-12 border-t border-ink">
            {experiments.map((item) => (
              <li key={item.name} className="border-b border-rule">
                <Link href={item.href} className="group flex items-center justify-between gap-6 py-6">
                  <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="text-xl font-semibold text-ink md:text-2xl">{item.name}</span>
                    <span className="text-ink-muted">{item.kind}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-ink-muted transition-all group-hover:translate-x-1 group-hover:text-signal" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
