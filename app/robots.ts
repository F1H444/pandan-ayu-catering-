import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.pandanayucatering.biz.id/sitemap.xml',
    host: 'https://www.pandanayucatering.biz.id',
  };
}
