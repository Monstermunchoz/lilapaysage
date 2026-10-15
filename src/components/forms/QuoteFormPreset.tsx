'use client'

import { useSearchParams } from 'next/navigation'
import { QuoteForm } from './QuoteForm'
import { ALLOWED_URL_PRESET_TYPES } from '@/data/config'
import type { ProjectType } from '@/lib/types'

export function QuoteFormPreset({ embedded = false }: { embedded?: boolean }) {
  const searchParams = useSearchParams()
  const rawType = searchParams.get('type')
  // Liste blanche uniquement – jamais de valeur libre issue de l'URL
  const presetType: ProjectType | undefined =
    ALLOWED_URL_PRESET_TYPES.includes(rawType as ProjectType)
      ? (rawType as ProjectType)
      : undefined

  return <QuoteForm presetType={presetType} embedded={embedded} />
}
