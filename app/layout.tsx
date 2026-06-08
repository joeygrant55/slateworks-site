import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slateworks — Managed Operating Loops for Small Teams",
  description: "Slateworks finds performance leaks and turns them into managed operating loops — simple software, automations, and AI agents that capture the value and keep improving.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://slateworks.io"),
  openGraph: {
    title: "Slateworks — Managed Operating Loops for Small Teams",
    description: "Slateworks finds performance leaks and turns them into managed operating loops — simple software, automations, and AI agents that capture the value and keep improving.",
    url: "https://slateworks.io",
    siteName: "Slateworks",
    type: "website",
    images: [{ url: "/logo-512.png", width: 512, height: 512, alt: "Slateworks" }],
  },
  twitter: {
    card: "summary",
    title: "Slateworks — Managed Operating Loops for Small Teams",
    description: "Slateworks finds performance leaks and turns them into managed operating loops — simple software, automations, and AI agents that capture the value and keep improving.",
    images: ["/logo-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
