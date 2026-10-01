import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Slateworks — Senior AI engineering for teams that can't afford to get it wrong.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f3f1ec";
const INK = "#131313";
const MUTED = "#6b6d70";
const SIGNAL = "#e8501f";

export default async function Image() {
  const root = process.cwd();
  const [display, mono, photo] = await Promise.all([
    readFile(join(root, "app/_og/space-grotesk-600.ttf")),
    readFile(join(root, "app/_og/jetbrains-mono-400.ttf")),
    readFile(join(root, "public/video/monolith-end.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: PAPER }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 620,
          padding: "64px 56px 60px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontFamily: "Display",
            fontSize: 40,
            color: INK,
            letterSpacing: -1.6,
          }}
        >
          slateworks
          <div style={{ width: 11, height: 11, background: SIGNAL, marginLeft: 3, marginBottom: 9 }} />
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Display",
            fontSize: 54,
            lineHeight: 1.04,
            color: INK,
            letterSpacing: -1.8,
          }}
        >
          Senior AI engineering for teams that can&apos;t afford to get it wrong.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Mono",
            fontSize: 17,
            color: MUTED,
            letterSpacing: 2.5,
          }}
        >
          <div style={{ width: 9, height: 9, borderRadius: 9, background: SIGNAL, marginRight: 14 }} />
          AI ENGINEERING STUDIO · SLATEWORKS.IO
        </div>
      </div>
      <img src={photoSrc} alt="" width={580} height={630} style={{ objectFit: "cover", objectPosition: "62% 50%" }} />
    </div>,
    {
      ...size,
      fonts: [
        { name: "Display", data: display, weight: 600, style: "normal" },
        { name: "Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
