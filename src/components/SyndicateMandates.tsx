import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowUpRight, Clock } from 'lucide-react';

interface SyndicateMandatesProps {
  onScrollToIntake: () => void;
}

interface MandateEntry {
  id: string;
  location: string;
  cluster: string;
  acreage: string;
  type: string;
  docket: string;
  status: string;
  subtext: string;
  year: string;
  stageColor: 'blue' | 'amber' | 'emerald';
}

export const SyndicateMandates: React.FC<SyndicateMandatesProps> = ({ onScrollToIntake }) => {
  const executedTransactions: MandateEntry[] = [
    {
      id: 'm-1',
      location: 'Sanand SMBIR Auto Tier-1 Hub',
      cluster: 'Automotive & EV Tier-1 Cluster',
      acreage: '42.0 Acres',
      type: 'Contiguous Agrarian Consolidation',
      docket: 'SR-AUD-2026-GJ-9104',
      status: 'Public Notice Active (Sandesh/Gujarat Samachar)',
      subtext: '14-Day Statutory Notice Running (Q3 2026) • Zero Objections',
      year: '2026 (Q3)',
      stageColor: 'blue'
    },
    {
      id: 'm-2',
      location: 'Dholera SIR Logistics & Electronics Mega Park',
      cluster: 'DMIC Freight & Warehousing Corridor',
      acreage: '65.0 Acres',
      type: 'Industrial Logistics Master Plan',
      docket: 'SR-AUD-2026-DHL-2109',
      status: 'Registered Banakhat Executed (Under Section 65 NA Clearance)',
      subtext: 'Under Section 65 NA Clearance • 45m DP Road Connected',
      year: '2026 (Q2)',
      stageColor: 'amber'
    },
    {
      id: 'm-3',
      location: 'Mandal Industrial Region (EV Battery Vendor Campus)',
      cluster: 'Heavy Engineering & Component Assembly',
      acreage: '28.5 Acres',
      type: 'Private Bilateral Acquisition',
      docket: 'SR-AUD-2025-MND-4812',
      status: 'Title Certified • Sub-Registrar Registry Scheduled',
      subtext: 'Section 65 NA Complete • SDM Sanctioned (Q4 2025)',
      year: '2025 (Q4)',
      stageColor: 'amber'
    },
    {
      id: 'm-4',
      location: 'Surendranagar Freight Corridor (Heavy Forging Facility)',
      cluster: 'Forging, Minerals & Agro-Logistics',
      acreage: '35.0 Acres',
      type: 'Contiguous Agrarian Consolidation',
      docket: 'SR-AUD-2025-SNGR-3310',
      status: 'Executed & Registered • Title Transferred',
      subtext: 'Closed 2025 (Q3) • High-Tension Feeder Approved',
      year: '2025 (Q3)',
      stageColor: 'emerald'
    },
    {
      id: 'm-5',
      location: 'Mehsana Engineering & Agro Export Park',
      cluster: 'Export Machinery & Tooling Belt',
      acreage: '20.0 Acres',
      type: 'Section 65 NA Converted Parcel',
      docket: 'SR-AUD-2025-MHS-1944',
      status: 'Executed & Registered • Title Transferred',
      subtext: 'Closed 2025 (Q2) • Rail Siding Feasibility Secured',
      year: '2025 (Q2)',
      stageColor: 'emerald'
    },
    {
      id: 'm-6',
      location: 'Viramgam Multi-Modal Warehousing Spine',
      cluster: 'Rail-Siding Logistics & ICD Spine',
      acreage: '50.0 Acres',
      type: 'Contiguous Bilateral Aggregation',
      docket: 'SR-AUD-2025-VRG-3208',
      status: 'Executed & Registered • Title Transferred',
      subtext: 'Closed 2025 (Q1) • Clear Agrarian Chain Certified',
      year: '2025 (Q1)',
      stageColor: 'emerald'
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
              <span>Track Record & Active Pipeline</span>
            </div>
            <h2 className="font-serif-institutional text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
              Recent Syndicate Mandates
            </h2>
            <p className="text-[#475569] text-base sm:text-lg font-light mt-3">
              Representative institutional land consolidations and live transaction pipeline executed under our proprietary agrarian holding protocol.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#64748B] uppercase block">Title Audit Standard</span>
            <span className="text-xs font-mono font-medium text-[#0F172A]">30-Year Sub-Registrar Title Search &bull; Certified Clear Title</span>
          </div>
        </div>

        {/* Clean, Elegant 3-Column Institutional Ledger */}
        <div className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm overflow-hidden shadow-xs">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-4 bg-[#FAF9F6] border-b border-[#E2DFD7] text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
            <div className="col-span-12 sm:col-span-5 md:col-span-5">Location & Industrial Cluster</div>
            <div className="hidden sm:block sm:col-span-3 md:col-span-3">Acreage Consolidated</div>
            <div className="hidden sm:block sm:col-span-4 md:col-span-4 text-right">Pipeline Status & Statutory Clearance</div>
          </div>

          {/* Ledger Rows */}
          <div className="divide-y divide-[#E2DFD7]">
            {executedTransactions.map((tx) => (
              <div
                key={tx.id}
                className="grid grid-cols-12 px-6 py-5 hover:bg-[#FAF9F6]/80 transition-colors items-center gap-2 sm:gap-0"
              >
                {/* Column 1: Location */}
                <div className="col-span-12 sm:col-span-5 md:col-span-5">
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
                <div className="col-span-6 sm:col-span-4 md:col-span-4 text-right mt-2 sm:mt-0 flex flex-col sm:items-end justify-center">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[11px] font-mono font-medium tracking-tight border ${
                      tx.stageColor === 'blue'
                        ? 'bg-[#EFF6FF] border-[#BFDBFE] text-[#1E40AF]'
                        : tx.stageColor === 'amber'
                        ? 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                        : 'bg-[#F0FDF4] border-[#BBF7D0] text-[#064E3B]'
                    }`}
                  >
                    {tx.stageColor === 'blue' && <Clock className="w-3.5 h-3.5 text-[#1E40AF] shrink-0" />}
                    {tx.stageColor === 'amber' && <Clock className="w-3.5 h-3.5 text-[#92400E] shrink-0" />}
                    {tx.stageColor === 'emerald' && <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] shrink-0" />}
                    <span>{tx.status}</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8] mt-1">
                    {tx.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Ledger Footer */}
          <div className="px-6 py-4 bg-[#FAF9F6] border-t border-[#E2DFD7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#475569] font-mono text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#064E3B]" />
              <span>Certified Title Audit: 30-Year Sub-Registrar Index-II search dossier on file for all completed mandates.</span>
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
