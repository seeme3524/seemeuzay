import React from 'react';
import { WHY_CHOOSE_POINTS } from '../data/realEstateData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us-section" className="py-20 sm:py-28 bg-[#161616] border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
              THE SEEME UZAY ADVANTAGE
            </span>
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Why Clients Choose Seeme Uzay
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8E8A83] font-light max-w-xl mx-auto">
            A disciplined, client-centric methodology designed to make Pakistani real estate acquisition and leasing clear, predictable, and rewarding.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_POINTS.map((point) => (
            <div
              key={point.number}
              className="relative p-8 bg-[#1B1B1B] border border-[#2B2B2B] hover:border-[#C79A3B]/40 rounded-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              {/* Subtle top gold accent indicator */}
              <div className="w-10 h-[2px] bg-[#C79A3B] mb-6 group-hover:w-16 transition-all" />

              <div>
                {/* Gold Numbering */}
                <div className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#C79A3B]/40 group-hover:text-[#C79A3B] transition-colors mb-4">
                  {point.number}
                </div>

                {/* Title */}
                <h3 className="font-display-luxury text-xl font-semibold text-white mb-3 group-hover:text-[#D7B56D] transition-colors">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8E8A83] leading-relaxed font-light">
                  {point.description}
                </p>
              </div>

              {/* Bottom decorative subtle line */}
              <div className="mt-8 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#666666]">
                <span>Standard of Service</span>
                <span className="text-[#C79A3B]">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
