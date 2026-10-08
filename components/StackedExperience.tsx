'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Hero from './Hero';
import IntroSection from './IntroSection';
import Services from './Services';
import GoogleBusinessFeature from './GoogleBusinessFeature';
import Portfolio from './Portfolio';
import Process from './Process';
import About from './About';
import FinalCTA from './FinalCTA';

interface StackedItem {
  id: string;
  number: string;
  title: string;
  theme: 'light' | 'dark' | 'sand';
  bgClass: string;
  shadowClass: string;
  component: React.ReactNode;
}

export default function StackedExperience({
  onThemeChange,
}: {
  onThemeChange?: (theme: 'light' | 'dark' | 'sand') => void;
}) {
  const sections: StackedItem[] = [
    {
      id: 'hero',
      number: '01',
      title: 'Hero',
      theme: 'light',
      bgClass: 'bg-[#FFFDF7]',
      shadowClass: '',
      component: <Hero />,
    },
    {
      id: 'intro',
      number: '02',
      title: 'Perspective',
      theme: 'dark',
      bgClass: 'bg-[#0D0F10]',
      shadowClass: 'layer-shadow-dark border-t border-white/[0.08]',
      component: <IntroSection />,
    },
    {
      id: 'services',
      number: '03',
      title: 'Capabilities',
      theme: 'light',
      bgClass: 'bg-[#FFFDF7]',
      shadowClass: 'layer-shadow-light border-t border-[#0D0F10]/[0.08]',
      component: <Services />,
    },
    {
      id: 'google-business',
      number: '04',
      title: 'Discovery',
      theme: 'sand',
      bgClass: 'bg-[#ECE5D3]',
      shadowClass: 'layer-shadow-sand border-t border-[#0D0F10]/[0.08]',
      component: <GoogleBusinessFeature />,
    },
    {
      id: 'work',
      number: '05',
      title: 'Work',
      theme: 'dark',
      bgClass: 'bg-[#0D0F10]',
      shadowClass: 'layer-shadow-dark border-t border-white/[0.08]',
      component: <Portfolio />,
    },
    {
      id: 'process',
      number: '06',
      title: 'Process',
      theme: 'light',
      bgClass: 'bg-[#FFFDF7]',
      shadowClass: 'layer-shadow-light border-t border-[#0D0F10]/[0.08]',
      component: <Process />,
    },
    {
      id: 'about',
      number: '07',
      title: 'About',
      theme: 'sand',
      bgClass: 'bg-[#E3DAB3]',
      shadowClass: 'layer-shadow-sand border-t border-[#0D0F10]/[0.08]',
      component: <About />,
    },
    {
      id: 'cta',
      number: '08',
      title: 'Initiate',
      theme: 'dark',
      bgClass: 'bg-[#08090A]',
      shadowClass: 'layer-shadow-dark border-t border-white/[0.08]',
      component: <FinalCTA />,
    },
  ];

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Smooth scroll handler with rAF to calculate subtle scale & darkening
  const handleScroll = useCallback(() => {
    if (reducedMotion) return;

    const windowHeight = window.innerHeight;
    let currentTopIndex = 0;

    for (let i = 0; i < sections.length; i++) {
      const el = sectionRefs.current[i];
      if (!el) continue;

      const rect = el.getBoundingClientRect();

      // Determine active section at the navigation threshold (top 90px)
      if (rect.top <= 90) {
        currentTopIndex = i;
      }

      // Check next element (either next section or the following content)
      const nextEl =
        i < sections.length - 1
          ? sectionRefs.current[i + 1]
          : document.getElementById('contact');

      let progress = 0;

      if (nextEl) {
        const nextRect = nextEl.getBoundingClientRect();
        // nextRect.top goes from windowHeight (start of covering) to 0 (fully covering)
        if (nextRect.top < windowHeight && nextRect.top >= 0) {
          progress = (windowHeight - nextRect.top) / windowHeight;
        } else if (nextRect.top < 0) {
          progress = 1;
        }
      }

      // Apply subtle physical depth: scale 1 -> 0.972, overlay 0 -> 0.14
      const scale = 1 - 0.028 * progress;
      const opacity = 0.14 * progress;

      const inner = innerRefs.current[i];
      if (inner) {
        inner.style.transform = `scale(${scale})`;
      }

      const overlay = overlayRefs.current[i];
      if (overlay) {
        overlay.style.opacity = `${opacity}`;
      }
    }

    setActiveIndex(currentTopIndex);
    if (onThemeChange) {
      onThemeChange(sections[currentTopIndex].theme);
    }
  }, [reducedMotion, sections, onThemeChange]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      const top = el.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  const activeTheme = sections[activeIndex]?.theme || 'light';

  return (
    <div className="relative w-full">
      {/* Floating Section Index Jump Bar (Desktop Editorial Indicator) */}
      <aside
        className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 select-none pointer-events-auto"
        aria-label="Story flow sections"
      >
        <div
          className={`flex flex-col items-center gap-2.5 p-2 rounded-full border backdrop-blur-md transition-colors duration-300 ${
            activeTheme === 'dark'
              ? 'bg-[#0D0F10]/70 border-white/10 text-white'
              : 'bg-[#FFFDF7]/70 border-[#0D0F10]/10 text-[#0D0F10]'
          }`}
        >
          {sections.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(idx)}
                className="group relative flex items-center justify-center p-1.5 focus:outline-none"
                aria-label={`Jump to ${item.number} ${item.title}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {/* Visual Dot */}
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#AC4526] scale-125'
                      : activeTheme === 'dark'
                      ? 'bg-white/30 group-hover:bg-white/70'
                      : 'bg-[#0D0F10]/30 group-hover:bg-[#0D0F10]/70'
                  }`}
                />

                {/* Tooltip on Hover */}
                <span
                  className={`absolute right-7 px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 ${
                    activeTheme === 'dark'
                      ? 'bg-[#08090A] text-white border border-white/10'
                      : 'bg-[#FFFDF7] text-[#0D0F10] border border-[#0D0F10]/10 shadow-sm'
                  }`}
                >
                  {item.number} · {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <span
          className={`text-[9px] font-mono tracking-widest uppercase transition-colors duration-300 ${
            activeTheme === 'dark' ? 'text-white/40' : 'text-[#0D0F10]/40'
          }`}
        >
          {sections[activeIndex]?.number || '01'} / 08
        </span>
      </aside>

      {/* 8 Stacked Sections */}
      {sections.map((section, index) => {
        const zIndex = (index + 1) * 10;
        return (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            id={section.id}
            className={`stacked-card sticky top-0 h-screen min-h-[100svh] w-full overflow-hidden ${section.bgClass} ${section.shadowClass}`}
            style={{ zIndex }}
          >
            {/* Inner scaled container */}
            <div
              ref={(el) => {
                innerRefs.current[index] = el;
              }}
              className="stacked-inner h-full w-full will-change-transform"
              style={{
                transformOrigin: 'center center',
              }}
            >
              {section.component}
            </div>

            {/* Subtle darkening overlay during covering */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="pointer-events-none absolute inset-0 bg-black opacity-0"
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
}
