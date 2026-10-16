import type { Article } from '@/lib/article-types'

function words(text: string): number {
  return (text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').match(/[\p{L}\d'’-]+/gu) ?? []).length
}

export function wordCount(a: Article): number {
  let n = 0
  for (const b of a.blocks) {
    if (b.type === 'p' || b.type === 'h2' || b.type === 'h3') n += words(b.text)
    else if (b.type === 'ul' || b.type === 'ol') n += b.items.reduce((s, t) => s + words(t), 0)
    else if (b.type === 'tip') n += words(b.title) + words(b.text)
    else if (b.type === 'table') n += [...b.head, ...b.rows.flat()].reduce((s, t) => s + words(t), 0)
  }
  for (const f of a.faq) n += words(f.q) + words(f.a)
  return n
}

/** Minutes de lecture (230 mots/min) */
export function readingTime(a: Article): number {
  return Math.max(1, Math.round(wordCount(a) / 230))
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' })
}
