export const ALL_PRODUCT_SLUGS = [
  'argan-hair-serum',
  'argan-beard-oil',
  'moroccan-black-soap',
  'ghassoul-clay',
  'aker-fassi',
  'nila-powder',
  'tbrima-powder',
] as const;

export type ProductDetailSlug = (typeof ALL_PRODUCT_SLUGS)[number];

export interface ProductDetailItem {
  slug: ProductDetailSlug;
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  intro: {
    title: string;
    lead: string;
    breadcrumbCurrent: string;
    btnQuote: string;
    btnSample: string;
  };
  image: {
    src: string;
    alt: string;
    label: string;
  };
  facts: Array<{ label: string; value: string }>;
  specs: {
    title: string;
    caption: string;
    head: [string, string];
    rows: Array<[string, string]>;
  };
  benefits: {
    title: string;
    paragraphs: string[];
    bulletsTitle?: string;
    bullets?: string[];
  };
  usageGuide: {
    title: string;
    text: string;
    steps?: Array<{ title: string; text?: string }>;
  };
  howToOrder: {
    title: string;
    steps: Array<{ title: string; text?: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
    relatedText: string;
    relatedLinks: Array<{ label: string; href: string }>;
  };
}

export type ProductDetailsDictionary = Record<ProductDetailSlug, ProductDetailItem>;
