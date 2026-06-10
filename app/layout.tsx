import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Slateworks — AI Systems, and the Team to Run Them",
    description: "Slateworks builds the tools, automations, and AI systems your business is missing — then levels up your team to run and extend them. You get the software and the capability, not a dependency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
