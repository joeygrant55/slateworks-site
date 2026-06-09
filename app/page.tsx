import ContactSection from "@/components/home/contact-section";
import DifferenceSection from "@/components/home/difference-section";
import HeroSection from "@/components/home/hero-section";
import LoopMapSection from "@/components/home/loop-map-section";
import LoopThesisSection from "@/components/home/loop-thesis-section";
import ModelSection from "@/components/home/model-section";
import NoAutomateSection from "@/components/home/no-automate-section";
import PricingSection from "@/components/home/pricing-section";
import TeamSection from "@/components/home/team-section";
import WorkSection from "@/components/home/work-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <LoopThesisSection />
      <DifferenceSection />
      <LoopMapSection />
      <ModelSection />
      <WorkSection />
      <NoAutomateSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
