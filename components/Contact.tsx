'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Website Design & Development',
  ]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Website Design & Development',
    'Google Business Profile',
    'SEO & Search Visibility',
    'Social Media Presence',
    'Full Digital Growth System',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate pre-filled WhatsApp link with the entered form details
  const createWhatsAppLink = (founderPhone: string) => {
    const text = `Hi, I would like to discuss a project with ONLINEAJAO.
Name: ${formData.name || 'Not specified'}
Phone: ${formData.phone || 'Not specified'}
Business: ${formData.business || 'Not specified'}
Services: ${selectedServices.join(', ')}
Note: ${formData.message || 'Ready to start'}`;

    return `https://wa.me/91${founderPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-[#FFFDF7] border-t border-[#0D0F10]/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
            <span className="text-[11px] sm:text-xs tracking-widestLg uppercase text-[#0D0F10]/60 font-medium">
              INITIATE A CONVERSATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.035em] text-[#0D0F10] leading-[1.08] mb-4">
            Let&apos;s build something useful.
          </h2>
          <p className="text-base sm:text-lg text-[#0D0F10]/65 font-normal max-w-xl">
            Tell us what you&apos;re building. We&apos;ll figure out the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F5F1E7]/50 border border-[#0D0F10]/[0.08] rounded-md p-6 sm:p-8 space-y-8">
              <div>
                <p className="text-[11px] tracking-widestLg uppercase text-[#0D0F10]/50 font-medium mb-2">
                  Direct Founder Contact
                </p>
                <p className="text-sm text-[#0D0F10]/80">
                  Call or message either founder directly for a straightforward conversation.
                </p>
              </div>

              {/* Founder 1 */}
              <div className="border-t border-[#0D0F10]/[0.08] pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-normal text-[#0D0F10]">Deepanshu Jangid</h4>
                  <span className="text-[11px] uppercase tracking-wider text-[#AC4526] font-medium">
                    Growth Partner
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="tel:+918302909191"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#0D0F10] hover:text-[#AC4526] transition-colors py-1 px-3 bg-[#FFFDF7] rounded-xs border border-[#0D0F10]/[0.08]"
                  >
                    <span>📞 8302909191</span>
                  </a>
                  <a
                    href="https://wa.me/918302909191?text=Hi%20Deepanshu%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20ONLINEAJAO."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0D0F10] hover:text-[#AC4526] transition-colors py-1 px-3 bg-[#FFFDF7] rounded-xs border border-[#0D0F10]/[0.08]"
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="border-t border-[#0D0F10]/[0.08] pt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-normal text-[#0D0F10]">Nitin Kumar</h4>
                  <span className="text-[11px] uppercase tracking-wider text-[#AC4526] font-medium">
                    Strategy Partner
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="tel:+918302161688"
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#0D0F10] hover:text-[#AC4526] transition-colors py-1 px-3 bg-[#FFFDF7] rounded-xs border border-[#0D0F10]/[0.08]"
                  >
                    <span>📞 8302161688</span>
                  </a>
                  <a
                    href="https://wa.me/918302161688?text=Hi%20Nitin%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20ONLINEAJAO."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0D0F10] hover:text-[#AC4526] transition-colors py-1 px-3 bg-[#FFFDF7] rounded-xs border border-[#0D0F10]/[0.08]"
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="border-t border-[#0D0F10]/[0.08] pt-6 text-xs text-[#0D0F10]/60 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
                  <span>Response guaranteed within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AC4526]" />
                  <span>Based in Jaipur · Working with ambitious brands globally</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#F5F1E7]/40 border border-[#0D0F10]/[0.10] rounded-md p-8 sm:p-12 text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-[#AC4526] text-[#FFFDF7] flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h3 className="text-2xl font-normal text-[#0D0F10]">Thank you.</h3>
                <p className="text-sm sm:text-base text-[#0D0F10]/70 max-w-md mx-auto">
                  We have received your details. Deepanshu or Nitin will connect with you within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={createWhatsAppLink('8302909191')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0F10] text-[#FFFDF7] text-xs uppercase tracking-widestLg font-medium rounded-sm hover:bg-[#08090A]"
                  >
                    Open on WhatsApp Now →
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0D0F10]/60 hover:text-[#0D0F10] underline"
                  >
                    Submit another note
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#FFFDF7] border border-[#0D0F10]/[0.10] rounded-md p-6 sm:p-10 shadow-card space-y-8"
              >
                {/* Services interest selector */}
                <div>
                  <label className="block text-xs uppercase tracking-widestLg text-[#0D0F10]/70 font-medium mb-3">
                    Services You Need
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`text-xs py-2 px-3.5 rounded-xs transition-all duration-200 border text-left ${
                            isSelected
                              ? 'bg-[#0D0F10] text-[#FFFDF7] border-[#0D0F10]'
                              : 'bg-[#F5F1E7]/50 text-[#0D0F10]/75 border-[#0D0F10]/10 hover:border-[#0D0F10]/30'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs uppercase tracking-widestLg text-[#0D0F10]/70 font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F1E7]/40 border border-[#0D0F10]/[0.10] rounded-xs text-sm text-[#0D0F10] placeholder-[#0D0F10]/30 focus:outline-none focus:border-[#0D0F10] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block text-xs uppercase tracking-widestLg text-[#0D0F10]/70 font-medium mb-2"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98290 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5F1E7]/40 border border-[#0D0F10]/[0.10] rounded-xs text-sm text-[#0D0F10] placeholder-[#0D0F10]/30 focus:outline-none focus:border-[#0D0F10] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-business"
                    className="block text-xs uppercase tracking-widestLg text-[#0D0F10]/70 font-medium mb-2"
                  >
                    Business Name or Website
                  </label>
                  <input
                    id="client-business"
                    type="text"
                    placeholder="e.g. Studio Archetype"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1E7]/40 border border-[#0D0F10]/[0.10] rounded-xs text-sm text-[#0D0F10] placeholder-[#0D0F10]/30 focus:outline-none focus:border-[#0D0F10] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="client-message"
                    className="block text-xs uppercase tracking-widestLg text-[#0D0F10]/70 font-medium mb-2"
                  >
                    Project Details & Goals
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    placeholder="Tell us what you're building, your current digital presence, and your timeline."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1E7]/40 border border-[#0D0F10]/[0.10] rounded-xs text-sm text-[#0D0F10] placeholder-[#0D0F10]/30 focus:outline-none focus:border-[#0D0F10] transition-colors resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#0D0F10] text-[#FFFDF7] text-xs uppercase tracking-widestLg font-medium rounded-sm transition-all duration-300 hover:bg-[#08090A] hover:shadow-floating hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Submit Project Inquiry
                  </button>

                  <a
                    href={createWhatsAppLink('8302909191')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-[#0D0F10] border border-[#0D0F10]/15 text-xs uppercase tracking-widestLg font-medium rounded-sm hover:bg-[#0D0F10]/[0.03] transition-colors"
                  >
                    <span>Instant WhatsApp →</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
