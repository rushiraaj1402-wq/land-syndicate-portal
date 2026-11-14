import React from 'react';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

interface StrategicCorridorsProps {
  onSelectCorridor: (corridorName: string) => void;
}

export const StrategicCorridors: React.FC<StrategicCorridorsProps> = ({ onSelectCorridor }) => {
  const corridors = [
    {
      id: 'sanand',
      name: 'Sanand',
      focus: 'Automotive & EV Ecosystem',
      fullName: 'Sanand - Mandal - Becharaji (SMBIR)',
      keyStat: '15 – 60 Acres Contiguous',
      connectivity: 'SH-17 Expressway & Viramgam Logistics Hub',
      statutory: 'Section 65 NA Pre-Audited',
      badge: 'Tier-1 Auto Belt'
    },
    {
      id: 'dholera',
      name: 'Dholera SIR',
      focus: 'DMIC Logistics & Electronics',
      fullName: 'Dholera SIR / Ahmedabad South',
      keyStat: '20 – 100+ Acres Contiguous',
      connectivity: 'Ahmedabad-Dholera Expressway & Cargo Airport',
      statutory: 'Master Plan TP Scheme Cleared',
      badge: 'Greenfield Megacity'
    },
    {
      id: 'surendranagar',
      name: 'Surendranagar',
      focus: 'Heavy Manufacturing & Forging',
      fullName: 'Surendranagar Industrial Corridor',
      keyStat: '10 – 45 Acres Contiguous',
      connectivity: 'NH-47 Spine & Saurashtra Port Access',
      statutory: 'Zero Tenancy Dispute Pre-Vetted',
      badge: 'Manufacturing Hub'
    },
    {
      id: 'mehsana',
      name: 'Mehsana',
      focus: 'Precision Engineering & Export',
      fullName: 'Mehsana Industrial Belt',
      keyStat: '10 – 35 Acres Contiguous',
      connectivity: 'WDFC Dedicated Freight Siding & SH-41',
      statutory: '32-Year Clean Title Chain',
      badge: 'Machinery Corridor'
    }
  ];

  return (
    <section id="corridors" className="py-24 bg-[#FAF9F6] border-b border-[#E2DFD7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFFFFF] border border-[#E2DFD7] text-[#0F172A] text-xs font-mono uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
              <span>Mandate Footprint</span>
            </div>
            <h2 className="font-serif-institutional text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
              Strategic Gujarat Corridors
            </h2>
            <p className="text-[#475569] text-base sm:text-lg font-light mt-3">
              Prime manufacturing and warehousing belts with confirmed infrastructure, high-voltage industrial power, and clean legal tenure.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#064E3B] bg-[#F0FDF4] border border-[#BBF7D0] px-3.5 py-2 rounded-sm shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
            <span>Off-Market Parcels Pre-Screened</span>
          </div>
        </div>

        {/* Minimalist 4-Card Horizontal Row / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corridors.map((c) => (
            <div
              key={c.id}
              className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm p-6 flex flex-col justify-between hover:border-[#0F172A] hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition-all duration-200 group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs bg-[#F4F2EE] text-[#475569] border border-[#E2DFD7]">
                    {c.badge}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                </div>

                {/* Corridor Name */}
                <h3 className="font-serif-institutional text-2xl font-bold text-[#0F172A] mb-1 group-hover:text-[#B45309] transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs font-medium text-[#475569] mb-4">
                  {c.focus}
                </p>

                {/* Core Parcel Metric */}
                <div className="py-2.5 px-3 rounded-xs bg-[#FAF9F6] border border-[#E2DFD7] text-xs font-mono mb-4">
                  <span className="text-[#64748B] block text-[10px] uppercase tracking-wider">Available Scale:</span>
                  <span className="font-semibold text-[#0F172A] text-sm">{c.keyStat}</span>
                </div>

                {/* Infrastructure Details */}
                <div className="space-y-2 text-xs text-[#475569] mb-6">
                  <div className="flex items-start gap-1.5">
                    <span className="text-[#94A3B8]">&bull;</span>
                    <span className="leading-snug">{c.connectivity}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[#064E3B] font-medium">
                    <span className="text-[#064E3B]">&bull;</span>
                    <span className="leading-snug">{c.statutory}</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Prefill Intake */}
              <button
                onClick={() => onSelectCorridor(c.fullName)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold tracking-wider uppercase border border-[#0F172A] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-white rounded-xs transition-colors"
              >
                <span>Select for Mandate</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-300" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
