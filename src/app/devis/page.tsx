import type { Metadata } from 'next'
import Link from 'next/link'
import { QuoteFormWrapper } from '@/components/forms/QuoteFormWrapper'
import { identity } from '@/data/identity'
import { IconPhone, IconCheck } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Demander un devis',
  description: 'Décrivez votre projet de jardin à Lila Paysage : création, entretien, maçonnerie paysagère. Devis gratuit à Chessy-les-Mines, dans le Beaujolais et l\'Ouest lyonnais.',
  alternates: { canonical: '/devis/' },
}

export default function DevisPage() {
  return (
    <div className="container" style={{ paddingTop: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
      <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1.5rem' }}>
        <ol className="breadcrumb">
          <li><Link href="/">Accueil</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: 'var(--green-900)' }}>Demander un devis</li>
        </ol>
      </nav>

      <div className="devis-grid">
        <aside className="devis-side">
          <p className="kicker" style={{ marginBottom: '0.75rem', color: 'var(--accent-300)' }}>Devis gratuit</p>
          <h1 className="display display--lg" style={{ color: '#fff', marginBottom: '1rem' }}>Parlez-nous de votre jardin.</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
            Trois étapes : ce que vous voulez faire, où, et comment vous joindre. Nous vous rappelons pour organiser une visite.
          </p>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Vous décrivez votre besoin', 'Nous vous rappelons', 'Visite sur place, sans engagement', 'Devis détaillé'].map((t, i) => (
              <li key={t} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.925rem', color: 'rgba(255,255,255,0.88)' }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--accent-300)', color: 'var(--green-900)', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: '0.8rem', flex: 'none' }}>{i + 1}</span>
                {t}
              </li>
            ))}
          </ol>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.6rem' }}>Vous préférez appeler ?</p>
            <a href={identity.phoneLink} className="btn btn--on-dark"><IconPhone size={18} /> {identity.phone}</a>
          </div>
          <ul style={{ listStyle: 'none', margin: '2rem 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
            {['Aucune donnée transmise à des tiers', 'Pas de démarchage'].map((t) => (
              <li key={t} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><IconCheck size={12} /> {t}</li>
            ))}
          </ul>
        </aside>

        <div className="devis-main">
          <QuoteFormWrapper />
        </div>
      </div>

      <style>{`
        .devis-grid { display: grid; grid-template-columns: 1fr; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lift); }
        .devis-side { background: var(--green-900); padding: clamp(1.75rem, 4vw, 3rem); }
        .devis-main { background: var(--white); padding: clamp(1.5rem, 4vw, 3rem); }
        @media (min-width: 960px) { .devis-grid { grid-template-columns: 0.75fr 1.25fr; } }
      `}</style>
    </div>
  )
}
