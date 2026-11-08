import fs from 'fs';
import path from 'path';

const pages = JSON.parse(fs.readFileSync('scraped_data/scraped_pages.json', 'utf-8'));
const imagesCatalog = JSON.parse(fs.readFileSync('scraped_data/images_catalog.json', 'utf-8'));

// Filter down to the actual unique content pages of the PHP site
const uniquePages = new Map();

for (const page of pages) {
  if (page.status !== 200 || !page.title) continue;
  try {
    const u = new URL(page.url);
    let p = u.pathname;
    if (u.search && u.search.includes('C=')) continue; // Apache dir listing
    if (p.includes('/php/')) continue;
    p = p.replace(/\/\.\.\//g, '/').replace(/\/+/g, '/');

    if (!uniquePages.has(p)) {
      uniquePages.set(p, page);
    }
  } catch (e) {}
}

console.log(`Found ${uniquePages.size} unique meaningful pages.`);

// Map old URLs to Next.js routes based on next.config.ts
const routeMapping = {
  '/': '/',
  '/index.php': '/',
  '/about-us.php': '/about-us',
  '/products.php': '/products',
  '/faq.php': '/faq',
  '/contact-us.php': '/contact-us',
  '/wholesale-moroccan-beauty-products.php': '/wholesale',
  '/private-label-moroccan-beauty-products.php': '/private-label-moroccan-beauty-products',
  '/products/argan-oil-producers-in-morocco.php': '/products/argan-oil-bulk',
  '/products/argan-oil-wholesale-morocco.php': '/products/argan-oil-bulk',
  '/products/organic-prickly-pear-cactus-seed-oil.php': '/products/prickly-pear-seed-oil-bulk',
  '/products/prickly-pear-cactus-seed-oil-suppliers-manufacturer.php': '/products/prickly-pear-seed-oil-bulk',
  '/products/argan-oil-for-beard-growth-and-care.php': '/private-label-moroccan-beauty-products',
  '/products/hair-growth-treatment-oils-wholesale-distributor.php': '/private-label-moroccan-beauty-products',
  '/products/moroccan-lava-clay-hair-mask.php': '/products',
  '/products/natural-beauty-of-moroccan-black-soap.php': '/products',
  '/products/nila-powder-wholesale-morocco.php': '/products',
  '/products/aker-fassi-wholesale-morocco.php': '/products',
  '/products/tbrima-powder-wholesale-morocco.php': '/products'
};

const fullAudit = [];

for (const [oldPath, pageData] of uniquePages.entries()) {
  const nextRoute = routeMapping[oldPath] || 'Needs review';
  fullAudit.push({
    oldPath,
    fullUrl: pageData.url,
    nextRoute,
    title: pageData.title,
    metaDescription: pageData.metaDescription,
    h1: pageData.h1,
    h2: pageData.h2,
    h3: pageData.h3,
    images: pageData.images.map(img => ({
      src: img.src,
      alt: img.alt,
      title: img.title
    })),
    paragraphs: pageData.paragraphs,
    listItems: pageData.listItems
  });
}

fs.writeFileSync(
  path.resolve('scraped_data', 'seo_audit_extracted.json'),
  JSON.stringify(fullAudit, null, 2),
  'utf-8'
);

// Also generate a readable Markdown report
let md = `# SEO Extraction & Content Mapping: Old PHP Site vs Next.js

Generated on: ${new Date().toISOString()}

Total unique pages analyzed: **${fullAudit.length}**

---

`;

for (const item of fullAudit) {
  md += `## Page: \`${item.oldPath}\`
- **Full URL**: ${item.fullUrl}
- **Target Next.js Route**: \`${item.nextRoute}\`
- **SEO Title**: ${item.title || '*(Missing)*'}
- **Meta Description**: ${item.metaDescription || '*(Missing)*'}
- **H1**: ${item.h1.length > 0 ? item.h1.map(h => `\`${h}\``).join(', ') : '*(Missing)*'}
- **H2 Headings**:
${item.h2.length > 0 ? item.h2.map(h => `  - ${h}`).join('\n') : '  *(None)*'}

### Images on this page:
${item.images.length > 0 ? item.images.map(img => `- **Alt**: "${img.alt || '(No alt)'}" | **Src**: \`${img.src}\``).join('\n') : '*(None)*'}

### Key Content Extracts:
${item.paragraphs.slice(0, 5).map(p => `> ${p}`).join('\n\n')}

---

`;
}

fs.writeFileSync(path.resolve('scraped_data', 'SEO_EXTRACTED_REPORT.md'), md, 'utf-8');
console.log('Generated SEO_EXTRACTED_REPORT.md and seo_audit_extracted.json');
