import fs from 'fs';
import path from 'path';

const pages = JSON.parse(fs.readFileSync('scraped_data/scraped_pages.json', 'utf-8'));
const imagesMap = new Map();

for (const page of pages) {
  if (page.status !== 200 || !page.images) continue;
  for (const img of page.images) {
    let abs = img.absoluteSrc;
    if (!abs) continue;
    // Normalize url
    abs = abs.replace('/../', '/');
    if (!imagesMap.has(abs)) {
      imagesMap.set(abs, {
        url: abs,
        alts: new Set(),
        titles: new Set(),
        usedOnPages: new Set()
      });
    }
    const entry = imagesMap.get(abs);
    if (img.alt) entry.alts.add(img.alt);
    if (img.title) entry.titles.add(img.title);
    entry.usedOnPages.add(page.url);
  }
}

const imagesList = Array.from(imagesMap.values()).map(item => ({
  url: item.url,
  alts: Array.from(item.alts),
  titles: Array.from(item.titles),
  usedOnPages: Array.from(item.usedOnPages)
}));

console.log(`Found ${imagesList.length} unique images.`);

const imgDir = path.resolve('scraped_data', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

async function downloadImages() {
  const catalog = [];
  for (let i = 0; i < imagesList.length; i++) {
    const item = imagesList[i];
    const parsed = new URL(item.url);
    const filename = path.basename(parsed.pathname);
    const dest = path.join(imgDir, filename);

    console.log(`[${i + 1}/${imagesList.length}] Downloading ${filename}...`);
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        catalog.push({
          filename,
          localPath: dest,
          url: item.url,
          alts: item.alts,
          titles: item.titles,
          usedOnPages: item.usedOnPages,
          sizeBytes: buffer.byteLength
        });
      } else {
        console.error(`  Failed to download ${item.url}: ${res.status}`);
      }
    } catch (e) {
      console.error(`  Error downloading ${item.url}: ${e.message}`);
    }
  }

  fs.writeFileSync(
    path.resolve('scraped_data', 'images_catalog.json'),
    JSON.stringify(catalog, null, 2),
    'utf-8'
  );
  console.log('Images catalog saved successfully!');
}

downloadImages();
