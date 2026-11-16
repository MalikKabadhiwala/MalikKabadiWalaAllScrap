'use client';

import { useState, useEffect } from 'react';
import { whyChooseUsList } from '@/data/scrapData';
import { Scale, Wallet, Truck, TrendingUp, CheckCircle2, Recycle } from 'lucide-react';

const iconMap = {
  Scale: Scale,
  Wallet: Wallet,
  Truck: Truck,
  TrendingUp: TrendingUp,
  CheckCircle2: CheckCircle2,
  Recycle: Recycle
};

export default function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 45;

  useEffect(() => {
    const updateCount = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setVisibleCount(1);
        } else if (window.innerWidth < 1024) {
          setVisibleCount(2);
        } else {
          setVisibleCount(3);
        }
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxIndex = Math.max(0, whyChooseUsList.length - visibleCount);

  // Auto carousel rotation every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
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

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-[#f0edcc]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading in #023440 & #f0edcc */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[#023440] font-black text-xs sm:text-sm uppercase tracking-widest bg-[#f0edcc] py-2 px-5 rounded-full inline-block border border-[#023440]/20 mb-3">
            WHY MALIK KABADI WALA ALL SCRAP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#023440] tracking-tight font-heading leading-tight">
            Honest, Transparent & Digital Scrap Service
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            Say goodbye to traditional scrap dealers with rusty, manipulated weights. We bring modern ISO-calibrated digital scales and instant cash to your doorstep.
          </p>
        </div>

        {/* Interactive Auto Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous benefits"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#023440] hover:bg-[#054756] text-[#f0edcc] flex items-center justify-center shadow-xl transition-all border border-[#f0edcc]/30 hover:scale-105 active:scale-95"
          >
            <span className="text-xl sm:text-2xl font-bold leading-none select-none pb-0.5">‹</span>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next benefits"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#023440] hover:bg-[#054756] text-[#f0edcc] flex items-center justify-center shadow-xl transition-all border border-[#f0edcc]/30 hover:scale-105 active:scale-95"
          >
            <span className="text-xl sm:text-2xl font-bold leading-none select-none pb-0.5">›</span>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-4 -mx-3">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
              }}
            >
              {whyChooseUsList.map((item, idx) => {
                const Icon = iconMap[item.icon] || Scale;
                return (
                  <div
                    key={idx}
                    className="shrink-0 px-3.5"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="bg-[#f0edcc]/25 rounded-3xl p-7 sm:p-9 border-2 border-[#f0edcc] hover:border-[#023440] transition-all hover:shadow-2xl card-hover h-full flex flex-col justify-between group">
                      <div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#023440] text-[#f0edcc] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#023440] font-heading mb-2.5 leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-sm sm:text-base font-black text-[#054756] block mb-4 uppercase tracking-wider">
                          {item.subtitle}
                        </span>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center justify-center space-x-2.5 mt-8">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#023440]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
