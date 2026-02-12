"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Rocket, Sparkles } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickStart = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-32" ref={sectionRef}>
      <BackgroundBeams className="opacity-50" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral/30 bg-gradient-to-r from-neutral/20 to-secondary/20 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm text-neutral">Limited Spots Available</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl"
          >
            <span className="text-neutral">Ready to </span>
            <span className="bg-gradient-to-r from-neutral via-secondary to-neutral bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              Build Something Amazing?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-neutral-dark md:text-2xl"
          >
            Join forward-thinking companies who trust us to transform their digital presence.
            Get your free project assessment today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 flex flex-wrap justify-center gap-6"
          >
            {[
              "Free Consultation",
              "Custom Proposal in 48h",
              "No Commitment",
            ].map((benefit) => (
              <div className="flex items-center gap-2" key={benefit}>
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-neutral-dark">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onSubmit={handleQuickStart}
            className="mx-auto max-w-md"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1 rounded-md border border-neutral/30 bg-neutral-darker/50 px-4 text-neutral placeholder:text-neutral-dark focus:border-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-secondary to-secondary/80 px-8 font-semibold text-black transition-all duration-300 hover:from-secondary/90 hover:to-secondary/70"
              >
                Get Started
                <Rocket className="ml-2 h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs text-neutral-dark">We respect your privacy. Unsubscribe at any time.</p>
            {submitted && (
              <p className="mt-2 text-sm text-secondary">Thanks. We&apos;ll reach out shortly.</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 text-neutral transition-colors hover:text-secondary">
              <span>Prefer to talk? Schedule a call</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 border-t border-neutral/10 pt-8"
          >
            <p className="mb-4 text-sm text-neutral-dark">Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              <span className="font-semibold text-neutral">ProFluence</span>
              <span className="font-semibold text-neutral">Emmi Kay</span>
              <span className="font-semibold text-neutral">TechVentures</span>
              <span className="font-semibold text-neutral">DigitalFirst</span>
              <span className="font-semibold text-neutral">NextGen Labs</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
