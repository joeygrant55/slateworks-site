import Approach from "@/components/studio/approach";
import Contact from "@/components/studio/contact";
import Hero from "@/components/studio/hero";
import Services from "@/components/studio/services";
import SiteFooter from "@/components/studio/site-footer";
import SiteHeader from "@/components/studio/site-header";
import Studio from "@/components/studio/studio";
import Work from "@/components/studio/work";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <Hero />
      <Services />
      <Studio />
      <Work />
      <Approach />
      <Contact />
      <SiteFooter />
    </main>
  );
}
