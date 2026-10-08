import React from 'react';

export default function TrustStrip() {
  const items = [
    'WEBSITES',
    'GOOGLE BUSINESS',
    'SEO',
    'SOCIAL MEDIA',
    'DIGITAL GROWTH',
  ];

  return (
    <section
      id="services-strip"
      className="border-y border-[#0D0F10]/[0.08] bg-[#F5F1E7]/50 py-5 sm:py-6 overflow-hidden"
      aria-label="Core Capabilities"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-6 sm:gap-x-8 text-center sm:text-left">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-[11px] sm:text-xs tracking-widestLg uppercase font-medium text-[#0D0F10]/75 hover:text-[#AC4526] transition-colors duration-200">
                {item}
              </span>
              {index < items.length - 1 && (
                <span
                  className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#AC4526]/50"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
