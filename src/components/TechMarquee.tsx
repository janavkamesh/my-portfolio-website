import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiVercel, 
  SiHtml5, 
  SiJavascript, 
  SiTypescript, 
  SiSupabase, 
  SiNotion, 
  SiFigma 
} from "react-icons/si";

export default function TechMarquee() {
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 md:w-11 md:h-11 text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 md:w-11 md:h-11 text-[#06B6D4]" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-8 h-8 md:w-11 md:h-11 text-[#0055FF]" /> },
    { name: "Vercel", icon: <SiVercel className="w-8 h-8 md:w-11 md:h-11 text-white" /> },
    { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 md:w-11 md:h-11 text-[#E34F26]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 md:w-11 md:h-11 text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 md:w-11 md:h-11 text-[#3178C6]" /> },
    { name: "Supabase", icon: <SiSupabase className="w-8 h-8 md:w-11 md:h-11 text-[#3ECF8E]" /> },
    { name: "Notion", icon: <SiNotion className="w-8 h-8 md:w-11 md:h-11 text-white" /> },
    { name: "Figma", icon: <SiFigma className="w-8 h-8 md:w-11 md:h-11 text-[#F24E1E]" /> },
  ];

  return (
    <section className="w-full py-10 md:py-16 overflow-hidden">
      <div className="marquee-container w-full">
        <div className="marquee-content flex items-center gap-16 md:gap-24 px-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
          {/* Render three sets to ensure a seamless infinite scrolling loop for large icons */}
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center justify-center min-w-max hover:scale-110 transition-transform duration-300 cursor-default drop-shadow-md" 
            >
              {tech.icon}
              
              {/* Custom Lightweight Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-body font-medium bg-surface-highest border border-outline-variant/30 text-on-surface-variant px-3 py-1 rounded-full pointer-events-none whitespace-nowrap shadow-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
