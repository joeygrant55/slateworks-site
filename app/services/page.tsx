import ClosingCta from "@/components/studio/closing-cta";
import PageIntro from "@/components/studio/page-intro";
import Reveal from "@/components/studio/reveal";
import SectionLabel from "@/components/studio/section-label";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";

export const metadata = {
  title: "Services — Slateworks",
  description:
    "A fractional AI team for companies, white-label engineering for agencies and firms, and a two-week AI Opportunity Sprint to start.",
};

const offers = [
  {
    id: "sprint",
    audience: "Start here",
    title: "AI Opportunity Sprint",
    price: "$5K · two weeks",
    pitch:
      "A fixed-scope engagement to find where AI will actually pay off in your business — and prove it with something live.",
    includes: [
      "Week 1: map your workflows, tools, and handoffs; the top three leaks, with dollar estimates",
      "Week 2: one quick win shipped — a working automation or tool, live",
      "An AI roadmap: prioritized builds, effort and impact, sequencing",
      "Recorded walkthrough. The fee credits toward month one if you continue within 30 days",
    ],
  },
  {
    id: "fractional",
    audience: "For companies",
    title: "Fractional AI team",
    price: "$10–15K / month",
    pitch:
      "A senior technical partner on retainer for funded founders, owner-operators, and family offices. Builds always in flight, judgment always on call.",
    includes: [
      "Two builds in flight at all times, typically two to three weeks each",
      "Monthly working session to train your team on what shipped",
      "Runbook, walkthrough, and live handover for every system",
      "Embedded tier: Joey as your fractional AI lead, with a weekly cadence",
      "Three-month minimum, then month to month with 30 days' notice",
    ],
  },
  {
    id: "white-label",
    audience: "For agencies & firms",
    title: "White-label build partner",
    price: "Project or retainer",
    pitch:
      "For consultancies, agencies, and operating partners who sell the outcome and need it engineered right, on time, without hiring.",
    includes: [
      "Delivery under your brand — your client relationship stays yours",
      "Scoping and estimates before you quote",
      "Senior engineering from spec to production",
      "Clean handoff to you or your client, with documentation",
    ],
  },
];

const capabilities = [
  {
    title: "AI products & apps",
    body: "Customer-facing products with AI at the core — web and iOS, built to earn revenue.",
  },
  {
    title: "Agents & automation",
    body: "Agents and workflows that take real work off your team, with people kept in the loop.",
  },
  {
    title: "Internal tools",
    body: "Dashboards, intake systems, and operating tools that replace spreadsheets and inboxes.",
  },
  {
    title: "Content engines",
    body: "Systems that research, produce, and publish content on their own — like the one behind Saintlings.",
  },
  {
    title: "Platforms & sites",
    body: "Marketing sites and platforms when they're part of the system, not a brochure.",
  },
  {
    title: "Technical leadership",
    body: "Architecture reviews, build-vs-buy calls, and a second opinion before you commit.",
  },
];

const faqs = [
  {
    q: "Do you only work with AI projects?",
    a: "Most of what we build has AI in it, but we're not married to a tool. If the right answer is a simpler system, that's what we'll recommend.",
  },
  {
    q: "Who actually does the work?",
    a: "Joey leads every engagement and makes the engineering calls. A team of AI agents does much of the production work, which is why we move faster than a traditional agency.",
  },
  {
    q: "Can we work with you through our agency or advisor?",
    a: "Yes. We regularly build behind other firms. We're discreet by default — your client meets you, not us.",
  },
  {
    q: "What happens when the engagement ends?",
    a: "You keep everything: code, accounts, documentation, and a team that knows how to run it. Capability, not dependency.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        label="Services"
        title="Senior engineering, packaged three ways."
        lede="Start with a two-week sprint, keep us on as your fractional AI team, or put us to work behind your own brand."
      />

      <section className="border-b border-rule py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-5 px-5 md:px-8">
          {offers.map((offer, i) => (
            <Reveal key={offer.id}>
              <article
                id={offer.id}
                className="grid scroll-mt-24 gap-8 rounded-xl border border-rule bg-paper-deep/60 p-7 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
                      {String(i + 1).padStart(2, "0")} · {offer.audience}
                    </p>
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">{offer.title}</h2>
                  <p className="mt-2 font-mono text-sm text-ink-muted">{offer.price}</p>
                  <p className="mt-6 text-lg leading-relaxed text-ink-soft">{offer.pitch}</p>
                </div>
                <ul className="space-y-3 border-t border-rule pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <li className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Includes</li>
                  {offer.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] text-ink">
                      <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-rule py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionLabel index="●">What we build</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-5xl">
            Whatever fixes the problem.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="bg-paper p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[20rem_1fr]">
          <div>
            <SectionLabel index="●">Questions</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05]">Good to know.</h2>
          </div>
          <dl className="border-t border-ink">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-rule py-7">
                <dt className="text-xl font-semibold">{item.q}</dt>
                <dd className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
