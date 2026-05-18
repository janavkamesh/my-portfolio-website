import React from 'react';

const projects = [
  {
    id: 1,
    category: 'Restaurant & Hospitality',
    title: 'Annamalai Kitchen',
    desc: 'Full-stack restaurant website with table reservation UX, immersive menu presentation, and brand storytelling — built for an authentic Chettinad dining destination in Chennai.',
    tags: ['Restaurant', 'Reservation UX', 'Brand Design', 'Conversion'],
    url: 'https://urban-kitchen-restaurant.vercel.app',
    stat: { value: '4.8★', label: 'Google Rating' },
    bg: '#FAF5EE',
    gradientFrom: 'rgba(180, 100, 40, 0.08)',
    gradientTo: 'rgba(234, 231, 231, 0.6)',
    accentBar: '#C8813A',
  },
  {
    id: 2,
    category: 'Construction & Real Estate',
    title: 'VaastuCorp Builders',
    desc: 'High-converting construction company website with a live cost calculator, fixed-price trust signals, NRI-friendly remote tracking, and a structured lead-gen funnel for Chennai home builders.',
    tags: ['Construction', 'Lead Generation', 'Web Design', 'Real Estate'],
    url: 'https://vaastu-corp-construction.vercel.app',
    stat: { value: '150+', label: 'Homes Built' },
    bg: '#F5F2EF',
    gradientFrom: 'rgba(100, 85, 72, 0.08)',
    gradientTo: 'rgba(234, 231, 231, 0.6)',
    accentBar: '#78716C',
  },
  {
    id: 3,
    category: 'Enterprise Consulting & AI',
    title: 'Stratos Advisory',
    desc: 'Editorial-grade enterprise consulting website with dark UI architecture, AI & automation service positioning, and SOC 2-aligned credibility signals — engineered to command C-suite trust.',
    tags: ['B2B Consulting', 'Enterprise UI', 'Dark Design', 'AI Branding'],
    url: 'https://stratos-consultant.vercel.app',
    stat: { value: '$4.2M', label: 'Client Savings' },
    bg: '#EEF1F6',
    gradientFrom: 'rgba(30, 58, 95, 0.10)',
    gradientTo: 'rgba(234, 231, 231, 0.6)',
    accentBar: '#1E3A5F',
  },
  {
    id: 4,
    category: 'Fitness & Wellness',
    title: 'Aura Wellness',
    desc: 'Conversion-focused fitness studio website engineered for free trial sign-ups — featuring transparent pricing tiers, trainer profiles, member testimonials, and a 90-day results guarantee funnel.',
    tags: ['Fitness', 'Conversion Design', 'Landing Page', 'Local SEO'],
    url: 'https://aura-wellness-gym.vercel.app',
    stat: { value: '1,200+', label: 'Active Members' },
    bg: '#EFF8F4',
    gradientFrom: 'rgba(0, 109, 71, 0.09)',
    gradientTo: 'rgba(234, 231, 231, 0.6)',
    accentBar: '#006D47',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="font-roboto font-extrabold text-[48px] tracking-[-0.05em] text-brandBlack mb-2">
            Projects.
          </h2>
          <p className="font-jakarta text-[16px] leading-[1.5em] text-brandDarkMuted">
            Selected works that define our standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-[#E5E7EB] rounded-[32px] p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Visual Card Header */}
              <div
                className="rounded-[20px] overflow-hidden mb-5 relative h-[210px] flex flex-col justify-between p-5"
                style={{
                  background: `linear-gradient(145deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
                  backgroundColor: project.bg,
                }}
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                  style={{ backgroundColor: project.accentBar, opacity: 0.5 }}
                />

                {/* Top row: category + stat */}
                <div className="flex items-start justify-between">
                  <span className="font-jakarta font-bold text-[10px] uppercase tracking-[0.08em] text-brandDarkMuted/50">
                    {project.category}
                  </span>
                  <div className="text-right">
                    <div className="font-manrope font-bold text-[20px] text-brandBlack leading-none">
                      {project.stat.value}
                    </div>
                    <div className="font-jakarta text-[9px] uppercase tracking-widest text-brandDarkMuted/50 mt-0.5">
                      {project.stat.label}
                    </div>
                  </div>
                </div>

                {/* Ghost title watermark */}
                <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none select-none overflow-hidden">
                  <span
                    className="font-roboto font-extrabold leading-none text-center transition-all duration-500"
                    style={{
                      fontSize: 'clamp(36px, 6vw, 56px)',
                      color: 'rgba(28,27,27,0.04)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {project.title}
                  </span>
                </div>

                {/* Bottom row: domain + live badge */}
                <div className="flex items-center justify-between">
                  <span className="font-inter text-[11px] text-brandDarkMuted/40 tracking-wide truncate mr-3">
                    {project.url.replace('https://', '')}
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-manrope font-bold text-[10px] uppercase tracking-[0.07em] text-brandGreen inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Site
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-1">
                <h3 className="font-manrope font-bold text-[22px] text-brandBlack mb-2 group-hover:text-brandGreen transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-jakarta text-[13px] text-brandDarkMuted leading-[1.5em] mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-jakarta font-bold text-[10px] uppercase tracking-[0.05em] text-brandBlack bg-cardBg px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
