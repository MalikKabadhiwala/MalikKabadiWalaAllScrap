import Hero from '@/components/Hero';
import LiveRatesTicker from '@/components/LiveRatesTicker';
import ScrapMaterialCards from '@/components/ScrapMaterialCards';
import GeneralScrapSection from '@/components/GeneralScrapSection';
import WelcomeOverview from '@/components/WelcomeOverview';
import ScrapCategories from '@/components/ScrapCategories';
import RatesTable from '@/components/RatesTable';
import HowItWorks from '@/components/HowItWorks';
import VideoTestimonials from '@/components/VideoTestimonials';
import StatsCounter from '@/components/StatsCounter';
import WhyChooseUs from '@/components/WhyChooseUs';
import CoverageAreas from '@/components/CoverageAreas';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import { Phone, Scale } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Reference Video & Styling in #023440 & #f0edcc */}
      <Hero />

      {/* 2. Live Market Rates Scrolling Ticker */}
      <LiveRatesTicker />

      {/* 2.5. Featured Scrap Material Cards (Copper, Iron, Brass, Aluminium, etc.) */}
      <ScrapMaterialCards />

      {/* 2.6. General Scrap Services (Sell Your Scrap at the Best Price) */}
      <GeneralScrapSection />

      {/* 3. Welcome & Company Overview Section */}
      <WelcomeOverview />

      {/* 4. Scrap Categories We Buy */}
      <ScrapCategories />

      {/* 6. Daily Live Scrap Rates Preview */}
      <RatesTable isFullPage={false} />

      {/* 7. How It Works (3 Steps) */}
      <HowItWorks />

      {/* 7.5. Customer Video Testimonials */}
      <VideoTestimonials />

      {/* 7.6. Live Company Stats Counter (Animated on scroll into view) */}
      <StatsCounter />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Service Localities & Pincode Checker */}
      <CoverageAreas />

      {/* 10. Customer Reviews & Testimonials */}
      <Testimonials />

      {/* 11. FAQs */}
      <FaqSection />

      {/* 12. Bottom Conversion Banner in #023440 & #f0edcc */}
      <section className="py-16 bg-[#023440] text-white relative overflow-hidden border-t-2 border-[#f0edcc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f0edcc] text-[#023440] text-xs font-black mb-4 shadow-sm">
            <Scale className="w-4 h-4 text-[#023440]" />
            <span>100% Free Doorstep Collection • Zero Hidden Deductions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading max-w-3xl mx-auto text-white">
            Ready to Turn Your Scrap into <span className="text-[#f0edcc]">Instant Cash?</span>
          </h2>
          <p className="text-[#f0edcc]/90 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Call our Bishanpura, Sector 58 hub or send a message on WhatsApp. Our verified team arrives with certified digital weighing machines within 30-90 minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:9599122595"
              className="px-8 py-4 rounded-xl bg-[#f0edcc] hover:bg-white text-[#023440] font-black text-base flex items-center space-x-2 transition-all shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-[#023440] fill-[#023440]" />
              <span>Call: +91 9599122595</span>
            </a>
            <a
              href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20want%20to%20sell%20scrap%20in%20Noida."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white hover:bg-[#f0edcc] text-[#023440] font-black text-base flex items-center justify-center transition-all shadow-xl hover:-translate-y-0.5 border border-[#f0edcc]/50"
            >
              <span>Book via WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 text-xs text-[#f0edcc]/80 font-medium">
            Address: Bishanpura, Sector 58, Noida | Email: am513077@gmail.com | Hours: 7:00 AM - 9:00 PM (Daily)
          </div>
        </div>
      </section>
    </>
  );
}
