"use client";

import { motion, useInView } from "framer-motion";
import { FileStack, Gauge, LifeBuoy, Repeat2, UserRound } from "lucide-react";
import { useRef } from "react";

const leaks = [
  { icon: <Gauge className="h-4 w-4" />, title: "Conversion leaks", description: "Leads raise their hand, then context, ownership, or follow-up disappears between tools." },
  { icon: <LifeBuoy className="h-4 w-4" />, title: "Support leaks", description: "Customers repeat themselves because context is scattered and recurring issues never become systems." },
  { icon: <UserRound className="h-4 w-4" />, title: "Founder-time leaks", description: "Every exception escalates to the same person because the operating logic still lives in their head." },
  { icon: <FileStack className="h-4 w-4" />, title: "Output leaks", description: "Work that should generate itself — reports, summaries, follow-ups — still gets done by hand." },
  { icon: <Repeat2 className="h-4 w-4" />, title: "Stale product & data leaks", description: "The product still creates value, but the team, docs, and automation around it have moved on." },
];

export default function LoopThesisSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section id="the-leak" className="relative overflow-hidden bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">The Problem</span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
              Where your business is<br className="hidden sm:block" /> leaking profit.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-dark">
              The lead that goes cold. The ticket that bounces. The report someone rebuilds by hand every week.
              Small leaks, but they repeat — and they add up to real money and real time.
            </p>
            <p className="mt-6 max-w-md text-lg font-medium leading-snug text-neutral">
              We find the biggest one first, then build the system that{" "}
              <span className="text-secondary">closes it for good</span>.
            </p>
          </motion.div>

          {/* Leak inventory — compact list, not cards */}
          <div className="flex flex-col">
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-dark/70">
              Where it leaks
            </span>
            {leaks.map((leak, i) => (
              <motion.div
                key={leak.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.45, delay: 0.08 * i }}
                className="flex items-start gap-4 border-b border-neutral/10 py-5 last:border-b-0"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  {leak.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral">{leak.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-dark">{leak.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
