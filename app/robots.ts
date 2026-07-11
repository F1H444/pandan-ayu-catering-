import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://pandanayucatering.vercel.app/sitemap.xml',
    host: 'https://pandanayucatering.vercel.app',
  };
}
