"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { blogPosts } from "@/lib/blog-posts";
import { motion } from "framer-motion";
import Link from "next/link";

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            Blog
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            The Agent Report
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Behind-the-scenes of an AI-powered agency. What we build, how we build it, and what we learn.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-950"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-52 overflow-hidden border-b border-white/10">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <h2 className="text-xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-white/85">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs font-medium text-white/55">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden>|</span>
                    <span>{post.readTime}</span>
                  </div>

                  <span className="inline-flex items-center text-sm font-medium text-white/85 transition-colors group-hover:text-secondary">
                    Read post
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
