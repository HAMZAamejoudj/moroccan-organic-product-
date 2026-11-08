import type { ProductDetailItem } from '../types';

export const ghassoulClay: ProductDetailItem = {
    slug: 'ghassoul-clay',
    seo: {
      title: 'Argile Ghassoul du Maroc en Gros | Rhassoul en Plaquettes & Poudre',
      description:
        'Fournisseur en gros d’argile Ghassoul marocaine authentique de la vallée de Moulouya. Plaquettes séchées au soleil ou poudre micronisée. Vrac et pots 250g.',
      ogTitle: 'Argile Ghassoul Marocain en Gros | Producteur Certifié',
      ogDescription:
        'Rhassoul minéral naturel pour soins corps et cheveux. Pouvoir absorbant et reminéralisant exceptionnel. Export direct carrières du Maroc.',
    },
    intro: {
      title: 'Argile Ghassoul (Rhassoul) — Vente en Gros & Vrac Minéral',
      lead: 'Une argile smectique volcanique unique au monde, extraite exclusivement des gisements souterrains du Moyen Atlas marocain dans la vallée de la Moulouya. Utilisée depuis le XIIe siècle, cette roche argileuse exceptionnelle nettoie par absorption physique sans détruire le film hydrolipidique de la peau ou la fibre capillaire.',
      breadcrumbCurrent: 'Argile Ghassoul',
      btnQuote: 'Demander un Devis Ghassoul',
      btnSample: 'Commander un Échantillon',
    },
    image: {
      src: '/images/ghassoul-clay.jpg',
      alt: 'Plaquettes de ghassoul brut séchées au soleil et poudre d’argile dans un bol en bois',
      label: 'Argile ghassoul marocaine',
    },
    facts: [
      { label: 'Origine Géologique', value: 'Gisements jurassiques exclusifs de la vallée de la Moulouya (Maroc)' },
      { label: 'Composition Minérale', value: 'Silice (55-60%), Magnésium (20-25%), Calcium, Fer, Potassium' },
      { label: 'Formes Proposées', value: 'Morceaux traditionnels (plaquettes séchées au soleil) ou poudre micronisée ultra-fine' },
      { label: 'Capacité d’Adsorption', value: 'Capte jusqu’à 1,66 fois son propre poids en eau et impuretés' },
      { label: 'Conditionnement', value: 'Sacs kraft 25 kg, fûts ou pots retail prêts à la vente 200 g / 500 g' },
    ],
    specs: {
      title: 'Spécifications Minéralogiques & Chimiques',
      caption: 'Fiche d’analyse minérale du Ghassoul marocain authentique',
      head: ['Paramètre', 'Valeur Analytique'],
      rows: [
        ['Dénomination INCI', 'Moroccan Lava Clay'],
        ['Numéro CAS', '227459-60-8'],
        ['Granulométrie Poudre', 'Inférieure à 75 microns (maille 200 pour application cosmétique douce)'],
        ['Teneur en Silice (SiO2)', '55 % à 61 %'],
        ['Teneur en Oxyde de Magnésium (MgO)', '21 % à 25 %'],
        ['Teneur en Eau & Humidité', 'Inférieure à 8 %'],
        ['Pureté Microbiologique', 'Exempte de métaux lourds (conforme normes cosmétiques internationales)'],
        ['Procédé de Traitement', 'Lavage traditionnel à l’eau douce, décantation, séchage solaire naturel, micronisation mécanique'],
      ],
    },
    benefits: {
      title: 'Le Nettoyant Détoxifiant et Reminéralisant par Excellence',
      paragraphs: [
        'Le Ghassoul possède un pouvoir moussant naturel doux dû à sa structure cristalline lamellaire. Contrairement aux tensioactifs sulfatés ou aux savons agressifs, il n’ouvre pas les écailles du cheveu et ne décape pas le sébum protecteur de l’épiderme.',
        'Ses ions magnésium et calcium s’échangent au contact des impuretés cutanées, neutralisant les toxines et apportant une reminéralisation profonde du cuir chevelu et du derme.',
      ],
      bulletsTitle: 'Propriétés Clés Pour Soins Visage, Corps & Cheveux :',
      bullets: [
        'Purification Séborégulatrice : Absorbe l’excès de sébum et resserre les pores dilatés sans assécher.',
        'Volume & Légèreté Capillaire : Nettoie les racines en profondeur, gaine la fibre et redonne un volume naturel impressionnant.',
        'Tolérance Cutanée Parfaite : Convient aux peaux les plus sensibles, réactives ou sujettes aux rougeurs.',
        'Détoxification Globale : Élimine les résidus de pollution et métaux lourds accumulés à la surface cutanée.',
      ],
    },
    usageGuide: {
      title: 'Préparation et Masque Maison ou Professionnel',
      text: 'Mélanger le Ghassoul avec de l’eau tiède ou de l’eau florale de rose jusqu’à l’obtention d’une pâte lisse et onctueuse. Appliquer en masque sur le visage, le corps ou le cuir chevelu. Laisser agir 10 à 15 minutes sans laisser sécher complètement, puis rincer abondamment.',
    },
    howToOrder: {
      title: 'Commande en Gros & Vrac Minéral',
      steps: [
        { title: 'Format de la matière première', text: 'Choisissez entre les plaquettes séchées au soleil traditionnelles ou la poudre cosmétique micronisée.' },
        { title: 'Conditionnement industriel ou revente', text: 'Sacs industriels de 25 kg sur palettes ou pots cosmétiques avec votre marque.' },
        { title: 'Documentation qualité', text: 'Fourniture immédiate du bulletin d’analyse minéralogique et du certificat d’authenticité.' },
        { title: 'Expédition conteneur ou fret aérien', text: 'Livraison maritime en conteneurs FCL/LCL ou expédition express par avion.' },
      ],
    },
    faq: {
      title: 'Questions Fréquentes — Argile Ghassoul',
      items: [
        {
          question: 'Le Ghassoul convient-il pour le lavage des cheveux à la place du shampooing ?',
          answer: 'Oui, c’est l’utilisation ancestrale du Ghassoul (appelé le "shampooing sans tensioactifs"). Il lave les cheveux avec une douceur infinie tout en apportant brillance et volume.',
        },
        {
          question: 'Quelle est la différence entre les plaquettes et la poudre micronisée ?',
          answer: 'Les plaquettes sont l’état brut séché au soleil, idéales pour les spas traditionnels. La poudre micronisée fond instantanément dans l’eau, parfaite pour les formulations industrielles et les masques visage rapides.',
        },
        {
          question: 'Le Ghassoul est-il 100% pur sans additifs chimiques ?',
          answer: 'Notre Ghassoul est 100% pur et naturel, extrait des carrières et séché au soleil marocain sans aucun traitement chimique ni conservateur.',
        },
      ],
      relatedText: 'Explorez nos ingrédients de soins naturels :',
      relatedLinks: [
        { label: 'Savon Noir Marocain', href: '/fr/products/moroccan-black-soap' },
        { label: 'Poudre de Nila Bleu', href: '/fr/products/nila-powder' },
        { label: 'Huile de Pépins de Figue de Barbarie', href: '/fr/products/prickly-pear-seed-oil-bulk' },
      ],
    },
  };
