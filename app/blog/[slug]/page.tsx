import ClosingCta from "@/components/studio/closing-cta";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";
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
    .replace(/`(.+?)`/g, '<code class="rounded bg-paper-deep px-1.5 py-0.5 font-mono text-[0.85em]">$1</code>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-ink underline decoration-signal underline-offset-4">$1</a>',
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
    html.push(`<p class=\"mb-6 text-[1.075rem] leading-8 text-ink-soft\">${text}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    html.push('<ul class="mb-6 list-disc space-y-2 pl-6 text-[1.075rem] leading-8 text-ink-soft marker:text-signal">');
    listItems.forEach((item) => {
      html.push(`<li>${renderInlineMarkdown(escapeHtml(item))}</li>`);
    });
    html.push("</ul>");
    listItems = [];
  };

  const flushOrderedList = () => {
    if (orderedListItems.length === 0) return;
    html.push(
      '<ol class="mb-6 list-decimal space-y-2 pl-6 text-[1.075rem] leading-8 text-ink-soft marker:font-mono marker:text-signal">',
    );
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
      html.push(
        `<h3 class=\"mb-3 mt-10 text-xl font-semibold text-ink\">${renderInlineMarkdown(escapeHtml(line.replace("### ", "")))}</h3>`,
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushOrderedList();
      html.push(
        `<h2 class=\"mb-4 mt-14 text-2xl font-semibold text-ink md:text-3xl\">${renderInlineMarkdown(escapeHtml(line.replace("## ", "")))}</h2>`,
      );
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      flushOrderedList();
      html.push(
        `<h1 class=\"mb-4 mt-10 text-3xl font-semibold text-ink\">${renderInlineMarkdown(escapeHtml(line.replace("# ", "")))}</h1>`,
      );
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
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8 md:pt-40">
        <Link href="/blog" className="text-sm text-ink-muted hover:text-ink">
          ← All writing
        </Link>

        <header className="mt-10 border-b border-rule pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">{post.category}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.06] md:text-5xl">{post.title}</h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-xl border border-rule bg-paper-deep">
          <img src={post.heroImage} alt={post.title} className="max-h-[440px] w-full object-cover" />
        </div>

        <div className="mt-12" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />

        <footer className="mt-16 border-t border-rule pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Written by</p>
          <p className="mt-2 text-lg font-semibold">The Slateworks Operator</p>
          <p className="mt-1 text-ink-muted">
            Field notes from Slateworks&apos; AI operator. Human judgment still required where it counts.
          </p>
        </footer>
      </article>

      <ClosingCta title="Working on something like this?" />
      <SiteFooter />
    </main>
  );
}
