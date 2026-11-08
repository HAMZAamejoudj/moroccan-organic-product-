import type { ProductsCatalogDictionary, ArganOilDictionary, PricklyPearDictionary } from './types';

export const frProductsCatalog: ProductsCatalogDictionary = {
  seo: {
    title: "Huiles Cosmétiques & Produits de Beauté Marocains en Gros | Argan, Figue de Barbarie & Hammam",
    description:
      "Fournisseur en gros de produits cosmétiques marocains : huile d'argan en vrac, huile de pépins de figue de barbarie, savon noir, rhassoul, nila bleue et marque blanche.",
    ogTitle: "Huiles Cosmétiques & Produits de Beauté Marocains en Gros",
    ogDescription:
      "Huile d'argan en vrac, huile de pépins de figue de barbarie et rituels traditionnels de hammam marocain pour laboratoires, marques et distributeurs.",
  },
  intro: {
    title: "Huiles et Produits Cosmétiques Marocains pour Grossistes",
    lead: "Notre catalogue repose sur deux huiles marocaines d'exception — l'argan et les pépins de figue de barbarie — ainsi que les soins élaborés à partir de celles-ci. Tous nos produits sont proposés en vrac, en flacons prêts à la vente ou sous votre propre marque.",
    breadcrumbHome: 'Accueil',
    breadcrumbProducts: 'Produits',
  },
  cosmeticOils: {
    sectionTitle: 'Huiles Cosmétiques Pures',
    items: {
      argan: {
        title: "Huile d'argan cosmétique",
        text: "Pressée à froid à partir d'amandons non torréfiés. Idéale pour les soins de la peau, du cuir chevelu, huiles visage et sérums. Formats : bidons de 1 L, 5 L, 10 L, 25 L et fûts de 200 L.",
        linkLabel: "Voir l'huile d'argan en vrac",
        imageAlt: "Bouteille d'huile d'argan dorée avec noix d'argan entières, concassées et feuilles vertes",
        imageLabel: "Huile d'argan",
      },
      pricklyPear: {
        title: 'Huile de pépins de figue de barbarie',
        text: "Une huile de soin visage précieuse et légère, pressée à froid à partir des pépins du fruit de cactus. Formats : fûts PEHD de 1 L, 5 L, 10 L, 25 L et flacons compte-gouttes de 15 à 30 ml.",
        linkLabel: "Voir l'huile de figue de barbarie",
        imageAlt: 'Huile de pépins de figue de barbarie dans un flacon compte-gouttes',
        imageLabel: 'Huile de figue de barbarie',
      },
    },
  },
  readyToBrand: {
    sectionTitle: 'Soins Prêts pour Votre Marque (Marque Blanche)',
    items: {
      hairSerum: {
        title: "Sérum capillaire à l'argan",
        text: "Une huile soyeuse pour les longueurs et pointes, domptant les frisottis et apportant un éclat naturel. Disponible sous votre marque dès 50 unités.",
        linkLabel: 'Découvrir la marque blanche',
        imageAlt: "Flacon de sérum cheveux à l'argan avec amandes et feuilles",
        imageLabel: "Sérum capillaire à l'argan",
      },
      beardOil: {
        title: "Huile à barbe à l'argan",
        text: "Formule nourrissante qui adoucit la barbe et protège la peau sous-jacente. Disponible sous votre étiquette dès 50 unités.",
        linkLabel: 'Découvrir la marque blanche',
        imageAlt: "Flacon compte-gouttes d'huile à barbe à l'argan avec peigne en bois",
        imageLabel: "Huile à barbe à l'argan",
      },
    },
  },
  traditional: {
    sectionTitle: 'Produits Traditionnels Marocains du Hammam',
    items: {
      blackSoap: {
        title: 'Savon noir marocain',
        text: "Pâte d'olive émolliente traditionnelle pour les rituels de gommage au hammam. Disponible en seaux pour vrac et en pots de détail.",
        imageAlt: "Pot de savon noir marocain traditionnel avec branche d'olivier",
        imageLabel: 'Savon noir marocain',
      },
      ghassoul: {
        title: 'Argile Ghassoul (Rhassoul)',
        text: "Argile minérale saponifère de l'Atlas marocain, sous forme de poudre extra-fine ou plaquettes pour masques visage, corps et cheveux.",
        imageAlt: "Poudre d'argile ghassoul dans un bocal avec morceaux bruts et branche d'olivier",
        imageLabel: 'Argile Ghassoul',
      },
      akerFassi: {
        title: 'Aker fassi authentique',
        text: "Poudre rouge ancestrale à base de pétales de coquelicot et d'écorce de grenade, utilisée comme fard naturel pour lèvres et joues.",
        imageAlt: "Poudre rouge d'Aker fassi dans un pot doré avec pétales de rose séchés",
        imageLabel: 'Aker fassi',
      },
      nila: {
        title: 'Poudre de Nila bleue marocaine',
        text: "Véritable poudre minérale bleue marocaine réputée pour éclaircir le teint, atténuer les taches et sublimer les masques corporels au hammam.",
        imageAlt: 'Poudre de Nila bleue marocaine authentique pour soin du corps',
        imageLabel: 'Poudre de Nila bleue',
      },
      tbrima: {
        title: 'Tbrima marocaine aux herbes',
        text: "Mélange traditionnel de plantes médicinales et aromatiques marocaines pour un gommage et un enveloppement corporel d'exception au hammam.",
        imageAlt: 'Mélange de plantes tbrima marocaine pour soin corporel',
        imageLabel: 'Tbrima marocaine',
      },
    },
  },
  formatGuide: {
    sectionTitle: 'Quel conditionnement correspond à votre besoin ?',
    points: [
      {
        strong: 'Formulateurs et laboratoires cosmétiques',
        text: 'commandent généralement en bidons et fûts industriels (1 L, 5 L, 25 L, 200 L).',
      },
      {
        strong: 'Boutiques, spas et instituts',
        text: 'choisissent nos flacons de détail et formats professionnels cabine.',
      },
      {
        strong: 'Nouvelles marques et créateurs',
        text: 'démarrent en marque blanche clé en main dès 50 pièces.',
      },
    ],
    btnQuote: 'Demander la grille tarifaire',
    btnWholesale: 'Conditions grossiste',
  },
};

export const frArganOil: ArganOilDictionary = {
  seo: {
    title: "Huile d'Argan en Vrac du Maroc | Qualité Cosmétique Pure Grossiste",
    description:
      "Huile d'argan cosmétique pure pressée à froid en vrac, directe du producteur au Maroc. Bidons et fûts de 1 L à 200 L, certificats d'analyse COA et expédition mondiale.",
    ogTitle: "Huile d'Argan en Vrac du Maroc | Qualité Cosmétique Grossiste",
    ogDescription:
      "Approvisionnement direct en huile d'argan cosmétique pressée à froid en bidons et fûts pour laboratoires, marques et distributeurs internationaux.",
  },
  intro: {
    breadcrumbHome: 'Accueil',
    breadcrumbProducts: 'Produits',
    breadcrumbCurrent: "Huile d'Argan en Vrac du Maroc",
    title: "Huile d'Argan en Vrac du Maroc",
    lead: "Huile d'argan cosmétique en vrac produite directement au Maroc : extraite par première pression à froid d'amandons non torréfiés, livrée en bidons et fûts pour laboratoires, marques de cosmétiques et distributeurs.",
    btnQuote: 'Demander un devis',
    btnSample: 'Commander un échantillon',
  },
  image: {
    alt: "Bouteille d'huile d'argan dorée avec noix d'argan entières, concassées et feuilles vertes",
    label: "Huile d'argan en vrac",
  },
  facts: [
    { label: 'INCI', value: 'Argania Spinosa Kernel Oil' },
    { label: 'Qualité', value: 'Cosmétique, amandons non torréfiés, désodorisée sur demande' },
    { label: 'Procédé', value: 'Pression à froid mécanique' },
    { label: 'Conditionnements', value: 'Bidons de 1 L, 5 L, 10 L, 25 L et fûts de 200 L' },
    { label: 'Commande minimale', value: '5 litres' },
  ],
  specs: {
    title: 'Spécifications Techniques',
    caption: "Fiche technique huile d'argan en vrac",
    head: ['Caractéristique', 'Détail'],
    rows: [
      ['Dénomination INCI', 'Argania Spinosa Kernel Oil'],
      ['Qualité', 'Cosmétique, non torréfiée, pression à froid, désodorisée sur demande'],
      ['Certification', 'Certification biologique disponible (USDA / équivalence UE)'],
      ['Acidité oléique', '< 0,8 % (Conforme aux standards cosmétiques stricts)'],
      ['Emballages', 'Bidons certifiés contact cosmétique de 1 L, 5 L, 10 L, 25 L et fûts 200 L'],
      ['Minimum de commande', '5 litres'],
      ['Durée de conservation', "24 mois dans l'emballage hermétique scellé, à l'abri de la lumière"],
      ['Documents fournis', "Certificat d'analyse (COA), Fiche de données de sécurité (FDS/MSDS), Fiche technique"],
    ],
  },
  checkBeforeBuying: {
    title: "Les critères essentiels avant d'acheter de l'huile d'argan en gros",
    points: [
      {
        title: 'La qualité.',
        desc: "L'huile cosmétique provient d'amandons crus et dégage un parfum discret de noisette fraîche. Une odeur prononcée de grillé indique une huile alimentaire impropre aux formules cosmétiques haut de gamme.",
      },
      {
        title: "Le certificat d'analyse (COA).",
        desc: "Il doit mentionner le numéro de lot précis, la date d'analyse et les coordonnées d'un laboratoire accrédité.",
      },
      {
        title: 'Un échantillon du lot exact.',
        desc: "Conservez une partie scellée pour comparer rigoureusement avec la livraison finale reçue.",
      },
      {
        title: 'Le conditionnement.',
        desc: "Conteneurs en PEHD certifié, scellés hermétiquement et remplis pour minimiser l'oxydation par l'air.",
      },
    ],
  },
  howOrderingWorks: {
    title: 'Comment se déroule la commande ?',
    steps: [
      { title: 'Indiquez-nous la qualité voulue, le volume et le pays de destination.' },
      { title: 'Recevez notre offre de prix détaillée et un échantillon de validation.' },
      { title: 'Validez le cahier des charges et la facture pro-forma.' },
      { title: 'Nous procédons au conditionnement, scellage et préparation des documents douaniers.' },
      { title: 'Expédition sécurisée par fret aérien express ou maritime.' },
    ],
  },
  faq: {
    title: 'Foire Aux Questions',
    items: [
      {
        question: "Quelle différence entre l'huile d'argan cosmétique et alimentaire ?",
        answer:
          "L'huile d'argan cosmétique est extraite d'amandons crus pour préserver l'ensemble des vitamines E et acides gras essentiels pour l'épiderme. L'huile alimentaire est issue d'amandons torréfiés. Elles ne sont pas interchangeables.",
      },
      {
        question: 'Puis-je tester un échantillon avant de valider ma commande ?',
        answer: "Oui, nous expédions des échantillons de 50 ml à 100 ml pour vos tests préalables en laboratoire.",
      },
      {
        question: "Comment conserver l'huile d'argan en vrac ?",
        answer: "Dans des contenants opaques bien fermés, à température tempérée (15-22 °C), à l'abri de la lumière directe et de l'humidité.",
      },
    ],
    relatedText: 'Consultez également notre',
    pricklyPearLinkText: 'huile de pépins de figue de barbarie',
    wholesaleLinkText: 'conditions de vente en gros',
    privateLabelLinkText: 'options de marque blanche',
  },
};

export const frPricklyPear: PricklyPearDictionary = {
  seo: {
    title: 'Huile de Pépins de Figue de Barbarie en Vrac Maroc | Grossiste Huile de Cactus Pure',
    description:
      'Huile de pépins de figue de barbarie du Maroc 100% pure et pressée à froid en vrac. Riche en vitamine E, certifiée biologique avec analyses de lot et documents d export.',
    ogTitle: 'Huile de Pépins de Figue de Barbarie en Vrac Maroc | Grossiste',
    ogDescription:
      "Huile de cactus marocaine pure pressée à froid en vrac et flacons compte-gouttes pour marques et fabricants de cosmétiques d'exception.",
  },
  intro: {
    breadcrumbHome: 'Accueil',
    breadcrumbProducts: 'Produits',
    breadcrumbCurrent: 'Huile de Pépins de Figue de Barbarie en Vrac',
    title: 'Huile de Pépins de Figue de Barbarie en Vrac du Maroc',
    lead: "L'huile de pépins de figue de barbarie est extraite des pépins du cactus (Opuntia ficus-indica). Il faut une quantité considérable de pépins pour obtenir un seul litre, ce qui en fait l'un des élixirs anti-âge les plus convoités de la cosmétique naturelle de luxe.",
    btnQuote: 'Demander un devis',
    btnSample: 'Commander un échantillon',
  },
  image: {
    alt: 'Flacon compte-gouttes huile de pépins de figue de barbarie avec fruits de cactus et pépins',
    label: 'Huile de figue de barbarie en vrac',
  },
  facts: [
    { label: 'INCI', value: 'Opuntia Ficus-Indica Seed Oil' },
    { label: 'Procédé', value: 'Pression à froid mécanique, 100% pure et non raffinée' },
    { label: 'Conditionnements', value: 'Fûts PEHD 1 L, 5 L, 10 L, 25 L et flacons compte-gouttes 15-30 ml' },
    { label: 'Commande minimale', value: '1 litre' },
  ],
  specs: {
    title: 'Spécifications Techniques',
    caption: 'Spécifications huile de pépins de figue de barbarie',
    head: ['Caractéristique', 'Détail'],
    rows: [
      ['Dénomination INCI', 'Opuntia Ficus-Indica Seed Oil'],
      ['Procédé', 'Première pression à froid mécanique, sans solvant, non raffinée'],
      ['Certification', 'Certifié biologique (USDA / équivalence biologique UE)'],
      ['Conditionnements', 'Fûts PEHD de 1 L, 5 L, 10 L, 25 L et flacons pipette 15 ml à 30 ml'],
      ['Minimum de commande', '1 litre'],
      ['Documents fournis', "Certificat d'analyse (COA), Fiche de données de sécurité (MSDS), Fiche technique"],
    ],
  },
  whyItCostsMore: {
    title: "Pourquoi son coût est-il supérieur à celui de l'huile d'argan ?",
    text: "Les pépins de figue de barbarie sont minuscules, extrêmement durs et ne renferment que 5 % d'huile environ. Il faut récolter près d'une tonne de fruits frais pour trier, laver et sécher les graines nécessaires à l'extraction d'un seul litre d'huile pure. Un tarif anormalement bas sur le marché signale presque toujours un macérât huileux de fleurs ou une huile coupée.",
  },
  howBrandsUseIt: {
    title: 'Comment les marques intègrent cette huile rare',
    bullets: [
      'En huile précieuse visage pure dans des flacons compte-gouttes de 15 à 30 ml.',
      "En sérum anti-âge d'exception formulé en synergie avec l'huile d'argan.",
      "Comme produit star (Hero Product) d'une gamme de soins botaniques marocains haut de gamme.",
    ],
    honestClaimsTitle: 'Arguments produits authentiques :',
    honestClaimsText: "Mettez en avant le ressenti immédiat de vos utilisatrices : absorption ultra-rapide, toucher sec velouté, confort intense, sans aucun film gras résiduel.",
  },
  faq: {
    title: 'Foire Aux Questions',
    items: [
      {
        question: "L'huile de pépins de figue de barbarie est-elle identique à l'huile de cactus ?",
        answer: "Oui. 'Huile de pépins de figue de barbarie', 'huile de cactus' et 'huile de figue de Barbarie' désignent la même huile végétale issue d'Opuntia ficus-indica.",
      },
      {
        question: "Peut-on l'associer à l'huile d'argan ?",
        answer: "Absolument. L'alliance de l'huile d'argan et de figue de barbarie constitue l'une des synergies anti-âge les plus réputées en dermo-cosmétique naturelle.",
      },
    ],
    relatedText: 'Consultez également notre',
    arganLinkText: "huile d'argan en vrac",
    privateLabelLinkText: 'service de marque blanche',
  },
};
