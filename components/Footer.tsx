import React from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Websites',
    'Google Business',
    'SEO',
    'Social Media',
    'Digital Growth',
  ];

  return (
    <footer className="bg-[#08090A] text-[#FFFDF7] pt-20 pb-14 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/[0.08]">
          {/* Brand info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="#hero" className="mb-6 focus:outline-none" aria-label="ONLINEAJAO Home">
              <BrandLogo variant="reverse" height={34} />
            </Link>
            <p className="text-sm text-[#FFFDF7]/65 font-light leading-relaxed max-w-sm mb-6">
              Digital experiences for growing businesses. High-performance websites, Google presence, and digital growth systems.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#CABBA8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
              <span>Jaipur, Rajasthan · Available worldwide</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-widestLg uppercase text-[#CABBA8] font-medium mb-6">
              Navigation
            </p>
            <ul className="space-y-3.5 text-xs tracking-wider uppercase font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#FFFDF7]/70 hover:text-[#FFFDF7] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-widestLg uppercase text-[#CABBA8] font-medium mb-6">
              Services
            </p>
            <ul className="space-y-3.5 text-xs tracking-wider uppercase font-medium">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[#FFFDF7]/70 hover:text-[#FFFDF7] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Founders Contact */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-widestLg uppercase text-[#CABBA8] font-medium mb-6">
              Contact
            </p>
            <div className="space-y-4 text-xs">
              <div>
                <p className="text-[10px] tracking-widestLg uppercase text-[#FFFDF7]/40 mb-1">
                  Deepanshu
                </p>
                <a
                  href="tel:+918302909191"
                  className="font-mono text-[#FFFDF7]/80 hover:text-[#FFFDF7] transition-colors"
                >
                  8302909191
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-widestLg uppercase text-[#FFFDF7]/40 mb-1">
                  Nitin
                </p>
                <a
                  href="tel:+918302161688"
                  className="font-mono text-[#FFFDF7]/80 hover:text-[#FFFDF7] transition-colors"
                >
                  8302161688
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDF7]/45 font-light">
          <p>© 2026 ONLINEAJAO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Minimal. Restrained. Built for growth.</span>
            <a
              href="#hero"
              className="hover:text-[#FFFDF7] transition-colors inline-flex items-center gap-1"
            >
              <span>Back to top</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
