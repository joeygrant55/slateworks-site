import Reveal from "@/components/studio/reveal";
import SectionLabel from "@/components/studio/section-label";

const steps = [
  {
    index: "01",
    title: "Map",
    body: "We find the step that actually matters before we choose a tool. Sometimes the answer is an agent. Sometimes it's a spreadsheet and a clear owner.",
  },
  {
    index: "02",
    title: "Build",
    body: "One focused build at a time, live in weeks — not quarters. Real software in production, not a demo in a deck.",
  },
  {
    index: "03",
    title: "Hand over",
    body: "Runbooks, walkthroughs, and working sessions until your team can run and extend it. Capability, not dependency.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 border-b border-rule bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel index="04">Approach</SectionLabel>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
          Small team. Senior judgment. Agents doing the heavy lifting.
        </h2>

        <Reveal>
          <figure className="mt-14">
            <div className="aspect-[16/9] overflow-hidden rounded-xl border border-rule bg-paper-deep md:aspect-[21/9]">
              <img
                src="/images/workbench.jpg"
                alt="Slate tiles, a caliper, a steel ruler, and a technical drawing laid out on a workbench"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              Fig. 02 — Measure twice. Ship once.
            </figcaption>
          </figure>
        </Reveal>

        <ol className="mt-14 grid border-t border-ink md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.index}
              className="border-b border-rule py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <p className="font-mono text-xs text-signal">{step.index}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <Reveal>
          <figure className="mt-16 grid gap-8 rounded-xl border border-rule bg-paper-deep/60 p-7 md:grid-cols-[auto_1fr] md:items-center md:p-10">
            <img
              src="/images/joey.jpg"
              alt="Joey Grant, founder of Slateworks"
              className="h-24 w-24 rounded-lg object-cover grayscale md:h-32 md:w-32"
            />
            <div>
              <blockquote className="font-display text-xl leading-snug text-ink md:text-2xl">
                &ldquo;I lead every engagement myself, and I run a team of AI agents trained on real product delivery.
                You get senior judgment at startup speed — without the agency overhead.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-ink-muted">
                <span className="font-medium text-ink">Joey Grant</span> — founder. Fiesta Bowl champion turned tech
                founder; $2M+ in revenue contracts generated.
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
