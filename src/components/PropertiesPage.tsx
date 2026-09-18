import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, MapPin, Bed, Bath, Maximize2, ArrowRight, Eye, SlidersHorizontal, X } from 'lucide-react';
import { Property, PropertyFilterState } from '../types';
import { SAMPLE_PROPERTIES } from '../data/realEstateData';

interface PropertiesPageProps {
  initialIntent?: 'buy' | 'rent' | 'all';
  initialCategory?: string;
  onSelectProperty: (property: Property) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  initialIntent = 'all',
  initialCategory = '',
  onSelectProperty,
}) => {
  const [filters, setFilters] = useState<PropertyFilterState>({
    lookingFor: initialIntent,
    propertyType: initialCategory || 'All',
    location: '',
    budgetRange: 'All',
    bedrooms: 'All',
    searchQuery: '',
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const propertyTypes = [
    'All',
    'Residential',
    'Apartment',
    'House',
    'Commercial',
    'Office',
    'Shop',
    'Plot',
  ];

  const bedroomOptions = ['All', '1+', '2+', '3+', '4+', '5+'];

  const filteredProperties = useMemo(() => {
    return SAMPLE_PROPERTIES.filter((prop) => {
      // Intent filter (Buy / Rent)
      if (filters.lookingFor !== 'all' && prop.intent !== filters.lookingFor) {
        return false;
      }

      // Property type filter
      if (filters.propertyType !== 'All') {
        if (filters.propertyType === 'Residential') {
          if (prop.category !== 'House' && prop.category !== 'Apartment' && prop.category !== 'Residential') {
            return false;
          }
        } else if (filters.propertyType === 'Commercial') {
          if (prop.category !== 'Commercial' && prop.category !== 'Office' && prop.category !== 'Shop') {
            return false;
          }
        } else if (prop.category.toLowerCase() !== filters.propertyType.toLowerCase()) {
          return false;
        }
      }

      // Location filter
      if (filters.location) {
        const locMatch =
          prop.location.toLowerCase().includes(filters.location.toLowerCase()) ||
          prop.city.toLowerCase().includes(filters.location.toLowerCase());
        if (!locMatch) return false;
      }

      // Search Query filter
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchesQuery =
          prop.title.toLowerCase().includes(q) ||
          prop.location.toLowerCase().includes(q) ||
          prop.category.toLowerCase().includes(q) ||
          prop.description.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      // Bedrooms filter
      if (filters.bedrooms !== 'All') {
        const minBeds = parseInt(filters.bedrooms);
        if (!prop.bedrooms || prop.bedrooms < minBeds) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      lookingFor: 'all',
      propertyType: 'All',
      location: '',
      budgetRange: 'All',
      bedrooms: 'All',
      searchQuery: '',
    });
  };

  return (
    <div className="pt-32 pb-24 bg-[#111111] min-h-screen text-[#EEECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C79A3B]" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
              PROPERTY PORTFOLIO
            </span>
          </div>
          <h1 className="font-display-luxury text-3xl sm:text-5xl font-semibold text-white tracking-tight">
            Explore Properties
          </h1>
          <p className="mt-2 text-sm text-[#8E8A83] font-light max-w-xl">
            Browse our curated sample listings across Islamabad's prime sectors, commercial corridors, and executive addresses.
          </p>
        </div>

        {/* Top Control Bar: Buy / Rent Switcher & Search & Mobile Filter Toggle */}
        <div className="bg-[#181818] border border-[#2B2B2B] p-4 sm:p-5 rounded-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Buy / Rent / All Segmented Control */}
          <div className="flex items-center bg-[#111111] p-1 rounded-sm border border-[#333333] w-full md:w-auto">
            {(['all', 'buy', 'rent'] as const).map((intent) => (
              <button
                key={intent}
                onClick={() => setFilters({ ...filters, lookingFor: intent })}
                className={`flex-1 md:flex-none px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  filters.lookingFor === intent
                    ? 'bg-[#C79A3B] text-[#111111] shadow'
                    : 'text-[#8E8A83] hover:text-white'
                }`}
              >
                {intent === 'all' ? 'All Listings' : intent === 'buy' ? 'For Sale' : 'For Rent'}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              placeholder="Search by keyword, sector, type..."
              className="w-full bg-[#111111] border border-[#333333] focus:border-[#C79A3B] text-xs text-white py-2.5 pl-9 pr-4 rounded-sm focus:outline-none"
            />
            <Search className="w-4 h-4 text-[#8E8A83] absolute left-3 top-3 pointer-events-none" />
          </div>

          {/* Mobile Filter Drawer Button */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#202020] border border-[#333333] text-xs font-semibold uppercase text-[#C79A3B] rounded-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter Properties</span>
          </button>
        </div>

        {/* Desktop Filter Bar (Horizontally Laid Out) */}
        <div className="hidden md:flex flex-wrap items-center justify-between gap-4 p-4 bg-[#161616] border border-[#262626] rounded-sm mb-10">
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#8E8A83] font-semibold">Type:</span>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="bg-[#111111] border border-[#333333] focus:border-[#C79A3B] text-xs text-white py-2 px-3 rounded-sm cursor-pointer"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Bedrooms Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#8E8A83] font-semibold">Bedrooms:</span>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="bg-[#111111] border border-[#333333] focus:border-[#C79A3B] text-xs text-white py-2 px-3 rounded-sm cursor-pointer"
              >
                {bedroomOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Location Input */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#8E8A83] font-semibold">Sector:</span>
              <input
                type="text"
                placeholder="e.g. F-7, Blue Area"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="bg-[#111111] border border-[#333333] focus:border-[#C79A3B] text-xs text-white py-2 px-3 rounded-sm w-36"
              />
            </div>
          </div>

          {/* Reset Filters */}
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-[#8E8A83] hover:text-[#C79A3B] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#8E8A83]">
          <div>
            Showing <strong className="text-white">{filteredProperties.length}</strong> available properties
          </div>
          <div>
            {filters.lookingFor === 'buy' ? 'Purchasing inventory' : filters.lookingFor === 'rent' ? 'Rental inventory' : 'All inventory'}
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="py-20 text-center bg-[#161616] border border-[#2B2B2B] rounded-sm p-8">
            <h3 className="font-display-luxury text-xl font-semibold text-white mb-2">
              No matching properties found
            </h3>
            <p className="text-xs text-[#8E8A83] max-w-md mx-auto mb-6">
              We couldn't find any listings matching your specific filter criteria. Try resetting your filters or contacting us directly for off-market inventory.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#C79A3B] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                onClick={() => onSelectProperty(prop)}
                className="group cursor-pointer bg-[#181818] border border-[#2B2B2B] hover:border-[#C79A3B]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C79A3B]/10"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#141414]">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-[#111111]/30 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-sm shadow ${
                        prop.statusBadge === 'FEATURED'
                          ? 'bg-[#C79A3B] text-[#111111]'
                          : 'bg-[#111111]/90 text-[#EEECE7] border border-[#C79A3B]/40'
                      }`}
                    >
                      {prop.statusBadge}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-sm bg-[#111111]/80 text-[#AAA7A0]">
                      {prop.category}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-[#111111]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#C79A3B]/40">
                      <span className="font-display-luxury text-base font-bold text-[#D7B56D]">
                        {prop.priceFormatted}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[#C79A3B]/40 flex items-center justify-center text-[#C79A3B] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#8E8A83] mb-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#C79A3B]" />
                      <span>{prop.location}, {prop.city}</span>
                    </div>

                    <h3 className="font-display-luxury text-xl font-semibold text-white mb-2 group-hover:text-[#D7B56D] transition-colors leading-snug">
                      {prop.title}
                    </h3>

                    <p className="text-xs text-[#8E8A83] line-clamp-2 mb-5 font-light leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#AAA7A0]">
                    <div className="flex items-center gap-4">
                      {prop.bedrooms && (
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4 text-[#C79A3B]" />
                          <span>{prop.bedrooms} Beds</span>
                        </div>
                      )}
                      {prop.bathrooms && (
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4 text-[#C79A3B]" />
                          <span>{prop.bathrooms} Baths</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
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
        )}

      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xs bg-[#161616] h-full p-6 space-y-6 overflow-y-auto border-l border-[#2B2B2B]">
            <div className="flex items-center justify-between pb-4 border-b border-[#2C2C2C]">
              <h3 className="font-display-luxury text-lg font-bold text-white">Filter Listings</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-2 text-[#AAA7A0] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#C79A3B]">Property Type</label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="w-full bg-[#111111] border border-[#333333] text-xs text-white p-2.5 rounded-sm"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#C79A3B]">Bedrooms</label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full bg-[#111111] border border-[#333333] text-xs text-white p-2.5 rounded-sm"
              >
                {bedroomOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Sector */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-[#C79A3B]">Sector / Location</label>
              <input
                type="text"
                placeholder="e.g. F-7, Blue Area"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full bg-[#111111] border border-[#333333] text-xs text-white p-2.5 rounded-sm"
              />
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#C79A3B] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm"
              >
                Apply Filters
              </button>
              <button
                onClick={() => {
                  handleResetFilters();
                  setMobileFilterOpen(false);
                }}
                className="w-full py-2.5 border border-[#333333] text-xs uppercase text-[#AAA7A0] rounded-sm"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
