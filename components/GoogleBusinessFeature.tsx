'use client';

import React from 'react';

export default function GoogleBusinessFeature() {
  return (
    <section
      id="google-business"
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-[#0D0F10] select-none"
    >
      {/* Decorative subtle concentric circles */}
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] aspect-square rounded-full border border-[#0D0F10]/[0.035] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between w-full">
        <div className="inline-flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
          <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/70 font-medium">
            04 / LOCAL DISCOVERY ENGINE
          </span>
        </div>
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#0D0F10]/40">
          GOOGLE MAPS & SEARCH
        </span>
      </div>

      {/* Main Grid */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-center">
        {/* Left Column: Text & Value Proposition */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-[56px] font-normal tracking-[-0.03em] text-[#0D0F10] leading-[1.08] mb-3 sm:mb-6">
            Be found when <br className="hidden sm:inline" />
            <span className="text-[#0D0F10]/70">people are looking.</span>
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-[#0D0F10]/75 font-normal leading-relaxed mb-4 sm:mb-6">
            When someone searches for your business, your Google presence is often the first impression they get.
            We help businesses build, optimize and manage that presence.
          </p>

          {/* Key Value Points */}
          <div className="space-y-2.5 sm:space-y-3.5 mb-5 sm:mb-8 w-full border-t border-[#0D0F10]/[0.10] pt-3.5 sm:pt-5">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526] mt-1.5 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-[#0D0F10]">Immediate Local Authority</h4>
                <p className="text-[10px] sm:text-xs text-[#0D0F10]/65 mt-0.5">
                  Verified badge, high-res photos, business hours and verified reviews that inspire trust.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526] mt-1.5 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-[#0D0F10]">Direct Customer Actions</h4>
                <p className="text-[10px] sm:text-xs text-[#0D0F10]/65 mt-0.5">
                  Turn searchers into clients with one-tap phone calls, directions, and direct WhatsApp chats.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-start gap-2.5 sm:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526] mt-1.5 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-[#0D0F10]">Organic Top 3 Search Pack</h4>
                <p className="text-[10px] sm:text-xs text-[#0D0F10]/65 mt-0.5">
                  Strategic category mapping and local SEO signals to rank without recurring ad costs.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs tracking-widestLg uppercase font-medium bg-[#0D0F10] text-[#FFFDF7] rounded-sm transition-all duration-300 hover:bg-[#08090A] hover:shadow-floating hover:-translate-y-0.5 group"
          >
            <span>Improve My Google Presence</span>
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right Column: Google Profile Mockup Card */}
        <div className="lg:col-span-6">
          <div className="bg-[#FFFDF7] border border-[#0D0F10]/[0.10] rounded-md p-4 sm:p-7 shadow-card relative">
            {/* Top Search bar mockup */}
            <div className="flex items-center gap-2.5 sm:gap-3 bg-[#F5F1E7]/70 border border-[#0D0F10]/[0.08] px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xs mb-3.5 sm:mb-6">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0D0F10]/40 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-[11px] sm:text-xs text-[#0D0F10]/80 font-normal truncate">
                Best modern architectural studio in Jaipur
              </span>
              <span className="w-1.5 h-3 bg-[#AC4526] animate-pulse ml-auto" />
            </div>

            {/* Profile Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-lg font-normal text-[#0D0F10]">
                      Studio Archetype & Co.
                    </h3>
                    <span className="inline-flex items-center text-[9px] text-[#0D0F10] bg-[#E3DAB3] px-2 py-0.5 rounded-full font-medium">
                      ✓ Verified
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#0D0F10]/60 mt-0.5">
                    Architectural Practice · Jaipur, Rajasthan
                  </p>
                </div>
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#AC4526]" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 py-1.5 sm:py-2 border-y border-[#0D0F10]/[0.06] text-xs">
                <div className="flex items-center text-[#AC4526]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                </div>
                <span className="font-medium text-[#0D0F10]">5.0</span>
                <span className="text-[#0D0F10]/50 text-[11px]">(48 client reviews)</span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center text-[10px] sm:text-xs">
                <div className="p-2 sm:p-2.5 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-0.5">
                  <span className="text-xs sm:text-sm">📞</span>
                  <span className="font-medium text-[#0D0F10]">Call</span>
                </div>
                <div className="p-2 sm:p-2.5 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-0.5">
                  <span className="text-xs sm:text-sm">📍</span>
                  <span className="font-medium text-[#0D0F10]">Maps</span>
                </div>
                <div className="p-2 sm:p-2.5 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-0.5">
                  <span className="text-xs sm:text-sm">🌐</span>
                  <span className="font-medium text-[#0D0F10]">Website</span>
                </div>
                <div className="p-2 sm:p-2.5 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-0.5">
                  <span className="text-xs sm:text-sm">💬</span>
                  <span className="font-medium text-[#0D0F10]">Chat</span>
                </div>
              </div>

              {/* Impact Pill */}
              <div className="bg-[#0D0F10] text-[#FFFDF7] p-2.5 sm:p-3.5 rounded-sm flex items-center justify-between">
                <div>
                  <p className="text-[9px] tracking-widestLg uppercase text-[#CABBA8] font-medium">
                    Search Impact
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#FFFDF7]/90 font-light mt-0.5">
                    Top 3 Local Pack Ranking
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs sm:text-sm font-light text-[#E3DAB3]">+280%</span>
                  <p className="text-[9px] text-[#FFFDF7]/60">Queries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full pt-3 sm:pt-4 border-t border-[#0D0F10]/[0.08] flex items-center justify-between text-[11px] text-[#0D0F10]/60">
        <div className="flex items-center gap-2">
          <span>04 OF 08</span>
          <span className="w-1 h-1 rounded-full bg-[#0D0F10]/30" />
          <span>LOCAL ENGINE</span>
        </div>

        <a
          href="#work"
          className="inline-flex items-center gap-2 text-[#0D0F10] hover:text-[#AC4526] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widestLg font-medium">Next: Selected Work</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
