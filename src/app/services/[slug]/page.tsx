import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { servicePages, serviceCards, familyLabels } from '@/data/services'
import { identity } from '@/data/identity'
import { PageHeader } from '@/components/ui/PageHeader'
import { IconArrow, IconCheck, IconPhone } from '@/components/ui/Icons'

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = servicePages.find((s) => s.slug === slug)
  if (!service) return {}
  return { title: service.metaTitle, description: service.metaDescription }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicePages.find((s) => s.slug === slug)
  if (!service) notFound()

  const related = serviceCards.filter((c) => service.relatedServices.includes(c.id))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: { '@type': 'LandscapingBusiness', name: identity.brandName, url: `https://${identity.domain}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader
        crumbs={[{ label: 'Prestations', href: '/services/' }, { label: service.title }]}
        kicker={familyLabels[service.family]}
        title={service.headline}
        lead={service.intro}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.75rem' }}>
          <Link href={`/devis/?type=${service.quoteType}`} className="btn btn--accent btn--lg">
            Demander un devis <span className="btn-icon"><IconArrow size={13} /></span>
          </Link>
          <a href={identity.phoneLink} className="btn btn--ghost btn--lg"><IconPhone size={18} /> {identity.phone}</a>
        </div>
      </PageHeader>

      <div className="container">
        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: 'clamp(240px, 42vw, 540px)', background: 'var(--green-100)' }}>
          <Image src={service.coverImage} alt={service.coverImageAlt} fill sizes="(max-width: 1240px) 100vw, 1240px" style={{ objectFit: 'cover' }} priority />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'start', gridTemplateColumns: undefined }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {service.sections.map((sec, i) => (
                <div key={i}>
                  <h2 className="display display--md" style={{ marginBottom: '0.75rem' }}>{sec.title}</h2>
                  <p style={{ lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: '62ch' }}>{sec.content}</p>
                  {sec.bullets && (
                    <ul style={{ listStyle: 'none', margin: '1rem 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
                      {sec.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', padding: '0.7rem 0.9rem', background: 'var(--white)', borderRadius: 12, fontSize: '0.925rem', boxShadow: 'var(--shadow-soft)' }}>
                          <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', background: 'var(--accent-300)', color: 'var(--green-900)', display: 'grid', placeItems: 'center', marginTop: 1 }}><IconCheck size={12} /></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <aside style={{ position: 'sticky', top: '6rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="panel panel--green" style={{ padding: '1.75rem' }}>
                <p className="display display--sm" style={{ color: '#fff', marginBottom: '0.5rem' }}>Un projet de ce type ?</p>
                <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Décrivez-le en deux minutes, nous vous rappelons pour fixer une visite.
                </p>
                <Link href={`/devis/?type=${service.quoteType}`} className="btn btn--accent" style={{ width: '100%' }}>Demander un devis</Link>
              </div>
              {related.length > 0 && (
                <div className="panel" style={{ padding: '1.5rem' }}>
                  <p style={{ fontWeight: 700, color: 'var(--green-900)', marginBottom: '0.75rem' }}>Souvent associé</p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {related.map((r) => (
                      <li key={r.id}>
                        <Link href={`/services/${r.slug}/`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', position: 'relative', flex: 'none' }}>
                            <Image src={r.image} alt="" fill sizes="44px" style={{ objectFit: 'cover' }} />
                          </span>
                          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-900)', lineHeight: 1.3 }}>{r.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) { .split { grid-template-columns: 1.5fr 1fr; } }
      `}</style>
    </>
  )
}
