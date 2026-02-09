const products = [
  {
    name: "SPARQ Agent",
    description: "AI recruiting platform for athletes. Automated outreach, smart matching, and analytics.",
    url: "https://sparq-agent.vercel.app",
    tag: "Recruiting",
  },
  {
    name: "Before Bedtime Adventures",
    description: "AI-powered storybook generator. Personalized bedtime stories with custom illustrations.",
    url: "https://before-bedtime-adventures.vercel.app",
    tag: "Consumer",
  },
  {
    name: "All Suspects",
    description: "AI mystery interrogation game. Interrogate suspects, analyze clues, solve the case.",
    url: "https://allsuspects.slateworks.io",
    tag: "Gaming",
  },
];

const services = [
  {
    title: "Fractional CTO",
    description: "Technical leadership without the full-time commitment. Architecture, strategy, and team guidance.",
  },
  {
    title: "AI Product Development",
    description: "End-to-end AI product builds. From concept to launch, leveraging the latest in LLMs and agents.",
  },
  {
    title: "Full-Stack Engineering",
    description: "Production-grade web and mobile apps. Next.js, React Native, Node, and cloud infrastructure.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Slateworks
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-xl">
          App development studio building AI-powered products.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#products"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition"
          >
            Our Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-700 rounded-lg hover:border-neutral-500 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
          Products
        </h2>
        <p className="text-3xl md:text-4xl font-bold mb-12">
          What we&apos;ve built
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 transition"
            >
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                {p.tag}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-neutral-300 transition">
                {p.name}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {p.description}
              </p>
              <span className="inline-block mt-4 text-sm text-neutral-500 group-hover:text-white transition">
                Visit →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 max-w-5xl mx-auto border-t border-neutral-800">
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
          Services
        </h2>
        <p className="text-3xl md:text-4xl font-bold mb-12">
          How we can help
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title}>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 max-w-5xl mx-auto border-t border-neutral-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s build something
        </h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          Have an idea? Need a technical partner? We&apos;d love to hear from you.
        </p>
        <a
          href="mailto:joey@slateworks.io"
          className="inline-block px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition"
        >
          joey@slateworks.io
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Slateworks
      </footer>
    </main>
  );
}
