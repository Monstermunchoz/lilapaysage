import type { Metadata } from 'next'
import Link from 'next/link'
import { beforeAfterPairs } from '@/data/before-after'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { PageHeader } from '@/components/ui/PageHeader'
import { IconArrow } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Avant / après',
  description: 'Transformations de jardins avant et après : pelouses, terrasses, dallages, escaliers et plantations.',
  alternates: { canonical: '/avant-apres/' },
}

export default function AvantApresPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Avant / après' }]}
        kicker="Avant / après"
        title={<>Le même endroit, <em>quelques semaines</em> plus tard.</>}
        lead="Faites glisser le curseur, utilisez les flèches du clavier ou les boutons pour comparer chaque état."
      />
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)' }}>
        {beforeAfterPairs.map((pair, i) => (
          <article key={pair.id} className="split split--wide-left" style={{ alignItems: 'start', direction: i % 2 ? 'rtl' : 'ltr' }}>
            <div style={{ direction: 'ltr' }}><BeforeAfterSlider pair={pair} /></div>
            <div style={{ direction: 'ltr' }}>
              <h2 className="display display--md" style={{ marginBottom: '0.75rem' }}>{pair.title}</h2>
              <p className="muted" style={{ lineHeight: 1.65, maxWidth: '48ch', marginBottom: '1.25rem' }}>{pair.description}</p>
              <Link href="/devis/" className="link">J&apos;ai un projet similaire <IconArrow size={16} /></Link>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
