const fs = require('fs');
const sharp = require('sharp');

async function deployAllIcons() {
  const icoBuffer = fs.readFileSync('scraped_data/favicon.ico');

  // Copy original favicon.ico directly
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  // Generate 32x32 icon.png for Next.js App Router
  await sharp(icoBuffer)
    .resize(32, 32)
    .png()
    .toFile('src/app/icon.png');

  // Generate 180x180 apple-icon.png for Next.js App Router
  await sharp(icoBuffer)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toFile('src/app/apple-icon.png');

  // Public favicon.png
  await sharp(icoBuffer)
    .resize(32, 32)
    .png()
    .toFile('public/favicon.png');

  console.log('Successfully deployed all favicon variants from the old site!');
}

deployAllIcons().catch(console.error);
