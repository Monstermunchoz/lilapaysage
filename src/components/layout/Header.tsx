'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { identity } from '@/data/identity'
import { serviceCards, familyLabels } from '@/data/services'
import { Logo } from '@/components/ui/Logo'
import { IconPhone, IconArrow, IconSprout, IconMower, IconBricks } from '@/components/ui/Icons'

const familyTitles = { creation: 'Création de jardin', entretien: 'Entretien et taille', maconnerie: 'Maçonnerie et aménagements' } as const
const familyIcons = { creation: <IconSprout size={18} />, entretien: <IconMower size={18} />, maconnerie: <IconBricks size={18} /> }

const navLinks = [
  { label: 'Prestations', href: '/services/', mega: true },
  { label: 'Réalisations', href: '/realisations/' },
  { label: 'Conseils', href: '/conseils/' },
  { label: 'Avant / après', href: '/avant-apres/' },
  { label: 'L\'entreprise', href: '/entreprise/' },
  { label: 'Contact', href: '/contact/' },
]

const families = (['creation', 'entretien', 'maconnerie'] as const).map((f) => ({
  id: f,
  label: familyLabels[f],
  items: serviceCards.filter((s) => s.family === f),
}))

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const megaRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    const id = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { cancelAnimationFrame(id); window.removeEventListener('scroll', onScroll) }
  }, [])

  // Fermer les menus à chaque changement de route (sans setState dans l'effet)
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setMenuOpen(false)
    setMegaOpen(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (menuOpen) triggerRef.current?.focus()
        setMenuOpen(false); setMegaOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick) }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      menuRef.current.querySelector<HTMLElement>('a, button')?.focus()
    }
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <>
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'rgba(246,246,241,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(1.3)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(1.3)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.75rem', gap: '1rem' }}>
        <Link href="/" aria-label={`${identity.brandName} — retour à l'accueil`} style={{ textDecoration: 'none', flexShrink: 0 }}>
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href} ref={link.mega ? megaRef : undefined} style={{ position: 'relative' }}>
                {link.mega ? (
                  <button
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    onClick={() => setMegaOpen((v) => !v)}
                    className={`nav-item${isActive(link.href) ? ' is-active' : ''}`}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ transform: megaOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <Link href={link.href} className={`nav-item${isActive(link.href) ? ' is-active' : ''}`}>
                    {link.label}
                  </Link>
                )}

                {link.mega && megaOpen && (
                  <div className="mega">
                    {families.map((f) => (
                      <div key={f.id}>
                        <p className="mega__family">{f.label}</p>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                          {f.items.map((s) => (
                            <li key={s.id}>
                              <Link href={`/services/${s.slug}/`} className="mega__link" onClick={() => setMegaOpen(false)}>
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link href="/services/" className="mega__all" onClick={() => setMegaOpen(false)}>
                      Toutes les prestations <IconArrow size={16} />
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <Link href="/devis/" className="btn btn--green header-cta">
            Demander un devis
          </Link>

          <button
            ref={triggerRef}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="burger-btn"
          >
            <span style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      <style>{`
        .desktop-nav { display: none; }
        .nav-item {
          display: inline-flex; align-items: center; gap: 0.35rem;
          padding: 0.55rem 0.85rem; border-radius: 999px; border: none; background: none; cursor: pointer;
          font-family: var(--font-body); font-size: 0.925rem; font-weight: 600; color: var(--ink); text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .nav-item:hover, .nav-item.is-active { background: var(--white); color: var(--green-900); box-shadow: var(--shadow-soft); }
        .mega {
          position: absolute; top: calc(100% + 0.75rem); left: 50%; transform: translateX(-30%);
          width: min(760px, calc(100vw - 2rem));
          background: var(--white); border-radius: var(--radius-lg); box-shadow: var(--shadow-lift);
          padding: 1.5rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; z-index: 60;
          border: 1px solid var(--line);
        }
        .mega__family { margin: 0 0 0.6rem; font-family: var(--font-display); font-weight: 600; font-size: 1.15rem; color: var(--green-900); }
        .mega__link { display: block; padding: 0.45rem 0.6rem; margin-left: -0.6rem; border-radius: 10px; font-size: 0.9rem; color: var(--ink-soft); text-decoration: none; transition: background 0.12s, color 0.12s; }
        .mega__link:hover { background: var(--accent-100); color: var(--green-900); }
        .mega__all { grid-column: 1 / -1; display: inline-flex; align-items: center; gap: 0.4rem; justify-self: start; padding-top: 1rem; border-top: 1px solid var(--line); width: 100%; font-weight: 600; font-size: 0.9rem; color: var(--green-900); text-decoration: none; }
        .header-cta { display: none !important; }
        .burger-btn { display: flex; flex-direction: column; justify-content: center; gap: 4px; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--line); background: var(--white); cursor: pointer; padding: 0 11px; }
        .burger-btn span { display: block; height: 2px; width: 20px; border-radius: 2px; background: var(--green-900); transition: transform 0.2s, opacity 0.2s; }
        .drawer { position: fixed; inset: 0; z-index: 200; background: var(--paper); overflow-y: auto; -webkit-overflow-scrolling: touch; text-align: left; }
        .drawer__top { position: sticky; top: 0; z-index: 1; display: flex; align-items: center; justify-content: space-between; height: 4.25rem; padding: 0 var(--side-padding); background: var(--paper); border-bottom: 1px solid var(--line); }
        .drawer__close { width: 44px; height: 44px; border-radius: 50%; border: none; background: var(--green-900); color: #fff; display: grid; place-items: center; cursor: pointer; }
        .drawer__body { padding: 1.25rem var(--side-padding) 2.5rem; }
        .drawer__label { font-size: 0.8rem; font-weight: 700; color: var(--green-500); margin: 0 0 0.75rem; }
        .drawer__families { display: grid; gap: 0.75rem; }
        .drawer__family { background: var(--white); border-radius: var(--radius-md); padding: 0.9rem 1rem 0.5rem; box-shadow: var(--shadow-soft); }
        .drawer__family-title { display: flex; align-items: center; gap: 0.6rem; margin: 0 0 0.35rem; font-family: var(--font-display); font-weight: 600; font-size: 1.2rem; color: var(--green-900); }
        .drawer__family-icon { width: 34px; height: 34px; border-radius: 10px; background: var(--accent-100); display: grid; place-items: center; color: var(--green-900); flex: none; }
        .drawer__family ul, .drawer__links { list-style: none; margin: 0; padding: 0; }
        .drawer__service { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; min-height: 44px; padding: 0.45rem 0; border-top: 1px solid var(--line); font-size: 0.975rem; font-weight: 500; color: var(--ink); text-decoration: none; }
        .drawer__service svg { color: var(--green-500); flex: none; }
        .drawer__link { display: flex; align-items: center; justify-content: space-between; min-height: 52px; padding: 0.5rem 0; border-bottom: 1px solid var(--line); font-family: var(--font-display); font-weight: 600; font-size: 1.3rem; color: var(--green-900); text-decoration: none; }
        .drawer__cta { margin-top: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem; }
        @media (min-width: 1000px) {
          .desktop-nav { display: block; }
          .header-cta { display: inline-flex !important; }
          .burger-btn { display: none; }
        }
      `}</style>
    </header>

    {menuOpen && (
      <div id="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Menu de navigation" className="drawer">
        <div className="drawer__top">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label={`${identity.brandName} — retour à l'accueil`} style={{ textDecoration: 'none' }}>
            <Logo size="sm" />
          </Link>
          <button type="button" className="drawer__close" onClick={() => { setMenuOpen(false); triggerRef.current?.focus() }} aria-label="Fermer le menu">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="drawer__body">
          <p className="drawer__label">Nos prestations</p>
          <div className="drawer__families">
            {families.map((f) => (
              <div key={f.id} className="drawer__family">
                <p className="drawer__family-title">
                  <span className="drawer__family-icon" aria-hidden="true">{familyIcons[f.id]}</span>
                  {familyTitles[f.id]}
                </p>
                <ul>
                  {f.items.map((s) => (
                    <li key={s.id}>
                      <Link href={`/services/${s.slug}/`} onClick={() => setMenuOpen(false)} className="drawer__service">
                        {s.title}
                        <IconArrow size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="drawer__label" style={{ marginTop: '1.75rem' }}>Découvrir</p>
          <ul className="drawer__links">
            {navLinks.filter((l) => !l.mega).map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)} className="drawer__link">
                  {link.label}
                  <IconArrow size={16} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="drawer__cta">
            <Link href="/devis/" className="btn btn--accent btn--lg" onClick={() => setMenuOpen(false)}>Demander un devis</Link>
            <a href={identity.phoneLink} className="btn btn--ghost btn--lg"><IconPhone size={18} /> {identity.phone}</a>
          </div>
        </nav>
      </div>
    )}
    </>
  )
}
