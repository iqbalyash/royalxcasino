import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://royal-x-casino.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}

