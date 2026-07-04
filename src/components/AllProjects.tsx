"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";

export default function AllProjects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Vaastu Corp Construction",
      description: "A modern, high-performance website for a construction company, establishing a strong digital presence.",
      url: "https://vaastucorpconstruction.vercel.app",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      category: "Landing pages",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-3.5 h-3.5 text-cyan-400" /> },
      ]
    },
    {
      title: "Urban Kitchen Restaurant",
      description: "An elegant digital dining experience designed for a premium restaurant to attract more customers.",
      url: "https://urbankitchenrestaurant.vercel.app",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      category: "Landing pages",
      techStack: [
        { name: "React", icon: <SiReact className="w-3.5 h-3.5 text-cyan-400" /> },
        { name: "Vite", icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 404" className="w-3.5 h-3.5 flex-shrink-0">
            <path d="M399.64 53.68l-40.85 289.47A32.93 32.93 0 0 1 329.93 371L209.68 402a16.09 16.09 0 0 1-8.24 0L80.84 371a32.92 32.92 0 0 1-28.85-27.85L11.13 53.68A16.08 16.08 0 0 1 25.43 35.8l88.2-12a16.06 16.06 0 0 1 17.58 11.23l46.23 133a16.08 16.08 0 0 0 29.83 1.54l68.21-131.62a16.07 16.07 0 0 1 18.06-8l87.72 23.36a16.08 16.08 0 0 1 12.24 17.65z" fill="url(#vite-grad1)"/>
            <path d="M294.67 11.8L209.58 176a16.08 16.08 0 0 1-29.23-1.63L138.83 50.8a16.07 16.07 0 0 0-17-10.74l-64.88 8.8a16.08 16.08 0 0 0-11.87 25.32l144.2 195.42a16.08 16.08 0 0 0 25.9-.03L381.65 42a16.07 16.07 0 0 0-14.73-25l-54.2-2.58a16.08 16.08 0 0 0-18.05 10.38z" fill="url(#vite-grad2)"/>
            <defs>
              <linearGradient id="vite-grad1" x1="205" y1="402" x2="205" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#41D1FF"/>
                <stop offset="1" stopColor="#BD34FE"/>
              </linearGradient>
              <linearGradient id="vite-grad2" x1="262.5" y1="285.5" x2="160.5" y2="40.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFEA83"/>
                <stop offset="0.083" stopColor="#FFDD35"/>
                <stop offset="1" stopColor="#FFA800"/>
              </linearGradient>
            </defs>
          </svg>
        )},
        { name: "Tailwind", icon: <SiTailwindcss className="w-3.5 h-3.5 text-cyan-400" /> },
      ]
    },
    {
      title: "Aura Wellness Gym",
      description: "A sleek and energetic platform for a modern fitness center, built to drive membership signups.",
      url: "https://aurawellnessgym.vercel.app",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      category: "Landing pages",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5" /> },
        { name: "React", icon: <SiReact className="w-3.5 h-3.5 text-cyan-400" /> },
        { name: "Framer", icon: <SiFramer className="w-3.5 h-3.5" /> },
      ]
    }
  ];

  const filters = ["All", "Landing pages", "Apps"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="w-full max-w-7xl mx-auto pt-0 pb-10 md:pb-16">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background mb-8">
          Featured Projects
        </h2>

        {/* WhatsApp style independent toggles */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-1.5 rounded-full font-body text-sm font-semibold transition-all duration-300 active:scale-95 shadow-sm ${
                filter === f 
                  ? "bg-[#1A3B32] text-[#81D8B4] border border-[#1A3B32]" 
                  : "bg-surface-low text-on-surface-variant border border-outline-variant/40 hover:border-outline-variant hover:text-on-background"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col bg-surface-low border border-outline-variant/40 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-[4/3] bg-surface-high overflow-hidden border-b border-outline-variant/40">
              <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col p-6 flex-grow relative">
              <h3 className="font-headline text-xl font-bold text-on-background mb-3 mt-2">
                {project.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-8 mt-auto">
                {project.techStack.map((tech, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant/60 bg-surface text-xs font-body text-on-surface-variant font-medium"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Visit Button */}
              <Link 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-5 py-3 rounded-xl border border-outline-variant/60 text-sm font-body font-semibold text-on-background hover:bg-surface-high hover:border-primary/50 hover:text-primary transition-all duration-300 active:scale-[0.98]"
              >
                <span>Visit Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 text-center font-body text-on-surface-variant text-lg">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
