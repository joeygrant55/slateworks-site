"use client";

import { motion, useInView } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  FileText,
  GitBranch,
  Inbox,
  LifeBuoy,
  RotateCw,
  Sparkles,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const stages = [
  { icon: <Activity className="h-5 w-5" />, label: "Signal", blurb: "Something happens worth noticing." },
  { icon: <GitBranch className="h-5 w-5" />, label: "Decision", blurb: "Logic decides what it means." },
  { icon: <Zap className="h-5 w-5" />, label: "Action", blurb: "The system does the work." },
  { icon: <BarChart3 className="h-5 w-5" />, label: "Measurement", blurb: "You see what actually happened." },
  { icon: <Sparkles className="h-5 w-5" />, label: "Learning", blurb: "The loop gets smarter." },
  { icon: <TrendingUp className="h-5 w-5" />, label: "Better Action", blurb: "Next time, it does better." },
];

const exampleLoops = [
  { icon: <Inbox className="h-4 w-4" />, title: "Lead intake" },
  { icon: <LifeBuoy className="h-4 w-4" />, title: "Customer support" },
  { icon: <UserCheck className="h-4 w-4" />, title: "Founder escalation" },
  { icon: <Zap className="h-4 w-4" />, title: "Sales enablement" },
  { icon: <RotateCw className="h-4 w-4" />, title: "Stale-product support" },
  { icon: <FileText className="h-4 w-4" />, title: "Content-to-leads" },
];

export default function LoopMapSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="the-loop"
      className="relative overflow-hidden border-y border-neutral/10 bg-neutral-darker/30 py-24 text-neutral md:py-36"
      ref={sectionRef}
    >
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.04] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">The Loop</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            What a managed loop looks like.
          </h2>
          <p className="mt-5 text-lg text-neutral-dark">
            Every loop we build runs the same circuit. The last step feeds the first — so the system doesn&apos;t
            just run, it improves.
          </p>
        </motion.div>

        {/* The circuit */}
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex flex-col items-center gap-3 md:flex-1 md:flex-row">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: 0.1 * i }}
                  className="group w-full rounded-2xl border border-neutral/10 bg-black/60 p-5 text-center backdrop-blur-sm transition-colors hover:border-secondary/30"
                >
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    {stage.icon}
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral">{stage.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-dark">{stage.blurb}</p>
                </motion.div>

                {i < stages.length - 1 && (
                  <ArrowRight className="h-5 w-5 shrink-0 rotate-90 text-neutral-dark/50 md:rotate-0" />
                )}
              </div>
            ))}
          </div>

          {/* Loops back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-neutral-dark"
          >
            <RotateCw className="h-4 w-4 text-secondary" />
            <span>
              …and <span className="text-neutral">Better Action</span> becomes the next{" "}
              <span className="text-neutral">Signal</span>. That&apos;s the loop.
            </span>
          </motion.div>
        </div>

        {/* Example loops — compact pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-dark/70">
            Loops we manage
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {exampleLoops.map((loop) => (
              <span
                key={loop.title}
                className="inline-flex items-center gap-2 rounded-full border border-neutral/10 bg-black/50 px-4 py-2 text-sm text-neutral-dark transition-colors hover:border-secondary/30 hover:text-neutral"
              >
                <span className="text-secondary">{loop.icon}</span>
                {loop.title}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
