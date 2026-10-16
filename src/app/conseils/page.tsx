import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { articles, articleCategories } from '@/data/articles'
import { identity } from '@/data/identity'
import { siteConfig } from '@/data/config'
import { PageHeader } from '@/components/ui/PageHeader'
import { readingTime, formatDate } from '@/lib/article-utils'

export const metadata: Metadata = {
  title: { absolute: 'Conseils jardin et entretien : guides de paysagiste | Lila Paysage' },
  description: 'Guides pratiques d\'un paysagiste du Beaujolais : entretien du jardin, taille, gazon, arrosage, terrasses, clôtures et réglementation. Conseils clairs et vérifiés.',
  alternates: { canonical: '/conseils/' },
  openGraph: {
    title: 'Conseils jardin et entretien | Lila Paysage',
    description: 'Guides pratiques d\'un paysagiste du Beaujolais : entretien, taille, gazon, arrosage, terrasses, clôtures.',
    url: '/conseils/',
    images: [{ url: '/images/instagram/massif-fleuri.jpg', width: 640, height: 640 }],
  },
}

export default function ConseilsPage() {
  const [featured, ...rest] = articles

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${siteConfig.siteUrl}/conseils/#blog`,
        name: 'Conseils & actus — Lila Paysage',
        url: `${siteConfig.siteUrl}/conseils/`,
        inLanguage: 'fr-FR',
        publisher: { '@type': 'Organization', name: identity.brandName },
        blogPost: articles.map((a) => ({
          '@type': 'BlogPosting',
          headline: a.title,
          url: `${siteConfig.siteUrl}/conseils/${a.slug}/`,
          datePublished: a.publishedAt,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${siteConfig.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Conseils & actus', item: `${siteConfig.siteUrl}/conseils/` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        crumbs={[{ label: 'Conseils & actus' }]}
        kicker="Conseils & actus"
        title={<>Les conseils d&apos;un paysagiste du <em>Beaujolais</em>.</>}
        lead="Entretien, taille, gazon, arrosage, terrasses, clôtures, réglementation : des guides clairs, vérifiés et pensés pour les jardins de Chessy-les-Mines, de la vallée d'Azergues et de l'Ouest lyonnais."
      >
        <ul className="cat-row" aria-label="Thèmes">
          {articleCategories.map((c) => (
            <li key={c}><a href={`#${c.toLowerCase()}`} className="pill">{c}</a></li>
          ))}
        </ul>
      </PageHeader>

      <div className="container">
        {/* Article à la une */}
        <Link href={`/conseils/${featured.slug}/`} className="featured panel">
          <span className="featured__img">
            <Image src={featured.cover.src} alt={featured.cover.alt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
          </span>
          <span className="featured__body">
            <span className="pill pill--accent" style={{ alignSelf: 'flex-start' }}>{featured.category}</span>
            <span className="display display--md">{featured.title}</span>
            <span className="muted" style={{ lineHeight: 1.6 }}>{featured.excerpt}</span>
            <span className="small muted">{formatDate(featured.publishedAt)} · {readingTime(featured)} min de lecture</span>
            <span className="link" style={{ alignSelf: 'flex-start' }}>Lire le guide</span>
          </span>
        </Link>

        {/* Articles par thème */}
        {articleCategories.map((cat) => {
          const list = rest.filter((a) => a.category === cat)
          if (list.length === 0) return null
          return (
            <section key={cat} id={cat.toLowerCase()} aria-labelledby={`cat-${cat}`} style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)', scrollMarginTop: '6rem' }}>
              <h2 id={`cat-${cat}`} className="display display--md" style={{ marginBottom: '1.25rem' }}>{cat}</h2>
              <div className="post-grid">
                {list.map((a) => (
                  <article key={a.slug} className="post-card panel">
                    <Link href={`/conseils/${a.slug}/`} className="post-card__link">
                      <span className="post-card__img">
                        <Image src={a.cover.src} alt={a.cover.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                      </span>
                      <span className="post-card__body">
                        <span className="post-card__title">{a.title}</span>
                        <span className="post-card__excerpt">{a.excerpt}</span>
                        <span className="small muted">{readingTime(a)} min de lecture</span>
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <style>{`
        .cat-row { list-style: none; margin: 1.5rem 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .cat-row a { text-decoration: none; min-height: 44px; }
        .featured { display: grid; grid-template-columns: 1fr; overflow: hidden; text-decoration: none; color: inherit; }
        .featured__img { position: relative; aspect-ratio: 16 / 10; background: var(--green-100); }
        .featured__body { display: flex; flex-direction: column; gap: 0.85rem; padding: clamp(1.5rem, 4vw, 2.75rem); justify-content: center; }
        @media (min-width: 900px) { .featured { grid-template-columns: 1.1fr 1fr; } .featured__img { aspect-ratio: auto; min-height: 420px; } }
        .post-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 700px) { .post-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .post-grid { grid-template-columns: repeat(3, 1fr); } }
        .post-card { overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
        .post-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lift); }
        .post-card__link { display: flex; flex-direction: column; height: 100%; text-decoration: none; color: inherit; }
        .post-card__img { position: relative; aspect-ratio: 16 / 10; background: var(--green-100); }
        .post-card__body { display: flex; flex-direction: column; gap: 0.5rem; padding: 1.25rem; flex: 1; }
        .post-card__title { font-family: var(--font-display); font-weight: 600; font-size: 1.2rem; line-height: 1.2; color: var(--green-900); }
        .post-card__excerpt { font-size: 0.925rem; line-height: 1.55; color: var(--ink-soft); flex: 1; }
      `}</style>
    </>
  )
}
