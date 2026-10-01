import SectionLabel from "@/components/studio/section-label";

const offers = [
  {
    audience: "For companies",
    title: "Your fractional AI team.",
    price: "$10–15K / month",
    pitch:
      "For funded founders, owner-operators, and family offices who need a senior technical partner — not a vendor waiting on a ticket.",
    points: [
      "Builds always in flight — products, agents, internal tools",
      "Architecture and technical judgment on call",
      "Monthly working sessions that level up your team",
      "Everything documented, and everything owned by you",
    ],
    footnote: "Most start with a two-week AI Opportunity Sprint — $5K.",
  },
  {
    audience: "For agencies & firms",
    title: "Your build team, under your name.",
    price: "Project or retainer",
    pitch:
      "For consultancies, agencies, and operating partners who sell the outcome and need it engineered right — on time, without hiring.",
    points: [
      "White-label delivery — your brand, your client relationship",
      "Scoping and estimates before you quote",
      "Senior engineering from spec to production",
      "Clean handoff to you or your client",
    ],
    footnote: "Discreet by default. Your clients meet you, not us.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-rule bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel index="01">Services</SectionLabel>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
          Two ways to put us to work.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.title} className="flex flex-col rounded-xl border border-rule bg-paper-deep/60 p-7 md:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">{offer.audience}</p>
                <p className="font-mono text-xs text-ink-muted">{offer.price}</p>
              </div>
              <h3 className="mt-6 text-3xl font-semibold leading-tight text-ink">{offer.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{offer.pitch}</p>
              <ul className="mt-7 space-y-3 border-t border-rule pt-7">
                {offer.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] text-ink">
                    <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-ink" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-8 text-sm text-ink-muted">{offer.footnote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
