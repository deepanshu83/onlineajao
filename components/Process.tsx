import React from 'react';

interface Step {
  step: string;
  name: string;
  description: string;
  details: string;
}

export default function Process() {
  const steps: Step[] = [
    {
      step: '01',
      name: 'Discover',
      description: 'Understand the business, audience and goals.',
      details: 'We analyze your commercial model, customer touchpoints, competitors, and target search intent.',
    },
    {
      step: '02',
      name: 'Design',
      description: 'Define the visual direction and digital experience.',
      details: 'We establish an intentional aesthetic, typography system, layout hierarchy, and responsive prototypes.',
    },
    {
      step: '03',
      name: 'Build',
      description: 'Develop a fast, responsive and reliable website.',
      details: 'Engineered with clean Next.js code, zero template bloat, high Lighthouse scores, and semantic SEO markup.',
    },
    {
      step: '04',
      name: 'Grow',
      description: 'Improve visibility, presence and conversions.',
      details: 'Google Business profile activation, local search alignment, direct conversion loops, and ongoing optimization.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E7]/30 border-y border-[#0D0F10]/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
              METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08]">
            Simple process. <br />
            <span className="text-[#0D0F10]/75">Serious execution.</span>
          </h2>
        </div>

        {/* 4 Steps: Horizontal Desktop / Vertical Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8 border-t border-[#0D0F10]/[0.10] pt-12">
          {steps.map((item, idx) => (
            <div key={item.step} className="flex flex-col relative group">
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl sm:text-4xl font-light text-[#0D0F10]/30 group-hover:text-[#AC4526] transition-colors duration-200">
                  {item.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]/40 group-hover:bg-[#AC4526] transition-colors" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-normal text-[#0D0F10] mb-3">
                {item.name}
              </h3>
              <p className="text-sm text-[#0D0F10]/85 font-medium leading-snug mb-3">
                {item.description}
              </p>
              <p className="text-xs sm:text-[13px] text-[#0D0F10]/60 leading-relaxed font-normal">
                {item.details}
              </p>

              {/* Connecting hairline for desktop */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 -right-3 w-6 h-[1px] bg-[#0D0F10]/10 pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
