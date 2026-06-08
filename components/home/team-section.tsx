"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="team" className="bg-black py-20 text-neutral md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-start gap-6 rounded-2xl border border-neutral/10 bg-neutral-darker/40 p-8 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">The Team</span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              Built by Joey Grant and a team of AI agents.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-dark">
              Fiesta Bowl champion turned tech founder, $2M+ in revenue contracts generated. Joey designed the
              agents, trained them on real product delivery, and points them at problems worth solving — senior-level
              engineering at startup speed, without the agency overhead.
            </p>
          </div>

          <Link
            href="/about"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral/15 px-6 py-3 font-semibold text-neutral transition-colors hover:border-secondary/40 hover:text-secondary"
          >
            Meet the team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
