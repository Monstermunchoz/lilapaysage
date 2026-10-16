// ────────────────────────────────────────────────────────────────
// Types – rubrique « Conseils & actus » (blog)
// ────────────────────────────────────────────────────────────────

/**
 * Texte enrichi minimal, utilisable dans `p`, `li`, `tip.text`, cellules de tableau et réponses de FAQ :
 *  - **gras**
 *  - [texte du lien](/chemin-interne/)  ou  [texte](https://site-externe.fr/page)
 * Les liens externes s'ouvrent dans un nouvel onglet (rel="noopener").
 */
export type RichText = string

export type ArticleBlock =
  | { type: 'p'; text: RichText }
  | { type: 'h2'; text: string }            // l'ancre (id) est générée automatiquement depuis le texte
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: RichText[] }
  | { type: 'ol'; items: RichText[] }
  | { type: 'tip'; title: string; text: RichText }   // encadré conseil
  | { type: 'table'; head: string[]; rows: RichText[][] }
  | { type: 'image'; src: string; alt: string; caption?: string } // uniquement /images/instagram/*.jpg

export type ArticleCategory = 'Entretien' | 'Création' | 'Aménagement' | 'Réglementation' | 'Guides'

export interface Article {
  slug: string                 // court, en minuscules, avec le mot-clé principal, sans mots vides
  title: string                // H1 (commence par le mot-clé principal, contient un nombre si possible)
  metaTitle: string            // ≤ 60 caractères, commence par le mot-clé principal
  metaDescription: string      // 120–155 caractères, contient le mot-clé principal
  focusKeyword: string         // mot-clé principal (RankMath)
  secondaryKeywords: string[]
  category: ArticleCategory
  excerpt: string              // 1–2 phrases pour la carte de liste
  publishedAt: string          // ISO 'YYYY-MM-DD'
  updatedAt: string            // ISO 'YYYY-MM-DD'
  cover: { src: string; alt: string }   // alt contient le mot-clé principal
  blocks: ArticleBlock[]
  faq: { q: string; a: RichText }[]
  relatedServices: string[]    // ids de src/data/services.ts
  relatedArticles: string[]    // slugs d'autres articles
}
