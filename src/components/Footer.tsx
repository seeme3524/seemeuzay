import React from 'react';
import { Logo } from './Logo';
import { Phone, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST, CATEGORIES_DATA } from '../data/realEstateData';

interface FooterProps {
  onNavigate: (view: string, filterIntent?: 'buy' | 'rent') => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0C0C0C] text-[#EEECE7] border-t border-[#222222] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#222222]">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-left cursor-pointer focus:outline-none"
              aria-label="Back to top"
            >
              <Logo size="lg" showTagline={true} />
            </button>

            <p className="text-xs sm:text-sm text-[#8E8A83] leading-relaxed max-w-sm font-light">
              Seeme Uzay Real Estate provides trusted real-estate guidance, verified property transactions, and strategic advisory across residential, commercial, and investment developments.
            </p>

            <div className="pt-2">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#C79A3B]/40 hover:border-[#C79A3B] bg-[#161616] text-xs font-semibold uppercase tracking-wider text-[#D7B56D] hover:text-white rounded-sm transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C79A3B]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAA7A0]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="hover:text-[#C79A3B] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('properties');
                    scrollToTop();
                  }}
                  className="hover:text-[#C79A3B] transition-colors cursor-pointer"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('properties', 'buy');
                    scrollToTop();
                  }}
                  className="hover:text-[#C79A3B] transition-colors cursor-pointer"
                >
                  Buy Property
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('properties', 'rent');
                    scrollToTop();
                  }}
                  className="hover:text-[#C79A3B] transition-colors cursor-pointer"
                >
                  Rent Property
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    scrollToTop();
                  }}
                  className="hover:text-[#C79A3B] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="hover:text-[#C79A3B] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="hover:text-[#C79A3B] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C79A3B]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAA7A0]">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      scrollToTop();
                    }}
                    className="hover:text-[#C79A3B] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C79A3B]">
              Contact Details
            </h4>
            
            <div className="space-y-3 text-xs text-[#AAA7A0]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C79A3B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase text-[#666666]">Phone / Call</div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="font-medium text-[#EEECE7] hover:text-[#C79A3B] transition-colors"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C79A3B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase text-[#666666]">WhatsApp Support</div>
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#EEECE7] hover:text-[#C79A3B] transition-colors"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#C79A3B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase text-[#666666]">Website</div>
                  <a
                    href={COMPANY_DETAILS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#EEECE7] hover:text-[#C79A3B] transition-colors"
                  >
                    {COMPANY_DETAILS.websiteDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-[#666666]">
                Operating out of Islamabad, Pakistan.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77736C]">
          <div>
            © 2026 Seeme Uzay Real Estate. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#C79A3B] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#C79A3B] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="ml-4 hover:text-[#C79A3B] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
