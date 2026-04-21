import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ContactSection from "@/components/home/contact-section";

export const metadata = {
  title: "Contact — Slateworks",
  description: "Ready to find the profit hiding in your business? Get in touch with Slateworks.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
