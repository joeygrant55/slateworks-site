import Link from "next/link";
import { ArrowRight } from "lucide-react";

const shipLog = [
  { value: "21 days", label: "Recasa — first commit to a live, paying App Store product" },
  { value: "1M+ views", label: "Saintlings — first 60 days, from an AI-run content system" },
  { value: "3 platforms", label: "Profluence — media, advisory, and venture fund, all built here" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,var(--color-rule)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
          <span className="text-signal">●</span>&nbsp; AI engineering studio · St. Petersburg, FL
        </p>

        <h1 className="mt-6 max-w-4xl text-[2.6rem] font-semibold leading-[1.02] text-ink sm:text-6xl md:text-7xl">
          Senior AI engineering for teams that can&apos;t afford to get it wrong.
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_26rem] lg:items-start">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              We design, build, and ship AI products and systems — for companies directly, and for the firms that
              sell builds under their own name. Then we hand over the keys.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-signal"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#studio"
                className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3.5 font-medium text-ink transition-colors hover:border-ink"
              >
                See what we&apos;ve shipped
              </Link>
            </div>
          </div>

          <div className="rounded-xl bg-ink p-6 text-paper shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
              <span>Ship log</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
                live
              </span>
            </div>
            <ul className="mt-5 divide-y divide-paper/10">
              {shipLog.map((item) => (
                <li key={item.value} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-display text-2xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-1 text-sm leading-snug text-paper/60">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
