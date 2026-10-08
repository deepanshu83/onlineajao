'use client';

import React from 'react';

export default function GoogleBusinessFeature() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#F5F1E7]/40 border-y border-[#0D0F10]/[0.08] relative overflow-hidden">
      {/* Decorative subtle concentric circles */}
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#0D0F10]/[0.025] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
              <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
                LOCAL DISCOVERY ENGINE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.03em] text-[#0D0F10] leading-[1.08] mb-6">
              Be found when people are looking.
            </h2>

            <p className="text-base sm:text-lg text-[#0D0F10]/70 font-normal leading-relaxed mb-8">
              When someone searches for your business, your Google presence is often the first impression they get.
              We help businesses build, optimize and manage that presence.
            </p>

            {/* Key Value Points */}
            <div className="space-y-4 mb-10 w-full border-t border-[#0D0F10]/[0.08] pt-6">
              <div className="flex items-start gap-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526] mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-[#0D0F10]">Immediate Local Authority</h4>
                  <p className="text-xs sm:text-sm text-[#0D0F10]/60 mt-0.5">
                    Verified badge, accurate business hours, high-res photos, and verified reviews that inspire trust instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526] mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-[#0D0F10]">Direct Customer Actions</h4>
                  <p className="text-xs sm:text-sm text-[#0D0F10]/60 mt-0.5">
                    Turn searchers into paying clients with frictionless one-tap calls, directions, and direct website bookings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526] mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-[#0D0F10]">Organic Search Pack Visibility</h4>
                  <p className="text-xs sm:text-sm text-[#0D0F10]/60 mt-0.5">
                    Strategic category mapping and keyword optimization to rank in top local search queries without ongoing ad spend.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-4 text-xs tracking-widestLg uppercase font-medium bg-[#0D0F10] text-[#FFFDF7] rounded-sm transition-all duration-300 hover:bg-[#08090A] hover:shadow-floating hover:-translate-y-0.5 group"
            >
              <span>Improve My Google Presence</span>
              <svg
                className="w-3.5 h-3.5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Editorial Search / Profile Showcase Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFDF7] border border-[#0D0F10]/[0.10] rounded-md p-6 sm:p-8 shadow-card relative">
              {/* Top Search bar mockup */}
              <div className="flex items-center gap-3 bg-[#F5F1E7]/70 border border-[#0D0F10]/[0.08] px-4 py-3 rounded-xs mb-8">
                <svg
                  className="w-4 h-4 text-[#0D0F10]/40 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs sm:text-sm text-[#0D0F10]/80 font-normal">
                  Best modern architectural studio in Jaipur
                </span>
                <span className="w-1.5 h-3.5 bg-[#AC4526] animate-pulse ml-auto" />
              </div>

              {/* Business Profile Summary */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-normal text-[#0D0F10]">
                        Studio Archetype & Co.
                      </h3>
                      <span className="inline-flex items-center text-[10px] text-[#0D0F10] bg-[#E3DAB3] px-2 py-0.5 rounded-full font-medium">
                        ✓ Verified
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#0D0F10]/60 mt-0.5">
                      Architectural Practice · Jaipur, Rajasthan
                    </p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#AC4526]" />
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-3 py-3 border-y border-[#0D0F10]/[0.06] text-xs">
                  <div className="flex items-center text-[#AC4526]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <span className="font-medium text-[#0D0F10]">5.0</span>
                  <span className="text-[#0D0F10]/50">(48 verified client reviews)</span>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-4 gap-2 text-center text-[11px] sm:text-xs">
                  <div className="p-3 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-1.5 hover:border-[#0D0F10]/20 transition-colors">
                    <span className="text-sm">📞</span>
                    <span className="font-medium text-[#0D0F10]">Call</span>
                  </div>
                  <div className="p-3 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-1.5 hover:border-[#0D0F10]/20 transition-colors">
                    <span className="text-sm">📍</span>
                    <span className="font-medium text-[#0D0F10]">Directions</span>
                  </div>
                  <div className="p-3 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-1.5 hover:border-[#0D0F10]/20 transition-colors">
                    <span className="text-sm">🌐</span>
                    <span className="font-medium text-[#0D0F10]">Website</span>
                  </div>
                  <div className="p-3 bg-[#F5F1E7]/60 rounded-xs border border-[#0D0F10]/[0.06] flex flex-col items-center gap-1.5 hover:border-[#0D0F10]/20 transition-colors">
                    <span className="text-sm">💬</span>
                    <span className="font-medium text-[#0D0F10]">WhatsApp</span>
                  </div>
                </div>

                {/* Performance Pill Indicators */}
                <div className="bg-[#0D0F10] text-[#FFFDF7] p-5 rounded-sm flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-widestLg uppercase text-[#CABBA8] font-medium">
                      Search Impact
                    </p>
                    <p className="text-xs text-[#FFFDF7]/90 font-light mt-0.5">
                      Top 3 Local Pack Ranking
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-light text-[#E3DAB3]">+280%</span>
                    <p className="text-[10px] text-[#FFFDF7]/60">Discovery Queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
