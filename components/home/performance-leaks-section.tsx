"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Gauge, LifeBuoy, Repeat2, UserRound } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const leakTypes = [
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Conversion leaks",
    description: "Leads raise their hand, then context, ownership, or follow-up disappears between tools.",
  },
  {
    icon: <LifeBuoy className="h-5 w-5" />,
    title: "Support leaks",
    description: "Customers repeat themselves because context is scattered and recurring issues never become systems.",
  },
  {
    icon: <UserRound className="h-5 w-5" />,
    title: "Founder-time leaks",
    description: "Every exception escalates to the same person because the operating logic still lives in their head.",
  },
  {
    icon: <Repeat2 className="h-5 w-5" />,
    title: "Aging-product leaks",
    description: "The product still creates value, but the team, documentation, or automation around it has moved on.",
  },
];

export default function PerformanceLeaksSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section id="performance-leaks" className="relative overflow-hidden bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">The Slateworks Operator</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Find where performance leaks out of the business.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-dark">
              Automation is useful when it captures something that is already escaping: conversion, support quality,
              founder attention, output, or the value trapped inside an aging system.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-dark/90">
              We map the leak first, then build the smallest useful system to plug it. Sometimes that is AI.
              Sometimes it is a better handoff, dashboard, integration, or internal tool. The point is not novelty.
              The point is captured performance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/blog/what-is-a-performance-leak"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-amber-300"
              >
                Read the field note
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://calendar.app.google/XWTydYq9gFKd8fv3A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral/20 px-6 py-3 text-sm font-semibold text-neutral transition-all hover:border-secondary/40 hover:text-secondary"
              >
                Map your leak
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {leakTypes.map((leak, index) => (
              <motion.div
                key={leak.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-neutral-950/80 p-6 shadow-2xl shadow-black/20"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                  {leak.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral">{leak.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-dark">{leak.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
