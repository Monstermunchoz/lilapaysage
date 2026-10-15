/**
 * Logo Lila Paysage, redessiné en SVG d'après le visuel du compte Instagram
 * (trois cyprès, deux vagues de pelouse, « LILA » vert tilleul, « PAYSAGE » gris).
 * Le numéro de téléphone présent sur le visuel d'origine est volontairement omis.
 * À remplacer par le fichier vectoriel officiel si le client le fournit.
 */
export function Logo({ onDark = false, size = 'md' }: { onDark?: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const h = size === 'lg' ? 64 : size === 'sm' ? 36 : 48
  const w = Math.round(h * 3.4)
  const lime = '#9CC13A'
  const olive = onDark ? '#B9D54A' : '#474F1C'
  const grey = onDark ? 'rgba(255,255,255,0.88)' : '#58595B'
  return (
    <svg width={w} height={h} viewBox="0 0 340 100" role="img" aria-label="Lila Paysage" style={{ display: 'block' }}>
      {/* Wordmark : largeur forcée pour ne jamais chevaucher les arbres */}
      <text x="2" y="56" textLength="222" lengthAdjust="spacingAndGlyphs" fontFamily="var(--font-body), system-ui, sans-serif" fontWeight={700} fontSize="40">
        <tspan fill={lime}>LILA</tspan>
        <tspan fill={grey}> PAYSAGE</tspan>
      </text>
      {/* Cyprès */}
      <g fill={olive}>
        <ellipse cx="252" cy="60" rx="9" ry="21" />
        <ellipse cx="280" cy="53" rx="13" ry="29" />
        <ellipse cx="316" cy="44" rx="18" ry="39" />
      </g>
      {/* Pelouse : deux vagues */}
      <path d="M0 86 C 90 72, 205 70, 340 86 C 235 80, 110 82, 0 94 Z" fill={olive} />
      <path d="M0 92 C 80 84, 150 84, 205 96 C 140 92, 70 94, 0 100 Z" fill={lime} />
    </svg>
  )
}
