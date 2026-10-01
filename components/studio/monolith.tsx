"use client";

import { useEffect, useRef, useState } from "react";

/** Full-bleed signature film: plays once when it scrolls into view and rests on its lit final frame. */
export default function Monolith() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
      return;
    }
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const media = "h-full w-full object-cover object-[62%_50%]";

  return (
    <section aria-label="Slateworks signature film" className="border-b border-rule bg-paper">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep sm:aspect-[16/9] lg:aspect-[21/9]">
        {reduceMotion ? (
          <img src="/video/monolith-end.jpg" alt="" className={media} />
        ) : (
          <video
            ref={ref}
            src="/video/monolith.mp4"
            poster="/video/monolith-poster.jpg"
            muted
            playsInline
            preload="metadata"
            aria-hidden
            className={media}
          />
        )}
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-2 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted md:px-8">
        <span>Fig. 01 — Every build starts as raw material.</span>
        <span className="text-ink-muted/70">Slateworks</span>
      </div>
    </section>
  );
}
