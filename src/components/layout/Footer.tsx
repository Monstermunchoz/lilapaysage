import Link from 'next/link'
import { identity } from '@/data/identity'
import { serviceCards } from '@/data/services'
import { Logo } from '@/components/ui/Logo'
import { IconPhone, IconMail, IconPin, IconArrow } from '@/components/ui/Icons'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer style={{ paddingInline: 'clamp(0.5rem, 1.5vw, 1rem)', paddingBottom: 'clamp(0.5rem, 1.5vw, 1rem)', marginTop: 'var(--section-gap)' }}>
      <div
        style={{
          background: 'var(--green-900)',
          color: 'rgba(255,255,255,0.82)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem) clamp(1.5rem, 3vw, 2rem)',
        }}
      >
        <style>{`
          .f-link { color: rgba(255,255,255,0.72); text-decoration: none; font-size: 0.925rem; transition: color 0.15s; }
          .f-link:hover { color: #fff; }
          .f-contact { display: inline-flex; align-items: center; gap: 0.6rem; color: #fff; text-decoration: none; font-weight: 600; }
          .f-contact:hover { color: var(--accent-300); }
          .f-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
          @media (min-width: 760px) { .f-grid { grid-template-columns: 1.4fr 1fr 1fr; gap: 3rem; } }
          @media (min-width: 1100px) { .f-grid { grid-template-columns: 1.6fr 1fr 1fr 1fr; } }
        `}</style>

        {/* Bloc d'appel */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.12)', marginBottom: '3rem' }}>
          <h2 className="display display--lg" style={{ color: '#fff', maxWidth: '16ch' }}>
            Parlons de votre <em style={{ color: 'var(--accent-300)' }}>jardin</em>.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link href="/devis/" className="btn btn--accent btn--lg">Demander un devis <span className="btn-icon"><IconArrow size={13} /></span></Link>
            <a href={identity.phoneLink} className="btn btn--on-dark btn--lg"><IconPhone size={18} /> {identity.phone}</a>
          </div>
        </div>

        <div className="f-grid">
          <div>
            <Link href="/" aria-label={`${identity.brandName} — retour à l'accueil`} style={{ textDecoration: 'none', display: 'inline-block' }}>
              <Logo onDark />
            </Link>
            <p style={{ marginTop: '1.25rem', fontSize: '0.925rem', lineHeight: 1.65, maxWidth: '34ch' }}>
              Création, entretien et maçonnerie paysagère à Chessy-les-Mines, dans le Beaujolais, la vallée d&apos;Azergues et l&apos;Ouest lyonnais.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
              <a href={identity.phoneLink} className="f-contact"><IconPhone size={16} /> {identity.phone}</a>
              <a href={`mailto:${identity.email}`} className="f-contact"><IconMail size={16} /> {identity.email}</a>
              <address style={{ fontStyle: 'normal', display: 'flex', gap: '0.6rem', alignItems: 'flex-start', lineHeight: 1.5 }}>
                <IconPin size={16} style={{ flex: 'none', marginTop: 3 }} />
                <span>{identity.headquarters.lines[0]}<br />{identity.headquarters.lines[1]}</span>
              </address>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: '#fff', marginBottom: '0.9rem' }}>Prestations</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {serviceCards.map((s) => (
                <li key={s.id}><Link href={`/services/${s.slug}/`} className="f-link">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: '#fff', marginBottom: '0.9rem' }}>L&apos;entreprise</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/realisations/" className="f-link">Réalisations</Link></li>
              <li><Link href="/conseils/" className="f-link">Conseils &amp; actus</Link></li>
              <li><Link href="/avant-apres/" className="f-link">Avant / après</Link></li>
              <li><Link href="/entreprise/" className="f-link">Qui sommes-nous</Link></li>
              <li><Link href="/contact/" className="f-link">Contact</Link></li>
              <li><Link href="/devis/" className="f-link">Demander un devis</Link></li>
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: '#fff', marginBottom: '0.9rem' }}>Zones d&apos;intervention</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {identity.territories.map((t) => (
                <li key={t} style={{ padding: '0.3rem 0.7rem', borderRadius: 999, background: 'rgba(255,255,255,0.08)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: '3rem', paddingTop: '1.25rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.75rem 1.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          <span>© {currentYear} {identity.legalName} — {identity.rcs}</span>
          <span style={{ display: 'flex', gap: '1.25rem' }}>
            <Link href="/mentions-legales/" className="f-link" style={{ fontSize: '0.8rem' }}>Mentions légales</Link>
            <Link href="/confidentialite/" className="f-link" style={{ fontSize: '0.8rem' }}>Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
