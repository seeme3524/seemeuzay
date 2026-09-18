import React from 'react';
import { Shield, Eye, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES, COMPANY_DETAILS, WHY_CHOOSE_POINTS } from '../data/realEstateData';

interface AboutPageProps {
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onContactClick }) => {
  return (
    <div className="pt-32 pb-24 bg-[#111111] text-[#EEECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
              ABOUT SEEME UZAY REAL ESTATE
            </span>
          </div>
          <h1 className="font-display-luxury text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
            Real Estate With <span className="italic text-gold-gradient font-serif-luxury">Vision,</span> Trust & Purpose.
          </h1>
          <p className="text-base sm:text-lg text-[#AAA7A0] font-light leading-relaxed">
            Seeme Uzay Real Estate is built around a simple belief: finding, selling, or investing in property should feel clear, professional, and secure. We combine market understanding, personal guidance, and a client-first approach to help people make confident real-estate decisions.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#C79A3B]/30 shadow-2xl">
              <img
                src={ASSET_IMAGES.villa}
                alt="Seeme Uzay Philosophy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 border border-[#C79A3B]/20 pointer-events-none hidden sm:block" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display-luxury text-2xl sm:text-3xl font-semibold text-white">
              Our Foundational Perspective
            </h2>
            <p className="text-sm sm:text-base text-[#8E8A83] font-light leading-relaxed">
              In an evolving Pakistani property landscape, transactions often suffer from fragmented information, high speculation, and cumbersome paperwork. Seeme Uzay Real Estate was formed to introduce structure, rigorous diligence, and transparent client advisory into every engagement.
            </p>
            <p className="text-sm sm:text-base text-[#8E8A83] font-light leading-relaxed">
              We focus on prime urban sectors, sustainable commercial developments, and vetted private housing projects. Whether you are buying your family's lifelong home or acquiring commercial rental assets, we stand beside you at every step.
            </p>

            <div className="pt-4 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#161616] border border-[#2B2B2B] rounded-sm">
                <div className="text-[#C79A3B] font-bold text-xs uppercase tracking-wider mb-1">Our Mission</div>
                <div className="text-xs text-[#AAA7A0]">
                  To provide disciplined, verified, and client-aligned property transactions without artificial pressure.
                </div>
              </div>
              <div className="p-4 bg-[#161616] border border-[#2B2B2B] rounded-sm">
                <div className="text-[#C79A3B] font-bold text-xs uppercase tracking-wider mb-1">Our Vision</div>
                <div className="text-xs text-[#AAA7A0]">
                  To be Pakistan's most trusted partner for residential stability and commercial capital growth.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B] mb-2">
              CORE PRINCIPLES
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl font-semibold text-white">
              The Standards That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_POINTS.map((pt) => (
              <div key={pt.number} className="p-6 bg-[#181818] border border-[#2B2B2B] rounded-sm">
                <div className="font-serif-luxury text-3xl font-bold text-[#C79A3B] mb-3">{pt.number}</div>
                <h3 className="font-display-luxury text-lg font-semibold text-white mb-2">{pt.title}</h3>
                <p className="text-xs text-[#8E8A83] leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-10 sm:p-14 bg-[#161616] border border-[#C79A3B]/30 rounded-sm text-center max-w-4xl mx-auto">
          <h3 className="font-display-luxury text-2xl sm:text-3xl font-semibold text-white mb-4">
            Have Questions About the Market?
          </h3>
          <p className="text-sm text-[#8E8A83] max-w-lg mx-auto mb-8">
            Speak directly with our consultants to evaluate your options with complete clarity.
          </p>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C79A3B] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#b88b2e] transition-colors cursor-pointer"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
