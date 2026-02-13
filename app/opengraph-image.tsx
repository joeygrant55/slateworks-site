import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Slateworks — AI-Powered Development Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #D4AF37, #F5D060, #D4AF37)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: "40px" }}>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            slateworks
          </span>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#D4AF37",
              borderRadius: "2px",
              marginLeft: "4px",
              marginBottom: "8px",
            }}
          />
        </div>

        {/* Tagline */}
        <span
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#e5e7eb",
            lineHeight: 1.3,
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          An agency powered by intelligence.
        </span>

        <span
          style={{
            fontSize: "24px",
            color: "#9ca3af",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          We design, build, and ship digital products in days. Not months.
        </span>

        {/* Agent status pills */}
        <div style={{ display: "flex", gap: "16px", marginTop: "48px" }}>
          {["Sammy", "Nova", "Atlas", "Muse", "Scout"].map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                }}
              />
              <span style={{ fontSize: "16px", color: "#9ca3af" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
