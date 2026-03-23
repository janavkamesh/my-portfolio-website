import React from 'react';

export default function Hero() {
  const images = [ 'tech1.png', 'tech2.png', 'tech3.png', 'tech4.png', 'tech5.png', 'tech6.png', 'tech7.png', 'tech8.png', 'tech9.png'];

  return (
    <section id="home" className="pt-48 pb-24 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-screen border-b border-transparent">
      <div className="max-w-4xl mx-auto z-10 relative mt-16">
        <h1 className="font-roboto font-medium text-[84px] leading-[0.97em] text-heading tracking-tight mb-8">
          I build websites that grow your Business
        </h1>
        <p className="font-inter text-[20px] leading-[1.4em] text-muted max-w-2xl mx-auto mb-12">
          We bridge the gap between technical engineering and high-end
          editorial aesthetics to build websites that command attention.
        </p>
        <button className="bg-darkBtn text-lightBtnText font-manrope font-bold text-[18px] px-12 py-5 rounded-full inline-flex items-center justify-center gap-3 hover:bg-black transition-all hover:scale-105 shadow-2xl mx-auto">
          Book a call
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>

      <div className="mt-32 w-full max-w-[1124px] mx-auto overflow-hidden relative opacity-70 mask-image-gradient flex items-center px-4">
        {/* Infinite scrolling Marquee */}
        <div className="flex w-fit items-center animate-scroll-left hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, idx) => (
            <div key={idx} className="w-[124px] shrink-0 flex items-center justify-center">
              <img 
                src={`/images/${img}`} 
                alt={`Tech stack`} 
                className="h-10 sm:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Modern Text Tags */}
      <div className="absolute inset-0 max-w-[1124px] mx-auto pointer-events-none hidden lg:block">
        <div className="absolute top-[25%] left-[2%] lg:left-[5%] flex flex-col items-center gap-1.5 opacity-[0.45] hover:opacity-[0.65] transition-opacity">
          <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-[10px] font-black">✕</div>
          <span className="font-manrope font-bold text-muted text-[10px] uppercase tracking-widest text-center">no conversion?</span>
        </div>
        
        <div className="absolute top-[65%] left-[5%] lg:left-[8%] flex flex-col items-center gap-1.5 opacity-[0.45] hover:opacity-[0.65] transition-opacity">
          <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-[10px] font-black">✕</div>
          <span className="font-manrope font-bold text-muted text-[10px] uppercase tracking-widest text-center">losing customers?</span>
        </div>
        
        <div className="absolute top-[30%] right-[2%] lg:right-[5%] flex flex-col items-center gap-1.5 opacity-[0.45] hover:opacity-[0.65] transition-opacity">
          <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-[10px] font-black">✕</div>
          <span className="font-manrope font-bold text-muted text-[10px] uppercase tracking-widest text-center">no growth?</span>
        </div>
        
        <div className="absolute top-[60%] right-[8%] lg:right-[12%] flex flex-col items-center gap-1.5 opacity-[0.45] hover:opacity-[0.65] transition-opacity">
          <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-[10px] font-black">✕</div>
          <span className="font-manrope font-bold text-muted text-[10px] uppercase tracking-widest text-center">no sales?</span>
        </div>
      </div>

      {/* Hero background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
}
