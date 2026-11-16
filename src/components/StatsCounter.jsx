'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, MapPin, Snowflake, Recycle } from 'lucide-react';

const statsData = [
  {
    id: 'customers',
    value: 2500,
    suffix: '+',
    label: 'Happy Customers',
    icon: Users,
  },
  {
    id: 'locations',
    value: 9,
    suffix: '+',
    label: 'Service Locations',
    icon: MapPin,
  },
  {
    id: 'ac_collections',
    value: 1800,
    suffix: '+',
    label: 'AC Collections',
    icon: Snowflake,
  },
  {
    id: 'pickups',
    value: 5000,
    suffix: '+',
    label: 'Scrap Pickups',
    icon: Recycle,
  },
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    let animFrameId = null;

    const startCountUp = () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      const duration = 2000; // 2 seconds smooth animation
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounts(
          statsData.map((stat) => Math.floor(stat.value * easeOut))
        );

        if (progress < 1) {
          animFrameId = requestAnimationFrame(animate);
        } else {
          setCounts(statsData.map((stat) => stat.value));
        }
      };

      animFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCountUp();
        } else {
          // Reset count so when the user comes back to this section, the numbers increase again
          if (animFrameId) cancelAnimationFrame(animFrameId);
          setCounts(statsData.map(() => 0));
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible in viewport
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-16 bg-gradient-to-r from-[#012028] via-[#023440] to-[#044a56] text-white relative overflow-hidden"
      id="company-stats"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f0edcc]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Icon Badge matching reference image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4 sm:mb-5 shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.8} />
                </div>

                {/* Animated Number Counter */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-none">
                  {counts[idx]}
                  <span>{stat.suffix}</span>
                </div>

                {/* Label matching reference image */}
                <p className="text-sm sm:text-base text-slate-200 font-semibold mt-2.5 sm:mt-3 tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
