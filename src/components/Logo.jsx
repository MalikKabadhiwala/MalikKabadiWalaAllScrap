'use client';

export default function Logo({ 
  variant = 'light', // 'light' (for light backgrounds) or 'dark' (for dark navy #023440 backgrounds)
  size = 'md',       // 'xs', 'sm', 'md', 'lg'
  className = ''
}) {
  const isDark = variant === 'dark';

  const truckHeights = {
    xs: 'h-4.5 sm:h-5',
    sm: 'h-5 sm:h-6',
    md: 'h-7 sm:h-8',
    lg: 'h-9 sm:h-10',
  };

  const titleSizes = {
    xs: 'text-[11px] sm:text-xs',
    sm: 'text-xs sm:text-[13px]',
    md: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg',
  };

  const tagSizes = {
    xs: 'text-[7.5px] tracking-[0.15em] px-1 py-0.5',
    sm: 'text-[8px] sm:text-[9px] tracking-[0.16em] px-1.5 py-0.5',
    md: 'text-[9px] sm:text-[10px] tracking-[0.18em] px-2 py-0.5',
    lg: 'text-[10px] sm:text-xs tracking-[0.2em] px-2.5 py-0.5',
  };

  const gapClasses = {
    xs: 'space-x-1.5',
    sm: 'space-x-1.5 sm:space-x-2',
    md: 'space-x-2 sm:space-x-2.5',
    lg: 'space-x-2.5 sm:space-x-3',
  };

  return (
    <div className={`inline-flex items-center ${gapClasses[size] || gapClasses.md} select-none text-left ${className}`}>
      {/* Left: Scrap Collection Truck Logo Icon (Clean Transparent PNG) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img 
          src="/images/truck-logo.png" 
          alt="Malik Kabadi Wala Scrap Collection Truck" 
          className={`${truckHeights[size] || truckHeights.md} w-auto object-contain shrink-0`}
          style={{ width: 'auto' }}
        />
      </div>

      {/* Subtle Vertical Divider */}
      <span className={`w-px self-stretch my-0.5 ${isDark ? 'bg-[#f0edcc]/30' : 'bg-slate-300'} shrink-0`} />

      {/* Right: Brand Typography Written in Code */}
      <div className="flex flex-col justify-center leading-none text-left">
        <div className={`font-heading font-black tracking-tight ${titleSizes[size] || titleSizes.md} whitespace-nowrap`}>
          <span className={isDark ? 'text-white' : 'text-[#023440]'}>MALIK </span>
          <span className={isDark ? 'text-[#22c55e]' : 'text-[#15803d]'}>KABADI WALA</span>
        </div>
        <div className="flex items-center space-x-1.5 mt-0.5 sm:mt-1">
          <span className={`font-black uppercase rounded-md shadow-2xs ${tagSizes[size] || tagSizes.md} ${
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
