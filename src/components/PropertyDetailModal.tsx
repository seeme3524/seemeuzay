import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, MessageSquare, Phone, Check, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { Property } from '../types';
import { COMPANY_DETAILS } from '../data/realEstateData';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.image];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const propertyWhatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneClean}?text=Hello%20Seeme%20Uzay%20Real%20Estate%2C%20I%20am%20interested%20in%20inquiring%20about%20"${encodeURIComponent(
    property.title
  )}"%20located%20at%20${encodeURIComponent(property.location)}%20(${encodeURIComponent(
    property.priceFormatted
  )}).`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#161616] border border-[#C79A3B]/40 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#2C2C2C] shrink-0">
          <div className="flex items-center gap-3">
            <span
              className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm ${
                property.statusBadge === 'FEATURED'
                  ? 'bg-[#C79A3B] text-[#111111]'
                  : 'bg-[#222222] text-[#EEECE7] border border-[#C79A3B]/40'
              }`}
            >
              {property.statusBadge}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#8E8A83]">
              {property.category} • {property.city}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#202020] hover:bg-[#333333] text-[#AAA7A0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close property details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top: Image Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full bg-[#111111] rounded-sm overflow-hidden border border-[#2B2B2B]">
              <img
                src={images[activeImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover object-center transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-[#111111]/80 backdrop-blur-sm px-3 py-1 rounded-sm text-xs text-[#EEECE7]">
                Image {activeImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-20 h-14 rounded-sm overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === i ? 'border-[#C79A3B]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title, Price & Location Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#2C2C2C]">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#8E8A83] mb-1.5">
                <MapPin className="w-4 h-4 text-[#C79A3B]" />
                <span>{property.location}, {property.city}</span>
              </div>
              <h2 className="font-display-luxury text-2xl sm:text-3xl font-semibold text-white">
                {property.title}
              </h2>
            </div>

            <div className="text-left md:text-right">
              <div className="text-[11px] uppercase tracking-wider text-[#8E8A83]">
                {property.intent === 'rent' ? 'Rental Rate' : 'Asking Price'}
              </div>
              <div className="font-display-luxury text-2xl sm:text-3xl font-bold text-[#D7B56D]">
                {property.priceFormatted}
              </div>
            </div>
          </div>

          {/* Key Specifications Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#1C1C1C] border border-[#2B2B2B] rounded-sm text-center">
            {property.bedrooms && (
              <div>
                <div className="text-xs text-[#8E8A83] uppercase flex items-center justify-center gap-1">
                  <Bed className="w-3.5 h-3.5 text-[#C79A3B]" />
                  <span>Bedrooms</span>
                </div>
                <div className="font-display-luxury text-lg font-bold text-white mt-0.5">
                  {property.bedrooms} Beds
                </div>
              </div>
            )}

            {property.bathrooms && (
              <div>
                <div className="text-xs text-[#8E8A83] uppercase flex items-center justify-center gap-1">
                  <Bath className="w-3.5 h-3.5 text-[#C79A3B]" />
                  <span>Bathrooms</span>
                </div>
                <div className="font-display-luxury text-lg font-bold text-white mt-0.5">
                  {property.bathrooms} Baths
                </div>
              </div>
            )}

            <div>
              <div className="text-xs text-[#8E8A83] uppercase flex items-center justify-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#C79A3B]" />
                <span>Covered Area</span>
              </div>
              <div className="font-display-luxury text-lg font-bold text-white mt-0.5">
                {property.area}
              </div>
            </div>

            <div>
              <div className="text-xs text-[#8E8A83] uppercase flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C79A3B]" />
                <span>Title Status</span>
              </div>
              <div className="font-display-luxury text-lg font-bold text-[#D7B56D] mt-0.5">
                Verified
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
              Property Overview
            </h4>
            <p className="text-sm sm:text-base text-[#AAA7A0] leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Amenities & Features */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                Key Amenities & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-[#1C1C1C] rounded-sm border border-[#2B2B2B]">
                    <div className="w-4 h-4 rounded-full bg-[#C79A3B]/20 text-[#C79A3B] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-xs text-[#EEECE7] font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specifications Table */}
          {property.specs && property.specs.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#C79A3B]">
                Property Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {property.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-2 px-3 bg-[#1B1B1B] rounded-sm border-b border-[#262626]">
                    <span className="text-[#8E8A83]">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inquiry / Action Section */}
          <div className="pt-6 border-t border-[#2C2C2C] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Connect Options */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="font-display-luxury text-xl font-semibold text-white">
                Interested in this Property?
              </h4>
              <p className="text-xs text-[#8E8A83] leading-relaxed">
                Connect directly with Seeme Uzay Real Estate consultants for verified records, site inspection, or title verification.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={propertyWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#C79A3B]/50 hover:border-[#C79A3B] bg-[#1C1C1C] text-[#EEECE7] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#C79A3B]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7 bg-[#1C1C1C] p-6 rounded-sm border border-[#2C2C2C]">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#141414] border border-[#C79A3B] text-[#C79A3B] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display-luxury text-lg font-semibold text-white">
                    Inquiry Submitted
                  </h4>
                  <p className="text-xs text-[#8E8A83]">
                    Thank you {formData.fullName}. Our team will contact you regarding "{property.title}".
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D7B56D] mb-1">
                    Send Direct Message
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none"
                  />

                  <textarea
                    rows={2}
                    placeholder={`I am interested in "${property.title}". Please share details and viewing availability.`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#141414] border border-[#333333] focus:border-[#C79A3B] text-xs text-white p-3 rounded-sm focus:outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C79A3B] hover:bg-[#b88b2e] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
