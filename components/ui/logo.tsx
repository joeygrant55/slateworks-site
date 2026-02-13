"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const sizes = {
  sm: { viewBox: "0 0 220 35", height: "h-6", fontSize: 26, dotSize: 3.5, dotY: 23 },
  md: { viewBox: "0 0 320 50", height: "h-8", fontSize: 38, dotSize: 5, dotY: 33 },
  lg: { viewBox: "0 0 420 65", height: "h-12", fontSize: 50, dotSize: 6.5, dotY: 43 },
};

export default function Logo({ className = "", size = "md", variant = "light" }: LogoProps) {
  const s = sizes[size];
  const textFill = variant === "light" ? "white" : "#0a0a0a";

  return (
    <svg
      viewBox={s.viewBox}
      className={`${s.height} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Slateworks logo"
    >
      <defs>
        <linearGradient id={`logo-gold-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F5D060" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y={s.dotY + 3}
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize={s.fontSize}
        fontWeight="800"
        letterSpacing="-1.5"
        fill={textFill}
      >
        slateworks
      </text>
      <rect
        x={s.fontSize * 6.65}
        y={s.dotY}
        width={s.dotSize}
        height={s.dotSize}
        rx="1"
        fill={`url(#logo-gold-${size})`}
      />
    </svg>
  );
}
