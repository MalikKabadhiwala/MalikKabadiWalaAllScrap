'use client';

import { useState, useEffect } from 'react';
import { scrapRatesData } from '@/data/scrapData';
import { Search, MessageCircle, Flame, Zap, Lightbulb } from 'lucide-react';

export default function RatesTable({ isFullPage = false }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 45;

  const categories = [
    { id: 'all', label: 'All Scrap Items' },
    { id: 'metals', label: 'Metals (Iron, Copper, Brass)' },
    { id: 'paper', label: 'Paper & Cardboard' },
    { id: 'electronics', label: 'Batteries & E-Waste' },
    { id: 'appliances', label: 'Appliance Scrap Metal' },
  ];

  // Dynamic responsive visible cards count
  useEffect(() => {
    const updateCount = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setVisibleCount(1);
        } else if (window.innerWidth < 1024) {
          setVisibleCount(2);
        } else if (window.innerWidth < 1280) {
          setVisibleCount(3);
        } else {
          setVisibleCount(4);
        }
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const filteredRates = scrapRatesData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayList = filteredRates;
  const maxIndex = Math.max(0, displayList.length - visibleCount);

  // Reset carousel index when category tab or search query changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, searchTerm]);

  // Ensure index stays within bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Gentle auto-rotation every 4.5s
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleSellItem = (item) => {
    const message = `Hello Malik Kabadi Wala, I want to sell ${item.name} at the best market rate. Please schedule a free doorstep pickup in Noida.`;
    const waUrl = `https://wa.me/919599122595?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-[#f0edcc]" id="rates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in #023440 & #f0edcc */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f0edcc] text-[#023440] text-xs font-black mb-3 border border-[#023440]/20">
            <Flame className="w-4 h-4 text-[#023440]" />
            <span>Daily Wholesale Market Benchmark Rates</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#023440] tracking-tight font-heading">
            Today's Scrap Price List in Noida
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2">
            Transparent scrap buying prices updated daily based on wholesale recycling markets. 100% digital weighing with zero hidden deductions.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#023440] text-[#f0edcc] shadow-md border border-[#023440]'
                    : 'bg-white text-[#023440] hover:bg-[#f0edcc] border border-[#023440]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search scrap item (e.g. copper, iron)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none bg-white text-[#023440]"
            />
          </div>
        </div>

        {/* Rates Carousel Container */}
        {displayList.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-600 text-sm">No scrap materials found matching "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="mt-3 px-4 py-2 bg-[#023440] text-[#f0edcc] text-xs font-bold rounded-xl"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          <div
            className="relative max-w-7xl mx-auto touch-pan-y"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Navigation Paddles */}
            {maxIndex > 0 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous scrap items"
                  className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#023440] hover:bg-[#054756] text-[#f0edcc] flex items-center justify-center shadow-xl transition-all border border-[#f0edcc]/30 hover:scale-105 active:scale-95"
                >
                  <span className="text-xl sm:text-2xl font-bold leading-none select-none pb-0.5">‹</span>
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next scrap items"
                  className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#023440] hover:bg-[#054756] text-[#f0edcc] flex items-center justify-center shadow-xl transition-all border border-[#f0edcc]/30 hover:scale-105 active:scale-95"
                >
                  <span className="text-xl sm:text-2xl font-bold leading-none select-none pb-0.5">›</span>
                </button>
              </>
            )}

            {/* Carousel Track */}
            <div className="overflow-hidden py-3 sm:py-4 -mx-2.5 sm:-mx-3">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                }}
              >
                {displayList.map(item => (
                  <div
                    key={item.id}
                    className="shrink-0 px-2.5 sm:px-3"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:border-[#023440] hover:shadow-xl transition-all flex flex-col justify-between h-full group">
                      <div>
                        {/* Top row: Zap icon + optional badge */}
                        <div className="flex items-start justify-between mb-3.5">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#023440] text-[#f0edcc] flex items-center justify-center font-bold text-base shadow-xs shrink-0">
                            <Zap className="w-5 h-5 text-[#f0edcc] fill-[#f0edcc]" />
                          </div>
                          {item.badge ? (
                            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#023440] bg-[#f0edcc] border border-[#023440]/20 shadow-xs">
                              {item.badge}
                            </span>
                          ) : null}
                        </div>

                        {/* Item Name */}
                        <h4 className="font-extrabold text-[#023440] text-base sm:text-xl mb-2 font-heading group-hover:text-[#054756] transition-colors leading-snug">
                          {item.name}
                        </h4>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed line-clamp-2 font-normal">
                          {item.desc}
                        </p>
                      </div>

                      {/* Card Footer: Min weight + WhatsApp CTA */}
                      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600">
                        <span>Min: <strong className="text-[#023440] font-extrabold">{item.min}</strong></span>
                        <button
                          onClick={() => handleSellItem(item)}
                          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-[#023440] bg-[#f0edcc] hover:bg-[#023440] hover:text-[#f0edcc] px-3.5 py-2 rounded-xl transition-colors shadow-xs"
                        >
                          <MessageCircle className="w-4 h-4 shrink-0" />
                          <span>Sell This</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicator Dots */}
            {maxIndex > 0 && (
              <div className="flex items-center justify-center space-x-2 mt-6">
                {[...Array(maxIndex + 1)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-7 bg-[#023440]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* View All or Notice Footer */}
        {!isFullPage && (
          <div className="text-center mt-10">
            <a
              href="/rates"
              className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-xl bg-[#023440] text-[#f0edcc] hover:bg-[#054756] font-bold text-sm sm:text-base transition-all shadow-md"
            >
              <span>View Complete Scrap Rate Chart (20+ Items)</span>
            </a>
          </div>
        )}

        {/* Wholesale Market Disclaimer */}
        <div className="mt-8 p-5 sm:p-6 bg-[#f0edcc]/60 rounded-2xl border border-[#023440]/20 text-center sm:text-left text-sm sm:text-base text-[#023440] leading-relaxed flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-full bg-[#023440] text-[#f0edcc] flex items-center justify-center shrink-0 shadow-xs">
            <Lightbulb className="w-5 h-5 text-[#f0edcc]" />
          </div>
          <p className="font-medium text-[#023440] text-sm sm:text-base leading-relaxed m-0">
            <strong className="font-extrabold font-heading text-base sm:text-lg mr-1 text-[#023440]">Rate Guarantee:</strong>Prices vary slightly based on international metal index and wholesale market fluctuations. For large corporate volumes or heavy scrap lots above 500 kg, please call <strong className="font-extrabold text-[#023440] underline decoration-[#023440]/40">+91 9599122595</strong> for special bulk wholesale rates!
          </p>
        </div>

      </div>
    </section>
  );
}