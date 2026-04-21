"use client";

import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const plans = [
  {
    name: "Launch",
    price: "$3,000 total",
    description: "Two clear tranches to get your first system live",
    features: [
      "$1,500 Eval — Systems Fit Review and implementation plan",
      "$1,500 Launch — Build, deploy, and go live",
      "One focused internal system built in 2–3 weeks",
      "30 days of post-launch support included",
    ],
    highlight: true,
    badge: "Best Place to Start",
  },
  {
    name: "Support",
    price: "$1,500/mo",
    description: "Keep it running smoothly",
    features: [
      "Hosting, monitoring, and maintenance",
      "Bug fixes and ongoing support",
      "Reliable help when something breaks",
      "Ideal if you want stability without ongoing build work",
    ],
  },
  {
    name: "Growth",
    price: "$3,000/mo",
    description: "Support plus continued building",
    features: [
      "Everything in Support",
      "Ongoing roadmap and priority planning",
      "1–2 feature additions or workflow improvements per month",
      "Best fit when you want the system improving continuously",
    ],
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
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Pricing</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Simple pricing. Clear upgrade path.</h2>
          <p className="mt-4 text-lg text-neutral-dark">
            Start with one focused system. Then choose whether you want ongoing support only, or support plus continued feature development.
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
                <span className="mt-2 block text-4xl font-black text-neutral">{plan.price}</span>
                <p className="mt-1 text-sm text-neutral-dark">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span className="text-sm text-neutral-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-2xl text-center text-sm text-neutral-dark"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          If our fit call doesn't surface a clear path to ROI, we'll tell you honestly — no pitch, no pressure.
        </motion.p>
      </div>
    </section>
  );
}
