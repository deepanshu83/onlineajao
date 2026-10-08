'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import StackedExperience from '@/components/StackedExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark' | 'sand'>('light');

  return (
    <div className="relative min-h-screen bg-[#FFFDF7] text-[#0D0F10] flex flex-col justify-between selection:bg-[#E3DAB3] selection:text-[#0D0F10]">
      {/* Dynamic Sticky/Fixed Navigation */}
      <Navbar theme={activeTheme} />

      {/* Main Stacked Narrative Experience */}
      <main className="w-full flex-1">
        {/* 8-Panel Layered Scroll Presentation */}
        <StackedExperience onThemeChange={setActiveTheme} />

        {/* Closing Contact & Project Inquiry Section */}
        <div className="relative z-[90] bg-[#FFFDF7] layer-shadow-light">
          <Contact />
        </div>
      </main>

      {/* Minimal Agency Footer */}
      <div className="relative z-[100]">
        <Footer />
      </div>
    </div>
  );
}
