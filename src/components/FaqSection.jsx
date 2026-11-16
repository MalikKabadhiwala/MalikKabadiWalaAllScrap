'use client';

import { useState } from 'react';
import { faqList } from '@/data/scrapData';
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-[#f0edcc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Heading in #023440 & #f0edcc */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f0edcc] text-[#023440] text-xs font-black mb-3 border border-[#023440]/20">
              <HelpCircle className="w-4 h-4 text-[#023440]" />
              <span>Got Questions? We Have Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023440] tracking-tight font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg mt-2 leading-relaxed">
              Everything you need to know about doorstep scrap selling, digital weighing, and instant payment.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl sm:rounded-3xl border transition-all shadow-xs ${isOpen ? 'border-[#023440] shadow-md' : 'border-slate-200'}`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 hover:bg-[#f0edcc]/20 transition-colors rounded-2xl sm:rounded-3xl"
                  >
                    <span className="font-bold text-[#023440] text-base sm:text-lg font-heading leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#023440] text-[#f0edcc]' : 'bg-[#f0edcc] text-[#023440]'}`}>
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 font-normal">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-12 text-center p-6 sm:p-8 bg-[#f0edcc]/50 rounded-2xl sm:rounded-3xl border border-[#f0edcc] text-[#023440]">
            <p className="text-base sm:text-lg font-extrabold font-heading">
              Still have questions about scrap rates or special bulk pickup?
            </p>
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-black">
              <a href="tel:9599122595" className="hover:underline inline-flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#023440]" />
                <span>Call: +91 9599122595</span>
              </a>
              <span className="text-[#023440]/30 hidden sm:inline">•</span>
              <a href="mailto:am513077@gmail.com" className="hover:underline inline-flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#023440]" />
                <span>Email: am513077@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
