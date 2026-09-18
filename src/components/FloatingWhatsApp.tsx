import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/realEstateData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#161616] text-[#EEECE7] text-xs py-2 px-3.5 rounded-sm border border-[#C79A3B]/50 shadow-xl animate-fadeIn">
          <span>Need help? Chat with an agent</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8E8A83] hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat directly on WhatsApp with Seeme Uzay Real Estate"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#C79A3B] border-2 border-[#111111]" />
        <MessageSquare className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
