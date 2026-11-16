'use client';

import { useState } from 'react';
import { noidaLocalities } from '@/data/scrapData';
import { MapPin, Search, CheckCircle2, Zap } from 'lucide-react';

export default function CoverageAreas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    const validLocalities = [
      '58', 'bishanpura', 'noida', '59', '60', '61', '62', '63', '55', '56', '57', 
      '18', '15', '16', '27', '29', '37', '41', '74', '75', '76', '77', '78', 
      '120', '121', '122', '137', '142', 'indirapuram', 'vaishali', 'vasundhara', 
      'gaur city', 'extension', '201301', '201307', '201309'
    ];

    const match = validLocalities.some(loc => query.includes(loc)) || /^\d{2,6}$/.test(query);

    if (match) {
      setSearchResult({
        status: 'success',
        title: 'Doorstep Pickup is Available in your Area!',
        desc: 'Our team is active in your sector today. Free doorstep pickup with zero transportation fees.'
      });
    } else {
      setSearchResult({
        status: 'custom',
        title: 'We Serve All Over Noida & NCR!',
        desc: 'Call us directly at 9599122595 to schedule an express doorstep slot for your locality.'
      });
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-[#f0edcc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading in #023440 & #f0edcc */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f0edcc] text-[#023440] text-xs font-black mb-3 border border-[#023440]/20">
            <MapPin className="w-4 h-4 text-[#023440]" />
            <span>Fast Express Doorstep Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023440] tracking-tight font-heading">
            Areas We Serve Across Noida & NCR
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Headquartered in <strong>Bishanpura, Sector 58, Noida</strong>, our fleet of mobile scrap collection vans serves all surrounding residential societies, commercial IT parks, and industrial zones.
          </p>
        </div>

        {/* Interactive Pincode / Sector Checker */}
        <div className="max-w-xl mx-auto mb-14 bg-white p-6 sm:p-7 rounded-3xl shadow-md border-2 border-[#023440]">
          <h3 className="text-base font-bold text-[#023440] mb-3 text-center">
            Check If We Serve Your Sector or Pincode
          </h3>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Sector (e.g. 58, 62, Indirapuram, 201301)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none text-[#023440] bg-white transition-all placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-black text-sm rounded-xl shrink-0 transition-colors shadow-sm"
            >
              Check Area
            </button>
          </form>

          {/* Search Result */}
          {searchResult && (
            <div className={`mt-4 p-4 rounded-2xl text-xs flex items-center justify-between ${
              searchResult.status === 'success' 
                ? 'bg-[#f0edcc] border border-[#dfdbb0] text-[#023440]' 
                : 'bg-slate-100 border border-slate-300 text-slate-800'
            }`}>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#023440] shrink-0" />
                <div>
                  <strong className="block font-bold text-sm">{searchResult.title}</strong>
                  <p className="mt-0.5">{searchResult.desc}</p>
                </div>
              </div>
              <a
                href="tel:9599122595"
                className="ml-3 px-3.5 py-1.5 bg-[#023440] text-[#f0edcc] font-bold rounded-lg shrink-0 hover:bg-[#054756]"
              >
                Call Now
              </a>
            </div>
          )}
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {noidaLocalities.map((loc, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#023440] hover:shadow-md transition-all flex items-center space-x-3.5 shadow-xs"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f0edcc] text-[#023440] flex items-center justify-center shrink-0 font-bold">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-[#023440] text-sm sm:text-base leading-snug font-heading truncate">{loc.name}</h4>
                <span className="text-xs sm:text-sm text-[#054756] font-semibold block mt-0.5 truncate">{loc.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hub Notice Banner in #023440 & #f0edcc */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 bg-[#023440] text-white rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5 border border-[#f0edcc]/30 shadow-xl">
          <div className="flex items-center space-x-3.5 sm:space-x-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f0edcc] text-[#023440] flex items-center justify-center shrink-0 shadow-sm">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-100">
              <strong className="text-[#f0edcc] font-extrabold text-base sm:text-lg block sm:inline sm:mr-1">Locally Based in Bishanpura Sector 58:</strong>Express 30-minute arrival guaranteed for Sector 58, 59, 60, 61, 62 & 63.
            </p>
          </div>
          <a
            href="tel:9599122595"
            className="px-6 py-3 sm:py-3.5 bg-[#f0edcc] hover:bg-white text-[#023440] font-black text-sm sm:text-base rounded-xl transition-all shrink-0 shadow-lg text-center w-full sm:w-auto"
          >
            Express Pickup: 9599122595
          </a>
        </div>

      </div>
    </section>
  );
}
