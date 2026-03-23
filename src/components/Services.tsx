import React from 'react';

export default function Services() {
  const services = [
    { title: 'Responsive Design', icon: 'responsive.svg', desc: 'Multi-platform experiences tailored to every screen dimension and user touchpoint.' },
    { title: 'Fast Performance', icon: 'performance.svg', desc: 'Lightning-fast load times optimized for retention and search engine authority.' },
    { title: 'Secure Hosting', icon: 'hosting.svg', desc: 'Enterprise-grade security infrastructure protecting your digital assets 24/7.' },
    { title: 'SEO Strategy', icon: 'seo.svg', desc: 'Architecting content for maximum visibility and organic conversion growth.' },
    { title: 'Content Creation', icon: 'content.svg', desc: 'Compelling editorial narratives that engage and convert your ideal audience.' },
    { title: 'Custom Integration', icon: 'custom.svg', desc: 'Seamlessly connecting your website with the third-party tools you use every day.' },
  ];

  return (
    <section id="services" className="py-10 px-4 bg-grayBg/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="font-roboto font-extrabold text-[48px] tracking-[-0.05em] text-brandBlack mb-2">
            Services.
          </h2>
          <p className="font-jakarta text-[16px] leading-[1.5em] text-brandDarkMuted">
            Selected works that define our standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-pureWhite border border-[rgba(172,179,180,0.05)] rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brandGreen/10 flex items-center justify-center mb-6">
                <img src={`/images/${svc.icon}`} alt={svc.title} className="w-6 h-6 text-brandGreen" />
              </div>
              <h3 className="font-manrope font-bold text-[20px] text-heading leading-[1.4em] mb-4">
                {svc.title}
              </h3>
              <p className="font-inter text-[14px] leading-[1.625em] text-muted">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
