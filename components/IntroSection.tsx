'use client';

import React from 'react';

export default function IntroSection() {
  const pillars = [
    {
      num: '01',
      title: 'Unified Website',
      desc: 'Fast, responsive, and conversion-focused. Engineered to turn passive attention into real client enquiries.',
    },
    {
      num: '02',
      title: 'Local Discovery',
      desc: 'Rank in top Google search packs. Turn local searchers into immediate phone calls, visits and WhatsApp chats.',
    },
    {
      num: '03',
      title: 'Active Brand Proof',
      desc: 'A cohesive visual identity and social presence that establishes unmistakable credibility instantly.',
    },
  ];

  return (
    <section
      id="intro"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#FFFDF7] select-none"
    >
      {/* Subtle brand geometry background watermark */}
      <div
        className="absolute -left-28 top-1/2 -translate-y-1/2 w-[520px] aspect-square rounded-full border border-white/[0.03] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header / Eyebrow */}
      <div className="flex items-center justify-between w-full">
        <div className="inline-flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
          <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#CABBA8] font-medium">
            02 / PERSPECTIVE
          </span>
        </div>
        <span className="text-[11px] font-mono tracking-widest uppercase text-white/40">
          EDITORIAL STATEMENT
        </span>
      </div>

      {/* Main Narrative Block */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
        {/* Left Column: Big Headline & Statement */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-[-0.035em] text-[#FFFDF7] leading-[1.08] mb-4 sm:mb-8">
            Your business deserves <br />
            <span className="text-[#E3DAB3]">more than just a website.</span>
          </h2>

          <p className="text-base sm:text-xl lg:text-2xl text-[#FFFDF7]/85 font-light leading-relaxed max-w-2xl mb-3 sm:mb-5">
            Your website, Google presence and social media should work together — not exist as disconnected pieces.
          </p>

          <p className="text-xs sm:text-base text-[#CABBA8]/80 font-normal leading-relaxed max-w-xl">
            We build digital experiences that make growing businesses easier to discover, easier to trust and easier to choose.
          </p>
        </div>

        {/* Right Column: 3 Pillars Card */}
        <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3.5 bg-white/[0.03] border border-white/[0.08] rounded-md p-4 sm:p-7 backdrop-blur-sm">
          <p className="text-[10px] tracking-widestLg uppercase text-[#CABBA8] font-medium mb-1">
            THE INTEGRATED SYSTEM
          </p>
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="border-t border-white/[0.06] pt-2.5 sm:pt-3.5 first:border-0 first:pt-0"
            >
              <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                <span className="text-xs sm:text-base font-normal text-[#FFFDF7]">
                  {pillar.title}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#AC4526] font-medium">
                  {pillar.num}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-3 sm:pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#CABBA8]/60">
        <div className="flex items-center gap-2">
          <span>02 OF 08</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>LAYERED ARCHITECTURE</span>
        </div>

        <a
          href="#services"
          className="inline-flex items-center gap-2 text-[#E3DAB3] hover:text-[#FFFDF7] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Next: Capabilities</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
