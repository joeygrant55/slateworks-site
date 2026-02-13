"use client";

import { motion, useInView } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { useRef, useState } from "react";

const feedbackImage = "/attached_assets/CleanShot 2025-06-24 at 23.08.12_1750820903670.png";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <section className="bg-black py-20 text-neutral md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">What Clients Say</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Real feedback. Real results.</h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-lg border border-neutral/10 bg-neutral-darker/50 p-8 md:p-12">
            {/* Quote mark */}
            <MessageSquare className="absolute right-6 top-6 h-16 w-16 text-secondary/10" />

            {/* Stars */}
            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mb-8 text-xl leading-relaxed text-neutral md:text-2xl">
              &ldquo;Slateworks is amazing. We went from idea and concept to, in days, having a fully working MVP that we tested with 10 customers to get immediate feedback.&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-amber-600 text-lg font-bold text-black">
                JR
              </div>
              <div>
                <p className="font-bold text-neutral">Jordan Rudd</p>
                <p className="text-sm text-neutral-dark">Founder, Sparked Digital</p>
              </div>
            </div>

            {/* Detailed feedback toggle */}
            <button
              onClick={() => setShowFeedback(!showFeedback)}
              className="mt-6 text-sm font-medium text-secondary transition-colors hover:text-secondary-light"
            >
              {showFeedback ? "Hide detailed feedback" : "See detailed feedback"}
            </button>

            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 overflow-hidden rounded-lg border border-neutral/10"
              >
                <img src={feedbackImage} alt="Detailed client feedback" className="w-full" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Social proof hint */}
        <motion.p
          className="mt-8 text-center text-sm text-neutral-dark"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          More testimonials coming as we ship more projects. We let the work speak first.
        </motion.p>
      </div>
    </section>
  );
}
