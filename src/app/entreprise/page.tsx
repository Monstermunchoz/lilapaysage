import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { identity } from '@/data/identity'
import { PageHeader } from '@/components/ui/PageHeader'
import { IconArrow, IconHome, IconSprout, IconBricks, IconShield } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'L\'entreprise — Jérôme Diasparra, paysagiste à Chessy-les-Mines',
  description: 'Lila Paysage, entreprise de paysage fondée en 2011 à Chessy-les-Mines (Rhône). Création, entretien et maçonnerie paysagère dans le Beaujolais et l\'Ouest lyonnais.',
}

export default function EntreprisePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'L\'entreprise' }]}
        kicker="L'entreprise"
        title={<>Une entreprise de paysage à <em>taille humaine</em>.</>}
        lead="Lila Paysage a été fondée en 2011 à Chessy-les-Mines par Jérôme Diasparra. Quinze ans plus tard, l'entreprise travaille toujours de la même façon : la personne qui vient voir votre terrain est celle qui réalise le chantier."
      />

      <div className="container">
        <div className="grid-3" style={{ gap: '0.75rem', marginBottom: 'var(--section-gap)' }}>
          {[
            ['/images/instagram/olivier.jpg', 'Olivier adulte planté dans un jardin'],
            ['/images/instagram/dallage-chantier.jpg', 'Chantier de dallage le long d\'une maison en pierre'],
            ['/images/instagram/cypres-tailles.jpg', 'Alignement de cyprès taillés sur une pelouse'],
          ].map(([src, alt]) => (
            <div key={src} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--green-100)' }}>
              <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        <section aria-labelledby="values-title" style={{ marginBottom: 'var(--section-gap)' }}>
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2 id="values-title" className="display display--lg" style={{ maxWidth: '14ch', marginBottom: '1rem' }}>Ce qui ne change pas d&apos;un chantier à l&apos;autre.</h2>
              <p className="muted" style={{ lineHeight: 1.7, maxWidth: '48ch' }}>
                Pas de discours : des principes simples, tenus depuis 2011, que vous pouvez vérifier sur place.
              </p>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.75rem' }}>
              {[
                [<IconHome key="1" size={22} />, 'Un seul interlocuteur', 'Du premier rendez-vous à la dernière finition, vous parlez à la même personne.'],
                [<IconSprout key="2" size={22} />, 'Le végétal d\'abord', 'Les essences sont choisies pour le sol et le climat du Beaujolais, pas pour la photo du catalogue.'],
                [<IconBricks key="3" size={22} />, 'La maçonnerie intégrée', 'Murets, terrasses et clôtures sont pensés avec les plantations, par la même équipe.'],
                [<IconShield key="4" size={22} />, 'Un devis lisible', 'Poste par poste, sans surprise. Ce qui n\'est pas prévu est discuté avant d\'être fait.'],
              ].map(([icon, t, d]) => (
                <li key={String(t)} className="panel" style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: '1rem', padding: '1.25rem', alignItems: 'start' }}>
                  <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-100)', color: 'var(--green-900)', display: 'grid', placeItems: 'center' }}>{icon}</span>
                  <span>
                    <strong style={{ display: 'block', color: 'var(--green-900)', marginBottom: '0.2rem' }}>{t}</strong>
                    <span className="muted" style={{ fontSize: '0.9rem', lineHeight: 1.55 }}>{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="identity-title" className="panel" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: 'var(--section-gap)' }}>
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2 id="identity-title" className="display display--md" style={{ marginBottom: '1.25rem' }}>Informations pratiques</h2>
              <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.6rem 1.5rem', fontSize: '0.925rem', margin: 0 }}>
                {[
                  ['Activité', 'Services d\'aménagement paysager (NAF 81.30Z)'],
                  ['Fondée le', identity.activityStart],
                  ['Gérant', identity.manager],
                  ['Forme juridique', 'EURL'],
                  ['Siège', identity.headquarters.lines.slice(0, 2).join(', ')],
                  ['SIREN', identity.siren],
                  ['RCS', identity.rcs],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'contents' }}>
                    <dt style={{ fontWeight: 600, color: 'var(--green-900)', whiteSpace: 'nowrap' }}>{label}</dt>
                    <dd style={{ margin: 0, color: 'var(--ink-soft)' }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--green-900)', marginBottom: '0.75rem' }}>Zones d&apos;intervention</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {identity.territories.map((t) => <li key={t} className="pill pill--accent">{t}</li>)}
              </ul>
              <p className="muted small" style={{ marginTop: '1rem', lineHeight: 1.55 }}>
                Un projet un peu plus loin ? Demandez-nous : cela dépend du chantier.
              </p>
            </div>
          </div>
        </section>

        <section className="panel panel--green" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <h2 className="display display--md" style={{ color: '#fff', marginBottom: '0.5rem' }}>Un projet extérieur ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>Décrivez-le, nous venons le voir sur place.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link href="/devis/" className="btn btn--accent btn--lg">Demander un devis <span className="btn-icon"><IconArrow size={13} /></span></Link>
            <Link href="/contact/" className="btn btn--on-dark btn--lg">Nous contacter</Link>
          </div>
        </section>
      </div>
    </>
  )
}
