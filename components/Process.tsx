'use client';

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
      details: 'Google Business profile activation, local search alignment, direct conversion loops, and ongoing stewardship.',
    },
  ];

  const principles = [
    { title: 'Built around the business', copy: 'No cookie-cutter templates. Systems built for how you actually acquire clients.' },
    { title: 'Designed for real customers', copy: 'Fast, clear, and frictionless journeys that make choosing your business effortless.' },
    { title: 'Focused on measurable growth', copy: 'Real phone calls, verified discovery, search visibility, and lasting trust.' },
  ];

  return (
    <section
      id="process"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#0D0F10] select-none"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
              06 / METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08]">
            Simple process. <span className="text-[#0D0F10]/70">Serious execution.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#0D0F10]/60 max-w-sm hidden md:block">
          A disciplined, four-phase system engineered to turn digital ambiguity into clarity and predictable performance.
        </p>
      </div>

      {/* Main 4-Step Methodology Row */}
      <div className="my-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-[#0D0F10]/[0.10] pt-8">
          {steps.map((item, idx) => (
            <div key={item.step} className="flex flex-col relative group">
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-light text-[#0D0F10]/30 group-hover:text-[#AC4526] transition-colors duration-200">
                  {item.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]/40 group-hover:bg-[#AC4526] transition-colors" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-normal text-[#0D0F10] mb-2">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#0D0F10]/85 font-medium leading-snug mb-2">
                {item.description}
              </p>
              <p className="text-[11px] sm:text-xs text-[#0D0F10]/60 leading-relaxed font-normal">
                {item.details}
              </p>

              {/* Connecting hairline for desktop */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-4 -right-3 w-6 h-[1px] bg-[#0D0F10]/10 pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Integrated Core Philosophy Strip */}
        <div className="mt-8 pt-6 border-t border-[#0D0F10]/[0.08] hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F5F1E7]/50 rounded-md p-5">
          {principles.map((p, i) => (
            <div key={p.title} className="flex items-start gap-2.5">
              <span className="text-xs font-mono text-[#AC4526] font-medium mt-0.5">0{i + 1}</span>
              <div>
                <h4 className="text-xs font-medium text-[#0D0F10]">{p.title}</h4>
                <p className="text-[11px] text-[#0D0F10]/60 mt-0.5 leading-relaxed">{p.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-4 border-t border-[#0D0F10]/[0.08] flex items-center justify-between text-[11px] text-[#0D0F10]/50">
        <div className="flex items-center gap-2">
          <span>06 OF 08</span>
          <span className="w-1 h-1 rounded-full bg-[#0D0F10]/30" />
          <span>FOUR-PHASE SYSTEM</span>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-[#0D0F10] hover:text-[#AC4526] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Next: About</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
