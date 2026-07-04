"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "How long will it take to build my website?",
      answer: "Most websites take about 4 to 6 weeks from start to finish. We will agree on a clear timeline before we start, so you know exactly when your site will go live."
    },
    {
      question: "Will my website look good on mobile phones?",
      answer: "Yes, absolutely! Most people use their phones to browse the internet, so I make sure your website works perfectly and looks great on all screens—phones, tablets, and computers."
    },
    {
      question: "How much does a website cost?",
      answer: "The cost depends on what your business needs. I charge a single, fixed price for the whole project. This means you will know the exact cost upfront, and there will be no surprise bills later."
    },
    {
      question: "Do you use WordPress to build the site?",
      answer: "No, I build custom websites from scratch using modern tools (like Next.js and React). I don't use slow templates. This makes your website super fast, safe against hackers, and easy to grow as your business grows."
    },
    {
      question: "What happens after the website goes live? Will you help me?",
      answer: "Yes! I give 30 days of free support to make sure everything runs smoothly. After that, I offer monthly plans to keep your website safe, updated, and running fast so you can just focus on your business."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="w-full max-w-3xl mx-auto px-6 py-10 md:py-16">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="flex flex-col bg-surface-low border border-outline-variant/30 rounded-xl overflow-hidden"
          >
            <button 
              onClick={() => toggleFAQ(idx)}
              className="flex items-start justify-between w-full p-6 md:p-8 text-left focus:outline-none transition-all duration-300 hover:bg-surface-high/30 active:scale-[0.99] rounded-xl"
            >
              <span className="font-headline font-bold text-base md:text-lg text-on-background pr-4">
                {faq.question}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" 
                className={`w-5 h-5 text-primary mt-1 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8" : "max-h-0 opacity-0 px-6 md:px-8"}`}
            >
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed opacity-90">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
