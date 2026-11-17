'use client';

import Link from 'next/link';
import { LayoutGrid, MessageCircle, Phone, IndianRupee, Zap } from 'lucide-react';

export default function Hero() {
  const openRatesOrModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-booking-modal'));
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] flex items-center justify-center">
      {/* Background Video with Clean Translucent Tint in #023440 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-video-poster.jpg"
          className="w-full h-full object-cover pointer-events-none brightness-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Soft, clear overlay using #023440 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#023440]/75 via-[#023440]/50 to-[#023440]/25"></div>
        <div className="absolute inset-0 bg-slate-950/20"></div>
      </div>

      {/* Main Hero Content (Left-aligned, high contrast text) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Pill Badge in #023440 & #f0edcc */}
          <div className="inline-flex items-center space-x-2 bg-[#023440]/85 border border-[#f0edcc]/60 px-3 sm:px-4 py-1.5 rounded-full text-[10.5px] sm:text-xs font-bold text-[#f0edcc] backdrop-blur-md shadow-lg max-w-full">
            <Zap className="w-3.5 h-3.5 text-[#f0edcc] fill-[#f0edcc] shrink-0" />
            <span className="tracking-wide sm:tracking-widest uppercase">
              DOORSTEP PICKUP • 100% DIGITAL WEIGHING • NOIDA SECTOR 58
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-heading drop-shadow-[0_3px_12px_rgba(2,52,64,0.95)]">
            Sell Your Scrap —<br />
            <span className="text-[#f0edcc] drop-shadow-[0_3px_12px_rgba(2,52,64,0.95)]">
              Best Price, Instant Cash.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(2,52,64,0.9)]">
            Certified electronic digital scales, free doorstep pickup, and instant cash or UPI payout across Bishanpura, Noida Sector 58, and all NCR.
          </p>

          {/* Dual Action Buttons matching #023440 & #f0edcc */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-4">
            {/* Button 1: Sell Scrap (Deep #023440 Background with #f0edcc Border & White Text) */}
            <Link
              href="/rates"
              className="inline-flex items-center justify-center space-x-2.5 bg-[#023440] hover:bg-[#012028] text-white font-black px-7 py-3.5 rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base border-2 border-[#f0edcc] w-full sm:w-auto text-center"
            >
              <LayoutGrid className="w-5 h-5 text-[#f0edcc]" />
              <span>Sell Scrap</span>
            </Link>

            {/* Button 2: WhatsApp Now (Cream #f0edcc Background with #023440 Text) */}
            <a
              href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20want%20to%20sell%20scrap%20in%20Noida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 bg-[#f0edcc] hover:bg-white text-[#023440] font-black px-7 py-3.5 rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base border border-[#f0edcc] w-full sm:w-auto text-center"
            >
              <MessageCircle className="w-5 h-5 text-[#023440] fill-[#023440]" />
              <span>WhatsApp Now</span>
            </a>
          </div>

        </div>
      </div>

      {/* Floating Action Dock on Right Edge - Active on desktop (mobile uses MobileStickyBar) */}
      <div className="hidden md:flex fixed right-3 sm:right-5 bottom-5 z-40 flex-col items-center space-y-2.5">
        {/* 1. Phone Call Button */}
        <a
          href="tel:9599122595"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#023440] hover:bg-[#012028] text-white flex items-center justify-center shadow-2xl border-2 border-[#f0edcc] transition-all hover:scale-110 group"
          title="Call Now: 9599122595"
          aria-label="Call Now"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#f0edcc] group-hover:animate-bounce" />
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20want%20to%20sell%20scrap%20in%20Noida."
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl border-2 border-white transition-all hover:scale-110 group"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
        </a>

        {/* 3. Rupee Rates Quick Jump Button */}
        <button
          onClick={openRatesOrModal}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f0edcc] hover:bg-white text-[#023440] flex items-center justify-center shadow-2xl transition-all hover:scale-110 font-black text-lg border-2 border-[#023440]"
          title="Live Scrap Rates & Calculator"
          aria-label="Live Scrap Rates"
        >
          <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-[#023440]" />
        </button>
      </div>
    </section>
  );
}
