# Moroccan Organic Products (MOP) 🌿

Official web platform for **Moroccan Organic Products** — B2B wholesale exporter and private label manufacturer of certified Moroccan organic beauty and wellness products based in Marrakech, Morocco.

---

## 🌟 Features

- **Multilingual Support (4 Locales)**:
  - 🇬🇧 English (`en`)
  - 🇫🇷 Français (`fr`)
  - 🇲🇦 العربية (`ar`) — full Right-to-Left (RTL) layout support
  - 🇩🇪 Deutsch (`de`)
- **Key Sections & Pages**:
  - **Homepage**: Hero, certified product categories, wholesale strengths, private label overview, social proof.
  - **Products Catalog & Details**: 9 detailed product pages (Bulk Argan Oil, Bulk Prickly Pear Seed Oil, Moroccan Black Soap, Argan Hair Serum, Argan Beard Oil, etc.) with technical specifications, INCI, certifications, and packaging formats.
  - **Wholesale (`/wholesale`)**: Export formats (jerrycans, drums, IBC), MOQ, COA documentation, and international shipping options (EXW/FOB/CIF).
  - **Private Label (`/private-label-moroccan-beauty-products`)**: Custom formulation, packaging, label design, low MOQs, and regulatory compliance assistance.
  - **About Us (`/about-us`)**: Heritage, sustainable harvesting cooperatives, quality controls, and Marrakech facilities.
  - **FAQ (`/faq`)**: Common questions categorized by ordering, shipping, customization, and certifications.
  - **Contact Us (`/contact-us`)**: Quote request form, direct contact info, and Google Maps integration.
- **Conversion & UX**:
  - Floating WhatsApp action button with localized prefilled messages.
  - Compact, accessible language switcher.
  - Mobile bottom CTA bar.
  - SEO-optimized metadata, OpenGraph tags, canonical links, and hreflang across all 4 languages.
- **Tech Stack**:
  - [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
  - TypeScript (strict mode, zero errors)
  - Pure CSS design system with custom properties (no bulky CSS frameworks)
  - Lucide Icons

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (Node 20+ recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HAMZAamejoudj/moroccan-organic-product-.git
cd moroccan-organic-product-

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── content/              # Raw data & references
├── public/               # Static assets & optimized images
├── src/
│   ├── app/              # Next.js App Router (SSG pages & API routes)
│   ├── components/       # UI components (Header, Footer, LanguageSwitcher, FAB, etc.)
│   ├── config/           # Site facts, navigation, and business metadata
│   ├── i18n/             # Multilingual dictionaries (en, fr, ar, de)
│   └── styles/           # Global styles and design system
└── scripts/              # Build, asset, and audit automation scripts
```

---

## 📜 License

Private & Proprietary — © Moroccan Organic Products. All rights reserved.
