import React, { useState } from 'react';
import { Phone, Globe, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/realEstateData';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyInterest: 'Residential',
    requirement: 'Buy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone or WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    // Simulate professional client inquiry handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" className="py-20 sm:py-28 bg-[#161616] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#C79A3B]" />
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                Let's Talk Property
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#8E8A83] font-light leading-relaxed">
                Connect with our team to discuss your property vision, schedule a private consultation, or explore curated opportunities.
              </p>
            </div>

            {/* Verified Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone Channel */}
              <div className="p-5 rounded-sm bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#C79A3B]/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#141414] border border-[#C79A3B]/30 text-[#C79A3B] mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#8E8A83] font-semibold">
                    Direct Phone Support
                  </div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="font-display-luxury text-lg sm:text-xl font-bold text-white hover:text-[#C79A3B] transition-colors block mt-0.5"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <span className="text-xs text-[#666666]">Available during standard business hours</span>
                </div>
              </div>

              {/* WhatsApp Channel */}
              <div className="p-5 rounded-sm bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#C79A3B]/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#141414] border border-[#C79A3B]/30 text-[#C79A3B] mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#8E8A83] font-semibold">
                    Instant WhatsApp
                  </div>
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display-luxury text-lg sm:text-xl font-bold text-white hover:text-[#C79A3B] transition-colors block mt-0.5"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <span className="text-xs text-[#666666]">Click to start instant messaging</span>
                </div>
              </div>

              {/* Official Domain */}
              <div className="p-5 rounded-sm bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#C79A3B]/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#141414] border border-[#C79A3B]/30 text-[#C79A3B] mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#8E8A83] font-semibold">
                    Official Website
                  </div>
                  <a
                    href={COMPANY_DETAILS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display-luxury text-base sm:text-lg font-bold text-white hover:text-[#C79A3B] transition-colors block mt-0.5"
                  >
                    {COMPANY_DETAILS.websiteDisplay}
                  </a>
                  <span className="text-xs text-[#666666]">Official Web Portal</span>
                </div>
              </div>

            </div>

            {/* Note on Transparency */}
            <div className="p-4 bg-[#141414] border-l-2 border-[#C79A3B] text-xs text-[#8E8A83] leading-relaxed">
              We respect your privacy. All inquiries are handled with strict confidentiality by authorized property consultants.
            </div>

          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C1C1C] border border-[#2C2C2C] p-8 sm:p-10 rounded-sm shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#141414] border border-[#C79A3B] text-[#C79A3B] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display-luxury text-2xl font-semibold text-white">
                    Thank You For Reaching Out
                  </h3>
                  <p className="text-sm text-[#8E8A83] max-w-md mx-auto leading-relaxed">
                    Your property inquiry has been received. A Seeme Uzay property advisor will reach out to you via phone or WhatsApp at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={COMPANY_DETAILS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C79A3B] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          propertyInterest: 'Residential',
                          requirement: 'Buy',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 border border-[#333333] text-xs uppercase tracking-wider text-[#8E8A83] hover:text-white rounded-sm cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display-luxury text-xl font-semibold text-white mb-2">
                    Send a Property Inquiry
                  </h3>

                  {errorMsg && (
                    <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-sm text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-semibold tracking-wider text-[#AAA7A0]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Asad Malik"
                        className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-semibold tracking-wider text-[#AAA7A0]">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+92 300 1234567"
                        className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-semibold tracking-wider text-[#AAA7A0]">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Requirement Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-semibold tracking-wider text-[#AAA7A0]">
                        Requirement
                      </label>
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Buy">Looking to Buy</option>
                        <option value="Rent">Looking to Rent</option>
                        <option value="Sell">Want to Sell / List Property</option>
                        <option value="Investment">Investment Advisory</option>
                        <option value="Consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold tracking-wider text-[#AAA7A0]">
                      Property Category
                    </label>
                    <select
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                      className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Residential">Residential Villa / House</option>
                      <option value="Apartment">Modern Apartment / Penthouse</option>
                      <option value="Commercial">Commercial Building / Floor</option>
                      <option value="Office">Executive Office Space</option>
                      <option value="Plot">Residential or Commercial Plot</option>
                      <option value="Shop">Retail Shop</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase font-semibold tracking-wider text-[#AAA7A0]">
                      Message / Specific Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify preferred sectors, budget range, or any specific details..."
                      className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-lg hover:shadow-[#C79A3B]/20 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
