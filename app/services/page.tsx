import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AIServiceAssessmentForm from "@/components/services/ai-assessment-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services | Slateworks",
  description:
    "Slateworks builds AI into your business with a fully asynchronous process: assessment, brief, scope approval, and build delivery.",
};

const tiers = [
  {
    name: "AI Audit",
    price: "$2,500",
    bullets: [
      "60-minute team review",
      "AI opportunity mapping across your stack",
      "Prioritized list of 3-6 opportunities",
      "48-hour AI Opportunity Brief delivered",
    ],
  },
  {
    name: "AI Build",
    price: "$5K - $10K/mo",
    bullets: [
      "1-2 AI automations built in first quarter",
      "Implementation done async in sprints",
      "Tracking and handoff docs included",
      "Dedicated Slack updates and weekly recap notes",
    ],
  },
  {
    name: "AI Partner",
    price: "$10K+/mo + equity",
    bullets: [
      "Long-term productized AI ops support",
      "Execution ownership for workflow transformation",
      "Direct access to systems planning",
      "Optional small equity component based on upside",
    ],
  },
];

const flow = [
  "Fill out assessment",
  "Get AI Opportunity Brief in 48h",
  "Approve scope",
  "We build & deliver async",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-neutral">
      <Header />

      <section className="bg-black px-4 pb-14 pt-28 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">AI Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">We build AI into your business. No meetings required.</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-dark">
            Join businesses that run asynchronously with a lean AI team. You share access, constraints, and goals. We return practical systems that save time and revenue leak.
          </p>
          <div className="mt-8">
            <a
              href="#assessment"
              className="inline-flex rounded-md bg-secondary px-6 py-3 font-medium text-black transition-colors hover:bg-secondary-light"
            >
              Start Your Free AI Assessment
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16" id="pricing">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-sm border border-neutral/10 bg-neutral-darker p-6"
            >
              <p className="text-sm uppercase tracking-wider text-secondary">{tier.name}</p>
              <h2 className="mt-3 text-2xl font-bold">{tier.price}</h2>
              <ul className="mt-6 space-y-3 text-sm text-neutral-dark">
                {tier.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16" id="process">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-secondary">How it works</p>
          <h2 className="mt-3 text-center text-3xl font-bold">Your AI onboarding, made async.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {flow.map((item, index) => (
              <div
                key={item}
                className="rounded-sm border border-white/10 bg-black/50 p-6"
              >
                <p className="mb-3 text-xs uppercase tracking-wider text-secondary">Step {index + 1}</p>
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16" id="portfolio">
        <div className="mx-auto max-w-6xl rounded-sm border border-white/10 bg-black/40 p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Trust Signals</p>
          <h2 className="mt-3 text-3xl font-bold">Built with proven momentum.</h2>
          <p className="mt-4 text-neutral-dark">Our portfolio includes BBA, All Suspects, Haven, and client work delivered across advisory, web and growth systems.</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm uppercase tracking-wider text-neutral-400">
            <span className="rounded-full border border-white/10 px-4 py-2">BBA</span>
            <span className="rounded-full border border-white/10 px-4 py-2">All Suspects</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Haven</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Client Work</span>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-8" id="assessment">
        <div className="mx-auto max-w-6xl rounded-sm border border-secondary/25 bg-neutral-darker p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">AI Intake</p>
          <h2 className="mt-3 text-3xl font-bold">Start Your Free AI Assessment</h2>
          <p className="mt-3 mb-6 text-neutral-dark">
            Fill out this assessment so we can return an AI Opportunity Brief in 48 hours. No meetings needed.
          </p>
          <AIServiceAssessmentForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
