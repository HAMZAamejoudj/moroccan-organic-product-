// Every value here is a fact that is NOT confirmed yet, except where stated.
// While a value is null, the sentence, row, cell or block that uses it is hidden.
// Never show placeholders on the live site and never invent a value.

export interface Address {
  street: string | null;
  city: string | null;
  postalCode: string | null;
  country: string | null;
}

export interface Certification {
  name: string;
  body: string;
  number: string;
  scope: string;
  url: string | null;
}

export interface BulkFormat {
  size: string; // e.g. "25 L"
  use: string; // short use under the size, e.g. "Jerrycan for production"
}

export interface BusinessFacts {
  // Company
  legalName: string | null; // e.g. "LTD"
  registrationNumber: string | null;
  countriesServedCount: string | null; // e.g. "30"
  shippingDestinations: string | null; // main destinations, free text
  producerOrTraderAnswer: string | null; // honest answer: what is pressed in-house vs sourced
  operations: string[] | null; // "What We Do" bullets (sourcing, pressing, testing, filling, export)
  videoCallsAvailable: boolean | null;

  // Contact
  phone: string | null;
  whatsapp: string | null;
  email: string | null; // CONFIRMED by the owner
  address: Address | null;
  openingHours: string | null;
  mapsEmbedUrl: string | null;
  responseTimeHours: string | null; // e.g. "24"
  social: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
    tiktok: string | null;
    youtube: string | null;
  };

  // Range
  sellsCulinaryArganOil: boolean | null; // owner has not confirmed yet -> culinary page not built
  deodorizedOnRequest: boolean | null;
  hairSerumIngredients: string | null;
  beardOilBlend: string | null;
  beardOilEssentialOils: string | null;
  otherBlends: string | null;
  traditionalProductFormats: string | null;

  // Formats, quantities, times
  bulkFormats: BulkFormat[] | null; // e.g. [{ size: "25 L", use: "Jerrycan" }, { size: "200 L", use: "Drum" }]
  retailBottleSizes: string | null; // e.g. "30 ml, 50 ml, 100 ml"
  bulkMinimumOrder: string | null; // in litres
  privateLabelMoqScope: 'product' | 'order' | null; // 50 pieces per product or per order
  privateLabelMixedSizes: string | null;
  shelfLife: string | null;
  leadTimeBulk: string | null;
  leadTimePrivateLabel: string | null;
  bottleAndPackagingOptions: string | null;

  // Terms
  shippingTerms: string | null; // EXW / FOB / CIF / DAP
  paymentTerms: string | null;
  paymentMethods: string | null;
  sampleCost: string | null;
  exclusivityByCountry: string | null;

  // Quality
  certifications: Certification[] | null;
  organicStatement: string | null; // only once the certificate status is confirmed
  batchCoaProvided: boolean | null;
  documentsProvided: string | null; // list of documents actually provided
  storageMethod: string | null; // e.g. sealed containers away from light and heat
  pressingMode: string | null; // to order / regular batches
  argan: {
    certification: string | null;
    acidity: string | null;
    packaging: string | null;
    minimumOrder: string | null;
    shelfLife: string | null;
    documents: string | null;
  };
  pricklyPear: {
    unrefined: boolean | null;
    certification: string | null;
    packaging: string | null;
    minimumOrder: string | null;
    documents: string | null;
  };

  // Private label services
  labelDesignOffered: boolean | null;
  labelPrintingIncluded: string | null;
  safetyAssessorSupport: boolean | null;
}

export const businessFacts: BusinessFacts = {
  legalName: null,
  registrationNumber: null,
  countriesServedCount: null,
  shippingDestinations: null,
  producerOrTraderAnswer: null,
  operations: null,
  videoCallsAvailable: null,

  phone: '+212 641 517 831',
  whatsapp: '+212 641 517 831',
  email: 'contact@moroccanorganicproducts.com',
  address: {
    street: null,
    city: 'Marrakech',
    postalCode: null,
    country: 'Morocco',
  },
  openingHours: 'Mon - Fri: 9:00 - 18:00 (GMT+1)',
  mapsEmbedUrl: null,
  responseTimeHours: '24',
  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
    tiktok: null,
    youtube: null,
  },

  sellsCulinaryArganOil: null,
  deodorizedOnRequest: null,
  hairSerumIngredients: null,
  beardOilBlend: null,
  beardOilEssentialOils: null,
  otherBlends: null,
  traditionalProductFormats: null,

  bulkFormats: null,
  retailBottleSizes: null,
  bulkMinimumOrder: null,
  privateLabelMoqScope: null,
  privateLabelMixedSizes: null,
  shelfLife: null,
  leadTimeBulk: null,
  leadTimePrivateLabel: null,
  bottleAndPackagingOptions: null,

  shippingTerms: null,
  paymentTerms: null,
  paymentMethods: null,
  sampleCost: null,
  exclusivityByCountry: null,

  certifications: null,
  organicStatement: null,
  batchCoaProvided: null,
  documentsProvided: null,
  storageMethod: null,
  pressingMode: null,
  argan: {
    certification: null,
    acidity: null,
    packaging: null,
    minimumOrder: null,
    shelfLife: null,
    documents: null,
  },
  pricklyPear: {
    unrefined: null,
    certification: null,
    packaging: null,
    minimumOrder: null,
    documents: null,
  },

  labelDesignOffered: null,
  labelPrintingIncluded: null,
  safetyAssessorSupport: null,
};

/** "1 L, 5 L, 25 L" - or null while no bulk format is confirmed. */
export function bulkSizesText(): string | null {
  const formats = businessFacts.bulkFormats;
  return formats && formats.length > 0 ? formats.map((format) => format.size).join(', ') : null;
}

/** Digits only, for tel: and wa.me links. Returns null when the phone is unknown. */
export function phoneHref(value: string | null): string | null {
  if (!value) return null;
  const digits = value.replace(/[^\d+]/g, '');
  return digits || null;
}

export function whatsappHref(value: string | null): string | null {
  const digits = value ? value.replace(/\D/g, '') : '';
  return digits ? `https://wa.me/${digits}` : null;
}

export function formatAddress(address: Address | null): string {
  if (!address) return '';
  return [address.street, address.city, address.postalCode, address.country].filter(Boolean).join(', ');
}

/** "a", "a or b", "a, b or c" */
export function joinOr(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`;
}

/** Grades that can be named on a quote, based on what is confirmed. */
export function confirmedGrades(): string[] {
  const grades = ['cosmetic'];
  if (businessFacts.sellsCulinaryArganOil) grades.push('culinary');
  if (businessFacts.deodorizedOnRequest) grades.push('deodorized');
  return grades;
}
