'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const capabilities = [
    'WEBSITES',
    'GOOGLE BUSINESS',
    'SEO',
    'SOCIAL MEDIA',
    'DIGITAL GROWTH',
  ];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Subtle brand geometry watermark in background */}
      <div
        className="absolute top-1/2 -right-24 -translate-y-1/2 w-[420px] sm:w-[600px] lg:w-[740px] aspect-square rounded-full border border-[#0D0F10]/[0.035] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-44 -translate-y-1/2 w-[600px] sm:w-[840px] lg:w-[1040px] aspect-square rounded-full border border-[#0D0F10]/[0.02] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-8 flex flex-col items-start max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/70 font-medium">
              01 / ONLINEAJAO — DIGITAL EXPERIENCES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.05] sm:leading-[1.04] mb-6 sm:mb-8">
            Digital experiences <br className="hidden sm:inline" />
            <span className="text-[#0D0F10]/80">for growing businesses.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#0D0F10]/65 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            We design websites and digital systems that help businesses look credible, get discovered, and grow online.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-4 text-xs tracking-widestLg uppercase font-medium bg-[#0D0F10] text-[#FFFDF7] rounded-sm transition-all duration-300 hover:bg-[#08090A] hover:shadow-floating hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Start a Project</span>
              <svg
                className="w-3.5 h-3.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1 text-[#FFFDF7]/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 text-xs tracking-widestLg uppercase font-medium bg-transparent text-[#0D0F10] border border-[#0D0F10]/15 rounded-sm transition-all duration-200 hover:bg-[#0D0F10]/[0.03] hover:border-[#0D0F10]/30"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Brand Composition */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center">
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-md overflow-hidden bg-[#0D0F10] border border-[#0D0F10]/10 shadow-elevation group">
            <Image
              src="/brand/brand-hero-mark.jpg"
              alt="ONLINEAJAO Emblem"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            
            {/* Minimal caption badge */}
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0D0F10] via-[#0D0F10]/80 to-transparent flex items-center justify-between text-[#FFFDF7]">
              <div>
                <p className="text-[10px] tracking-widestLg uppercase text-[#CABBA8] font-medium">
                  Studio Identity
                </p>
                <p className="text-xs text-[#FFFDF7]/90 font-light mt-0.5">
                  Quiet. Intentional. Built to scale.
                </p>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#AC4526]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Capabilities Strip & Scroll Indicator */}
      <div className="w-full pt-4 border-t border-[#0D0F10]/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#0D0F10]/60">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {capabilities.map((cap, i) => (
            <React.Fragment key={cap}>
              <span className="tracking-widestLg uppercase font-medium text-[#0D0F10]/75">
                {cap}
              </span>
              {i < capabilities.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-[#AC4526]/50" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        <a
          href="#intro"
          className="inline-flex items-center gap-2 text-[#0D0F10]/60 hover:text-[#0D0F10] transition-colors duration-200 shrink-0"
          aria-label="Scroll down to explore"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Scroll to explore</span>
          <div className="w-3.5 h-6 rounded-full border border-[#0D0F10]/25 flex items-start justify-center p-0.5">
            <span className="w-1 h-1.5 rounded-full bg-[#AC4526] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
