import React from 'react';
import { Home, TrendingUp, Key, Briefcase, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/realEstateData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Key':
        return <Key className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <section id="services-section" className="py-20 sm:py-28 bg-[#161616] border-y border-[#262626] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C79A3B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C79A3B]" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                WHAT WE DO
              </span>
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Complete Real Estate Solutions
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#8E8A83] max-w-md font-light">
            End-to-end professional support tailored for residential clients, commercial enterprises, and discerning property investors.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#1C1C1C] border border-[#2C2C2C] hover:border-[#C79A3B]/60 p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C79A3B]/5 flex flex-col justify-between"
            >
              {/* Top Row: Icon & Gold Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-[#141414] border border-[#C79A3B]/30 flex items-center justify-center text-[#C79A3B] transition-colors group-hover:bg-[#C79A3B] group-hover:text-[#111111]">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-serif-luxury text-2xl font-bold text-[#444444] group-hover:text-[#C79A3B] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display-luxury text-xl font-semibold text-white mb-3 group-hover:text-[#D7B56D] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#8E8A83] leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-[#262626]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#AAA7A0] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]/70" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <button
                onClick={() => onSelectService(service)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C79A3B] hover:text-white transition-colors cursor-pointer pt-2 group/btn"
              >
                <span>Discuss {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-[#C79A3B]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
