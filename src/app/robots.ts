import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';

const allowedBots = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...allowedBots.map((userAgent) => ({ userAgent, allow: '/', disallow: '/api/' })),
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
