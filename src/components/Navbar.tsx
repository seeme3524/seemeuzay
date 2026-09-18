import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageSquare, Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/realEstateData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, filterIntent?: 'buy' | 'rent') => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, intent?: 'buy' | 'rent') => {
    onNavigate(view, intent);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#C79A3B]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#111111]/90 via-[#111111]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none group text-left cursor-pointer"
            aria-label="Seeme Uzay Real Estate Home"
          >
            <Logo size="md" showTagline={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors relative cursor-pointer ${
                currentView === 'home' ? 'text-[#C79A3B]' : 'text-[#EEECE7] hover:text-[#C79A3B]'
              }`}
            >
              Home
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C79A3B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('properties')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors relative cursor-pointer ${
                currentView === 'properties' ? 'text-[#C79A3B]' : 'text-[#EEECE7] hover:text-[#C79A3B]'
              }`}
            >
              Properties
              {currentView === 'properties' && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C79A3B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('properties', 'buy')}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] transition-colors cursor-pointer"
            >
              Buy
            </button>

            <button
              onClick={() => handleNavClick('properties', 'rent')}
              className="px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] transition-colors cursor-pointer"
            >
              Rent
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors relative cursor-pointer ${
                currentView === 'services' ? 'text-[#C79A3B]' : 'text-[#EEECE7] hover:text-[#C79A3B]'
              }`}
            >
              Services
              {currentView === 'services' && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C79A3B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors relative cursor-pointer ${
                currentView === 'about' ? 'text-[#C79A3B]' : 'text-[#EEECE7] hover:text-[#C79A3B]'
              }`}
            >
              About Us
              {currentView === 'about' && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C79A3B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors relative cursor-pointer ${
                currentView === 'contact' ? 'text-[#C79A3B]' : 'text-[#EEECE7] hover:text-[#C79A3B]'
              }`}
            >
              Contact
              {currentView === 'contact' && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C79A3B]" />
              )}
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            {/* WhatsApp direct link */}
            <a
              id="header-whatsapp-btn"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-sm border border-[#C79A3B]/40 hover:border-[#C79A3B] bg-[#1C1C1C]/70 text-xs font-semibold uppercase tracking-wider text-[#EEECE7] hover:text-[#C79A3B] transition-all hover:bg-[#1C1C1C]"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#C79A3B]" />
              <span>WhatsApp Us</span>
            </a>

            {/* Primary Consultation CTA */}
            <button
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] text-xs xl:text-sm font-bold tracking-wider uppercase rounded-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#C79A3B] hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EEECE7] hover:text-[#C79A3B] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#C79A3B]/30 px-4 pt-4 pb-8 space-y-3 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-2 border-b border-[#262626] pb-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2.5 px-3 text-sm font-semibold tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] hover:bg-[#1A1A1A] rounded"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('properties')}
              className="text-left py-2.5 px-3 text-sm font-semibold tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] hover:bg-[#1A1A1A] rounded"
            >
              All Properties
            </button>
            <button
              onClick={() => handleNavClick('properties', 'buy')}
              className="text-left py-2.5 px-3 text-sm font-semibold tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] hover:bg-[#1A1A1A] rounded"
            >
              Buy Property
            </button>
            <button
              onClick={() => handleNavClick('properties', 'rent')}
              className="text-left py-2.5 px-3 text-sm font-semibold tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] hover:bg-[#1A1A1A] rounded"
            >
              Rent Property
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2.5 px-3 text-sm font-semibold tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] hover:bg-[#1A1A1A] rounded"
            >
              Our Services
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2.5 px-3 text-sm font-semibold tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] hover:bg-[#1A1A1A] rounded"
            >
              About Seeme Uzay
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2.5 px-3 text-sm font-semibold tracking-wider uppercase text-[#EEECE7] hover:text-[#C79A3B] hover:bg-[#1A1A1A] rounded"
            >
              Contact
            </button>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center py-3 bg-[#C79A3B] text-[#111111] font-bold text-sm uppercase tracking-wider rounded-sm"
            >
              Book a Consultation
            </button>

            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 border border-[#C79A3B]/40 bg-[#1C1C1C] text-sm font-semibold text-[#EEECE7] rounded-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#C79A3B]" />
              <span>WhatsApp: {COMPANY_DETAILS.phone}</span>
            </a>

            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs text-[#8E8A83] hover:text-[#EEECE7]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C79A3B]" />
              <span>Call Direct: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
