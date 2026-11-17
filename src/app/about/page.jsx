import WhyChooseUs from '@/components/WhyChooseUs';
import PageHeader from '@/components/PageHeader';
import Logo from '@/components/Logo';
import { Scale, Recycle, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'About Us | Malik Kabadi Wala All Scrap - Bishanpura, Noida Sector 58',
  description: 'Learn about Malik Kabadi Wala All Scrap. Trusted doorstep scrap dealer in Bishanpura, Sector 58, Noida with 100% digital weighing machines and spot cash payment.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header with Background Video */}
      <PageHeader
        badge={
          <>
            <Scale className="w-4 h-4 text-[#f0edcc]" />
            <span>Serving Bishanpura, Noida Sector 58 & NCR</span>
          </>
        }
        title="About Malik Kabadi Wala All Scrap"
        subtitle="Transforming the traditional scrap collection industry into a transparent, digital, and reliable doorstep service."
      />

      {/* Story & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl px-5 py-3.5 inline-flex items-center shadow-md border border-slate-200">
                <Logo variant="light" size="lg" />
              </div>
              <div>
                <span className="text-[#023440] font-black text-xs uppercase tracking-widest block bg-[#f0edcc] py-1 px-3 rounded-full inline-block">
                  OUR STORY & PROMISE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#023440] font-heading leading-tight mt-2">
                Honest Weights. Best Price. Spot Payment.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                For years, selling household scrap meant waiting for unpredictable local cart-pullers who often used manipulated manual balances and offered opaque rates.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <strong className="text-[#023440] font-bold">Malik Kabadi Wala All Scrap</strong> was founded with a singular mission: to bring professional reliability, certified electronic digital weighing scales, and instant spot payment right to the doorstep of homes, apartments, and corporate offices in <strong className="text-[#023440] font-bold">Bishanpura, Sector 58, Noida</strong>.
              </p>

              <div className="p-5 sm:p-6 bg-[#f0edcc]/50 rounded-2xl border border-[#dfdbb0] space-y-2.5 shadow-xs">
                <div className="flex items-center space-x-2.5 font-black text-base sm:text-lg text-[#023440]">
                  <Recycle className="w-5 h-5 text-[#023440] shrink-0" />
                  <span>Responsible Environmental Recycling</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every piece of scrap we purchase is responsibly segregated and directed to authorized metal and paper reprocessing plants, preventing reusable raw materials from ending up in landfills.
                </p>
              </div>

              {/* Service scope note */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed shadow-xs">
                <strong className="text-[#023440] font-bold">Note on Services:</strong> We are strictly a scrap buying business. We buy scrap metals, copper, brass, batteries, e-waste, and scrap appliances (such as old scrap AC units bought for metal salvage). We do not perform AC repairs, maintenance, or sales.
              </div>
            </div>

            {/* Quick Stats & Image Card */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#023440]">
                <img
                  src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80"
                  alt="Metal Scrap Recycling Bishanpura Noida"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#023440]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-black text-[#f0edcc] uppercase tracking-wider">Main Operating Hub</span>
                  <h4 className="text-xl font-bold font-heading mt-1">Bishanpura, Sector 58, Noida</h4>
                  <p className="text-xs text-slate-200 mt-1">Express same-day scrap collection across all sectors</p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                <div className="p-2.5 sm:p-4 rounded-2xl bg-[#f0edcc]/40 border border-[#dfdbb0] text-center shadow-xs">
                  <span className="text-xl sm:text-3xl font-black text-[#023440] font-heading block">850+</span>
                  <span className="text-[11px] sm:text-sm text-[#023440] font-extrabold mt-0.5 sm:mt-1 block">Pickups Done</span>
                </div>
                <div className="p-2.5 sm:p-4 rounded-2xl bg-[#f0edcc]/40 border border-[#dfdbb0] text-center shadow-xs">
                  <span className="text-xl sm:text-3xl font-black text-[#023440] font-heading block">100%</span>
                  <span className="text-[11px] sm:text-sm text-[#023440] font-extrabold mt-0.5 sm:mt-1 block">Digital Weight</span>
                </div>
                <div className="p-2.5 sm:p-4 rounded-2xl bg-[#f0edcc]/40 border border-[#dfdbb0] text-center shadow-xs">
                  <span className="text-xl sm:text-3xl font-black text-[#023440] font-heading block">0 ₹</span>
                  <span className="text-[11px] sm:text-sm text-[#023440] font-extrabold mt-0.5 sm:mt-1 block">Pickup Charges</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us component with ID anchor */}
      <div id="why-us">
        <WhyChooseUs />
      </div>

      {/* Hub Contact Banner in #023440 & #f0edcc */}
      <section className="py-16 bg-[#023440] text-white border-t-2 border-[#f0edcc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Visit or Contact Our Sector 58 Scrap Facility
          </h2>
          <p className="text-xs sm:text-sm text-[#f0edcc]/90 max-w-xl mx-auto mt-2 font-normal">
            You can book a free doorstep pickup or visit our scrap center directly in Bishanpura, Noida.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#f0edcc]" />
              <span>Bishanpura, Sector 58, Noida - 201301</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#f0edcc]" />
              <a href="tel:9599122595" className="hover:text-white font-bold text-[#f0edcc]">
                +91 9599122595
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#f0edcc]" />
              <a href="mailto:am513077@gmail.com" className="hover:text-white">
                am513077@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#f0edcc]" />
              <span>Mon - Sun: 7:00 AM - 9:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
