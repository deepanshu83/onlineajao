'use client';

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
    },
    {
      name: 'Nitin Kumar',
      role: 'Founder & Strategy Partner',
      phone: '8302161688',
      formattedPhone: '+91 8302161688',
      bio: 'Directing strategic positioning, Google Business discovery, and sustainable search visibility systems.',
      whatsappMsg: 'Hi Nitin, I would like to discuss a project with ONLINEAJAO.',
    },
  ];

  return (
    <section
      id="about"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#0D0F10] select-none"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/70 font-medium">
              07 / ABOUT ONLINEAJAO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08]">
            Small team. <span className="text-[#0D0F10]/70">Serious digital work.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#0D0F10]/70 max-w-sm hidden md:block">
          Direct partner access. Zero anonymous ticket queues. High-craft execution tailored for growing businesses.
        </p>
      </div>

      {/* Main Grid: Founders & Craft Image */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Founders Breakdown */}
        <div className="lg:col-span-7 flex flex-col gap-5 border-t border-[#0D0F10]/[0.10] pt-5">
          <p className="text-xs sm:text-sm text-[#0D0F10]/80 font-normal leading-relaxed max-w-xl">
            ONLINEAJAO works with growing businesses to create a stronger digital presence — from websites and Google visibility to SEO and long-term digital growth.
          </p>

          <div className="space-y-4 pt-2">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-[#FFFDF7]/60 border border-[#0D0F10]/[0.08] rounded-sm p-4 sm:p-5 flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <h3 className="text-lg sm:text-xl font-normal text-[#0D0F10]">
                    {founder.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-mono text-[#AC4526] uppercase font-medium">
                    {founder.role}
                  </span>
                </div>

                <p className="text-xs text-[#0D0F10]/70 font-light mb-3 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="flex items-center gap-2.5">
                  <a
                    href={`tel:+91${founder.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-wider uppercase font-medium bg-[#0D0F10] text-[#FFFDF7] rounded-xs hover:bg-[#08090A] transition-colors"
                  >
                    <span>📞 {founder.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/91${founder.phone}?text=${encodeURIComponent(founder.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-wider uppercase font-medium bg-[#FFFDF7] text-[#0D0F10] border border-[#0D0F10]/15 rounded-xs hover:bg-[#F5F1E7] transition-colors"
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Physical Studio Signage Showcase */}
        <div className="lg:col-span-5 hidden lg:flex flex-col items-center">
          <div className="relative w-full aspect-[4/4.5] rounded-sm overflow-hidden bg-[#0D0F10] border border-[#0D0F10]/15 shadow-card group">
            <Image
              src="/brand/mockup-signage.jpg"
              alt="ONLINEAJAO Physical Brand Signage"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F10]/90 via-[#0D0F10]/40 to-transparent flex flex-col justify-end p-5 text-[#FFFDF7]">
              <p className="text-[10px] tracking-widestLg uppercase text-[#CABBA8] font-medium">
                Direct Partner Access
              </p>
              <p className="text-xs font-light text-[#FFFDF7]/90 mt-1">
                You work directly with the founders — never outsourced to an anonymous ticketing queue.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-4 border-t border-[#0D0F10]/[0.08] flex items-center justify-between text-[11px] text-[#0D0F10]/60">
        <div className="flex items-center gap-2">
          <span>07 OF 08</span>
          <span className="w-1 h-1 rounded-full bg-[#0D0F10]/30" />
          <span>FOUNDERS & CRAFT</span>
        </div>

        <a
          href="#cta"
          className="inline-flex items-center gap-2 text-[#0D0F10] hover:text-[#AC4526] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Next: Final Step</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
