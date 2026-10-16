import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileBar } from '@/components/layout/MobileBar'
import { DemoBanner } from '@/components/layout/DemoBanner'
import { siteConfig } from '@/data/config'
import { identity } from '@/data/identity'

// Polices servies localement (fichiers dans src/fonts, aucun appel à Google Fonts)
const manrope = localFont({
  src: [{ path: '../fonts/manrope-latin-wght-normal.woff2', weight: '200 800', style: 'normal' }],
  display: 'swap',
  variable: '--font-manrope',
})

// Fraunces figée en taille optique « titre » (opsz 72) : jambages (j, g, p) pleins, graisses 500–600, sous-ensemble latin
const fraunces = localFont({
  src: [{ path: '../fonts/fraunces-display-normal.woff2', weight: '500 600', style: 'normal' }],
  display: 'swap',
  variable: '--font-fraunces',
})

// Italique : quelques mots seulement → pas de préchargement (n'entre pas en concurrence avec l'image principale)
const frauncesItalic = localFont({
  src: [{ path: '../fonts/fraunces-display-italic.woff2', weight: '500 600', style: 'italic' }],
  display: 'swap',
  preload: false,
  variable: '--font-fraunces-italic',
})

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: {
    default: `Paysagiste à Chessy-les-Mines, Beaujolais | ${identity.brandName}`,
    template: `%s | ${identity.brandName}`,
  },
  description: 'Création, entretien et maçonnerie paysagère à Chessy-les-Mines, dans le Beaujolais, la vallée d\'Azergues et l\'Ouest lyonnais.',
  robots: siteConfig.indexable
    ? { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
    : { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: identity.brandName,
  },
  icons: {
    icon: '/favicon.ico',
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#2A3412',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${manrope.variable} ${fraunces.variable} ${frauncesItalic.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {siteConfig.demoMode && <DemoBanner />}
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  )
}
