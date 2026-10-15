import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { identity, legalPending } from '@/data/identity'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site de Lila Paysage.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: 'Mentions légales' }]} title="Mentions légales" />
      <section>
        <div className="container container--narrow">

          <div className="prose" style={{ lineHeight: 1.75 }}>
            <div className="panel panel--accent" style={{ padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
              <strong>Note de démonstration</strong> — Ce gabarit contient les données factuellement établies.
              Les informations manquantes sont signalées. À compléter avant toute publication officielle.
            </div>

            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-green)', marginBottom: '0.75rem', marginTop: '1.75rem' }}>
              Éditeur du site
            </h2>
            <p>
              <strong>{identity.legalName}</strong><br />
              {identity.headquarters.lines.join(', ')}<br />
              SIREN : {identity.siren}<br />
              {identity.rcs}<br />
              TVA intracommunautaire : {identity.vatNumber} <em style={{ fontSize: '0.8rem', opacity: 0.65 }}>(à vérifier auprès de VIES)</em><br />
              Téléphone : <a href={identity.phoneLink} style={{ color: 'var(--color-green)' }}>{identity.phone}</a><br />
              E-mail : <a href={`mailto:${identity.email}`} style={{ color: 'var(--color-green)' }}>{identity.email}</a>
            </p>
            <p>
              <strong>Responsable de publication</strong> :{' '}
              {legalPending.publisher ?? <em style={{ opacity: 0.6 }}>À compléter avant publication</em>}
            </p>

            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-green)', marginBottom: '0.75rem', marginTop: '1.75rem' }}>
              Hébergement
            </h2>
            <p style={{ opacity: 0.7, fontStyle: 'italic' }}>
              Informations d&apos;hébergement à compléter avant la mise en production.
            </p>

            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-green)', marginBottom: '0.75rem', marginTop: '1.75rem' }}>
              Propriété intellectuelle
            </h2>
            <p>
              Les photographies de réalisations proviennent du compte Instagram de l&apos;entreprise
              (@lila.paysage) ; les comparaisons avant/après sont des visuels provisoires de démonstration.
              Toute reproduction sans autorisation est interdite. Les droits de republication devront
              être confirmés par le client avant toute diffusion publique.
            </p>

            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-green)', marginBottom: '0.75rem', marginTop: '1.75rem' }}>
              Données personnelles
            </h2>
            <p>
              Les informations collectées via les formulaires de contact sont utilisées
              uniquement pour répondre à votre demande.
              Consultez notre <Link href="/confidentialite/" style={{ color: 'var(--color-green)' }}>politique de confidentialité</Link>.
            </p>

            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-green)', marginBottom: '0.75rem', marginTop: '1.75rem' }}>
              Médiation des litiges
            </h2>
            <p style={{ opacity: 0.7, fontStyle: 'italic' }}>
              Informations de médiation à compléter avant la mise en production.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
