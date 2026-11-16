'use client';

import { Flame } from 'lucide-react';

const tickerItems = [
  { item: 'Iron Scrap', rate: '₹35/kg' },
  { item: 'Copper Scrap', rate: '₹490/kg' },
  { item: 'Brass Scrap', rate: '₹350/kg' },
  { item: 'Aluminium Scrap', rate: '₹135/kg' },
  { item: 'Newspaper Scrap', rate: '₹16/kg' },
  { item: 'Cardboard Boxes', rate: '₹11/kg' },
  { item: 'Battery Scrap', rate: '₹88/kg' },
  { item: 'Scrap AC Unit (Metal)', rate: '₹3,600/pc' },
  { item: 'Stainless Steel Scrap', rate: '₹48/kg' },
  { item: 'Old Laptop Scrap', rate: '₹550/pc' },
  { item: 'Washing Machine Scrap', rate: '₹850/pc' },
  { item: 'Scrap Metal Cooler', rate: '₹550/pc' },
];

export default function LiveRatesTicker() {
  return (
    <div className="bg-[#023440] text-white py-2.5 border-y border-[#054756] ticker-wrapper overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-[#023440] to-transparent w-16 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-[#023440] to-transparent w-16 pointer-events-none"></div>

      <div className="ticker-content flex items-center space-x-8 text-xs font-medium">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#012028] text-[#f0edcc] font-extrabold border border-[#f0edcc]/40 shadow-xs">
          <Flame className="w-3.5 h-3.5 text-[#f0edcc]" />
          <span>TODAY'S LIVE SCRAP MARKET RATES (NOIDA):</span>
        </div>

        {/* First repetition */}
        {tickerItems.map((item, idx) => (
          <div key={`t1-${idx}`} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="text-white/90">{item.item}:</span>
            <span className="text-[#023440] font-black bg-[#f0edcc] px-2 py-0.5 rounded-md shadow-xs">
              {item.rate}
            </span>
          </div>
        ))}

        {/* Second repetition for smooth infinite marquee */}
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#012028] text-[#f0edcc] font-extrabold border border-[#f0edcc]/40 shadow-xs">
          <Flame className="w-3.5 h-3.5 text-[#f0edcc]" />
          <span>TODAY'S LIVE SCRAP MARKET RATES (NOIDA):</span>
        </div>

        {tickerItems.map((item, idx) => (
          <div key={`t2-${idx}`} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="text-white/90">{item.item}:</span>
            <span className="text-[#023440] font-black bg-[#f0edcc] px-2 py-0.5 rounded-md shadow-xs">
              {item.rate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
