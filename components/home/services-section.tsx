"use client";

import { motion, useInView } from "framer-motion";
import { Bot, Boxes, Gauge, Globe, Plug, Workflow } from "lucide-react";
import { useRef } from "react";

const buildTypes = [
  {
    icon: <Boxes className="h-6 w-6" />,
    title: "Internal tools",
    description: "Custom apps that replace the spreadsheet quietly running your business.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Automations",
    description: "The repetitive work that should just happen — without anyone remembering to do it.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI agents",
    description: "Judgment-shaped work — triage, drafting, qualification — handled at machine speed.",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Dashboards",
    description: "Make the loop visible so you can actually manage it, not just hope it's working.",
  },
  {
    icon: <Plug className="h-6 w-6" />,
    title: "Integrations",
    description: "Close the gaps between tools where context, ownership, and follow-up go missing.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Websites",
    description: "Only when the site is part of the loop — capturing, converting, or qualifying.",
  },
];

export default function WhatWeBuildSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="what-we-build" className="bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">What We Build</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">Whatever closes the loop.</h2>
          <p className="mt-4 text-lg text-neutral-dark">
            We&apos;re not married to a tool. We pick the smallest build that closes the loop and keeps it running.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {buildTypes.map((build) => (
            <motion.div variants={item} key={build.title}>
              <div className="h-full rounded-2xl border border-white/10 bg-neutral-darker/50 p-6 transition-all hover:border-secondary/30">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
                  {build.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral">{build.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-dark">{build.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
