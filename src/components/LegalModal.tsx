import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/realEstateData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#161616] border border-[#C79A3B]/40 rounded-sm shadow-2xl p-6 sm:p-10 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2C2C2C] shrink-0">
          <div className="flex items-center gap-2 text-[#C79A3B]">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-display-luxury text-xl sm:text-2xl font-semibold text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#202020] hover:bg-[#333333] text-[#AAA7A0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto py-6 space-y-4 text-xs sm:text-sm text-[#AAA7A0] leading-relaxed pr-2 font-light">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Seeme Uzay Real Estate</strong> ("we", "our", or "the Company") is committed to safeguarding the personal information of our clients, property buyers, sellers, and website visitors.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">1. Information We Collect</h4>
              <p>
                We only collect information voluntarily provided by you when submitting property inquiries, booking consultations, or contacting us via WhatsApp or telephone. This may include your full name, contact number, email address, and property preferences.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">2. Use of Information</h4>
              <p>
                Your data is exclusively used to deliver requested property services, coordinate viewings, verify title documents, and respond to your specific inquiries. We do not sell or trade your information with unauthorized third parties.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">3. Direct Communications</h4>
              <p>
                By providing your contact information, you consent to receive direct communications regarding your property request via telephone or WhatsApp (+92 308 4531593).
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">4. Data Security</h4>
              <p>
                We implement strict administrative safeguards to protect your personal information. If you have any questions regarding your data, please contact us at {COMPANY_DETAILS.phone}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Seeme Uzay Real Estate</strong>. By accessing our website ({COMPANY_DETAILS.websiteDisplay}) or engaging our services, you agree to the following terms and conditions.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">1. Informational & Sample Inventory Notice</h4>
              <p>
                Property listings displayed on this website serve as sample and illustrative inventory representing typical market offerings. All prices, specifications, and availability are subject to physical verification and official title registry confirmation.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">2. Independent Due Diligence</h4>
              <p>
                While Seeme Uzay Real Estate undertakes rigorous preliminary due diligence, all clients are advised to inspect physical sites and verify legal title documentation prior to executing financial commitments.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">3. Intellectual Property</h4>
              <p>
                All brand marks, logos, visual layouts, and content associated with Seeme Uzay Real Estate are protected and may not be reproduced without prior written authorization.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">4. Governing Law</h4>
              <p>
                These terms are governed by and construed in accordance with the applicable laws of Pakistan.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#2C2C2C] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#C79A3B] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#b88b2e] cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
