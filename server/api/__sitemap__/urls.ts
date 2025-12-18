import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrl } from '#sitemap/types'

export default defineSitemapEventHandler(() => {
  const blogPosts = [
    { slug: 'cara-meningkatkan-produktivitas-kerja', date: '2024-12-18' },
    { slug: 'panduan-desain-ui-modern', date: '2024-12-17' },
    { slug: 'wisata-alam-indonesia-tersembunyi', date: '2024-12-16' },
    { slug: 'belajar-programming-dari-nol', date: '2024-12-15' },
    { slug: 'gaya-hidup-minimalis-modern', date: '2024-12-14' },
    { slug: 'tren-teknologi-2025', date: '2024-12-13' }
  ]

  const categories = [
    'teknologi',
    'desain',
    'gaya-hidup',
    'travel',
    'produktivitas'
  ]

  const urls: SitemapUrl[] = []

  // Add blog post URLs
  for (const post of blogPosts) {
    urls.push({
      loc: `/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: 0.8
    })
  }

  // Add category URLs
  for (const category of categories) {
    urls.push({
      loc: `/category/${category}`,
      changefreq: 'weekly',
      priority: 0.7
    })
  }

  return urls
})
