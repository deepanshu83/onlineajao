'use client';

import React, { useState } from 'react';

interface ServiceItem {
  number: string;
  title: string;
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
      headline: 'Fast, responsive websites built to turn attention into trust.',
      description:
        'High-performance websites designed around your business, customers and goals. Engineered with modern standards for instant loading, impeccable mobile refinement, and frictionless user flows.',
      deliverables: [
        'Custom Next.js & React architecture',
        'Mobile-first responsive engineering',
        'Conversion-optimized structure',
        'Flawless typographic hierarchy',
        'Zero bloated templates or slow page builders',
      ],
    },
    {
      number: '02',
      title: 'Google Business Profile',
      headline: 'Get discovered locally and turn searches into real enquiries.',
      description:
        'When local customers search for your category or services, your Google profile determines whether they call you or your competitor. We claim, optimize, and position your profile for top local pack visibility.',
      deliverables: [
        'Complete profile audit & verification',
        'High-intent category & attribute alignment',
        'Geo-tagged imagery & media architecture',
        'Reputation & review generation framework',
        'Local Google Maps ranking optimization',
      ],
    },
    {
      number: '03',
      title: 'SEO',
      headline: 'Build sustainable search visibility where customers are searching.',
      description:
        'Build long-term organic authority and capture buyers actively searching for your solutions. We establish clean technical foundations, semantic structure, and keyword architecture that search engines reward.',
      deliverables: [
        'Technical SEO & speed optimization',
        'High-intent commercial keyword targeting',
        'Semantic HTML & schema markup',
        'Search engine indexing & sitemaps',
        'Local search & regional discovery signals',
      ],
    },
    {
      number: '04',
      title: 'Social Media',
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
      title: 'Digital Growth',
      headline: 'Connect your digital channels into one clear growth system.',
      description:
        'Unify your website, search ranking, social footprint, and customer touchpoints into a single, cohesive engine. Stop managing disconnected vendors and build a predictable digital growth foundation.',
      deliverables: [
        'Direct WhatsApp & phone lead capture',
        'Digital funnel audit & conversion optimization',
        'Unified customer journey alignment',
        'Strategic co-founder consultation',
        'Ongoing visibility & presence stewardship',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08]">
            Build the presence. <br />
            <span className="text-[#0D0F10]/75">Grow the business.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#0D0F10]/60 font-normal mt-6 leading-relaxed max-w-xl">
            Five core capabilities designed to give growing businesses an undeniable advantage online.
          </p>
        </div>

        {/* Editorial Numbered Service Rows */}
        <div className="border-t border-[#0D0F10]/[0.12] divide-y divide-[#0D0F10]/[0.08]">
          {services.map((item) => {
            const isSelected = activeService === item.number;
            return (
              <div
                key={item.number}
                onMouseEnter={() => setActiveService(item.number)}
                className={`group py-12 sm:py-16 transition-colors duration-300 ${
                  isSelected ? 'bg-[#F5F1E7]/25' : 'hover:bg-[#F5F1E7]/15'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Number & Indicator */}
                  <div className="lg:col-span-2 flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-light tracking-tight text-[#0D0F10]/35 group-hover:text-[#AC4526] transition-colors duration-200">
                      {item.number}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-[#AC4526] transition-opacity duration-300 ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </div>

                  {/* Title & Headline */}
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#0D0F10] mb-3 group-hover:text-[#08090A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#AC4526] font-medium tracking-tight">
                      {item.headline}
                    </p>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <p className="text-sm sm:text-base text-[#0D0F10]/65 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Key deliverables pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.deliverables.map((del, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-[11px] sm:text-xs text-[#0D0F10]/75 bg-[#FFFDF7] border border-[#0D0F10]/[0.08] px-2.5 py-1 rounded-xs"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#AC4526]/70 mr-1.5" />
                          {del}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#0D0F10]/[0.05] flex items-center justify-between">
                      <a
                        href="#contact"
                        className="inline-flex items-center text-xs tracking-widestLg uppercase font-medium text-[#0D0F10] hover:text-[#AC4526] transition-colors group/link"
                      >
                        <span>Enquire About {item.title.split(' ')[0]}</span>
                        <svg
                          className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover/link:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
