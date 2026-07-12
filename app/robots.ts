import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://pandan-ayu-catering.vercel.app/sitemap.xml',
    host: 'https://pandan-ayu-catering.vercel.app',
  };
}
