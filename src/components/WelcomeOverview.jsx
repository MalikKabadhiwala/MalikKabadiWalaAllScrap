import Link from 'next/link';
import { Scale, Wallet, Truck, Clock, CheckCircle2, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

export default function WelcomeOverview() {
  const highlights = [
    {
      title: 'Certified Digital Scales',
      desc: '100% accurate, government-calibrated electronic weighing machines brought to your doorstep.',
      icon: Scale,
    },
    {
      title: 'Instant Cash or UPI Settlement',
      desc: 'Immediate payment right after weighing via Cash or UPI (Google Pay, PhonePe, Paytm).',
      icon: Wallet,
    },
    {
      title: 'Zero Pickup & Loading Charges',
      desc: '100% free doorstep collection. No inspection fees, transport cuts, or labor deductions.',
      icon: Truck,
    },
    {
      title: 'Express 30-Minute Noida Dispatch',
      desc: 'Based in Bishanpura Sector 58, our vans reach Sector 58, 59, 60, 61, 62 & 63 rapidly.',
      icon: Clock,
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#f0edcc]" id="welcome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Split: Text & Main Intro Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left 7 Cols: Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#f0edcc] border border-[#023440]/20 px-3.5 py-1.5 rounded-full text-xs font-black text-[#023440]">
              <span className="w-2 h-2 rounded-full bg-[#023440] animate-pulse"></span>
              <span>WELCOME TO MALIK KABADI WALA ALL SCRAP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#023440] tracking-tight leading-tight font-heading">
              Your Trusted Doorstep Scrap Buyer in <span className="underline decoration-[#f0edcc] decoration-4 underline-offset-6">Noida Sector 58</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed">
              <strong className="font-bold text-[#023440]">Malik Kabadi Wala All Scrap</strong> provides professional, reliable, and doorstep scrap collection services across Bishanpura, Noida Sector 58, and all surrounding areas of Noida and the National Capital Region (NCR).
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Whether you are clearing out household metal junk, selling old newspapers and packaging cartons, disposing of obsolete office IT hardware, or cleaning out a warehouse, we make the entire process simple, transparent, and profitable for you.
            </p>

            {/* Scope Clarification Note */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#f0edcc]/40 border border-[#f0edcc] space-y-2">
              <div className="flex items-center space-x-2 text-[#023440] font-bold text-base sm:text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#023440] shrink-0" />
                <span>Exclusively Dedicated to Scrap Recycling</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We purchase all recyclable materials: iron, copper, brass, aluminium, paper, cardboard, batteries, e-waste, and scrap domestic appliances (including scrap AC bodies purely for metal salvage). <em className="font-medium text-slate-800">We do not provide AC repair, sales, or servicing.</em>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/rates"
                className="inline-flex items-center justify-center bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-bold px-7 py-4 rounded-xl transition-all shadow-md text-base"
              >
                <span>Sell Scrap Online</span>
              </Link>

              <a
                href="tel:9599122595"
                className="inline-flex items-center space-x-2 bg-[#f0edcc] hover:bg-[#dfdbb0] text-[#023440] font-bold px-7 py-4 rounded-xl transition-all text-base border border-[#023440]/20 shadow-sm"
              >
                <Phone className="w-5 h-5 text-[#023440]" />
                <span>Call: 9599122595</span>
              </a>
            </div>
          </div>

          {/* Right 5 Cols: Visual Card with Official Logo Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#023440]">
              <img
                src="/images/scrap/general-iron-scrap.jpg"
                alt="Metal Scrap Collection in Noida"
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#023440]/90 rounded-2xl px-3 py-2 shadow-xl border border-[#f0edcc]/30 backdrop-blur-md">
                <Logo variant="dark" size="sm" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 4 Feature Cards in #023440 and #f0edcc */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f0edcc]/25 rounded-2xl p-6 border border-[#f0edcc] hover:border-[#023440] transition-all flex flex-col justify-between hover:shadow-xl card-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#023440] text-[#f0edcc] flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#023440] text-base sm:text-lg mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
