import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant/40 pt-20 pb-8 mt-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden border border-outline-variant/60">
                <Image 
                  src="/profile-new.png" 
                  alt="Janav Kamesh" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg font-bold text-on-background">Janav Kamesh</span>
              </div>
            </div>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Crafting high-performance digital experiences with precision and purpose.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="#" className="group w-10 h-10 rounded-full bg-surface-high border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110 transition-all duration-300">
                <FaLinkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="group w-10 h-10 rounded-full bg-surface-high border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-110 transition-all duration-300">
                <FaYoutube className="w-4 h-4" />
              </Link>
              <Link href="#" className="group w-10 h-10 rounded-full bg-surface-high border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] hover:scale-110 transition-all duration-300">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="group w-10 h-10 rounded-full bg-surface-high border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-[#181717] hover:text-white hover:border-outline-variant/80 hover:scale-110 transition-all duration-300">
                <FaGithub className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links and Services grouped for mobile side-by-side */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="font-headline text-base font-bold text-on-background">Quick Links</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Home</Link></li>
                <li><Link href="/projects" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Projects</Link></li>
                <li><Link href="/services" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Services</Link></li>
                <li><Link href="/about" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">About</Link></li>
                <li><Link href="/contact" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-6">
              <h4 className="font-headline text-base font-bold text-on-background">Services</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/services" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Landing Pages</Link></li>
                <li><Link href="/services" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Performance</Link></li>
                <li><Link href="/services" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">SEO Optimization</Link></li>
                <li><Link href="/services" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Responsiveness</Link></li>
                <li><Link href="/services" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Modern Design</Link></li>
                <li><Link href="/services" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 inline-block hover:-translate-y-0.5">Custom Integration</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-headline text-base font-bold text-on-background">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:janavkamesh09@gmail.com" className="group flex items-center gap-3 font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300">
                  <MdOutlineMail className="text-primary w-5 h-5 flex-shrink-0" />
                  janavkamesh09@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919952874748" className="group flex items-center gap-3 font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300">
                  <MdOutlineLocalPhone className="text-primary w-5 h-5 flex-shrink-0" />
                  +91 9952874748
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-outline-variant/30 pt-8 flex justify-center">
          <span className="font-body text-sm text-on-surface-variant opacity-80 text-center">
            Copyrights © 2026 Janav Kamesh. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
