import type { FaqDictionary } from './types';

export const deFaq: FaqDictionary = {
  seo: {
    title: 'Häufig Gestellte Fragen (FAQ) | Großhandel & Private Label Marokko',
    description:
      'Antworten auf Einkäuferfragen zu marokkanischem Arganöl im Großhandel, Kaktusfeigenkernöl, Private-Label-Abfüllung ab 50 Stück und weltweitem Export.',
    ogTitle: 'FAQ | Alles über B2B-Großhandel & Kosmetiköle aus Marokko',
    ogDescription:
      'Häufige Fragen zu Laboranalysen (COA), Mindestbestellmengen, Musterbestellungen, EU-Zollbefreiung mit EUR.1 und internationalen Lieferzeiten.',
  },
  intro: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'FAQ',
    title: 'Häufig Gestellte Fragen (FAQ)',
    lead: 'Klare und direkte Antworten für Kosmetikmarken, Einkäufer, Spas und Distributoren, die marokkanische Pflanzenöle im Großhandel oder als Eigenmarke beziehen möchten.',
  },
  groups: {
    oils: {
      title: 'Ölqualität & Technische Spezifikationen',
      items: [
        {
          question: 'Ist Ihr Arganöl zu 100% rein und kaltgepresst?',
          answer:
            'Ja. Unser kosmetisches Arganöl ist 100% natives, reines Argania Spinosa Kernel Oil, mechanisch kaltgepresst bei niedrigen Temperaturen unter 45°C. Es ist vollkommen frei von billigen Streckölen, chemischen Lösungsmitteln, Silikonen, synthetischen Duftstoffen oder Konservierungsmitteln.',
          link: { label: 'Technische Spezifikationen für Arganöl-Fassware ansehen', href: '/de/products/argan-oil-bulk' },
        },
        {
          question: 'Was ist der genaue Unterschied zwischen Kosmetik- und Speise-Arganöl?',
          answer:
            'Kosmetisches Arganöl wird aus rohen, ungerösteten Kernen gepresst, um das volle Spektrum an Vitamin E, Phytosterinen und essentiellen Fettsäuren zu bewahren; es besitzt eine helle Goldfärbung und einen dezenten, frischen Duft. Speise-Arganöl hingegen wird aus gerösteten Kernen gewonnen, was zu einer dunkleren Bernsteinfarbe und einem intensiven nussigen Geschmack führt. Beide Produkte sind streng getrennt zu betrachten und in Kosmetikformulierungen keinesfalls austauschbar.',
        },
        {
          question: 'Warum ist Kaktusfeigenkernöl deutlich kostbarer und hochpreisiger als Arganöl?',
          answer:
            'Für die Gewinnung von Kaktusfeigenkernöl (Opuntia Ficus-Indica) wird rund 1 Tonne (1.000 kg) frische Früchte benötigt, um nur etwa 30 bis 40 kg winzige, steinhart getrocknete Samen zu gewinnen. Diese Kerne besitzen einen extrem geringen Ölgehalt von nur 3% bis 5%. Zur Erzeugung von nur 1 Liter reinem Öl sind daher fast 800 bis 1.000 kg Früchte erforderlich — das macht es zu einem der seltensten und nährstoffreichsten Anti-Aging-Wirkstofföle der Welt.',
          link: { label: 'Kaktusfeigenkernöl im Detail ansehen', href: '/de/products/prickly-pear-seed-oil-bulk' },
        },
        {
          question: 'Wie hoch ist die Mindesthaltbarkeit und wie sollten die Öle gelagert werden?',
          answer:
            'Unsere kaltgepressten Pflanzenöle weisen ungeöffnet eine zertifizierte Haltbarkeit von 24 Monaten ab Pressdatum auf, wenn sie vor direkter Sonneneinstrahlung, Feuchtigkeit und Hitze geschützt in lichtundurchlässigen Gebinden (optimal bei 15°C bis 22°C) gelagert werden.',
        },
      ],
    },
    ordering: {
      title: 'Bestellablauf, Mindestmengen (MOQ) & Private Label',
      items: [
        {
          question: 'Wie hoch sind die Mindestbestellmengen (MOQ)?',
          answer:
            'Für Fassware und Großhandelsöle: 5 Liter in UN-zertifizierten HDPE-Kanistern. Für unseren schlüsselfertigen Private-Label-Abfüllservice: nur 50 fertige Einheiten pro Produktreferenz, damit neue Marken ohne hohes finanzielles Risiko starten können.',
        },
        {
          question: 'Können vorab Labormuster bestellt werden?',
          answer:
            'Ja, ausdrücklich. Wir empfehlen Vorabprüfungen: Wir versenden 50-ml-Prüfmuster inklusive aktuellem Analysezertifikat (COA) per Expresskurier (DHL / FedEx), damit Sie Farbe, Viskosität und Reinheit in Ihrem Labor prüfen können.',
        },
        {
          question: 'Welche Zahlungsbedingungen und Zahlungsmethoden gelten?',
          answer:
            'Wir akzeptieren internationale Banküberweisungen (SWIFT T/T) in EUR, USD und GBP. Für Musteraufträge ist eine sichere Online-Kreditkartenzahlung möglich. Für Serienproduktionen gilt: 50% Anzahlung bei Auftragsbestätigung und 50% Restzahlung gegen Bereitstellung der Export- und Versandpapiere (B/L).',
        },
        {
          question: 'Wie lange dauern Produktion und Bereitstellung zum Versand?',
          answer:
            'Fassware aus laufender frischer Pressung wird in der Regel innerhalb von 3 bis 5 Werktagen versandfertig verpackt. Private-Label-Aufträge (Abfüllung, Lasercodierung, Etikettierung) benötigen nach finaler Druckfreigabe etwa 7 bis 14 Werktage.',
        },
      ],
    },
    shipping: {
      title: 'Dokumentation, Zollabwicklung & Weltweiter Versand',
      items: [
        {
          question: 'Welche Zertifikate und Nachweise werden jeder Lieferung beigelegt?',
          answer:
            'Jede Exportlieferung enthält das chargenspezifische Analysezertifikat (COA), ein mehrsprachiges Sicherheitsdatenblatt (MSDS / SDS), die standardisierte INCI-Deklaration, das amtliche Ursprungszeugnis der Handelskammer und die EUR.1-Warenverkehrsbescheinigung für zollfreie Einfuhren in die Europäische Union.',
        },
        {
          question: 'Liefern Sie weltweit und mit welchen Verkehrsmitteln?',
          answer:
            'Ja, wir exportieren regelmäßig in über 30 Länder. Muster und Kleinmengen versenden wir via Door-to-Door Express-Luftfracht (DHL / FedEx). Palettierte Großaufträge werden per Luftfracht oder Seefracht-Container (FCL / LCL) ab dem Hafen Casablanca verschifft.',
        },
        {
          question: 'Wer übernimmt anfallende Zölle und Einfuhrsteuern?',
          answer:
            'Handelssendungen werden nach EXW, FOB oder CIF quotiert. Einfuhrumsatzsteuern und lokale Abgaben trägt der Importeur. Europäische Einkäufer profitieren dank unseres EUR.1-Zertifikats von einer 0%-Zollbefreiung im Rahmen des Freihandelsabkommens zwischen Marokko und der EU.',
        },
      ],
    },
  },
  ctaBand: {
    title: 'Haben Sie eine spezifische Frage zu Ihrem Vorhaben?',
    lead: 'Unser Vertriebsteam in Marrakesch beantwortet gerne technische Fragen, berät zu Verpackungslösungen und erstellt individuelle Angebote innerhalb von 24 Stunden.',
    btn: 'Vertriebsteam kontaktieren',
  },
};
