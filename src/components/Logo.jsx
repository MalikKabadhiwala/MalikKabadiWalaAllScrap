'use client';

export default function Logo({ 
  variant = 'light', // 'light' (for light backgrounds) or 'dark' (for dark navy #023440 backgrounds)
  size = 'md',       // 'sm', 'md', 'lg'
  className = ''
}) {
  const isDark = variant === 'dark';

  const truckHeights = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-11',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg lg:text-xl',
    lg: 'text-lg sm:text-xl lg:text-2xl',
  };

  const tagSizes = {
    sm: 'text-[9px] tracking-[0.18em] px-1.5 py-0.5',
    md: 'text-[10px] sm:text-[11px] tracking-[0.2em] px-2 py-0.5',
    lg: 'text-[11px] sm:text-xs tracking-[0.22em] px-2.5 py-0.5',
  };

  return (
    <div className={`inline-flex items-center space-x-2 sm:space-x-3 select-none text-left ${className}`}>
      {/* Left: Scrap Collection Truck Logo Icon (Clean Transparent PNG) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img 
          src="/images/truck-logo.png" 
          alt="Malik Kabadi Wala Scrap Collection Truck" 
          className={`${truckHeights[size]} w-auto object-contain shrink-0`}
          style={{ width: 'auto' }}
        />
      </div>

      {/* Subtle Vertical Divider */}
      <span className={`w-px self-stretch my-0.5 ${isDark ? 'bg-[#f0edcc]/30' : 'bg-slate-300'} shrink-0`} />

      {/* Right: Brand Typography Written in Code */}
      <div className="flex flex-col justify-center leading-none text-left">
        <div className={`font-heading font-black tracking-tight ${titleSizes[size]} whitespace-nowrap`}>
          <span className={isDark ? 'text-white' : 'text-[#023440]'}>MALIK </span>
          <span className={isDark ? 'text-[#22c55e]' : 'text-[#15803d]'}>KABADI WALA</span>
        </div>
        <div className="flex items-center space-x-1.5 mt-1 sm:mt-1.5">
          <span className={`font-black uppercase rounded-md shadow-2xs ${tagSizes[size]} ${
            isDark 
              ? 'bg-[#f0edcc] text-[#023440]' 
              : 'bg-[#f0edcc] text-[#023440] border border-[#023440]/20'
          }`}>
            ALL SCRAP
          </span>
        </div>
      </div>
    </div>
  );
}
