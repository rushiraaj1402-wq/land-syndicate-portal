export interface Mandate {
  id: string;
  title: string;
  corridor: string;
  acreage: number;
  statusBadge: string;
  statusColor: 'emerald' | 'amber' | 'blue';
  dealStructure: string;
  titleAuditRef: string;
  highlights: string[];
  zoning: string;
  completionQuarter: string;
}

export interface Corridor {
  id: string;
  name: string;
  shortCode: string;
  district: string;
  strategicSignificance: string;
  keyInfrastructure: string[];
  powerWaterFeasibility: string;
  typicalTicketSize: string;
  activeSurveysUnderMandate: number;
  focalIndustries: string[];
}

export interface AuditStep {
  tierNumber: number;
  title: string;
  statutoryScope: string;
  primaryRiskMitigated: string;
  clearingAuthority: string;
  deliverables: string[];
}

export interface CorporateIntakeData {
  // Step 1: Entity & Executive Identity
  companyName: string;
  executiveName: string;
  designation: 'CFO' | 'Managing Director' | 'Plant Head' | 'Corporate Strategy Head' | 'Other';
  cinGstin: string;
  hqCity: string;
  email: string;
  directPhone: string;

  // Step 2: Land Parameters
  purpose: 'Automotive & Ancillary' | 'Heavy Engineering' | 'Warehousing & Logistics' | 'Chemical & Pharma (GIDC/PCPIR)' | 'Renewable & Green Hydrogen' | 'Other Industrial';
  acreageNeeded: '5 - 10 Acres' | '10 - 25 Acres' | '25 - 50 Acres' | '50+ Acres (Anchor Parcel)';
  preferredCorridor: 'Sanand - Mandal - Becharaji (SMBIR)' | 'Dholera SIR / Ahmedabad South' | 'Surendranagar Industrial Corridor' | 'Mehsana Industrial Belt' | 'Corridor Agnostic / High Feasibility';
  budgetAllocation: '₹5 - 10 Crores' | '₹10 - 25 Crores' | '₹25 - 50 Crores' | '₹50+ Crores';

  // Step 3: Execution Timeline & Syndicate Protocol Acceptance
  executionTimeline: 'Immediate (0 - 30 Days)' | 'Q1 Target (1 - 3 Months)' | 'Strategic Pipeline (3 - 6 Months)';
  hasSpecialZoningNeeds: boolean;
  specialZoningNotes: string;
  ncndaConfirmed: boolean;
}
