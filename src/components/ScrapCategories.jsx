'use client';

import { scrapCategories } from '@/data/scrapData';
import { PackageCheck } from 'lucide-react';

export default function ScrapCategories() {
  const openModalWithCategory = (categoryTitle) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-booking-modal', {
        detail: { item: categoryTitle }
      }));
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading in #023440 & #f0edcc */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f0edcc] text-[#023440] text-xs font-black mb-3 border border-[#023440]/20">
            <PackageCheck className="w-4 h-4 text-[#023440]" />
            <span>Complete Scrap Solutions in Noida</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#023440] tracking-tight font-heading">
            Scrap Categories We Buy
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2">
            We purchase all recyclable materials from households, residential societies, corporate offices, and factories. Zero pickup charges, 100% digital weighing scale, and spot cash or digital payout.
          </p>
        </div>

        {/* 2-Column Responsive Categories Grid on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {scrapCategories.map(cat => (
            <div
              key={cat.id}
              id={cat.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs sm:shadow-md hover:border-[#023440] hover:shadow-2xl transition-all flex flex-col justify-between card-hover group scroll-mt-28"
            >
              {/* Image banner */}
              <div className="relative h-28 xs:h-36 sm:h-48 lg:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#023440]/90 via-[#023440]/30 to-transparent"></div>
                {cat.badge && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#f0edcc] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-black text-[#023440] shadow-sm">
                    {cat.badge}
                  </div>
                )}
                <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-3 sm:left-4 sm:right-4">
                  <h3 className="text-xs sm:text-lg lg:text-xl font-bold text-white font-heading leading-tight line-clamp-1">{cat.title}</h3>
                  <span className="text-[9px] sm:text-xs text-[#f0edcc] font-semibold line-clamp-1 block">{cat.subtitle}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-3 sm:mb-6 font-normal line-clamp-2 sm:line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openModalWithCategory(cat.title)}
                    className="w-full py-2 sm:py-3.5 px-2 sm:px-4 rounded-lg sm:rounded-xl bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-bold text-[11px] sm:text-sm leading-tight transition-all flex items-center justify-center shadow-sm text-center"
                  >
                    <span>Book Pickup for {cat.title.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
