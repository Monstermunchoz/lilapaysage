import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container" style={{ paddingBlock: 'clamp(4rem, 10vw, 9rem)', maxWidth: 640 }}>
      <p className="kicker" style={{ marginBottom: '1rem' }}>Erreur 404</p>
      <h1 className="display display--xl" style={{ marginBottom: '1rem' }}>Cette page n&apos;a pas poussé.</h1>
      <p className="lead" style={{ marginBottom: '2rem' }}>L&apos;adresse n&apos;existe pas ou a été déplacée.</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href="/" className="btn btn--green">Retour à l&apos;accueil</Link>
        <Link href="/services/" className="btn btn--ghost">Nos prestations</Link>
        <Link href="/contact/" className="btn btn--ghost">Contact</Link>
      </div>
    </section>
  )
}
