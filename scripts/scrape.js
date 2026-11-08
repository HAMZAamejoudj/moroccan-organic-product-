import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://moroccanorganicproducts.com';

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    if (!res.ok) {
      return { status: res.status, html: null };
    }
    const html = await res.text();
    return { status: res.status, html };
  } catch (err) {
    return { status: 500, error: err.message, html: null };
  }
}

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMetadata(html, url) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? cleanText(titleMatch[1]) : '';

  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : '';

  const metaKeywordsMatch = html.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']keywords["']/i);
  const metaKeywords = metaKeywordsMatch ? metaKeywordsMatch[1].trim() : '';

  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : '';

  const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const ogDesc = ogDescMatch ? ogDescMatch[1].trim() : '';

  const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
  const ogImage = ogImageMatch ? ogImageMatch[1].trim() : '';

  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  // H1 tags
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => cleanText(m[1])).filter(Boolean);

  // H2 tags
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => cleanText(m[1])).filter(Boolean);

  // H3 tags
  const h3Matches = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => cleanText(m[1])).filter(Boolean);

  // Images
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const images = [];
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html)) !== null) {
    const fullTag = imgMatch[0];
    const src = imgMatch[1];
    const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
    const titleMatch = fullTag.match(/title=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1].trim() : '';
    const imgTitle = titleMatch ? titleMatch[1].trim() : '';

    let absoluteSrc = '';
    try {
      absoluteSrc = new URL(src, url).href;
    } catch {
      absoluteSrc = src;
    }

    images.push({
      src,
      absoluteSrc,
      alt,
      title: imgTitle,
      fullTag: fullTag.slice(0, 150)
    });
  }

  // Paragraphs
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => cleanText(m[1]))
    .filter(t => t.length > 15);

  // Lists items
  const liMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map(m => cleanText(m[1]))
    .filter(t => t.length > 10);

  // Internal links
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  const links = [];
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const href = linkMatch[1];
    const text = cleanText(linkMatch[2]);
    links.push({ href, text });
  }

  return {
    url,
    title,
    metaDescription,
    metaKeywords,
    ogTitle,
    ogDesc,
    ogImage,
    canonical,
    h1: h1Matches,
    h2: h2Matches,
    h3: h3Matches,
    images,
    paragraphs: pMatches,
    listItems: liMatches,
    links
  };
}

async function main() {
  console.log('Fetching sitemap.xml...');
  const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
  const sitemapXml = await sitemapRes.text();
  const urlsInSitemap = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

  console.log(`Found ${urlsInSitemap.length} URLs in sitemap.xml`);

  const visited = new Set();
  const queue = [...urlsInSitemap, BASE_URL + '/'];
  const results = [];

  while (queue.length > 0) {
    const currentUrl = queue.shift();
    const normalizedUrl = currentUrl.replace('https://www.moroccanorganicproducts.com', BASE_URL);
    if (visited.has(normalizedUrl)) continue;
    visited.add(normalizedUrl);

    console.log(`Scraping: ${normalizedUrl}`);
    const { status, html, error } = await fetchPage(normalizedUrl);
    if (!html) {
      console.log(`  Failed (${status}): ${error || 'empty'}`);
      results.push({ url: normalizedUrl, status, error });
      continue;
    }

    const data = extractMetadata(html, normalizedUrl);
    data.status = status;
    results.push(data);

    // Find more internal links
    for (const link of data.links) {
      const href = link.href.trim();
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        continue;
      }
      try {
        const fullLink = new URL(href, normalizedUrl).href;
        if (fullLink.startsWith(BASE_URL) || fullLink.startsWith('https://www.moroccanorganicproducts.com')) {
          const norm = fullLink.replace('https://www.moroccanorganicproducts.com', BASE_URL).split('#')[0];
          if (!visited.has(norm) && !queue.includes(norm)) {
            if (!norm.match(/\.(jpg|jpeg|png|gif|webp|pdf|zip|css|js)$/i)) {
              queue.push(norm);
            }
          }
        }
      } catch (e) {
        // ignore invalid url
      }
    }
  }

  const outDir = path.resolve('scraped_data');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'scraped_pages.json'), JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Saved ${results.length} scraped pages to ${path.join(outDir, 'scraped_pages.json')}`);
}

main().catch(console.error);
