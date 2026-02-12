"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageSquare, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  hasDetailedFeedback?: boolean;
}

const feedbackImage = "/attached_assets/CleanShot 2025-06-24 at 23.08.12_1750820903670.png";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetailedFeedback, setShowDetailedFeedback] = useState(false);

  const testimonials: Testimonial[] = [
    {
      content:
        "Slateworks is amazing. We went from idea and concept to, in days, having a fully working MVP that we tested with 10 customers to get immediate feedback.",
      author: "Scott Garber",
      role: "Founder",
      company: "Profluence",
      initials: "SG",
      hasDetailedFeedback: true,
    },
    {
      content:
        "The team's attention to detail and commitment to quality is unmatched. They delivered exactly what we envisioned and more.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow",
      initials: "SJ",
    },
    {
      content:
        "Working with Slate was seamless from start to finish. They understood our business challenges and delivered a solution that streamlined our operations significantly.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "Elevate Fitness",
      initials: "MR",
    },
  ];

  useEffect(() => {
    if (!isInView) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView, testimonials.length]);

  return (
    <section className="bg-black py-20 text-neutral md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto mb-16 max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Testimonials</span>
          <h2 className="mt-3 mb-6 text-3xl font-bold md:text-4xl">What our clients say</h2>
          <p className="text-lg text-neutral-dark">Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with Slate.</p>
        </motion.div>

        <motion.div className="relative mx-auto max-w-4xl" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="border border-neutral/20 bg-neutral-darker/50 p-12 text-center backdrop-blur-md"
              >
                <div className="mb-8 flex justify-center text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>

                <blockquote className="mb-8 text-2xl leading-relaxed font-light italic text-neutral md:text-3xl">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <div className="mr-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                    <span className="text-xl font-bold text-secondary">{testimonials[currentIndex].initials}</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-neutral">{testimonials[currentIndex].author}</h4>
                    <p className="text-neutral-dark">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                    {testimonials[currentIndex].hasDetailedFeedback && (
                      <button onClick={() => setShowDetailedFeedback(true)} className="mt-2 inline-flex items-center text-sm font-medium text-secondary transition-colors hover:text-secondary/80">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        View detailed feedback
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral/20 bg-neutral-darker/80 backdrop-blur-md transition-all duration-300 hover:border-secondary/50 hover:bg-secondary/20">
            <ChevronLeft className="h-6 w-6 text-neutral" />
          </button>

          <button onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)} className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral/20 bg-neutral-darker/80 backdrop-blur-md transition-all duration-300 hover:border-secondary/50 hover:bg-secondary/20">
            <ChevronRight className="h-6 w-6 text-neutral" />
          </button>

          <div className="mt-8 flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? "scale-110 bg-secondary" : "bg-neutral/30 hover:bg-neutral/50"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showDetailedFeedback && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setShowDetailedFeedback(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-neutral/20 bg-neutral-darker p-6" onClick={(e) => e.stopPropagation()}>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral">Detailed Feedback</h3>
                  <p className="text-neutral-dark">From Scott Garber, Founder at Profluence</p>
                </div>
                <button onClick={() => setShowDetailedFeedback(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral/10 transition-colors hover:bg-neutral/20">
                  <X className="h-5 w-5 text-neutral" />
                </button>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border border-neutral/10 bg-neutral-darker/50 p-6">
                  <blockquote className="mb-4 text-lg italic text-neutral">"Slateworks is amazing. We went from idea and concept to, in days, having a fully working MVP that we tested with 10 customers to get immediate feedback."</blockquote>
                </div>
                <div className="overflow-hidden rounded-xl border border-neutral/20 bg-neutral-darker/30">
                  <img src={feedbackImage} alt="Real customer feedback screenshot" className="h-auto w-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
