import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Toutes les URL internes se terminent par « / » : une seule forme canonique
  trailingSlash: true,

  images: {
    remotePatterns: [],                 // images locales uniquement
    formats: ['image/avif', 'image/webp'],
    qualities: [55, 65, 75],
    deviceSizes: [360, 414, 640, 828, 1080, 1280, 1920],
    imageSizes: [48, 96, 160, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // CSS inliné dans le <head> : supprime la requête bloquante (meilleur FCP/LCP)
  experimental: { inlineCss: true },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig
