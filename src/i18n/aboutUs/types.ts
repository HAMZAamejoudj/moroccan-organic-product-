export interface AboutUsDictionary {
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
    btnQuote: string;
    btnOils: string;
  };
  whyOils: {
    sectionTitle: string;
    paragraphs: string[];
    photos: {
      pressingAlt: string;
      pressingLabel: string;
      teamAlt: string;
      teamLabel: string;
      fillingAlt: string;
      fillingLabel: string;
    };
  };
  whatWeDo: {
    sectionTitle: string;
    operations: string[];
  };
  howWeWork: {
    sectionTitle: string;
    columns: Array<{
      title: string;
      text: string;
    }>;
  };
  visitWorkshop: {
    sectionTitle: string;
    addressLabel: string;
    addressValue: string;
    emailLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    appointmentNote: string;
  };
  faq: {
    sectionTitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    relatedText: string;
    relatedWholesale: string;
    relatedPrivateLabel: string;
  };
  ctaBand: {
    title: string;
    lead: string;
    btn: string;
  };
}
