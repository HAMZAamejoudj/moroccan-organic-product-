const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:\\Users\\AI HUB\\.gemini\\antigravity\\brain\\73ca2f49-d7d2-48f2-8fba-5774689b7af4';
const publicDir = path.resolve('public/images');

async function main() {
  const images = [
    {
      source: path.join(brainDir, 'about_pressing_artisan_v2_1794054349706.jpg'),
      destWebp: path.join(publicDir, 'workshop-pressing.webp'),
      destJpg: path.join(publicDir, 'workshop-pressing.jpg'),
      width: 1280,
      height: 1600
    },
    {
      source: path.join(brainDir, 'about_team_fulfillment_1794054367399.jpg'),
      destWebp: path.join(publicDir, 'team-packing.webp'),
      destJpg: path.join(publicDir, 'team-packing.jpg'),
      width: 1600,
      height: 1067
    },
    {
      source: path.join(brainDir, 'about_filling_craft_1794054386851.jpg'),
      destWebp: path.join(publicDir, 'filling-labelling.webp'),
      destJpg: path.join(publicDir, 'filling-labelling.jpg'),
      width: 1600,
      height: 1067
    }
  ];

  for (const img of images) {
    console.log(`Processing ${path.basename(img.source)}...`);
    if (!fs.existsSync(img.source)) {
      console.error(`Missing source: ${img.source}`);
      continue;
    }
    await sharp(img.source)
      .resize(img.width, img.height, { fit: 'cover' })
      .webp({ quality: 88 })
      .toFile(img.destWebp);

    await sharp(img.source)
      .resize(img.width, img.height, { fit: 'cover' })
      .jpeg({ quality: 90 })
      .toFile(img.destJpg);

    console.log(`Saved ${path.basename(img.destWebp)} and ${path.basename(img.destJpg)}`);
  }

  console.log('Successfully deployed all About page images!');
}

main().catch(console.error);
