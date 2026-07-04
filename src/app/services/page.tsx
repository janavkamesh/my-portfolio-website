import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background pt-24 md:pt-32 w-full overflow-clip">
      <NavBar />
      
      <div className="flex-grow w-full">
        <Services />
        <CallToAction />
      </div>
      
      <Footer />
    </main>
  );
}
