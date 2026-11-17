import RatesTable from '@/components/RatesTable';
import LiveRatesTicker from '@/components/LiveRatesTicker';
import PageHeader from '@/components/PageHeader';
import { Scale, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Scrap Materials We Buy in Noida | Malik Kabadi Wala All Scrap',
  description: 'Doorstep scrap pickup in Noida for iron, copper, brass, aluminium, paper, cardboard, batteries, and e-waste. Certified digital weighing scale.',
};

export default function RatesPage() {
  return (
    <>
      {/* Page Header with Background Video */}
      <PageHeader
        badge={
          <>
            <Scale className="w-4 h-4 text-[#f0edcc]" />
            <span>Honest Weighing • Transparent Valuation • Spot Payout</span>
          </>
        }
        title="Scrap Materials We Buy in Noida"
        subtitle="Honest, competitive prices for all household, commercial, and industrial scrap materials. We bring certified digital weighing scales directly to your doorstep."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#f0edcc]">
          <span className="flex items-center bg-[#023440]/90 px-3.5 py-1.5 rounded-lg border border-[#f0edcc]/50 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-[#f0edcc] mr-1.5" /> 100% Digital Weighing
          </span>
          <span className="flex items-center bg-[#023440]/90 px-3.5 py-1.5 rounded-lg border border-[#f0edcc]/50 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-[#f0edcc] mr-1.5" /> Instant Spot UPI / Cash
          </span>
          <span className="flex items-center bg-[#023440]/90 px-3.5 py-1.5 rounded-lg border border-[#f0edcc]/50 shadow-md">
            <CheckCircle2 className="w-4 h-4 text-[#f0edcc] mr-1.5" /> Zero Doorstep Charges
          </span>
        </div>
      </PageHeader>

      {/* Live Ticker */}
      <LiveRatesTicker />

      {/* Main Full Rates Table */}
      <RatesTable isFullPage={true} />

      {/* Bulk Pricing Notice in #023440 & #f0edcc */}
      <section className="py-12 bg-[#023440] text-white border-t-2 border-[#f0edcc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading text-[#f0edcc]">Have Scrap Above 300 KG or Factory Lot?</h3>
            <p className="text-xs text-slate-200 mt-1">
              We offer exclusive wholesale premium payouts for bulk industrial scrap, office dismantling, and society cleanout drives.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:9599122595"
              className="px-6 py-3 rounded-xl bg-[#f0edcc] hover:bg-white text-[#023440] font-black text-xs transition-colors shadow-md inline-flex items-center justify-center space-x-1.5 text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#023440]" />
              <span>Call: 9599122595</span>
            </a>
            <a
              href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20have%20bulk%20scrap%20in%20Noida."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#f0edcc] text-[#023440] font-black text-xs transition-colors shadow-md inline-flex items-center justify-center space-x-1.5 text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#023440]" />
              <span>WhatsApp</span>
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
