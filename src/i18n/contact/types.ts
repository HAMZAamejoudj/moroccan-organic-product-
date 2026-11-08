export interface ContactDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    tag: string;
    title: string;
    desc: string;
    bullets: string[];
  };
  directCard: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    hoursLabel: string;
    hoursValue: string;
    btnWhatsApp: string;
    btnCall: string;
    chip1Label: string;
    chip1Value: string;
    chip2Label: string;
    chip2Value: string;
  };
  formCard: {
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    subjectLabel: string;
    subjectDefaultOption: string;
    subjectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    hint: string;
    successMessage: string;
    errorMessage: string;
    networkErrorMessage: string;
  };
  footerNote: string;
}
