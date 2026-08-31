import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full pt-[15vh] pb-[30vh] md:py-0 md:min-h-[calc(100vh-128px)] flex flex-col items-center md:justify-center text-center px-6 md:px-8 mt-4 md:mt-0">
      
      {/* Background Glow Effect for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="flex flex-col items-center gap-8 max-w-3xl md:max-w-4xl w-full">
        
        {/* Main Headline */}
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-on-background tracking-tight leading-[1.15]">
          I build websites that bring{" "}
          <span className="text-primary relative inline-block whitespace-nowrap">
            more customers
            {/* Custom underline accent */}
            <span className="absolute bottom-1.5 md:bottom-3 left-0 w-full h-[4px] md:h-[8px] bg-primary/40 rounded-full -z-10"></span>
          </span>
          {" "}to your business
        </h1>
        
        {/* Subtitle */}
        <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-on-surface-variant max-w-[95%] md:max-w-2xl leading-relaxed mx-auto">
          Most local businesses lose customers to competitors simply because of a better website. I fix that with a simple, professional website that makes people <span className="whitespace-nowrap">choose you.</span>
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-[90%] sm:w-auto relative z-10">
          <Link 
            href="#contact" 
            className="flex-1 sm:flex-none inline-flex items-center justify-center bg-primary text-background font-body font-semibold text-sm sm:text-base px-2 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            Book a call
          </Link>
          <Link 
            href="#projects" 
            className="flex-1 sm:flex-none inline-flex items-center justify-center bg-transparent border border-outline-variant text-on-background hover:text-primary hover:border-primary/50 font-body font-medium text-sm sm:text-base px-2 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            View my projects
          </Link>
        </div>
      </div>

      {/* Curved background at the bottom with scroll icon inside */}
      {/* 
        - Height reduced by ~30% (from 220px to 150px) to prevent it from covering too much screen
        - This creates breathing room between the CTA buttons and the top of the arch
        - Arrow button remains anchored at the bottom
      */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] md:w-[100vw] h-[150px] md:h-[180px] bg-gradient-to-b from-[#06B6D4]/[14%] via-surface-low to-background rounded-t-[50%] flex justify-center items-end pb-12 shadow-[0_-15px_50px_rgba(6,182,212,0.15)] border-t-[3px] border-primary">
        <Link 
          href="#projects" 
          className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-primary/20 bg-background/50 backdrop-blur-md transition-colors animate-bounce mb-2"
          aria-label="Scroll to next section"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
