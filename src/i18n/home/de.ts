import type { HomeDictionary } from '../types';

export const deHome: HomeDictionary = {
  seo: {
    title: "Marokkanische Bio-Produkte | Arganöl Großhandel & Pflege",
    description:
      "Marokkanischer Bio-Hersteller: Arganöl in Großgebinden, Kaktusfeigenkernöl, schwarze Seife und Private Label Kosmetik ab 50 Stück.",
    ogTitle: 'Großhandel Marokkanische Bio-Produkte | Reine Öle & Naturkosmetik',
    ogDescription:
      'Reines Arganöl im Großhandel, Kaktusfeigenkernöl und Private-Label-Kosmetikherstellung direkt aus Marrakesch. Musterversand und weltweite Ausfuhr.',
  },
  hero: {
    eyebrow: 'Marokkanischer Hersteller · Weltweiter Export',
    title: 'Marokkanische Bio-Naturkosmetik im Großhandel',
    lead: 'Kaltgepresstes Arganöl, Kaktusfeigenkernöl, traditionelle marokkanische Hammam-Pflege und Private-Label-Lohnabfüllung für Kosmetikmarken, Spas und Distributoren.',
    btnProducts: 'Unsere Produkte',
    btnPricing: 'Preisliste anfordern',
    btnWhatsapp: 'WhatsApp-Kontakt',
    specRows: [
      { label: 'Arganöl', value: 'INCI: Argania Spinosa Kernel Oil' },
      { label: 'Verfahren', value: 'Kaltgepresst (schonende mechanische Pressung)' },
      { label: 'Qualität', value: 'Kosmetisch (ungeröstete Argankerne)' },
      { label: 'Formate', value: 'Großgebinde, Endverbraucherflaschen, Private Label' },
      { label: 'Private Label', value: 'Bereits ab 50 Stück' },
      { label: 'Kaktusfeigenkernöl', value: 'INCI: Opuntia Ficus-Indica Seed Oil' },
    ],
  },
  trust: [
    'Hergestellt in Marokko',
    'Schonende Kaltpressung',
    'Private Label ab 50 Stück',
    'Weltweiter Export',
  ],
  brandSplit: {
    eyebrow: 'Hergestellt in Marokko',
    title: 'Echte marokkanische Naturkosmetik für Ihre Marke',
    lead: 'Beziehen Sie Ihre marokkanischen Kosmetikrohstoffe direkt vom spezialisierten Hersteller. Von reinem Arganöl und Kaktusfeigenkernöl bis hin zu traditioneller Schwarzer Seife (Beldi), Ghassoul-Lavaerde und Aker Fassi — im Großhandel und als Private Label ab 50 Stück.',
    badge: 'In Marokko gepresst — 100% Natürlichen Ursprungs',
    features: [
      {
        title: 'Vollständiges Produktsortiment',
        desc: 'Arganöl, Kaktusfeigenkernöl, Schwarze Seife, Ghassoul und Aker Fassi. Gebinde, Flaschen und Lohnabfüllung.',
      },
      {
        title: 'Private Label & Eigenmarke',
        desc: 'Gesichtsöle, Haarseren und Bartöle unter Ihrer eigenen Marke ab 50 Stück. Sie wählen Flaschenformat und Etikett.',
      },
      {
        title: 'Weltweiter Versand & Exportdokumente',
        desc: 'Muster per Expresskurier; Großbestellungen per Luft- oder Seefracht inklusive aller Zolldokumente und Analysezertifikate.',
      },
    ],
  },
  bestsellers: {
    title: 'Unsere meistverkauften marokkanischen Naturkosmetik-Produkte',
    btnViewAll: 'Alle Produkte ansehen',
    items: [
      {
        title: 'Reines marokkanisches Arganöl in Großgebinden',
        text: 'Kaltgepresstes kosmetisches Arganöl aus ungerösteten Kernen für Haut-, Haarpflegeformulierungen und Lohnabfüllung.',
        href: '/products/argan-oil-bulk',
        linkLabel: 'Arganöl im Großhandel ansehen',
        imageSrc: '/images/home-argan.jpg',
        imageAlt: 'Großhandelskanister und Flaschen mit reinem marokkanischem Arganöl',
        imageLabel: 'Arganöl Großhandel',
      },
      {
        title: 'Marokkanisches Bio-Kaktusfeigenkernöl',
        text: 'Kostbarstes Anti-Aging-Wirkstofföl für anspruchsvolle Gesichtsseren, lieferbar in Großgebinden oder Pipettenflaschen.',
        href: '/products/prickly-pear-seed-oil-bulk',
        linkLabel: 'Kaktusfeigenkernöl ansehen',
        imageSrc: '/images/home-prickly-pear.jpg',
        imageAlt: 'Kaktusfeigenkernöl Pipettenflasche mit Samen und Kaktusfrucht',
        imageLabel: 'Kaktusfeigenkernöl',
      },
      {
        title: 'Argan-Haarserum (Private Label)',
        text: 'Leichte Formulierung für Spitzen und Längen zur Bändigung von Frizz und für seidigen Glanz. Ab 50 Stück unter Ihrer Marke.',
        href: '/private-label-moroccan-beauty-products',
        linkLabel: 'Private Label ansehen',
        imageSrc: '/images/home-hair-serum.jpg',
        imageAlt: 'Marokkanisches Arganöl-Haarserum',
        imageLabel: 'Argan-Haarserum',
      },
      {
        title: 'Argan-Bartöl (Private Label)',
        text: 'Nährendes Bartöl, das Barthaare geschmeidig macht und die darunterliegende Haut pflegt. Ab 50 Stück mit Ihrem Etikett.',
        href: '/private-label-moroccan-beauty-products',
        linkLabel: 'Private Label ansehen',
        imageSrc: '/images/home-beard-oil.jpg',
        imageAlt: 'Bartöl mit Argan- und Jojobaöl',
        imageLabel: 'Argan-Bartöl',
      },
      {
        title: 'Marokkanische Schwarze Seife (Savon Beldi)',
        text: 'Traditionelle olivenölbasierte Paste für Hammam- und Spa-Behandlungen, im Großhandel in Eimern lieferbar.',
        href: '/products',
        linkLabel: 'Produkte ansehen',
        imageSrc: '/images/home-black-soap.jpg',
        imageAlt: 'Marokkanische Schwarze Seife Beldi mit Olivenöl',
        imageLabel: 'Schwarze Seife',
      },
      {
        title: 'Marokkanische Ghassoul-Tonerde (Lavaerde)',
        text: 'Mineralische Tonerde aus dem Atlasgebirge, ultrafein vermahlen für klärende Gesichtsmasken und natürliche Haarpflege.',
        href: '/products',
        linkLabel: 'Produkte ansehen',
        imageSrc: '/images/home-ghassoul.jpg',
        imageAlt: 'Natürliche marokkanische Ghassoul-Tonerde in Pulverform',
        imageLabel: 'Ghassoul-Tonerde',
      },
      {
        title: 'Marokkanisches Aker Fassi im Großhandel',
        text: 'Traditionelles Pflanzenfarbpulver aus Klatschmohn und Granatapfel, genutzt als natürlicher Lippen- und Wangenton.',
        href: '/products',
        linkLabel: 'Produkte ansehen',
        imageSrc: '/images/home-aker-fassi.jpg',
        imageAlt: 'Authentisches marokkanisches Aker Fassi Pulver',
        imageLabel: 'Aker Fassi',
      },
    ],
  },
  steps: {
    title: 'Vom Argankern bis zur fertigen Flasche',
    items: [
      {
        title: 'Auswahl der Argankerne',
        text: 'Die Argan-Nüsse werden sorgfältig geknackt und unbeschädigte Kerne handverlesen.',
        imageSrc: '/images/step-kernels.jpg',
        imageAlt: 'Schonendes Öffnen der Argannüsse und Sortierung der Kerne',
        imageLabel: 'Kerneauslese',
      },
      {
        title: 'Schonende Kaltpressung',
        text: 'Die Kerne werden mechanisch ohne Hitzezufuhr gepresst, um alle Vitamine zu erhalten.',
        imageSrc: '/images/step-cold-pressing.jpg',
        imageAlt: 'Mechanische Kaltpressung von frischem Arganöl',
        imageLabel: 'Kaltpressung',
      },
      {
        title: 'Ruhephase & Filtration',
        text: 'Das Rohöl ruht zur natürlichen Sedimentation und wird anschließend schonend gefiltert.',
        imageSrc: '/images/step-resting-filtering.jpg',
        imageAlt: 'Schonende Filtration von reinem marokkanischem Arganöl',
        imageLabel: 'Filtration',
      },
      {
        title: 'Abfüllung & Chargenprüfung',
        text: 'Abfüllung in Kanister oder Glasflaschen mit Chargennummer und Analysezertifikat.',
        imageSrc: '/images/step-filling-batch.jpg',
        imageAlt: 'Abfüllung von kosmetischem Arganöl in Flaschen',
        imageLabel: 'Abfüllung',
      },
    ],
  },
  waysToBuy: {
    title: 'Drei Bezugswege für Unternehmen',
    items: [
      {
        name: 'Öl im Großgebinde (Bulk)',
        get: 'Arganöl oder Kaktusfeigenkernöl in 1 L, 5 L, 25 L Kanistern oder 200 L Fässern',
        for: 'Formulierer, Kosmetiklabore, Hersteller mit eigenen Abfüllanlagen',
        href: '/products/argan-oil-bulk',
        linkLabel: 'Großgebinde ansehen',
      },
      {
        name: 'Verkaufsfertige Flaschen',
        get: 'Unsere reinen Öle in 30 ml, 50 ml oder 100 ml Braunglasflaschen',
        for: 'Fachgeschäfte, Spas, Kosmetikstudios und Online-Händler',
        href: '/wholesale',
        linkLabel: 'Großhandelsformate ansehen',
      },
      {
        name: 'Private Label (Eigenmarke)',
        get: 'Gesichtsöle, Haarseren und Bartöle mit Ihrem Markendesign ab 50 Stück',
        for: 'Neue und expandierende Kosmetikmarken',
        href: '/private-label-moroccan-beauty-products',
        linkLabel: 'Private Label ansehen',
      },
    ],
  },
  privateLabelBand: {
    badgeNum: '50',
    badgeLabel: 'Stück Mindestbestellmenge',
    title: 'Private Label Kosmetikherstellung',
    description:
      'Starten Sie Ihre eigene Kosmetikmarke mit marokkanischem Arganöl, Gesichtsöl, Haarserum oder Bartöl ohne riesige Mindestmengen. Wir übernehmen Abfüllung, Etikettierung und Verpackung in Marokko.',
    btnLearnMore: 'Mehr Erfahren',
    btnInquiry: 'Anfrage Senden',
    linkLabel: 'Private Label entdecken',
    href: '/private-label-moroccan-beauty-products',
  },
  bulkSupplier: {
    title: 'Ihr marokkanischer Großhandelspartner für Bio-Öle',
    lead: 'Wir sind ein marokkanisches Produktionsunternehmen für erstklassiges Arganöl und Kaktusfeigenkernöl, schonend kaltgepresst für höchste kosmetische Ansprüche. Jedes Gebinde ist chargenrückverfolgbar mit Analysezertifikat (COA).',
    bullets: [
      'Garantierte Reinheit — klare kosmetische Spezifikation auf jedem Angebot.',
      'Lückenlose Rückverfolgbarkeit — Chargennummer und Labordokumentation.',
      'Frischegarantie — kühle, lichtgeschützte Lagerung und regelmäßige Chargenpressung.',
      'Direkte Fachberatung — kompetente Antworten zu Säurewerten, Haltbarkeit und Gebinden.',
    ],
    btnWholesale: 'Großhandelsdetails',
    btnQuote: 'Angebot Anfordern',
    shippingText:
      'Musterversand erfolgt per Expresskurier; Großbestellungen per Luft- oder Seefracht inklusive aller Ausfuhr-Zolldokumente direkt an Ihr Lager oder Ihren Spediteur.',
  },
  quoteForm: {
    title: 'Schnelles Angebot anfordern',
    description:
      'Nennen Sie uns das gewünschte Öl, die Qualität, Bestellmenge und Ihr Zielland. Sie erhalten binnen 24 Geschäftsstunden ein detailliertes Angebot.',
    interests: [
      'Arganöl im Großgebinde',
      'Kaktusfeigenkernöl',
      'Kulinarisches Speise-Arganöl',
      'Private Label / Eigenmarke',
      'Weitere marokkanische Kosmetikprodukte',
    ],
  },
  faq: {
    title: 'Häufig gestellte Fragen für Geschäftskunden',
    items: [
      {
        question: 'Wo befindet sich Ihr Unternehmenssitz?',
        answer: 'Unser Firmensitz und unsere Produktionsstätte befinden sich in Marrakesch, Marokko. Wir liefern direkt von hier an Kunden weltweit.',
      },
      {
        question: 'Wie hoch ist die Mindestbestellmenge (MOQ) bei Private Label?',
        answer: 'Nur 50 Stück. So können Sie Ihre Kosmetiklinie risikoarm starten, ohne tausende Flaschen vorfinanzieren zu müssen.',
      },
      {
        question: 'Welche Mindestmenge gilt für Öle in Großgebinden?',
        answer: 'Großgebinde sind ab handlichen 5-Liter-Kanistern bis hin zu standardisierten 200-Liter-Stahlfässern verfügbar.',
      },
      {
        question: 'Bieten Sie die komplette Lohnabfüllung mit meinem Etikett an?',
        answer:
          'Ja. Wir füllen ab, bringen Ihre druckfertigen Etiketten an, versiegeln die Flaschen und verpacken transportsicher ab 50 Einheiten.',
      },
      {
        question: 'Kann ich vorab Warenproben bestellen?',
        answer: 'Selbstverständlich. Wir versenden Produktmuster zügig per internationalem Expresskurier.',
      },
      {
        question: 'Liefern Sie nach Deutschland, Österreich und in die Schweiz?',
        answer:
          'Ja, wir beliefern regelmäßig die gesamte DACH-Region und weltweit mit vollständigen Ausfuhrbegleitdokumenten (Analysezertifikat COA, Sicherheitsdatenblatt MSDS, Ursprungszeugnis EUR.1).',
      },
      {
        question: 'An welche Kundengruppen richtet sich Ihr Angebot?',
        answer:
          'Kosmetikmarken, Lohnhersteller, Naturkosmetik-Labore, Spas, Händler und E-Commerce-Unternehmen, die Wert auf verlässliche Spitzenqualität legen.',
      },
      {
        question: 'Kann ich verschiedene Produkte in einer Sendung kombinieren?',
        answer: 'Ja, Sie können Arganöl, Kaktusfeigenkernöl, Schwarze Seife und Tonerde in einer Frachtsendung zusammenfassen.',
      },
    ],
    relatedText: {
      intro: 'Erfahren Sie mehr:',
      aboutUs: 'Über uns',
      aboutUsHref: '/about-us',
      wholesale: 'Großhandelskonditionen',
      wholesaleHref: '/wholesale',
      faq: 'Häufige Fragen (FAQ)',
      faqHref: '/faq',
    },
  },
  ctaBand:
    'Kontaktieren Sie uns für ein unverbindliches Angebot, Musteranforderungen oder Ihr nächstes Private-Label-Projekt. Schildern Sie uns Ihren Bedarf und Sie erhalten umgehend eine klare Offerte.',
};
