const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImages() {
  const publicImages = path.resolve('public/images');

  console.log('Generating filling-labelling.webp from workshop-filling.jpg...');
  await sharp(path.join(publicImages, 'workshop-filling.jpg'))
    .resize(1600, 1067, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(path.join(publicImages, 'filling-labelling.webp'));

  console.log('Generating workshop-pressing.webp from step-cold-pressing.jpg...');
  await sharp(path.join(publicImages, 'step-cold-pressing.jpg'))
    .resize(1600, 1067, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(path.join(publicImages, 'workshop-pressing.webp'));

  console.log('Generating team-packing.webp from step-filling-batch.jpg...');
  await sharp(path.join(publicImages, 'step-filling-batch.jpg'))
    .resize(1600, 1067, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(path.join(publicImages, 'team-packing.webp'));

  console.log('All 3 images generated successfully!');
}

processImages().catch(console.error);
