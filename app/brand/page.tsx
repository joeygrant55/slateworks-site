"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ─── LOGO CONCEPTS ─── */

function LogoConcept1() {
  // Clean geometric wordmark — Vercel/Linear inspired
  return (
    <svg viewBox="0 0 400 60" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F5D060" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="45"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="48"
        fontWeight="800"
        letterSpacing="-2"
        fill="white"
      >
        slateworks
      </text>
      <rect x="318" y="38" width="6" height="6" rx="1" fill="url(#gold1)" />
    </svg>
  );
}

/* Concepts B-E removed — Concept A is the official Slateworks logo */

/* ─── COLOR PALETTE ─── */

const colors = {
  primary: [
    { name: "Black", hex: "#000000", usage: "Backgrounds, primary surface" },
    { name: "Rich Black", hex: "#0a0a0a", usage: "Card backgrounds, elevated surfaces" },
    { name: "Dark Gray", hex: "#171717", usage: "Secondary surfaces, borders" },
  ],
  accent: [
    { name: "Gold", hex: "#D4AF37", usage: "Primary accent, CTAs, highlights" },
    { name: "Light Gold", hex: "#F5D060", usage: "Hover states, gradients" },
    { name: "Muted Gold", hex: "#D4AF3733", usage: "Subtle backgrounds, badges" },
  ],
  neutral: [
    { name: "White", hex: "#F5F5F5", usage: "Primary text" },
    { name: "Gray 400", hex: "#9CA3AF", usage: "Secondary text, descriptions" },
    { name: "Gray 700", hex: "#374151", usage: "Borders, dividers" },
  ],
  status: [
    { name: "Green", hex: "#22C55E", usage: "Online status, success" },
    { name: "Red", hex: "#EF4444", usage: "Errors, warnings" },
    { name: "Blue", hex: "#3B82F6", usage: "Links, info" },
  ],
};

/* ─── TYPOGRAPHY ─── */

const typography = [
  { name: "Display", font: "Inter", weight: "900 (Black)", size: "48-72px", usage: "Hero headlines, section titles", sample: "Built by agents." },
  { name: "Heading", font: "Inter", weight: "700 (Bold)", size: "24-36px", usage: "Section headers, card titles", sample: "A different kind of agency." },
  { name: "Body", font: "Inter", weight: "400 (Regular)", size: "15-18px", usage: "Paragraphs, descriptions", sample: "Five specialized AI agents work in parallel." },
  { name: "Caption", font: "Inter", weight: "500 (Medium)", size: "12-14px", usage: "Labels, tags, metadata", sample: "BEHIND THE BUILD" },
];

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="container mx-auto px-4 pb-12 pt-28">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-amber-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Brand Guidelines
          </p>
          <h1 className="text-4xl font-black md:text-6xl">Slateworks Identity</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            The visual language of an AI-native agency. These guidelines define how Slateworks looks, feels, and communicates across every touchpoint.
          </p>
        </motion.div>
      </section>

      {/* Logo Concepts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Logo</h2>
        <h3 className="mb-12 text-3xl font-bold">The Slateworks mark.</h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-gray-800 bg-gray-950 p-10"
        >
          <p className="mb-8 text-sm text-gray-400">Clean Geometric. Minimal lowercase with gold period accent.</p>
          {/* Dark bg */}
          <div className="mb-6 flex items-center justify-center rounded-lg bg-black p-8">
            <LogoConcept1 />
          </div>
          {/* Light bg */}
          <div className="flex items-center justify-center rounded-lg bg-white p-8">
            <svg viewBox="0 0 400 60" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="45" fontFamily="Inter, system-ui, sans-serif" fontSize="48" fontWeight="800" letterSpacing="-2" fill="#0a0a0a">slateworks</text>
              <rect x="318" y="38" width="6" height="6" rx="1" fill="#D4AF37" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Color Palette */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Color Palette</h2>
        <h3 className="mb-12 text-3xl font-bold">Our colors.</h3>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(colors).map(([group, swatches]) => (
            <div key={group}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">{group}</h4>
              <div className="space-y-3">
                {swatches.map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 flex-shrink-0 rounded-md border border-gray-800"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-sm font-medium">{color.name}</p>
                      <p className="text-xs text-gray-500">{color.hex}</p>
                      <p className="text-xs text-gray-600">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Typography</h2>
        <h3 className="mb-12 text-3xl font-bold">Inter. One family. Every weight.</h3>

        <div className="space-y-8">
          {typography.map((type) => (
            <div key={type.name} className="rounded-lg border border-gray-800 bg-gray-950 p-8">
              <div className="mb-4 flex flex-wrap items-baseline gap-4">
                <span className="text-sm font-semibold text-amber-400">{type.name}</span>
                <span className="text-xs text-gray-500">{type.font} {type.weight} / {type.size}</span>
                <span className="text-xs text-gray-600">{type.usage}</span>
              </div>
              <p
                className="text-white"
                style={{
                  fontWeight: parseInt(type.weight),
                  fontSize: type.name === "Display" ? "48px" : type.name === "Heading" ? "30px" : type.name === "Body" ? "17px" : "13px",
                  letterSpacing: type.name === "Caption" ? "0.15em" : type.name === "Display" ? "-0.02em" : "0",
                  textTransform: type.name === "Caption" ? "uppercase" as const : "none" as const,
                }}
              >
                {type.sample}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Voice & Tone */}
      <section className="container mx-auto px-4 py-16 pb-24">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Voice & Tone</h2>
        <h3 className="mb-12 text-3xl font-bold">How we sound.</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-800 bg-gray-950 p-8">
            <h4 className="mb-4 text-lg font-bold text-green-500">We are</h4>
            <ul className="space-y-3 text-gray-400">
              <li><span className="font-medium text-white">Direct.</span> Make the point. Move on.</li>
              <li><span className="font-medium text-white">Confident.</span> We know what we do. No hedging.</li>
              <li><span className="font-medium text-white">Honest.</span> Our team is AI. We say so.</li>
              <li><span className="font-medium text-white">Craft-focused.</span> Quality over speed claims.</li>
              <li><span className="font-medium text-white">Human-warm.</span> Professional without being corporate.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-950 p-8">
            <h4 className="mb-4 text-lg font-bold text-red-500">We never</h4>
            <ul className="space-y-3 text-gray-400">
              <li><span className="font-medium text-white">Overpromise.</span> We set real expectations and deliver beyond them.</li>
              <li><span className="font-medium text-white">Waste your time.</span> Every interaction is purposeful and moves your project forward.</li>
              <li><span className="font-medium text-white">Hide behind jargon.</span> You will always understand what we are building and why.</li>
              <li><span className="font-medium text-white">Disappear after launch.</span> Your project is supported long after it goes live.</li>
              <li><span className="font-medium text-white">Treat projects as one-size-fits-all.</span> Every build is scoped to your specific goals.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
