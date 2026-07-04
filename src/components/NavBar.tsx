"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-center px-4 md:px-8 pt-6">
        <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2.5 md:py-3 md:px-5 bg-surface-low/80 backdrop-blur-md border border-outline-variant/40 rounded-full shadow-[0_8px_30px_rgba(6,182,212,0.12)]">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-outline-variant/60 relative shadow-sm">
              <Image 
                src="/profile-new.png" 
                alt="Janav Kamesh" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-headline font-bold text-on-background text-sm md:text-base tracking-wide">
              Janav Kamesh
            </span>
          </Link>
          
          {/* Centered Links (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-body text-sm font-medium">
            <Link className="text-on-surface-variant hover:text-on-background transition-colors duration-300" href="/">Home</Link>
            <Link className="text-on-surface-variant hover:text-on-background transition-colors duration-300" href="/projects">Projects</Link>
            <Link className="text-on-surface-variant hover:text-on-background transition-colors duration-300" href="/services">Services</Link>
            <Link className="text-on-surface-variant hover:text-on-background transition-colors duration-300" href="/about">About</Link>
            <Link className="text-on-surface-variant hover:text-on-background transition-colors duration-300" href="/contact">Contact</Link>
          </div>
          
          {/* CTA */}
          <Link href="/contact" className="hidden md:flex items-center justify-center bg-primary text-background font-body font-semibold text-sm py-2 px-6 rounded-full hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95">
            Book a Call
          </Link>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-on-surface-variant p-2 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden transition-all duration-300">
          <div className="flex flex-col items-center gap-8 font-headline text-2xl font-bold">
            <Link href="/" onClick={closeMenu} className="text-on-surface-variant hover:text-primary transition-colors">Home</Link>
            <Link href="/projects" onClick={closeMenu} className="text-on-surface-variant hover:text-primary transition-colors">Projects</Link>
            <Link href="/services" onClick={closeMenu} className="text-on-surface-variant hover:text-primary transition-colors">Services</Link>
            <Link href="/about" onClick={closeMenu} className="text-on-surface-variant hover:text-primary transition-colors">About</Link>
            <Link href="/contact" onClick={closeMenu} className="text-on-surface-variant hover:text-primary transition-colors">Contact</Link>
            <Link 
              href="/contact"
              onClick={closeMenu}
              className="mt-4 bg-primary text-background font-body font-bold text-lg py-3 px-10 rounded-full active:scale-95 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
