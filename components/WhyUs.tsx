import React from 'react';

export default function WhyUs() {
  const principles = [
    {
      number: '01',
      title: 'Built around the business',
      copy: 'No cookie-cutter templates. Systems built for how you actually acquire clients.',
    },
    {
      number: '02',
      title: 'Designed for real customers',
      copy: 'Fast, clear, and frictionless journeys that make choosing your business effortless.',
    },
    {
      number: '03',
      title: 'Focused on measurable growth',
      copy: 'Real phone calls, verified discovery, search visibility, and lasting trust.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#FFFDF7] border-b border-[#0D0F10]/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
              PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08]">
            Not more noise. <br />
            <span className="text-[#0D0F10]/75">More clarity.</span>
          </h2>
        </div>

        {/* 3 Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 border-t border-[#0D0F10]/[0.10] pt-12">
          {principles.map((item) => (
            <div key={item.number} className="flex flex-col group">
              <span className="text-3xl sm:text-4xl font-light text-[#0D0F10]/30 group-hover:text-[#AC4526] transition-colors duration-200 mb-6">
                {item.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#0D0F10] mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#0D0F10]/65 leading-relaxed font-normal">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
