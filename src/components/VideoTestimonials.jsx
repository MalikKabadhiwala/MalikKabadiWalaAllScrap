'use client';

import { useState } from 'react';

const videoTestimonials = [
  {
    id: 'vid-1',
    title: 'Doorstep Pickup Experience',
    subtitle: 'A convenient and reliable doorstep pickup experience for our customers.',
    videoSrc: '/videos/testimonial-pickup-review.mp4',
    poster: '/images/testimonials/doorstep-pickup-poster.jpg'
  },
  {
    id: 'vid-2',
    title: 'Scrap Collection Experience',
    subtitle: 'Customer feedback about easy and hassle-free scrap collection.',
    videoSrc: '/videos/testimonial-collection-experience.mp4',
    poster: '/images/testimonials/collection-truck-poster.jpg'
  },
  {
    id: 'vid-3',
    title: 'Digital Scale Accuracy',
    subtitle: 'Accurate electronic digital weighing machine brought straight to your doorstep with fair weight.',
    videoSrc: '/videos/hero-bg.mp4',
    poster: '/images/testimonials/scrap-yard-accuracy.jpg'
  },
  {
    id: 'vid-4',
    title: 'Instant Cash & UPI Payout',
    subtitle: 'Prompt settlement on the spot before the scrap was loaded into the collection vehicle.',
    videoSrc: '/videos/hero-bg.mp4',
    poster: '/images/scrap/copper-scrap.jpg'
  }
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 45;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < videoTestimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
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
    if (isLeftSwipe && currentIndex < videoTestimonials.length - 1) {
      handleNext();
    } else if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === videoTestimonials.length - 1;

  // Active card width is 80% on desktop, peeking 10% symmetrically on both sides
  const CARD_WIDTH = 80;
  const GAP = 2.5;
  const PEEK = (100 - CARD_WIDTH) / 2; // 10%
  const offset = PEEK - currentIndex * (CARD_WIDTH + GAP);

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200 overflow-hidden" id="video-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference styling */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#023440] tracking-tight font-heading leading-tight">
            Customer Video Testimonials
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg mt-2.5 sm:mt-3 leading-relaxed font-medium">
            Hear what our customers have to say about their experience.
          </p>
        </div>

        {/* Carousel Viewport with Centered Active Card & Symmetric Peeking */}
        <div 
          className="relative w-full mx-auto touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          {/* Left Circular Navigation Paddle - Positioned on left edge of centered card */}
          <button
            onClick={handlePrev}
            disabled={isFirst}
            aria-label="Previous video testimonial"
            className={`absolute left-0.5 sm:left-[calc(10%-22px)] top-[110px] sm:top-[140px] md:top-[150px] -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl transition-all border border-white/60 active:scale-95 ${
              isFirst
                ? 'bg-slate-400 text-white/70 cursor-not-allowed opacity-70'
                : 'bg-[#023440] hover:bg-[#012028] text-white cursor-pointer hover:scale-105'
            }`}
          >
            <span className="text-xl sm:text-2xl font-bold leading-none select-none pb-0.5">‹</span>
          </button>

          {/* Right Circular Navigation Paddle - Positioned on right edge of centered card */}
          <button
            onClick={handleNext}
            disabled={isLast}
            aria-label="Next video testimonial"
            className={`absolute right-0.5 sm:right-[calc(10%-22px)] top-[110px] sm:top-[140px] md:top-[150px] -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-xl transition-all border border-white/60 active:scale-95 ${
              isLast
                ? 'bg-slate-400 text-white/70 cursor-not-allowed opacity-70'
                : 'bg-[#023440] hover:bg-[#012028] text-white cursor-pointer hover:scale-105'
            }`}
          >
            <span className="text-xl sm:text-2xl font-bold leading-none select-none pb-0.5">›</span>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${offset}%)`
              }}
            >
              {videoTestimonials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={item.id}
                    className="w-[80%] shrink-0 pr-3 sm:pr-6"
                    style={{
                      marginRight: `${GAP}%`
                    }}
                  >
                    <div
                      className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 ${
                        isActive
                          ? 'border-slate-300 shadow-xl sm:shadow-2xl scale-100 opacity-100'
                          : 'border-slate-200 shadow-md scale-[0.98] opacity-75'
                      }`}
                    >
                      {/* Video Player - Controlled cinematic height matching user preference */}
                      <div className="relative w-full h-[210px] sm:h-[280px] md:h-[300px] bg-slate-950 overflow-hidden flex items-center justify-center">
                        <video
                          src={item.videoSrc}
                          poster={item.poster}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover bg-black"
                        />
                      </div>

                      {/* Card Content - Compact & Clean Title & Description */}
                      <div className="p-3.5 sm:p-5 md:p-6 bg-white">
                        <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-[#023440] mb-1 font-heading tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                          {item.subtitle}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicator Dots matching reference */}
          <div className="flex items-center justify-center space-x-2.5 mt-6">
            {videoTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-7 sm:w-8 bg-[#023440]'
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
