'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle, Package, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sector: '',
    pickupDate: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (9:00 AM - 1:00 PM)',
    scrapType: 'Mixed Metal & Paper Scrap',
    weight: '20-50 kg',
    notes: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*DOORSTEP SCRAP PICKUP BOOKING - MALIK KABADI WALA*
*Customer Name:* ${formData.name}
*Mobile Number:* ${formData.phone}
*Address:* ${formData.sector} (Bishanpura / Noida Sector area)
*Pickup Date:* ${formData.pickupDate}
*Time Slot:* ${formData.timeSlot}
*Scrap Category:* ${formData.scrapType}
*Estimated Weight:* ${formData.weight}
${formData.notes ? `*Notes:* ${formData.notes}` : ''}

Please confirm my free doorstep scrap pickup appointment with digital scales.`;

    const waUrl = `https://wa.me/919599122595?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');

    setIsSuccess(true);
  };

  return (
    <>
      {/* Page Header with Background Video */}
      <PageHeader
        badge={
          <>
            <Calendar className="w-4 h-4 text-[#f0edcc]" />
            <span>Fast Express Doorstep Pickup in Noida</span>
          </>
        }
        title="Book Doorstep Pickup & Contact Us"
        subtitle="Schedule an appointment for certified digital scale weighing and spot Cash or digital UPI payment, or reach our Bishanpura Sector 58 hub directly."
      />

      {/* Main Form & Contact Information Grid */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left 7 Columns: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white p-4 sm:p-7 lg:p-10 rounded-2xl sm:rounded-3xl border-2 border-[#023440] shadow-xl">
              <div className="flex items-center space-x-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#023440] text-[#f0edcc] flex items-center justify-center shadow-md shrink-0">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold font-heading text-[#023440] leading-snug">
                    Schedule Free Doorstep Scrap Pickup
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    Zero pickup fee • 100% Digital Weighing Scales • Spot Cash or UPI Payout
                  </p>
                </div>
              </div>

              {isSuccess ? (
                <div className="py-8 sm:py-12 text-center space-y-4 bg-[#f0edcc]/40 rounded-2xl p-4 sm:p-6 border border-[#f0edcc]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#023440] text-[#f0edcc] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#023440]">Booking Request Created!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Your request was opened on WhatsApp. Our dispatch team in Bishanpura Sector 58 will confirm your timing right away!
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-[#023440] text-[#f0edcc] rounded-xl text-xs font-bold hover:bg-[#054756]"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none text-[#023440] bg-white transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none text-[#023440] bg-white transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                      Address / Noida Sector / Colony *
                    </label>
                    <input
                      type="text"
                      name="sector"
                      required
                      placeholder="e.g. Flat 302, Sector 58, Bishanpura / Sector 62, Noida"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none text-[#023440] bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                        Preferred Pickup Date *
                      </label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none text-[#023440] bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none bg-white text-[#023440] transition-all"
                      >
                        <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                        <option value="Immediate Express (Next 1-2 Hours)">Immediate Express (Next 1-2 Hours)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                        Scrap Category *
                      </label>
                      <select
                        name="scrapType"
                        value={formData.scrapType}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none bg-white text-[#023440] transition-all"
                      >
                        <option value="Mixed Metal & Paper Scrap">Mixed Metal & Paper Scrap</option>
                        <option value="Iron & Steel Scrap">Iron & Steel Scrap</option>
                        <option value="Copper & Brass Scrap">Copper & Brass Scrap</option>
                        <option value="Newspaper & Cardboard Scrap">Newspaper & Cardboard Scrap</option>
                        <option value="Inverter & Automotive Batteries">Inverter & Automotive Batteries</option>
                        <option value="Scrap AC / Refrigerator / Washing Machine">Scrap Appliance Bodies</option>
                        <option value="E-Waste & Scrap Computers">E-Waste & Scrap Computers</option>
                        <option value="Commercial Office / Factory Scrap">Commercial Office / Factory Scrap</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                        Approx Weight / Quantity *
                      </label>
                      <select
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none bg-white text-[#023440] transition-all"
                      >
                        <option value="20-50 kg">20 - 50 kg</option>
                        <option value="50-100 kg">50 - 100 kg</option>
                        <option value="100-300 kg">100 - 300 kg</option>
                        <option value="300-1000 kg (Commercial)">300 - 1,000 kg (Commercial)</option>
                        <option value="1+ Ton (Bulk Industrial)">1+ Ton (Bulk Industrial)</option>
                        <option value="1-5 Items (Appliances/Battery)">1-5 Items (Appliances / Batteries)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-[#023440] uppercase tracking-wider mb-1 sm:mb-1.5">
                      Additional Notes / Landmarks (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows="2"
                      placeholder="e.g. Near Mother Dairy, 2nd floor, have copper wire and heavy iron gates..."
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none text-[#023440] bg-white transition-all placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-5 rounded-xl bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-black text-xs sm:text-sm shadow-xl flex items-center justify-center space-x-2 transition-all transform active:scale-[0.99] border border-[#f0edcc]/30"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#f0edcc]" />
                      <span>Confirm & Book via WhatsApp</span>
                    </button>
                    <p className="text-center text-[10px] sm:text-[11px] text-slate-500 mt-2 font-medium flex items-center justify-center space-x-1.5 leading-snug">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#023440] shrink-0" />
                      <span>Zero pickup charges • Spot Cash or UPI • Certified electronic digital scales</span>
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 Columns: Contact Info in #023440 & #f0edcc */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Details Card */}
              <div className="bg-[#023440] text-white p-7 rounded-3xl border-2 border-[#f0edcc] shadow-2xl space-y-5">
                <span className="text-[#f0edcc] font-black text-xs uppercase tracking-widest block">
                  CONTACT INFORMATION
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Malik Kabadi Wala All Scrap
                </h3>

                <div className="space-y-4 text-xs text-slate-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#f0edcc] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Main Scrap Hub Address:</strong>
                      <span>Bishanpura, Sector 58, Noida, Uttar Pradesh - 201301</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#f0edcc] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Direct Phone / WhatsApp:</strong>
                      <a href="tel:9599122595" className="text-[#f0edcc] hover:underline font-black text-base">
                        +91 9599122595
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[#f0edcc] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Email Address:</strong>
                      <a href="mailto:am513077@gmail.com" className="text-slate-200 hover:text-white">
                        am513077@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#f0edcc] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Working Hours:</strong>
                      <span>Monday - Sunday: 7:00 AM - 9:00 PM (All 7 Days Open)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#054756] flex items-center space-x-3">
                  <a
                    href="tel:9599122595"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#f0edcc] hover:bg-white text-[#023440] font-black text-xs text-center transition-colors shadow-md inline-flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#023440]" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919599122595?text=Hello%20Malik%20Kabadi%20Wala,%20I%20want%20to%20sell%20scrap%20in%20Noida."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-[#f0edcc] text-[#023440] font-black text-xs text-center transition-colors shadow-md border border-[#f0edcc]/50 inline-flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#023440]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Map embed / locator */}
              <div className="bg-[#f0edcc]/30 p-6 rounded-3xl border border-[#f0edcc] text-xs text-slate-700 space-y-3">
                <div className="flex items-center space-x-2 text-[#023440] font-bold text-sm">
                  <MapPin className="w-4 h-4 text-[#023440]" />
                  <span>Serving Bishanpura & All Noida Sectors</span>
                </div>
                <p>
                  Our collection vehicles are deployed throughout Bishanpura, Sector 58, 59, 60, 61, 62, 63, Indirapuram, and Noida Extension for same-day free doorstep service.
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=Bishanpura+Sector+58+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-black text-[#023440] hover:underline"
                  >
                    Open Bishanpura Sector 58 on Google Maps
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
