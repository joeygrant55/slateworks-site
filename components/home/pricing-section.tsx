"use client";

import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const plans = [
  {
    name: "Eval",
    price: "$1,500",
    period: "one-time",
    description: "Systems Fit Review",
    features: [
      "Full audit of your current software stack",
      "Identify your highest-leverage workflow to automate",
      "Written recommendation with scope and timeline",
      "Credited toward your build",
    ],
    cta: "Book a Fit Call",
    href: "https://calendar.app.google/tmqjWSF6oDNjkZ5r8",
    highlight: false,
  },
  {
    name: "Build",
    price: "$3,000",
    period: "one-time",
    description: "Eval + Build",
    features: [
      "Everything in Eval",
      "Custom system built in 2–3 weeks",
      "Deployed and live",
      "30 days of support included",
    ],
    cta: "Get Started",
    href: "https://calendar.app.google/tmqjWSF6oDNjkZ5r8",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Ongoing",
    price: "$3,000",
    period: "per month",
    description: "Support + Roadmap",
    features: [
      "Monthly iteration and improvements",
      "Priority support",
      "New features and automations each month",
      "Cancel anytime",
    ],
    cta: "Let's Talk",
    href: "https://calendar.app.google/tmqjWSF6oDNjkZ5r8",
    highlight: false,
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
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Pricing</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Simple, transparent pricing.</h2>
          <p className="mt-4 text-lg text-neutral-dark">
            One focused system per engagement. No retainer surprises.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-secondary bg-secondary/5"
                  : "border-neutral/10 bg-white/[0.02]"
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
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-neutral">{plan.price}</span>
                  <span className="text-sm text-neutral-dark">{plan.period}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-dark">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-sm text-neutral-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-6 py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  plan.highlight
                    ? "bg-secondary text-black hover:bg-secondary-light"
                    : "border border-secondary/40 text-secondary hover:border-secondary hover:bg-secondary/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
