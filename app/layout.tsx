import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Slateworks — Senior AI Engineering Studio",
  description: "Slateworks is a senior AI engineering studio. We design, build, and ship AI products and systems for companies and for the firms that sell builds under their own name.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://slateworks.io"),
  openGraph: {
    title: "Slateworks — Senior AI Engineering Studio",
    description: "Slateworks is a senior AI engineering studio. We design, build, and ship AI products and systems for companies and for the firms that sell builds under their own name.",
    url: "https://slateworks.io",
    siteName: "Slateworks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slateworks — Senior AI Engineering Studio",
    description: "Slateworks is a senior AI engineering studio. We design, build, and ship AI products and systems for companies and for the firms that sell builds under their own name.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} bg-paper text-ink antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
