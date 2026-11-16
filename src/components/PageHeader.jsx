export default function PageHeader({ badge, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden min-h-[240px] sm:min-h-[320px] flex items-center justify-center text-center py-12 sm:py-20 border-b-2 border-[#f0edcc]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-video-poster.jpg"
          className="w-full h-full object-cover pointer-events-none brightness-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Soft, translucent overlay allowing the background video to show through clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#023440]/50 via-[#023440]/30 to-[#023440]/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {badge && (
          <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#023440]/85 text-[#f0edcc] text-[11px] sm:text-xs font-black mb-3 sm:mb-4 border border-[#f0edcc]/50 shadow-md backdrop-blur-sm max-w-full">
            {badge}
          </div>
        )}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading drop-shadow-[0_2px_14px_rgba(2,52,64,0.95)] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed font-semibold drop-shadow-[0_2px_8px_rgba(2,52,64,0.95)]">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

