"use client";

import { motion, useInView } from "framer-motion";
import { Users, PlayCircle, Rocket } from "lucide-react";
import { useRef } from "react";

const points = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Build with, not just for",
    description: "We work alongside your team while we build, so the knowledge transfers as we go.",
  },
  {
    icon: <PlayCircle className="h-5 w-5" />,
    title: "A handover that sticks",
    description: "Walkthroughs, a plain-English runbook, and a live working session — so your team owns it.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Run and extend it yourself",
    description: "When we're done, your people can run it, extend it, and keep building — without us.",
  },
];

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="the-difference"
      className="relative overflow-hidden border-y border-neutral/10 bg-neutral-darker/30 py-24 text-neutral md:py-32"
      ref={sectionRef}
    >
      <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-secondary/[0.05] blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">The Difference</span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Most shops build for you and leave.
            <br className="hidden sm:block" />{" "}
            <span className="text-secondary">We build with your team</span> — and leave them able to keep going.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-dark">
            You don&apos;t just get software. You get the capability to run it, extend it, and keep building — so the
            system makes your team stronger instead of more dependent on an agency.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-2xl border border-neutral/10 bg-black/50 p-7"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-dark">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
