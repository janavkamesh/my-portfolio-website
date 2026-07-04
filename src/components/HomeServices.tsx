"use client";

import { useRef } from "react";
import { MdWeb, MdSpeed, MdSearch, MdDevices, MdPalette, MdIntegrationInstructions, MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function HomeServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.1 : clientWidth / 1.1;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Website Design",
      description: "I design clean, professional websites that make your business look credible, trustworthy, and worth choosing.",
      icon: <MdPalette className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "Landing Pages",
      description: "I build landing pages designed around a single conversion goal — whether that's getting a call, a booking, or a sale.",
      icon: <MdWeb className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "SEO Optimization",
      description: "I set up your technical architecture so Google understands what you do and shows it to the right people.",
      icon: <MdSearch className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "Performance & Speed",
      description: "I make sure your website loads instantly, runs smoothly, and never keeps a visitor waiting long enough to leave.",
      icon: <MdSpeed className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "Responsiveness",
      description: "Fluid layouts ensure your website looks stunning and works flawlessly on laptops, tablets, and smartphones.",
      icon: <MdDevices className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "Integrations & Tools",
      description: "I connect your website to the tools your business already uses, automating your workflow seamlessly.",
      icon: <MdIntegrationInstructions className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    }
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-6 py-10 md:py-16">
      <div className="flex flex-col items-center justify-center gap-6 mb-12 md:mb-16">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background text-center w-full">
          What I Offer
        </h2>
      </div>

      {/* Scrollable Container Wrapper */}
      <div className="relative w-full">
        
        {/* Navigation Arrows - Mobile Only */}
        <button 
          onClick={() => scroll("left")} 
          className="md:hidden absolute left-0 top-[40%] -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-xl bg-surface-low border border-outline-variant/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] text-on-surface-variant hover:text-primary transition-colors active:scale-95"
          aria-label="Scroll left"
        >
          <MdChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll("right")} 
          className="md:hidden absolute right-0 top-[40%] -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-xl bg-surface-low border border-outline-variant/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] text-on-surface-variant hover:text-primary transition-colors active:scale-95"
          aria-label="Scroll right"
        >
          <MdChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable Container on Mobile, Grid on Desktop */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-surface-low rounded-2xl border border-outline-variant/40 p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.06)] flex-shrink-0 w-[85vw] md:w-auto md:flex-shrink md:snap-align-none snap-start"
            >
              <div className="mb-6 bg-surface-high w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center border border-outline-variant/40 shadow-sm group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-headline text-xl font-bold text-on-background mb-4">
                {service.title}
              </h3>
              <p className="font-body text-sm md:text-base leading-relaxed text-on-surface-variant">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
