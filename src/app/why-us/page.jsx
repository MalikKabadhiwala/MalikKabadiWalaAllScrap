import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import StatsCounter from '@/components/StatsCounter';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { 
  Scale, 
  ShieldCheck, 
  Wallet, 
  Truck, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  MessageCircle, 
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'Why Choose Us | Malik Kabadi Wala All Scrap - Noida',
  description: 'Discover why households, societies, and corporate offices in Noida choose Malik Kabadi Wala All Scrap: 100% accurate digital weighing, instant spot cash/UPI payouts, and zero doorstep pickup fees.',
};

export default function WhyUsPage() {
  const comparisonItems = [
    {
      feature: 'Weighing Scale Accuracy',
      traditional: 'Manipulated manual spring balances with weight cheating (10-25% loss)',
      malik: '100% Certified Electronic Digital Scales weighed right in front of your eyes',
    },
    {
      feature: 'Scrap Rate Transparency',
      traditional: 'Opaque verbal estimates, last-minute deductions, and below-market rates',
      malik: 'Highest market rates published live online with zero hidden cuts',
    },
    {
      feature: 'Payment Method & Speed',
      traditional: 'Excuses, delayed credit, or asking you to wait hours for cash',
      malik: 'Instant spot cash in hand or immediate UPI transfer before scrap is loaded',
    },
    {
      feature: 'Pickup Scheduling',
      traditional: 'Unpredictable street shouting; no scheduled appointments',
      malik: 'Book via Call or WhatsApp for a guaranteed doorstep time slot of your choice',
    },
    {
      feature: 'Doorstep Service Charges',
      traditional: 'Surprise charges demanded for carrying down stairs or cart loading',
      malik: '100% Free Doorstep Visit, Free Inspection, and Zero Loading Charges',
    },
    {
      feature: 'Materials Accepted',
      traditional: 'Cherry-picks only lightweight scrap and refuses heavy or mixed lots',
      malik: 'We buy everything: Iron, Copper, Brass, Aluminium, Batteries, Paper & E-Waste',
    },
  ];

  return (
    <>
      {/* Page Hero Header with Background Video */}
      <PageHeader
        badge={
          <>
            <Scale className="w-4 h-4 text-[#f0edcc]" />
            <span>NOIDA'S #1 TRUSTED SCRAP BUYER</span>
          </>
        }
        title="Why Choose Malik Kabadi Wala All Scrap"
        subtitle="We are transforming the scrap recycling industry across Noida Sector 58, 62, 63, and NCR with certified electronic digital scales, live transparent market rates, and instant spot payment."
      >
        <a
          href="tel:9599122595"
          className="inline-flex items-center space-x-2 bg-[#f0edcc] text-[#023440] hover:bg-white font-black px-6 py-3 rounded-xl transition-all shadow-lg text-sm sm:text-base"
        >
          <Phone className="w-4 h-4 text-[#023440] fill-[#023440]" />
          <span>Call +91 9599122595</span>
        </a>
        <Link
          href="/rates"
          className="inline-flex items-center space-x-2 bg-[#012028] text-[#f0edcc] hover:bg-black font-black px-6 py-3 rounded-xl transition-all shadow-lg border border-[#f0edcc]/50 text-sm sm:text-base"
        >
          <Sparkles className="w-4 h-4 text-[#f0edcc]" />
          <span>View Today's Scrap Rates</span>
        </Link>
      </PageHeader>

      {/* Stats Counter Bar */}
      <StatsCounter />

      {/* Comparison Section: Traditional Cart-Pullers vs Malik Kabadi Wala */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#023440] font-black text-xs uppercase tracking-widest bg-[#f0edcc] py-1.5 px-4 rounded-full inline-block border border-[#023440]/20 mb-3">
              THE HONEST DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023440] font-heading tracking-tight">
              Traditional Cart-Pullers vs. Malik Kabadi Wala
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Compare our modern, transparent scrap pickup standards against traditional unregulated local scrap dealers.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {comparisonItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100 hover:border-[#023440] transition-colors"
              >
                {/* Feature Header */}
                <div className="md:col-span-4 p-5 bg-[#012028] text-white flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f0edcc] text-[#023440] flex items-center justify-center shrink-0 font-black text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-[#f0edcc] font-heading">
                    {item.feature}
                  </h3>
                </div>

                {/* Traditional dealers */}
                <div className="md:col-span-4 p-5 bg-red-50/40 flex items-start space-x-3 text-xs sm:text-sm text-slate-600">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-red-800 block text-xs uppercase tracking-wider mb-1">
                      Traditional Cart-Pullers
                    </span>
                    <p className="leading-relaxed">{item.traditional}</p>
                  </div>
                </div>

                {/* Malik Kabadi Wala */}
                <div className="md:col-span-4 p-5 bg-emerald-50/50 flex items-start space-x-3 text-xs sm:text-sm text-[#023440]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-emerald-800 block text-xs uppercase tracking-wider mb-1">
                      Malik Kabadi Wala All Scrap
                    </span>
                    <p className="leading-relaxed font-semibold">{item.malik}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Scope Notice Box */}
          <div className="max-w-5xl mx-auto mt-10 p-5 sm:p-6 bg-[#f0edcc]/40 rounded-2xl border border-[#dfdbb0] text-sm sm:text-base text-slate-700 leading-relaxed shadow-xs flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-[#023440] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#023440] font-bold">Important Service Scope Notice:</strong> We are strictly a scrap dealer and scrap recycling buyer (iron, copper, brass, batteries, e-waste, scrap appliance metal). We do not perform AC repairs, maintenance, or sales.
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Carousel: Why Choose Us */}
      <WhyChooseUs />

      {/* Customer Reviews & Testimonials Carousel */}
      <Testimonials />

      {/* Call to Action Banner in #023440 & #f0edcc */}
      <section className="py-16 bg-[#023440] text-white border-t border-[#054756]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Ready to Sell Your Scrap with 100% Digital Accuracy?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
            Schedule a free doorstep pickup in Noida Sector 58, 62, 63, or anywhere across NCR. Our pickup team arrives with calibrated digital scales and pays instant cash on the spot.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="tel:9599122595"
              className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-[#f0edcc] hover:bg-white text-[#023440] font-black text-sm sm:text-base transition-colors shadow-lg text-center"
            >
              <Phone className="w-5 h-5 text-[#023440] fill-[#023440]" />
              <span>Call +91 9599122595</span>
            </a>
            <a
              href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20want%20to%20sell%20scrap%20in%20Noida."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-[#023440] font-black text-sm sm:text-base transition-colors shadow-lg text-center"
            >
              <MessageCircle className="w-5 h-5 text-[#023440] fill-[#023440]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#f0edcc]/85 font-medium">
            <span>Bishanpura, Sector 58, Noida</span>
            <span>•</span>
            <span>Mon - Sun: 7:00 AM - 9:00 PM</span>
            <span>•</span>
            <span>Zero Doorstep Pickup Fee</span>
          </div>
        </div>
      </section>
    </>
  );
}

