import React from 'react';
import Image from 'next/image';

export default function About() {
  const founders = [
    {
      name: 'Deepanshu Jangid',
      role: 'Founder & Growth Partner',
      phone: '8302909191',
      formattedPhone: '+91 8302909191',
      bio: 'Leading web architecture, conversion mechanics, and technical execution for growing businesses.',
      whatsappMsg: 'Hi Deepanshu, I would like to discuss a project with ONLINEAJAO.',
      initial: 'D',
    },
    {
      name: 'Nitin Kumar',
      role: 'Founder & Strategy Partner',
      phone: '8302161688',
      formattedPhone: '+91 8302161688',
      bio: 'Directing strategic positioning, Google Business discovery, and sustainable search visibility systems.',
      whatsappMsg: 'Hi Nitin, I would like to discuss a project with ONLINEAJAO.',
      initial: 'N',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
              ABOUT ONLINEAJAO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08] mb-8">
            Small team. <br />
            <span className="text-[#0D0F10]/75">Serious digital work.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#0D0F10]/80 font-normal leading-relaxed max-w-2xl">
            ONLINEAJAO works with growing businesses to create a stronger digital presence — from websites and Google visibility to SEO and long-term digital growth.
          </p>
        </div>

        {/* 2-Column: Founders + Studio Craft Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Founders Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-t border-[#0D0F10]/[0.10] divide-y divide-[#0D0F10]/[0.08]">
              {founders.map((founder) => (
                <div key={founder.name} className="py-10 first:pt-8 last:pb-8 group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-normal text-[#0D0F10]">
                      {founder.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AC4526] font-medium tracking-wide uppercase">
                      {founder.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#0D0F10]/65 leading-relaxed font-normal mb-6 max-w-xl">
                    {founder.bio}
                  </p>

                  {/* Direct Contact Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`tel:+91${founder.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-medium bg-[#0D0F10] text-[#FFFDF7] rounded-xs hover:bg-[#08090A] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call {founder.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/91${founder.phone}?text=${encodeURIComponent(founder.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-medium bg-[#F5F1E7] text-[#0D0F10] border border-[#0D0F10]/10 rounded-xs hover:bg-[#E3DAB3]/40 transition-colors"
                    >
                      <span>WhatsApp</span>
                      <svg className="w-3 h-3 text-[#AC4526]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.39 5.08L2 22l5.08-1.35C8.54 21.52 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.57 0-3.04-.44-4.3-1.2l-.31-.18-3.01.8.8-2.93-.2-.32C4.38 14.9 4 13.48 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Physical Studio Signage / Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-[#0D0F10] border border-[#0D0F10]/10 shadow-card group">
              <Image
                src="/brand/mockup-signage.jpg"
                alt="ONLINEAJAO Physical Brand Signage"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F10]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-[#FFFDF7]">
                <p className="text-[11px] tracking-widestLg uppercase text-[#CABBA8] font-medium">
                  Direct Partner Access
                </p>
                <p className="text-sm font-light text-[#FFFDF7]/90 mt-1">
                  You work directly with the founders — never outsourced to an anonymous ticketing queue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
