"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="border-t border-neutral/10 bg-black text-neutral">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Logo size="sm" variant="light" />
            </Link>
            <p className="mb-6 text-sm text-neutral-dark">
              AI-powered development agency. We design, build, and ship digital products at a pace traditional agencies can only talk about.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider">What We Build</h4>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Websites</a></li>
              <li><a href="/#services" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Web Applications</a></li>
              <li><a href="/#services" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Mobile Apps</a></li>
              <li><a href="/#services" className="text-sm text-neutral-dark transition-colors hover:text-secondary">AI Products</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-sm text-neutral-dark transition-colors hover:text-secondary">The Team</a></li>
              <li><a href="/#work" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Our Work</a></li>
              <li><Link href="/blog" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Blog</Link></li>
              <li><a href="/#contact" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-neutral-dark">joey@slateworks.io</span></li>
              <li><span className="text-sm text-neutral-dark">(727) 266-6378</span></li>
              <li><span className="text-sm text-neutral-dark">St. Petersburg, FL</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-neutral/10 pt-8 md:flex-row">
          <p className="mb-4 text-sm text-neutral-dark md:mb-0">&copy; {new Date().getFullYear()} Slateworks. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
            <a href="#" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Privacy Policy</a>
            <a href="#" className="text-sm text-neutral-dark transition-colors hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
