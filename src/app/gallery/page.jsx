import { Image as ImageIcon, CheckCircle2, Phone, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Scrap Recycling Gallery | Malik Kabadi Wala All Scrap Noida',
  description: 'View photos of our scrap collection operations, certified electronic digital scales, scrap metal sorting, paper recycling, and doorstep pickup fleet in Noida.',
};

const galleryImages = [
  {
    title: 'Certified Digital Weighing Scale',
    category: 'Doorstep Weighing',
    desc: 'Calibrated electronic digital weighing balances with glowing LED display brought right to your doorstep for 100% fair and transparent weight measurement.',
    image: '/images/scrap/digital-scale-weighing.jpg'
  },
  {
    title: 'Copper Scrap & Armature Wire',
    category: 'Copper Scrap',
    desc: 'High-grade electrical copper wire, heavy motor armature windings, copper cables, and clean industrial copper plumbing pipes.',
    image: '/images/scrap/copper-scrap.jpg'
  },
  {
    title: 'Ferrous Metal & Heavy Iron Scrap',
    category: 'Iron Scrap',
    desc: 'Heavy structural iron beams, building construction TMT rods, cast iron pipes, old grills, and industrial machinery iron scrap.',
    image: '/images/scrap/iron-scrap.jpg'
  },
  {
    title: 'Cardboard & Paper Packaging Bales',
    category: 'Paper Recycling',
    desc: 'Clean corrugated shipping cartons, compressed cardboard boxes, old newspapers, magazines, and commercial office records.',
    image: '/images/scrap/cardboard-scrap.jpg'
  },
  {
    title: 'Electronic E-Waste & Computers',
    category: 'E-Waste Disposal',
    desc: 'Decommissioned desktop computer CPUs, broken laptops, green circuit motherboards, UPS units, and commercial IT server hardware.',
    image: '/images/scrap/category-ewaste-scrap.jpg'
  },
  {
    title: 'Corporate Office Scrap Dismantling',
    category: 'Commercial Projects',
    desc: 'Complete office floor clearance, modular workstation cabin dismantling, aluminium partition panels, and commercial metal furniture.',
    image: '/images/scrap/category-office-dismantling.jpg'
  },
  {
    title: 'Industrial Heavy Machinery Dismantling',
    category: 'Factory Scrap',
    desc: 'Specialized crane and gas cutter dismantling for heavy factory machinery, obsolete plant equipment, lathe scrap, and steel sheds.',
    image: '/images/scrap/category-factory-scrap.jpg'
  },
  {
    title: 'Doorstep Collection Fleet in Noida',
    category: 'Logistics Fleet',
    desc: 'Mobile collection vans serving Bishanpura, Sector 58, 62, 63, and all residential societies across Noida & NCR daily.',
    image: '/images/testimonials/truck-pickup.jpg'
  },
  {
    title: 'Inverter & Automotive Batteries',
    category: 'Battery Scrap',
    desc: 'Old lead-acid inverter batteries, car and motorcycle batteries, and industrial UPS battery banks for eco-friendly certified recycling.',
    image: '/images/scrap/battery-scrap.jpg'
  }
];

export default function GalleryPage() {
  return (
    <>
      {/* Header with Background Video */}
      <PageHeader
        badge={
          <>
            <ImageIcon className="w-4 h-4 text-[#f0edcc]" />
            <span>Operations & Recycling Facilities</span>
          </>
        }
        title="Our Scrap Recycling Gallery"
        subtitle="A visual overview of our certified electronic digital weighing scales, scrap segregation yard, and doorstep collection fleet across Noida."
      />

      {/* Gallery Grid (3 Rows x 3 Columns on Desktop, 2 Columns on Mobile) */}
      <section className="py-10 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm sm:shadow-md hover:border-[#023440] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Image */}
                <div className="relative h-28 xs:h-36 sm:h-56 lg:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023440]/80 via-transparent to-transparent"></div>
                  <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#f0edcc] text-[#023440] text-[9px] sm:text-xs font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#dfdbb0] shadow-sm uppercase tracking-wider truncate max-w-[85%]">
                    {item.category}
                  </span>
                </div>

                {/* Card Content with Responsive Scaling */}
                <div className="p-3 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-black text-[#023440] text-xs sm:text-xl lg:text-2xl font-heading leading-tight line-clamp-1 sm:line-clamp-2 group-hover:text-[#054756] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm lg:text-base text-slate-700 leading-relaxed font-normal mt-1.5 sm:mt-3 line-clamp-2 sm:line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <span className="text-[10px] sm:text-xs font-bold text-[#023440] flex items-center space-x-1 sm:space-x-1.5 truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">100% Digital Weighing</span>
                    </span>
                    <a
                      href="tel:9599122595"
                      className="text-[10px] sm:text-xs font-black text-[#023440] hover:text-[#054756] underline text-right sm:text-left shrink-0"
                    >
                      Book Pickup
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom booking CTA banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#023440] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl border border-[#f0edcc]/20">
            <div>
              <span className="text-xs font-black text-[#f0edcc] uppercase tracking-wider block mb-1">
                FAST NOIDA DOORSTEP SERVICE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Want to schedule a doorstep scrap pickup?
              </h3>
              <p className="text-sm sm:text-base text-slate-200 mt-2 font-normal leading-relaxed">
                Our certified team arrives at your location with calibrated digital weighing balances within 30–90 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:9599122595"
                className="px-6 py-3.5 rounded-xl bg-[#f0edcc] text-[#023440] font-black text-sm sm:text-base hover:bg-white transition-colors shadow-lg inline-flex items-center justify-center space-x-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#023440] fill-[#023440]" />
                <span>Call: 9599122595</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-[#012028] text-[#f0edcc] font-extrabold text-sm sm:text-base hover:bg-black transition-colors shadow-lg border border-[#f0edcc]/40 text-center"
              >
                Book Free Pickup
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
