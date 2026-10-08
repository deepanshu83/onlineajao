'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  name: string;
  industry: string;
  built: string;
  image: string;
  tag: string;
  year: string;
}

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<string>('01');

  const projects: Project[] = [
    {
      id: '01',
      name: 'Studio Vayu',
      industry: 'Architecture & Spatial Design',
      built: 'Custom Next.js Web Experience, Architectural Portfolio & Technical SEO',
      image: '/brand/project-architecture.jpg',
      tag: 'Curated Showcase',
      year: '2026',
    },
    {
      id: '02',
      name: 'Aethel Clinic',
      industry: 'Specialty Healthcare & Aesthetics',
      built: 'Digital Flagship, Google Business Profile & Appointment Flow',
      image: '/brand/project-wellness.jpg',
      tag: 'Curated Showcase',
      year: '2026',
    },
    {
      id: '03',
      name: 'The Roasted Bean Co.',
      industry: 'Artisan Coffee & Retail Experience',
      built: 'Brand Website, Local Search Discovery & Social Content System',
      image: '/brand/project-retail.jpg',
      tag: 'Curated Showcase',
      year: '2026',
    },
    {
      id: '04',
      name: 'Nivaan Living',
      industry: 'Bespoke Furniture & Interior Craft',
      built: 'High-Performance Catalog, Brand Narrative & Search Architecture',
      image: '/brand/project-interiors.jpg',
      tag: 'Curated Showcase',
      year: '2026',
    },
    {
      id: '05',
      name: 'ONLINEAJAO Identity System',
      industry: 'Digital Experience & Physical Collateral',
      built: 'Complete Brand Identity, Signage, Stationery & Digital Architecture',
      image: '/brand/mockup-card.jpg',
      tag: 'Studio Flagship',
      year: '2026',
    },
  ];

  const current = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section
      id="work"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#FFFDF7] select-none"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 w-full">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#CABBA8] font-medium">
              05 / SELECTED WORK
            </span>
          </div>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#FFFDF7] leading-[1.08]">
            Work that makes businesses <br className="hidden sm:inline" />
            <span className="text-[#E3DAB3]">look ready for growth.</span>
          </h2>
        </div>
        <p className="text-xs tracking-widestLg uppercase text-white/40 font-mono hidden md:block">
          EDITORIAL PREVIEWS · 2026
        </p>
      </div>

      {/* Main Interactive Presentation */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
        {/* Mobile Horizontal Selector (< lg) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-white/[0.08]">
          {projects.map((project) => {
            const isSelected = project.id === selectedId;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedId(project.id)}
                className={`px-3 py-1.5 rounded-xs text-xs whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-white/[0.12] text-white border-b-2 border-[#AC4526] font-medium'
                    : 'bg-white/[0.03] text-white/60'
                }`}
              >
                <span className="font-mono text-[10px] text-[#AC4526]">{project.id}</span>
                <span>{project.name}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Vertical Project Index List (>= lg) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-1.5 border-t border-white/[0.10] pt-4">
          {projects.map((project) => {
            const isSelected = project.id === selectedId;
            return (
              <button
                key={project.id}
                type="button"
                onMouseEnter={() => setSelectedId(project.id)}
                onClick={() => setSelectedId(project.id)}
                className={`text-left p-3.5 sm:p-4 rounded-sm transition-all duration-200 flex items-center justify-between group ${
                  isSelected
                    ? 'bg-white/[0.08] text-[#FFFDF7] border-l-2 border-[#AC4526]'
                    : 'bg-transparent text-white/70 hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#AC4526]">{project.id}</span>
                    <span className="text-base sm:text-lg font-normal tracking-tight text-[#FFFDF7]">
                      {project.name}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 pl-7 mt-0.5">{project.industry}</p>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono text-white/40">{project.year}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isSelected ? 'bg-[#AC4526] scale-125' : 'bg-transparent group-hover:bg-[#AC4526]/40'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Cinematic Project Preview Stage */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative w-full aspect-[16/10] max-h-[46vh] rounded-sm overflow-hidden bg-[#08090A] border border-white/[0.12] shadow-elevation">
            <Image
              src={current.image}
              alt={`${current.name} preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover object-center transition-all duration-500 ease-out"
            />

            {/* Overlaid Badges */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <span className="inline-flex items-center text-[9px] sm:text-[11px] tracking-wider uppercase font-medium bg-[#0D0F10]/80 backdrop-blur-sm text-[#FFFDF7] px-2.5 py-1 rounded-xs border border-white/10">
                {current.tag}
              </span>
            </div>

            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#FFFDF7] bg-[#0D0F10]/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-xs border border-white/10">
                {current.year}
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 bg-gradient-to-t from-[#0D0F10] via-[#0D0F10]/85 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3 text-[#FFFDF7]">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widestLg text-[#CABBA8] font-medium">
                  {current.industry}
                </p>
                <h4 className="text-base sm:text-lg font-normal text-[#FFFDF7] mt-0.5">
                  {current.name}
                </h4>
                <p className="text-xs text-white/70 font-light mt-0.5 max-w-md hidden sm:block">
                  {current.built}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-xs tracking-widestLg uppercase font-medium text-[#E3DAB3] hover:text-[#FFFDF7] transition-colors shrink-0 group/link"
              >
                <span>Start Similar Project</span>
                <span className="ml-1.5 transition-transform duration-200 group-hover:link:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-3 sm:pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#CABBA8]/60">
        <div className="flex items-center gap-2">
          <span>05 OF 08</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>CURATED SHOWCASE</span>
        </div>

        <a
          href="#process"
          className="inline-flex items-center gap-2 text-[#E3DAB3] hover:text-[#FFFDF7] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Next: Process</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
