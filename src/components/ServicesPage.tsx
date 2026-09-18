import React from 'react';
import { SERVICES_LIST } from '../data/realEstateData';
import { ServiceItem } from '../types';
import { Home, TrendingUp, Key, Briefcase, ShieldCheck, Users, ArrowRight, Check } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Key':
        return <Key className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#111111] text-[#EEECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
              SERVICES & EXPERTISE
            </span>
          </div>
          <h1 className="font-display-luxury text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
            Complete Real Estate <span className="italic text-gold-gradient font-serif-luxury">Solutions.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#AAA7A0] font-light leading-relaxed">
            From verified private residences to high-yield commercial floors, Seeme Uzay delivers structured guidance, documentation security, and tailored advisory across all property stages.
          </p>
        </div>

        {/* Full Services List with Detailed Breakdown */}
        <div className="space-y-12 mb-20">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="p-8 sm:p-12 bg-[#161616] border border-[#2B2B2B] hover:border-[#C79A3B]/50 rounded-sm transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#111111] border border-[#C79A3B]/40 flex items-center justify-center text-[#C79A3B]">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-serif-luxury text-3xl font-bold text-[#444444]">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-display-luxury text-2xl sm:text-3xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm sm:text-base text-[#8E8A83] font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {service.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#AAA7A0]">
                      <Check className="w-3.5 h-3.5 text-[#C79A3B] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
