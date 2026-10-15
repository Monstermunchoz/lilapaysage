# Lila Paysage — site vitrine

Site vitrine de **Lila Paysage**, paysagiste à Chessy-les-Mines (69380) : création et aménagement de jardin, entretien, élagage, maçonnerie paysagère, clôtures, arrosage automatique.

Prototype de démonstration réalisé par 404 Agency. Base technique exploitable pour la mise en production.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production (hébergement Node requis pour les routes API)
npm run typecheck  # TypeScript
npm run lint       # ESLint
```

## Stack

Next.js 16 (App Router), React 19, TypeScript strict, Tailwind 4 (tokens dans `src/app/globals.css`). Polices servies localement (Manrope, Fraunces). Aucun service tiers : pas de tracker, pas de police distante, captcha auto-hébergé.

## Arborescence

- `src/data/` — contenu structuré : `identity.ts` (données légales, coordonnées, zones), `services.ts` (7 prestations en 3 familles : créer / entretenir / construire), `portfolio.ts`, `before-after.ts`, `config.ts`
- `src/app/` — routes : `/`, `/services/` + 7 sous-pages, `/realisations/`, `/avant-apres/`, `/entreprise/`, `/devis/`, `/contact/`, mentions légales, confidentialité, 404, `api/contact`, `api/captcha`, sitemap, robots
- `src/components/` — `layout/` (Header avec méga-menu, Footer, MobileBar), `forms/` (QuoteForm en 3 étapes, CallbackForm, CaptchaField), `ui/` (Logo, Icons, PageHeader, BeforeAfterSlider, PortfolioGrid, Lightbox)
- `public/images/instagram/` — photos du compte Instagram public @lila.paysage (640 px)

## Formulaire de devis

Trois étapes : **famille de besoin** (créer / entretenir / construire) → **prestations** (choix multiples avec icônes, rythme d'entretien si entretien, commune, surface, échéance) → **coordonnées** (téléphone ou e-mail). Préremplissage par `?type=` limité à la liste blanche de `src/data/config.ts`.

- Mode démo par défaut (`DEMO_MODE` absent ou ≠ `false`) : rien n'est envoyé, l'interface le dit.
- Production : `DEMO_MODE=false`, `RECIPIENT_EMAIL`, `FROM_EMAIL`, puis brancher un transport dans `src/app/api/contact/route.ts` (exemple Resend commenté). Sans transport, le serveur renvoie une erreur explicite, jamais un faux succès.
- Protections : honeypot, limitation de débit, captcha signé (HMAC, `CAPTCHA_SECRET`), limites de longueur, anti-injection d'en-têtes.

## Logo

`src/components/ui/Logo.tsx` est une recréation SVG du visuel Instagram (trois cyprès, deux vagues de pelouse, « LILA » vert tilleul, « PAYSAGE » gris). Le numéro de téléphone présent sur le visuel d'origine est omis. Remplacer par le fichier vectoriel officiel si le client le fournit.

## À confirmer avec le client avant publication

- Numéro principal : `06 50 42 81 20` (Instagram, Pages Jaunes) ; un fixe `04 72 17 08 55` figure sur Kompass.
- E-mail `lilapaysage@hotmail.fr` (Instagram, Kompass).
- Zones d'intervention (liste proposée dans `identity.ts`).
- Agrément « services à la personne » : non vérifié, formulation conditionnelle uniquement.
- Photos : demander les originaux HD des 9 photos Instagram ; les **avant/après sont des visuels provisoires** issus d'un autre projet et doivent être remplacés.
- Nom de domaine (`lila-paysage.fr` supposé, non acheté), hébergeur, responsable de publication, médiation.
- Retirer le `noindex` dans `src/app/layout.tsx` à la mise en production.
