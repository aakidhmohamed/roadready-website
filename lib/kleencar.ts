export const CAR_TYPES = ['Sedan / hatchback', 'SUV / crossover', 'Van / double cab', 'Not sure'] as const;
export const PRIORITIES = ['Cabin reset', 'Exterior wash', 'Tyres and trim', 'A simple full clean'] as const;
export const SETUP_LEVELS = ['Keep it essential', 'Balanced first reset', 'Most complete route'] as const;

export type CarType = (typeof CAR_TYPES)[number];
export type Priority = (typeof PRIORITIES)[number];
export type SetupLevel = (typeof SETUP_LEVELS)[number];
export type SetupName = 'Essentials' | 'New-to-You Reset' | 'Complete Reset';
export type QuizAnswers = { carType: CarType; priority: Priority; level: SetupLevel };

export const SETUPS: Array<{ name: SetupName; descriptor: string; jobs: string[] }> = [
  { name: 'Essentials', descriptor: 'A lean first-clean routine for the jobs you care about most.', jobs: ['Exterior wash', 'Dedicated cloths', 'Simple finishing step'] },
  { name: 'New-to-You Reset', descriptor: 'A balanced inside-and-out starting routine for a newly purchased car.', jobs: ['Exterior wash', 'Cabin touchpoints', 'Tyres and trim', 'Dedicated cloths'] },
  { name: 'Complete Reset', descriptor: 'A broader first-pass routine for owners who want to cover more on day one.', jobs: ['Exterior wash', 'Cabin reset', 'Tyres and trim', 'Detailing tools', 'Dedicated cloths'] },
];

export function recommendSetup(answers: QuizAnswers): SetupName {
  if (answers.level === 'Most complete route') return 'Complete Reset';
  if (answers.level === 'Keep it essential') return 'Essentials';
  return answers.carType === 'Van / double cab' ? 'Complete Reset' : 'New-to-You Reset';
}

export const PRODUCT_JOBS = [
  { name: 'Wash', purpose: 'Lifts everyday road dirt from exterior bodywork as the first step.' },
  { name: 'Interior', purpose: 'Covers the hard cabin surfaces you touch and see every day.' },
  { name: 'Tyres + trim', purpose: 'Finishes the dark exterior details that frame a clean car.' },
  { name: 'Microfibre', purpose: 'Keeps washing, drying and finishing jobs separate.' },
  { name: 'Tools', purpose: 'Helps apply or agitate product where hands and towels cannot.' },
] as const;

// Populate only with verified business facts. Missing values are treated as unavailable.
export const BUSINESS_DETAILS = { businessName: 'KleenCar', whatsappNumber: '94705312147', enquiryEndpoint: '', privacyUrl: '', responseExpectation: '' } as const;
export const hasWhatsApp = Boolean(BUSINESS_DETAILS.whatsappNumber);
export const hasEnquiryEndpoint = Boolean(BUSINESS_DETAILS.enquiryEndpoint);

