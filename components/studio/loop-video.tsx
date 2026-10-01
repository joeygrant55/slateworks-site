"use client";

import { useEffect, useRef } from "react";

type LoopVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/** Muted product loop that only plays while on screen, and stays a still frame for reduced-motion users. */
export default function LoopVideo({ src, poster, label, className = "" }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
