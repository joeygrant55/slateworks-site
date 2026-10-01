import Link from "next/link";
import PageIntro from "@/components/studio/page-intro";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Writing — Slateworks",
  description: "Field notes on AI systems, agents, and the work of shipping software that gets used.",
};

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        label="Writing"
        title="Field notes."
        lede="What we're learning about AI systems, agents, and shipping software that actually gets used."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl md:px-8">
          <ul className="border-t border-ink">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-rule">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-5 px-5 py-8 md:grid-cols-[9rem_1fr_14rem] md:items-start md:gap-10 md:px-0"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">{post.category}</p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight transition-colors group-hover:text-signal md:text-[1.75rem]">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{post.excerpt}</p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                      {post.readTime}
                    </p>
                  </div>
                  <div className="hidden aspect-[4/3] overflow-hidden rounded-lg border border-rule bg-paper-deep md:block">
                    <img
                      src={post.heroImage}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
