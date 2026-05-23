import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slateworks — Performance Leak Diagnostics & AI Automation",
  description: "Slateworks finds where performance leaks out of your business, then builds simple software and AI automation to capture it.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://slateworks.io"),
  openGraph: {
    title: "Slateworks — Performance Leak Diagnostics & AI Automation",
    description: "Slateworks finds where performance leaks out of your business, then builds simple software and AI automation to capture it.",
    url: "https://slateworks.io",
    siteName: "Slateworks",
    type: "website",
    images: [{ url: "/logo-512.png", width: 512, height: 512, alt: "Slateworks" }],
  },
  twitter: {
    card: "summary",
    title: "Slateworks — Performance Leak Diagnostics & AI Automation",
    description: "Slateworks finds where performance leaks out of your business, then builds simple software and AI automation to capture it.",
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
