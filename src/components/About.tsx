import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-roboto font-extrabold text-[48px] tracking-[-0.05em] text-brandBlack mb-2">
            About.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          <div className="w-full md:w-5/12 flex justify-center md:justify-start">
            <div className="w-full max-w-sm aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-200 bg-white">
              <img
                src="/images/profile.png"
                alt="Janavkamesh — Full-Stack Developer from Tamil Nadu, India"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-7/12 flex flex-col gap-6 pt-4">
            <h3 className="font-manrope font-bold text-[24px] text-[#006C49]">
              Hi, I'm Janav.
            </h3>
            <p className="font-jakarta text-[18px] leading-[1.625em] text-[#3C4A42]">
              I design and build websites for businesses that want real results, not just a good-looking online presence. As a freelancer, I focus on creating simple, clear, and effective websites that help people understand your business and take action. My goal is always the same—turn your website into something that actually works for you, not just something that exists.
            </p>
            <p className="font-jakarta text-[18px] leading-[1.625em] text-[#3C4A42]">
              I approach every project with a practical mindset. I don’t overcomplicate things or follow trends blindly. Instead, I focus on what matters—clarity, structure, and user experience. Whether it’s a landing page or a full website, I make sure it’s easy to use, easy to understand, and built to support your business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
