import React from 'react';
import { Scale, Landmark, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface InstitutionalMoatProps {
  onScrollToIntake: () => void;
}

export const InstitutionalMoat: React.FC<InstitutionalMoatProps> = ({ onScrollToIntake }) => {
  const proofCards = [
    {
      id: 'counsel',
      number: '01',
      pillar: 'Legal Foundation',
      title: 'Senior Legal Counsel',
      statement: '32 years of High Court title searches. Zero litigation risk.',
      detail: 'Rigorous 30+ year revenue chain search across Gujarat High Court and Sub-Registrar records. Every parcel is delivered with certified title clearance, extinguishing co-sharer, minor, and tenancy disputes prior to earnest deposit.',
      icon: <Scale className="w-6 h-6 text-[#B45309]" />,
      guarantee: 'Zero Post-Closing Injunctions'
    },
    {
      id: 'revenue',
      number: '02',
      pillar: 'Statutory Liaison',
      title: 'Revenue & NA Desk',
      statement: 'Direct liaison for fast-track Section 65 NA and Section 63AA industrial clearance.',
      detail: 'Direct administrative interface with Collectorates, Prant officers, and Talati revenue desks. Expedited processing of Section 65 Non-Agricultural conversion and Section 63AA permissions for large corporate and manufacturing setups.',
      icon: <Landmark className="w-6 h-6 text-[#B45309]" />,
      guarantee: 'Fast-Track Collectorate Processing'
    },
    {
      id: 'consolidation',
      number: '03',
      pillar: 'Proprietary Standing',
      title: 'Agrarian Consolidation',
      statement: 'Lawful consolidation of 10 to 50+ acre contiguous parcels through internal farmer status.',
      detail: 'In-house certified farmer status enables compliant direct assembly of fragmented agricultural smallholdings into single contiguous blocks, entirely bypassing intermediary brokers and speculative price inflation.',
      icon: <ShieldCheck className="w-6 h-6 text-[#B45309]" />,
      guarantee: 'Direct Bilateral Acquisition'
    }
  ];

  return (
    <section id="proof" className="py-24 bg-[#F4F2EE] border-b border-[#E2DFD7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFFFFF] border border-[#E2DFD7] text-[#0F172A] text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
            <span>The Syndicate Moat</span>
          </div>
          <h2 className="font-serif-institutional text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            Three Structural Guarantees for Institutional Capital.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg font-light leading-relaxed">
            Acquiring strategic industrial land in Gujarat requires eliminating title vulnerabilities, statutory delays, and speculative markups before earnest capital is deployed.
          </p>
        </div>

        {/* 3 Quiet Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm p-8 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition-all duration-200"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-[#FAF9F6] border border-[#E2DFD7] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded-xs bg-[#FAF9F6] text-[#64748B] border border-[#E2DFD7]">
                    {card.number} &bull; {card.pillar}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-institutional text-2xl font-bold text-[#0F172A] mb-3">
                  {card.title}
                </h3>

                {/* Core Thesis Statement (Bold, authoritative 1-sentence moat) */}
                <p className="text-base font-semibold text-[#0F172A] leading-snug mb-4 border-l-2 border-[#B45309] pl-3">
                  {card.statement}
                </p>

                {/* Secondary Operational Detail */}
                <p className="text-sm text-[#475569] font-light leading-relaxed mb-6">
                  {card.detail}
                </p>
              </div>

              {/* Bottom Assurance Tag */}
              <div className="pt-4 border-t border-[#E2DFD7] flex items-center justify-between text-xs font-mono">
                <span className="text-[#064E3B] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
                  {card.guarantee}
                </span>
                <span className="text-[#94A3B8]">Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Advisory Banner */}
        <div className="mt-12 p-6 rounded-sm bg-[#FFFFFF] border border-[#E2DFD7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]" />
            <p className="text-xs sm:text-sm text-[#334155]">
              <strong className="text-[#0F172A]">Direct Syndicate Execution:</strong> We work directly with promoters and institutional finance desks under bilateral NCNDA.
            </p>
          </div>
          <button
            onClick={onScrollToIntake}
            className="shrink-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0F172A] hover:text-[#B45309] font-semibold transition-colors"
          >
            <span>Initiate Mandate Review</span>
            <ArrowUpRight className="w-4 h-4 text-[#B45309]" />
          </button>
        </div>

      </div>
    </section>
  );
};
