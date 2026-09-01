import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100svh-90px)] sm:min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-128px)] pt-10 sm:pt-14 md:pt-[11vh] pb-32 sm:pb-36 md:pb-0 flex flex-col items-center md:justify-start text-center px-6 md:px-8 mt-2 md:mt-0">
      
      {/* Background Glow Effect for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="flex flex-col items-center gap-5 md:gap-6 lg:gap-8 max-w-3xl md:max-w-5xl w-full my-auto md:my-0">
        
        {/* Main Headline */}
        <h1 className="font-headline text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-on-background tracking-tight leading-[1.15]">
          I build websites that bring{" "}
          <span className="text-primary relative inline-block whitespace-nowrap">
            more customers
            {/* Custom underline accent */}
            <span className="absolute bottom-1.5 md:bottom-3 left-0 w-full h-[4px] md:h-[8px] bg-primary/40 rounded-full -z-10"></span>
          </span>
          {" "}to your business
        </h1>
        
        {/* Subtitle */}
        <p className="font-body text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-on-surface-variant max-w-[95%] md:max-w-xl lg:max-w-3xl xl:max-w-4xl leading-relaxed mx-auto text-center">
          Most local businesses lose customers to competitors simply because of a better website. I fix that with a simple, professional website that makes people <span className="whitespace-nowrap">choose you.</span>
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-[90%] sm:w-auto relative z-10 mx-auto mt-2 md:mt-3 lg:mt-4">
          <Link 
            href="#contact" 
            className="flex-1 sm:flex-none inline-flex items-center justify-center bg-primary text-background font-body font-semibold text-sm sm:text-base px-4 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            Book a call
          </Link>
          <Link 
            href="#projects" 
            className="flex-1 sm:flex-none inline-flex items-center justify-center bg-transparent border border-outline-variant text-on-background hover:text-primary hover:border-primary/50 font-body font-medium text-sm sm:text-base px-4 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            View my projects
          </Link>
        </div>
      </div>

      {/* Seamless curved glowing arch at the bottom with scroll icon inside */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[12%] md:translate-y-[20%] w-[140vw] sm:w-[120vw] md:w-[100vw] h-[130px] md:h-[120px] bg-transparent rounded-t-[50%] flex justify-center items-end pb-8 md:pb-8 shadow-[0_-10px_40px_rgba(6,182,212,0.15)] border-t-2 border-primary pointer-events-none">
        <Link 
          href="#projects" 
          className="pointer-events-auto w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center text-primary hover:text-white bg-surface-low/90 border border-outline-variant/60 hover:border-primary/60 hover:bg-primary/20 backdrop-blur-md transition-all duration-300 animate-bounce mb-3 md:mb-0 translate-y-0 md:translate-y-[15%] shadow-lg"
          aria-label="Scroll to next section"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-4 md:h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
