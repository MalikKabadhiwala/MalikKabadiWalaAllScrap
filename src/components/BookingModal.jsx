'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Phone, MapPin, Package, CheckCircle2, ShieldCheck } from 'lucide-react';
import Logo from '@/components/Logo';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sector: '',
    scrapType: 'Mixed Metal & Paper Scrap',
    weight: '20-50 kg',
    pickupDate: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, pickupDate: today }));

    const handleOpen = (e) => {
      if (e.detail?.item) {
        setFormData(prev => ({ 
          ...prev, 
          scrapType: e.detail.item,
          notes: e.detail.note || '' 
        }));
      }
      setIsOpen(true);
    };

    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*NEW SCRAP PICKUP BOOKING - MALIK KABADI WALA*
*Customer Name:* ${formData.name || 'Not provided'}
*Phone Number:* ${formData.phone}
*Address / Sector:* ${formData.sector} (Bishanpura/Noida area)
*Scrap Category:* ${formData.scrapType}
*Estimated Weight:* ${formData.weight}
*Preferred Date:* ${formData.pickupDate}
${formData.notes ? `*Notes:* ${formData.notes}` : ''}

Please confirm my free doorstep scrap pickup slot!`;

    const waUrl = `https://wa.me/919599122595?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#023440] overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto">
        {/* Header in #023440 & #f0edcc */}
        <div className="bg-[#023440] px-5 py-4 sm:px-7 sm:py-5 text-white flex items-center justify-between border-b border-[#f0edcc]/30 shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 pr-2">
            <Logo variant="dark" size="sm" className="hidden sm:inline-flex shrink-0" />
            <div className="min-w-0">
              <div className="inline-flex items-center space-x-1.5 bg-[#012028] text-[#f0edcc] border border-[#f0edcc]/40 px-3 py-1 rounded-full text-xs sm:text-sm font-black mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f0edcc] animate-pulse"></span>
                <span>100% Free Doorstep Collection</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white tracking-tight truncate">
                Schedule Scrap Pickup
              </h3>
              <p className="text-[#f0edcc] text-xs sm:text-sm font-medium mt-0.5">
                Digital scales • Instant Cash or UPI settlement
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#f0edcc] hover:text-[#023440] text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-7 overflow-y-auto overscroll-contain">
          {isSubmitted ? (
            <div className="py-8 sm:py-10 text-center space-y-4 bg-[#f0edcc]/30 rounded-2xl p-6">
              <div className="w-16 h-16 rounded-full bg-[#023440] text-[#f0edcc] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#023440]">Booking Sent to WhatsApp!</h4>
              <p className="text-sm sm:text-base text-slate-700 max-w-sm mx-auto">
                Our team at Malik Kabadi Wala (Sector 58, Bishanpura) will confirm your time slot shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-[#023440] uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none transition-all text-[#023440] bg-white placeholder:text-slate-400 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-extrabold text-[#023440] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-4 text-slate-400 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none transition-all text-[#023440] bg-white placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-extrabold text-[#023440] uppercase tracking-wider mb-1.5">
                    Preferred Pickup Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3.5 top-4 text-slate-400 pointer-events-none" />
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none transition-all text-[#023440] bg-white font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-[#023440] uppercase tracking-wider mb-1.5">
                  Noida Sector / Locality Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    name="sector"
                    required
                    placeholder="e.g. Bishanpura, Sector 58, Flat/House No..."
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none transition-all text-[#023440] bg-white placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-extrabold text-[#023440] uppercase tracking-wider mb-1.5">
                    Scrap Category *
                  </label>
                  <select
                    name="scrapType"
                    value={formData.scrapType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none transition-all bg-white text-[#023440] font-medium"
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
                  <label className="block text-xs sm:text-sm font-extrabold text-[#023440] uppercase tracking-wider mb-1.5">
                    Estimated Weight *
                  </label>
                  <select
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none transition-all bg-white text-[#023440] font-medium"
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
                <label className="block text-xs sm:text-sm font-extrabold text-[#023440] uppercase tracking-wider mb-1.5">
                  Additional Notes / Landmarks (Optional)
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="e.g. 2nd floor with lift, copper wire and iron gate"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base focus:border-[#023440] focus:ring-2 focus:ring-[#f0edcc] outline-none transition-all text-[#023440] bg-white placeholder:text-slate-400 font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-5 rounded-xl bg-[#023440] hover:bg-[#054756] text-[#f0edcc] font-black text-base sm:text-lg shadow-xl flex items-center justify-center space-x-2 transition-all transform active:scale-[0.99] border border-[#f0edcc]/30"
                >
                  <span>Confirm Pickup via WhatsApp</span>
                  <Package className="w-5 h-5 ml-1 text-[#f0edcc]" />
                </button>
                <p className="text-center text-xs sm:text-sm text-slate-600 mt-2.5 font-medium flex items-center justify-center space-x-1.5 leading-snug">
                  <ShieldCheck className="w-4 h-4 text-[#023440] shrink-0" />
                  <span>Zero pickup charges • Digital scales • Instant spot Cash or UPI payout</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
