import React from 'react';

export default function Projects() {
  const works = [
    { title: 'Yet to be done', desc: 'Yet to be done', tags: ['Yet to be done', 'Yet to be done'] },
    { title: 'Yet to be done', desc: 'Yet to be done', tags: ['Yet to be done', 'Yet to be done'] },
    { title: 'Yet to be done', desc: 'Yet to be done', tags: ['Yet to be done', 'Yet to be done'] },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((item, idx) => (
            <div key={idx} className="group cursor-pointer border border-[#E5E7EB] rounded-[32px] p-5 shadow-sm hover:shadow-md transition-shadow">
               <div className="bg-grayBg rounded-[20px] overflow-hidden mb-5 relative h-[250px] flex flex-col items-center justify-center animate-pulse group-hover:bg-gray-200 transition-colors">
                 <div className="w-10 h-10 border-4 border-[#006C49] border-t-transparent rounded-full animate-spin mb-4"></div>
                 <span className="font-inter text-sm text-[#006C49] font-medium tracking-wide">LOADING SECRETS...</span>
               </div>
               <h3 className="font-manrope font-bold text-[22px] text-brandBlack mb-2 px-1">{item.title}</h3>
               <p className="font-jakarta text-[13px] text-brandDarkMuted leading-[1.4em] mb-4 px-1">{item.desc}</p>
               <div className="flex flex-wrap gap-2 px-1">
                 {item.tags.map((tag, tIdx) => (
                   <span key={tIdx} className="font-jakarta font-bold text-[10px] uppercase tracking-[0.05em] text-brandBlack bg-cardBg px-3 py-1.5 rounded-full">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
