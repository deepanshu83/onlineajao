'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-[96vh] flex flex-col justify-between pt-32 sm:pt-40 lg:pt-44 pb-12 overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-8 flex flex-col items-start max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/70 font-medium">
              ONLINEAJAO — DIGITAL EXPERIENCES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.05] sm:leading-[1.04] mb-8">
            Digital experiences <br className="hidden sm:inline" />
            <span className="text-[#0D0F10]/80">for growing businesses.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#0D0F10]/65 font-normal leading-relaxed max-w-2xl mb-10 sm:mb-12">
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
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-md overflow-hidden bg-[#0D0F10] border border-[#0D0F10]/10 shadow-elevation group">
            {/* Paper textured brand hero visual */}
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

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12 flex items-center justify-between text-[11px] text-[#0D0F10]/40 tracking-wider">
        <div className="flex items-center gap-2">
          <span>JAIPUR, RJ</span>
          <span className="w-1 h-1 rounded-full bg-[#0D0F10]/30" />
          <span>SERIOUS DIGITAL WORK</span>
        </div>

        <a
          href="#services-strip"
          className="inline-flex items-center gap-2 text-[#0D0F10]/50 hover:text-[#0D0F10] transition-colors duration-200 group"
          aria-label="Scroll down to explore"
        >
          <span className="text-[10px] uppercase tracking-widestLg">Scroll</span>
          <div className="w-4 h-7 rounded-full border border-[#0D0F10]/20 flex items-start justify-center p-1">
            <span className="w-1 h-1.5 rounded-full bg-[#AC4526] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
