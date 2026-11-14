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

export type Designation =
  | 'Trustee / Family Office'
  | 'Managing Director / Promoter'
  | 'Chief Financial Officer (CFO)'
  | 'Plant / Infrastructure Head'
  | 'Principal Investor';

export type AcquisitionPurpose =
  | 'Family Trust / Wealth Preservation'
  | 'Strategic Land Banking / Appreciation'
  | 'Warehousing & Logistics'
  | 'Manufacturing & Industrial'
  | 'Commercial / Energy';

export type AcreageNeeded =
  | '1 - 3 Acres (4,000 - 12,000 sq.m)'
  | '3 - 5 Acres'
  | '5 - 10 Acres'
  | '10 - 25 Acres'
  | '25 - 50 Acres'
  | '50+ Acres';

export type BudgetAllocation =
  | '₹2 - 5 Crores'
  | '₹5 - 10 Crores'
  | '₹10 - 25 Crores'
  | '₹25 - 50 Crores'
  | '₹50+ Crores';

export interface CorporateIntakeData {
  // Step 1: Entity & Executive Identity
  companyName: string;
  executiveName: string;
  designation: Designation;
  cinGstin: string;
  hqCity: string;
  email: string;
  directPhone: string;

  // Step 2: Land Parameters
  purpose: AcquisitionPurpose;
  acreageNeeded: AcreageNeeded;
  preferredCorridor:
    | 'Sanand - Mandal - Becharaji (SMBIR)'
    | 'Dholera SIR / Ahmedabad South'
    | 'Surendranagar Industrial Corridor'
    | 'Mehsana Industrial Belt'
    | 'Corridor Agnostic / High Feasibility';
  budgetAllocation: BudgetAllocation;

  // Step 3: Execution Timeline & Syndicate Protocol Acceptance
  executionTimeline: 'Immediate (0 - 30 Days)' | 'Q1 Target (1 - 3 Months)' | 'Strategic Pipeline (3 - 6 Months)';
  hasSpecialZoningNeeds: boolean;
  specialZoningNotes: string;
  ncndaConfirmed: boolean;
}
