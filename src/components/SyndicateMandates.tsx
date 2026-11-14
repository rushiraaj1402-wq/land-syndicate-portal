import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowUpRight, FileText } from 'lucide-react';

interface SyndicateMandatesProps {
  onScrollToIntake: () => void;
}

export const SyndicateMandates: React.FC<SyndicateMandatesProps> = ({ onScrollToIntake }) => {
  const executedTransactions = [
    {
      id: 'm-1',
      location: 'Sanand Industrial Belt (SMBIR SH-17 Axis)',
      cluster: 'Automotive & EV Tier-1 Cluster',
      acreage: '42.0 Acres',
      type: 'Contiguous Agrarian Consolidation',
      docket: 'HC-SRCH-2024-GJ-8841',
      status: 'Executed & Registered',
      year: '2024'
    },
    {
      id: 'm-2',
      location: 'Dholera SIR Logistics Outer Ring',
      cluster: 'DMIC Freight & Warehousing Corridor',
      acreage: '65.0 Acres',
      type: 'Industrial Logistics Master Plan',
      docket: 'LSC-AUD-DLR-0922',
      status: 'Executed & Registered',
      year: '2024'
    },
    {
      id: 'm-3',
      location: 'Mandal Auto Cluster Perimeter',
      cluster: 'Heavy Engineering & Component Assembly',
      acreage: '28.5 Acres',
      type: 'Private Bilateral Acquisition',
      docket: 'HC-SRCH-2023-MND-412',
      status: 'Executed & Registered',
      year: '2023'
    },
    {
      id: 'm-4',
      location: 'Surendranagar Freight Corridor (NH-47)',
      cluster: 'Forging, Minerals & Agro-Logistics',
      acreage: '35.0 Acres',
      type: 'Contiguous Agrarian Consolidation',
      docket: 'LSC-AUD-SNGR-7014',
      status: 'Executed & Registered',
      year: '2023'
    },
    {
      id: 'm-5',
      location: 'Mehsana Precision Engineering Park',
      cluster: 'Export Machinery & Tooling Belt',
      acreage: '20.0 Acres',
      type: 'Section 65 NA Converted Parcel',
      docket: 'HC-SRCH-2023-MHS-1109',
      status: 'Executed & Registered',
      year: '2023'
    },
    {
      id: 'm-6',
      location: 'Viramgam Multimodal Logistics Node',
      cluster: 'Rail-Siding Logistics & ICD Spine',
      acreage: '50.0 Acres',
      type: 'Contiguous Bilateral Aggregation',
      docket: 'LSC-AUD-VRG-3208',
      status: 'Executed & Registered',
      year: '2022'
    }
  ];

  return (
    <section id="mandates" className="py-24 bg-[#F4F2EE] border-b border-[#E2DFD7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFFFFF] border border-[#E2DFD7] text-[#0F172A] text-xs font-mono uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
              <span>Track Record</span>
            </div>
            <h2 className="font-serif-institutional text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
              Recent Executed Mandates
            </h2>
            <p className="text-[#475569] text-base sm:text-lg font-light mt-3">
              Representative institutional land consolidations executed under our proprietary agrarian holding protocol.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#64748B] uppercase block">High Court Audit Standard</span>
            <span className="text-xs font-mono font-medium text-[#0F172A]">Zero Litigation &bull; Clear Title Registry</span>
          </div>
        </div>

        {/* Clean, Elegant 3-Column Institutional Ledger */}
        <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm overflow-hidden shadow-xs">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-4 bg-[#FAF9F6] border-b border-[#E2DFD7] text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
            <div className="col-span-12 sm:col-span-6 md:col-span-6">Location & Industrial Cluster</div>
            <div className="hidden sm:block sm:col-span-3 md:col-span-3">Acreage Consolidated</div>
            <div className="hidden sm:block sm:col-span-3 md:col-span-3 text-right">Status & Clearance</div>
          </div>

          {/* Ledger Rows */}
          <div className="divide-y divide-[#E2DFD7]">
            {executedTransactions.map((tx) => (
              <div
                key={tx.id}
                className="grid grid-cols-12 px-6 py-5 hover:bg-[#FAF9F6]/80 transition-colors items-center gap-2 sm:gap-0"
              >
                {/* Column 1: Location */}
                <div className="col-span-12 sm:col-span-6 md:col-span-6">
                  <div className="flex items-center gap-2">
                    <span className="font-serif-institutional font-bold text-[#0F172A] text-base sm:text-lg">
                      {tx.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-[#64748B]">
                    <span>{tx.cluster}</span>
                    <span className="text-[#CBD5E1]">&bull;</span>
                    <span className="font-mono text-[11px] text-[#B45309]">Ref: {tx.docket}</span>
                  </div>
                </div>

                {/* Column 2: Acreage */}
                <div className="col-span-6 sm:col-span-3 md:col-span-3 mt-2 sm:mt-0">
                  <div className="font-mono text-base font-semibold text-[#0F172A]">
                    {tx.acreage}
                  </div>
                  <div className="text-[11px] text-[#64748B] font-mono">
                    {tx.type}
                  </div>
                </div>

                {/* Column 3: Status */}
                <div className="col-span-6 sm:col-span-3 md:col-span-3 text-right mt-2 sm:mt-0 flex flex-col sm:items-end justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#F0FDF4] border border-[#BBF7D0] text-[#064E3B] text-xs font-mono font-medium tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B]" />
                    <span>{tx.status}</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8] mt-1">
                    Closed {tx.year} &bull; Unencumbered Title
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Ledger Footer */}
          <div className="px-6 py-4 bg-[#FAF9F6] border-t border-[#E2DFD7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#475569] font-mono text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#064E3B]" />
              <span>Certified Gujarat High Court 30-Year Search Docket on file for all completed mandates.</span>
            </div>

            <button
              onClick={onScrollToIntake}
              className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#B45309] font-semibold font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>Inquire for Off-Market Parcels</span>
              <ArrowUpRight className="w-4 h-4 text-[#B45309]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
