"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <footer className="border-t border-neutral/10 bg-black text-neutral">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 flex items-center">
              <img
                src="/attached_assets/CleanShot 2025-06-24 at 16.24.44_1750796695356.png"
                alt="Slateworks Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 text-neutral-dark">
              We craft digital experiences that help ambitious businesses grow and thrive in the digital landscape.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-neutral-dark transition-colors hover:text-secondary">Website Development</a></li>
              <li><a href="#services" className="text-neutral-dark transition-colors hover:text-secondary">Web Applications</a></li>
              <li><a href="#services" className="text-neutral-dark transition-colors hover:text-secondary">Mobile Applications</a></li>
              <li><a href="#services" className="text-neutral-dark transition-colors hover:text-secondary">UI/UX Design</a></li>
              <li><a href="#services" className="text-neutral-dark transition-colors hover:text-secondary">Digital Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-neutral-dark transition-colors hover:text-secondary">About Us</a></li>
              <li><a href="#work" className="text-neutral-dark transition-colors hover:text-secondary">Our Work</a></li>
              <li><a href="#about" className="text-neutral-dark transition-colors hover:text-secondary">Careers</a></li>
              <li><a href="#" className="text-neutral-dark transition-colors hover:text-secondary">Blog</a></li>
              <li><a href="#contact" className="text-neutral-dark transition-colors hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Subscribe</h4>
            <p className="mb-4 text-neutral-dark">Stay up to date with our latest news and projects.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-l-sm rounded-r-none border border-neutral/10 bg-neutral-darker px-4 py-2 text-neutral focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
              />
              <button
                type="submit"
                className="rounded-l-none rounded-r-sm bg-secondary px-4 font-medium text-black hover:bg-secondary-light"
                disabled={isSubmitting}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-neutral/10 pt-8 md:flex-row">
          <p className="mb-4 text-neutral-dark md:mb-0">&copy; {new Date().getFullYear()} Slateworks. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-dark transition-colors hover:text-secondary">Privacy Policy</a>
            <a href="#" className="text-neutral-dark transition-colors hover:text-secondary">Terms of Service</a>
            <a href="#" className="text-neutral-dark transition-colors hover:text-secondary">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
