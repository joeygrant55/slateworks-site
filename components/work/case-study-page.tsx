"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudyData {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  challenge: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  projectUrl?: string;
  platform?: string;
  price?: string;
  heroImage: string;
  heroOverlayClassName: string;
}

interface CaseStudyPageProps {
  data: CaseStudyData;
}

export default function CaseStudyPage({ data }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen bg-black text-neutral">
      <section className="relative overflow-hidden border-b border-neutral/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className={`absolute inset-0 ${data.heroOverlayClassName}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_45%)]" />

        <div className="container relative z-10 mx-auto px-4 pb-20 pt-28 md:pb-28 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral/80 transition-colors hover:text-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {data.category}
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-dark md:text-xl">
              {data.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-sm border border-neutral/20 bg-black/60 px-4 py-2 text-sm text-neutral">
                Timeline: {data.timeline}
              </span>
              {data.platform && (
                <span className="rounded-sm border border-neutral/20 bg-black/60 px-4 py-2 text-sm text-neutral">
                  Platform: {data.platform}
                </span>
              )}
              {data.price && (
                <span className="rounded-sm border border-neutral/20 bg-black/60 px-4 py-2 text-sm text-neutral">
                  Price: {data.price}
                </span>
              )}
              {data.projectUrl && (
                <a
                  href={data.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm bg-secondary px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-secondary-light"
                >
                  Visit Project
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border border-neutral/10 bg-neutral-darker p-6 lg:col-span-8 md:p-8"
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Overview</h2>
            <p className="text-base leading-relaxed text-neutral-dark md:text-lg">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-sm border border-neutral/10 bg-neutral-darker p-6 lg:col-span-4 md:p-8"
          >
            <h2 className="mb-4 text-2xl font-bold">Tech Stack</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {data.techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-sm border border-neutral/10 bg-black px-4 py-3 text-sm text-neutral-dark"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border border-neutral/10 bg-neutral-darker p-6 md:p-8"
          >
            <h3 className="mb-4 text-xl font-bold text-secondary md:text-2xl">Challenge</h3>
            <p className="leading-relaxed text-neutral-dark">{data.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-sm border border-neutral/10 bg-neutral-darker p-6 md:p-8"
          >
            <h3 className="mb-4 text-xl font-bold text-secondary md:text-2xl">Solution</h3>
            <p className="leading-relaxed text-neutral-dark">{data.solution}</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-sm border border-neutral/10 bg-neutral-darker p-6 md:p-8"
        >
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">Key Features</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {data.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="rounded-sm border border-neutral/10 bg-black px-4 py-3 text-neutral-dark"
              >
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="border-t border-neutral/10 bg-neutral-darker/40 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Ready to build your next product?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-neutral-dark"
          >
            Let&apos;s design, build, and launch an AI-powered product for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-secondary px-6 py-3 font-semibold text-black transition-colors hover:bg-secondary-light"
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
