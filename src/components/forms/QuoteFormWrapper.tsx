import { Suspense } from 'react'
import { QuoteForm } from './QuoteForm'
import { QuoteFormPreset } from './QuoteFormPreset'

// QuoteFormPreset lit les searchParams : il doit être dans une frontière Suspense
export function QuoteFormWrapper({ embedded = false }: { embedded?: boolean }) {
  return (
    <Suspense fallback={<QuoteForm embedded={embedded} />}>
      <QuoteFormPreset embedded={embedded} />
    </Suspense>
  )
}
