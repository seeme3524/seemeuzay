import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/realEstateData';

interface ConversionCtaProps {
  onBookConsultation: () => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({ onBookConsultation }) => {
  return (
    <section id="conversion-cta-section" className="relative py-20 sm:py-28 bg-[#111111] border-t border-[#262626] overflow-hidden">
      {/* Background ambient gold gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(199,154,59,0.08),transparent)] pointer-events-none" />
      
      {/* Delicate gold framing */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="border border-[#C79A3B]/30 bg-[#161616]/90 p-10 sm:p-16 rounded-sm shadow-2xl relative">
          
          {/* Subtle architectural corner accents */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C79A3B]" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C79A3B]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C79A3B]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C79A3B]" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C79A3B]">
              START YOUR PROPERTY JOURNEY
            </span>
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
          </div>

          {/* Heading */}
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
            Your Next Property Decision <span className="italic text-gold-gradient font-serif-luxury">Starts Here.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#EEECE7]/85 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us what you're looking for and our team will help you take the next step.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-book-consultation-btn"
              onClick={onBookConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl hover:shadow-[#C79A3B]/20 cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="cta-whatsapp-btn"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#C79A3B]/50 hover:border-[#C79A3B] bg-[#141414] hover:bg-[#202020] text-[#EEECE7] hover:text-[#C79A3B] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#C79A3B]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-[#8E8A83]">
            Direct helpline: <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-[#C79A3B] hover:underline font-semibold">{COMPANY_DETAILS.phone}</a>
          </div>

        </div>
      </div>
    </section>
  );
};
