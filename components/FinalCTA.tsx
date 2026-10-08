'use client';

import React from 'react';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#FFFDF7] select-none"
    >
      {/* Subtle brand geometry background watermark */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[520px] aspect-square rounded-full border border-white/[0.04] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between w-full">
        <div className="inline-flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
          <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#CABBA8] font-medium">
            08 / NEXT STEP
          </span>
        </div>
        <span className="text-[11px] font-mono tracking-widest uppercase text-white/40">
          PROJECT INITIATION
        </span>
      </div>

      {/* Main Closing Call Block */}
      <div className="my-auto max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.035em] text-[#FFFDF7] leading-[1.06] mb-6 sm:mb-8">
          Ready to build a better <br />
          <span className="text-[#E3DAB3]">digital presence?</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#FFFDF7]/70 font-light leading-relaxed max-w-lg mb-8 sm:mb-12">
          Tell us what you&apos;re building. <br className="hidden sm:inline" />
          We&apos;ll figure out the next step.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-xs tracking-widestLg uppercase font-medium bg-[#FFFDF7] text-[#0D0F10] rounded-sm transition-all duration-300 hover:bg-[#E3DAB3] hover:-translate-y-0.5 active:translate-y-0 shadow-floating"
          >
            <span>Start a Project</span>
            <span className="ml-2">↓</span>
          </a>

          <a
            href="https://wa.me/918302909191?text=Hi%20ONLINEAJAO%2C%20I%20would%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-widestLg uppercase font-medium bg-transparent text-[#FFFDF7] border border-white/20 rounded-sm hover:bg-white/[0.05] transition-colors"
          >
            <span>WhatsApp Us</span>
            <svg className="w-3.5 h-3.5 text-[#AC4526]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.39 5.08L2 22l5.08-1.35C8.54 21.52 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.57 0-3.04-.44-4.3-1.2l-.31-.18-3.01.8.8-2.93-.2-.32C4.38 14.9 4 13.48 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#CABBA8]/60">
        <div className="flex items-center gap-2">
          <span>08 OF 08</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>FINAL PRESENTATION PANEL</span>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[#E3DAB3] hover:text-[#FFFDF7] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Scroll to Inquiry Form</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
