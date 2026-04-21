import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import WorkSection from "@/components/home/work-section";

export const metadata = {
  title: "Our Work — Slateworks",
  description: "Real products, live in production. See how we find profit hiding in broken processes and turn it into revenue.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <WorkSection />
      </div>
      <Footer />
    </main>
  );
}
