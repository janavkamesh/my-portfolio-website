import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-128px)] flex flex-col items-center justify-center text-center px-4 md:px-8">
      
      {/* Background Glow Effect for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl w-full">
        
        {/* Main Headline */}
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-background tracking-tight leading-[1.1]">
          I build websites that bring{" "}
          <span className="text-primary relative inline-block whitespace-nowrap">
            more customers
            {/* Custom underline accent */}
            <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-[6px] md:h-[8px] bg-primary/40 rounded-full -z-10"></span>
          </span>
          {" "}to your business.
        </h1>
        
        {/* Subtitle */}
        <p className="font-body text-base md:text-lg lg:text-xl text-on-surface-variant max-w-2xl leading-relaxed mt-2">
          Most local businesses lose customers to competitors simply because of a better website. I fix that with a simple, professional website that makes people choose you.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-background font-body font-semibold text-base px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95"
          >
            Book a call
          </Link>
          <Link 
            href="#projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-outline-variant text-on-background hover:text-primary hover:border-primary/50 font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 active:scale-95"
          >
            View my projects
          </Link>
        </div>
      </div>
    </section>
  );
}
