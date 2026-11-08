export interface WholesaleDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  intro: {
    title: string;
    lead: string;
    breadcrumbHome: string;
    breadcrumbWholesale: string;
    btnQuote: string;
  };
  whoWeSupply: {
    sectionTitle: string;
    bullets: Array<{ strong: string; text: string }>;
    imageAlt: string;
    imageLabel: string;
  };
  formats: {
    sectionTitle: string;
    tableCaption: string;
    tableHead: [string, string, string];
    rows: Array<{
      format: string;
      sizes: string;
      bestFor: string;
    }>;
    privateLabelRow: {
      format: string;
      sizes: string;
      leadText: string;
      linkText: string;
    };
    minimumOrderNote: string;
  };
  howToOrder: {
    sectionTitle: string;
    whatQuoteIncludesTitle: string;
    whatQuoteIncludesText: string;
    steps: Array<{ title: string; text: string }>;
  };
  importerDocs: {
    sectionTitle: string;
    intro: string;
    docsList: string[];
    certificationsTitle: string;
    certifications: Array<{ name: string; body: string; number: string }>;
  };
  faq: {
    sectionTitle: string;
    items: Array<{ question: string; answer: string }>;
    relatedText: string;
    arganLinkText: string;
    pricklyPearLinkText: string;
    faqLinkText: string;
  };
}
