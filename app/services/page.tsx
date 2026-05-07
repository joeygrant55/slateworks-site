import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Zap, Globe, Workflow, Smartphone, TrendingUp, Clock, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Slateworks",
  description: "We find the profit hiding in your broken processes, then build software to capture it. Launch in weeks, not months.",
};

const plans = [
  {
    name: "Launch",
    subtitle: "One focused system, live in 2–3 weeks",
    highlight: true,
    badge: "Best Place to Start",
    cta: "Book a fit call",
    features: [
      "Systems Fit Review — we map your biggest leak",
      "Custom build — software to capture it",
      "One focused system (website, app, integration, or automation)",
      "30 days post-launch support included",
    ],
  },
  {
    name: "Support",
    subtitle: "Keep it running, keep it stable",
    cta: "Talk about support",
    features: [
      "Hosting, monitoring, and maintenance",
      "Bug fixes and security updates",
      "Reliable help when something breaks",
      "Ideal when you want stability without ongoing build work",
    ],
  },
  {
    name: "Growth",
    subtitle: "Support plus continuous improvement",
    cta: "Talk about partnership",
    features: [
      "Everything in Support",
      "Ongoing roadmap and priority planning",
      "Continuous feature additions and workflow improvements",
      "Best when you want the system improving continuously",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Find the Leak",
    description: "We evaluate your process end-to-end. Where is time being wasted? Where is revenue slipping away?",
    icon: TrendingUp,
  },
  {
    step: "02",
    title: "Map the Fix",
    description: "We scope the simplest software that captures the lost profit. No bloated builds. Just the fix you need.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Build & Ship",
    description: "We build custom software in 2–3 weeks. You review, we refine, then it goes live.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Capture Profit",
    description: "The system runs. You save time, reduce waste, and often discover new revenue channels you didn't know existed.",
    icon: DollarSign,
  },
];

const capabilities = [
  {
    title: "Websites & Landing Pages",
    description: "Fast, modern sites that convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "Web Applications",
    description: "Internal tools, dashboards, and workflow systems that replace spreadsheets and manual work.",
    icon: Workflow,
  },
  {
    title: "Integrations & Automations",
    description: "Connect your tools, eliminate repetitive tasks, and let software handle the busywork.",
    icon: Zap,
  },
  {
    title: "Mobile Apps",
    description: "iOS and Android apps when your team or customers need access on the go.",
    icon: Smartphone,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Services
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Your business is leaking profit.
            <br />
            <span className="text-amber-400">Let's find it.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            Every business has broken processes that waste time and bleed revenue. We evaluate the leak, build software to capture it, and turn waste into profit.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-8 py-4 font-semibold text-black transition-all hover:bg-amber-300"
            >
              Find Your Fit
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/work/profluence"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              See How We Drive Partnerships
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">From broken process to profit center</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              We don't just build software. We find where your business is losing money, then we build the fix.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-amber-400/30 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10">
                  <item.icon className="h-5 w-5 text-amber-400" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-400">{item.step}</p>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">What We Build</span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Software that captures profit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              We don't do everything. We do what moves the needle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="flex gap-6 rounded-xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-amber-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10">
                  <cap.icon className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Engagements</span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Three ways to work together.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Start with one focused system. Then choose how you want to maintain and grow it. Investment scales with scope — we'll talk it through on a fit call.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  plan.highlight
                    ? "border-amber-400/40 bg-white/[0.04] shadow-lg shadow-amber-400/10"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-black">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-400">{plan.name}</p>
                  <p className="mt-3 text-2xl font-bold leading-tight">{plan.subtitle}</p>
                  <p className="mt-3 text-sm text-white/50">Investment depends on scope</p>
                </div>

                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/slateworks/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-amber-400 text-black hover:bg-amber-300"
                      : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Proof */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Proof</span>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">Profluence: From broken intake to profit center</h2>
              <p className="mt-4 text-white/60">
                Profluence's team was manually reviewing every founder deck by email. We evaluated the process, built a custom intake system, and turned it into 250+ qualified leads and a new revenue stream.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-amber-400">250+</p>
                  <p className="text-sm text-white/60">Qualified leads</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">Multiple</p>
                  <p className="text-sm text-white/60">Large partnerships closed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">3 weeks</p>
                  <p className="text-sm text-white/60">From kickoff to live</p>
                </div>
              </div>
              <Link
                href="/work/profluence"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                Read the full case study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to find your leak?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            Book a free 15-minute fit call. We'll tell you honestly if we can help — and if we can't, we'll point you toward someone who can.
          </p>
          <a
            href="https://cal.com/slateworks/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-8 py-4 font-semibold text-black transition-all hover:bg-amber-300"
          >
            Book a Free 15-Min Fit Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
