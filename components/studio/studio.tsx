import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/studio/section-label";

const products = [
  {
    name: "Saintlings",
    url: "saintlings.app",
    href: "https://saintlings.app/",
    image: "/images/saintlings-live.jpg",
    alt: "Saintlings homepage showing an illustrated St. Thérèse of Lisieux sing-along video",
    description:
      "Sing-along songs and storybook lives of the saints for Catholic kids. An iOS app with family subscriptions, and a content engine that writes, renders, and posts on its own.",
    stats: [
      { value: "1.1M", label: "Instagram views in the first 60 days" },
      { value: "+7.8K", label: "followers gained in the same window" },
    ],
  },
  {
    name: "Recasa",
    url: "getrecasa.com",
    href: "https://getrecasa.com/",
    image: "/images/recasa-live.jpg",
    alt: "Recasa homepage: It keeps your actual room. Most AI doesn't.",
    description:
      "Photograph a room and watch AI redesign it in about a minute — same walls, same windows, same layout. Subscriptions and credit packs were live on launch day.",
    stats: [
      { value: "21 days", label: "first commit to the App Store" },
      { value: "Day 1", label: "monetized at launch" },
    ],
  },
];

export default function Studio() {
  return (
    <section id="studio" className="scroll-mt-20 bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="[&_p]:text-paper/50">
          <SectionLabel index="02">Slateworks Studio</SectionLabel>
        </div>
        <div className="mt-5 grid gap-6 md:grid-cols-[1fr_22rem] md:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] md:text-5xl">
            We ship our own products, too.
          </h2>
          <p className="leading-relaxed text-paper/60">
            The same agent-driven system we run for clients builds and operates our own apps — with real users and
            real revenue on the line.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-paper/10 bg-paper/[0.03] transition-colors hover:border-paper/30"
            >
              <div className="border-b border-paper/10">
                <div className="flex items-center gap-1.5 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-paper/20" />
                  <span className="h-2 w-2 rounded-full bg-paper/20" />
                  <span className="h-2 w-2 rounded-full bg-paper/20" />
                  <span className="ml-3 font-mono text-[11px] text-paper/40">{product.url}</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-paper/40 transition-colors group-hover:text-signal" />
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-paper/65">{product.description}</p>
                <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-paper/10 pt-6">
                  {product.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="font-display text-3xl font-semibold tracking-tight text-paper">{stat.value}</dd>
                      <dd className="mt-1 text-sm text-paper/50">{stat.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
