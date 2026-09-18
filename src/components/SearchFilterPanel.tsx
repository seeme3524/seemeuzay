import React, { useState } from 'react';
import { Search, MapPin, Building2, Wallet, ArrowRight } from 'lucide-react';
import { PropertyFilterState } from '../types';

interface SearchFilterPanelProps {
  onSearch: (filters: Partial<PropertyFilterState>) => void;
  onOpenConsultationForSell?: () => void;
}

export const SearchFilterPanel: React.FC<SearchFilterPanelProps> = ({
  onSearch,
  onOpenConsultationForSell,
}) => {
  const [lookingFor, setLookingFor] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [propertyType, setPropertyType] = useState<string>('All');
  const [location, setLocation] = useState<string>('');
  const [budgetRange, setBudgetRange] = useState<string>('All');

  const propertyTypes = [
    'All',
    'Residential',
    'Commercial',
    'Apartment',
    'House',
    'Plot',
    'Office',
    'Shop',
  ];

  const budgetOptionsBuy = [
    'All Budgets',
    'Under PKR 5 Crore',
    'PKR 5 - 10 Crore',
    'PKR 10 - 20 Crore',
    'Above PKR 20 Crore',
  ];

  const budgetOptionsRent = [
    'All Budgets',
    'Under PKR 2 Lakh',
    'PKR 2 - 5 Lakh',
    'PKR 5 - 10 Lakh',
    'Above PKR 10 Lakh',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lookingFor === 'sell') {
      if (onOpenConsultationForSell) {
        onOpenConsultationForSell();
      }
      return;
    }

    onSearch({
      lookingFor: lookingFor,
      propertyType: propertyType === 'All' ? '' : propertyType,
      location: location.trim(),
      budgetRange: budgetRange === 'All Budgets' ? '' : budgetRange,
    });
  };

  return (
    <div id="search-panel-container" className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 mb-16 sm:mb-24">
      <div className="bg-[#1C1C1C] rounded-sm border border-[#C79A3B]/30 shadow-2xl overflow-hidden p-6 sm:p-8 backdrop-blur-md">
        
        {/* Looking For Switcher Tabs (Buy / Rent / Sell) */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#2C2C2C] pb-5 mb-6 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-widest text-[#8E8A83] font-semibold mr-2 hidden sm:inline">
              Looking For:
            </span>
            {(['buy', 'rent', 'sell'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setLookingFor(tab)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  lookingFor === tab
                    ? 'bg-[#C79A3B] text-[#111111] shadow-md'
                    : 'bg-[#141414] text-[#8E8A83] hover:text-[#EEECE7] hover:bg-[#202020]'
                }`}
              >
                {tab === 'buy' ? 'Buy Property' : tab === 'rent' ? 'Rent Property' : 'Sell Property'}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#C79A3B] font-medium tracking-wide">
            {lookingFor === 'sell'
              ? 'Connect directly to list your property with verified buyers'
              : 'Explore verified properties across Islamabad & premium sectors'}
          </div>
        </div>

        {/* Filter Form */}
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
          {/* Property Type Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="search-prop-type" className="flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-[#D7B56D]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Property Type</span>
            </label>
            <div className="relative">
              <select
                id="search-prop-type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#141414] text-[#EEECE7]">
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8E8A83]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Location Input */}
          <div className="space-y-1.5">
            <label htmlFor="search-location" className="flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-[#D7B56D]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location</span>
            </label>
            <div className="relative">
              <input
                id="search-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. F-7, Blue Area, Gulberg"
                className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors placeholder-[#666666]"
              />
            </div>
          </div>

          {/* Budget Range */}
          <div className="space-y-1.5">
            <label htmlFor="search-budget" className="flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-[#D7B56D]">
              <Wallet className="w-3.5 h-3.5" />
              <span>Budget Range</span>
            </label>
            <div className="relative">
              <select
                id="search-budget"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-[#EEECE7] text-sm py-3 px-3.5 rounded-sm focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {(lookingFor === 'rent' ? budgetOptionsRent : budgetOptionsBuy).map((opt) => (
                  <option key={opt} value={opt} className="bg-[#141414] text-[#EEECE7]">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8E8A83]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div>
            <button
              id="find-property-submit-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-lg hover:shadow-[#C79A3B]/20 cursor-pointer"
            >
              {lookingFor === 'sell' ? (
                <>
                  <span>List With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Find Property</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
