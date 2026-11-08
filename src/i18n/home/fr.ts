import type { HomeDictionary } from '../types';

export const frHome: HomeDictionary = {
  seo: {
    title: "Grossiste Produits Bio du Maroc | Huile d'Argan & Soins",
    description:
      "Producteur marocain de cosmétiques bio : huile d'argan en vrac, pépins de figue de barbarie, savon noir et marque blanche dès 50 pièces.",
    ogTitle: "Grossiste Produits Bio du Maroc | Huiles Naturelles & Soins Cosmétiques",
    ogDescription:
      "Huile d'argan en vrac, pépins de figue de barbarie et fabrication cosmétique en marque blanche depuis Marrakech. Échantillons et expédition internationale.",
  },
  hero: {
    eyebrow: 'Fabricant marocain · Expédition internationale',
    title: 'Grossiste de Produits Cosmétiques Bio & Naturels du Maroc',
    lead: "Huile d'argan pressée à froid, huile de pépins de figue de barbarie, rituels traditionnels de hammam et fabrication en marque blanche pour marques, spas et distributeurs.",
    btnProducts: 'Nos Produits',
    btnPricing: 'Demander les Tarifs',
    btnWhatsapp: 'Discuter sur WhatsApp',
    specRows: [
      { label: "Huile d'argan", value: 'INCI: Argania Spinosa Kernel Oil' },
      { label: 'Procédé', value: 'Pression à froid' },
      { label: 'Grades', value: 'Cosmétique (amandons non torréfiés)' },
      { label: 'Formats', value: 'Vrac, flacons détaillants, marque blanche' },
      { label: 'Marque blanche', value: 'À partir de 50 pièces' },
      { label: 'Pépins de figue de barbarie', value: 'INCI: Opuntia Ficus-Indica Seed Oil' },
    ],
  },
  trust: [
    'Fabriqué au Maroc',
    'Huiles pressées à froid',
    'Marque blanche dès 50 pièces',
    'Livraison internationale',
  ],
  brandSplit: {
    eyebrow: 'Fabriqué au Maroc',
    title: 'La Beauté Naturelle Marocaine pour Votre Marque',
    lead: "Achetez vos produits cosmétiques marocains directement auprès d'un producteur spécialisé. De l'huile d'argan pure et l'huile de pépins de figue de barbarie au savon noir beldi, argile rhassoul et aker fassi — en vrac et marque blanche dès 50 pièces.",
    badge: 'Pressé au Maroc — Origine 100% Naturelle',
    features: [
      {
        title: 'Gamme Complète',
        desc: "Huile d'argan, huile de figue de barbarie, savon noir, rhassoul et aker fassi. Vrac, flacons et personnalisation.",
      },
      {
        title: 'Marque Blanche (Private Label)',
        desc: 'Huiles visage, sérums capillaires et huiles à barbe sous votre marque dès 50 pièces. Vous choisissez flacon et étiquette.',
      },
      {
        title: 'Expédition Mondiale',
        desc: 'Échantillons par coursier express ; commandes grossistes par fret aérien ou maritime avec documents export complets.',
      },
    ],
  },
  bestsellers: {
    title: 'Nos Meilleures Ventes de Cosmétiques Marocains',
    btnViewAll: 'Voir Tous les Produits',
    items: [
      {
        title: "Huile d'Argan Pure du Maroc en Vrac",
        text: "Huile d'argan cosmétique pressée à froid d'amandons non torréfiés, pour formulations peau, cheveux et conditionnement.",
        href: '/products/argan-oil-bulk',
        linkLabel: "Découvrir l'huile d'argan en vrac",
        imageSrc: '/images/home-argan.jpg',
        imageAlt: "Bidons et flacons d'huile d'argan marocaine brute",
        imageLabel: "Huile d'argan",
      },
      {
        title: 'Huile de Pépins de Figue de Barbarie Bio',
        text: 'Une huile précieuse anti-âge pour sérums haut de gamme, fournie en vrac ou en flacons compte-gouttes.',
        href: '/products/prickly-pear-seed-oil-bulk',
        linkLabel: 'Découvrir la figue de barbarie',
        imageSrc: '/images/home-prickly-pear.jpg',
        imageAlt: 'Flacon pipette huile de pépins de figue de barbarie et graines',
        imageLabel: 'Huile de figue de barbarie',
      },
      {
        title: 'Sérum Capillaire Argan en Marque Blanche',
        text: 'Un soin léger pour les longueurs et pointes, apportant brillance et nutrition. Disponible sous votre marque dès 50 pièces.',
        href: '/private-label-moroccan-beauty-products',
        linkLabel: 'Voir la marque blanche',
        imageSrc: '/images/home-hair-serum.jpg',
        imageAlt: "Sérum capillaire réparateur à l'huile d'argan",
        imageLabel: 'Sérum cheveux argan',
      },
      {
        title: 'Huile à Barbe Argan en Marque Blanche',
        text: 'Formule nourrissante qui adoucit la barbe et protège la peau. Personnalisable sous votre propre marque dès 50 pièces.',
        href: '/private-label-moroccan-beauty-products',
        linkLabel: 'Voir la marque blanche',
        imageSrc: '/images/home-beard-oil.jpg',
        imageAlt: 'Huile à barbe argan et jojoba',
        imageLabel: 'Huile à barbe argan',
      },
      {
        title: 'Savon Noir Marocain Beldi en Gros',
        text: 'Pâte végétale traditionnelle à base d’huile d’olive pour hammam et spa, vendue en seaux grossistes.',
        href: '/products',
        linkLabel: 'Voir nos produits',
        imageSrc: '/images/home-black-soap.jpg',
        imageAlt: "Savon noir beldi marocain à l'huile d'olive",
        imageLabel: 'Savon noir marocain',
      },
      {
        title: 'Argile Ghassoul du Maroc en Vrac',
        text: "Rhassoul minéral de l'Atlas en poudre ultra-fine pour masques purifiants du visage et soins capillaires.",
        href: '/products',
        linkLabel: 'Voir nos produits',
        imageSrc: '/images/home-ghassoul.jpg',
        imageAlt: 'Poudre dargile rhassoul naturel du Maroc',
        imageLabel: 'Argile rhassoul',
      },
      {
        title: 'Aker Fassi Marocain Grossiste',
        text: 'Poudre végétale traditionnelle de coquelicot et grenade utilisée comme fard naturel pour lèvres et joues.',
        href: '/products',
        linkLabel: 'Voir nos produits',
        imageSrc: '/images/home-aker-fassi.jpg',
        imageAlt: 'Poudre naturelle rouge Aker Fassi marocain',
        imageLabel: 'Aker fassi',
      },
    ],
  },
  steps: {
    title: "De l'Amandon au Flacon",
    items: [
      {
        title: 'Sélection des amandons',
        text: 'Les noix d’argan sont concassées et les amandons triés avec soin.',
        imageSrc: '/images/step-kernels.jpg',
        imageAlt: "Concassage traditionnel des noix d'argan",
        imageLabel: 'Concassage',
      },
      {
        title: 'Pression à froid',
        text: 'Les amandons sont pressés mécaniquement sans chaleur pour préserver tous les actifs.',
        imageSrc: '/images/step-cold-pressing.jpg',
        imageAlt: "Presse mécanique extrayant l'huile d'argan dorée",
        imageLabel: 'Pression à froid',
      },
      {
        title: 'Repos et filtration',
        text: 'L’huile décante naturellement puis est filtrée avant le conditionnement.',
        imageSrc: '/images/step-resting-filtering.jpg',
        imageAlt: "Filtration douce de l'huile d'argan",
        imageLabel: 'Décantation & filtration',
      },
      {
        title: 'Remplissage et traçabilité',
        text: 'Mise en fûts ou flacons avec numéro de lot et certificat de conformité.',
        imageSrc: '/images/step-filling-batch.jpg',
        imageAlt: "Conditionnement de l'huile en flacons cosmétiques",
        imageLabel: 'Conditionnement',
      },
    ],
  },
  waysToBuy: {
    title: "Trois Façons d'Acheter",
    items: [
      {
        name: 'Huile en vrac',
        get: "Huile d'argan ou figue de barbarie en bidons de 1 L, 5 L, 25 L ou fûts de 200 L",
        for: 'Formulateurs, fabricants, marques possédant leur propre ligne de remplissage',
        href: '/products/argan-oil-bulk',
        linkLabel: "Voir l'huile d'argan en vrac",
      },
      {
        name: 'Produits prêts à la vente',
        get: 'Nos huiles pures en flacons de verre de 30 ml, 50 ml ou 100 ml',
        for: 'Boutiques, spas, instituts et vendeurs en ligne',
        href: '/wholesale',
        linkLabel: 'Voir les formats grossiste',
      },
      {
        name: 'Marque blanche (Private label)',
        get: 'Huiles visage, sérums et huiles à barbe sous votre propre marque dès 50 pièces',
        for: 'Marques cosmétiques nouvelles et en pleine expansion',
        href: '/private-label-moroccan-beauty-products',
        linkLabel: 'Voir la marque blanche',
      },
    ],
  },
  privateLabelBand: {
    badgeNum: '50',
    badgeLabel: 'pièces minimum',
    title: 'Services de Marque Blanche',
    description:
      "Lancez votre gamme d'huile d'argan, huile visage, sérum capillaire ou huile à barbe sous votre propre marque sans commander des milliers d'unités. Personnalisation, remplissage et conditionnement au Maroc.",
    btnLearnMore: 'En Savoir Plus',
    btnInquiry: 'Envoyer une Demande',
    linkLabel: 'Découvrir la marque blanche',
    href: '/private-label-moroccan-beauty-products',
  },
  bulkSupplier: {
    title: "Fournisseur d'Huiles Marocaines en Vrac",
    lead: "Entreprise marocaine basée à Marrakech, nous produisons de l'huile d'argan et de figue de barbarie de qualité supérieure, pressées à froid pour usage cosmétique. Chaque contenant est muni d'un numéro de lot et d'un COA d'analyse.",
    bullets: [
      'Grade certifié — grade cosmétique garanti sur chaque devis officiel.',
      'Traçabilité totale — numéro de lot et analyses pour chaque lot exporté.',
      'Fraîcheur optimale — stockage à l’abri de la lumière et pressage régulier.',
      'Interlocuteurs experts — réponses techniques précises sur l’acidité, la DLUO et le packaging.',
    ],
    btnWholesale: 'Détails Grossiste',
    btnQuote: 'Demander un Devis',
    shippingText:
      "Échantillons expédiés par coursier express ; commandes de gros par fret aérien ou maritime. Nous prenons en charge l'ensemble des formalités douanières d'exportation vers votre entrepôt ou port.",
  },
  quoteForm: {
    title: 'Demander un Devis Rapide',
    description:
      'Indiquez l’huile souhaitée, le grade, la quantité et votre pays de destination. Vous recevrez notre offre sous 24h ouvrées.',
    interests: [
      "Huile d'argan en vrac",
      'Huile de pépins de figue de barbarie',
      "Huile d'argan alimentaire",
      'Marque blanche / Private label',
      'Autres cosmétiques marocains',
    ],
  },
  faq: {
    title: 'Questions Fréquentes pour Votre Entreprise',
    items: [
      {
        question: 'Où êtes-vous basés ?',
        answer: 'Nous sommes situés à Marrakech, au Maroc. Nous produisons et exportons directement nos huiles depuis nos ateliers.',
      },
      {
        question: 'Quelle est la quantité minimale (MOQ) en marque blanche ?',
        answer: '50 pièces seulement. Cela vous permet de lancer votre propre marque sans immobiliser un budget colossal.',
      },
      {
        question: 'Quel est le minimum de commande pour les huiles en vrac ?',
        answer: 'Les commandes en vrac débutent à partir de 5 Litres en bidon jusqu’à des fûts complets de 200 Litres.',
      },
      {
        question: 'Proposez-vous le conditionnement complet sous ma marque ?',
        answer:
          'Oui. Nous nous occupons du remplissage, de la pose de vos étiquettes, du scellage et de l’emballage sous votre marque dès 50 pièces.',
      },
      {
        question: 'Puis-je commander des échantillons avant d’acheter en gros ?',
        answer: 'Oui, nous fournissons des échantillons expédiés par coursier express dans le monde entier.',
      },
      {
        question: 'Livrez-vous à l’international ?',
        answer:
          'Oui. Les échantillons partent par DHL/FedEx ; les commandes en vrac par fret aérien ou maritime avec documentation complète (COA, FDS/MSDS, EUR.1).',
      },
      {
        question: 'Avec quels types de clients travaillez-vous ?',
        answer:
          'Marques cosmétiques, laboratoires, formulateurs, distributeurs grossistes, spas, hôtels et e-commerces exigeant une qualité constante.',
      },
      {
        question: 'Puis-je combiner plusieurs produits dans une même commande ?',
        answer: 'Absolument, vous pouvez regrouper différentes huiles, argiles et formats dans une seule expédition consolidée.',
      },
    ],
    relatedText: {
      intro: 'Pour en savoir plus :',
      aboutUs: 'à propos de nous',
      aboutUsHref: '/about-us',
      wholesale: 'conditions grossiste',
      wholesaleHref: '/wholesale',
      faq: 'FAQ complète',
      faqHref: '/faq',
    },
  },
  ctaBand:
    "Contactez-nous pour obtenir un devis, tester nos échantillons ou lancer votre projet de marque blanche. Faites-nous part de vos besoins et recevez une offre claire et détaillée.",
};
