import React, { useState, useEffect } from 'react';

export default function TopNavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);

      const sections = ['home', 'projects', 'services', 'about', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, activeSection]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`fixed top-8 left-0 right-0 z-50 w-full flex justify-center px-4 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
      <nav className="flex items-center justify-between bg-white/70 backdrop-blur-md px-6 py-4 rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-navBorder w-full max-w-6xl">
        <div className="font-roboto font-extrabold text-[20px] text-textDark tracking-tight">
          Janav Kamesh.
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`font-manrope font-bold text-base transition-colors pb-1 border-b-2 ${activeSection === link.id ? 'text-emerald-700 border-emerald-600' : 'text-mutedLight hover:text-emerald-700 border-transparent'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="bg-darkBtn text-lightBtnText font-manrope font-bold text-[14px] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-black transition-transform hover:scale-105 shadow-md border border-brandBlack">
          Book a Call
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </nav>
    </div>
  );
}
