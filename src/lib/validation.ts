import type { QuoteFormData, ContactMode, NeedFamily, MaintenanceFrequency } from '@/lib/types'
import { ALLOWED_URL_PRESET_TYPES } from '@/data/config'

const ALLOWED_PROJECT_TYPES = ALLOWED_URL_PRESET_TYPES
const ALLOWED_FAMILIES: NeedFamily[] = ['creation', 'entretien', 'maconnerie']
const ALLOWED_FREQUENCIES: MaintenanceFrequency[] = ['hebdomadaire', 'bimensuel', 'mensuel', 'saisonnier', 'ponctuel']
const MAX_SHORT = 60

const ALLOWED_CONTACT_MODES: ContactMode[] = ['telephone', 'email']

const MAX_COMMUNE = 100
const MAX_NAME = 120
const MAX_PHONE = 30
const MAX_EMAIL = 254
const MAX_MESSAGE = 2000

type FieldErrors = Partial<Record<keyof QuoteFormData, string>>

export function validateQuoteForm(data: Partial<QuoteFormData>): {
  valid: boolean
  errors: FieldErrors
} {
  const errors: FieldErrors = {}

  // needFamily
  if (!data.needFamily || !ALLOWED_FAMILIES.includes(data.needFamily)) {
    errors.needFamily = 'Veuillez indiquer le type de besoin.'
  }

  // frequency (facultatif, borné)
  if (data.frequency && !ALLOWED_FREQUENCIES.includes(data.frequency)) {
    errors.frequency = 'Fréquence non valide.'
  }

  // timeline / surface (facultatifs, bornés)
  if (data.timeline && data.timeline.length > MAX_SHORT) errors.timeline = 'Valeur trop longue.'
  if (data.surface && data.surface.length > MAX_SHORT) errors.surface = 'Valeur trop longue.'

  // projectTypes
  if (!data.projectTypes || data.projectTypes.length === 0) {
    errors.projectTypes = 'Veuillez choisir au moins un type de projet.'
  } else {
    for (const t of data.projectTypes) {
      if (!ALLOWED_PROJECT_TYPES.includes(t)) {
        errors.projectTypes = 'Type de projet non valide.'
        break
      }
    }
  }

  // commune
  if (!data.commune || data.commune.trim().length === 0) {
    errors.commune = 'Veuillez indiquer la commune du chantier.'
  } else if (data.commune.trim().length > MAX_COMMUNE) {
    errors.commune = `La commune ne doit pas dépasser ${MAX_COMMUNE} caractères.`
  }

  // contactMode
  if (!data.contactMode || !ALLOWED_CONTACT_MODES.includes(data.contactMode)) {
    errors.contactMode = 'Veuillez choisir un mode de contact.'
  }

  // name
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Veuillez indiquer votre nom.'
  } else if (data.name.trim().length > MAX_NAME) {
    errors.name = `Le nom ne doit pas dépasser ${MAX_NAME} caractères.`
  }

  // phone (required when contactMode === 'telephone')
  if (data.contactMode === 'telephone') {
    if (!data.phone || data.phone.trim().length === 0) {
      errors.phone = 'Veuillez indiquer votre numéro de téléphone.'
    } else if (data.phone.trim().length > MAX_PHONE) {
      errors.phone = `Le numéro de téléphone ne doit pas dépasser ${MAX_PHONE} caractères.`
    } else if (!/^[\d\s+\-.()]{6,}$/.test(data.phone.trim())) {
      errors.phone = 'Le numéro de téléphone semble invalide.'
    }
  }

  // email (required when contactMode === 'email')
  if (data.contactMode === 'email') {
    if (!data.email || data.email.trim().length === 0) {
      errors.email = 'Veuillez indiquer votre adresse e-mail.'
    } else if (data.email.trim().length > MAX_EMAIL) {
      errors.email = `L'adresse e-mail ne doit pas dépasser ${MAX_EMAIL} caractères.`
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
      errors.email = 'L\'adresse e-mail semble invalide.'
    }
  }

  // message (optional but bounded)
  if (data.message && data.message.length > MAX_MESSAGE) {
    errors.message = `Le message ne doit pas dépasser ${MAX_MESSAGE} caractères.`
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

/**
 * Checks for e-mail header injection in a string.
 * Returns true if the value is safe.
 */
export function isSafeString(value: string): boolean {
  return !/[\r\n]/.test(value)
}
