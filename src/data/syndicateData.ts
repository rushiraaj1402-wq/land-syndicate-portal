import { Mandate, Corridor, AuditStep } from '../types';

export const STRATEGIC_CORRIDORS: Corridor[] = [
  {
    id: 'smbir',
    name: 'Sanand - Mandal - Becharaji (SMBIR)',
    shortCode: 'SMBIR-01',
    district: 'Ahmedabad & Mehsana Districts',
    strategicSignificance: 'Global EV, automotive assembly, and advanced semiconductor ecosystem. Direct interface with DMIC corridor and Viramgam multimodal logistics interchange.',
    keyInfrastructure: [
      '6-Lane Sanand-Kadi State Highway & SH-17 link',
      'Dedicated 66kV/11kV GETCO sub-station feeder',
      'GIDC Phase II & III perimeter zone'
    ],
    powerWaterFeasibility: 'High-volume Narmada canal feeder industrial tap ready + UGVCL uninterrupted industrial circuit.',
    typicalTicketSize: '₹18 Cr - ₹85 Cr',
    activeSurveysUnderMandate: 14,
    focalIndustries: ['EV Assembly & Batteries', 'Precision Auto Components', 'Defense Manufacturing', 'Heavy Logistics']
  },
  {
    id: 'dholera',
    name: 'Dholera SIR / Ahmedabad South',
    shortCode: 'DSIR-02',
    district: 'Ahmedabad South / Dholera Special Investment Region',
    strategicSignificance: 'First greenfield smart city in India spanning 920 sq km. Platinum-grade anchor zone for Semiconductor Fabs, green hydrogen plants, and global air cargo nodes.',
    keyInfrastructure: [
      'Ahmedabad-Dholera 4-Lane Access-Controlled Expressway',
      'Dholera International Cargo Airport (Target 2026)',
      'Direct DFC Rail line spur under execution'
    ],
    powerWaterFeasibility: 'Torrent Power 400kV dedicated transmission ring + 150 MLD recycled industrial water supply.',
    typicalTicketSize: '₹25 Cr - ₹120 Cr',
    activeSurveysUnderMandate: 22,
    focalIndustries: ['Semiconductor Fabrication', 'Hyperscale Data Centers', 'Aerospace Engineering', 'Green Chemical Storage']
  },
  {
    id: 'surendranagar',
    name: 'Surendranagar Industrial Corridor',
    shortCode: 'SNGR-03',
    district: 'Surendranagar District (Wadhwan - Limbdi Axis)',
    strategicSignificance: 'The strategic manufacturing gateway connecting Saurashtra ports (Kandla, Mundra, Pipavav) with Central Gujarat. Premium dry port and heavy engineering hinterland.',
    keyInfrastructure: [
      'NH-47 6-Lane Expressway (Ahmedabad - Rajkot Spine)',
      'Direct Broad Gauge Rail Siding feasibility',
      'PGVCL 132kV transmission alignment'
    ],
    powerWaterFeasibility: 'Narmada Saurashtra Branch Canal industrial lift pipeline + PGVCL industrial corridor line.',
    typicalTicketSize: '₹12 Cr - ₹45 Cr',
    activeSurveysUnderMandate: 18,
    focalIndustries: ['Forging & Castings', 'Ceramics & Specialized Minerals', 'Heavy Engineering', 'Cold-Chain Agro-Logistics']
  },
  {
    id: 'mehsana',
    name: 'Mehsana Industrial Belt',
    shortCode: 'MHS-04',
    district: 'Mehsana & Kadi Industrial Cluster',
    strategicSignificance: 'Longstanding mature industrial core adjacent to northern consumer markets, ONGC hydrocarbon reserves, and Western Dedicated Freight Corridor (WDFC).',
    keyInfrastructure: [
      'SH-41 & NH-58 North-South Heavy Transport Corridor',
      'Western Dedicated Freight Corridor (WDFC) railheads',
      'UGVCL high-density industrial grid'
    ],
    powerWaterFeasibility: 'Established industrial borewell permission + Sabarmati basin pipeline feeder network.',
    typicalTicketSize: '₹15 Cr - ₹60 Cr',
    activeSurveysUnderMandate: 11,
    focalIndustries: ['Pharmaceutical APIs', 'Dairy Engineering & Processing', 'Textile Machinery', 'Oil & Gas Support Ancillaries']
  }
];

export const SYNDICATE_MANDATES: Mandate[] = [
  {
    id: 'mandate-1',
    title: 'Sanand SMBIR Auto Tier-1 Hub',
    corridor: 'Sanand - Mandal - Becharaji (SH-17 Proximity)',
    acreage: 14.2,
    statusBadge: 'MANDATE EXECUTED - SALE DEED REGISTERED',
    statusColor: 'emerald',
    dealStructure: 'Private Bilateral Acquisition via In-House Farmer Holding',
    titleAuditRef: 'HC-SRCH-2024-GJ-8841 (Clear 34-Year Search)',
    zoning: 'Final Non-Agricultural (NA) Industrial Order Section 65',
    completionQuarter: 'Q3 2024',
    highlights: [
      'Contiguous 4-survey parcel consolidated from 3 separate agrarian families with zero co-sharer disputes.',
      'Clear Section 43 tenancy restriction lifting obtained from Sub-Divisional Magistrate (SDM) Viramgam.',
      '350 ft frontage on 4-lane secondary arterial road with dedicated GETCO dual-feeder connection approval.'
    ]
  },
  {
    id: 'mandate-2',
    title: 'Dholera Expressway Logistics Mega Park',
    corridor: 'Ahmedabad South - Dholera SIR Outer Ring',
    acreage: 22.8,
    statusBadge: 'UNDER REGISTERED BANAKHAT (OFF-MARKET)',
    statusColor: 'amber',
    dealStructure: 'Syndicate Exclusive Option with Escrow Title Clearing',
    titleAuditRef: 'LSC-AUD-DLR-0922 (Revenue Records Cleared)',
    zoning: 'Designated Industrial Logistics (Town Planning Scheme Approved)',
    completionQuarter: 'Active Private Placement',
    highlights: [
      'Zero Gujarat Revenue Tribunal (GRT) or Special Civil Application (SCA) encumbrance across all title sheets.',
      'Direct 45-meter DP planned arterial road approach with zero agricultural easement encumbrance.',
      'Full indemnification structure backed by Senior Counsel title guarantee certificate.'
    ]
  },
  {
    id: 'mandate-3',
    title: 'Surendranagar Heavy Engineering Foundry Campus',
    corridor: 'Wadhwan - Limbdi Industrial Spine (NH-47)',
    acreage: 35.0,
    statusBadge: 'TITLE CERTIFIED / DEAL CLOSED',
    statusColor: 'blue',
    dealStructure: 'Direct Corporate Transfer with Sec 63 Permission Expedited',
    titleAuditRef: 'SNGR-REV-DIV-412 (Collectorate Sanctioned)',
    zoning: 'Heavy Engineering Industrial Zone (GPCB Orange Category Clearance)',
    completionQuarter: 'Q1 2024',
    highlights: [
      'Comprehensive 32-year title trail traced across old taluk registers without missing mutation links.',
      'Immediate 66kV industrial high-tension tap clearance secured from PGVCL divisional engineer.',
      'Acquisition delivered 18% under prevailing market speculative broker quotes through direct agrarian buyouts.'
    ]
  }
];

export const AUDIT_TIERS: AuditStep[] = [
  {
    tierNumber: 1,
    title: 'Continuous 7/12 & 8A Mutation Reconstruction',
    statutoryScope: 'Bombay Land Revenue Code, 1879 - Sections 135B, 135C & 135D',
    primaryRiskMitigated: 'Missing heir registrations, unrecorded oral partitions (Pramukh Vechani), bogus wills, and unserved notices under Section 135D.',
    clearingAuthority: 'Talati Office, Mamlatdar E-Dhara Kendra & District Collector Record Room.',
    deliverables: [
      'Full certified archival Village Form 7/12 chain from 1951 to present date.',
      'Detailed audit of Hakka Patrak (Village Form 6) mutation entries with official certified notes.',
      'Pedigree Tree (Vanshavali) verification stamped by sworn local authority and family elders.'
    ]
  },
  {
    tierNumber: 2,
    title: 'Tenancy, Land Ceiling & Tribal Encroachment Diligence',
    statutoryScope: 'Gujarat Tenancy & Agricultural Lands Act, 1948 (Sections 32G, 43, 63 & 73AA)',
    primaryRiskMitigated: 'Illegal conversion of tenant land (Ghanot), pending New Tenure (Nava Sharat) restrictions, and tribal land alienations under Sec 73AA/73AB.',
    clearingAuthority: 'Sub-Divisional Magistrate (SDM), Deputy Collector (Tenancy), & Gujarat Revenue Tribunal (GRT).',
    deliverables: [
      'Verification of Premium payment (Prajiya/Chhut) history where Old Tenure conversions occurred.',
      'Tenancy Clearance Certificate ensuring no pending Section 84C suo motu reopening proceedings.',
      'Affidavit of Non-Tribal status with certified revenue field demarcation.'
    ]
  },
  {
    tierNumber: 3,
    title: 'High Court & Revenue Tribunal Litigation Search',
    statutoryScope: 'Civil Procedure Code, 1908 & Gujarat Land Revenue Rules',
    primaryRiskMitigated: 'Concealed lis pendens, interim injunctions, co-sharer partition suits, arbitration attachments, and pending GRT revision applications.',
    clearingAuthority: 'Gujarat High Court, City Civil Courts, Taluk Senior Civil Judge, & Revenue Divisional Commissioner.',
    deliverables: [
      '30-to-35 Year Title Search Report signed by Senior Legal Counsel (32+ Years Bar Experience).',
      'Search across Sub-Registrar Index-II registers for undeclared registered agreements to sell (Banakhat).',
      'Mandatory Public Legal Notice in vernacular (Sandesh / Gujarat Samachar) and national dailies with 14-day objection window.'
    ]
  },
  {
    tierNumber: 4,
    title: 'Zoning, Section 65 NA Feasibility & Utility Demarcation',
    statutoryScope: 'Gujarat Town Planning & Urban Development Act, 1976 (GTPUDA) & GPCB Regulations',
    primaryRiskMitigated: 'Land-locked survey numbers, road-widening alignment cuts, buffer zone restrictions (forest/water bodies), and industrial non-feasibility.',
    clearingAuthority: 'AUDA / Dholera SIRDA / Collector Revenue Branch, DISHA, & GETCO/UGVCL/PGVCL.',
    deliverables: [
      'DILR (District Inspector of Land Records) official electronic total station survey & boundary pegging.',
      'Town Planning (TP) scheme reservation audit (checking green belts, roads, social infrastructure cuts).',
      'Feasibility memo for industrial conversion under Section 65 / Section 65A NA with GETCO substation distance mapping.'
    ]
  }
];

export const INSTITUTIONAL_PILLARS = [
  {
    id: 'counsel',
    title: '32-Year Senior Counsel Litigation Clearing',
    subtitle: 'Institutional Legal Moat',
    description: 'Every parcel audited by senior bar advocates with over three decades in Gujarat High Court and Gujarat Revenue Tribunal (GRT). We eliminate disguised lis pendens, undisclosed banakhats, and family partition claims before you execute an LOI.',
    badge: 'Senior Bar Audit',
    metrics: 'Zero Post-Closing Litigation in 12 Years',
    keyPoints: [
      'Complete Sub-Registrar Index-II digital & manual ledger search',
      'Exhaustive Vanshavali (lineage) tracing with sworn family indemnities',
      'Certified Legal Opinion issued with full professional indemnity backing'
    ]
  },
  {
    id: 'revenue',
    title: 'Ex-Gujarat Assembly Secretariat Revenue Liaison',
    subtitle: 'Regulatory & Revenue Bureaucracy',
    description: 'Navigating Gujarat Land Revenue Code (Sections 43, 63, 65, 65A) requires precision at the Sachivalaya, Collectorate, and Prant Officer tiers. Our veteran revenue advisory expedites bona fide industrial purchaser approvals and NA sanctions.',
    badge: 'Sachivalaya Precision',
    metrics: 'Predictable 45-60 Day NA Turnaround',
    keyPoints: [
      'Section 63 bona fide industrial purchaser permissions (BIP clearance)',
      'Section 43 tenancy restriction and premium calculation mitigation',
      'DILR government electronic survey coordination with adjacent survey owners'
    ]
  },
  {
    id: 'farmer-holding',
    title: 'Strict In-House Farmer Certificate Holding',
    subtitle: 'Proprietary Acquisition Structure',
    description: 'Corporate buyers and family trusts cannot acquire agricultural land in Gujarat without complex, risky escrow arrangements. Our internal farmer certificate status lawful bridge protects both 50-acre corporate plants and 1-to-3 acre private family trust land banks against Section 63 tenancy hurdles, enabling direct, lawful land assembly before industrial conversion.',
    badge: 'Direct Agrarian Holding',
    metrics: 'Eliminates Broker Escrow Exposure',
    keyPoints: [
      'Direct agrarian-to-agrarian registered Banakhat and land consolidation',
      'No third-party intermediary holding risks or shadow beneficial ownership',
      'Clean statutory transfer to client corporate entity upon Section 65 conversion'
    ]
  }
];
