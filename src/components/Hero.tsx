import React from 'react';
import { ArrowUpRight, Scale, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenIntakeModal: () => void;
  onScrollToIntake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntakeModal: _onOpenIntakeModal, onScrollToIntake }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#FAF9F6] border-b border-[#E2DFD7] overflow-hidden">
      {/* Subtle fine architectural hairline texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Institutional Advisory Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-[#FFFFFF] border border-[#E2DFD7] text-xs font-mono text-[#334155] shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-[#064E3B]" />
          <span className="font-semibold text-[#0F172A] tracking-wider uppercase">Institutional Advisory Desk</span>
          <span className="text-[#CBD5E1]">|</span>
          <span className="text-[#64748B]">Sanand &bull; Dholera SIR &bull; Surendranagar &bull; Mehsana</span>
        </div>

        {/* Hero Headline & Subhead */}
        <div className="max-w-4xl">
          <h1 className="font-serif-institutional text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-[#0F172A] leading-[1.08] mb-7">
            Institutional Land Diligence & Acquisition Across Gujarat.
          </h1>

          <p className="text-lg sm:text-2xl text-[#334155] leading-relaxed font-light mb-10 max-w-3xl">
            <span className="font-medium text-[#0F172A]">Senior Legal Counsel (36+ Years Practice &bull; Sanad 1990). Ex-Assembly Revenue Liaison.</span> Pre-vetted agrarian parcels (1 to 50+ Acres) for corporate manufacturing, family trusts, and institutional capital.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={onScrollToIntake}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm tracking-wider uppercase rounded-sm transition-all shadow-[0_4px_16px_rgba(15,23,42,0.12)] active:translate-y-0.5"
            >
              <span>Submit Acquisition Mandate</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('proof');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] hover:bg-[#F4F2EE] text-[#0F172A] border border-[#E2DFD7] font-medium text-sm rounded-sm transition-colors shadow-xs"
            >
              <Scale className="w-4 h-4 text-[#B45309]" />
              <span>Review Counsel Credentials</span>
            </button>
          </div>
        </div>

        {/* 4 Quiet Institutional Proof Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#E2DFD7]">
          <div className="p-5 bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Title Search Horizon</span>
              <Scale className="w-4 h-4 text-[#B45309]" />
            </div>
            <div className="font-serif-institutional text-3xl font-bold text-[#0F172A]">
              35+ <span className="text-sm font-sans font-normal text-[#64748B]">Years</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-mono">Comprehensive 30-Year Title Search & Registry Audit</p>
          </div>

          <div className="p-5 bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Encumbrance Record</span>
              <ShieldCheck className="w-4 h-4 text-[#064E3B]" />
            </div>
            <div className="font-serif-institutional text-3xl font-bold text-[#064E3B]">
              100% <span className="text-sm font-sans font-normal text-[#64748B]">Clear Title</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-mono">100% Clear Marketable Title & 30-Year Encumbrance Audit</p>
          </div>

          <div className="p-5 bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Mandate Scale</span>
              <Building2 className="w-4 h-4 text-[#B45309]" />
            </div>
            <div className="font-serif-institutional text-3xl font-bold text-[#0F172A]">
              480+ <span className="text-sm font-sans font-normal text-[#64748B]">Acres</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-mono">1 to 50+ Acres &bull; ₹2 Cr to ₹100+ Cr Mandates</p>
          </div>

          <div className="p-5 bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Statutory Clearances</span>
              <CheckCircle2 className="w-4 h-4 text-[#B45309]" />
            </div>
            <div className="font-serif-institutional text-3xl font-bold text-[#0F172A]">
              Sec 65 <span className="text-sm font-sans font-normal text-[#64748B]">NA</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1 font-mono">Direct revenue liaison desk</p>
          </div>
        </div>

      </div>
    </section>
  );
};
