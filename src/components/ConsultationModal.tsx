import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/realEstateData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'General Consultation',
}) => {
  const [topic, setTopic] = useState(defaultTopic);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#161616] border border-[#C79A3B]/40 rounded-sm shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#202020] hover:bg-[#333333] text-[#AAA7A0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#141414] border border-[#C79A3B] text-[#C79A3B] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display-luxury text-2xl font-semibold text-white">
              Consultation Scheduled
            </h3>
            <p className="text-xs sm:text-sm text-[#8E8A83] leading-relaxed">
              Thank you {fullName}. A Seeme Uzay property advisor will reach out to you via phone or WhatsApp at <strong>{phone}</strong> to confirm your meeting slot.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 bg-[#C79A3B] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp Now</span>
              </a>
              <button
                onClick={onClose}
                className="py-2.5 text-xs text-[#8E8A83] hover:text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[1px] bg-[#C79A3B]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                SEEME UZAY ADVISORY
              </span>
            </div>

            <h3 className="font-display-luxury text-2xl font-semibold text-white mb-2">
              Book a Consultation
            </h3>

            <p className="text-xs text-[#8E8A83] mb-6">
              Connect directly with our senior advisors for private, market-backed real estate guidance.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-[#AAA7A0]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-[#AAA7A0]">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 308 4531593"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-[#AAA7A0]">
                  Consultation Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none cursor-pointer"
                >
                  <option value="Property Buying">Property Buying Advisory</option>
                  <option value="Property Selling">List & Sell My Property</option>
                  <option value="Commercial Investment">Commercial / High-Yield Investment</option>
                  <option value="Rental & Leasing">Rental & Leasing Guidance</option>
                  <option value="Overseas Client Advisory">Overseas Client Property Services</option>
                  <option value="General Consultation">General Property Consultation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-[#AAA7A0]">
                  Preferred Time or Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific sectors, budget preferences or timing..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm Consultation Request</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#8E8A83]">
              <span>Direct Hotline:</span>
              <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-[#C79A3B] hover:underline font-semibold">
                {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
