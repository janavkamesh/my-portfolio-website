import { MdWeb, MdSpeed, MdSearch, MdDevices, MdPalette, MdIntegrationInstructions } from "react-icons/md";

export default function Services() {
  const services = [
    {
      title: "Website Design",
      description: "Your website is the first thing a customer sees. I design clean, professional websites that make your business look credible, trustworthy, and worth choosing — on every device, every screen size.",
      bullets: [
        "Custom design tailored to your brand",
        "Mobile-first and fully responsive layout",
        "Modern UI with clear navigation",
        "Fast loading pages built for real users"
      ],
      icon: <MdPalette className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "Landing Pages",
      description: "Sometimes one focused page is all you need to turn a visitor into a customer. I build landing pages designed around a single goal — whether that's getting a call, a booking, or a sale.",
      bullets: [
        "Conversion-focused layout and structure",
        "Clear call-to-action that drives results",
        "A/B testing ready",
        "Built to match your brand identity"
      ],
      icon: <MdWeb className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "SEO — Get Found on Google",
      description: "A great website is useless if no one can find it. I set up your website so Google understands what your business does and shows it to the right people at the right time.",
      bullets: [
        "On-page SEO setup and optimization",
        "Meta titles, descriptions, and header structure",
        "Fast site architecture for better rankings",
        "Local SEO for customers searching near you"
      ],
      icon: <MdSearch className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "Performance & Speed",
      description: "Slow websites lose customers — it's that simple. I make sure your website loads fast, runs smoothly, and never keeps a visitor waiting long enough to leave.",
      bullets: [
        "Image compression and lazy loading",
        "Optimized code for faster page speed",
        "Google Core Web Vitals ready",
        "Global hosting for reliable performance"
      ],
      icon: <MdSpeed className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    },
    {
      title: "Responsiveness",
      description: "Your customers are on their phones. Your website needs to look and work perfectly whether someone's on a laptop, a tablet, or a smartphone — without anything breaking or looking out of place.",
      bullets: [
        "Fluid layouts that adapt to any screen",
        "Touch-friendly design for mobile users",
        "Tested across all major devices and browsers",
        "Consistent experience from desktop to mobile"
      ],
      icon: <MdDevices className="w-7 h-7 text-primary" />
    },
    {
      title: "Integrations & Tools",
      description: "I connect your website to the tools your business already uses — so everything runs smoothly without you having to manage it manually.",
      bullets: [
        "Contact forms and enquiry systems",
        "Google Analytics and tracking setup",
        "Payment gateways like Stripe or Razorpay",
        "WhatsApp, booking tools, and CRM connections"
      ],
      icon: <MdIntegrationInstructions className="w-7 h-7 text-primary" />
    }
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 pt-0 pb-10 md:pb-16">
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <span className="font-body text-sm font-semibold tracking-widest text-primary uppercase">Expertise</span>
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background">
          What I Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col bg-surface-low rounded-2xl border border-outline-variant/40 p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.08)] hover:-translate-y-2 h-full"
          >
            <div className="mb-8 bg-surface-high w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center border border-outline-variant/40 shadow-sm group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-500 shrink-0">
              {service.icon}
            </div>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-on-background mb-4">
              {service.title}
            </h3>
            <p className="font-body text-base leading-relaxed text-on-surface-variant mb-8">
              {service.description}
            </p>

            <ul className="flex flex-col gap-3 mt-auto pt-6 border-t border-outline-variant/30">
              {service.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm font-medium text-on-background/90 leading-tight">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
