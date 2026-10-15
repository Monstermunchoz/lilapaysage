import type { SiteConfig, ProjectType, NeedFamily } from '@/lib/types'

/**
 * Configuration du site.
 * Les valeurs de production sont injectées via des variables d'environnement.
 * En l'absence de configuration, le site reste en mode démo
 * et aucun message ne part vers l'entreprise.
 */
export const siteConfig: SiteConfig = {
  demoMode: process.env.DEMO_MODE !== 'false',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  recipientEmail: process.env.RECIPIENT_EMAIL ?? '',
  fromEmail: process.env.FROM_EMAIL ?? '',
}

/**
 * Routes à rediriger lors de la mise en production.
 * Lila Paysage n'a pas de site existant connu : table vide, à compléter
 * si un ancien domaine est récupéré.
 * Format : [ancienne route, nouvelle route, code HTTP]
 */
export const redirects: ReadonlyArray<readonly [string, string, number]> = []

/**
 * Événements de conversion à envoyer à la couche analytics,
 * sans activer de collecteur tiers par défaut.
 * La structure exclut toute donnée personnelle.
 */
export const ANALYTICS_EVENTS = {
  CLICK_PHONE: 'click_phone',
  CLICK_QUOTE: 'click_quote',
  FORM_START: 'form_start',
  FORM_STEP_COMPLETE: 'form_step_complete',
  FORM_SUCCESS: 'form_success',
  FORM_ERROR: 'form_error',
  PROJECT_VIEW: 'project_view',
} as const

/**
 * Valeurs autorisées pour le préremplissage du formulaire via URL.
 * Seules ces valeurs sont acceptées comme paramètre ?type=...
 * Jamais de coordonnées ni de données libres dans l'URL.
 */
export const ALLOWED_URL_PRESET_TYPES: readonly ProjectType[] = [
  'creation-jardin',
  'plantations-massifs',
  'engazonnement',
  'arrosage-automatique',
  'terrassement',
  'entretien-regulier',
  'entretien-ponctuel',
  'taille-haies',
  'elagage',
  'terrasse-dallage',
  'muret-escalier',
  'cloture-portail',
  'allee-acces',
  'autre',
] as const

/** Famille de besoin déduite d'un type de projet (pour le préremplissage) */
export const PROJECT_TYPE_FAMILY: Record<ProjectType, NeedFamily> = {
  'creation-jardin': 'creation',
  'plantations-massifs': 'creation',
  'engazonnement': 'creation',
  'arrosage-automatique': 'creation',
  'terrassement': 'creation',
  'entretien-regulier': 'entretien',
  'entretien-ponctuel': 'entretien',
  'taille-haies': 'entretien',
  'elagage': 'entretien',
  'terrasse-dallage': 'maconnerie',
  'muret-escalier': 'maconnerie',
  'cloture-portail': 'maconnerie',
  'allee-acces': 'maconnerie',
  'autre': 'creation',
}
