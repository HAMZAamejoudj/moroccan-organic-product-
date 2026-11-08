import fs from 'fs';
import path from 'path';

const appDir = path.resolve('src/app');
function findPageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(findPageFiles(full));
    } else if (file === 'page.tsx') {
      results.push(full);
    }
  });
  return results;
}

const pageFiles = findPageFiles(appDir);
for (const file of pageFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let route = file.replace(appDir, '').replace(/\\page\.tsx$/, '').replace(/\\\\/g, '/').replace(/\\/g, '/');
  if (route === '') route = '/';

  const titleMatch = content.match(/title:\s*['"`]([^'"`]*)['"`]/);
  const descMatch = content.match(/description:\s*['"`]([\s\S]*?)['"`]/);
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || content.match(/<PageIntro[^>]*title=["']([^"']*)["']/i);

  console.log('----------------------------------------------------');
  console.log(`Route: ${route}`);
  console.log(`  File: ${path.relative(process.cwd(), file)}`);
  console.log(`  Meta Title: ${titleMatch ? titleMatch[1] : '(none)'}`);
  console.log(`  Meta Desc:  ${descMatch ? descMatch[1].replace(/\s+/g, ' ').slice(0, 120) : '(none)'}`);
  console.log(`  H1:         ${h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '(none)'}`);
}
