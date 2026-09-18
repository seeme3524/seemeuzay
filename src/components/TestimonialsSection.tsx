import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/realEstateData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SAMPLE_TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SAMPLE_TESTIMONIALS.length) % SAMPLE_TESTIMONIALS.length);
  };

  const current = SAMPLE_TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials-section" className="py-20 sm:py-28 bg-[#161616] border-t border-[#262626] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
              CLIENT PERSPECTIVE
            </span>
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Client Experience & Trust
          </h2>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1F1F] border border-[#333333] text-[10px] uppercase tracking-wider text-[#8E8A83]">
            <CheckCircle className="w-3 h-3 text-[#C79A3B]" />
            <span>Sample Client Experiences</span>
          </div>
        </div>

        {/* Testimonial Presentation Card */}
        <div className="relative bg-[#1C1C1C] border border-[#2C2C2C] rounded-sm p-8 sm:p-14 shadow-2xl">
          {/* Large Classical Gold Quotation Icon */}
          <div className="absolute top-6 left-8 sm:left-12 opacity-20 text-[#C79A3B]">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Quote Text */}
            <blockquote className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-normal text-[#EEECE7] leading-relaxed italic mb-8">
              "{current.quote}"
            </blockquote>

            {/* Client Metadata */}
            <div className="space-y-1">
              <div className="font-display-luxury text-lg font-semibold text-white">
                {current.clientName}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#C79A3B] font-medium">
                {current.clientRole} • {current.location}
              </div>
              <div className="text-[11px] text-[#77736C]">
                Property Focus: {current.propertyType}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-[#262626]">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full border border-[#3A3A3A] hover:border-[#C79A3B] flex items-center justify-center text-[#8E8A83] hover:text-[#C79A3B] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {SAMPLE_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === idx ? 'w-6 bg-[#C79A3B]' : 'w-2 bg-[#3A3A3A]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-[#3A3A3A] hover:border-[#C79A3B] flex items-center justify-center text-[#8E8A83] hover:text-[#C79A3B] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
