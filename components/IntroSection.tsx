import React from 'react';

export default function IntroSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#FFFDF7] border-b border-[#0D0F10]/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Eyebrow and Headline */}
          <div className="lg:col-span-6">
            <p className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#AC4526] font-medium mb-4">
              PERSPECTIVE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#0D0F10] leading-[1.12]">
              Your business deserves <br className="hidden sm:inline" />
              more than just a website.
            </h2>
          </div>

          {/* Copy and Editorial statement */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-1 lg:pt-8">
            <p className="text-lg sm:text-xl text-[#0D0F10]/85 font-normal leading-relaxed mb-6">
              Your website, Google presence and social media should work together — not exist as disconnected pieces.
            </p>
            <p className="text-base sm:text-lg text-[#0D0F10]/60 font-normal leading-relaxed">
              We build digital experiences that make growing businesses easier to discover, easier to trust and easier to choose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
