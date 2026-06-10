"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * The hero's signature element: a stylized "system running" feed.
 * Illustrative events only — generic, no client data, no invented metrics.
 * The sequence replays on a loop (remount via key) so the system reads
 * as alive: capture → decide → act → measure → learn.
 */
const EVENTS = [
  { label: "lead captured", detail: "website form", tone: "neutral" },
  { label: "qualified", detail: "score 87 / 100", tone: "gold" },
  { label: "routed → sales", detail: "context attached", tone: "neutral" },
  { label: "follow-up queued", detail: "day 3 ✓", tone: "neutral" },
  { label: "report generated", detail: "weekly · auto", tone: "neutral" },
  { label: "learning", detail: "follow-up timing adjusted", tone: "gold" },
] as const;

const CYCLE_MS = 9000;

export default function SystemFeed({ className = "" }: { className?: string }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      {/* ambient glow */}
      <div className="absolute -inset-6 rounded-3xl bg-secondary/[0.06] blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-neutral/10 bg-neutral-darker/90 shadow-2xl shadow-black/50 backdrop-blur-sm">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-neutral/10 bg-black/40 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-xs tracking-wide text-neutral-dark">slateworks&nbsp;os</span>
        </div>

        {/* event feed — remounts each cycle so the stagger replays */}
        <div className="px-5 py-5 font-mono text-[13px] leading-relaxed" key={cycle}>
          {EVENTS.map((e, i) => (
            <motion.div
              key={e.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 1.1, duration: 0.45, ease: "easeOut" }}
              className="flex items-baseline gap-3 py-1.5"
            >
              <motion.span
                className={`h-1.5 w-1.5 shrink-0 self-center rounded-full ${
                  e.tone === "gold" ? "bg-secondary" : "bg-secondary/40"
                }`}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 + i * 1.1 }}
              />
              <span className={e.tone === "gold" ? "text-secondary-light" : "text-neutral"}>{e.label}</span>
              <span className="ml-auto text-right text-neutral-dark/80">{e.detail}</span>
            </motion.div>
          ))}
        </div>

        {/* status strip */}
        <div className="flex items-center gap-2 border-t border-neutral/10 bg-black/40 px-5 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/60 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          <span className="font-mono text-[11px] tracking-wide text-neutral-dark">running · improving</span>
        </div>
      </div>
    </div>
  );
}
