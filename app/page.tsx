import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import IntroSection from '@/components/IntroSection';
import Services from '@/components/Services';
import GoogleBusinessFeature from '@/components/GoogleBusinessFeature';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF7] text-[#0D0F10] overflow-hidden flex flex-col justify-between">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Value / Services Strip */}
        <TrustStrip />

        {/* Editorial Introduction */}
        <IntroSection />

        {/* 01-05 Services Breakdown */}
        <Services />

        {/* Google Business Profile Special Feature */}
        <GoogleBusinessFeature />

        {/* Selected Work & Editorial Portfolio */}
        <Portfolio />

        {/* 4-Step Process */}
        <Process />

        {/* Why ONLINEAJAO Principles */}
        <WhyUs />

        {/* About ONLINEAJAO & Founders */}
        <About />

        {/* Contact & Project Inquiry */}
        <Contact />

        {/* Closing Final CTA */}
        <FinalCTA />
      </main>

      {/* Minimal Agency Footer */}
      <Footer />
    </div>
  );
}
