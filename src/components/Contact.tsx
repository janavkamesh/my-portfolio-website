"use client";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 pt-0 pb-10 md:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-on-background tracking-tight">
              Let's Connect
            </h2>
            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed max-w-md mx-auto lg:mx-0">
              Have a project in mind or just want to say hi? Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/919952874748" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-6 bg-[#111419] border border-outline-variant/30 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.08)] hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#0a231c] rounded-xl flex items-center justify-center border border-[#124234] text-[#25D366] group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                <FaWhatsapp className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg font-bold text-on-background">WhatsApp</span>
                <span className="font-body text-sm text-on-surface-variant mt-1">+91 9952874748</span>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:janavkamesh09@gmail.com" 
              className="group flex items-center gap-6 bg-[#111419] border border-outline-variant/30 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.08)] hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#0c1f2e] rounded-xl flex items-center justify-center border border-[#163a56] text-[#4cd7f6] group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg font-bold text-on-background">Email</span>
                <span className="font-body text-sm text-on-surface-variant mt-1">janavkamesh09@gmail.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full bg-[#111419] rounded-2xl border border-outline-variant/20 p-8 md:p-12 shadow-2xl flex flex-col">
          <h3 className="font-headline text-xl md:text-2xl font-bold text-on-background mb-8 text-center">
            Send a Message
          </h3>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-body text-sm font-semibold text-on-surface-variant">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                className="w-full bg-[#0b0d10] border border-outline-variant/30 rounded-xl px-5 py-4 text-on-background font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all placeholder:text-on-surface-variant/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-body text-sm font-semibold text-on-surface-variant">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                className="w-full bg-[#0b0d10] border border-outline-variant/30 rounded-xl px-5 py-4 text-on-background font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all placeholder:text-on-surface-variant/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-body text-sm font-semibold text-on-surface-variant">Message</label>
              <textarea 
                id="message" 
                rows={5}
                placeholder="Tell me about your project..." 
                className="w-full bg-[#0b0d10] border border-outline-variant/30 rounded-xl px-5 py-4 text-on-background font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all placeholder:text-on-surface-variant/40 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full mt-4 bg-on-background text-background font-headline font-bold text-base py-4 rounded-xl hover:bg-surface-highest transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
