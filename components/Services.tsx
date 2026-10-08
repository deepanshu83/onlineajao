'use client';

import React, { useState } from 'react';

interface ServiceItem {
  number: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export default function Services() {
  const [activeService, setActiveService] = useState<string>('01');

  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'Website Design & Development',
      shortTitle: 'Websites & Next.js',
      headline: 'Fast, responsive websites built to turn attention into trust.',
      description:
        'High-performance websites designed around your business, customers and goals. Engineered with modern Next.js standards for instant loading, impeccable mobile refinement, and frictionless user flows.',
      deliverables: [
        'Custom Next.js & React architecture',
        'Mobile-first responsive engineering',
        'Conversion-optimized structure',
        'Flawless typographic hierarchy',
        'Zero bloated templates or page builders',
      ],
    },
    {
      number: '02',
      title: 'Google Business Profile',
      shortTitle: 'Google Business & Maps',
      headline: 'Get discovered locally and turn searches into real enquiries.',
      description:
        'When local customers search for your category or services, your Google profile determines whether they call you or your competitor. We claim, optimize, and position your profile for top local pack visibility.',
      deliverables: [
        'Complete profile audit & verification',
        'High-intent category alignment',
        'Geo-tagged imagery & media architecture',
        'Reputation & review generation framework',
        'Local Google Maps ranking optimization',
      ],
    },
    {
      number: '03',
      title: 'SEO & Search Visibility',
      shortTitle: 'Search Engine Optimization',
      headline: 'Build sustainable search visibility where customers are searching.',
      description:
        'Build long-term organic authority and capture buyers actively searching for your solutions. We establish clean technical foundations, semantic structure, and keyword architecture that search engines reward.',
      deliverables: [
        'Technical SEO & speed optimization',
        'High-intent commercial keywords',
        'Semantic HTML & schema markup',
        'Search engine indexing & sitemaps',
        'Local search & discovery signals',
      ],
    },
    {
      number: '04',
      title: 'Social Media Presence',
      shortTitle: 'Social Media Identity',
      headline: 'Create a consistent digital presence that people remember.',
      description:
        'Establish an intentional visual direction and consistent cadence across Instagram and LinkedIn. We transform sporadic posting into a cohesive brand system that elevates credibility.',
      deliverables: [
        'Editorial brand aesthetic & feed grid',
        'High-converting post & story templates',
        'Clear content pillars & messaging tone',
        'Brand guideline enforcement',
        'Unified cross-channel presence',
      ],
    },
    {
      number: '05',
      title: 'Digital Growth System',
      shortTitle: 'Full Growth Engine',
      headline: 'Connect your digital channels into one clear growth system.',
      description:
        'Unify your website, search ranking, social footprint, and customer touchpoints into a single, cohesive engine. Stop managing disconnected vendors and build a predictable digital growth foundation.',
      deliverables: [
        'Direct WhatsApp & phone lead capture',
        'Digital funnel audit & conversion optimization',
        'Unified customer journey alignment',
        'Strategic founder consultation',
        'Ongoing visibility & presence stewardship',
      ],
    },
  ];

  const current = services.find((s) => s.number === activeService) || services[0];

  return (
    <section
      id="services"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#0D0F10] select-none"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 w-full">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
              03 / CAPABILITIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08]">
            Build the presence. <span className="text-[#0D0F10]/70">Grow the business.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#0D0F10]/60 max-w-sm hidden md:block">
          Five core capabilities designed to give growing businesses an undeniable advantage online.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
        {/* Mobile Horizontal Tabs (< lg) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[#0D0F10]/[0.08]">
          {services.map((item) => {
            const isSelected = activeService === item.number;
            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveService(item.number)}
                className={`px-3 py-1.5 rounded-xs text-xs whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-[#0D0F10] text-[#FFFDF7] font-medium'
                    : 'bg-[#F5F1E7]/80 text-[#0D0F10]/70'
                }`}
              >
                <span className="font-mono text-[10px] text-[#AC4526]">{item.number}</span>
                <span>{item.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Vertical Service Selector Tabs (>= lg) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-2 border-t border-[#0D0F10]/[0.10] pt-4">
          {services.map((item) => {
            const isSelected = activeService === item.number;
            return (
              <button
                key={item.number}
                type="button"
                onMouseEnter={() => setActiveService(item.number)}
                onClick={() => setActiveService(item.number)}
                className={`text-left p-3.5 sm:p-4 rounded-sm transition-all duration-200 flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#0D0F10] text-[#FFFDF7] shadow-sm'
                    : 'bg-transparent text-[#0D0F10] hover:bg-[#F5F1E7]/70'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`font-mono text-xs sm:text-sm transition-colors ${
                      isSelected ? 'text-[#E3DAB3]' : 'text-[#0D0F10]/40 group-hover:text-[#AC4526]'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="text-sm sm:text-base font-normal tracking-tight">
                    {item.title}
                  </span>
                </div>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isSelected ? 'bg-[#AC4526] scale-125' : 'bg-transparent group-hover:bg-[#AC4526]/40'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Service Showcase Stage */}
        <div className="lg:col-span-7 bg-[#F5F1E7]/60 border border-[#0D0F10]/[0.08] rounded-md p-5 sm:p-8 lg:p-10 flex flex-col justify-between shadow-subtle min-h-[260px] sm:min-h-[340px]">
          <div>
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs font-mono text-[#AC4526] font-medium tracking-wider">
                FEATURED SERVICE {current.number}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#0D0F10]/40 font-medium">
                ONLINEAJAO
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl lg:text-3xl font-normal text-[#0D0F10] mb-2 tracking-tight">
              {current.headline}
            </h3>

            <p className="text-xs sm:text-sm lg:text-base text-[#0D0F10]/70 leading-relaxed font-normal mb-4 sm:mb-6">
              {current.description}
            </p>

            {/* Deliverables Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 mb-4 sm:mb-6">
              {current.deliverables.map((del, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center text-[10px] sm:text-xs text-[#0D0F10]/80 bg-[#FFFDF7] border border-[#0D0F10]/[0.10] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xs"
                >
                  <span className="w-1 h-1 rounded-full bg-[#AC4526] mr-1.5" />
                  {del}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-[#0D0F10]/[0.08] flex items-center justify-between">
            <a
              href="#contact"
              className="inline-flex items-center text-xs tracking-widestLg uppercase font-medium text-[#0D0F10] hover:text-[#AC4526] transition-colors group"
            >
              <span>Enquire About {current.shortTitle}</span>
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#0D0F10]/40">
              0{services.indexOf(current) + 1} / 05
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-3 sm:pt-4 border-t border-[#0D0F10]/[0.08] flex items-center justify-between text-[11px] text-[#0D0F10]/50">
        <div className="flex items-center gap-2">
          <span>03 OF 08</span>
          <span className="w-1 h-1 rounded-full bg-[#0D0F10]/30" />
          <span>CAPABILITIES ARCHITECTURE</span>
        </div>

        <a
          href="#google-business"
          className="inline-flex items-center gap-2 text-[#0D0F10]/80 hover:text-[#AC4526] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Next: Google Business</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
