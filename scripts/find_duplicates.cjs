const fs = require('fs');
const path = require('path');

const occurrences = new Map();

function scan(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) scan(full);
    else if (f.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf-8');
      const matches = [...content.matchAll(/['"]\/images\/([^'"]+)['"]/g)].map(m => m[1]);
      matches.forEach(img => {
        if (!occurrences.has(img)) occurrences.set(img, []);
        occurrences.get(img).push(path.relative(process.cwd(), full));
      });
    }
  });
}
scan('src');

console.log('=== Image usage report ===');
for (const [img, files] of occurrences.entries()) {
  const isDup = files.length > 1;
  console.log(`${isDup ? '🔴 DUPLICATE:' : '🟢 UNIQUE:   '} ${img} (${files.length} places)`);
  files.forEach(f => console.log(`     -> ${f}`));
}
