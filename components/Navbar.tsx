'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Navbar({
  theme = 'light',
}: {
  theme?: 'light' | 'dark' | 'sand';
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-[#0D0F10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-3.5'
              : theme === 'sand'
              ? 'bg-[#ECE5D3]/90 backdrop-blur-md border-b border-[#0D0F10]/[0.08] shadow-[0_2px_12px_rgba(13,15,16,0.02)] py-3.5'
              : 'bg-[#FFFDF7]/90 backdrop-blur-md border-b border-[#0D0F10]/[0.06] shadow-[0_2px_12px_rgba(13,15,16,0.02)] py-3.5'
            : 'bg-transparent border-b border-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="flex items-center group transition-opacity duration-200 hover:opacity-85 focus:outline-none"
            aria-label="ONLINEAJAO Home"
          >
            <BrandLogo variant={isDark ? 'reverse' : 'horizontal'} height={32} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] tracking-wide font-normal transition-colors duration-200 relative group py-1 ${
                  isDark
                    ? 'text-white/75 hover:text-white'
                    : 'text-[#0D0F10]/75 hover:text-[#0D0F10]'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#AC4526] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className={`inline-flex items-center justify-center px-4 py-2 text-[13px] tracking-wider uppercase font-medium rounded-sm transition-all duration-200 hover:shadow-subtle hover:-translate-y-0.5 active:translate-y-0 ${
                isDark
                  ? 'bg-[#FFFDF7] text-[#0D0F10] hover:bg-[#E3DAB3]'
                  : 'bg-[#0D0F10] text-[#FFFDF7] hover:bg-[#08090A]'
              }`}
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden inline-flex items-center justify-center p-2 focus:outline-none ${
              isDark ? 'text-white' : 'text-[#0D0F10]'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-[1.5px] transition-transform duration-300 ${
                  isDark ? 'bg-white' : 'bg-[#0D0F10]'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`w-full h-[1.5px] transition-opacity duration-200 ${
                  isDark ? 'bg-white' : 'bg-[#0D0F10]'
                } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`w-full h-[1.5px] transition-transform duration-300 ${
                  isDark ? 'bg-white' : 'bg-[#0D0F10]'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#FFFDF7] transition-all duration-400 ease-in-out md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[11px] tracking-widestLg uppercase text-[#0D0F10]/40 font-medium">
            Navigation
          </p>
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-normal text-[#0D0F10] hover:text-[#AC4526] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#0D0F10]/[0.08] pt-6 flex flex-col gap-4">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 bg-[#0D0F10] text-[#FFFDF7] text-xs uppercase tracking-widestLg font-medium rounded-sm"
          >
            Start a Project
          </a>
          <div className="flex items-center justify-between text-xs text-[#0D0F10]/60 pt-2">
            <a href="tel:+918302909191" className="hover:text-[#0D0F10]">
              +91 8302909191
            </a>
            <span>Jaipur, RJ</span>
          </div>
        </div>
      </div>
    </>
  );
}
