import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slateworks — AI Systems, and the Team to Run Them",
  description: "Slateworks builds the tools, automations, and AI systems your business is missing — then levels up your team to run and extend them. You get the software and the capability, not a dependency.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://slateworks.io"),
  openGraph: {
    title: "Slateworks — AI Systems, and the Team to Run Them",
    description: "Slateworks builds the tools, automations, and AI systems your business is missing — then levels up your team to run and extend them. You get the software and the capability, not a dependency.",
    url: "https://slateworks.io",
    siteName: "Slateworks",
    type: "website",
    images: [{ url: "/logo-512.png", width: 512, height: 512, alt: "Slateworks" }],
  },
  twitter: {
    card: "summary",
    title: "Slateworks — AI Systems, and the Team to Run Them",
    description: "Slateworks builds the tools, automations, and AI systems your business is missing — then levels up your team to run and extend them. You get the software and the capability, not a dependency.",
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
