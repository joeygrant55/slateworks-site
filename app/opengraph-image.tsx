import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Slateworks — AI systems, built with your team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
          padding: "80px 90px",
        }}
      >
        {/* ambient gold glow */}
        <div
          style={{
            position: "absolute",
            top: "-220px",
            right: "-140px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-80px",
            width: "440px",
            height: "440px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />

        {/* gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #D4AF37, #E6C667, #D4AF37, transparent)",
          }}
        />

        {/* eyebrow */}
        <span
          style={{
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "6px",
            color: "#D4AF37",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          AI systems, built with your team
        </span>

        {/* headline */}
        <span
          style={{
            fontSize: "84px",
            fontWeight: 800,
            color: "#fafafa",
            lineHeight: 1.05,
            letterSpacing: "-3px",
            maxWidth: "950px",
            marginBottom: "36px",
          }}
        >
          There&apos;s profit hiding in your business.
        </span>

        {/* subline */}
        <span
          style={{
            fontSize: "26px",
            color: "#9aa0aa",
            lineHeight: 1.45,
            maxWidth: "760px",
            marginBottom: "56px",
          }}
        >
          We build the tools, automations, and AI your team is missing — then level your team up to run them.
        </span>

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              fontSize: "34px",
              fontWeight: 800,
              color: "#fafafa",
              letterSpacing: "-1px",
            }}
          >
            slateworks
          </span>
          <div
            style={{
              width: "7px",
              height: "7px",
              backgroundColor: "#D4AF37",
              borderRadius: "2px",
              marginLeft: "4px",
              marginBottom: "4px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
