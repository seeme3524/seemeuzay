import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { ASSET_IMAGES, COMPANY_DETAILS } from '../data/realEstateData';

interface HeroProps {
  onExploreProperties: () => void;
  onTalkToExpert: () => void;
  onScrollToSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProperties,
  onTalkToExpert,
  onScrollToSearch,
}) => {
  return (
    <section id="hero-section" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#111111]">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="Seeme Uzay Real Estate Architecture"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Layered luxury dark overlays for pristine typographic contrast and architectural mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/60" />
        
        {/* Subtle architectural gold geometric vector grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(199,154,59,0.12),rgba(255,255,255,0))]" />
        
        {/* Fine gold architectural lines */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C79A3B]/15 to-transparent pointer-events-none hidden lg:block" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C79A3B]/10 to-transparent pointer-events-none hidden xl:block" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 lg:pt-48 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow / Brand Label */}
          <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 rounded-full border border-[#C79A3B]/30 bg-[#161616]/80 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D7B56D]">
              SEEME UZAY REAL ESTATE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display-luxury text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            Find a Place That Feels Like <span className="italic font-serif-luxury text-gold-gradient font-normal">Home.</span>
          </h1>

          {/* Supporting Line */}
          <p className="text-base sm:text-lg lg:text-xl text-[#EEECE7]/85 font-light leading-relaxed mb-10 max-w-2xl">
            Premium properties, trusted guidance, and smarter real-estate decisions — all in one place.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              id="hero-explore-btn"
              onClick={onExploreProperties}
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl hover:shadow-[#C79A3B]/20 cursor-pointer"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-expert-btn"
              onClick={onTalkToExpert}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-[#C79A3B]/50 hover:border-[#C79A3B] bg-[#161616]/70 hover:bg-[#1C1C1C] text-[#EEECE7] hover:text-[#C79A3B] font-semibold text-sm uppercase tracking-wider rounded-sm backdrop-blur-sm transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#C79A3B]" />
              <span>Talk to an Expert</span>
            </button>

            <a
              id="hero-whatsapp-link"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-semibold text-[#D7B56D] hover:text-white uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>

          {/* Quick value indicators */}
          <div className="pt-6 border-t border-[#C79A3B]/15 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="font-display-luxury text-xl sm:text-2xl font-semibold text-[#EEECE7]">Verified</div>
              <div className="text-[11px] uppercase tracking-wider text-[#8E8A83] mt-0.5">Clear Documentation</div>
            </div>
            <div>
              <div className="font-display-luxury text-xl sm:text-2xl font-semibold text-[#EEECE7]">Prime</div>
              <div className="text-[11px] uppercase tracking-wider text-[#8E8A83] mt-0.5">Sectors & Corridors</div>
            </div>
            <div>
              <div className="font-display-luxury text-xl sm:text-2xl font-semibold text-[#EEECE7]">Client-First</div>
              <div className="text-[11px] uppercase tracking-wider text-[#8E8A83] mt-0.5">Independent Guidance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Indicator: SCROLL TO EXPLORE */}
      <div className="relative z-10 pb-8 flex flex-col items-center justify-center">
        <button
          onClick={onScrollToSearch}
          className="group flex flex-col items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.25em] font-semibold uppercase text-[#8E8A83] hover:text-[#C79A3B] transition-colors cursor-pointer"
          aria-label="Scroll to search properties"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C79A3B] to-transparent animate-pulse" />
        </button>
      </div>
    </section>
  );
};
