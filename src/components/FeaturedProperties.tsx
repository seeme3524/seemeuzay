import React from 'react';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Eye } from 'lucide-react';
import { Property } from '../types';
import { SAMPLE_PROPERTIES } from '../data/realEstateData';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  onViewAllProperties: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onSelectProperty,
  onViewAllProperties,
}) => {
  // Take first 6 sample properties
  const displayProperties = SAMPLE_PROPERTIES.slice(0, 6);

  return (
    <section id="featured-properties-section" className="py-20 sm:py-28 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C79A3B]" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                FEATURED PROPERTIES
              </span>
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Spaces Worth Discovering
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs text-[#8E8A83] uppercase tracking-wider">
              Sample Portfolio Listings
            </span>
            <button
              onClick={onViewAllProperties}
              className="group inline-flex items-center gap-2 px-5 py-2.5 border border-[#C79A3B] hover:bg-[#C79A3B] text-[#D7B56D] hover:text-[#111111] text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3-Column / 2-Column / 1-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop)}
              className="group cursor-pointer bg-[#181818] border border-[#2B2B2B] hover:border-[#C79A3B]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C79A3B]/10"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#141414]">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-[#111111]/30 opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-sm shadow-md ${
                      prop.statusBadge === 'FEATURED'
                        ? 'bg-[#C79A3B] text-[#111111]'
                        : prop.statusBadge === 'FOR SALE'
                        ? 'bg-[#111111]/90 text-[#EEECE7] border border-[#C79A3B]/50'
                        : 'bg-[#222222]/90 text-[#EEECE7] border border-white/20'
                    }`}
                  >
                    {prop.statusBadge}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-sm bg-[#111111]/80 text-[#AAA7A0] backdrop-blur-xs">
                    {prop.category}
                  </span>
                </div>

                {/* Floating Price Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-[#111111]/90 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-[#C79A3B]/40">
                    <span className="font-display-luxury text-base sm:text-lg font-bold text-[#D7B56D]">
                      {prop.priceFormatted}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[#C79A3B]/40 flex items-center justify-center text-[#C79A3B] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-[#8E8A83] mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C79A3B]" />
                    <span>{prop.location}, {prop.city}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display-luxury text-xl font-semibold text-white mb-3 group-hover:text-[#D7B56D] transition-colors leading-snug">
                    {prop.title}
                  </h3>

                  {/* Short excerpt */}
                  <p className="text-xs text-[#8E8A83] line-clamp-2 mb-5 font-light leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Specs Row */}
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#AAA7A0]">
                  <div className="flex items-center gap-4">
                    {prop.bedrooms && (
                      <div className="flex items-center gap-1.5" title="Bedrooms">
                        <Bed className="w-4 h-4 text-[#C79A3B]" />
                        <span>{prop.bedrooms} Beds</span>
                      </div>
                    )}
                    {prop.bathrooms && (
                      <div className="flex items-center gap-1.5" title="Bathrooms">
                        <Bath className="w-4 h-4 text-[#C79A3B]" />
                        <span>{prop.bathrooms} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5" title="Area">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C79A3B]" />
                      <span>{prop.area}</span>
                    </div>
                  </div>

                  <div className="text-[#C79A3B] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice for Transparency */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#666666] max-w-2xl mx-auto">
            * Properties shown are illustrative sample inventory representing typical listings and categories available through Seeme Uzay Real Estate. Inquire directly for current available on-ground inventory.
          </p>
        </div>

      </div>
    </section>
  );
};
