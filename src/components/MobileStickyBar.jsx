'use client';

import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileStickyBar() {
  const openModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-booking-modal'));
    }
  };

  return (
    /* Mobile Sticky Bottom Bar in #023440 & #f0edcc */
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#023440]/95 backdrop-blur-md border-t border-[#f0edcc]/40 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          href="tel:9599122595"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#f0edcc] text-[#023440] font-black text-[11px] active:scale-95 transition-transform shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#023440] mb-0.5 fill-[#023440]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20want%20to%20sell%20scrap%20in%20Noida."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#012028] text-[#f0edcc] font-black text-[11px] active:scale-95 transition-transform border border-[#f0edcc]/40 shadow-xs"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-[#f0edcc]" />
          <span>WhatsApp</span>
        </a>

        {/* Book Pickup modal button */}
        <button
          onClick={openModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#f0edcc] text-[#023440] font-black text-[11px] active:scale-95 transition-transform shadow-xs"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-[#023440]" />
          <span>Book Pickup</span>
        </button>
      </div>
    </div>
  );
}
