"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  { title: "Not yet", description: "If it still changes weekly, we stabilize it before we wire it shut." },
  { title: "A handoff", description: "Often the fix isn't a bot — it's the gap where context goes to die." },
  { title: "A dashboard", description: "When nobody can see what's happening, visibility is the system." },
  { title: "A human", description: "Judgment calls stay with people. We automate the path to the decision." },
];

export default function NoAutomateSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="what-we-dont-automate"
      className="border-y border-neutral/10 bg-neutral-darker/30 py-20 text-neutral md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            We don&apos;t automate the mess blindly.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-dark">
            Automating a broken process just makes broken happen faster. Some workflows need something else first —
            and <span className="font-semibold text-neutral">Slateworks maps the problem before choosing the tool.</span>
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="border-t border-secondary/30 pt-4"
            >
              <h3 className="text-sm font-semibold text-neutral">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-dark">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
