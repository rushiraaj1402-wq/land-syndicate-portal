import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, ArrowRight, ArrowLeft, Check, Copy, MessageSquare, 
  Lock, Building2, CheckCircle2 
} from 'lucide-react';

interface CorporateIntakeFormProps {
  initialCorridor?: string;
  onSuccessClose?: () => void;
  isModal?: boolean;
}

interface IntakeState {
  companyName: string;
  executiveName: string;
  designation: string;
  email: string;
  phone: string;
  corridor: string;
  acreage: string;
  purpose: string;
  timeline: string;
  ncndaAgreed: boolean;
}

const INITIAL_STATE: IntakeState = {
  companyName: '',
  executiveName: '',
  designation: 'CFO',
  email: '',
  phone: '',
  corridor: 'Sanand - Mandal - Becharaji (SMBIR)',
  acreage: '10 - 25 Acres',
  purpose: 'Automotive & Ancillary',
  timeline: 'Immediate (0 - 30 Days)',
  ncndaAgreed: true
};

export const CorporateIntakeForm: React.FC<CorporateIntakeFormProps> = ({
  initialCorridor,
  onSuccessClose,
  isModal = false
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<IntakeState>({
    ...INITIAL_STATE,
    corridor: initialCorridor || INITIAL_STATE.corridor
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('');

  useEffect(() => {
    if (initialCorridor) {
      setFormData((prev) => ({ ...prev, corridor: initialCorridor }));
    }
  }, [initialCorridor]);

  const updateField = (field: keyof IntakeState, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.companyName.trim()) errs.companyName = 'Corporate entity name required';
    if (!formData.executiveName.trim()) errs.executiveName = 'Executive name required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Corporate email required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Direct telephone / mobile required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.ncndaAgreed) errs.ncndaAgreed = 'NCNDA terms must be confirmed';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      const generatedRef = `LSC-${Date.now().toString().slice(-6)}`;
      setReferenceId(generatedRef);
      setStep(3);
    }
  };

  const generateDossierText = () => {
    return `*LAND SYNDICATE CONSULTING - CORPORATE MANDATE*
Reference: ${referenceId || 'LSC-DIRECT-APPLICATION'}
----------------------------------------
*1. Executive & Entity Identification*
- Corporate Entity: ${formData.companyName}
- Signatory: ${formData.executiveName} (${formData.designation})
- Corporate Email: ${formData.email}
- Direct Telephone: ${formData.phone}

*2. Land Parameters*
- Target Corridor: ${formData.corridor}
- Target Contiguous Acreage: ${formData.acreage}
- Industrial Purpose: ${formData.purpose}
- Execution Window: ${formData.timeline}

*3. Confidentiality Protocol*
- Status: NCNDA Confirmed (Gujarat High Court Jurisdiction)
----------------------------------------
Transmitted directly to Syndicate Legal & Revenue Desk.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateDossierText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppDispatch = () => {
    const message = encodeURIComponent(generateDossierText());
    window.open(`https://wa.me/919909923832?text=${message}`, '_blank');
  };

  return (
    <div className={`w-full ${isModal ? '' : 'max-w-3xl mx-auto'}`}>
      
      {/* Header bar */}
      <div className="mb-8 pb-5 border-b border-[#E2DFD7]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B45309]">
            <Lock className="w-3.5 h-3.5" />
            <span>Confidential Syndicate Desk Protocol</span>
          </div>
          <span className="text-[11px] font-mono text-[#64748B]">Bilateral NCNDA Mandate</span>
        </div>
        <h3 className="font-serif-institutional text-2xl sm:text-3xl font-bold text-[#0F172A]">
          Submit Corporate Land Mandate
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] mt-1 font-light">
          Audited survey records and pre-vetted agrarian options are dispatched strictly to authorized corporate promoters, CFOs, and plant heads.
        </p>
      </div>

      {/* 2-Step Progress Indicator */}
      {step < 3 && (
        <div className="flex items-center gap-3 mb-8 text-xs font-mono">
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`flex items-center gap-2 pb-2 border-b-2 transition-colors ${
              step === 1 ? 'border-[#0F172A] text-[#0F172A] font-semibold' : 'border-[#E2DFD7] text-[#64748B]'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#E2DFD7] flex items-center justify-center text-[10px]">1</span>
            <span>Entity & Corridor</span>
          </button>
          <span className="text-[#CBD5E1] pb-2">&rarr;</span>
          <button
            type="button"
            onClick={() => {
              if (validateStep1()) setStep(2);
            }}
            className={`flex items-center gap-2 pb-2 border-b-2 transition-colors ${
              step === 2 ? 'border-[#0F172A] text-[#0F172A] font-semibold' : 'border-[#E2DFD7] text-[#64748B]'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#E2DFD7] flex items-center justify-center text-[10px]">2</span>
            <span>Acreage & Verification</span>
          </button>
        </div>
      )}

      {/* STEP 1: ENTITY & CORRIDOR */}
      {step === 1 && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
                Corporate Entity / Company Name *
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
                placeholder="e.g. Apex Engineering Ltd"
                className={`w-full px-3.5 py-2.5 bg-[#FFFFFF] border rounded-xs text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#0F172A] transition-colors ${
                  errors.companyName ? 'border-red-500' : 'border-[#CBD5E1]'
                }`}
              />
              {errors.companyName && <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
                Authorized Executive Name *
              </label>
              <input
                type="text"
                value={formData.executiveName}
                onChange={(e) => updateField('executiveName', e.target.value)}
                placeholder="e.g. Rajesh Mehta"
                className={`w-full px-3.5 py-2.5 bg-[#FFFFFF] border rounded-xs text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#0F172A] transition-colors ${
                  errors.executiveName ? 'border-red-500' : 'border-[#CBD5E1]'
                }`}
              />
              {errors.executiveName && <p className="text-[11px] text-red-600 mt-1">{errors.executiveName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
                Designation
              </label>
              <select
                value={formData.designation}
                onChange={(e) => updateField('designation', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xs text-sm text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
              >
                <option value="CFO">Chief Financial Officer (CFO)</option>
                <option value="Managing Director">Managing Director / Promoter</option>
                <option value="Plant Head">Plant Head / VP Projects</option>
                <option value="Corporate Strategy">Corporate Strategy Head</option>
                <option value="Legal Counsel">General Counsel / Legal Head</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
                Corporate Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="exec@company.com"
                className={`w-full px-3.5 py-2.5 bg-[#FFFFFF] border rounded-xs text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#0F172A] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#CBD5E1]'
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
                Direct Mobile / Phone *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+91 98..."
                className={`w-full px-3.5 py-2.5 bg-[#FFFFFF] border rounded-xs text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#0F172A] transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-[#CBD5E1]'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
              Preferred Gujarat Industrial Corridor
            </label>
            <select
              value={formData.corridor}
              onChange={(e) => updateField('corridor', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xs text-sm text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
            >
              <option value="Sanand - Mandal - Becharaji (SMBIR)">Sanand - Mandal - Becharaji (SMBIR Automotive Belt)</option>
              <option value="Dholera SIR / Ahmedabad South">Dholera SIR / Ahmedabad South (DMIC & Logistics Spine)</option>
              <option value="Surendranagar Industrial Corridor">Surendranagar Industrial Corridor (Heavy Manufacturing & NH-47)</option>
              <option value="Mehsana Industrial Belt">Mehsana Industrial Belt (Precision Machinery & Export WDFC)</option>
              <option value="Multi-Corridor Feasibility">Multi-Corridor Feasibility (Syndicate Discretion)</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>Continue to Parameters</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: LAND PARAMETERS & NCNDA */}
      {step === 2 && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
                Target Contiguous Acreage
              </label>
              <select
                value={formData.acreage}
                onChange={(e) => updateField('acreage', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xs text-sm text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
              >
                <option value="10 - 25 Acres">10 - 25 Acres (Standard Industrial Unit)</option>
                <option value="25 - 50 Acres">25 - 50 Acres (Large Manufacturing Facility)</option>
                <option value="50+ Acres (Anchor Parcel)">50+ Acres (Anchor Facility / Logistics Mega-Park)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
                Primary Industrial Purpose
              </label>
              <select
                value={formData.purpose}
                onChange={(e) => updateField('purpose', e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xs text-sm text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
              >
                <option value="Automotive & Ancillary">Automotive & Ancillary Assembly</option>
                <option value="Heavy Engineering">Heavy Engineering & Forging</option>
                <option value="Warehousing & Logistics">Warehousing & Multimodal Logistics</option>
                <option value="Electronics & Semiconductor">Electronics & Semiconductor Ancillary</option>
                <option value="Chemical & Clean Tech">Chemical & Clean Energy Storage</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#334155] mb-1.5">
              Execution Horizon
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => updateField('timeline', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xs text-sm text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
            >
              <option value="Immediate (0 - 30 Days)">Immediate Acquisition (0 - 30 Days)</option>
              <option value="Q1 Target (1 - 3 Months)">Q1 Target (1 - 3 Months)</option>
              <option value="Strategic Pipeline (3 - 6 Months)">Strategic Pipeline (3 - 6 Months)</option>
            </select>
          </div>

          {/* NCNDA Agreement Box */}
          <div className="p-4 bg-[#FAF9F6] border border-[#E2DFD7] rounded-xs">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.ncndaAgreed}
                onChange={(e) => updateField('ncndaAgreed', e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-[#CBD5E1] text-[#0F172A] focus:ring-[#0F172A]"
              />
              <span className="text-xs text-[#334155] leading-relaxed">
                <strong className="text-[#0F172A]">Syndicate Bilateral NCNDA Confirmation:</strong> I confirm this mandate is initiated on behalf of an authorized corporate principal. All off-market survey details and title search certificates shared by Land Syndicate Consulting shall remain strictly confidential under Gujarat High Court advisory jurisdiction.
              </span>
            </label>
            {errors.ncndaAgreed && <p className="text-[11px] text-red-600 mt-2">{errors.ncndaAgreed}</p>}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF9F6] hover:bg-[#F4F2EE] text-[#475569] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#E2DFD7] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>Transmit Corporate Mandate</span>
              <Check className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: DISPATCH / SUCCESS CONFIRMATION */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="p-6 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#064E3B] text-white flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#064E3B] block">
                  Mandate Formatted & Verified
                </span>
                <h4 className="font-serif-institutional text-xl font-bold text-[#0F172A] mt-0.5">
                  Reference: {referenceId}
                </h4>
                <p className="text-xs text-[#334155] mt-1">
                  Your mandate has been compiled according to Gujarat High Court & Revenue title protocols. Proceed to dispatch directly to Counsel or copy the formatted dossier.
                </p>
              </div>
            </div>
          </div>

          {/* Formatted Dossier Preview */}
          <div className="bg-[#FAF9F6] border border-[#E2DFD7] rounded-xs p-4 font-mono text-xs text-[#334155] space-y-1.5 whitespace-pre-line leading-relaxed">
            {generateDossierText()}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleWhatsAppDispatch}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#064E3B] hover:bg-[#065F46] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>Dispatch via Counsel WhatsApp</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FFFFFF] hover:bg-[#F4F2EE] text-[#0F172A] border border-[#E2DFD7] text-xs font-mono uppercase tracking-wider rounded-xs transition-colors"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-[#064E3B]" /> : <Copy className="w-4 h-4 text-[#475569]" />}
              <span>{copied ? 'Dossier Copied' : 'Copy Mandate'}</span>
            </button>

            {isModal && onSuccessClose && (
              <button
                onClick={onSuccessClose}
                className="px-4 py-3.5 bg-[#FAF9F6] hover:bg-[#F4F2EE] text-[#64748B] text-xs font-mono uppercase tracking-wider rounded-xs border border-[#E2DFD7]"
              >
                Close
              </button>
            )}
          </div>

          <div className="text-center pt-2">
            <span className="text-[11px] font-mono text-[#64748B]">
              Direct Counsel Liaison: +91 99099 23832 &bull; Gujarat Chambers / SG Highway Corridor
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
