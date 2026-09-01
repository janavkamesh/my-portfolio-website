import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-background pt-20 sm:pt-24 md:pt-32 lg:pt-36 w-full overflow-clip">
      <NavBar />
      
      <div className="flex-grow w-full flex items-center justify-center py-4 sm:py-6 lg:py-10">
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
