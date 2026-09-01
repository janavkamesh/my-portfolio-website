"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open (using a safer approach)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.style.overflow = "";
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  // Use a portal for the mobile menu to ensure it breaks out of all parent containers
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const mobileMenuContent = (
    <div 
      className={`fixed inset-0 z-[9999] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center lg:hidden transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button 
        type="button"
        className="absolute top-6 right-6 text-on-surface-variant p-2 hover:text-primary transition-colors focus:outline-none cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          closeMenu();
        }}
        aria-label="Close Navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pointer-events-none">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="flex flex-col items-center gap-8 font-headline text-2xl font-bold">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`flex flex-col items-center transition-colors duration-300 ${
                isActive
                  ? "text-on-background font-extrabold"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
            >
              <span>{link.name}</span>
              {isActive && (
                <div className="h-[2px] bg-white w-full rounded-full mt-1" />
              )}
            </Link>
          );
        })}
        <Link 
          href="/contact"
          onClick={closeMenu}
          className="mt-4 bg-primary text-background font-body font-bold text-lg py-3 px-10 rounded-full active:scale-95 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          Book a Call
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-center px-4 md:px-8 pt-6 pointer-events-none">
        <div className={`pointer-events-auto w-full bg-surface-low/80 backdrop-blur-md border border-outline-variant/40 rounded-full shadow-[0_8px_30px_rgba(6,182,212,0.12)] transition-all duration-500 ease-out py-2.5 md:py-3 px-4 md:px-6 ${
          isScrolled
            ? "max-w-5xl"
            : "max-w-5xl md:max-w-[1100px]"
        }`}>
          {/* Inner stationary content container */}
          <div className="relative flex items-center justify-between w-full max-w-5xl mx-auto">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-outline-variant/60 relative shadow-sm">
                <Image 
                  src="/avatar.jpeg" 
                  alt="Janav Kamesh" 
                  fill
                  priority
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-headline font-bold text-on-background text-base md:text-lg tracking-wide">
                Janav Kamesh
              </span>
            </Link>
            
            {/* Centered Links (Desktop) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-body text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-300 ${
                      isActive
                        ? "text-on-background font-semibold"
                        : "text-on-surface-variant hover:text-on-background"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-white rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* CTA */}
            <Link href="/contact" className="hidden lg:flex items-center justify-center bg-primary text-background font-body font-semibold text-sm py-2 px-6 rounded-full hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95">
              Book a Call
            </Link>

            {/* Mobile Menu Icon */}
            <button 
              type="button"
              className="lg:hidden relative z-[60] text-on-surface-variant p-2 hover:text-primary transition-colors focus:outline-none cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
              aria-label="Toggle Navigation"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pointer-events-none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Render Mobile Menu in a Portal so it completely escapes any parents */}
      {mounted && typeof document !== "undefined"
        ? createPortal(mobileMenuContent, document.body)
        : null}
    </>
  );
}
