"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-36" ref={sectionRef}>
      <BackgroundBeams className="pointer-events-none opacity-40" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-4xl font-bold md:text-6xl"
          >
            Have something that needs building?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-10 max-w-xl text-lg text-neutral-dark md:text-xl"
          >
            Tell us what you need. We will scope it, plan it, and give you a proposal within 48 hours. No commitment required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group relative z-20 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-lg font-bold text-black shadow-lg shadow-secondary/25 transition-all duration-300 hover:scale-105 hover:bg-secondary-light hover:shadow-xl hover:shadow-secondary/30"
            >
              Let&apos;s Talk
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-neutral/20 px-8 py-4 text-lg font-medium text-neutral transition-all duration-300 hover:border-secondary/40 hover:text-secondary"
            >
              Read Our Blog
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
