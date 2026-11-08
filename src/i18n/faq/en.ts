import type { FaqDictionary } from './types';

export const enFaq: FaqDictionary = {
  seo: {
    title: "FAQ | Moroccan Beauty Products Wholesale & Private Label",
    description:
      "Answers for buyers: wholesale argan oil orders, prickly pear seed oil, MOQs from 50 pieces, export certificates, lead times and global shipping.",
    ogTitle: 'FAQ | Moroccan Organic Products Wholesale & Private Label Guide',
    ogDescription:
      'Everything you need to know about purchasing Moroccan cosmetic oils, ordering testing samples, private label manufacturing from 50 units, and global export procedures.',
  },
  intro: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'FAQ',
    title: 'Frequently Asked Questions',
    lead: 'Clear, direct answers for cosmetic brands, importers, spa owners, and distributors considering wholesale or private label orders from Morocco.',
  },
  groups: {
    oils: {
      title: 'About the Oils & Quality',
      items: [
        {
          question: 'Is your argan oil 100% pure and cold-pressed?',
          answer:
            'Yes. Our cosmetic argan oil is 100% pure virgin Argania Spinosa Kernel Oil, cold-pressed mechanically at low temperatures below 45°C. It contains no mineral oils, chemical additives, silicones, synthetic fragrances, or preservatives.',
          link: { label: 'Explore bulk argan oil specifications', href: '/products/argan-oil-bulk' },
        },
        {
          question: 'What is the exact difference between cosmetic and culinary argan oil?',
          answer:
            'Cosmetic argan oil is cold-pressed from raw, unroasted kernels to preserve maximum vitamin E, sterols, and delicate fatty acids, yielding a pale golden liquid with a mild, fresh aroma. Culinary argan oil is pressed from roasted kernels, producing a darker amber hue and a strong nutty taste and fragrance. The two are distinct and not interchangeable in cosmetic formulation.',
        },
        {
          question: 'Why is prickly pear seed oil significantly more expensive than argan oil?',
          answer:
            'Prickly pear seed oil (Opuntia Ficus-Indica) requires approximately 1 ton (1,000 kg) of fresh cactus fruit to yield 30 to 40 kg of microscopic dried seeds. These hard seeds contain only 3% to 5% extractable oil. It takes nearly 800 kg to 1 ton of fruit to produce just 1 litre of pure oil, making it one of the rarest, most nutrient-dense botanical elixirs on earth.',
          link: { label: 'Explore prickly pear seed oil', href: '/products/prickly-pear-seed-oil-bulk' },
        },
        {
          question: 'What is the shelf life of your botanical oils and how should they be stored?',
          answer:
            'Our cold-pressed oils have a certified shelf life of 24 months from the date of pressing when stored unopened in dark glass, aluminum containers, or food-grade HDPE drums away from direct sunlight, moisture, and excessive heat (optimal temperature: 15°C to 22°C).',
        },
      ],
    },
    ordering: {
      title: 'Ordering, MOQs & Private Label',
      items: [
        {
          question: 'What are the minimum order quantities (MOQ)?',
          answer:
            'For bulk oil orders: 5 Litres in UN-certified HDPE jerrycans. For turnkey private label: only 50 finished bottles or jars per product reference, allowing brands to launch without high capital commitments.',
        },
        {
          question: 'Can I order laboratory samples before placing a commercial order?',
          answer:
            'Yes. We actively encourage testing. We dispatch 50 ml testing samples by express courier (DHL / FedEx) with matching analytical certificates (COA) so you can verify color, clarity, viscosity, and fatty acid profile before placing your order.',
        },
        {
          question: 'What payment methods and terms do you accept?',
          answer:
            'We accept international wire transfers (T/T - SWIFT) in EUR, USD, and GBP. For sample orders, credit card or secure online payment is accepted. For standard production: 50% deposit upon order confirmation and 50% balance upon release of export documents and bill of lading (B/L).',
        },
        {
          question: 'How long does production and dispatch take?',
          answer:
            'Bulk oil orders from current pressing stocks are typically packed and dispatched within 3 to 5 working days. Turnkey private label orders (filling, laser lot-coding, and custom labelling) take approximately 7 to 14 working days following final label design approval.',
        },
      ],
    },
    shipping: {
      title: 'Documentation, Customs & Global Shipping',
      items: [
        {
          question: 'Which compliance and regulatory documents are provided with orders?',
          answer:
            'Every commercial consignment is accompanied by a fresh batch Certificate of Analysis (COA), multilingual Safety Data Sheet (MSDS / SDS), standardized INCI breakdown, Certificate of Origin (Chamber of Commerce), and EUR.1 movement certificate for duty-free entry into the European Union and EFTA countries.',
        },
        {
          question: 'Do you ship worldwide, and by what transport modes?',
          answer:
            'Yes, we export to over 30 countries globally. Small parcels and samples are handled via door-to-door express air couriers (DHL / FedEx / UPS). Palletized commercial orders are dispatched via direct air freight or maritime container shipping (FCL / LCL) through the Port of Casablanca.',
        },
        {
          question: 'Who handles customs duties and local import taxes?',
          answer:
            'Standard commercial shipments are quoted on EXW, FOB, or CIF terms, meaning destination customs duties and local VAT are the responsibility of the importer. For European buyers, our EUR.1 certificate exempts the oil from customs tariffs in accordance with Morocco-EU bilateral trade agreements.',
        },
      ],
    },
  },
  ctaBand: {
    title: 'Have a Specific Question About Your Project?',
    lead: 'Our commercial team in Marrakech is ready to answer questions about technical specifications, custom formulations, packaging options, and shipping timelines.',
    btn: 'Contact Our Team',
  },
};
