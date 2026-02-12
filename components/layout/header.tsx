"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = ["Services", "Work", "About", "Contact"];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/95 shadow-2xl shadow-black/20 backdrop-blur-md"
            : "bg-black/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link
              href="/"
              className="group flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-black"
            >
              <img
                src="/attached_assets/CleanShot 2025-06-24 at 22.11.16_1750817502034.png"
                alt="Slateworks - Premium Digital Agency"
                className="h-8 w-auto transition-all duration-300 group-hover:opacity-80 sm:h-10 lg:h-12"
              />
            </Link>

            <nav className="hidden items-center space-x-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative rounded px-2 py-1 text-sm font-medium tracking-wide text-white/90 transition-all duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-black"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/auth"
                className="hidden rounded-full border border-secondary px-6 py-2 font-medium text-secondary transition-all duration-300 hover:bg-secondary hover:text-black lg:inline-block"
              >
                Sign In
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="rounded-lg p-2 transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-black lg:hidden"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
      )}

      <div
        className={`fixed left-0 right-0 top-16 z-50 transform transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full pointer-events-none opacity-0"
        }`}
      >
        <nav className="border-b border-white/20 bg-black/95 shadow-2xl backdrop-blur-md">
          <div className="mx-auto max-w-7xl space-y-6 px-4 py-6">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block border-b border-white/10 py-2 text-lg font-medium tracking-wide text-white/90 transition-colors duration-300 hover:text-secondary focus:text-secondary focus:outline-none"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4">
              <Link
                href="/auth"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full rounded border border-secondary px-4 py-3 text-center text-lg font-medium text-secondary transition-all duration-300 hover:bg-secondary hover:text-black"
              >
                Sign In
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
