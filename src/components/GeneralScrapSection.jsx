'use client';

import { Phone, MessageCircle } from 'lucide-react';

const generalScrapItems = [
  {
    id: 'general-iron',
    tag: 'DOORSTEP PICKUP',
    name: 'Iron Scrap',
    rate: 'Best Price',
    unit: '',
    desc: 'We buy old iron pipes, angles, construction rods, window grills, gates, and heavy machinery scrap.',
    image: '/images/scrap/general-iron-scrap.jpg',
    features: ['100% digital electronic scale weighing', 'Spot payment via Cash or UPI', 'Free loading & vehicle pickup']
  },
  {
    id: 'general-brass',
    tag: 'DOORSTEP PICKUP',
    name: 'Brass Scrap',
    rate: 'Best Price',
    unit: '',
    desc: 'We buy old brass utensils, brass gears, plumbing valves, taps, and decorative hardware brass.',
    image: '/images/scrap/general-brass-scrap.jpg',
    features: ['Highest wholesale market rate', 'Zero deduction for tare weight', 'Doorstep collection across Noida']
  },
  {
    id: 'general-aluminium',
    tag: 'DOORSTEP PICKUP',
    name: 'Aluminium Scrap',
    rate: 'Best Price',
    unit: '',
    desc: 'We buy old aluminium sliding window channels, partition sections, cookware, and industrial aluminium.',
    image: '/images/scrap/general-aluminium-scrap.jpg',
    features: ['Clean electronic digital weighing', 'Zero pickup charge', 'Instant cash or digital UPI payout']
  },
  {
    id: 'general-copper',
    tag: 'DOORSTEP PICKUP',
    name: 'Copper Scrap & Wires',
    rate: 'Best Price',
    unit: '',
    desc: 'We buy stripped copper electrical wires, armature motor coils, industrial copper pipes, and heavy cables.',
    image: '/images/scrap/copper-scrap.jpg',
    features: ['Top market price guarantee', 'Calibrated electronic scale', 'Free doorstep collection in 60 mins']
  },
  {
    id: 'general-battery',
    tag: 'DOORSTEP PICKUP',
    name: 'Inverter & Vehicle Batteries',
    rate: 'Best Price',
    unit: '',
    desc: 'We buy old lead-acid home inverter batteries, motorcycle batteries, car batteries, and UPS batteries.',
    image: '/images/scrap/battery-scrap.jpg',
    features: ['Safe certified eco-friendly recycling', 'Instant spot cash settlement', 'Free doorstep pickup for single unit']
  },
  {
    id: 'general-cardboard',
    tag: 'DOORSTEP PICKUP',
    name: 'Cardboard & Corrugated Boxes',
    rate: 'Best Price',
    unit: '',
    desc: 'We buy e-commerce delivery boxes, corrugated packing cartons, grocery boxes, and bundled paper scrap.',
    image: '/images/scrap/cardboard-scrap.jpg',
    features: ['Digital weighing scale guarantee', 'Fast vehicle doorstep collection', 'Regular pickup for corporate offices']
  }
];

export default function GeneralScrapSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200" id="general-scrap-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference website */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#023440] font-black text-xs uppercase tracking-widest block mb-2 font-heading">
            DOORSTEP SCRAP SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#023440] tracking-tight font-heading">
            Sell Your Scrap at the Best Price
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed font-medium">
            We buy different types of household, office and commercial scrap with convenient doorstep pickup service.
          </p>
        </div>

        {/* 2-Column Scrap Cards Grid on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {generalScrapItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-[#023440] hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              {/* Photo Area */}
              <div className="relative h-28 xs:h-36 sm:h-48 lg:h-52 w-full overflow-hidden bg-slate-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tag Pill Badge */}
                  <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#023440] bg-[#f0edcc] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md mb-1.5 sm:mb-2 border border-[#023440]/20 truncate max-w-full">
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg lg:text-xl font-extrabold text-slate-900 mb-1 font-heading leading-snug line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Price Rate / Valuation */}
                  <div className="flex items-baseline space-x-1 mb-1.5 sm:mb-2">
                    <span className="text-base sm:text-2xl lg:text-3xl font-black text-emerald-600">
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
                    className="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 bg-[#023440] hover:bg-[#012028] text-white font-bold py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs transition-colors shadow-sm text-center"
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
                    className="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 sm:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs transition-colors shadow-sm text-center"
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

