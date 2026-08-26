import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Steps from "@/components/home/Steps";
import Templates from "@/components/home/Templates";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FF] text-[#171923]">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Steps />
      <Templates />
      <Footer />
    </main>
  );
}
