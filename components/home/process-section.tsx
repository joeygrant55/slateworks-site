"use client";

import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const steps = [
    { number: "01", title: "Discovery", description: "We dive deep to understand your business, users, and objectives to lay the foundation for success." },
    { number: "02", title: "Strategy & Design", description: "We craft a strategic plan and create designs that align with your goals and appeal to your audience." },
    { number: "03", title: "Development", description: "Our engineers bring designs to life with clean, efficient code and cutting-edge technologies." },
    { number: "04", title: "Launch & Support", description: "We ensure a smooth deployment and provide ongoing support to help your product thrive." },
  ];

  return (
    <section className="bg-black py-20 text-neutral md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto mb-16 max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Process</span>
          <h2 className="mt-3 mb-6 text-3xl font-bold md:text-4xl">How we bring your vision to life</h2>
          <p className="text-lg text-neutral-dark">Our structured approach ensures we deliver solutions that meet your business goals while exceeding user expectations.</p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
              <div className="rounded-sm border border-neutral/10 bg-neutral-darker p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-secondary/10"><span className="text-2xl font-bold text-secondary">{step.number}</span></div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-neutral-dark">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 translate-x-1/2 md:block">
                  <ChevronRight className="h-6 w-6 text-secondary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <a href="#contact" className="rounded-sm bg-secondary px-8 py-3 font-medium text-black transition-colors hover:bg-secondary-light">Start your project</a>
        </motion.div>
      </div>
    </section>
  );
}
