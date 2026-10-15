import type { Metadata } from 'next'
import { PortfolioGrid } from '@/components/ui/PortfolioGrid'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Jardins, pelouses, massifs, allées et dallages réalisés par Lila Paysage à Chessy-les-Mines et dans le Beaujolais.',
}

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Réalisations' }]}
        kicker="Réalisations"
        title={<>Des jardins <em>vrais</em>, photographiés sur place.</>}
        lead="Pelouses, massifs, allées, dallages : un aperçu de ce que nous faisons, sans retouche. Filtrez par type de travaux."
      />
      <div className="container">
        <PortfolioGrid />
      </div>
    </>
  )
}
