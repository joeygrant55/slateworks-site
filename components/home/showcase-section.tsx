"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import BrowserFrame from "@/components/ui/browser-frame";

type Build = {
  src: string;
  url: string;
  imgClassName: string;
  name: string;
  blurb: string;
  href: string;
  external?: boolean;
};

const builds: Build[] = [
  {
    src: "/images/sparked-inbound-intake.jpg",
    url: "sparkedinbound.com",
    imgClassName: "object-top",
    name: "Sparked Inbound",
    blurb: "An AI brand-messaging diagnostic that reads a site and returns an analysis in 90 seconds.",
    href: "/work/sparked-inbound",
  },
  {
    src: "/images/sparqcertified-live.jpg",
    url: "sparqcertified.com",
    imgClassName: "object-top",
    name: "SPARQ Certified",
    blurb: "A facility-partnership site with a built-in revenue calculator — 100+ signups in 30 days.",
    href: "/work/sparq-certified",
  },
  {
    src: "/images/suncoast-harvest-hero.jpg",
    url: "suncoastharvest.com",
    imgClassName: "object-top",
    name: "Suncoast Harvest",
    blurb: "The full product platform for a sustainable-agriculture supplier — catalog, labels, and ordering.",
    href: "https://suncoastharvest.com/",
    external: true,
  },
  {
    src: "/images/profluence-landing.jpg",
    url: "profluence.com",
    imgClassName: "object-top",
    name: "Profluence",
    blurb: "The public platform site for a private sports-business network — built and maintained by Slateworks.",
    href: "/work/profluence",
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="showcase" className="bg-black py-24 text-neutral md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Real builds</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Systems we&apos;ve shipped.
          </h2>
          <p className="mt-5 text-lg text-neutral-dark">
            Tools, apps, and sites we built and handed off — across web, mobile, and AI.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {builds.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {(() => {
                const card = (
                  <>
                    <BrowserFrame
                      src={b.src}
                      alt={`${b.name} — built by Slateworks`}
                      url={b.url}
                      imgClassName={b.imgClassName}
                      className="transition-all duration-300 group-hover:-translate-y-1 group-hover:border-secondary/30"
                    />
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="flex items-center gap-1.5 text-lg font-semibold text-neutral">
                          {b.name}
                          <ArrowUpRight className="h-4 w-4 text-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-neutral-dark">{b.blurb}</p>
                      </div>
                    </div>
                  </>
                );
                return b.external ? (
                  <a href={b.href} target="_blank" rel="noopener noreferrer" className="group block">
                    {card}
                  </a>
                ) : (
                  <Link href={b.href} className="group block">
                    {card}
                  </Link>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
