import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/config'
import { servicePages } from '@/data/services'
import { articles } from '@/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/devis/`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${base}/conseils/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/realisations/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/avant-apres/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/entreprise/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/mentions-legales/`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/confidentialite/`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/conseils/${a.slug}/`,
    lastModified: new Date(`${a.updatedAt}T12:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [`${base}${a.cover.src}`],
  }))

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes]
}
