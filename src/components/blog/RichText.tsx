import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

/**
 * Rendu du texte enrichi des articles : **gras** et [ancre](url).
 * Liens internes via next/link, liens externes en nouvel onglet.
 */
export function RichText({ text }: { text: string }) {
  return <>{parse(text)}</>
}

const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g

function parse(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  let i = 0
  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0
    if (idx > last) out.push(<Fragment key={i++}>{text.slice(last, idx)}</Fragment>)
    if (m[1] !== undefined) {
      out.push(<strong key={i++}>{parse(m[1])}</strong>)
    } else {
      const label = m[2]
      const href = m[3]
      if (/^https?:\/\//.test(href)) {
        out.push(
          <a key={i++} href={href} target="_blank" rel="noopener" className="prose-link">
            {label}
          </a>,
        )
      } else {
        out.push(
          <Link key={i++} href={href} className="prose-link">
            {label}
          </Link>,
        )
      }
    }
    last = idx + m[0].length
  }
  if (last < text.length) out.push(<Fragment key={i++}>{text.slice(last)}</Fragment>)
  return out
}

/** Texte brut (pour JSON-LD, extraits) */
export function plainText(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

/** Ancre stable depuis un titre */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
}
