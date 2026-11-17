'use client';

import { Phone, MessageCircle } from 'lucide-react';

const scrapMaterials = [
  {
    id: 'copper',
    tag: 'HIGH VALUE METAL',
    name: 'Copper Scrap & Wires',
    rate: 'Best Price',
    unit: '',
    desc: 'Heavy armature copper wire, motor winding, clean industrial pipes, utensils, and electrical cables.',
    image: '/images/scrap/copper-scrap.jpg',
    features: ['100% digital scale weighing', 'Highest wholesale market rate', 'Instant cash or digital UPI payout']
  },
  {
    id: 'brass',
    tag: 'HIGH VALUE METAL',
    name: 'Brass Scrap & Utensils',
    rate: 'Best Price',
    unit: '',
    desc: 'Household brass utensils, water valves, sanitary fittings, machinery parts, and decorative brass hardware.',
    image: '/images/scrap/brass-scrap.jpg',
    features: ['Fair weight guarantee', 'Zero deduction for tare weight', 'Free doorstep collection in 60 mins']
  },
  {
    id: 'aluminium',
    tag: 'NON-FERROUS METAL',
    name: 'Aluminium Scrap & Channels',
    rate: 'Best Price',
    unit: '',
    desc: 'Aluminium sheets, sliding door channels, partition frames, household utensils, and ladder sections.',
    image: '/images/scrap/aluminium-scrap.jpg',
    features: ['Commercial & household scrap', 'Clean weight on electronic balance', 'Spot payment on the spot']
  },
  {
    id: 'iron',
    tag: 'FERROUS SCRAP',
    name: 'Iron & Steel Scrap',
    rate: 'Best Price',
    unit: '',
    desc: 'Heavy structural iron, construction TMT rods, angles, pipes, window grills, gates, and machinery scrap.',
    image: '/images/scrap/iron-scrap.jpg',
    features: ['High-tonnage vehicle loading', 'Free lifting by our staff', 'Weighbridge slip available for bulk']
  },
  {
    id: 'battery',
    tag: 'BATTERY RECYCLING',
    name: 'Inverter & Vehicle Batteries',
    rate: 'Best Price',
    unit: '',
    desc: 'Old lead-acid inverter batteries, motorcycle batteries, car & truck batteries, and commercial UPS power banks.',
    image: '/images/scrap/battery-scrap.jpg',
    features: ['Safe eco-friendly disposal', 'Immediate top cash valuation', 'Free doorstep pickup for single unit']
  },
  {
    id: 'cardboard',
    tag: 'PAPER RECYCLING',
    name: 'Cardboard & Packaging Boxes',
    rate: 'Best Price',
    unit: '',
    desc: 'Corrugated cartons, e-commerce delivery boxes, grocery cartons, packing sheets, and shipping boxes.',
    image: '/images/scrap/cardboard-scrap.jpg',
    features: ['Bundled digital weighing', 'Zero pickup charge', 'Regular commercial office pickup']
  }
];

export default function ScrapMaterialCards() {
  return (
    <section className="py-14 bg-[#023440] text-white relative overflow-hidden" id="scrap-rates-cards">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0edcc]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Clean Header with Thin Top Divider matching reference site */}
        <div className="border-t border-white/20 pt-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Scrap Materials
          </h2>
          <p className="text-slate-100 text-base sm:text-lg mt-2 font-medium leading-relaxed">
            We buy iron, copper, brass, aluminium, batteries, and paper scrap with doorstep pickup.
          </p>
        </div>

        {/* 2-Column Responsive Scrap Cards Grid on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {scrapMaterials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-xl border border-slate-200 hover:border-[#f0edcc] hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              {/* Photo Area */}
              <div className="relative h-28 xs:h-36 sm:h-48 lg:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tag Badge */}
                  <span className="inline-block text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-sky-800 bg-sky-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md mb-1.5 sm:mb-2 border border-sky-200/60 truncate max-w-full">
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg lg:text-xl font-extrabold text-slate-900 mb-1 font-heading leading-snug line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Price Rate */}
                  <div className="flex flex-wrap items-baseline gap-x-1.5 mb-1.5 sm:mb-2">
                    <span className="text-lg sm:text-2xl lg:text-3xl font-black text-emerald-600">
                      {item.rate}
                    </span>
                    {item.unit && (
                      <span className="text-[10px] sm:text-xs font-bold text-slate-500">
                        {item.unit}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-3 sm:mb-6 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Call & WhatsApp Action Buttons */}
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-3 pt-2">
                  <a
                    href="tel:9599122595"
                    className="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 bg-[#023440] hover:bg-[#012028] text-white font-bold py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs transition-colors shadow-md border border-[#023440] text-center"
                  >
                    <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/919599122595?text=${encodeURIComponent(
                      `Hello Malik Kabadi Wala, I want to sell ${item.name} in Noida. Please share pickup details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs transition-colors shadow-md text-center"
                  >
                    <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
