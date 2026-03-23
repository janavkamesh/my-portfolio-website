import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-darkFooter pt-32 pb-24 px-4 rounded-t-[50px] relative mt-0">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        
        {/* Let's connect block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-zinc-800 pb-16">
          <h2 className="font-roboto font-extrabold text-[36px] md:text-[44px] text-pureWhite tracking-tight leading-[1.2em]">
            Let's connect via email.
          </h2>
          <a href="mailto:hello@example.com" className="bg-pureWhite text-[#18181B] font-manrope font-bold text-[18px] px-12 py-5 flex items-center justify-center gap-3 rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-2xl shrink-0">
            Connect
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

        {/* Brand & Social Links */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="flex flex-col gap-10 max-w-sm">
            <div className="flex flex-col gap-4">
              <span className="font-manrope font-black text-[32px] text-pureWhite tracking-[-0.05em]">Janav</span>
              <p className="font-inter text-[16px] text-zinc400 leading-[1.625em]">
                I translate business goals into highly functional digital experiences. Built with performance and elegance in mind.
              </p>
            </div>
            
            {/* Custom Hover Social Icons */}
            <div className="flex items-center gap-4 group-icons relative">
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-[#18181B] flex items-center justify-center text-zinc-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300 relative z-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.067 3.282.151 4.773 1.636 4.925 4.918.055 1.268.067 1.649.067 4.852s-.012 3.585-.067 4.853c-.152 3.284-1.644 4.767-4.925 4.919-1.267.054-1.647.067-4.851.067s-3.583-.013-4.85-.067c-3.283-.152-4.773-1.635-4.925-4.919-.054-1.268-.067-1.649-.067-4.853s.013-3.584.067-4.852c.152-3.282 1.643-4.767 4.925-4.918 1.267-.055 1.646-.067 4.85-.067Zm0-2.163C8.756 0 8.35.014 7.07.072 2.652.274.275 2.651.072 7.07.014 8.35 0 8.756 0 12s.014 3.65.072 4.93c.203 4.417 2.578 6.795 6.998 6.998 1.28.058 1.674.072 4.93.072s3.65-.014 4.93-.072c4.42-.203 6.796-2.581 6.998-6.998.058-1.28.072-1.674.072-4.93s-.014-3.65-.072-4.93C21.725 2.65 19.348.274 14.93.072 13.65.014 13.256 0 12 0Zm0 17.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0-8.832a3.332 3.332 0 1 0 0 6.664 3.332 3.332 0 0 0 0-6.664Zm6.39-4.24a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full bg-[#18181B] flex items-center justify-center text-zinc-400 hover:bg-[#FF0000] hover:text-white transition-all duration-300 relative z-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="w-12 h-12 rounded-full bg-[#18181B] flex items-center justify-center text-zinc-400 hover:bg-[#000000] hover:text-white transition-all duration-300 relative z-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-[#18181B] flex items-center justify-center text-zinc-400 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 relative z-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-inter font-bold text-[12px] uppercase tracking-[0.2em] text-zinc500">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <a href="#home" className="font-inter font-medium text-[16px] text-zinc300 hover:text-white transition-colors">Home</a>
              <a href="#projects" className="font-inter font-medium text-[16px] text-zinc300 hover:text-white transition-colors">Projects</a>
              <a href="#services" className="font-inter font-medium text-[16px] text-zinc300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="font-inter font-medium text-[16px] text-zinc300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="font-inter font-medium text-[16px] text-zinc300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
