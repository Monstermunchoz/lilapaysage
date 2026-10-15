'use client'

import { useState, useRef, useId, type ReactNode } from 'react'
import type { ProjectType, ContactMode, NeedFamily, MaintenanceFrequency, QuoteFormData, QuoteFormResult } from '@/lib/types'
import { PROJECT_TYPE_FAMILY } from '@/data/config'
import { CaptchaField } from './CaptchaField'
import {
  IconSprout, IconGrass, IconDrop, IconExcavator, IconMower, IconCalendar, IconShears, IconTree,
  IconTerrace, IconStairs, IconFence, IconPath, IconChat, IconPhone, IconMail, IconPin, IconUser,
  IconCheck, IconArrow, IconLeaf, IconBricks, IconHome, IconClock, IconRuler,
} from '@/components/ui/Icons'

// ── Données du formulaire ─────────────────────────────────────

const FAMILIES: { id: NeedFamily; title: string; desc: string; icon: ReactNode }[] = [
  { id: 'creation',   title: 'Créer',       desc: 'Aménager un jardin, planter, semer une pelouse, installer un arrosage.', icon: <IconSprout size={24} /> },
  { id: 'entretien',  title: 'Entretenir',  desc: 'Tonte, taille, élagage, en contrat régulier ou ponctuellement.',          icon: <IconMower size={24} /> },
  { id: 'maconnerie', title: 'Construire',  desc: 'Terrasse, muret, escalier, clôture ou portail.',                          icon: <IconBricks size={24} /> },
]

const OPTIONS: Record<NeedFamily, { id: ProjectType; label: string; sub?: string; icon: ReactNode }[]> = {
  creation: [
    { id: 'creation-jardin',      label: 'Créer ou réaménager un jardin', sub: 'Conception complète',        icon: <IconLeaf size={20} /> },
    { id: 'plantations-massifs',  label: 'Plantations et massifs',        sub: 'Arbres, haies, vivaces',     icon: <IconSprout size={20} /> },
    { id: 'engazonnement',        label: 'Pelouse',                       sub: 'Semée ou en plaques',        icon: <IconGrass size={20} /> },
    { id: 'arrosage-automatique', label: 'Arrosage automatique',          sub: 'Réseau enterré',             icon: <IconDrop size={20} /> },
    { id: 'terrassement',         label: 'Terrassement',                  sub: 'Préparation du terrain',     icon: <IconExcavator size={20} /> },
    { id: 'autre',                label: 'Autre ou besoin de conseils',                                      icon: <IconChat size={20} /> },
  ],
  entretien: [
    { id: 'entretien-regulier',   label: 'Entretien régulier',            sub: 'Contrat à l\'année',         icon: <IconCalendar size={20} /> },
    { id: 'entretien-ponctuel',   label: 'Passage ponctuel',              sub: 'Remise en état, nettoyage',  icon: <IconMower size={20} /> },
    { id: 'taille-haies',         label: 'Taille de haies et arbustes',                                      icon: <IconShears size={20} /> },
    { id: 'elagage',              label: 'Élagage d\'arbres',                                                icon: <IconTree size={20} /> },
    { id: 'autre',                label: 'Autre ou besoin de conseils',                                      icon: <IconChat size={20} /> },
  ],
  maconnerie: [
    { id: 'terrasse-dallage',     label: 'Terrasse ou dallage',           sub: 'Pierre, grès, bois',         icon: <IconTerrace size={20} /> },
    { id: 'muret-escalier',       label: 'Muret, escalier, soutènement',                                     icon: <IconStairs size={20} /> },
    { id: 'cloture-portail',      label: 'Clôture ou portail',                                               icon: <IconFence size={20} /> },
    { id: 'allee-acces',          label: 'Allée ou accès',                sub: 'Piéton ou carrossable',      icon: <IconPath size={20} /> },
    { id: 'autre',                label: 'Autre ou besoin de conseils',                                      icon: <IconChat size={20} /> },
  ],
}

const FREQUENCIES: { id: MaintenanceFrequency; label: string }[] = [
  { id: 'hebdomadaire', label: 'Chaque semaine' },
  { id: 'bimensuel',    label: 'Tous les 15 jours' },
  { id: 'mensuel',      label: 'Chaque mois' },
  { id: 'saisonnier',   label: 'Par saison' },
  { id: 'ponctuel',     label: 'Une seule fois' },
]

const TIMELINES = [
  { id: '', label: 'Je ne sais pas encore' },
  { id: 'des-que-possible', label: 'Dès que possible' },
  { id: '1-3-mois', label: 'Dans 1 à 3 mois' },
  { id: '3-6-mois', label: 'Dans 3 à 6 mois' },
  { id: 'plus-tard', label: 'Plus tard dans l\'année' },
]

interface Props {
  presetType?: ProjectType
  /** Variante compacte (encart sur l'accueil) */
  embedded?: boolean
}

export function QuoteForm({ presetType, embedded = false }: Props) {
  const uid = useId()
  const errorSummaryRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLFormElement>(null)

  const [step, setStep] = useState<1 | 2 | 3>(presetType ? 2 : 1)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<QuoteFormResult | null>(null)

  const [family, setFamily] = useState<NeedFamily | null>(presetType ? PROJECT_TYPE_FAMILY[presetType] : null)
  const [selectedTypes, setSelectedTypes] = useState<ProjectType[]>(presetType ? [presetType] : [])
  const [frequency, setFrequency] = useState<MaintenanceFrequency | ''>('')
  const [commune, setCommune] = useState('')
  const [surface, setSurface] = useState('')
  const [timeline, setTimeline] = useState('')

  const [contactMode, setContactMode] = useState<ContactMode>('telephone')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaKey, setCaptchaKey] = useState(0)

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({})

  const clearError = (k: string) => setErrors((e) => (e[k] ? { ...e, [k]: undefined } : e))
  const hasErrors = Object.values(errors).some(Boolean)

  const scrollTop = () => {
    if (!embedded) topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const pickFamily = (f: NeedFamily) => {
    setFamily(f)
    setSelectedTypes([])
    setFrequency('')
    setErrors({})
    setStep(2)
    scrollTop()
  }

  const toggleType = (t: ProjectType) => {
    setSelectedTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
    clearError('projectTypes')
  }

  const validateStep2 = () => {
    const errs: Record<string, string> = {}
    if (selectedTypes.length === 0) errs.projectTypes = 'Choisissez au moins une prestation.'
    if (!commune.trim()) errs.commune = 'Indiquez la commune du jardin.'
    setErrors(errs)
    if (Object.keys(errs).length) { errorSummaryRef.current?.focus(); return false }
    return true
  }

  const goStep3 = () => { if (validateStep2()) { setStep(3); scrollTop() } }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Indiquez votre nom.'
    if (contactMode === 'telephone' && !phone.trim()) errs.phone = 'Indiquez votre téléphone.'
    if (contactMode === 'email' && !email.trim()) errs.email = 'Indiquez votre adresse e-mail.'
    if (contactMode === 'email' && email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errs.email = 'L\'adresse e-mail semble invalide.'
    if (!captchaAnswer.trim()) errs.captchaAnswer = 'Répondez à la question de sécurité.'
    setErrors(errs)
    if (Object.keys(errs).length) { errorSummaryRef.current?.focus(); return }

    setLoading(true)
    try {
      const payload: Partial<QuoteFormData> = {
        needFamily: family ?? 'creation',
        projectTypes: selectedTypes,
        frequency: frequency || undefined,
        commune: commune.trim(),
        surface: surface.trim() || undefined,
        timeline: timeline || undefined,
        contactMode,
        name: name.trim(),
        phone: phone.trim() || undefined,
        email: email.trim() || undefined,
        message: message.trim() || undefined,
        captchaToken,
        captchaAnswer: captchaAnswer.trim(),
      }
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data: QuoteFormResult = await res.json()
      if (!data.success && data.errors?.captchaAnswer) {
        setErrors({ captchaAnswer: data.errors.captchaAnswer })
        setCaptchaKey((k) => k + 1)
        errorSummaryRef.current?.focus()
        return
      }
      setResult(data)
    } catch {
      setResult({ success: false, demo: false, message: 'Une erreur réseau s\'est produite. Réessayez ou appelez-nous directement.' })
    } finally {
      setLoading(false)
    }
  }

  // ── Écrans de fin ─────────────────────────────────────────────
  if (result?.success) {
    return (
      <div role="alert" aria-live="polite" className="panel panel--accent" style={{ padding: '2.5rem 1.75rem', textAlign: 'center' }}>
        <span style={{ display: 'inline-grid', placeItems: 'center', width: 56, height: 56, borderRadius: '50%', background: 'var(--green-900)', color: 'var(--accent-300)', marginBottom: '1rem' }}>
          <IconCheck size={26} />
        </span>
        <p className="display display--sm" style={{ marginBottom: '0.5rem' }}>Demande envoyée</p>
        <p className="muted" style={{ maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.6 }}>{result.message}</p>
        {result.demo && (
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--ink-soft)', fontStyle: 'italic' }}>
            Mode démonstration — aucune donnée transmise à l&apos;entreprise.
          </p>
        )}
      </div>
    )
  }
  if (result && !result.success) {
    return (
      <div role="alert" aria-live="polite" className="alert" style={{ padding: '1.5rem' }}>
        <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>L&apos;envoi n&apos;a pas abouti</p>
        <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>{result.message}</p>
        <button type="button" className="btn btn--green" onClick={() => setResult(null)}>Réessayer</button>
      </div>
    )
  }

  const stepLabels = ['Votre besoin', 'Le projet', 'Vos coordonnées']
  const options = family ? OPTIONS[family] : []

  return (
    <form onSubmit={handleSubmit} noValidate ref={topRef} style={{ scrollMarginTop: '6rem' }}>
      <input type="text" name="website" tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} autoComplete="off" />

      {/* Progression */}
      <div className="steps" style={{ marginBottom: '1.75rem' }} aria-label={`Étape ${step} sur 3 : ${stepLabels[step - 1]}`}>
        {stepLabels.map((label, i) => {
          const n = (i + 1) as 1 | 2 | 3
          const state = step === n ? 'is-active' : step > n ? 'is-done' : ''
          return (
            <div key={label} style={{ display: 'contents' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className={`steps__dot ${state}`} aria-hidden="true">{step > n ? <IconCheck size={14} /> : n}</span>
                <span className="steps__label" style={{ opacity: step === n ? 1 : 0.55 }}>{label}</span>
              </div>
              {n < 3 && <span className="steps__line" style={{ ['--p' as string]: step > n ? 1 : 0 }} aria-hidden="true" />}
            </div>
          )
        })}
      </div>

      {hasErrors && (
        <div ref={errorSummaryRef} tabIndex={-1} role="alert" aria-live="assertive" className="alert" style={{ marginBottom: '1.25rem' }}>
          <strong>Quelques points à corriger :</strong>
          <ul>{Object.values(errors).filter(Boolean).map((e, i) => <li key={i}>{e}</li>)}</ul>
        </div>
      )}

      {/* ── Étape 1 : famille de besoin ───────────────────────── */}
      {step === 1 && (
        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend className="display display--sm" style={{ marginBottom: '0.4rem' }}>Que souhaitez-vous faire ?</legend>
          <p className="muted small" style={{ marginBottom: '1.25rem' }}>Un seul choix pour commencer, vous préciserez ensuite.</p>
          <div className="grid-3" style={{ gap: '0.75rem' }}>
            {FAMILIES.map((f) => (
              <label key={f.id} className={`family${family === f.id ? ' is-selected' : ''}`}>
                <input type="radio" name={`${uid}-family`} value={f.id} checked={family === f.id} onChange={() => pickFamily(f.id)} />
                <span className="family__icon">{f.icon}</span>
                <span className="family__title">{f.title}</span>
                <span className="family__desc">{f.desc}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* ── Étape 2 : détail du projet ────────────────────────── */}
      {step === 2 && family && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <p className="display display--sm">
              {family === 'creation' ? 'Créer' : family === 'entretien' ? 'Entretenir' : 'Construire'} — précisez votre besoin
            </p>
            <button type="button" onClick={() => { setStep(1); setErrors({}) }} className="link" style={{ fontSize: '0.85rem' }}>
              Changer
            </button>
          </div>

          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend className="field-label">Quelles prestations ? <span className="muted" style={{ fontWeight: 400 }}>(plusieurs choix possibles)</span></legend>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '0.6rem' }}>
              {options.map((opt) => {
                const checked = selectedTypes.includes(opt.id)
                return (
                  <label key={opt.id} className={`choice${checked ? ' is-selected' : ''}`}>
                    <input type="checkbox" checked={checked} onChange={() => toggleType(opt.id)} />
                    <span className="choice__icon">{opt.icon}</span>
                    <span className="choice__label">
                      {opt.label}
                      {opt.sub && <span className="choice__sub">{opt.sub}</span>}
                    </span>
                    <span className="choice__check"><IconCheck size={13} /></span>
                  </label>
                )
              })}
            </div>
            {errors.projectTypes && <span className="field-error" role="alert">{errors.projectTypes}</span>}
          </fieldset>

          {family === 'entretien' && (
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <legend className="field-label">À quel rythme ? <span className="muted" style={{ fontWeight: 400 }}>(facultatif)</span></legend>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {FREQUENCIES.map((f) => (
                  <label key={f.id} className={`pill${frequency === f.id ? ' pill--accent' : ''}`} style={{ cursor: 'pointer', position: 'relative' }}>
                    <input type="radio" name={`${uid}-freq`} value={f.id} checked={frequency === f.id} onChange={() => setFrequency(f.id)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
                    {frequency === f.id && <IconCheck size={12} />}
                    {f.label}
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <div className="grid-2" style={{ gap: '1rem' }}>
            <div>
              <label htmlFor={`${uid}-commune`} className="field-label">Commune du jardin</label>
              <div className="input-wrap">
                <IconPin size={18} />
                <input
                  id={`${uid}-commune`} type="text" className={`field-input${errors.commune ? ' error' : ''}`}
                  value={commune} onChange={(e) => { setCommune(e.target.value); clearError('commune') }}
                  placeholder="Ex. : Chessy-les-Mines" autoComplete="address-level2" aria-required="true"
                  aria-describedby={errors.commune ? `${uid}-commune-err` : undefined}
                />
              </div>
              {errors.commune && <span id={`${uid}-commune-err`} className="field-error" role="alert">{errors.commune}</span>}
            </div>
            <div>
              <label htmlFor={`${uid}-surface`} className="field-label">Surface approximative <span className="muted" style={{ fontWeight: 400 }}>(facultatif)</span></label>
              <div className="input-wrap">
                <IconRuler size={18} />
                <input id={`${uid}-surface`} type="text" className="field-input" value={surface} onChange={(e) => setSurface(e.target.value)} placeholder="Ex. : 300 m²" maxLength={60} />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor={`${uid}-timeline`} className="field-label">Quand souhaitez-vous commencer ? <span className="muted" style={{ fontWeight: 400 }}>(facultatif)</span></label>
            <div className="input-wrap">
              <IconClock size={18} />
              <select id={`${uid}-timeline`} className="field-input" value={timeline} onChange={(e) => setTimeline(e.target.value)}>
                {TIMELINES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
              </select>
            </div>
          </div>

          <button type="button" onClick={goStep3} className="btn btn--green btn--lg" style={{ width: '100%' }}>
            Continuer <span className="btn-icon"><IconArrow size={13} /></span>
          </button>
        </div>
      )}

      {/* ── Étape 3 : coordonnées ─────────────────────────────── */}
      {step === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p className="display display--sm">Comment vous joindre ?</p>

          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend className="field-label">Vous préférez être recontacté par</legend>
            <div className="segmented" role="radiogroup">
              {([['telephone', 'Téléphone', <IconPhone key="p" size={16} />], ['email', 'E-mail', <IconMail key="m" size={16} />]] as const).map(([mode, label, icon]) => (
                <label key={mode} className={contactMode === mode ? 'is-selected' : ''}>
                  <input type="radio" name={`${uid}-mode`} value={mode} checked={contactMode === mode} onChange={() => setContactMode(mode)} />
                  {icon} {label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid-2" style={{ gap: '1rem' }}>
            <div>
              <label htmlFor={`${uid}-name`} className="field-label">Nom et prénom</label>
              <div className="input-wrap">
                <IconUser size={18} />
                <input id={`${uid}-name`} type="text" className={`field-input${errors.name ? ' error' : ''}`} value={name}
                  onChange={(e) => { setName(e.target.value); clearError('name') }} autoComplete="name" aria-required="true"
                  aria-describedby={errors.name ? `${uid}-name-err` : undefined} />
              </div>
              {errors.name && <span id={`${uid}-name-err`} className="field-error" role="alert">{errors.name}</span>}
            </div>

            {contactMode === 'telephone' ? (
              <div>
                <label htmlFor={`${uid}-phone`} className="field-label">Téléphone</label>
                <div className="input-wrap">
                  <IconPhone size={18} />
                  <input id={`${uid}-phone`} type="tel" className={`field-input${errors.phone ? ' error' : ''}`} value={phone}
                    onChange={(e) => { setPhone(e.target.value); clearError('phone') }} autoComplete="tel" inputMode="tel" aria-required="true"
                    placeholder="06 00 00 00 00" aria-describedby={errors.phone ? `${uid}-phone-err` : undefined} />
                </div>
                {errors.phone && <span id={`${uid}-phone-err`} className="field-error" role="alert">{errors.phone}</span>}
              </div>
            ) : (
              <div>
                <label htmlFor={`${uid}-email`} className="field-label">Adresse e-mail</label>
                <div className="input-wrap">
                  <IconMail size={18} />
                  <input id={`${uid}-email`} type="email" className={`field-input${errors.email ? ' error' : ''}`} value={email}
                    onChange={(e) => { setEmail(e.target.value); clearError('email') }} autoComplete="email" inputMode="email" aria-required="true"
                    placeholder="vous@exemple.fr" aria-describedby={errors.email ? `${uid}-email-err` : undefined} />
                </div>
                {errors.email && <span id={`${uid}-email-err`} className="field-error" role="alert">{errors.email}</span>}
              </div>
            )}
          </div>

          <div>
            <label htmlFor={`${uid}-message`} className="field-label">Un mot sur votre projet <span className="muted" style={{ fontWeight: 400 }}>(facultatif)</span></label>
            <textarea id={`${uid}-message`} className="field-input" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} maxLength={2000}
              style={{ resize: 'vertical', minHeight: 96 }} placeholder="Terrain en pente, accès, contraintes, envies…" />
          </div>

          <CaptchaField key={captchaKey} id={`${uid}-captcha`} value={captchaAnswer}
            onChange={(v) => { setCaptchaAnswer(v); clearError('captchaAnswer') }} onTokenChange={setCaptchaToken} error={errors.captchaAnswer} />

          <p className="small muted" style={{ lineHeight: 1.5 }}>
            Vos coordonnées servent uniquement à répondre à votre demande.{' '}
            <a href="/confidentialite/" className="link" style={{ fontWeight: 500 }}>Politique de confidentialité</a>
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="button" onClick={() => { setStep(2); setErrors({}) }} className="btn btn--ghost">Retour</button>
            <button type="submit" className="btn btn--accent btn--lg" style={{ flex: 1, minWidth: 200 }} disabled={loading}>
              {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
              {!loading && <span className="btn-icon"><IconArrow size={13} /></span>}
            </button>
          </div>
        </div>
      )}

      {/* Récapitulatif discret (étape 3) */}
      {step === 3 && (
        <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }} aria-label="Récapitulatif">
          {family && <span className="pill"><IconHome size={14} /> {FAMILIES.find((f) => f.id === family)?.title}</span>}
          {selectedTypes.map((t) => <span key={t} className="pill pill--accent">{options.find((o) => o.id === t)?.label}</span>)}
          {commune && <span className="pill"><IconPin size={14} /> {commune}</span>}
        </div>
      )}
    </form>
  )
}
