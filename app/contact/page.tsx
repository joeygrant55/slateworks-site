import Contact from "@/components/studio/contact";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";

export const metadata = {
  title: "Contact — Slateworks",
  description: "Tell us what you're building. Every inquiry reaches Joey Grant directly.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper-deep text-ink">
      <SiteHeader />
      <div className="pt-12 md:pt-16">
        <Contact />
      </div>
      <SiteFooter />
    </main>
  );
}
