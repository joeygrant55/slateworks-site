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

function LogoConcept2() {
  // Bold condensed — Netflix/Supreme energy
  return (
    <svg viewBox="0 0 440 60" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="48"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="52"
        fontWeight="900"
        letterSpacing="8"
        fill="white"
      >
        SLATEWORKS
      </text>
    </svg>
  );
}

function LogoConcept3() {
  // Monogram S mark + wordmark
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 50 50" className="h-14 w-14" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F5D060" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="50" height="50" rx="10" fill="url(#gold3)" />
        <text
          x="25"
          y="37"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="32"
          fontWeight="900"
          fill="black"
          textAnchor="middle"
        >
          S
        </text>
      </svg>
      <svg viewBox="0 0 300 40" className="h-10" xmlns="http://www.w3.org/2000/svg">
        <text
          x="0"
          y="30"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="32"
          fontWeight="700"
          letterSpacing="-1"
          fill="white"
        >
          slateworks
        </text>
      </svg>
    </div>
  );
}

function LogoConcept4() {
  // Tech-forward with agent motif — slash through the S
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 50 50" className="h-14 w-14" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F5D060" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="50" height="50" rx="6" fill="transparent" stroke="url(#gold4)" strokeWidth="2" />
        {/* Stylized S made of two brackets */}
        <path
          d="M18 14 L32 14 L32 20 L22 20 L22 24 L32 24 L32 36 L18 36 L18 30 L28 30 L28 26 L18 26 Z"
          fill="url(#gold4)"
        />
        {/* Agent pulse dot */}
        <circle cx="40" cy="10" r="3" fill="#22c55e" />
      </svg>
      <svg viewBox="0 0 340 50" className="h-12" xmlns="http://www.w3.org/2000/svg">
        <text
          x="0"
          y="34"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="30"
          fontWeight="600"
          letterSpacing="6"
          fill="white"
        >
          SLATEWORKS
        </text>
        <text
          x="0"
          y="48"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="10"
          fontWeight="500"
          letterSpacing="4"
          fill="#9ca3af"
        >
          AGENTIC DEVELOPMENT
        </text>
      </svg>
    </div>
  );
}

function LogoConcept5() {
  // Slate + AI — fractured stone with circuit veins
  return (
    <div className="flex items-center gap-5">
      <svg viewBox="0 0 56 56" className="h-16 w-16" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F5D060" />
          </linearGradient>
          <linearGradient id="slate5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="50%" stopColor="#1f2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <filter id="glow5">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Slate stone shape — irregular polygon */}
        <polygon
          points="4,8 28,2 52,6 54,28 50,50 30,54 6,48 2,26"
          fill="url(#slate5)"
          stroke="#4b5563"
          strokeWidth="0.5"
        />
        {/* Natural slate striations */}
        <line x1="8" y1="18" x2="48" y2="14" stroke="#4b5563" strokeWidth="0.3" opacity="0.6" />
        <line x1="6" y1="30" x2="50" y2="28" stroke="#4b5563" strokeWidth="0.3" opacity="0.4" />
        <line x1="10" y1="42" x2="46" y2="40" stroke="#4b5563" strokeWidth="0.3" opacity="0.5" />
        {/* Gold circuit veins running through the stone */}
        <path
          d="M12,28 L20,28 L24,20 L32,20 L32,28 L44,28"
          fill="none"
          stroke="url(#gold5)"
          strokeWidth="1.2"
          filter="url(#glow5)"
          opacity="0.9"
        />
        <path
          d="M24,20 L24,12"
          fill="none"
          stroke="url(#gold5)"
          strokeWidth="1"
          filter="url(#glow5)"
          opacity="0.7"
        />
        <path
          d="M32,28 L32,38 L38,38"
          fill="none"
          stroke="url(#gold5)"
          strokeWidth="1"
          filter="url(#glow5)"
          opacity="0.7"
        />
        {/* Circuit nodes */}
        <circle cx="24" cy="20" r="2" fill="#D4AF37" filter="url(#glow5)" />
        <circle cx="32" cy="28" r="2" fill="#D4AF37" filter="url(#glow5)" />
        <circle cx="12" cy="28" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="44" cy="28" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="38" cy="38" r="1.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="24" cy="12" r="1.5" fill="#D4AF37" opacity="0.6" />
      </svg>
      <div>
        <svg viewBox="0 0 340 45" className="h-11" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="slatetext" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="28"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="30"
            fontWeight="800"
            letterSpacing="-0.5"
            fill="url(#slatetext)"
          >
            slate
          </text>
          <text
            x="107"
            y="28"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="30"
            fontWeight="800"
            letterSpacing="-0.5"
            fill="#D4AF37"
          >
            works
          </text>
          <text
            x="0"
            y="42"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="9"
            fontWeight="500"
            letterSpacing="3"
            fill="#6b7280"
          >
            BUILT ON STONE. POWERED BY INTELLIGENCE.
          </text>
        </svg>
      </div>
    </div>
  );
}

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
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Logo Concepts</h2>
        <h3 className="mb-12 text-3xl font-bold">Four directions. Pick your favorite.</h3>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Concept 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-gray-800 bg-gray-950 p-10"
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">Concept A</p>
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

          {/* Concept 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border border-gray-800 bg-gray-950 p-10"
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">Concept B</p>
            <p className="mb-8 text-sm text-gray-400">Bold Condensed. All caps, wide tracking. Authority and presence.</p>
            <div className="mb-6 flex items-center justify-center rounded-lg bg-black p-8">
              <LogoConcept2 />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-8">
              <svg viewBox="0 0 440 60" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="48" fontFamily="Inter, system-ui, sans-serif" fontSize="52" fontWeight="900" letterSpacing="8" fill="#0a0a0a">SLATEWORKS</text>
              </svg>
            </div>
          </motion.div>

          {/* Concept 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg border border-gray-800 bg-gray-950 p-10"
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">Concept C</p>
            <p className="mb-8 text-sm text-gray-400">Monogram + Wordmark. Gold S mark with clean type. Versatile for icon use.</p>
            <div className="mb-6 flex items-center justify-center rounded-lg bg-black p-8">
              <LogoConcept3 />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-8">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 50 50" className="h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                  <defs><linearGradient id="gold3w" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#D4AF37" /><stop offset="100%" stopColor="#F5D060" /></linearGradient></defs>
                  <rect x="0" y="0" width="50" height="50" rx="10" fill="url(#gold3w)" />
                  <text x="25" y="37" fontFamily="Inter, system-ui, sans-serif" fontSize="32" fontWeight="900" fill="black" textAnchor="middle">S</text>
                </svg>
                <svg viewBox="0 0 300 40" className="h-10" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="30" fontFamily="Inter, system-ui, sans-serif" fontSize="32" fontWeight="700" letterSpacing="-1" fill="#0a0a0a">slateworks</text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Concept 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg border border-gray-800 bg-gray-950 p-10"
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">Concept D</p>
            <p className="mb-8 text-sm text-gray-400">Agent-Forward. Pixel S with green status dot. &ldquo;AGENTIC DEVELOPMENT&rdquo; descriptor.</p>
            <div className="mb-6 flex items-center justify-center rounded-lg bg-black p-8">
              <LogoConcept4 />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-8">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 50 50" className="h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="50" height="50" rx="6" fill="transparent" stroke="#D4AF37" strokeWidth="2" />
                  <path d="M18 14 L32 14 L32 20 L22 20 L22 24 L32 24 L32 36 L18 36 L18 30 L28 30 L28 26 L18 26 Z" fill="#D4AF37" />
                  <circle cx="40" cy="10" r="3" fill="#22c55e" />
                </svg>
                <svg viewBox="0 0 340 50" className="h-12" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="34" fontFamily="Inter, system-ui, sans-serif" fontSize="30" fontWeight="600" letterSpacing="6" fill="#0a0a0a">SLATEWORKS</text>
                  <text x="0" y="48" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="500" letterSpacing="4" fill="#6b7280">AGENTIC DEVELOPMENT</text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Concept 5 — Slate + AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-lg border border-amber-900/30 bg-gray-950 p-10 md:col-span-2"
          >
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">Concept E — Recommended</p>
            <p className="mb-8 text-sm text-gray-400">Slate + AI. Fractured stone mark with gold circuit veins. &ldquo;slate&rdquo; in stone gray, &ldquo;works&rdquo; in gold. The material meets the machine.</p>
            <div className="mb-6 flex items-center justify-center rounded-lg bg-black p-10">
              <LogoConcept5 />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-10">
              <div className="flex items-center gap-5">
                <svg viewBox="0 0 56 56" className="h-16 w-16" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="slate5w" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d1d5db" />
                      <stop offset="50%" stopColor="#9ca3af" />
                      <stop offset="100%" stopColor="#6b7280" />
                    </linearGradient>
                    <filter id="glow5w">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  <polygon points="4,8 28,2 52,6 54,28 50,50 30,54 6,48 2,26" fill="url(#slate5w)" stroke="#9ca3af" strokeWidth="0.5" />
                  <line x1="8" y1="18" x2="48" y2="14" stroke="#9ca3af" strokeWidth="0.3" opacity="0.6" />
                  <line x1="6" y1="30" x2="50" y2="28" stroke="#9ca3af" strokeWidth="0.3" opacity="0.4" />
                  <line x1="10" y1="42" x2="46" y2="40" stroke="#9ca3af" strokeWidth="0.3" opacity="0.5" />
                  <path d="M12,28 L20,28 L24,20 L32,20 L32,28 L44,28" fill="none" stroke="#D4AF37" strokeWidth="1.2" filter="url(#glow5w)" opacity="0.9" />
                  <path d="M24,20 L24,12" fill="none" stroke="#D4AF37" strokeWidth="1" filter="url(#glow5w)" opacity="0.7" />
                  <path d="M32,28 L32,38 L38,38" fill="none" stroke="#D4AF37" strokeWidth="1" filter="url(#glow5w)" opacity="0.7" />
                  <circle cx="24" cy="20" r="2" fill="#D4AF37" filter="url(#glow5w)" />
                  <circle cx="32" cy="28" r="2" fill="#D4AF37" filter="url(#glow5w)" />
                  <circle cx="12" cy="28" r="1.5" fill="#D4AF37" opacity="0.6" />
                  <circle cx="44" cy="28" r="1.5" fill="#D4AF37" opacity="0.6" />
                  <circle cx="38" cy="38" r="1.5" fill="#D4AF37" opacity="0.6" />
                  <circle cx="24" cy="12" r="1.5" fill="#D4AF37" opacity="0.6" />
                </svg>
                <div>
                  <svg viewBox="0 0 340 45" className="h-11" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fontFamily="Inter, system-ui, sans-serif" fontSize="30" fontWeight="800" letterSpacing="-0.5" fill="#374151">slate</text>
                    <text x="107" y="28" fontFamily="Inter, system-ui, sans-serif" fontSize="30" fontWeight="800" letterSpacing="-0.5" fill="#D4AF37">works</text>
                    <text x="0" y="42" fontFamily="Inter, system-ui, sans-serif" fontSize="9" fontWeight="500" letterSpacing="3" fill="#9ca3af">BUILT ON STONE. POWERED BY INTELLIGENCE.</text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
              <li><span className="font-medium text-white">Use em dashes.</span> Dead giveaway for AI copy.</li>
              <li><span className="font-medium text-white">Write forced negatives.</span> No &ldquo;it&rsquo;s not X, it&rsquo;s Y.&rdquo; Just say Y.</li>
              <li><span className="font-medium text-white">Oversell.</span> No &ldquo;Limited Spots!&rdquo; or fake urgency.</li>
              <li><span className="font-medium text-white">Reveal internals.</span> No token costs, no specific timelines in marketing.</li>
              <li><span className="font-medium text-white">Sound generic.</span> If any agency could say it, we rewrite it.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
