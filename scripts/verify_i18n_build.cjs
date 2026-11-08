const fs = require('fs');

function inspectPage(htmlPath, lang) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const descMatch = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/);
  const desc = descMatch ? descMatch[1] : '';
  const alternates = [...html.matchAll(/<link[^>]+rel="alternate"[^>]*>/g)].map(m => m[0]);

  console.log(`=== Locale: ${lang} (${htmlPath}) ===`);
  console.log('Title:', title);
  console.log('Description:', desc);
  console.log('Hreflang alternates count:', alternates.length);
  alternates.forEach(a => console.log('  ', a));
}

inspectPage('.next/server/app/index.html', 'EN');
inspectPage('.next/server/app/fr.html', 'FR');
inspectPage('.next/server/app/ar.html', 'AR');
inspectPage('.next/server/app/de.html', 'DE');
