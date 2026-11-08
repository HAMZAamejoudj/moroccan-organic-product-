const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function downloadFavicon() {
  const icoRes = await fetch('https://moroccanorganicproducts.com/favicon.ico');
  const icoBuffer = Buffer.from(await icoRes.arrayBuffer());
  fs.writeFileSync('scraped_data/favicon.ico', icoBuffer);
  console.log('Saved scraped_data/favicon.ico, size:', icoBuffer.length);

  const pngRes = await fetch('https://moroccanorganicproducts.com/assets/images/favicon.png');
  const pngBuffer = Buffer.from(await pngRes.arrayBuffer());
  fs.writeFileSync('scraped_data/favicon.png', pngBuffer);
  console.log('Saved scraped_data/favicon.png, size:', pngBuffer.length);

  // Now deploy to src/app/favicon.ico, public/favicon.ico
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.png', pngBuffer);

  // Generate higher-res icons for apple-icon.png and icon.png
  // Check the dimensions of favicon.ico and logo
  const logoPath = 'scraped_data/images/logo.png';
  if (fs.existsSync(logoPath)) {
    console.log('Logo exists, generating crisp icon.png and apple-icon.png from logo or icon...');
    // We can extract/create crisp icon.png (32x32 / 192x192) and apple-icon.png (180x180)
  }
}

downloadFavicon().catch(console.error);
