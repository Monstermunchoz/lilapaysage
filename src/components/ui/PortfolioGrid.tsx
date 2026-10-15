'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import { portfolioItems, portfolioCategories } from '@/data/portfolio'
import type { PortfolioCategory, PortfolioItem } from '@/lib/types'
import { Lightbox } from './Lightbox'

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('tous')
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null)
  const [visible, setVisible] = useState(9)

  const filtered = activeCategory === 'tous'
    ? portfolioItems
    : portfolioItems.filter((item) => item.categories.includes(activeCategory as Exclude<PortfolioCategory, 'tous'>))

  const openLightbox = useCallback((item: PortfolioItem) => setLightboxItem(item), [])
  const closeLightbox = useCallback(() => setLightboxItem(null), [])

  const lightboxIndex = lightboxItem ? filtered.findIndex((i) => i.id === lightboxItem.id) : -1
  const prevItem = lightboxIndex > 0 ? filtered[lightboxIndex - 1] : null
  const nextItem = lightboxIndex < filtered.length - 1 ? filtered[lightboxIndex + 1] : null

  return (
    <div>
      {/* Filters */}
      <div
        role="group"
        aria-label="Filtrer par catégorie"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
      >
        {portfolioCategories.map((cat) => {
          const count = cat.id === 'tous'
            ? portfolioItems.length
            : portfolioItems.filter((i) => i.categories.includes(cat.id as Exclude<PortfolioCategory, 'tous'>)).length
          if (count === 0 && cat.id !== 'tous') return null
          return (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setVisible(9) }}
              aria-pressed={activeCategory === cat.id}
              style={{
                padding: '0.55rem 1rem',
                minHeight: 44,
                borderRadius: '999px',
                border: `1.5px solid ${activeCategory === cat.id ? 'var(--green-900)' : 'var(--line)'}`,
                background: activeCategory === cat.id ? 'var(--green-900)' : 'var(--white)',
                color: activeCategory === cat.id ? 'white' : 'var(--ink)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.15s, color 0.15s, border-color 0.15s',
                fontFamily: 'var(--font-body)',
              }}
            >
              {cat.label} ({count})
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '0.9rem',
        }}
      >
        {filtered.slice(0, visible).map((item) => (
          <article key={item.id}>
            <button
              onClick={() => openLightbox(item)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'zoom-in',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
              aria-label={`Ouvrir : ${item.title}`}
            >
              <div className="tile" style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: item.focalPoint ?? 'center' }}
                />
                <span className="tile__shade" aria-hidden="true" />
                <span className="tile__body" style={{ textAlign: 'left' }}>
                  <span className="tile__title" style={{ fontSize: '1.15rem' }}>{item.title}</span>
                  <span className="tile__desc">{item.description}</span>
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {/* Load more */}
      {visible < filtered.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            className="btn btn--ghost"
            onClick={() => setVisible((v) => v + 6)}
          >
            Voir plus ({filtered.length - visible} restants)
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', opacity: 0.6, padding: '2rem 0' }}>
          Aucune réalisation dans cette catégorie pour l&apos;instant.
        </p>
      )}

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={prevItem ? () => openLightbox(prevItem) : undefined}
          onNext={nextItem ? () => openLightbox(nextItem) : undefined}
        />
      )}
    </div>
  )
}
