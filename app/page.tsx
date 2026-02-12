import ContactSection from "@/components/home/contact-section";
import CTASection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import ProcessSection from "@/components/home/process-section";
import ServicesSection from "@/components/home/services-section";
import TeamSection from "@/components/home/team-section";
import TestimonialSection from "@/components/home/testimonial-section";
import WorkSection from "@/components/home/work-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <TestimonialSection />
      <TeamSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
