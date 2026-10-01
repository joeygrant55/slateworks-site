"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Wordmark from "@/components/studio/wordmark";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Writing", href: "/blog" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-rule bg-paper/95 backdrop-blur-md" : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" aria-label="Slateworks home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal"
          >
            Start a conversation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100dvh-4rem)] border-t border-rule bg-paper px-5 pt-6 md:hidden">
          {[...navItems, { label: "Start a conversation", href: "/#contact" }].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rule py-4 font-display text-2xl text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
