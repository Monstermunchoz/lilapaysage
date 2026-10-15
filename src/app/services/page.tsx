import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { serviceCards, familyLabels } from '@/data/services'
import { PageHeader } from '@/components/ui/PageHeader'
import { IconArrow } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Prestations : création, entretien, maçonnerie paysagère',
  description: 'Création de jardin, entretien, élagage, terrasses, murets, clôtures, arrosage automatique. Les prestations de Lila Paysage à Chessy-les-Mines et dans le Beaujolais.',
}

const families = (['creation', 'entretien', 'maconnerie'] as const).map((f) => ({
  id: f,
  label: familyLabels[f],
  intro: {
    creation: 'Concevoir un jardin, préparer le terrain, planter, semer : tout ce qui donne naissance à un extérieur.',
    entretien: 'Garder le jardin net et en bonne santé au fil des saisons, en contrat régulier ou ponctuellement.',
    maconnerie: 'Les ouvrages qui structurent le jardin : terrasses, murets, escaliers, clôtures.',
  }[f],
  items: serviceCards.filter((s) => s.family === f),
}))

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Prestations' }]}
        kicker="Prestations"
        title={<>Créer, entretenir, <em>construire</em>.</>}
        lead="Lila Paysage prend en charge l'ensemble du jardin, du terrassement à la tonte. Une seule équipe, un seul interlocuteur."
      />

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)' }}>
        {families.map((f) => (
          <section key={f.id} aria-labelledby={`fam-${f.id}`}>
            <div className="split split--wide-left" style={{ alignItems: 'end', marginBottom: '1.5rem', gap: '1rem' }}>
              <h2 id={`fam-${f.id}`} className="display display--lg">{f.label}</h2>
              <p className="muted" style={{ lineHeight: 1.6, maxWidth: '44ch' }}>{f.intro}</p>
            </div>
            <div className="grid-3" style={{ gap: '0.9rem' }}>
              {f.items.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}/`} className="tile" style={{ aspectRatio: '4/3', minHeight: 240 }}>
                  <Image src={s.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  <span className="tile__shade" aria-hidden="true" />
                  <span className="tile__body">
                    <span className="tile__title">{s.title}</span>
                    <span className="tile__desc">{s.shortDescription}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="panel panel--accent" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <h2 className="display display--md" style={{ marginBottom: '0.5rem' }}>Un projet qui mélange tout ça ?</h2>
            <p className="muted">C&apos;est le cas le plus fréquent. Décrivez-le, nous venons voir sur place.</p>
          </div>
          <Link href="/devis/" className="btn btn--green btn--lg">Demander un devis <span className="btn-icon"><IconArrow size={13} /></span></Link>
        </section>
      </div>
    </>
  )
}
