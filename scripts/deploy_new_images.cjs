const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const brainDir = 'C:\\Users\\AI HUB\\.gemini\\antigravity\\brain\\73ca2f49-d7d2-48f2-8fba-5774689b7af4';
const publicImages = path.resolve('public/images');

async function main() {
  const tasks = [
    {
      source: path.join(brainDir, 'private_label_production_1794053785067.jpg'),
      destJpg: path.join(publicImages, 'private-label-production.jpg'),
      destWebp: path.join(publicImages, 'private-label-production.webp'),
      width: 1600,
      height: 1067
    },
    {
      source: path.join(brainDir, 'artisan_pressing_workshop_1794053799163.jpg'),
      destJpg: path.join(publicImages, 'workshop-pressing.jpg'),
      destWebp: path.join(publicImages, 'workshop-pressing.webp'),
      width: 1600,
      height: 1067
    },
    {
      source: path.join(brainDir, 'export_logistics_team_1794053815446.jpg'),
      destJpg: path.join(publicImages, 'team-packing.jpg'),
      destWebp: path.join(publicImages, 'team-packing.webp'),
      width: 1600,
      height: 1067
    },
    {
      source: path.join(brainDir, 'bulk_argan_drums_detail_1794053834469.jpg'),
      destJpg: path.join(publicImages, 'bulk-argan-drums-detail.jpg'),
      destWebp: path.join(publicImages, 'bulk-argan-drums-detail.webp'),
      width: 1600,
      height: 1200
    },
    {
      source: path.join(brainDir, 'prickly_pear_seeds_detail_1794053855477.jpg'),
      destJpg: path.join(publicImages, 'prickly-pear-seeds-detail.jpg'),
      destWebp: path.join(publicImages, 'prickly-pear-seeds-detail.webp'),
      width: 1600,
      height: 1200
    }
  ];

  for (const t of tasks) {
    console.log(`Processing ${path.basename(t.source)}...`);
    if (!fs.existsSync(t.source)) {
      console.error(`Missing source: ${t.source}`);
      continue;
    }
    await sharp(t.source)
      .resize(t.width, t.height, { fit: 'cover' })
      .jpeg({ quality: 88 })
      .toFile(t.destJpg);

    await sharp(t.source)
      .resize(t.width, t.height, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(t.destWebp);

    console.log(`  -> Saved ${path.basename(t.destJpg)} and ${path.basename(t.destWebp)}`);
  }

  console.log('All new images successfully deployed!');
}

main().catch(console.error);
