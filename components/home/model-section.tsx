"use client";

import { motion, useInView } from "framer-motion";
import { Bot, Boxes, Gauge, Globe, Plug, Workflow } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Find the leak",
    description: "A quick call to find where your business is quietly losing money or time.",
  },
  {
    number: "02",
    title: "Map it with your team",
    description: "We map the work with your team and find the exact step that's broken.",
  },
  {
    number: "03",
    title: "Build the system",
    description: "One focused build — tool, automation, agent, or dashboard — usually live in 2–3 weeks.",
  },
  {
    number: "04",
    title: "Hand off + level up",
    description: "We hand it over and level your team up to run and extend it — capability, not dependency.",
  },
];

const buildTypes = [
  { icon: <Boxes className="h-4 w-4" />, label: "Internal tools" },
  { icon: <Workflow className="h-4 w-4" />, label: "Automations" },
  { icon: <Bot className="h-4 w-4" />, label: "AI agents" },
  { icon: <Gauge className="h-4 w-4" />, label: "Dashboards" },
  { icon: <Plug className="h-4 w-4" />, label: "Integrations" },
  { icon: <Globe className="h-4 w-4" />, label: "Websites, when they're part of the system" },
];

export default function ModelSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="how-it-works" className="relative bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">How It Works</span>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              How we work with you.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-neutral-dark">
              Senior-level engineering at startup speed, without the agency overhead. We find the leak, map the
              work with your team, build the smallest system that fixes it, then hand it off and level your
              team up to run it.
            </p>
          </motion.div>

          {/* Vertical numbered list */}
          <div className="border-l border-neutral/10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative pb-12 pl-8 last:pb-0 md:pl-12"
              >
                <span className="absolute -left-px top-1 h-8 w-px bg-secondary" />
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-bold tabular-nums text-secondary">{step.number}</span>
                  <h3 className="text-xl font-semibold text-neutral md:text-2xl">{step.title}</h3>
                </div>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-dark">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What we build — inline tag strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 rounded-2xl border border-neutral/10 bg-neutral-darker/40 p-7 md:p-8"
          >
            <p className="text-sm text-neutral-dark">
              <span className="font-semibold text-neutral">We&apos;re not married to a tool.</span> We build whatever
              is smallest that fixes the problem:
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {buildTypes.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral/10 bg-black/40 px-4 py-2 text-sm text-neutral-dark"
                >
                  <span className="text-secondary">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
