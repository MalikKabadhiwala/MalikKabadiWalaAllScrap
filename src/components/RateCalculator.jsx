'use client';

import { useState } from 'react';
import { scrapRatesData } from '@/data/scrapData';
import { Calculator, MessageCircle, CheckCircle2, Zap } from 'lucide-react';

export default function RateCalculator() {
  const [selectedId, setSelectedId] = useState('iron');
  const [quantity, setQuantity] = useState('50');

  const selectedItem = scrapRatesData.find(item => item.id === selectedId) || scrapRatesData[0];
  const qtyNumber = parseFloat(quantity) || 0;
  const estimatedAmount = Math.round(selectedItem.rate * qtyNumber);

  const handleWhatsAppBooking = () => {
    const message = `Hello Malik Kabadi Wala, I used your website Scrap Rate Calculator.
Item: ${selectedItem.name}
Quantity: ${quantity} ${selectedItem.unit}
Current Rate: ₹${selectedItem.rate}/${selectedItem.unit}
Estimated Payout: ₹${estimatedAmount.toLocaleString('en-IN')}

My location is in Noida. Please let me know when your doorstep pickup team can arrive.`;

    const waUrl = `https://wa.me/919599122595?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#023440] relative overflow-hidden">
      {/* Decorative top ribbon in #023440 & #f0edcc */}
      <div className="absolute top-0 right-0 bg-[#023440] text-[#f0edcc] text-[11px] font-black px-4 py-1.5 rounded-bl-xl shadow-xs border-b border-l border-[#f0edcc]/30 inline-flex items-center space-x-1.5">
        <Zap className="w-3 h-3 text-[#f0edcc] fill-[#f0edcc]" />
        <span>Live Market Rates</span>
      </div>

      <div className="flex items-center space-x-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-[#023440] text-[#f0edcc] flex items-center justify-center shadow-sm">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-[#023440]">Instant Scrap Rate Calculator</h3>
          <p className="text-xs text-slate-500">Calculate your estimated cash payout right now</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-[#023440] uppercase tracking-wider mb-2">
            Select Scrap Material
          </label>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-[#023440] text-sm font-semibold focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none bg-slate-50"
          >
            {scrapRatesData.map(item => (
              <option key={item.id} value={item.id}>
                {item.name} — ₹{item.rate}/{item.unit}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-[#023440] uppercase tracking-wider">
              Approx Quantity ({selectedItem.unit === 'kg' ? 'Kilograms' : 'Pieces'})
            </label>
            <span className="text-xs font-bold text-[#023440] bg-[#f0edcc] px-2.5 py-1 rounded-md">
              Rate: ₹{selectedItem.rate} / {selectedItem.unit}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-[#023440] font-bold text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none bg-slate-50"
            />
            <span className="text-sm font-bold text-[#023440] shrink-0">
              {selectedItem.unit === 'kg' ? 'KG' : 'Pcs'}
            </span>
          </div>

          {/* Quick Quantity presets */}
          <div className="flex items-center space-x-2 mt-2.5">
            <span className="text-[11px] text-slate-500 font-medium">Quick Pick:</span>
            {[20, 50, 100, 250].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setQuantity(preset.toString())}
                className="px-2.5 py-1 text-xs rounded-lg bg-[#f0edcc]/60 hover:bg-[#023440] hover:text-[#f0edcc] font-bold text-[#023440] transition-colors"
              >
                {preset} {selectedItem.unit}
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Result Card in #023440 and #f0edcc */}
        <div className="p-6 rounded-2xl bg-[#023440] text-white border border-[#f0edcc]/40 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#f0edcc]">
                Estimated Cash Payout
              </span>
              <p className="text-[11px] text-[#f0edcc]/80 mt-0.5">
                Paid on the spot via Cash or UPI at your doorstep
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-[#f0edcc] tracking-tight">
                ₹ {estimatedAmount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={handleWhatsAppBooking}
          className="w-full py-4 px-6 rounded-xl bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-black text-sm shadow-xl flex items-center justify-center space-x-2 transition-all transform active:scale-[0.99] border border-[#f0edcc]/30"
        >
          <MessageCircle className="w-5 h-5 text-[#f0edcc]" />
          <span>Sell on WhatsApp at this Rate</span>
        </button>

        <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-600 pt-1 font-semibold">
          <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-[#023440] mr-1" /> Zero Pickup Charges</span>
          <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-[#023440] mr-1" /> Digital Weight</span>
        </div>
      </div>
    </div>
  );
}
