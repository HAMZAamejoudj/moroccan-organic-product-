import type { NextConfig } from "next";

const SITE = "https://moroccanorganicproducts.com";
const WWW_HOST = "www.moroccanorganicproducts.com";

// Old URL -> FINAL URL. Every entry is a single hop (no chains).
// Covers the old .php site and the routes of the current Next.js version that Google already indexes.
const redirectMap: ReadonlyArray<readonly [string, string]> = [
  ["/index.php", "/"],
  ["/about-us.php", "/about-us"],
  ["/products.php", "/products"],
  ["/faq.php", "/faq"],
  ["/contact-us.php", "/contact-us"],
  ["/private-label-moroccan-beauty-products.php", "/private-label-moroccan-beauty-products"],
  ["/wholesale-moroccan-beauty-products.php", "/wholesale"],
  ["/wholesale-moroccan-beauty-products", "/wholesale"],

  // Old .php product URLs
  ["/products/argan-oil-producers-in-morocco.php", "/products/argan-oil-bulk"],
  ["/products/organic-prickly-pear-cactus-seed-oil.php", "/products/prickly-pear-seed-oil-bulk"],
  ["/products/argan-oil-for-beard-growth-and-care.php", "/private-label-moroccan-beauty-products"],
  ["/products/hair-growth-treatment-oils-wholesale-distributor.php", "/private-label-moroccan-beauty-products"],
  ["/products/moroccan-lava-clay-hair-mask.php", "/products"],
  ["/products/natural-beauty-of-moroccan-black-soap.php", "/products"],
  ["/products/nila-powder-wholesale-morocco.php", "/products"],
  ["/products/aker-fassi-wholesale-morocco.php", "/products"],
  ["/products/tbrima-powder-wholesale-morocco.php", "/products"],

  // Routes of the current Next.js version (already indexed) that change
  ["/products/argan-oil-wholesale-morocco", "/products/argan-oil-bulk"],
  ["/products/prickly-pear-cactus-seed-oil-suppliers-manufacturer", "/products/prickly-pear-seed-oil-bulk"],
  ["/products/argan-oil-for-beard-growth-and-care", "/private-label-moroccan-beauty-products"],
  ["/products/hair-growth-treatment-oils-wholesale-distributor", "/private-label-moroccan-beauty-products"],
  ["/products/moroccan-lava-clay-hair-mask", "/products"],
  ["/products/natural-beauty-of-moroccan-black-soap", "/products"],
  ["/products/aker-fassi-wholesale-morocco", "/products"],
  ["/products/nila-powder-wholesale-morocco", "/products"],
  ["/products/tbrima-powder-wholesale-morocco", "/products"],
];

// Fallbacks (must stay LAST): any other .php URL.
const fallbackMap: ReadonlyArray<readonly [string, string]> = [
  ["/products/:slug([^/]+)\\.php", "/products"],
  ["/:path(.+)\\.php", "/"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  transpilePackages: ['lucide-react'],
  async redirects() {
    return [
      ...redirectMap.map(([from, to]) => ({
        source: from,
        destination: to,
        statusCode: 301,
      })),
      ...fallbackMap.map(([from, to]) => ({
        source: from,
        destination: to,
        statusCode: 301,
      })),
    ];
  },
};

export default nextConfig;
