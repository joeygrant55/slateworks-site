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
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #D4AF37, #F5D060, #D4AF37, transparent)",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px 80px",
            flex: 1,
          }}
        >
          {/* Big provocative headline */}
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              marginBottom: "28px",
            }}
          >
            Your idea.
            <br />
            <span style={{ color: "#D4AF37" }}>Built in days.</span>
          </span>

          {/* Subline */}
          <span
            style={{
              fontSize: "24px",
              color: "#9ca3af",
              lineHeight: 1.4,
              maxWidth: "500px",
              marginBottom: "40px",
            }}
          >
            5 AI agents. Production-quality code. Shipped while traditional agencies are still scheduling kickoff calls.
          </span>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-1px",
              }}
            >
              slateworks
            </span>
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#D4AF37",
                borderRadius: "1px",
                marginLeft: "3px",
                marginBottom: "4px",
              }}
            />
          </div>
        </div>

        {/* Right side — agent cards stacked */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            paddingRight: "70px",
            width: "340px",
          }}
        >
          {[
            { name: "Sammy", role: "Lead Engineer", color: "#f59e0b" },
            { name: "Nova", role: "Design & UX", color: "#a855f7" },
            { name: "Atlas", role: "Infrastructure", color: "#3b82f6" },
            { name: "Muse", role: "Content & Copy", color: "#10b981" },
            { name: "Scout", role: "Research", color: "#8b5cf6" },
          ].map((agent) => (
            <div
              key={agent.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 18px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Color dot */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: `linear-gradient(135deg, ${agent.color}, ${agent.color}aa)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "white",
                }}
              >
                {agent.name[0]}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: "white" }}>
                  {agent.name}
                </span>
                <span style={{ fontSize: "12px", color: "#6b7280" }}>
                  {agent.role}
                </span>
              </div>
              {/* Online dot */}
              <div
                style={{
                  marginLeft: "auto",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
