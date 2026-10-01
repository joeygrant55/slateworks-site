import ClosingCta from "@/components/studio/closing-cta";
import PageIntro from "@/components/studio/page-intro";
import Reveal from "@/components/studio/reveal";
import SectionLabel from "@/components/studio/section-label";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";

export const metadata = {
  title: "About — Slateworks",
  description:
    "Slateworks is a senior AI engineering studio led by Joey Grant, with a team of AI agents doing the heavy lifting.",
};

const principles = [
  {
    title: "Map before we build.",
    body: "The tool comes after the map, never before. Most expensive mistakes start with picking the technology first.",
  },
  {
    title: "Ship, then sharpen.",
    body: "Real software in production beats a perfect plan. We get something live in weeks and improve it with real use.",
  },
  {
    title: "Capability, not dependency.",
    body: "Everything we build is documented and handed over. Your team should be able to run it — and extend it — without us.",
  },
  {
    title: "Our own skin in the game.",
    body: "We build and operate our own products. The methods we sell are the ones we use with our own revenue on the line.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        label="About"
        title="A small studio built to ship like a large one."
        lede="Slateworks is a senior AI engineering studio in St. Petersburg, Florida. One accountable lead, a trained team of AI agents, and a bias for software that's actually in use."
      />

      <section className="border-b border-rule py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[22rem_1fr] lg:gap-20">
          <Reveal>
            <img
              src="/images/joey.jpg"
              alt="Joey Grant, founder of Slateworks"
              className="aspect-[4/5] w-full rounded-xl object-cover grayscale"
            />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              Joey Grant — founder
            </p>
          </Reveal>
          <div>
            <SectionLabel index="01">The founder</SectionLabel>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
                Former Division I football player turned multi-time tech founder.
              </p>
              <p>
                I lead every Slateworks engagement myself. Behind me is a team of AI agents I&apos;ve trained on real
                product delivery, so a client gets senior judgment on every decision and the throughput of a much larger
                team.
              </p>
              <p>
                We work two ways: as a fractional AI team for companies that need a senior technical partner, and as a
                behind-the-scenes build team for agencies and firms that sell the outcome under their own name.
              </p>
              <p>
                In between client work, Slateworks Studio builds and runs its own apps — Saintlings and Recasa. It keeps
                our methods honest: everything we recommend, we&apos;ve shipped ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionLabel index="02">How we work</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-5xl">
            Four rules we don&apos;t bend.
          </h2>
          <ol className="mt-14 grid border-t border-ink md:grid-cols-2">
            {principles.map((item, i) => (
              <li key={item.title} className="border-b border-rule py-8 md:odd:pr-10 md:even:border-l md:even:pl-10">
                <p className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
