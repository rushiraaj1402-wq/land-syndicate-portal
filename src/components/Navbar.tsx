import React, { useState, useEffect } from 'react';
import { Shield, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenIntakeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenIntakeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E2DFD7] py-3.5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]'
          : 'bg-[#FAF9F6] border-b border-[#E2DFD7]/80 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Institutional Wordmark */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 rounded-sm bg-[#0F172A] text-white flex items-center justify-center font-cinzel font-semibold text-sm tracking-wider shadow-sm">
              LSC
            </div>
            <div className="flex flex-col">
              <span className="font-serif-institutional text-[#0F172A] font-bold text-base sm:text-lg tracking-tight leading-none">
                LAND SYNDICATE CONSULTING
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#64748B] uppercase mt-1">
                Gujarat Industrial Land Advisory &bull; Est. 2012
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('corridors')}
              className="text-[#334155] hover:text-[#0F172A] font-medium text-sm tracking-wide transition-colors"
            >
              Mandate Focus
            </button>
            <button
              onClick={() => scrollToSection('proof')}
              className="text-[#334155] hover:text-[#0F172A] font-medium text-sm tracking-wide transition-colors"
            >
              Credentials
            </button>
            <button
              onClick={() => scrollToSection('mandates')}
              className="text-[#334155] hover:text-[#0F172A] font-medium text-sm tracking-wide transition-colors"
            >
              Track Record
            </button>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-[#475569] px-2.5 py-1 bg-[#F4F2EE] border border-[#E2DFD7] rounded-sm">
              <Shield className="w-3.5 h-3.5 text-[#B45309]" />
              <span>Senior Counsel Diligence Desk</span>
            </div>
            <button
              onClick={onOpenIntakeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-all shadow-sm active:translate-y-0.5"
            >
              <span>Apply for Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenIntakeModal}
              className="px-3 py-1.5 bg-[#0F172A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#334155] hover:text-[#0F172A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E2DFD7] px-6 py-5 mt-3 space-y-3 shadow-lg">
          <button
            onClick={() => scrollToSection('corridors')}
            className="block w-full text-left py-2 text-sm font-medium text-[#1E293B] hover:text-[#B45309]"
          >
            Mandate Focus
          </button>
          <button
            onClick={() => scrollToSection('proof')}
            className="block w-full text-left py-2 text-sm font-medium text-[#1E293B] hover:text-[#B45309]"
          >
            Credentials
          </button>
          <button
            onClick={() => scrollToSection('mandates')}
            className="block w-full text-left py-2 text-sm font-medium text-[#1E293B] hover:text-[#B45309]"
          >
            Track Record
          </button>
          <div className="pt-3 border-t border-[#E2DFD7]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIntakeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0F172A] text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              <span>Apply for Mandate</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
