import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO at TechFlow",
      text: "Janav completely transformed our web presence. The performance improvements alone doubled our conversion rate within the first month. An absolute professional.",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Marcus Chen",
      role: "Founder at DesignStudio",
      text: "The attention to detail is unmatched. Every micro-interaction and animation feels perfectly tuned. It's rare to find a developer who truly understands premium UI/UX.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      text: "Working with Janav was a breeze. He delivered ahead of schedule and the code quality was impeccable. Our site is now lightning fast and ranks on page 1 of Google.",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "David Smith",
      role: "Product Manager",
      text: "We needed a highly complex custom integration, and Janav handled it effortlessly. The resulting architecture is scalable, robust, and incredibly easy for our team to maintain.",
      image: "https://i.pravatar.cc/150?img=14"
    },
    {
      name: "Alex Thorne",
      role: "E-commerce Owner",
      text: "I was blown away by the level of polish. The landing pages he built for us not only look gorgeous but they actively drive sales. Easily the best investment we've made this year.",
      image: "https://i.pravatar.cc/150?img=8"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-10 md:py-16 overflow-hidden bg-background">
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <span className="font-body text-sm font-semibold tracking-widest text-primary uppercase mb-4">Client Feedback</span>
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background">
          What my clients say
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left and Right fade out masks for a premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex w-max animate-testimonial-marquee hover:[animation-play-state:paused] gap-6 px-6">
          {/* Duplicate arrays for seamless looping */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[320px] md:w-[400px] flex flex-col gap-6 bg-surface-low border border-outline-variant/30 rounded-2xl p-8 shadow-sm flex-shrink-0 cursor-default transition-colors hover:border-primary/40"
            >
              {/* Star Rating */}
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-base text-on-surface-variant leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-2">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-high border border-outline-variant relative">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-on-background text-sm">{testimonial.name}</span>
                  <span className="font-body text-xs text-on-surface-variant">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
