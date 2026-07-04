"use client";

import { useState } from "react";
import { FaLightbulb, FaCompass, FaPenNib, FaCode, FaRocket } from "react-icons/fa";
import { MdOutlineDesignServices, MdEngineering, MdOutlineSupportAgent } from "react-icons/md";

export default function HowIWork() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      subtitle: "STEP 01",
      title: "Strategy & Alignment",
      desc: "We start by deeply understanding your business goals, target audience, and technical constraints. This foundational phase ensures that every engineering decision aligns with your overarching objectives.",
      bullets: [
        "Initial discovery",
        "Technical architecture",
        "Competitor analysis",
        "Project timeline"
      ],
      cardSubtitle: "Laying the Foundation",
      leftIcon: <FaLightbulb className="w-6 h-6" />,
      rightIcon: <FaCompass className="w-14 h-14" />
    },
    {
      num: "02",
      subtitle: "STEP 02",
      title: "Design & Prototyping",
      desc: "We translate the strategic foundation into a visual language, crafting intuitive user interfaces and seamless user experiences that engage your audience and drive conversions.",
      bullets: [
        "Wireframing",
        "UI/UX Design",
        "Interactive Prototypes",
        "Design System Implementation"
      ],
      cardSubtitle: "Visualizing the Experience",
      leftIcon: <FaPenNib className="w-6 h-6" />,
      rightIcon: <MdOutlineDesignServices className="w-14 h-14" />
    },
    {
      num: "03",
      subtitle: "STEP 03",
      title: "Development & Engineering",
      desc: "I build the actual product using modern web frameworks, ensuring clean code, optimal performance, and robust scalability from day one.",
      bullets: [
        "Frontend Development",
        "API Integration",
        "Performance Optimization",
        "Responsive Implementation"
      ],
      cardSubtitle: "Building the Product",
      leftIcon: <FaCode className="w-6 h-6" />,
      rightIcon: <MdEngineering className="w-14 h-14" />
    },
    {
      num: "04",
      subtitle: "STEP 04",
      title: "Launch & Support",
      desc: "After rigorous testing and quality assurance, we deploy your project to the world. I also provide post-launch support to keep everything running flawlessly.",
      bullets: [
        "Quality Assurance Testing",
        "Deployment & Hosting",
        "SEO Optimization",
        "Post-Launch Maintenance"
      ],
      cardSubtitle: "Going Live",
      leftIcon: <FaRocket className="w-6 h-6" />,
      rightIcon: <MdOutlineSupportAgent className="w-14 h-14" />
    }
  ];

  return (
    <section className="w-full py-10 md:py-16">
      <div className="flex flex-col items-center mb-20 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background mb-6">
          How I <span className="text-primary">Work</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Timeline Stepper */}
        <div className="relative flex items-center justify-between mb-24 px-2 md:px-12">
          {/* Horizontal Line */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[1px] bg-outline-variant/30 z-0"></div>
          
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full font-headline font-bold text-base transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? "bg-on-background text-background shadow-[0_0_25px_rgba(76,215,246,0.4)] scale-110" 
                    : "bg-surface-highest text-on-surface-variant hover:bg-surface-bright"
                }`}
              >
                {step.num}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6 transition-all duration-500 min-h-[400px]">
            <div className="flex flex-col gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#0c1f26] border border-outline-variant/20 flex items-center justify-center text-primary shadow-sm mb-2">
                {steps[activeStep].leftIcon}
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-sm font-bold tracking-widest text-primary uppercase mb-2">
                  {steps[activeStep].subtitle}
                </span>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-on-background">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed opacity-90 mt-2">
              {steps[activeStep].desc}
            </p>

            <ul className="flex flex-col gap-5 mt-4">
              {steps[activeStep].bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-4 font-body text-base font-semibold text-on-background">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary shrink-0">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Card) */}
          <div className="w-full h-[400px] md:h-[450px] bg-[#111419] rounded-2xl border border-outline-variant/10 relative overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
            <div className="flex flex-col items-center justify-center z-10 gap-8 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="text-primary bg-primary/10 p-6 rounded-full ring-1 ring-primary/30 relative">
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(76,215,246,0.3)] pointer-events-none"></div>
                {steps[activeStep].rightIcon}
              </div>
              <h4 className="font-headline text-2xl font-bold text-on-background tracking-wide">
                {steps[activeStep].cardSubtitle}
              </h4>
            </div>
            
            {/* Big faded number at bottom right */}
            <span className="absolute -bottom-8 right-4 text-[10rem] font-headline font-black text-[#142630] select-none z-0 tracking-tighter transition-all duration-500">
              {steps[activeStep].num}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
