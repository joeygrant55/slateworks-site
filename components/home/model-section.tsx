"use client";

import { motion, useInView } from "framer-motion";
import { Lightbulb, Bot, Rocket } from "lucide-react";
import { useRef } from "react";

export default function ModelSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      number: "01",
      title: "You bring the idea.",
      description:
        "Tell us what you need. A website, an app, a full product. We listen, we scope it, and we map out exactly what it takes to make it real.",
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      number: "02",
      title: "Agents build it.",
      description:
        "Five specialized AI agents work in parallel. Design, code, infrastructure, content, and strategy. All moving at once, all focused on your project.",
      accent: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      number: "03",
      title: "You ship in days.",
      description:
        "What takes traditional agencies weeks takes us days. Production-quality code, tested and deployed. You go to market while your competitors are still in meetings.",
      accent: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="services" className="relative bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            A different kind of agency.
          </h2>
          <p className="mt-4 text-lg text-neutral-dark">
            We replaced the traditional agency model with something faster, sharper, and built for the way software should be made.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-lg border border-neutral/10 bg-neutral-darker/50 p-8 transition-all duration-500 hover:border-secondary/20">
                {/* Number watermark */}
                <span className="absolute -right-2 -top-4 text-[120px] font-black leading-none text-white/[0.02] transition-all duration-500 group-hover:text-white/[0.04]">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${step.accent} text-white shadow-lg`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-neutral">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-neutral-dark">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting line (desktop only) */}
        <div className="mx-auto mt-8 hidden max-w-3xl md:block">
          <motion.div
            className="h-[2px] w-full bg-gradient-to-r from-amber-500/40 via-blue-500/40 to-emerald-500/40"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
}
