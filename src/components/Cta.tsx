import React from 'react';

export default function Cta() {
  return (
    <section className="px-4 py-24 bg-[#F9F9F9] flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto rounded-[32px] bg-darkSection relative overflow-hidden py-24 px-8 text-center flex flex-col items-center shadow-2xl">
        <img src="/images/overlay.svg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <h2 className="font-roboto font-extrabold text-[40px] md:text-[48px] text-pureWhite mb-6 relative z-10">
          Ready for your project?
        </h2>
        <p className="font-inter text-[18px] text-[#A1A1AA] max-w-lg mb-12 relative z-10">
          Let's create something extraordinary together. We look forward to hearing from you.
        </p>
        <button className="bg-pureWhite text-[#18181B] font-manrope font-bold text-[18px] px-12 py-5 rounded-full inline-flex items-center justify-center gap-3 hover:bg-gray-200 transition-all hover:scale-105 shadow-2xl relative z-10 mx-auto">
          Start Project
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </section>
  );
}
