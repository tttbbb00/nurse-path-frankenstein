export type Country = 'US' | 'AU' | 'NZ' | 'SG' | 'ALL'

export interface FactCard {
  id: string
  country: Exclude<Country, 'ALL'>
  title: string
  tags: string[]
  body: string
  sources: { label: string; url: string }[]
  uncertain?: boolean
  uncertainNote?: string
}

/** Runtime index mirrored from /knowledge/*.md — keep sources official. */
export const FACTS: FactCard[] = [
  {
    id: 'us-nclex-boards',
    country: 'US',
    title: 'US licensure is state-based; NCLEX-RN via NCSBN',
    tags: ['us', 'nclex', 'license', 'board', 'ncsbn', 'rn', '美国', '执照', '考试'],
    body:
      'Nursing practice authority sits with each state board of nursing. Most jurisdictions use the NCLEX-RN exam developed by NCSBN. Start with the target state board, then confirm NCLEX eligibility for internationally educated nurses.',
    sources: [
      { label: 'NCSBN — NCLEX', url: 'https://www.ncsbn.org/nclex.htm' },
      { label: 'NCSBN', url: 'https://www.ncsbn.org/' },
      {
        label: 'NCSBN — nursing jurisdictions',
        url: 'https://www.ncsbn.org/nursing-regulation/nursing-jurisdiction.page',
      },
    ],
  },
  {
    id: 'us-nysed',
    country: 'US',
    title: 'Example board: New York (NYSED) Nursing',
    tags: ['us', 'new york', 'nysed', 'license', '纽约', '州'],
    body:
      'NYSED Office of the Professions publishes RN license requirements, applications, and fee notices for New York. Use it as a concrete board example; other states have their own sites and rules.',
    sources: [
      {
        label: 'NYSED — Nursing',
        url: 'https://www.op.nysed.gov/professions/nursing',
      },
    ],
    uncertain: true,
    uncertainNote:
      'Exact fees and processing times change — read NYSED on the day you apply; this app does not store fee numbers.',
  },
  {
    id: 'us-credentials',
    country: 'US',
    title: 'Credentials evaluation for internationally educated nurses',
    tags: ['us', 'cgfns', 'credentials', 'ien', '评估', '学历'],
    body:
      'Many US boards require a credentials evaluation for internationally educated nurses. CGFNS is commonly referenced but not universally required — acceptance depends on the state board.',
    sources: [
      { label: 'CGFNS International', url: 'https://www.cgfns.org/' },
      { label: 'NCSBN', url: 'https://www.ncsbn.org/' },
    ],
    uncertain: true,
    uncertainNote:
      'Which evaluator a given state accepts must be confirmed with that board.',
  },
  {
    id: 'us-eb3',
    country: 'US',
    title: 'USCIS EB-3 permanent worker overview (separate from license)',
    tags: ['us', 'eb-3', 'eb3', 'uscis', 'visa', '移民', '绿卡', 'sponsorship'],
    body:
      'Employment-based third preference (EB-3) is described by USCIS as a permanent worker category. Licensure and immigration are separate tracks: a nurse still needs the correct state license path and a lawful work authorization path (often employer-driven).',
    sources: [
      {
        label: 'USCIS — EB-3',
        url: 'https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-third-preference-eb-3',
      },
      {
        label: 'USCIS — Working in the United States',
        url: 'https://www.uscis.gov/working-in-the-united-states',
      },
    ],
    uncertain: true,
    uncertainNote:
      'Visa wait times, priority dates, and salary ranges are not invented here — check USCIS / counsel.',
  },
  {
    id: 'au-regulators',
    country: 'AU',
    title: 'Australia: AHPRA + NMBA registration',
    tags: ['au', 'australia', 'ahpra', 'nmba', 'registration', '澳洲', '注册'],
    body:
      'Nurses practise in Australia under NMBA registration administered through AHPRA processes. Internationally qualified nurses should start on NMBA/AHPRA pages for current IQN pathways, English standards, and application steps.',
    sources: [
      { label: 'AHPRA', url: 'https://www.ahpra.gov.au/' },
      {
        label: 'Nursing and Midwifery Board of Australia',
        url: 'https://www.nursingmidwiferyboard.gov.au/',
      },
      {
        label: 'AHPRA — Registration',
        url: 'https://www.ahpra.gov.au/Registration.aspx',
      },
    ],
  },
  {
    id: 'au-migration',
    country: 'AU',
    title: 'Australia migration is Home Affairs (not AHPRA)',
    tags: ['au', 'visa', 'home affairs', 'migration', '签证', '移民'],
    body:
      'Skilled migration and visas are managed by the Department of Home Affairs. Registration with NMBA and visa eligibility are related but separate. Occupation lists and program rules change by program year.',
    sources: [
      {
        label: 'Department of Home Affairs — Immigration',
        url: 'https://immi.homeaffairs.gov.au/',
      },
    ],
    uncertain: true,
    uncertainNote:
      'Points, invitation rounds, and processing times must be taken from Home Affairs — not from this card.',
  },
  {
    id: 'nz-ncnz',
    country: 'NZ',
    title: 'New Zealand: Nursing Council (NCNZ) registration',
    tags: ['nz', 'new zealand', 'ncnz', 'registration', '新西兰', '注册'],
    body:
      'Nursing Council of New Zealand publishes registration information for internationally qualified nurses, including application steps and competence / English expectations as currently in force.',
    sources: [
      {
        label: 'Nursing Council of New Zealand',
        url: 'https://www.nursingcouncil.org.nz/',
      },
    ],
    uncertain: true,
    uncertainNote: 'Fee tables and SLAs change — use NCNZ pages on application day.',
  },
  {
    id: 'nz-immigration',
    country: 'NZ',
    title: 'NZ visas via Immigration New Zealand',
    tags: ['nz', 'visa', 'immigration', '签证', '移民'],
    body:
      'Work and residence pathways are published by Immigration New Zealand. Treat visa planning as a separate track from NCNZ registration.',
    sources: [
      {
        label: 'Immigration New Zealand',
        url: 'https://www.immigration.govt.nz/',
      },
    ],
    uncertain: true,
    uncertainNote: 'Occupation lists and points settings change — verify on Immigration NZ.',
  },
  {
    id: 'sg-snb',
    country: 'SG',
    title: 'Singapore: Singapore Nursing Board (SNB)',
    tags: ['sg', 'singapore', 'snb', 'registration', '新加坡', '注册'],
    body:
      'Singapore Nursing Board registers nurses and publishes guidance for foreign-trained applicants. Follow the current SNB checklist for documents and any required assessments.',
    sources: [
      {
        label: 'Singapore Nursing Board',
        url: 'https://www.healthprofessionals.gov.sg/snb',
      },
    ],
    uncertain: true,
    uncertainNote: 'Processing times and fees — read SNB notices; no invented numbers here.',
  },
  {
    id: 'sg-mom',
    country: 'SG',
    title: 'Singapore work passes via MOM',
    tags: ['sg', 'mom', 'work pass', 'employment pass', '工签', '准证'],
    body:
      'Ministry of Manpower governs work passes. Employment typically requires an employer-driven pass that meets MOM criteria. Align SNB registration planning with MOM work-pass rules.',
    sources: [
      { label: 'Ministry of Manpower', url: 'https://www.mom.gov.sg/' },
    ],
    uncertain: true,
    uncertainNote: 'Salary thresholds and quotas change — check MOM; never invent figures.',
  },
]

export const COUNTRY_LABEL: Record<Exclude<Country, 'ALL'>, string> = {
  US: 'United States',
  AU: 'Australia',
  NZ: 'New Zealand',
  SG: 'Singapore',
}
