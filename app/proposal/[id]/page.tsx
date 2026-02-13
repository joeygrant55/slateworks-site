"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Download, Rocket, ShieldCheck, Sparkles, Timer } from "lucide-react";

type ProposalPageProps = {
  params: Promise<{ id: string }>;
};

const proposalData = {
  clientName: "Sparked Digital",
  projectName: "Company Website Redesign",
  scope: [
    "Modern responsive website",
    "CMS integration",
    "SEO optimization",
    "Analytics setup",
  ],
  duration: "2 weeks",
  investment: "$3,500",
  phases: [
    { name: "Discovery", duration: "2 days" },
    { name: "Design", duration: "3 days" },
    { name: "Development", duration: "5 days" },
    { name: "Launch", duration: "2 days" },
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export default async function ProposalDetailPage({ params }: ProposalPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-neutral print:bg-white print:text-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,164,92,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(201,164,92,0.08),transparent_40%)] print:hidden" />

      <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12 lg:px-8 print:max-w-none print:px-0 print:py-6">
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-neutral/20 bg-neutral-darker/50 p-6 backdrop-blur-md sm:p-8 print:rounded-none print:border print:border-black/20 print:bg-white print:p-8"
        >
          <header className="flex flex-col gap-6 border-b border-neutral/15 pb-6 sm:flex-row sm:items-center sm:justify-between print:border-black/20">
            <div className="flex items-center gap-4">
              <img
                src="/attached_assets/CleanShot 2025-06-24 at 16.24.44_1750796695356.png"
                alt="Slateworks"
                className="h-10 w-auto"
              />
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-secondary uppercase print:text-black">Slateworks</p>
                <h1 className="text-2xl font-semibold text-white sm:text-3xl print:text-black">Project Proposal</h1>
              </div>
            </div>

            <div className="space-y-2 text-sm text-neutral-dark print:text-black/70">
              <p>
                Prepared for <span className="font-semibold text-neutral print:text-black">{proposalData.clientName}</span>
              </p>
              <p>
                Proposal ID <span className="font-mono text-neutral print:text-black">{id}</span>
              </p>
            </div>
          </header>

          <div className="mt-8 space-y-6 print:space-y-5">
            <motion.section {...fadeInUp}>
              <h2 className="text-lg font-semibold text-secondary print:text-black">Project Overview</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-neutral-dark print:text-black/80">
                We&apos;ll design and develop a conversion-focused digital presence for {proposalData.clientName} through a
                {" "}
                <span className="font-medium text-neutral print:text-black">{proposalData.projectName}</span>. The result is a faster,
                cleaner, and more modern website that clearly communicates your value and supports growth.
              </p>
            </motion.section>

            <motion.section {...fadeInUp}>
              <h2 className="text-lg font-semibold text-secondary print:text-black">Scope &amp; Deliverables</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {proposalData.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-neutral/15 bg-black/40 px-4 py-3 text-neutral-dark print:border-black/15 print:bg-transparent print:text-black/85"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary print:text-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section {...fadeInUp}>
              <h2 className="text-lg font-semibold text-secondary print:text-black">Timeline</h2>
              <div className="mt-4 rounded-xl border border-neutral/15 bg-black/40 p-5 print:border-black/15 print:bg-transparent">
                <div className="mb-4 flex items-center gap-2 text-sm text-neutral-dark print:text-black/70">
                  <Timer className="h-4 w-4 text-secondary print:text-black" />
                  <span>Total timeline: {proposalData.duration}</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {proposalData.phases.map((phase, index) => (
                    <div
                      key={phase.name}
                      className="flex items-center justify-between rounded-lg border border-neutral/15 bg-neutral-darker/50 px-4 py-3 print:border-black/15 print:bg-transparent"
                    >
                      <span className="font-medium text-neutral print:text-black">
                        {index + 1}. {phase.name}
                      </span>
                      <span className="text-sm text-neutral-dark print:text-black/70">{phase.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section {...fadeInUp}>
              <h2 className="text-lg font-semibold text-secondary print:text-black">Investment</h2>
              <div className="mt-4 rounded-xl border border-secondary/35 bg-gradient-to-r from-secondary/10 to-transparent p-6 print:border-black/20 print:bg-transparent">
                <p className="text-sm font-medium tracking-wide text-neutral-dark uppercase print:text-black/70">Standard project tier</p>
                <p className="mt-2 text-3xl font-semibold text-white print:text-black">{proposalData.investment}</p>
                <p className="mt-2 text-neutral-dark print:text-black/75">Includes strategy, design, development, QA, launch support, and handoff.</p>
              </div>
            </motion.section>

            <motion.section {...fadeInUp}>
              <h2 className="text-lg font-semibold text-secondary print:text-black">Why Slateworks</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-neutral/15 bg-black/40 p-4 print:border-black/15 print:bg-transparent">
                  <Sparkles className="h-5 w-5 text-secondary print:text-black" />
                  <p className="mt-3 font-medium text-neutral print:text-black">AI-powered speed</p>
                  <p className="mt-1 text-sm text-neutral-dark print:text-black/75">Streamlined systems that accelerate delivery without quality tradeoffs.</p>
                </div>
                <div className="rounded-xl border border-neutral/15 bg-black/40 p-4 print:border-black/15 print:bg-transparent">
                  <ShieldCheck className="h-5 w-5 text-secondary print:text-black" />
                  <p className="mt-3 font-medium text-neutral print:text-black">Senior talent</p>
                  <p className="mt-1 text-sm text-neutral-dark print:text-black/75">Hands-on leadership from experienced builders, not junior handoffs.</p>
                </div>
                <div className="rounded-xl border border-neutral/15 bg-black/40 p-4 print:border-black/15 print:bg-transparent">
                  <Rocket className="h-5 w-5 text-secondary print:text-black" />
                  <p className="mt-3 font-medium text-neutral print:text-black">Proven portfolio</p>
                  <p className="mt-1 text-sm text-neutral-dark print:text-black/75">A track record of shipping high-impact products for growth-stage teams.</p>
                </div>
              </div>
            </motion.section>

            <motion.section {...fadeInUp} id="contact" className="rounded-xl border border-neutral/15 bg-neutral-darker/30 p-6 print:border-black/20 print:bg-transparent">
              <h2 className="text-lg font-semibold text-secondary print:text-black">Next Steps</h2>
              <p className="mt-2 text-neutral-dark print:text-black/75">
                If this looks aligned, we can confirm scope and kickoff immediately.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row print:hidden">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-5 py-3 font-semibold text-black transition-colors hover:bg-secondary-light"
                >
                  Let&apos;s Get Started
                  <CalendarDays className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral/30 px-5 py-3 font-semibold text-neutral transition-colors hover:border-secondary/40 hover:text-secondary"
                >
                  Calendly (Coming Soon)
                </a>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral/30 px-5 py-3 font-semibold text-neutral transition-colors hover:border-secondary/40 hover:text-secondary"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </div>
            </motion.section>
          </div>

          <footer className="mt-8 border-t border-neutral/15 pt-6 text-center text-sm text-neutral-dark print:border-black/20 print:text-black/70">
            <p className="font-medium text-neutral print:text-black">Slateworks</p>
            <p className="mt-1">AI-powered web and product development for ambitious teams.</p>
            <p className="mt-1">joey@slateworks.io</p>
          </footer>
        </motion.section>
      </div>
    </main>
  );
}
