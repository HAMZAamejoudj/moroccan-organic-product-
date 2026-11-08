const fs = require('fs');

async function findFavicon() {
  const res = await fetch('https://moroccanorganicproducts.com');
  const html = await res.text();
  const iconMatches = [...html.matchAll(/<link[^>]+(?:icon|favicon)[^>]*>/gi)];
  console.log('HTML link icon tags:', iconMatches.map(m => m[0]));

  const candidateUrls = [
    'https://moroccanorganicproducts.com/favicon.ico',
    'https://moroccanorganicproducts.com/favicon.png',
    'https://moroccanorganicproducts.com/assets/images/favicon.png',
    'https://moroccanorganicproducts.com/assets/images/favicon.ico',
    'https://moroccanorganicproducts.com/assets/img/favicon.png',
    'https://moroccanorganicproducts.com/assets/images/logo.png'
  ];

  for (const url of candidateUrls) {
    try {
      const r = await fetch(url);
      console.log(url, r.status, r.headers.get('content-type'), r.headers.get('content-length'));
    } catch (e) {
      console.log(url, 'error:', e.message);
    }
  }
}

findFavicon().catch(console.error);
