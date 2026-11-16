import ScrapCategories from '@/components/ScrapCategories';
import HowItWorks from '@/components/HowItWorks';
import PageHeader from '@/components/PageHeader';
import { PackageCheck, ShieldAlert, CheckCircle2, Phone, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Scrap Buying Services in Noida | Malik Kabadi Wala All Scrap',
  description: 'Complete scrap collection services in Noida: metal scrap, copper, brass, iron, paper, e-waste, scrap appliance metal, office dismantling, and factory scrap.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Header with Background Video */}
      <PageHeader
        badge={
          <>
            <PackageCheck className="w-4 h-4 text-[#f0edcc]" />
            <span>Doorstep Collection • Transparent Scales • Spot Cash</span>
          </>
        }
        title="Our Scrap Buying Services"
        subtitle="From single household scrap pickups to multi-ton factory cleanouts in Noida Sector 58, 62, 63, and NCR."
      />

      {/* Scrap Categories */}
      <ScrapCategories />

      {/* Important Clarification Banner in #f0edcc & #023440 */}
      <section className="py-8 bg-[#f0edcc]/50 border-y border-[#dfdbb0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-start space-x-3.5 text-[#023440] text-xs sm:text-sm">
            <ShieldAlert className="w-5 h-5 text-[#023440] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold">Important Service Scope Notice:</strong>
              <p className="text-[#023440]/90 mt-0.5 leading-relaxed">
                <strong>Malik Kabadi Wala All Scrap</strong> is exclusively a scrap collection and recycling business. We purchase all metals, papers, batteries, IT e-waste, and scrap appliance units (including scrap AC bodies and compressors for metal recycling). 
                <span className="font-black underline ml-1">We do not provide AC repair, AC installation, servicing, or gas refilling.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Corporate & Society Scrap Drive Section in #023440 & #f0edcc */}
      <section className="py-16 bg-white border-t border-[#f0edcc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#023440] font-black text-xs uppercase tracking-widest block mb-2 bg-[#f0edcc] py-1 px-3 rounded-full inline-block">
                BULK COMMERCIAL SOLUTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-[#023440] font-heading mt-2">
                Office Dismantling & Society Scrap Drives
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Relocating your corporate office or clearing out old IT assets? We provide turnkey dismantling for workstations, server racks, false ceilings, aluminium partition frames, and heavy electrical cables.
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-start space-x-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#023440] shrink-0 mt-0.5" />
                  <span><strong>Society Cleanout Drives:</strong> Weekend scrap collection camps in high-rise apartments with digital scales.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#023440] shrink-0 mt-0.5" />
                  <span><strong>Office Decommissioning:</strong> Safe dismantling and loading with zero damage to rented floors.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#023440] shrink-0 mt-0.5" />
                  <span><strong>Formal GST Invoices & Slips:</strong> Certified weighbridge slips and authorized scrap receipt.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:9599122595"
                  className="px-6 py-3.5 rounded-xl bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-black text-xs flex items-center justify-center space-x-2 transition-all shadow-md text-center"
                >
                  <Phone className="w-4 h-4 text-[#f0edcc]" />
                  <span>Call: 9599122595</span>
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#f0edcc] hover:bg-[#dfdbb0] text-[#023440] font-black text-xs flex items-center justify-center space-x-2 transition-all shadow-md border border-[#023440]/20 text-center"
                >
                  <Calendar className="w-4 h-4 text-[#023440]" />
                  <span>Schedule Site Visit</span>
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#023440]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Office and Factory Scrap Dismantling Noida"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023440]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-black text-[#f0edcc] uppercase tracking-wider block">Noida Sector 63 & 58 Industrial Hub</span>
                <h4 className="text-xl font-bold font-heading mt-1 text-white">Prompt On-Site Inspection & Immediate Advance</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
