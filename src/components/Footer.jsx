import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Scale, ShieldCheck, HeartHandshake, CheckCircle2, MessageCircle, AlertCircle, Truck, Sparkles } from 'lucide-react';

const movingHighlights = [
  {
    icon: Scale,
    title: '100% Accurate Digital Weighing',
    badge: 'Certified Scales',
  },
  {
    icon: ShieldCheck,
    title: 'Instant Spot Cash & UPI Payment',
    badge: 'Immediate Settlement',
  },
  {
    icon: Truck,
    title: 'Free Doorstep Scrap Pickup',
    badge: 'Zero Hidden Charges',
  },
  {
    icon: Sparkles,
    title: 'Best Market Scrap Price',
    badge: 'Noida Sector 58 Hub',
  },
  {
    icon: CheckCircle2,
    title: 'We Buy All Recyclables',
    badge: 'Iron, Copper, Brass, Batteries & E-Waste',
  },
  {
    icon: MapPin,
    title: 'Commercial Office Scrap Dismantling',
    badge: 'Same-Day Bulk Service',
  },
  {
    icon: Phone,
    title: 'Quick Doorstep Scrap Booking',
    badge: '+91 9599122595',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted by 850+ Noida Households',
    badge: 'Verified 5-Star Reviews',
  },
];

export default function Footer() {
  return (
    <>
      {/* Top Feature Bar with White Background */}
      <section className="bg-white py-12 sm:py-16 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex items-start space-x-4 sm:space-x-5 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:border-[#023440] hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#023440] text-[#f0edcc] flex items-center justify-center shrink-0 shadow-sm">
                <Scale className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#023440] text-lg sm:text-xl font-heading leading-snug">Certified Digital Scales</h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1.5 sm:mt-2 leading-relaxed font-normal">
                  100% transparent electronic weighing right at your doorstep. No manual spring cheating.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-5 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:border-[#023440] hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#023440] text-[#f0edcc] flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#023440] text-lg sm:text-xl font-heading leading-snug">Instant Cash & Digital UPI Payout</h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1.5 sm:mt-2 leading-relaxed font-normal">
                  Receive immediate settlement on the spot via Cash, Google Pay, PhonePe, or Bank Transfer.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-5 bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:border-[#023440] hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#023440] text-[#f0edcc] flex items-center justify-center shrink-0 shadow-sm">
                <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#023440] text-lg sm:text-xl font-heading leading-snug">Zero Doorstep Pickup Fee</h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1.5 sm:mt-2 leading-relaxed font-normal">
                  Free inspection, free doorstep visit, and free loading across Noida Sector 58 and NCR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Links & Information */}
      <footer className="bg-[#023440] text-slate-200 pb-12 border-t border-[#054756]">
        {/* Continuous Moving Text Marquee (Right to Left) */}
        <div className="w-full bg-[#01222b] border-b border-[#054756] py-3.5 overflow-hidden relative ticker-wrapper select-none">
          {/* Subtle edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-[#01222b] to-transparent w-12 sm:w-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-[#01222b] to-transparent w-12 sm:w-20 pointer-events-none" />

          <div className="ticker-content flex items-center space-x-8 text-xs sm:text-sm">
            {movingHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`m1-${idx}`} className="flex items-center space-x-3 shrink-0">
                  <span className="w-6 h-6 rounded-md bg-[#023440] border border-[#f0edcc]/30 flex items-center justify-center text-[#f0edcc] shrink-0 shadow-xs">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-white font-bold tracking-wide whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-[#023440] bg-[#f0edcc] px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-xs">
                    {item.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f0edcc]/50 mx-2 shrink-0" />
                </div>
              );
            })}

            {/* Second copy for seamless infinite loop */}
            {movingHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`m2-${idx}`} className="flex items-center space-x-3 shrink-0">
                  <span className="w-6 h-6 rounded-md bg-[#023440] border border-[#f0edcc]/30 flex items-center justify-center text-[#f0edcc] shrink-0 shadow-xs">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-white font-bold tracking-wide whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-[#023440] bg-[#f0edcc] px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-xs">
                    {item.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f0edcc]/50 mx-2 shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white rounded-2xl px-4 py-2 inline-flex items-center shadow-lg border border-slate-200 hover:scale-[1.02] transition-transform">
                <img 
                  src="/images/malik-logo.png" 
                  alt="Malik Kabadi Wala All Scrap" 
                  className="h-12 sm:h-14 w-auto object-contain"
                  style={{ maxHeight: '56px', width: 'auto' }}
                  height={56}
                />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              <strong>Malik Kabadi Wala All Scrap</strong> is Noida’s trusted doorstep scrap collection and recycling service based in Bishanpura, Sector 58. We provide accurate electronic digital weighing and instant spot cash payouts.
            </p>
            <div className="p-4 bg-[#012028] rounded-2xl border border-[#f0edcc]/30 text-xs sm:text-sm text-[#f0edcc] flex items-start space-x-2 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-[#f0edcc] shrink-0 mt-0.5" />
              <span><strong>Notice:</strong> We are strictly a scrap dealer and scrap buyer (iron, copper, paper, e-waste, appliance scrap metal). We do not provide AC repair, sales, or servicing.</span>
            </div>
          </div>

          {/* Col 2: Scrap Items We Buy */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-black text-[#f0edcc] uppercase tracking-wider font-heading">
              Scrap Items We Buy
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-200">
              <li><Link href="/rates" className="hover:text-white transition-colors">Iron & Steel Scrap</Link></li>
              <li><Link href="/rates" className="hover:text-white transition-colors">Copper Wire & Motor Winding</Link></li>
              <li><Link href="/rates" className="hover:text-white transition-colors">Brass Utensils & Fittings</Link></li>
              <li><Link href="/rates" className="hover:text-white transition-colors">Newspapers & Packaging Cartons</Link></li>
              <li><Link href="/rates" className="hover:text-white transition-colors">Inverter & Automotive Batteries</Link></li>
              <li><Link href="/rates" className="hover:text-white transition-colors">E-Waste, Laptops & Desktop CPUs</Link></li>
              <li><Link href="/rates" className="hover:text-white transition-colors">Old Appliances & AC Units as Scrap Metal</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Office & Factory Scrap Dismantling</Link></li>
            </ul>
          </div>

          {/* Col 3: Service Localities */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-black text-[#f0edcc] uppercase tracking-wider font-heading">
              Noida Service Areas
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-200">
              <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#f0edcc] shrink-0" /><span>Bishanpura, Sector 58 (Main Hub)</span></li>
              <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#f0edcc] shrink-0" /><span>Sector 59, 60, 61 & 62</span></li>
              <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#f0edcc] shrink-0" /><span>Sector 63 (Industrial Area Bulk)</span></li>
              <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#f0edcc] shrink-0" /><span>Sector 55, 56 & 57</span></li>
              <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#f0edcc] shrink-0" /><span>Sector 18, 15, 16 & 27</span></li>
              <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#f0edcc] shrink-0" /><span>Noida Extension & Gaur City</span></li>
              <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#f0edcc] shrink-0" /><span>Indirapuram & Vaishali</span></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-black text-[#f0edcc] uppercase tracking-wider font-heading">
              Contact Details
            </h4>
            <div className="space-y-3 text-sm sm:text-base text-slate-200">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#f0edcc] shrink-0 mt-0.5" />
                <span>Bishanpura, Sector 58, Noida, Uttar Pradesh - 201301</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f0edcc] shrink-0" />
                <a href="tel:9599122595" className="hover:text-white font-extrabold text-[#f0edcc] text-base sm:text-lg">
                  +91 9599122595
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f0edcc] shrink-0" />
                <a href="mailto:am513077@gmail.com" className="hover:text-white">
                  am513077@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#f0edcc] shrink-0" />
                <span>Monday - Sunday: 7:00 AM - 9:00 PM</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20want%20to%20sell%20scrap%20in%20Noida."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl bg-[#f0edcc] hover:bg-white text-[#023440] font-black text-sm sm:text-base transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-[#023440] fill-[#023440]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - with pb-20 on mobile to clear MobileStickyBar */}
        <div className="pt-8 pb-20 md:pb-0 border-t border-[#054756] flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#f0edcc]/85 font-medium gap-3">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Malik Kabadi Wala All Scrap. All rights reserved. Bishanpura, Noida Sector 58.</p>
          <div className="flex flex-wrap items-center justify-center space-x-3 sm:space-x-4 mt-2 sm:mt-0 text-[11px] sm:text-xs">
            <span>Eco-Friendly Recycling</span>
            <span>•</span>
            <span>Digital Weighing Guarantee</span>
            <span>•</span>
            <span>Doorstep Service</span>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}
