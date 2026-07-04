import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import HomeServices from "@/components/HomeServices";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background pt-24 md:pt-32 w-full overflow-clip">
      <NavBar />
      <Hero />
      <TechMarquee />
      <Projects />
      <HomeServices />
      <CallToAction />
      <FAQ />
      <Footer />
    </main>
  );
}
