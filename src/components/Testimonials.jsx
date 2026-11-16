'use client';

import { useState, useEffect } from 'react';
import { clientReviews } from '@/data/scrapData';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export default function Testimonials() {
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

  const maxIndex = Math.max(0, clientReviews.length - visibleCount);

  // Auto carousel rotation every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
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
    <section className="py-14 sm:py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading in #023440 & #f0edcc */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f0edcc] text-[#023440] text-xs sm:text-sm font-black mb-3 border border-[#023440]/20">
            <Star className="w-4 h-4 text-[#023440] fill-[#023440]" />
            <span>4.9 / 5 Rating • 850+ Doorstep Pickups in Noida</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#023440] tracking-tight font-heading leading-tight">
            Trusted by Thousands Across Noida
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 sm:mt-3 leading-relaxed">
            See what households, residential societies, and IT office managers say about our honest digital weighing and immediate spot cash payment.
          </p>
        </div>

        {/* Reviews Auto Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Carousel Track */}
          <div className="overflow-hidden py-4 -mx-3">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
              }}
            >
              {clientReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="shrink-0 px-3.5"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-[#f0edcc]/25 rounded-3xl p-6 sm:p-7 border border-[#f0edcc] hover:border-[#023440] hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Row: Stars + Rating Score + Quote Icon */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#023440] fill-[#023440]" />
                          ))}
                          <span className="text-xs font-black text-[#023440] ml-1">5.0</span>
                        </div>
                        <Quote className="w-6 h-6 text-[#023440]/20" />
                      </div>

                      {/* Material Category Pill Badge */}
                      <div className="mb-4">
                        <span className="inline-block text-xs font-bold text-[#023440] bg-[#f0edcc] border border-[#023440]/20 px-3 py-1 rounded-full shadow-2xs">
                          {review.type}
                        </span>
                      </div>

                      {/* Review comment with readable font and upright style */}
                      <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal mb-6">
                        "{review.comment}"
                      </p>
                    </div>

                    {/* Reviewer Details in Footer */}
                    <div className="pt-4 border-t border-[#023440]/15 flex items-center justify-between gap-3">
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-[#023440] text-[#f0edcc] font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm">
                          {review.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-[#023440] text-sm sm:text-base leading-snug truncate">
                            {review.name}
                          </h4>
                          <span className="text-xs text-[#054756] font-semibold block truncate mt-0.5">
                            {review.role ? `${review.role} • ` : ''}{review.location}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center text-[11px] font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-300/50 px-2 py-0.5 rounded-full shrink-0">
                        <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" /> Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* Trust banner */}
        <div className="mt-14 text-center text-sm sm:text-base text-slate-700 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold">
          <span className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#023440] mr-2" /> 100% Genuine Reviews</span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#023440] mr-2" /> Certified Scales</span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="flex items-center"><CheckCircle2 className="w-5 h-5 text-[#023440] mr-2" /> Immediate UPI / Cash</span>
        </div>

      </div>
    </section>
  );
}
