import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-16">
      <div className="relative bg-surface-low rounded-2xl border border-outline-variant/40 p-10 md:p-20 flex flex-col items-center text-center gap-8 overflow-hidden shadow-lg group">
        
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-primary/5 blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>

        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background max-w-3xl relative z-10 leading-tight">
          Ready to get more customers?
        </h2>
        
        <p className="font-body text-base md:text-xl text-on-surface-variant max-w-2xl relative z-10 leading-relaxed">
          Tell me about your business in a quick 15-minute call, and I'll show you exactly how I can help. I'll handle everything from there.
        </p>
        
        <Link 
          href="#contact"
          className="relative z-10 bg-primary text-background font-body font-semibold text-base px-10 py-4 rounded-full hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95 flex items-center gap-3 mt-4"
        >
          Book a Call
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
