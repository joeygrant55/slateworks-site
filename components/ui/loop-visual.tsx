"use client";

import { motion } from "framer-motion";

/**
 * An abstract "managed operating loop" motif for the hero.
 * A slow-rotating gold arc travels a ring of six nodes — signal, decision,
 * action, measurement, learning, better action — without labelling them
 * (the labelled diagram lives further down the page). Premium, restrained.
 */
const NODES = 6;
const R = 150; // ring radius within a 400x400 viewBox
const CX = 200;
const CY = 200;

const nodePoints = Array.from({ length: NODES }, (_, i) => {
  const angle = (i / NODES) * Math.PI * 2 - Math.PI / 2; // start at top
  return {
    x: CX + R * Math.cos(angle),
    y: CY + R * Math.sin(angle),
  };
});

export default function LoopVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.07] blur-3xl" />

      <svg viewBox="0 0 400 400" className="relative h-full w-full" fill="none">
        <defs>
          <linearGradient id="arcGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e6c667" stopOpacity="0" />
            <stop offset="55%" stopColor="#e6c667" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* the ring the loop runs on + faint concentric tracks */}
        <circle cx={CX} cy={CY} r={R} stroke="#d4af37" strokeOpacity="0.18" strokeWidth="1.25" />
        <circle cx={CX} cy={CY} r={R - 34} stroke="white" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={R + 34} stroke="white" strokeOpacity="0.05" strokeWidth="1" />

        {/* core glow */}
        <circle cx={CX} cy={CY} r="80" fill="url(#coreGlow)" />

        {/* rotating gold arc — the loop "running".
            Rotation is driven by the global `rotate` keyframe + transform-box:fill-box
            so it pivots around the circle's own centre (200,200), not the SVG origin. */}
        <g
          className="animate-[rotate_16s_linear_infinite]"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <circle
            cx={CX}
            cy={CY}
            r={R}
            stroke="url(#arcGold)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${(2 * Math.PI * R) * 0.32} ${(2 * Math.PI * R) * 0.68}`}
          />
          {/* leading dot, sitting on the head of the visible arc (3 o'clock) */}
          <circle cx={CX + R} cy={CY} r="4.5" fill="#f3e0a3" />
        </g>

        {/* fixed nodes around the ring */}
        {nodePoints.map((p, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 * i, duration: 0.5 }}
          >
            <circle cx={p.x} cy={p.y} r="11" fill="#0a0a0a" stroke="#d4af37" strokeOpacity="0.75" strokeWidth="1.25" />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#d4af37"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
