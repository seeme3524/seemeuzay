import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/realEstateData';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works-section" className="py-20 sm:py-28 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
              HOW IT WORKS
            </span>
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            A Simpler Way to Move Forward
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8E8A83] font-light max-w-xl mx-auto">
            From initial requirement discovery to legal transfer and keys handover, here is our transparent four-stage process.
          </p>
        </div>

        {/* Timeline (Desktop: Horizontal with continuous gold line, Mobile: Vertical) */}
        <div className="relative">
          {/* Horizontal Golden Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-[#C79A3B]/20 via-[#C79A3B] to-[#C79A3B]/20 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                className="relative bg-[#161616] lg:bg-transparent p-6 lg:p-0 rounded-sm lg:rounded-none border border-[#2B2B2B] lg:border-none flex flex-col items-start"
              >
                {/* Step Node Marker with Gold Number */}
                <div className="flex items-center gap-4 mb-5 w-full">
                  <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border-2 border-[#C79A3B] flex items-center justify-center shadow-lg shadow-[#C79A3B]/10">
                    <span className="font-serif-luxury text-lg font-bold text-[#D7B56D]">
                      {stepItem.step}
                    </span>
                  </div>
                  <div className="lg:hidden text-xs uppercase tracking-widest text-[#C79A3B] font-semibold">
                    Stage {idx + 1} of 4
                  </div>
                </div>

                {/* Subtitle tag */}
                <div className="text-[11px] uppercase tracking-wider text-[#C79A3B] font-semibold mb-1">
                  {stepItem.subtitle}
                </div>

                {/* Heading */}
                <h3 className="font-display-luxury text-xl font-semibold text-white mb-3 leading-snug">
                  {stepItem.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8E8A83] leading-relaxed font-light">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
