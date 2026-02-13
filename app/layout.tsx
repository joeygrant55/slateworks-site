import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slateworks — AI-Powered Development Agency",
  description: "An agency powered by intelligence. We design, build, and ship digital products in days, not months.",
  icons: {
    icon: "/favicon.svg",
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
