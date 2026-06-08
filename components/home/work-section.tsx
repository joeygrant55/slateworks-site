"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const metrics = [
  { value: "250+", label: "Qualified leads captured" },
  { value: "Partner", label: "Pipeline created" },
  { value: "3 weeks", label: "From kickoff to live" },
];

const moreWork = [
  { type: "Landing Page", title: "SPARQ Certified", href: "/work/sparq-certified" },
  { type: "AI Diagnostic Tool", title: "Sparked Inbound", href: "/work/sparked-inbound" },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section id="work" className="bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left — the story */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Proof</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              A broken intake loop,<br className="hidden sm:block" /> turned into a partnership engine.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-dark">
              Profluence&apos;s founder decks came in, but qualification, routing, and follow-up were all manual.
              We mapped the intake loop and built the system that closed it — capturing qualified leads, surfacing
              the strongest founders, and opening a new revenue motion off the same data.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold text-secondary md:text-3xl">{m.value}</p>
                  <p className="mt-1 text-xs leading-snug text-neutral-dark">{m.label}</p>
                </div>
              ))}
            </div>

            <figure className="mt-8 border-l-2 border-secondary/40 pl-5">
              <blockquote className="text-base italic leading-relaxed text-neutral">
                &ldquo;Slateworks is amazing. We went from idea and concept to, in days, having a fully working MVP
                that we tested with 10 customers to get immediate feedback.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-neutral-dark">
                <span className="font-semibold text-neutral">Andrew Petcash</span> — Founder &amp; CEO, Profluence
              </figcaption>
            </figure>

            <Link
              href="/work/profluence"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-secondary transition-colors hover:text-secondary-light"
            >
              Read the full case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right — visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-secondary/[0.05] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-neutral/10 shadow-2xl shadow-black/40">
              <img
                src="/images/profluence-hero.jpg"
                alt="Profluence intake system built by Slateworks"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* More work — slim row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-t border-neutral/10 pt-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-dark/70">More work</span>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              {moreWork.map((w) => (
                <Link
                  key={w.title}
                  href={w.href}
                  className="group inline-flex items-center gap-3 rounded-full border border-neutral/10 px-5 py-2.5 transition-colors hover:border-secondary/30"
                >
                  <span className="text-xs uppercase tracking-wider text-neutral-dark/70">{w.type}</span>
                  <span className="font-semibold text-neutral">{w.title}</span>
                  <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
