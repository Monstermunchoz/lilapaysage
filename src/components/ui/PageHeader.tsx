import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

interface Crumb { label: string; href?: string }

export function PageHeader({
  crumbs,
  kicker,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[]
  kicker?: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="container" style={{ paddingTop: 'clamp(1.25rem, 3vw, 2.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1.5rem' }}>
        <ol className="breadcrumb">
          <li><Link href="/">Accueil</Link></li>
          {crumbs.map((c, i) => (
            <Fragment key={i}>
              <li aria-hidden="true">/</li>
              <li aria-current={i === crumbs.length - 1 ? 'page' : undefined} style={{ color: i === crumbs.length - 1 ? 'var(--green-900)' : undefined }}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>
      {kicker && <p className="kicker" style={{ marginBottom: '0.75rem' }}>{kicker}</p>}
      <h1 className="display display--xl" style={{ maxWidth: '18ch', marginBottom: lead ? '1.25rem' : 0 }}>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  )
}
