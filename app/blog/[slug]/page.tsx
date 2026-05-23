import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { blogPosts } from "@/lib/blog-posts";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderInlineMarkdown(line: string) {
  return line
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class=\"rounded bg-white/10 px-1.5 py-0.5 text-sm\">$1</code>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-secondary underline underline-offset-4">$1</a>'
    );
}

function markdownToHtml(markdown: string) {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let orderedListItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = renderInlineMarkdown(escapeHtml(paragraph.join(" ")));
    html.push(`<p class=\"mb-6 leading-8 text-white/80\">${text}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    html.push('<ul class="mb-6 list-disc space-y-2 pl-6 text-white/80">');
    listItems.forEach((item) => {
      html.push(`<li>${renderInlineMarkdown(escapeHtml(item))}</li>`);
    });
    html.push("</ul>");
    listItems = [];
  };

  const flushOrderedList = () => {
    if (orderedListItems.length === 0) return;
    html.push('<ol class="mb-6 list-decimal space-y-2 pl-6 text-white/80">');
    orderedListItems.forEach((item) => {
      html.push(`<li>${renderInlineMarkdown(escapeHtml(item))}</li>`);
    });
    html.push("</ol>");
    orderedListItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushOrderedList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      flushOrderedList();
      html.push(`<h3 class=\"mb-3 mt-8 text-xl font-semibold text-white\">${renderInlineMarkdown(escapeHtml(line.replace("### ", "")))}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushOrderedList();
      html.push(`<h2 class=\"mb-4 mt-10 text-2xl font-semibold text-white\">${renderInlineMarkdown(escapeHtml(line.replace("## ", "")))}</h2>`);
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      flushOrderedList();
      html.push(`<h1 class=\"mb-4 mt-8 text-3xl font-semibold text-white\">${renderInlineMarkdown(escapeHtml(line.replace("# ", "")))}</h1>`);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      flushOrderedList();
      listItems.push(line.replace("- ", ""));
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      flushParagraph();
      flushList();
      orderedListItems.push(orderedMatch[1]);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushOrderedList();

  return html.join("\n");
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | The Agent Report",
    };
  }

  return {
    title: `${post.title} | The Agent Report`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 lg:pt-36">
        <Link href="/blog" className="inline-flex items-center text-sm text-white/70 transition-colors hover:text-secondary">
          {"<-"} Back to blog
        </Link>

        <div className="mt-8 space-y-5 border-b border-white/10 pb-8">
          <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            {post.category}
          </span>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-white/60">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>|</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <img src={post.heroImage} alt={post.title} className="h-full max-h-[420px] w-full object-cover" />
        </div>

        <div
          className="mt-10 text-base"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        <section className="mt-14 rounded-2xl border border-white/10 bg-neutral-950 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">Written by</p>
          <p className="mt-2 text-lg font-semibold text-white">The Slateworks Operator</p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Field notes from Slateworks&apos; AI operator. Human judgment still required where it counts.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">Performance leak diagnostic</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">What workflow is your team working around?</h2>
          <p className="mt-2 text-white/70">
            Send us the workflow, handoff, support loop, or aging system that keeps leaking time, revenue, or attention.
          </p>
          <Link
            href="/#contact"
            className="mt-5 inline-flex rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Map the leak
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
}
