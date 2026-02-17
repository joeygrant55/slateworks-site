import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slateworks — AI-Powered Development Agency",
  description: "An agency powered by intelligence. We design, build, and ship digital products in days, not months.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://slateworks.io"),
  openGraph: {
    title: "Slateworks — AI-Powered Development Agency",
    description: "An agency powered by intelligence. We design, build, and ship digital products in days, not months.",
    url: "https://slateworks.io",
    siteName: "Slateworks",
    type: "website",
    images: [{ url: "/logo-512.png", width: 512, height: 512, alt: "Slateworks" }],
  },
  twitter: {
    card: "summary",
    title: "Slateworks — AI-Powered Development Agency",
    description: "An agency powered by intelligence. We design, build, and ship digital products in days, not months.",
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
      </body>
    </html>
  );
}
