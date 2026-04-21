import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import TeamSection from "@/components/home/team-section";

export const metadata = {
  title: "About — Slateworks",
  description: "An agency powered by intelligence — artificial and otherwise. Meet the team that ships 24/7.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
}
