import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { identity, commitments } from '@/data/identity'
import { serviceCards, familyLabels } from '@/data/services'
import { portfolioItems } from '@/data/portfolio'
import { beforeAfterPairs } from '@/data/before-after'
import { articles } from '@/data/articles'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { QuoteFormWrapper } from '@/components/forms/QuoteFormWrapper'
import { IconArrow, IconPhone, IconShield, IconPin } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: { absolute: `Paysagiste à Chessy-les-Mines, Beaujolais | ${identity.brandName}` },
  alternates: { canonical: '/' },
  description: 'Lila Paysage crée, entretient et aménage les jardins à Chessy-les-Mines, dans le Beaujolais, la vallée d\'Azergues et l\'Ouest lyonnais. Création, entretien, maçonnerie paysagère, clôtures.',
  openGraph: {
    title: `Paysagiste à Chessy-les-Mines, Beaujolais | ${identity.brandName}`,
    description: 'Création, entretien et maçonnerie paysagère dans le Beaujolais et l\'Ouest lyonnais.',
    images: [{ url: '/images/instagram/gazon-cloture.jpg', width: 640, height: 640 }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: identity.brandName,
  legalName: identity.legalName,
  telephone: identity.phoneLink.replace('tel:', ''),
  email: identity.email,
  url: `https://${identity.domain}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: identity.headquarters.lines[0],
    addressLocality: 'Chessy',
    postalCode: '69380',
    addressCountry: 'FR',
  },
  areaServed: identity.territories.map((t) => ({ '@type': 'AdministrativeArea', name: t })),
  description: 'Paysagiste : création, entretien et maçonnerie paysagère dans le Beaujolais et l\'Ouest lyonnais.',
}

const faqs = [
  {
    q: 'Où intervenez-vous ?',
    a: 'Autour de Chessy-les-Mines : vallée d\'Azergues, Beaujolais, Villefranche-sur-Saône, Ouest lyonnais et Métropole de Lyon. Pour un projet un peu plus loin, demandez-nous : cela dépend du chantier.',
  },
  {
    q: 'Faites-vous l\'entretien régulier, ou seulement la création ?',
    a: 'Les deux. Nous proposons des contrats d\'entretien à l\'année (tonte, taille, nettoyage) comme des passages ponctuels, et nous créons ou réaménageons des jardins complets.',
  },
  {
    q: 'L\'entretien de jardin donne-t-il droit à un avantage fiscal ?',
    a: 'L\'entretien courant (tonte, taille, désherbage, nettoyage) peut relever des services à la personne et ouvrir droit à un avantage fiscal, selon les conditions en vigueur et sous réserve d\'agrément. Nous vous précisons ce qui s\'applique à votre situation lors du premier échange.',
  },
  {
    q: 'Comment se passe une demande de devis ?',
    a: 'Vous décrivez votre besoin en ligne ou par téléphone. Nous venons voir le terrain, nous en discutons sur place, puis vous recevez un devis détaillé. La visite ne vous engage à rien.',
  },
  {
    q: 'Pouvez-vous faire la maçonnerie et les plantations dans un même chantier ?',
    a: 'Oui. Murets, escaliers, terrasses, clôtures et plantations sont réalisés par la même équipe, ce qui évite de coordonner plusieurs entreprises.',
  },
]

export default function HomePage() {
  const homePair = beforeAfterPairs[0]
  const featured = serviceCards.slice(0, 5)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section aria-label="Présentation" className="container" style={{ paddingTop: 'clamp(1.5rem, 4vw, 3rem)' }}>
        <div className="hero-rise" style={{ maxWidth: 980, marginBottom: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
          <p className="kicker" style={{ marginBottom: '1rem' }}>Paysagiste à Chessy-les-Mines, Beaujolais</p>
          <h1 className="display display--xl" style={{ marginBottom: '1.25rem', maxWidth: '15ch' }}>
            Votre jardin, <em>créé</em> et <em>entretenu</em> par la même équipe.
          </h1>
          <p className="lead" style={{ marginBottom: '1.75rem' }}>
            Création d&apos;espaces verts, entretien à l&apos;année, terrasses et murets :
            Lila Paysage prend en charge votre extérieur de la première esquisse à la dernière tonte.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link href="/devis/" className="btn btn--accent btn--lg">
              Demander un devis <span className="btn-icon"><IconArrow size={13} /></span>
            </Link>
            <a href={identity.phoneLink} className="btn btn--ghost btn--lg">
              <IconPhone size={18} /> {identity.phone}
            </a>
          </div>
        </div>

        <div className="hero-collage" aria-hidden="true">
          {[
            ['/images/instagram/gazon-cloture.jpg', 'hero-collage__a'],
            ['/images/instagram/olivier.jpg', 'hero-collage__b'],
            ['/images/instagram/allee-pavee.jpg', 'hero-collage__c'],
            ['/images/instagram/massif-fleuri.jpg', 'hero-collage__d'],
          ].map(([src, cls], i) => (
            <div key={src} className={cls} style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--green-100)' }}>
              {i === 0 ? (
                <Image src={src} alt="" fill sizes="(max-width: 700px) 92vw, 50vw" quality={55} style={{ objectFit: 'cover' }} priority fetchPriority="high" />
              ) : (
                <Image src={src} alt="" fill sizes="(max-width: 700px) 46vw, 25vw" quality={65} style={{ objectFit: 'cover' }} loading={i === 3 ? 'lazy' : 'eager'} fetchPriority="low" />
              )}
            </div>
          ))}
          <div className="hero-collage__card panel" style={{ padding: '1rem 1.1rem', display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
            <span style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--accent-100)', color: 'var(--green-900)', display: 'grid', placeItems: 'center', flex: 'none' }}><IconShield size={20} /></span>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.45 }}>
              <strong style={{ color: 'var(--green-900)' }}>Entreprise locale depuis 2011.</strong>{' '}
              <span className="muted">Visite et devis sans engagement.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── BANDEAU ──────────────────────────────────────────── */}
      <div className="marquee" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }} aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <span key={k} className="marquee__item" style={{ gap: '2.5rem' }}>
              {['Création de jardin', 'Entretien à l\'année', 'Taille et élagage', 'Terrasses et dallages', 'Murets et escaliers', 'Clôtures et portails', 'Arrosage automatique', 'Engazonnement'].map((t) => (
                <span key={t} className="marquee__item">{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── PRESTATIONS (bento) ──────────────────────────────── */}
      <section aria-labelledby="services-title" className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <p className="kicker" style={{ marginBottom: '0.75rem' }}>Ce que nous faisons</p>
              <h2 id="services-title" className="display display--lg" style={{ maxWidth: '16ch' }}>Créer, entretenir, construire.</h2>
            </div>
            <Link href="/services/" className="link">Toutes les prestations <IconArrow size={16} /></Link>
          </div>

          <div className="bento">
            {featured.map((s, i) => (
              <Link key={s.id} href={`/services/${s.slug}/`} className={`tile bento__item bento__item--${i}`}>
                <Image src={s.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw" style={{ objectFit: 'cover' }} />
                <span className="tile__shade" aria-hidden="true" />
                <span className="tile__tag">{familyLabels[s.family]}</span>
                <span className="tile__body">
                  <span className="tile__title">{s.title}</span>
                  <span className="tile__desc">{s.shortDescription}</span>
                </span>
              </Link>
            ))}
            <div className="bento__item bento__item--5 panel panel--accent" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <p className="display display--sm" style={{ marginBottom: '0.5rem' }}>Et aussi</p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.925rem' }}>
                  {serviceCards.slice(5).map((s) => (
                    <li key={s.id}><Link href={`/services/${s.slug}/`} className="link" style={{ borderBottomColor: 'transparent' }}>{s.title}</Link></li>
                  ))}
                </ul>
              </div>
              <Link href="/devis/" className="btn btn--green" style={{ alignSelf: 'flex-start' }}>Décrire mon projet</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVANT / APRÈS ────────────────────────────────────── */}
      <section aria-labelledby="ba-title" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split split--wide-left" style={{ alignItems: 'start' }}>
            <div>
              <BeforeAfterSlider pair={homePair} />
            </div>
            <div style={{ paddingTop: '0.5rem' }}>
              <p className="kicker" style={{ marginBottom: '0.75rem' }}>Avant / après</p>
              <h2 id="ba-title" className="display display--lg" style={{ marginBottom: '1rem' }}>{homePair.title}</h2>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>{homePair.description} Faites glisser le curseur pour comparer.</p>
              <Link href="/avant-apres/" className="btn btn--ghost">Voir toutes les transformations</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ─────────────────────────────────────── */}
      <section aria-labelledby="work-title" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '1.5rem' }}>
            <h2 id="work-title" className="display display--md">Quelques réalisations</h2>
            <Link href="/realisations/" className="link">Tout le portfolio <IconArrow size={16} /></Link>
          </div>
          <div className="work-row">
            {portfolioItems.slice(0, 4).map((item) => (
              <figure key={item.id} className="card" style={{ margin: 0, aspectRatio: '4/5', position: 'relative' }}>
                <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 80vw, 25vw" style={{ objectFit: 'cover', objectPosition: item.focalPoint ?? 'center' }} />
                <figcaption style={{ position: 'absolute', left: '0.75rem', bottom: '0.75rem', padding: '0.4rem 0.75rem', borderRadius: 999, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--green-900)' }}>
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS + ENTREPRISE ───────────────────────────── */}
      <section aria-labelledby="process-title" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel panel--green" style={{ padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: 'var(--radius-xl)' }}>
            <div className="split" style={{ alignItems: 'start' }}>
              <div>
                <p className="kicker" style={{ marginBottom: '0.75rem', color: 'var(--accent-300)' }}>Comment ça se passe</p>
                <h2 id="process-title" className="display display--lg" style={{ color: '#fff', marginBottom: '1.25rem' }}>Quatre étapes, une seule équipe.</h2>
                <p style={{ lineHeight: 1.7, maxWidth: '46ch', color: 'rgba(255,255,255,0.78)', marginBottom: '1.5rem' }}>
                  Lila Paysage est dirigée par Jérôme Diasparra, paysagiste installé à Chessy-les-Mines depuis 2011.
                  Une structure à taille humaine : la personne qui vient voir votre terrain est celle qui réalise le chantier.
                </p>
                <Link href="/entreprise/" className="btn btn--on-dark">Découvrir l&apos;entreprise</Link>
              </div>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.75rem' }}>
                {[
                  ['Premier échange', 'Par téléphone ou via le formulaire : vous décrivez votre besoin, nous vous posons quelques questions.'],
                  ['Visite sur place', 'Nous venons voir le terrain, les accès, l\'exposition. Nous en discutons avec vous, sans engagement.'],
                  ['Devis détaillé', 'Vous recevez une proposition claire, poste par poste. Vous savez ce que vous payez et pourquoi.'],
                  ['Réalisation et suivi', 'Le chantier est réalisé par la même équipe. Ensuite, nous pouvons assurer l\'entretien.'],
                ].map(([t, d], i) => (
                  <li key={t} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1rem', padding: '1.1rem 1.25rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ width: 40, height: 40, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--accent-300)', color: 'var(--green-900)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{i + 1}</span>
                    <span>
                      <strong style={{ display: 'block', color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>{t}</strong>
                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55 }}>{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTRETIEN / SERVICES À LA PERSONNE + ZONES ───────── */}
      <section aria-labelledby="maint-title" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '1.25rem', alignItems: 'stretch' }}>
            <div className="panel panel--accent" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ display: 'grid', placeItems: 'center', width: 132, padding: '0.6rem', borderRadius: 16, background: 'var(--white)', boxShadow: 'var(--shadow-soft)' }}>
                <Image src={commitments.servicesALaPersonne.logo} alt="Logo Services à la personne" width={244} height={206} sizes="120px" style={{ width: 112, height: 'auto' }} />
              </span>
              <h2 id="maint-title" className="display display--md">L&apos;entretien, sans y penser.</h2>
              <p style={{ lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Contrat à l&apos;année ou passage ponctuel : tonte, taille, désherbage, nettoyage de saison.
                {' '}{commitments.servicesALaPersonne.text}
              </p>
              <Link href="/conseils/credit-impot-entretien-jardin/" className="link" style={{ alignSelf: 'flex-start' }}>Le crédit d&apos;impôt expliqué <IconArrow size={16} /></Link>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
                <Link href="/devis/?type=entretien-regulier" className="btn btn--green">Devis entretien</Link>
                <Link href="/services/entretien-jardin/" className="btn btn--ghost" style={{ background: 'var(--white)' }}>En savoir plus</Link>
              </div>
            </div>
            <div className="panel" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--green-100)', color: 'var(--green-900)', display: 'grid', placeItems: 'center' }}><IconPin size={24} /></span>
              <h2 className="display display--md">Autour de Chessy-les-Mines</h2>
              <p style={{ lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Nous intervenons dans un rayon raisonnable autour du siège, pour rester réactifs et limiter les déplacements.
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto' }}>
                {identity.territories.map((t) => <li key={t} className="pill">{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSEILS ─────────────────────────────────────────── */}
      <section aria-labelledby="blog-title" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <p className="kicker" style={{ marginBottom: '0.75rem' }}>Conseils &amp; actus</p>
              <h2 id="blog-title" className="display display--lg">Les guides du jardinier.</h2>
            </div>
            <Link href="/conseils/" className="link">Tous les conseils <IconArrow size={16} /></Link>
          </div>
          <div className="home-posts">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/conseils/${a.slug}/`} className="panel home-post">
                <span className="home-post__img"><Image src={a.cover.src} alt={a.cover.alt} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: 'cover' }} /></span>
                <span className="home-post__body">
                  <span className="small" style={{ color: 'var(--green-500)', fontWeight: 600 }}>{a.category}</span>
                  <span className="home-post__title">{a.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section aria-labelledby="faq-title" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <p className="kicker" style={{ marginBottom: '0.75rem' }}>Questions fréquentes</p>
              <h2 id="faq-title" className="display display--lg" style={{ maxWidth: '14ch' }}>Ce qu&apos;on nous demande souvent.</h2>
            </div>
            <div>
              {faqs.map((f, i) => (
                <details key={i} className="faq">
                  <summary>{f.q}<span className="faq__plus" aria-hidden="true" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ───────────────────────────────────────── */}
      <section aria-labelledby="quote-title" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="quote-wrap">
            <div className="quote-side">
              <p className="kicker" style={{ marginBottom: '0.75rem', color: 'var(--accent-300)' }}>Devis gratuit</p>
              <h2 id="quote-title" className="display display--lg" style={{ color: '#fff', marginBottom: '1rem' }}>Décrivez votre projet en deux minutes.</h2>
              <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Création, entretien ou maçonnerie : trois questions et nous vous rappelons pour fixer une visite.
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.925rem', color: 'rgba(255,255,255,0.85)' }}>
                {['Réponse sous quelques jours ouvrés', 'Visite et devis sans engagement', 'Aucune donnée transmise à des tiers'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-300)', color: 'var(--green-900)', display: 'grid', placeItems: 'center', flex: 'none' }}><IconArrow size={12} /></span>{t}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)' }}>
                Vous préférez appeler ?{' '}
                <a href={identity.phoneLink} style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>{identity.phone}</a>
              </p>
            </div>
            <div className="quote-main">
              <QuoteFormWrapper embedded />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-collage { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 170px; gap: 0.6rem; position: relative; }
        .hero-collage__a { grid-column: span 2; grid-row: span 2; }
        .hero-collage__card { position: absolute; left: 0.75rem; bottom: 0.75rem; max-width: min(100%, 360px); }
        .hero-collage__d { display: none; }
        @media (min-width: 700px) {
          .hero-collage { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 150px; gap: 0.75rem; }
          .hero-collage__a { grid-column: span 3; grid-row: span 3; }
          .hero-collage__b { grid-column: span 3; grid-row: span 1; }
          .hero-collage__c { grid-column: span 2; grid-row: span 2; }
          .hero-collage__d { display: block; grid-column: span 1; grid-row: span 2; }
          .hero-collage__card { left: 1.25rem; bottom: 1.25rem; }
        }

        .bento { display: grid; grid-template-columns: 1fr; gap: 0.9rem; }
        .bento__item { min-height: 260px; }
        @media (min-width: 700px) {
          .bento { grid-template-columns: repeat(2, 1fr); }
          .bento__item--0 { grid-column: 1 / -1; min-height: 360px; }
        }
        @media (min-width: 1000px) {
          .bento { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 250px; }
          .bento__item--0 { grid-column: span 4; grid-row: span 2; min-height: 0; }
          .bento__item--1 { grid-column: span 2; }
          .bento__item--2 { grid-column: span 2; }
          .bento__item--3 { grid-column: span 2; }
          .bento__item--4 { grid-column: span 2; }
          .bento__item--5 { grid-column: span 2; }
        }

        .work-row { display: grid; grid-auto-flow: column; grid-auto-columns: 78%; gap: 0.9rem; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 0.5rem; scrollbar-width: none; }
        .work-row > * { scroll-snap-align: start; }
        @media (min-width: 700px) { .work-row { grid-auto-flow: row; grid-template-columns: repeat(4, 1fr); overflow: visible; } }

        .home-posts { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 760px) { .home-posts { grid-template-columns: repeat(3, 1fr); } }
        .home-post { display: flex; flex-direction: column; overflow: hidden; text-decoration: none; color: inherit; transition: transform 0.2s, box-shadow 0.2s; }
        .home-post:hover { transform: translateY(-3px); box-shadow: var(--shadow-lift); }
        .home-post__img { position: relative; aspect-ratio: 16 / 10; background: var(--green-100); }
        .home-post__body { display: flex; flex-direction: column; gap: 0.4rem; padding: 1.2rem; }
        .home-post__title { font-family: var(--font-display); font-weight: 600; font-size: 1.15rem; line-height: 1.2; color: var(--green-900); }
        .faq { border-bottom: 1px solid var(--line); }
        .faq summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem 0; font-weight: 600; color: var(--green-900); font-size: 1.05rem; }
        .faq summary::-webkit-details-marker { display: none; }
        .faq__plus { flex: none; width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid var(--line); position: relative; transition: transform 0.25s, background 0.2s; }
        .faq__plus::before, .faq__plus::after { content: ''; position: absolute; left: 50%; top: 50%; background: var(--green-900); transform: translate(-50%, -50%); }
        .faq__plus::before { width: 12px; height: 1.5px; }
        .faq__plus::after { width: 1.5px; height: 12px; }
        .faq[open] .faq__plus { transform: rotate(45deg); background: var(--accent-100); }
        .faq p { padding: 0 0 1.25rem; line-height: 1.65; color: var(--ink-soft); max-width: 60ch; }

        .quote-wrap { display: grid; grid-template-columns: 1fr; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lift); }
        .quote-side { background: var(--green-900); padding: clamp(1.75rem, 4vw, 3rem); }
        .quote-main { background: var(--white); padding: clamp(1.5rem, 4vw, 3rem); }
        @media (min-width: 960px) { .quote-wrap { grid-template-columns: 0.8fr 1.2fr; } }
      `}</style>
    </>
  )
}
