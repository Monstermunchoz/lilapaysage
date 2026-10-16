import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticle } from '@/data/articles'
import { serviceCards } from '@/data/services'
import { identity } from '@/data/identity'
import { siteConfig } from '@/data/config'
import { RichText, plainText, slugify } from '@/components/blog/RichText'
import { readingTime, formatDate, wordCount } from '@/lib/article-utils'
import { IconArrow, IconCheck, IconPhone, IconSparkle } from '@/components/ui/Icons'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) return {}
  const url = `/conseils/${a.slug}/`
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDescription,
    keywords: [a.focusKeyword, ...a.secondaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: a.metaTitle,
      description: a.metaDescription,
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
      section: a.category,
      images: [{ url: a.cover.src, alt: a.cover.alt }],
    },
    twitter: { card: 'summary_large_image', title: a.metaTitle, description: a.metaDescription },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) notFound()

  const toc = a.blocks.filter((b): b is { type: 'h2'; text: string } => b.type === 'h2')
  const related = a.relatedArticles.map(getArticle).filter((x): x is NonNullable<typeof x> => Boolean(x))
  const services = serviceCards.filter((s) => a.relatedServices.includes(s.id))
  const url = `${siteConfig.siteUrl}/conseils/${a.slug}/`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: a.title,
        description: a.metaDescription,
        image: `${siteConfig.siteUrl}${a.cover.src}`,
        datePublished: a.publishedAt,
        dateModified: a.updatedAt,
        inLanguage: 'fr-FR',
        wordCount: wordCount(a),
        articleSection: a.category,
        keywords: [a.focusKeyword, ...a.secondaryKeywords].join(', '),
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: identity.brandName, url: siteConfig.siteUrl },
        publisher: { '@type': 'Organization', name: identity.brandName, url: siteConfig.siteUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${siteConfig.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Conseils & actus', item: `${siteConfig.siteUrl}/conseils/` },
          { '@type': 'ListItem', position: 3, name: a.title, item: url },
        ],
      },
      ...(a.faq.length
        ? [{
            '@type': 'FAQPage',
            mainEntity: a.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) },
            })),
          }]
        : []),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="container container--narrow" style={{ paddingTop: 'clamp(1.25rem, 3vw, 2.5rem)', paddingBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1.5rem' }}>
            <ol className="breadcrumb">
              <li><Link href="/">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/conseils/">Conseils &amp; actus</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: 'var(--green-900)' }}>{a.category}</li>
            </ol>
          </nav>
          <p className="kicker" style={{ marginBottom: '0.9rem' }}>{a.category}</p>
          <h1 className="display display--lg" style={{ marginBottom: '1.1rem' }}>{a.title}</h1>
          <p className="lead" style={{ marginBottom: '1.1rem' }}>{a.excerpt}</p>
          <p className="small muted">
            <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time> · {readingTime(a)} min de lecture · Par {identity.brandName}
          </p>
        </header>

        <div className="container" style={{ maxWidth: 1040 }}>
          <figure style={{ margin: 0, position: 'relative', aspectRatio: '16 / 9', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--green-100)' }}>
            <Image src={a.cover.src} alt={a.cover.alt} fill sizes="(max-width: 1040px) 100vw, 1040px" quality={65} style={{ objectFit: 'cover' }} priority fetchPriority="high" />
          </figure>
        </div>

        <div className="container article-layout">
          {toc.length > 2 && (
            <nav aria-label="Sommaire" className="toc">
              <p className="toc__title">Sommaire</p>
              <ol>
                {toc.map((h) => (
                  <li key={h.text}><a href={`#${slugify(h.text)}`}>{h.text}</a></li>
                ))}
              </ol>
            </nav>
          )}

          <div className="article-body">
            {a.blocks.map((b, i) => {
              switch (b.type) {
                case 'p':
                  return <p key={i}><RichText text={b.text} /></p>
                case 'h2':
                  return <h2 key={i} id={slugify(b.text)}>{b.text}</h2>
                case 'h3':
                  return <h3 key={i}>{b.text}</h3>
                case 'ul':
                  return <ul key={i} className="check-list">{b.items.map((t, j) => <li key={j}><span className="check-list__icon" aria-hidden="true"><IconCheck size={12} /></span><span><RichText text={t} /></span></li>)}</ul>
                case 'ol':
                  return <ol key={i} className="num-list">{b.items.map((t, j) => <li key={j}><span className="num-list__n" aria-hidden="true">{j + 1}</span><span><RichText text={t} /></span></li>)}</ol>
                case 'tip':
                  return (
                    <aside key={i} className="tip">
                      <p className="tip__title"><IconSparkle size={18} /> {b.title}</p>
                      <p><RichText text={b.text} /></p>
                    </aside>
                  )
                case 'table':
                  return (
                    <div key={i} className="table-wrap" role="region" aria-label="Tableau" tabIndex={0}>
                      <table>
                        <thead><tr>{b.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr></thead>
                        <tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => k === 0 ? <th key={k} scope="row"><RichText text={c} /></th> : <td key={k}><RichText text={c} /></td>)}</tr>)}</tbody>
                      </table>
                    </div>
                  )
                case 'image':
                  return (
                    <figure key={i} className="article-figure">
                      <span style={{ position: 'relative', display: 'block', aspectRatio: '4 / 3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--green-100)' }}>
                        <Image src={b.src} alt={b.alt} fill sizes="(max-width: 760px) 100vw, 720px" style={{ objectFit: 'cover' }} />
                      </span>
                      {b.caption && <figcaption>{b.caption}</figcaption>}
                    </figure>
                  )
              }
            })}

            {a.faq.length > 0 && (
              <section aria-labelledby="faq-title" className="article-faq">
                <h2 id="faq-title">Questions fréquentes</h2>
                {a.faq.map((f, i) => (
                  <details key={i} className="faq">
                    <summary>{f.q}<span className="faq__plus" aria-hidden="true" /></summary>
                    <p><RichText text={f.a} /></p>
                  </details>
                ))}
              </section>
            )}

            <aside className="panel panel--green article-cta">
              <p className="display display--sm" style={{ color: '#fff' }}>Un projet de jardin près de Chessy-les-Mines ?</p>
              <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 }}>
                Lila Paysage se déplace dans le Beaujolais, la vallée d&apos;Azergues et l&apos;Ouest lyonnais. Visite et devis sans engagement.
              </p>
              <div className="article-cta__btns">
                <Link href="/devis/" className="btn btn--accent">Demander un devis <span className="btn-icon"><IconArrow size={13} /></span></Link>
                <a href={identity.phoneLink} className="btn btn--on-dark"><IconPhone size={16} /> {identity.phone}</a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {(services.length > 0 || related.length > 0) && (
        <section aria-labelledby="more-title" className="container" style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <h2 id="more-title" className="display display--md" style={{ marginBottom: '1.25rem' }}>Pour aller plus loin</h2>
          <div className="more-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/conseils/${r.slug}/`} className="panel more-card">
                <span className="more-card__img"><Image src={r.cover.src} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span>
                <span className="more-card__body">
                  <span className="small muted">Guide · {readingTime(r)} min</span>
                  <span className="more-card__title">{r.title}</span>
                </span>
              </Link>
            ))}
            {services.map((s) => (
              <Link key={s.id} href={`/services/${s.slug}/`} className="panel panel--accent more-card">
                <span className="more-card__body">
                  <span className="small muted">Prestation</span>
                  <span className="more-card__title">{s.title}</span>
                  <span className="small" style={{ color: 'var(--ink-soft)' }}>{s.shortDescription}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: clamp(2rem, 4vw, 3rem); max-width: 1040px; }
        @media (min-width: 1000px) { .article-layout { grid-template-columns: 240px 1fr; gap: 3rem; } .toc { position: sticky; top: 6rem; align-self: start; } }
        .toc { background: var(--white); border-radius: var(--radius-md); padding: 1.1rem 1.25rem; box-shadow: var(--shadow-soft); text-align: left; }
        .toc__title { font-weight: 700; color: var(--green-900); margin-bottom: 0.6rem; }
        .toc ol { margin: 0; padding-left: 1.1rem; display: grid; gap: 0.45rem; font-size: 0.875rem; line-height: 1.4; }
        .toc a { color: var(--ink-soft); text-decoration: none; }
        .toc a:hover { color: var(--green-900); text-decoration: underline; }

        .article-body { min-width: 0; font-size: 1.0625rem; line-height: 1.75; color: var(--ink); text-align: left; }
        .article-body > p { margin: 0 0 1.15rem; }
        .article-body h2 { font-family: var(--font-display); font-weight: 600; font-size: clamp(1.5rem, 3vw, 1.95rem); line-height: 1.15; letter-spacing: -0.015em; color: var(--green-900); margin: 2.5rem 0 1rem; scroll-margin-top: 6rem; }
        .article-body h3 { font-weight: 700; font-size: 1.15rem; color: var(--green-900); margin: 1.75rem 0 0.6rem; }
        .article-body strong { color: var(--green-900); }
        .prose-link { color: var(--green-700); font-weight: 600; text-decoration: underline; text-decoration-color: var(--accent-500); text-decoration-thickness: 2px; text-underline-offset: 3px; }
        .prose-link:hover { color: var(--green-500); }

        .check-list, .num-list { list-style: none; margin: 0 0 1.25rem; padding: 0; display: grid; gap: 0.55rem; }
        .check-list li, .num-list li { display: grid; grid-template-columns: 24px 1fr; gap: 0.7rem; align-items: start; }
        .check-list__icon { width: 22px; height: 22px; margin-top: 4px; border-radius: 50%; background: var(--accent-300); color: var(--green-900); display: grid; place-items: center; }
        .num-list__n { width: 24px; height: 24px; margin-top: 3px; border-radius: 50%; background: var(--green-900); color: #fff; font-size: 0.75rem; font-weight: 700; display: grid; place-items: center; }

        .tip { margin: 1.75rem 0; padding: 1.25rem 1.4rem; border-radius: var(--radius-md); background: var(--accent-100); border-left: 4px solid var(--accent-500); }
        .tip__title { display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: var(--green-900); margin-bottom: 0.35rem; }
        .tip p:last-child { margin: 0; }

        .table-wrap { margin: 1.5rem 0; overflow-x: auto; border-radius: var(--radius-md); box-shadow: var(--shadow-soft); background: var(--white); }
        .table-wrap table { width: 100%; border-collapse: collapse; font-size: 0.925rem; line-height: 1.5; min-width: 520px; }
        .table-wrap th, .table-wrap td { padding: 0.75rem 1rem; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); }
        .table-wrap thead th { background: var(--green-900); color: #fff; font-weight: 700; }
        .table-wrap tbody th { font-weight: 700; color: var(--green-900); }
        .table-wrap tbody tr:last-child > * { border-bottom: none; }

        .article-figure { margin: 2rem 0; }
        .article-figure figcaption { margin-top: 0.6rem; font-size: 0.85rem; color: var(--ink-soft); text-align: center; }

        .article-faq { margin-top: 2.5rem; }
        .faq { border-bottom: 1px solid var(--line); }
        .faq summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem 0; font-weight: 600; color: var(--green-900); font-size: 1.05rem; min-height: 44px; }
        .faq summary::-webkit-details-marker { display: none; }
        .faq__plus { flex: none; width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid var(--line); position: relative; transition: transform 0.25s, background 0.2s; }
        .faq__plus::before, .faq__plus::after { content: ''; position: absolute; left: 50%; top: 50%; background: var(--green-900); transform: translate(-50%, -50%); }
        .faq__plus::before { width: 12px; height: 1.5px; }
        .faq__plus::after { width: 1.5px; height: 12px; }
        .faq[open] .faq__plus { transform: rotate(45deg); background: var(--accent-100); }
        .faq p { padding: 0 0 1.25rem; line-height: 1.65; color: var(--ink-soft); }

        .article-cta { margin-top: 2.5rem; padding: clamp(1.5rem, 4vw, 2.25rem); display: flex; flex-direction: column; gap: 0.75rem; }
        .article-cta__btns { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.5rem; }

        .more-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 700px) { .more-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .more-grid { grid-template-columns: repeat(3, 1fr); } }
        .more-card { display: flex; flex-direction: column; overflow: hidden; text-decoration: none; color: inherit; transition: transform 0.2s, box-shadow 0.2s; }
        .more-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lift); }
        .more-card__img { position: relative; aspect-ratio: 16 / 9; background: var(--green-100); }
        .more-card__body { display: flex; flex-direction: column; gap: 0.4rem; padding: 1.2rem; }
        .more-card__title { font-family: var(--font-display); font-weight: 600; font-size: 1.15rem; line-height: 1.2; color: var(--green-900); }

        @media (max-width: 767px) {
          .article-body { text-align: center; }
          .article-body h2, .article-body h3, .tip__title { text-align: center; justify-content: center; }
          .check-list, .num-list { width: fit-content; max-width: 100%; margin-inline: auto; text-align: left; }
          .table-wrap th, .table-wrap td { text-align: left; }
          .toc { text-align: left; }
          .faq summary { text-align: center; }
          .article-cta { align-items: center; text-align: center; }
          .article-cta__btns { justify-content: center; }
        }
      `}</style>
    </>
  )
}
