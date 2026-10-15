import type { Metadata } from 'next'
import Link from 'next/link'
import { identity } from '@/data/identity'
import { CallbackForm } from '@/components/forms/CallbackForm'
import { PageHeader } from '@/components/ui/PageHeader'
import { IconPhone, IconMail, IconPin, IconArrow } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Lila Paysage, paysagiste à Chessy-les-Mines (69380). Téléphone, e-mail et demande de rappel.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Contact' }]}
        kicker="Contact"
        title={<>On en parle <em>quand vous voulez</em>.</>}
        lead="Un appel, un e-mail ou une demande de rappel : choisissez ce qui vous arrange. Nous répondons sous quelques jours ouvrés."
      />

      <div className="container">
        <div className="contact-grid">
          <a href={identity.phoneLink} className="panel contact-card">
            <span className="contact-card__icon"><IconPhone size={22} /></span>
            <span className="muted small">Téléphone</span>
            <strong className="display display--sm">{identity.phone}</strong>
          </a>
          <a href={`mailto:${identity.email}`} className="panel contact-card">
            <span className="contact-card__icon"><IconMail size={22} /></span>
            <span className="muted small">E-mail</span>
            <strong className="display display--sm" style={{ wordBreak: 'break-all' }}>{identity.email}</strong>
          </a>
          <div className="panel contact-card">
            <span className="contact-card__icon"><IconPin size={22} /></span>
            <span className="muted small">{identity.headquarters.label}</span>
            <address style={{ fontStyle: 'normal', lineHeight: 1.5, fontWeight: 600, color: 'var(--green-900)' }}>
              {identity.headquarters.lines[0]}<br />{identity.headquarters.lines[1]}
            </address>
          </div>

          <div className="panel panel--green contact-wide" style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 className="display display--md" style={{ color: '#fff' }}>Vous avez un projet précis ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, maxWidth: '44ch' }}>
              Le formulaire de devis nous donne ce qu&apos;il faut pour préparer la visite : type de travaux, commune, rythme souhaité.
            </p>
            <Link href="/devis/" className="btn btn--accent" style={{ alignSelf: 'flex-start' }}>Demander un devis <span className="btn-icon"><IconArrow size={13} /></span></Link>
          </div>

          <div className="panel panel--accent contact-wide" style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            <h2 className="display display--md" style={{ marginBottom: '0.5rem' }}>Être rappelé</h2>
            <p className="muted" style={{ marginBottom: '1.25rem', lineHeight: 1.6 }}>Laissez un prénom et un numéro, nous vous rappelons.</p>
            <CallbackForm />
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p className="muted small" style={{ marginBottom: '0.6rem' }}>Zones d&apos;intervention</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {identity.territories.map((t) => <li key={t} className="pill">{t}</li>)}
          </ul>
        </div>
      </div>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .contact-card { display: flex; flex-direction: column; gap: 0.5rem; padding: 1.5rem; text-decoration: none; color: inherit; transition: transform 0.2s, box-shadow 0.2s; }
        a.contact-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lift); }
        .contact-card__icon { width: 44px; height: 44px; border-radius: 12px; background: var(--accent-100); color: var(--green-900); display: grid; place-items: center; margin-bottom: 0.5rem; }
        @media (min-width: 760px) {
          .contact-grid { grid-template-columns: repeat(6, 1fr); }
          .contact-card { grid-column: span 2; }
          .contact-wide { grid-column: span 3; }
        }
      `}</style>
    </>
  )
}
