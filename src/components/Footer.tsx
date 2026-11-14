import React from 'react';
import { Scale, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E2DFD7] text-[#475569] text-xs">
      
      {/* Top Advisory Accreditation Bar */}
      <div className="border-b border-[#E2DFD7] py-6 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#0F172A] text-white flex items-center justify-center">
              <Scale className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <span className="font-serif-institutional text-[#0F172A] font-bold tracking-tight text-sm">
                LAND SYNDICATE CONSULTING
              </span>
              <span className="text-[#64748B] text-[11px] block font-mono">
                Gujarat High Court Title Practice & Revenue Advisory Desk &bull; Est. 2012
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px] text-[#64748B]">
            <span className="flex items-center gap-1.5 text-[#064E3B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
              32-Year Search Cleared
            </span>
            <span className="text-[#CBD5E1]">|</span>
            <span>Section 65 NA Direct Desk</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>Bilateral NCNDA Mandates</span>
          </div>
        </div>
      </div>

      {/* Main Footer Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Scope */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-serif-institutional font-bold text-sm text-[#0F172A] uppercase tracking-wider">
              Institutional Advisory Scope
            </h4>
            <p className="text-[#475569] text-xs leading-relaxed max-w-lg font-light">
              Land Syndicate Consulting acts exclusively as a specialized corporate land acquisition syndicate for industrial conglomerates, listed enterprises, and institutional private equity funds acquiring contiguous parcels across Gujarat.
            </p>
            <div className="text-[11px] font-mono text-[#B45309]">
              In-House Certified Agrarian Farmer Holding Protocol.
            </div>
          </div>

          {/* Col 2: Corridors Focus */}
          <div className="space-y-2">
            <h4 className="font-serif-institutional font-bold text-sm text-[#0F172A] uppercase tracking-wider">
              Corridor Focus
            </h4>
            <ul className="space-y-1.5 text-xs text-[#475569]">
              <li>Sanand - Mandal - Becharaji (SMBIR)</li>
              <li>Dholera SIR / Ahmedabad South</li>
              <li>Surendranagar Industrial Belt</li>
              <li>Mehsana & WDFC Railheads</li>
            </ul>
          </div>

          {/* Col 3: Legal & Regulatory */}
          <div className="space-y-2">
            <h4 className="font-serif-institutional font-bold text-sm text-[#0F172A] uppercase tracking-wider">
              Chambers & Registry
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Gujarat High Court Commercial Chambers & SG Highway Institutional Desk, Ahmedabad, Gujarat, India.
            </p>
            <div className="text-[11px] font-mono text-[#64748B] pt-1">
              Direct Counsel: +91 99099 23832
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E2DFD7] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <p>
            &copy; {new Date().getFullYear()} Land Syndicate Consulting. All rights reserved. Strictly confidential bilateral mandates.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#B45309] font-mono uppercase tracking-wider transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B45309]" />
          </button>
        </div>
      </div>

    </footer>
  );
};
