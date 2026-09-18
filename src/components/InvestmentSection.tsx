import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';
import { ASSET_IMAGES } from '../data/realEstateData';

interface InvestmentSectionProps {
  onDiscussInvestment: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onDiscussInvestment }) => {
  return (
    <section id="investment-section" className="relative py-24 sm:py-32 bg-[#0E0E0E] overflow-hidden border-y border-[#262626]">
      {/* Background Architectural Skyline Image with Cinematic Treatment */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={ASSET_IMAGES.investment}
          alt="Architectural Investment Skyline"
          className="w-full h-full object-cover object-center filter contrast-125"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/85 to-[#0E0E0E]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-[#0E0E0E]" />
      </div>

      {/* Decorative Gold Geometric Lines */}
      <div className="absolute -top-12 right-12 w-64 h-64 border border-[#C79A3B]/20 rounded-full pointer-events-none" />
      <div className="absolute bottom-12 left-1/4 w-80 h-[1px] bg-gradient-to-r from-transparent via-[#C79A3B]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C79A3B]">
              REAL ESTATE INVESTMENT
            </span>
          </div>

          {/* Large Heading */}
          <h2 className="font-display-luxury text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
            Build Your Future <span className="italic text-gold-gradient font-serif-luxury">Through Property.</span>
          </h2>

          {/* Supporting Copy (Verbatim from specification) */}
          <p className="text-base sm:text-lg lg:text-xl text-[#EEECE7]/90 font-light leading-relaxed mb-10">
            Whether you're purchasing your first property or exploring your next investment, Seeme Uzay Real Estate helps you approach every opportunity with greater clarity and confidence.
          </p>

          {/* Investment Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-8 border-t border-[#C79A3B]/20">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-sm bg-[#1A1A1A] border border-[#C79A3B]/30 text-[#C79A3B]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Growth Corridors</h4>
                <p className="text-xs text-[#8E8A83] mt-1 leading-normal">
                  Targeted positioning in high-potential urban expansion zones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-sm bg-[#1A1A1A] border border-[#C79A3B]/30 text-[#C79A3B]">
                <PieChart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Yield Modeling</h4>
                <p className="text-xs text-[#8E8A83] mt-1 leading-normal">
                  Realistic rental yield calculations and tenant demand evaluation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-sm bg-[#1A1A1A] border border-[#C79A3B]/30 text-[#C79A3B]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Capital Security</h4>
                <p className="text-xs text-[#8E8A83] mt-1 leading-normal">
                  Rigorous title verification, clear paperwork, and safe transactions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="investment-discuss-btn"
              onClick={onDiscussInvestment}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl hover:shadow-[#C79A3B]/20 cursor-pointer"
            >
              <span>Discuss an Investment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
