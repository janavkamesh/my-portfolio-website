import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import HowIWork from "@/components/HowIWork";
import CallToAction from "@/components/CallToAction";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background pt-24 md:pt-32 w-full overflow-clip">
      <NavBar />
      
      <div className="flex-grow w-full flex flex-col items-center">
        <AboutMe />
        <HowIWork />
      </div>

      <CallToAction />
      <Footer />
    </main>
  );
}
