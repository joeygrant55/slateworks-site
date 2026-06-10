"use client";

import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import LeadCaptureForm from "@/components/home/lead-capture-form";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      <BackgroundBeams className="pointer-events-none opacity-25" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Start Here</span>
              <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Bring us one broken handoff.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-dark">
                Book a free 15-minute fit call. We&apos;ll map the problem behind it, show you where the value is
                leaking, and tell you exactly what we&apos;d build to fix it. No commitment required.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <img
                  src="/images/joey.jpg"
                  alt="Joey Grant"
                  className="h-12 w-12 rounded-full border border-secondary/30 object-cover"
                />
                <p className="text-sm text-neutral-dark">
                  <span className="font-semibold text-neutral">Joey Grant, founder.</span>
                  <br />
                  You&apos;ll get a reply from me, not a funnel.
                </p>
              </div>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral/10 bg-neutral-darker">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="text-neutral-dark">St. Petersburg, FL</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral/10 bg-neutral-darker">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <a href="mailto:joey@slateworks.io" className="text-neutral-dark transition-colors hover:text-neutral">joey@slateworks.io</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral/10 bg-neutral-darker">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <a href="tel:+17272666378" className="text-neutral-dark transition-colors hover:text-neutral">(727) 266-6378</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neutral/20 to-secondary/20 opacity-50 blur-sm" />
              <div className="relative rounded-2xl border border-neutral/20 bg-neutral-darker/30 p-8 backdrop-blur-md">
                <LeadCaptureForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
