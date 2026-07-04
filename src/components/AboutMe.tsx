import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full pt-0 pb-10 md:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image Card */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-outline-variant/40 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-80"></div>
          <Image 
            src="/profile-new.png" 
            alt="Janav Kamesh" 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-on-background mb-2">
            Hi, I'm <span className="text-primary">Janav.</span>
          </h2>

          <div className="flex flex-col gap-5 font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            <p>
              I build websites for businesses that want to look professional online and get more customers through the door.
            </p>
            <p>
              I know that as a business owner, your time is valuable. You're already juggling a hundred things every day — your website shouldn't be one of them. That's why I keep things simple. No confusing tech talk, no unnecessary back-and-forth, no complicated processes.
            </p>
            <p>
              You tell me about your business, and I take care of everything else. From design to launch, I handle it all — so you can stay focused on what you do best: running your business.
            </p>
            <p>
              Every website I build is clean, professional, and made to work for the business it represents. Not a template. Not a quick fix. Something you'll actually be proud to share with your customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
