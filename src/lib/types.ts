// ────────────────────────────────────────────────────────────────
// Types – Lila Paysage
// ────────────────────────────────────────────────────────────────

export type DataStatus = 'etabli' | 'a-confirmer'

// ────────────────────────────────────────────────────────────────
// Identité entreprise
// ────────────────────────────────────────────────────────────────

export interface CompanyAddress {
  label: string
  lines: string[]
  mapLink?: string
}

export interface CompanyIdentity {
  brandName: string
  legalName: string
  siren: string
  siret: string
  rcs: string
  vatNumber: string
  activityStart: string
  apeCode: string
  apeLabel: string
  manager: string
  phone: string
  phoneLink: string
  phoneSecondary?: string
  phoneSecondaryLink?: string
  email: string
  domain: string
  headquarters: CompanyAddress
  territories: string[]
}

// ────────────────────────────────────────────────────────────────
// Services
// ────────────────────────────────────────────────────────────────

export type ServiceFamily = 'creation' | 'entretien' | 'maconnerie'

export interface ServiceCard {
  id: string
  title: string
  slug: string
  family: ServiceFamily
  shortDescription: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  /** Type de projet prérempli dans le formulaire de devis */
  quoteType: ProjectType
}

export interface ServicePage {
  id: string
  title: string
  slug: string
  family: ServiceFamily
  metaTitle: string
  metaDescription: string
  headline: string
  intro: string
  sections: ServiceSection[]
  coverImage: string
  coverImageAlt: string
  relatedServices: string[]
  quoteType: ProjectType
}

export interface ServiceSection {
  title: string
  content: string
  bullets?: string[]
}

// ────────────────────────────────────────────────────────────────
// Portfolio
// ────────────────────────────────────────────────────────────────

export type PortfolioCategory =
  | 'tous'
  | 'jardins-plantations'
  | 'terrasses-dallages'
  | 'allees-acces'
  | 'maconnerie-clotures'
  | 'pelouses-gazon'

export interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  categories: Exclude<PortfolioCategory, 'tous'>[]
  focalPoint?: string  // e.g. 'center top'
}

// ────────────────────────────────────────────────────────────────
// Avant / après
// ────────────────────────────────────────────────────────────────

export interface BeforeAfterPair {
  id: string
  title: string
  description: string
  before: {
    src: string
    alt: string
    width: number
    height: number
  }
  after: {
    src: string
    alt: string
    width: number
    height: number
  }
  category?: Exclude<PortfolioCategory, 'tous'>
}

// ────────────────────────────────────────────────────────────────
// Formulaire devis
// ────────────────────────────────────────────────────────────────

/** Grande famille de besoin choisie en premier dans le formulaire */
export type NeedFamily = 'creation' | 'entretien' | 'maconnerie'

export type ProjectType =
  | 'creation-jardin'
  | 'plantations-massifs'
  | 'engazonnement'
  | 'arrosage-automatique'
  | 'terrassement'
  | 'entretien-regulier'
  | 'entretien-ponctuel'
  | 'taille-haies'
  | 'elagage'
  | 'terrasse-dallage'
  | 'muret-escalier'
  | 'cloture-portail'
  | 'allee-acces'
  | 'autre'

/** Rythme souhaité pour une prestation d'entretien */
export type MaintenanceFrequency = 'hebdomadaire' | 'bimensuel' | 'mensuel' | 'saisonnier' | 'ponctuel'

export type ContactMode = 'telephone' | 'email'

export interface QuoteFormData {
  needFamily: NeedFamily
  projectTypes: ProjectType[]
  frequency?: MaintenanceFrequency
  commune: string
  contactMode: ContactMode
  name: string
  phone?: string
  email?: string
  message?: string
  timeline?: string
  surface?: string
  // Captcha auto-hébergé : jeton signé fourni par /api/captcha et réponse du visiteur
  captchaToken?: string
  captchaAnswer?: string
  // Hidden honeypot – never sent to server
  honeypot?: string
}

export interface QuoteFormResult {
  success: boolean
  demo: boolean
  message: string
  errors?: Partial<Record<keyof QuoteFormData, string>>
}

// ────────────────────────────────────────────────────────────────
// Config
// ────────────────────────────────────────────────────────────────

export interface SiteConfig {
  demoMode: boolean
  siteUrl: string
  indexable: boolean
  recipientEmail: string
  fromEmail: string
}
