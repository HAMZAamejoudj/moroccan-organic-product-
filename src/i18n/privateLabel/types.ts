export interface PrivateLabelDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  intro: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    title: string;
    lead: string;
    btnCta: string;
    imageAlt: string;
    imageLabel: string;
  };
  whatYouCanLaunch: {
    sectionTitle: string;
    tag: string;
    cards: Array<{
      name: string;
      text: string;
      tag: string;
    }>;
  };
  howItWorks: {
    sectionTitle: string;
    leadTimeText: string;
    imageAlt: string;
    imageLabel: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  packaging: {
    sectionTitle: string;
    text: string;
  };
  compliance: {
    sectionTitle: string;
    text: string;
  };
  whyOils: {
    sectionTitle: string;
    text: string;
  };
  faq: {
    sectionTitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    relatedText: string;
    relatedArgan: string;
    relatedPricklyPear: string;
    relatedWholesale: string;
    relatedFaq: string;
  };
  ctaBand: {
    title: string;
    lead: string;
    btn: string;
  };
}
