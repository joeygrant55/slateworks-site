"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import LoopVisual from "@/components/ui/loop-visual";
import { analyticsEvents, trackEvent } from "@/lib/analytics-events";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-neutral">
      <Spotlight className="-top-40 left-0 opacity-20 md:-top-20 md:left-60" fill="#d4af37" />

      <div className="container relative z-10 mx-auto px-4 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-secondary"
            >
              Managed Operating Loops
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-balance text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
            >
              There&apos;s profit hiding in your business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-dark md:text-xl"
            >
              In the manual work, the scattered spreadsheets, the handoffs that quietly drop. Slateworks finds
              the biggest performance leak, then turns it into a managed operating loop — a system that captures
              the value and keeps improving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="https://calendar.app.google/XWTydYq9gFKd8fv3A"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(analyticsEvents.ctaClick, {
                    location: "hero",
                    label: "Book a Free 15-Min Fit Call",
                    destination: "google_calendar",
                  })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-center font-semibold text-black transition-all duration-300 hover:bg-secondary-light"
              >
                Book a Free 15-Min Fit Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-neutral/15 px-7 py-3.5 text-center font-semibold text-neutral transition-all duration-300 hover:border-neutral/30 hover:bg-white/5"
              >
                See how it works
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <LoopVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
