# CLAUDE.md

Site vitrine de **Lila Paysage** (paysagiste, Chessy-les-Mines, 69380). Next.js 16 App Router, TypeScript strict, Tailwind 4. Tout le contenu est en français. Voir `README.md` pour les commandes, l'arborescence et la liste des points à confirmer.

## Règles

- **Ne rien inventer** : pas d'horaires, tarifs, délais, avis, compteurs, noms de clients, ni lieu/date/surface déduits des photos. Les données à confirmer sont marquées dans `src/data/identity.ts`.
- **Données légales** : SIREN 529 886 673, EURL, gérant Jérôme Diasparra, créée le 17/01/2011, siège 8 impasse du Clos de la Bergerie, 69380 Chessy. Homonyme à éviter : « Les Paysages de Lila » (Laillé, 35).
- **Services à la personne** : agrément non vérifié → formulation conditionnelle uniquement (« peut ouvrir droit… sous réserve d'agrément »).
- **Logo** : `src/components/ui/Logo.tsx` (SVG redessiné d'après Instagram, sans numéro de téléphone). Ne pas afficher le numéro de téléphone dans le logo ni dans l'en-tête.
- **Photos** : `public/images/instagram/` (compte public @lila.paysage, 640 px). Les avant/après sont provisoires. Pas de banque d'images.
- **Design** : tokens dans `globals.css` (`--green-900` olive, `--accent-500` vert tilleul, `--paper`). Composants : `.btn btn--accent|--green|--ghost|--on-dark`, `.panel`, `.tile`, `.choice`, `.family`, `.display`. Sur mobile (< 768 px), tout est centré (bloc dédié en fin de `globals.css`, basé sur les attributs `style` inline) : garder ce comportement.
- **Formulaire** : un seul composant `QuoteForm` (3 étapes), schéma `QuoteFormData` dans `src/lib/types.ts`, validation serveur dans `src/lib/validation.ts`, liste blanche des types dans `src/data/config.ts`. Mode démo par défaut, jamais de faux succès.
- **Blog** : articles dans `src/data/articles/` (brief et règles SEO dans `docs/brief-redaction-blog.md`). Faits réglementaires vérifiés sur sources officielles, aucun prix, aucune affirmation non vérifiée sur l'entreprise. Sur mobile, le texte des articles est centré, les listes à icônes restent alignées entre elles.
- **Performance** : viser 100 PageSpeed. Une seule image `priority` par page (l'image LCP), CSS inliné (`experimental.inlineCss`), polices locales sous-ensemblées (Fraunces figée en opsz 72, italique sans préchargement).
- **Aucun tiers** : pas de tracker, police distante, carte embarquée. Accessibilité WCAG 2.2 AA visée.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
