import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchFilterPanel } from './components/SearchFilterPanel';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProperties } from './components/FeaturedProperties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PropertyCategories } from './components/PropertyCategories';
import { InvestmentSection } from './components/InvestmentSection';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConversionCta } from './components/ConversionCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PropertiesPage } from './components/PropertiesPage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { Property, PropertyFilterState, ServiceItem } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('General Consultation');
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  // Filter pass-through when navigating to properties view
  const [propertiesIntent, setPropertiesIntent] = useState<'buy' | 'rent' | 'all'>('all');
  const [propertiesCategory, setPropertiesCategory] = useState<string>('');

  const handleNavigate = (view: string, filterIntent?: 'buy' | 'rent') => {
    setCurrentView(view);
    if (filterIntent) {
      setPropertiesIntent(filterIntent);
    } else {
      setPropertiesIntent('all');
    }
    setPropertiesCategory('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchFromHero = (filters: Partial<PropertyFilterState>) => {
    if (filters.lookingFor && filters.lookingFor !== 'all') {
      setPropertiesIntent(filters.lookingFor as 'buy' | 'rent');
    } else {
      setPropertiesIntent('all');
    }

    if (filters.propertyType && filters.propertyType !== 'All') {
      setPropertiesCategory(filters.propertyType);
    }

    setCurrentView('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromGrid = (categoryName: string) => {
    setPropertiesCategory(categoryName);
    setPropertiesIntent('all');
    setCurrentView('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setConsultationTopic(`Service: ${service.title}`);
    setConsultationOpen(true);
  };

  const handleScrollToSearch = () => {
    const el = document.getElementById('search-panel-container');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#EEECE7] flex flex-col justify-between selection:bg-[#C79A3B] selection:text-[#111111]">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setConsultationTopic('General Consultation');
          setConsultationOpen(true);
        }}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* 1. Full-screen Hero */}
            <Hero
              onExploreProperties={() => handleNavigate('properties')}
              onTalkToExpert={() => {
                setConsultationTopic('Expert Property Consultation');
                setConsultationOpen(true);
              }}
              onScrollToSearch={handleScrollToSearch}
            />

            {/* 2. Overlapping Property Search Panel */}
            <SearchFilterPanel
              onSearch={handleSearchFromHero}
              onOpenConsultationForSell={() => {
                setConsultationTopic('Property Selling / Listing');
                setConsultationOpen(true);
              }}
            />

            {/* 3. About / Company Introduction */}
            <AboutSection onDiscoverStory={() => handleNavigate('about')} />

            {/* 4. Services Section */}
            <ServicesSection onSelectService={handleSelectService} />

            {/* 5. Featured Properties Section */}
            <FeaturedProperties
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onViewAllProperties={() => handleNavigate('properties')}
            />

            {/* 6. Why Choose Seeme Uzay */}
            <WhyChooseUs />

            {/* 7. Property Categories */}
            <PropertyCategories onSelectCategory={handleSelectCategoryFromGrid} />

            {/* 8. Real Estate Investment Section */}
            <InvestmentSection
              onDiscussInvestment={() => {
                setConsultationTopic('Commercial Investment Opportunity');
                setConsultationOpen(true);
              }}
            />

            {/* 9. How It Works Timeline */}
            <HowItWorks />

            {/* 10. Testimonials */}
            <TestimonialsSection />

            {/* 11. Final Conversion CTA */}
            <ConversionCta
              onBookConsultation={() => {
                setConsultationTopic('General Consultation');
                setConsultationOpen(true);
              }}
            />

            {/* 12. Contact Section */}
            <ContactSection />
          </>
        )}

        {currentView === 'properties' && (
          <PropertiesPage
            initialIntent={propertiesIntent}
            initialCategory={propertiesCategory}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
          />
        )}

        {currentView === 'about' && (
          <AboutPage onContactClick={() => handleNavigate('contact')} />
        )}

        {currentView === 'services' && (
          <ServicesPage onSelectService={handleSelectService} />
        )}

        {currentView === 'contact' && (
          <div className="pt-24 bg-[#111111]">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        defaultTopic={consultationTopic}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ isOpen: false, type: null })}
      />
    </div>
  );
}
