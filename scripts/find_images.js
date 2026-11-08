import fs from 'fs';
import path from 'path';

function search(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) search(full);
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const c = fs.readFileSync(full, 'utf-8');
      const matches = c.match(/['"]\/images\/[^'"]+['"]/g);
      if (matches) {
        console.log(path.relative(process.cwd(), full), matches);
      }
    }
  });
}
search('src');
