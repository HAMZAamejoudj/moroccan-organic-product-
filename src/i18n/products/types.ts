export interface ProductsCatalogDictionary {
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
    breadcrumbProducts: string;
  };
  cosmeticOils: {
    sectionTitle: string;
    items: {
      argan: {
        title: string;
        text: string;
        linkLabel: string;
        imageAlt: string;
        imageLabel: string;
      };
      pricklyPear: {
        title: string;
        text: string;
        linkLabel: string;
        imageAlt: string;
        imageLabel: string;
      };
    };
  };
  readyToBrand: {
    sectionTitle: string;
    items: {
      hairSerum: {
        title: string;
        text: string;
        linkLabel: string;
        imageAlt: string;
        imageLabel: string;
      };
      beardOil: {
        title: string;
        text: string;
        linkLabel: string;
        imageAlt: string;
        imageLabel: string;
      };
    };
  };
  traditional: {
    sectionTitle: string;
    items: {
      blackSoap: {
        title: string;
        text: string;
        imageAlt: string;
        imageLabel: string;
      };
      ghassoul: {
        title: string;
        text: string;
        imageAlt: string;
        imageLabel: string;
      };
      akerFassi: {
        title: string;
        text: string;
        imageAlt: string;
        imageLabel: string;
      };
      nila: {
        title: string;
        text: string;
        imageAlt: string;
        imageLabel: string;
      };
      tbrima: {
        title: string;
        text: string;
        imageAlt: string;
        imageLabel: string;
      };
    };
  };
  formatGuide: {
    sectionTitle: string;
    points: Array<{ strong: string; text: string }>;
    btnQuote: string;
    btnWholesale: string;
  };
}

export interface ArganOilDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  intro: {
    breadcrumbHome: string;
    breadcrumbProducts: string;
    breadcrumbCurrent: string;
    title: string;
    lead: string;
    btnQuote: string;
    btnSample: string;
  };
  image: {
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
  checkBeforeBuying: {
    title: string;
    points: Array<{ title: string; desc: string }>;
  };
  howOrderingWorks: {
    title: string;
    steps: Array<{ title: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
    relatedText: string;
    pricklyPearLinkText: string;
    wholesaleLinkText: string;
    privateLabelLinkText: string;
  };
}

export interface PricklyPearDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  intro: {
    breadcrumbHome: string;
    breadcrumbProducts: string;
    breadcrumbCurrent: string;
    title: string;
    lead: string;
    btnQuote: string;
    btnSample: string;
  };
  image: {
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
  whyItCostsMore: {
    title: string;
    text: string;
  };
  howBrandsUseIt: {
    title: string;
    bullets: string[];
    honestClaimsTitle: string;
    honestClaimsText: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
    relatedText: string;
    arganLinkText: string;
    privateLabelLinkText: string;
  };
}
