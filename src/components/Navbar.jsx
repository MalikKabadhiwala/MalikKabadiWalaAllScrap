'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Scale,
  Recycle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setServicesDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close when pathname changes
  useEffect(() => {
    setServicesDropdown(false);
    setMobileOpen(false);
  }, [pathname]);

  const serviceCategories = [
    { title: 'Iron & Heavy Steel Scrap', href: '/services#metal-scrap' },
    { title: 'Copper Wire & Motor Scrap', href: '/services#metal-scrap' },
    { title: 'Brass Utensils & Castings', href: '/services#metal-scrap' },
    { title: 'Aluminium Scrap & Alloys', href: '/services#metal-scrap' },
    { title: 'Inverter & Vehicle Batteries', href: '/services#battery-scrap' },
    { title: 'Newspaper & Carton Scrap', href: '/services#paper-scrap' },
    { title: 'E-Waste, Laptops & Desktop CPUs', href: '/services#ewaste-scrap' },
    { title: 'Domestic Appliance Metal Scrap', href: '/services#appliances-scrap' },
    { title: 'Office IT & Desk Dismantling', href: '/services#office-dismantling' },
    { title: 'Factory & Heavy Industrial Scrap', href: '/services#factory-scrap' },
  ];

  const pickupLocalities = [
    { title: 'Noida Sector 58 (Main Hub)', href: '/contact?area=sector-58' },
    { title: 'Noida Sector 62', href: '/contact?area=sector-62' },
    { title: 'Noida Sector 63 (Industrial)', href: '/contact?area=sector-63' },
    { title: 'Noida Sector 59 & 60', href: '/contact?area=sector-59' },
    { title: 'Noida Sector 55, 56 & 57', href: '/contact?area=sector-55' },
    { title: 'Noida Sector 15 & 18', href: '/contact?area=sector-18' },
    { title: 'Noida Sector 27 & 29', href: '/contact?area=sector-27' },
    { title: 'Noida Extension / Gaur City', href: '/contact?area=noida-extension' },
    { title: 'Greater Noida West', href: '/contact?area=greater-noida' },
    { title: 'Indirapuram & Vaishali', href: '/contact?area=indirapuram' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg font-sans">
      {/* 1. TOP UTILITY BAR (Deep Tone of #023440) */}
      <div className="bg-[#012028] text-[#f0edcc] text-xs py-2 border-b border-[#023440]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Top Left: Phone & Email */}
          <div className="flex items-center space-x-5 text-[11.5px] sm:text-xs">
            <a 
              href="tel:9599122595" 
              className="flex items-center space-x-1.5 text-[#f0edcc] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f0edcc]" />
              <span className="font-semibold">+91 9599122595</span>
            </a>
            <a 
              href="mailto:am513077@gmail.com" 
              className="hidden sm:flex items-center space-x-1.5 text-[#f0edcc]/90 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#f0edcc]" />
              <span>am513077@gmail.com</span>
            </a>
          </div>

          {/* Top Right: Location Address */}
          <div className="flex items-center space-x-1.5 text-[11.5px] sm:text-xs text-[#f0edcc]/90">
            <MapPin className="w-3.5 h-3.5 text-[#f0edcc] shrink-0" />
            <span>Bishanpura, Noida Sector 58, U.P.</span>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR (#023440) */}
      <div className="bg-[#023440] border-b border-[#054756] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 relative">
          
          {/* Logo Badge Card */}
          <Link href="/" className="flex items-center group">
            <div className="bg-[#f0edcc] rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-md inline-flex items-center space-x-2 border border-[#dfdbb0] hover:scale-[1.02] transition-transform">
              <img 
                src="/images/malik-navbar-logo.svg" 
                alt="Malik Kabadi Wala All Scrap" 
                className="h-8 sm:h-10 w-auto object-contain"
                style={{ maxHeight: '40px', width: 'auto' }}
                height={40}
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-sm font-bold text-white tracking-wide">
            <Link 
              href="/" 
              className={`hover:text-[#f0edcc] transition-colors ${pathname === '/' ? 'text-[#f0edcc] underline underline-offset-8 decoration-2 decoration-[#f0edcc]' : ''}`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-[#f0edcc] transition-colors ${pathname === '/about' ? 'text-[#f0edcc] underline underline-offset-8 decoration-2 decoration-[#f0edcc]' : ''}`}
            >
              About Us
            </Link>

            {/* Services Dropdown Mega Menu Trigger */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesDropdown(prev => !prev);
                }}
                className={`flex items-center space-x-1.5 py-2 hover:text-[#f0edcc] transition-colors focus:outline-none cursor-pointer ${servicesDropdown ? 'text-[#f0edcc]' : ''}`}
                aria-expanded={servicesDropdown}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#f0edcc]' : ''}`} />
              </button>

              {/* Mega Dropdown Menu Bar (Opens below navbar matching reference styling) */}
              {servicesDropdown && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[94vw] max-w-5xl lg:max-w-6xl bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-6 sm:p-8 z-50 text-slate-800 animate-fade-in before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 gap-6 md:gap-8">
                    
                    {/* Left Panel: Scrap Collection Services */}
                    <div className="md:pr-6">
                      <div className="flex items-center space-x-3.5 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#023440]/10 flex items-center justify-center text-[#023440] shrink-0 shadow-xs">
                          <Scale className="w-6 h-6 text-[#023440]" />
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-black text-[#023440] font-heading">
                            Scrap Collection Services
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium">
                            Doorstep scrap collection & digital weighing
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-1">
                        {serviceCategories.map((service, idx) => (
                          <Link
                            key={`srv-${idx}`}
                            href={service.href}
                            onClick={() => setServicesDropdown(false)}
                            className="flex items-center space-x-2.5 text-sm sm:text-base text-slate-800 hover:text-[#023440] font-bold py-1 transition-colors group"
                          >
                            <Recycle className="w-4 h-4 text-[#023440] group-hover:scale-110 transition-transform shrink-0" />
                            <span className="truncate">{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Panel: Noida Pickup Locations */}
                    <div className="pt-6 md:pt-0 md:pl-6">
                      <div className="flex items-center space-x-3.5 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#f0edcc] flex items-center justify-center text-[#023440] shrink-0 shadow-xs">
                          <MapPin className="w-6 h-6 text-[#023440]" />
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-black text-[#023440] font-heading">
                            Noida Scrap Pickup Areas
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium">
                            Fast doorstep pickup across Noida & NCR
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-1">
                        {pickupLocalities.map((locality, idx) => (
                          <Link
                            key={`loc-${idx}`}
                            href={locality.href}
                            onClick={() => setServicesDropdown(false)}
                            className="flex items-center space-x-2.5 text-sm sm:text-base text-slate-800 hover:text-[#023440] font-bold py-1 transition-colors group"
                          >
                            <MapPin className="w-4 h-4 text-[#023440] group-hover:scale-110 transition-transform shrink-0" />
                            <span className="truncate">{locality.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Mega Menu Bottom Bar */}
                  <div className="mt-7 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-700 gap-3 bg-slate-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-4 rounded-b-2xl">
                    <div className="flex items-center space-x-2 text-[#023440] font-semibold text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#023440] shrink-0" />
                      <span>Certified Electronic Scales • Immediate Spot Cash & UPI • Free Doorstep Pickup</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a 
                        href="tel:9599122595" 
                        className="font-black text-sm sm:text-base text-[#023440] hover:underline flex items-center space-x-1.5"
                      >
                        <Phone className="w-4 h-4 text-[#023440]" />
                        <span>+91 9599122595</span>
                      </a>
                      <Link 
                        href="/rates"
                        onClick={() => setServicesDropdown(false)}
                        className="bg-[#023440] text-[#f0edcc] hover:bg-[#054756] font-extrabold px-4 py-2 rounded-xl transition-colors text-xs sm:text-sm shadow-sm"
                      >
                        View Scrap Items
                      </Link>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <Link 
              href="/gallery" 
              className={`hover:text-[#f0edcc] transition-colors ${pathname === '/gallery' ? 'text-[#f0edcc] underline underline-offset-8 decoration-2 decoration-[#f0edcc]' : ''}`}
            >
              Gallery
            </Link>

            <Link 
              href="/why-us" 
              className={`hover:text-[#f0edcc] transition-colors ${pathname === '/why-us' ? 'text-[#f0edcc] underline underline-offset-8 decoration-2 decoration-[#f0edcc]' : ''}`}
            >
              Why Us
            </Link>

            <Link 
              href="/contact" 
              className={`hover:text-[#f0edcc] transition-colors ${pathname === '/contact' ? 'text-[#f0edcc] underline underline-offset-8 decoration-2 decoration-[#f0edcc]' : ''}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Buttons in #f0edcc with #023440 text */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Sell Scrap Button */}
            <Link
              href="/rates"
              className="bg-[#f0edcc] text-[#023440] hover:bg-white font-extrabold px-4 py-2 rounded-md transition-all shadow-md text-sm"
            >
              Sell Scrap
            </Link>

            {/* Call Now Button */}
            <a
              href="tel:9599122595"
              className="bg-[#f0edcc] text-[#023440] hover:bg-white font-extrabold px-4 py-2 rounded-md transition-all shadow-md text-sm flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#023440] fill-[#023440]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg text-[#f0edcc] hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#023440] border-t border-[#054756] px-4 py-5 space-y-3 text-white animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 px-3 rounded-lg hover:bg-[#054756] hover:text-[#f0edcc] font-bold text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 px-3 rounded-lg hover:bg-[#054756] hover:text-[#f0edcc] font-bold text-sm"
          >
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#054756] hover:text-[#f0edcc] font-bold text-sm text-left"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#f0edcc]' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3.5 pr-2.5 py-3 space-y-4 bg-[#012028] rounded-xl mt-1 text-sm border border-[#054756]">
                <div>
                  <p className="font-extrabold text-[#f0edcc] uppercase tracking-wider text-xs sm:text-sm mb-2 flex items-center space-x-1.5">
                    <Scale className="w-4 h-4 text-[#f0edcc]" />
                    <span>Scrap Collection Services</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-slate-200">
                    {serviceCategories.map((s, idx) => (
                      <Link
                        key={`mob-s-${idx}`}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-[#f0edcc] py-1 text-xs sm:text-sm font-medium truncate"
                      >
                        • {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#054756]">
                  <p className="font-extrabold text-[#f0edcc] uppercase tracking-wider text-xs sm:text-sm mb-2 flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-[#f0edcc]" />
                    <span>Noida Scrap Pickup Areas</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-slate-200">
                    {pickupLocalities.map((l, idx) => (
                      <Link
                        key={`mob-l-${idx}`}
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-[#f0edcc] py-1 text-xs sm:text-sm font-medium truncate"
                      >
                        • {l.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 px-3 rounded-lg hover:bg-[#054756] hover:text-[#f0edcc] font-bold text-sm"
          >
            Gallery
          </Link>
          <Link
            href="/why-us"
            onClick={() => setMobileOpen(false)}
            className={`block py-2.5 px-3 rounded-lg hover:bg-[#054756] hover:text-[#f0edcc] font-bold text-sm ${pathname === '/why-us' ? 'text-[#f0edcc] bg-[#054756]' : ''}`}
          >
            Why Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 px-3 rounded-lg hover:bg-[#054756] hover:text-[#f0edcc] font-bold text-sm"
          >
            Contact Us
          </Link>

          {/* Mobile Buttons */}
          <div className="pt-3 border-t border-[#054756] grid grid-cols-2 gap-3">
            <Link
              href="/rates"
              onClick={() => setMobileOpen(false)}
              className="text-center py-2.5 px-3 rounded-md bg-[#f0edcc] text-[#023440] font-extrabold text-xs shadow-md"
            >
              Sell Scrap
            </Link>
            <a
              href="tel:9599122595"
              className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-md bg-[#f0edcc] text-[#023440] font-extrabold text-xs shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#023440] fill-[#023440]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

