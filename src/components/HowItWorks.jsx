import { howItWorksSteps } from '@/data/scrapData';
import { CalendarCheck, Scale, IndianRupee, CheckCircle2 } from 'lucide-react';

const iconMap = {
  CalendarCheck: CalendarCheck,
  Scale: Scale,
  IndianRupee: IndianRupee
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#023440] text-white relative overflow-hidden">
      {/* Decorative background glow in #f0edcc */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#f0edcc]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading in #f0edcc */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#f0edcc] font-black text-xs uppercase tracking-widest block mb-2">
            SIMPLE & TRANSPARENT PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            How Doorstep Scrap Pickup Works
          </h2>
          <p className="text-[#f0edcc]/80 text-sm sm:text-base mt-2">
            Selling your scrap in Bishanpura, Sector 58, and all over Noida takes just 3 effortless steps.
          </p>
        </div>

        {/* 3 Steps Grid in #023440 & #f0edcc */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {howItWorksSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Scale;
            return (
              <div
                key={idx}
                className="bg-[#012028] rounded-3xl p-8 border border-[#f0edcc]/25 relative flex flex-col justify-between hover:border-[#f0edcc] transition-all hover:bg-[#032a34]"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#023440] text-[#f0edcc] border border-[#f0edcc]/30 flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-[#f0edcc] font-heading">
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading mb-1.5">{step.title}</h3>
                  <span className="text-xs sm:text-sm font-bold text-[#f0edcc] block mb-3.5">{step.subtitle}</span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f0edcc]/20 flex items-center text-xs sm:text-sm text-[#f0edcc] font-extrabold">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-[#f0edcc] shrink-0" />
                  <span>100% Free Service</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact CTA Banner in #f0edcc */}
        <div className="mt-14 p-6 sm:p-8 bg-[#f0edcc] text-[#023440] rounded-3xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl font-extrabold font-heading text-[#023440]">Have bulk scrap or corporate office dismantling?</h4>
            <p className="text-xs text-[#023440]/80 mt-1 font-medium">Get an on-site inspection in Noida within 2 hours with formal estimate & weighbridge slips.</p>
          </div>
          <a
            href="tel:9599122595"
            className="px-7 py-3.5 rounded-xl bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-black text-sm shrink-0 transition-colors shadow-lg"
          >
            Call 9599122595
          </a>
        </div>

      </div>
    </section>
  );
}
