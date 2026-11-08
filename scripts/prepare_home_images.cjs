const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const scrapedDir = path.resolve('scraped_data/images');
const publicDir = path.resolve('public/images');

async function processHomeImages() {
  const mapping = [
    {
      src: 'producer-moroccan-argan-oil-suppliers-canada.jpg',
      dest: 'home-argan.jpg'
    },
    {
      src: 'buy-Prickly-Pear-Seed-Oil-Opuntia-Ficus-Indica-barbary-fig-seed-oil-wholesale-suppliers-manufatures-for-sale.jpg',
      dest: 'home-prickly-pear.jpg'
    },
    {
      src: 'moroccan-argan-oil%20beauty-hair-treatment-serum-cosmetic.jpg',
      dest: 'home-hair-serum.jpg'
    },
    {
      src: 'beard-growth-oil-with-jojoba-and-argan.jpg',
      dest: 'home-beard-oil.jpg'
    },
    {
      src: 'beldi-black-soap-morocco-benefits-ingredients-with-flavour.jpg',
      dest: 'home-black-soap.jpg'
    },
    {
      src: 'moroccan-rhassoul-clay-powder-benefits.jpg',
      dest: 'home-ghassoul.jpg'
    },
    {
      src: 'aker.jpg',
      dest: 'home-aker-fassi.jpg'
    }
  ];

  for (const item of mapping) {
    const srcPath = path.join(scrapedDir, item.src);
    const destPath = path.join(publicDir, item.dest);
    if (!fs.existsSync(srcPath)) {
      console.error(`Not found: ${srcPath}`);
      continue;
    }
    await sharp(srcPath)
      .resize(1200, 900, { fit: 'cover' })
      .jpeg({ quality: 85 })
      .toFile(destPath);
    console.log(`Created ${item.dest} from ${item.src}`);
  }
}

processHomeImages().catch(console.error);
