'use client';

import React from 'react';
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

  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
              <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08]">
              Work that makes businesses <br />
              <span className="text-[#0D0F10]/75">look ready for growth.</span>
            </h2>
          </div>

          <p className="text-xs tracking-widestLg uppercase text-[#0D0F10]/40 font-medium pb-2">
            EDITORIAL PREVIEWS · 2026
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-14">
          {projects.map((project, idx) => {
            const isFeatured = idx === 0;
            return (
              <article
                key={project.id}
                className={`group flex flex-col ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Visual Preview Container */}
                <div
                  className={`relative w-full rounded-sm overflow-hidden bg-[#F5F1E7] border border-[#0D0F10]/[0.08] ${
                    isFeatured
                      ? 'aspect-[16/9] sm:aspect-[21/9]'
                      : 'aspect-[16/10]'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    sizes={
                      isFeatured
                        ? '(max-width: 1280px) 100vw, 1280px'
                        : '(max-width: 768px) 100vw, 600px'
                    }
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Minimal Status Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center text-[10px] sm:text-[11px] tracking-wider uppercase font-medium bg-[#FFFDF7]/90 backdrop-blur-sm text-[#0D0F10] px-3 py-1 rounded-xs border border-[#0D0F10]/[0.08]">
                      {project.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[11px] font-mono text-[#FFFDF7] bg-[#0D0F10]/80 px-2 py-0.5 rounded-xs">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Information */}
                <div className="pt-6 sm:pt-8 flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#0D0F10]/[0.06] pb-4">
                    <h3 className="text-xl sm:text-2xl font-normal text-[#0D0F10] group-hover:text-[#AC4526] transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0D0F10]/55 uppercase tracking-wider font-medium">
                      {project.industry}
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#0D0F10]/70">
                    <p className="font-normal">{project.built}</p>
                    <span className="inline-flex items-center text-[11px] uppercase tracking-widestLg text-[#0D0F10]/50 group-hover:text-[#0D0F10] transition-colors shrink-0">
                      Scope Overview →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
