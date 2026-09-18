import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/realEstateData';

interface PropertyCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="property-categories-section" className="py-20 sm:py-28 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C79A3B]" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                EXPLORE BY CATEGORY
              </span>
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Curated Property Portfolios
            </h2>
          </div>
          <p className="text-sm text-[#8E8A83] max-w-md font-light">
            Discover tailored real estate sectors across residential communities, corporate centers, retail corridors, and investment land.
          </p>
        </div>

        {/* Editorial Bento / Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES_DATA.map((cat, idx) => {
            // Give first and fourth tile a slightly wider or taller presence in the layout
            const isSpanned = idx === 0 || idx === 3;

            return (
              <div
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`group relative overflow-hidden rounded-sm cursor-pointer border border-[#2B2B2B] hover:border-[#C79A3B] transition-all duration-500 min-h-[260px] sm:min-h-[300px] flex flex-col justify-end p-6 ${
                  isSpanned ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Layered dark gradients for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 bg-[#C79A3B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C79A3B]">
                      {cat.count}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#111111]/80 backdrop-blur-sm border border-[#C79A3B]/40 flex items-center justify-center text-[#C79A3B] group-hover:bg-[#C79A3B] group-hover:text-[#111111] transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="font-display-luxury text-2xl font-semibold text-white group-hover:text-[#D7B56D] transition-colors mb-1">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[#AAA7A0] line-clamp-1 font-light opacity-90">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
