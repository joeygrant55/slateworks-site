"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

const plans = [
  {
    name: "Launch",
    subtitle: "One system, built and live in 2–3 weeks",
    features: [
      "We map the biggest leak and the system that fixes it",
      "Build, deploy, and go live",
      "One focused system — tool, automation, agent, or dashboard",
      "Handover walkthroughs so your team can run it",
    ],
    highlight: true,
    badge: "Best Place to Start",
    cta: "Book a fit call",
  },
  {
    name: "Support",
    subtitle: "Keep it running",
    features: [
      "Hosting, monitoring, and maintenance",
      "Bug fixes and ongoing support",
      "Reliable help when something breaks",
      "Ideal if you want it stable without ongoing build work",
    ],
    cta: "Talk about support",
  },
  {
    name: "Growth",
    subtitle: "Your fractional AI team",
    features: [
      "Everything in Support",
      "Builds always in flight — tools, automations, AI agents",
      "Monthly working sessions that level up your team",
      "Runbooks and walkthroughs for everything we ship",
    ],
    cta: "Talk about partnership",
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="pricing" className="relative bg-black py-24 md:py-32" ref={sectionRef}>
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Engagements</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">Three ways to work together.</h2>
          <p className="mt-5 text-lg text-neutral-dark">
            Start by fixing one system. Then choose how you want to keep building and leveling up your team. Investment scales with scope — we'll talk it through on a fit call.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative flex flex-col rounded-lg border p-8 ${
                plan.highlight
                  ? "border-secondary/40 bg-neutral-darker shadow-lg shadow-secondary/10"
                  : "border-neutral/10 bg-neutral-darker/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-secondary px-4 py-1 text-xs font-bold text-black">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary">{plan.name}</p>
                <p className="mt-3 text-2xl font-bold leading-tight text-neutral">{plan.subtitle}</p>
                <p className="mt-3 text-sm text-neutral-dark/80">Investment depends on scope</p>
              </div>

              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-sm text-neutral-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/slateworks/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-secondary text-black hover:bg-secondary/90"
                    : "border border-neutral/20 text-neutral hover:border-neutral/40 hover:bg-white/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-2xl text-center text-sm text-neutral-dark"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Not sure where to start? Ask about the two-week AI Opportunity Sprint — we map your biggest leaks, ship one quick win live, and hand you a costed roadmap. And if our fit call doesn't surface a clear path to ROI, we'll tell you honestly — no pitch, no pressure.
        </motion.p>
      </div>
    </section>
  );
}
