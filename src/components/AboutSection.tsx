import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Eye, Target } from 'lucide-react';
import { ASSET_IMAGES } from '../data/realEstateData';

interface AboutSectionProps {
  onDiscoverStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverStory }) => {
  return (
    <section id="about-intro-section" className="relative py-20 sm:py-28 bg-[#111111] overflow-hidden">
      {/* Decorative gold architectural geometric background lines */}
      <div className="absolute top-10 left-10 w-96 h-96 border border-[#C79A3B]/10 rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-80 h-80 border border-[#C79A3B]/10 pointer-events-none translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Imagery with Frame Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#C79A3B]/30 shadow-2xl">
                <img
                  src={ASSET_IMAGES.villa}
                  alt="Seeme Uzay Architecture & Quality"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141414]/90 backdrop-blur-md border border-[#C79A3B]/30 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-[#D7B56D] font-bold">Guiding Principles</div>
                      <div className="font-serif-luxury text-lg text-white font-medium">Clarity • Professionalism • Security</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#C79A3B]/40 flex items-center justify-center text-[#C79A3B]">
                      <Shield className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetrical gold frame offset element behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C79A3B]/30 rounded-sm -z-0 hidden sm:block pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(ellipse_at_center,rgba(199,154,59,0.15),transparent)] -z-0" />
          </div>

          {/* Right Column: Editorial Text Presentation */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#C79A3B]" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                ABOUT SEEME UZAY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.2]">
              Real Estate With <span className="italic text-gold-gradient font-serif-luxury">Vision,</span> Trust & Purpose.
            </h2>

            {/* Verbatim Core Statement from Requirements */}
            <p className="text-base sm:text-lg text-[#EEECE7]/90 font-light leading-relaxed">
              Seeme Uzay Real Estate is built around a simple belief: finding, selling, or investing in property should feel clear, professional, and secure. We combine market understanding, personal guidance, and a client-first approach to help people make confident real-estate decisions.
            </p>

            {/* Real Estate Principles (Truthful, non-fabricated) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#262626]">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-sm bg-[#1C1C1C] border border-[#C79A3B]/30 text-[#C79A3B] mt-0.5">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Curated Options</h4>
                  <p className="text-xs text-[#8E8A83] mt-0.5 leading-normal">
                    Carefully evaluated properties in established and developing prime sectors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-sm bg-[#1C1C1C] border border-[#C79A3B]/30 text-[#C79A3B] mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Client-Centric Advisory</h4>
                  <p className="text-xs text-[#8E8A83] mt-0.5 leading-normal">
                    Objective advice tailored to your long-term comfort and capital preservation.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                id="about-discover-story-btn"
                onClick={onDiscoverStory}
                className="group inline-flex items-center gap-3 px-6 py-3.5 border border-[#C79A3B] bg-transparent hover:bg-[#C79A3B] text-[#D7B56D] hover:text-[#111111] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
