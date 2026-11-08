export interface FaqItemData {
  question: string;
  answer: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface FaqGroupData {
  title: string;
  items: FaqItemData[];
}

export interface FaqDictionary {
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
  };
  groups: {
    oils: FaqGroupData;
    ordering: FaqGroupData;
    shipping: FaqGroupData;
  };
  ctaBand: {
    title: string;
    lead: string;
    btn: string;
  };
}
