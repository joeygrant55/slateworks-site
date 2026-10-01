import Link from "next/link";
import Wordmark from "@/components/studio/wordmark";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-xs text-sm text-ink-muted">Senior AI engineering studio. St. Petersburg, FL.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-ink-soft hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-6xl border-t border-rule px-5 py-6 font-mono text-[11px] text-ink-muted md:px-8">
        © {new Date().getFullYear()} Slateworks LLC
      </div>
    </footer>
  );
}
