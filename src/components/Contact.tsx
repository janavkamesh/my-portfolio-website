"use client";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage("Thanks! I'll get back to you shortly.");
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-1 sm:pt-2 md:pt-4 lg:pt-0 pb-6 md:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 xl:gap-20 items-center">
        
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-8">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-center lg:text-left">
            <h2 className="font-headline text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-on-background tracking-tight">
              Let's Connect
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed max-w-md mx-auto lg:mx-0">
              Have a project in mind or just want to say hi? Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5">
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/919952874748" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 sm:gap-4 md:gap-5 bg-surface-low border border-outline-variant/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.08)] hover:-translate-y-1"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#0a231c] rounded-xl flex items-center justify-center border border-[#124234] text-[#25D366] group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline text-sm sm:text-base font-bold text-on-background truncate">WhatsApp</span>
                <span className="font-body text-xs sm:text-sm text-on-surface-variant mt-0.5 truncate">+91 9952874748</span>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:contact@janavkamesh.com" 
              className="group flex items-center gap-3 sm:gap-4 md:gap-5 bg-surface-low border border-outline-variant/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.08)] hover:-translate-y-1"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#0c1f2e] rounded-xl flex items-center justify-center border border-[#163a56] text-[#4cd7f6] group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                <FaEnvelope className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline text-sm sm:text-base font-bold text-on-background truncate">Email</span>
                <span className="font-body text-xs sm:text-sm text-on-surface-variant mt-0.5 truncate">contact@janavkamesh.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full bg-surface-low rounded-3xl border border-outline-variant/40 p-6 sm:p-8 md:p-9 lg:p-8 xl:p-10 shadow-xl flex flex-col">
          <h3 className="font-headline text-lg sm:text-xl md:text-2xl font-bold text-on-background mb-4 sm:mb-5 md:mb-6 text-center tracking-wide">
            Send a Message
          </h3>
          
          <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-body text-xs md:text-sm font-semibold text-on-surface-variant">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                placeholder="Your Name" 
                className="w-full bg-[#0A0A0A] border border-outline-variant/50 rounded-xl px-4 py-3 sm:py-3.5 text-on-background font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all placeholder:text-on-surface-variant/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact_info" className="font-body text-xs md:text-sm font-semibold text-on-surface-variant">Phone Number / Email</label>
              <input 
                type="text" 
                id="contact_info" 
                name="contact_info"
                required
                placeholder="+91 98765 43210" 
                className="w-full bg-[#0A0A0A] border border-outline-variant/50 rounded-xl px-4 py-3 sm:py-3.5 text-on-background font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all placeholder:text-on-surface-variant/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-body text-xs md:text-sm font-semibold text-on-surface-variant">
                Message <span className="text-on-surface-variant/60 font-normal">(Optional)</span>
              </label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                placeholder="Tell me about your project..." 
                className="w-full bg-[#0A0A0A] border border-outline-variant/50 rounded-xl px-4 py-3 sm:py-3.5 text-on-background font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all placeholder:text-on-surface-variant/40 resize-none"
              ></textarea>
            </div>

            <div className="mt-2 sm:mt-3 flex flex-col gap-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-on-background text-background font-headline font-bold text-sm sm:text-base py-3.5 sm:py-4 rounded-xl hover:bg-surface-high hover:text-primary transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Let's Talk"}
              </button>
              
              {successMessage && (
                <p className="font-body text-xs md:text-sm text-[#25D366] text-center mt-1 font-medium">
                  {successMessage}
                </p>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
