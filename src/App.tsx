import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstitutionalMoat } from './components/InstitutionalMoat';
import { StrategicCorridors } from './components/StrategicCorridors';
import { SyndicateMandates } from './components/SyndicateMandates';
import { CorporateIntakeForm } from './components/CorporateIntakeForm';
import { Footer } from './components/Footer';
import { X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCorridorForIntake, setSelectedCorridorForIntake] = useState<string>(
    'Sanand - Mandal - Becharaji (SMBIR)'
  );

  const handleOpenIntakeWithCorridor = (corridorName: string) => {
    setSelectedCorridorForIntake(corridorName);
    const intakeSection = document.getElementById('intake-section');
    if (intakeSection) {
      intakeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  const handleOpenGeneralIntake = () => {
    setModalOpen(true);
  };

  const handleScrollToIntake = () => {
    const intakeSection = document.getElementById('intake-section');
    if (intakeSection) {
      intakeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col font-sans selection:bg-[#FAECDC] selection:text-[#78350F]">
      
      {/* Minimalist Institutional Header */}
      <Navbar onOpenIntakeModal={handleOpenGeneralIntake} />

      {/* Main Content Stream */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero 
          onOpenIntakeModal={handleOpenGeneralIntake}
          onScrollToIntake={handleScrollToIntake}
        />

        {/* 2. 3 Quiet Proof Cards (The Moat in 3 sentences) */}
        <InstitutionalMoat onScrollToIntake={handleScrollToIntake} />

        {/* 3. Corridors Strip (Minimalist 4-card row) */}
        <StrategicCorridors onSelectCorridor={handleOpenIntakeWithCorridor} />

        {/* 4. Recent Executed Mandates (Clean 3-column ledger) */}
        <SyndicateMandates onScrollToIntake={handleScrollToIntake} />

        {/* 5. The Streamlined Intake Form */}
        <section id="intake-section" className="py-24 bg-[#FFFFFF] border-b border-[#E2DFD7] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FAF9F6] border border-[#E2DFD7] text-[#0F172A] text-xs font-mono uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
                <span>Executive Engagement Gateway</span>
              </div>
              <h2 className="font-serif-institutional text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
                Initiate Land Acquisition Mandate
              </h2>
              <p className="text-[#475569] text-base font-light mt-3">
                Corporate Manufacturing, Family Trusts & Private Wealth. Complete the qualification below to receive certified High Court title search reports and registered off-market option dockets.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E2DFD7] p-6 sm:p-10 rounded-sm shadow-xs">
              <CorporateIntakeForm 
                initialCorridor={selectedCorridorForIntake} 
                isModal={false} 
              />
            </div>
          </div>
        </section>

      </main>

      {/* Clean, Dignified Footer */}
      <Footer />

      {/* Modal Dialog for Corporate Intake */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F172A]/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#E2DFD7] rounded-sm p-6 sm:p-10 my-8 max-h-[92vh] overflow-y-auto shadow-2xl">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-sm bg-[#FAF9F6] border border-[#E2DFD7] text-[#64748B] hover:text-[#0F172A] hover:border-[#0F172A] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <CorporateIntakeForm
              initialCorridor={selectedCorridorForIntake}
              onSuccessClose={() => setModalOpen(false)}
              isModal={true}
            />

          </div>
        </div>
      )}

      {/* Institutional Fast Action Floating Desk */}
      <aside 
        aria-label="Syndicate Hotline" 
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-3 p-2 pl-4 rounded-sm bg-[#FFFFFF] border border-[#E2DFD7] shadow-[0_4px_20px_rgba(15,23,42,0.1)]"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-[#334155]">
          <span className="w-2 h-2 rounded-full bg-[#064E3B]" />
          <span>Counsel Desk Active</span>
        </div>
        <button
          onClick={handleScrollToIntake}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors"
        >
          <span>Apply</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </aside>

    </div>
  );
}

export default App;
