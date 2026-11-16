import Link from 'next/link';
import { Scale } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-white text-center">
      <div className="max-w-md mx-auto space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-[#f0edcc] text-[#023440] flex items-center justify-center mx-auto border border-[#023440]/20">
          <Scale className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#023440] font-heading">404</h1>
        <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
        <p className="text-xs sm:text-sm text-slate-500">
          The page you are looking for does not exist. Check our live scrap rates or book a free doorstep pickup in Noida!
        </p>
        <div className="pt-4 flex items-center justify-center space-x-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-[#023440] text-[#f0edcc] font-black text-xs hover:bg-[#012028] transition-colors inline-flex items-center justify-center shadow-md"
          >
            <span>Return to Home</span>
          </Link>
          <Link
            href="/rates"
            className="px-5 py-2.5 rounded-xl bg-[#f0edcc] text-[#023440] font-bold text-xs hover:bg-white border border-[#023440]/20 transition-colors"
          >
            View Scrap Rates
          </Link>
        </div>
      </div>
    </div>
  );
}
