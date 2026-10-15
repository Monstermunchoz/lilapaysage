import type { SVGProps } from 'react'

/**
 * Jeu d'icônes trait fin (24 px), servies inline — aucune dépendance.
 * Toutes sont décoratives (aria-hidden) : le texte voisin porte le sens.
 */
type P = SVGProps<SVGSVGElement> & { size?: number }

function base({ size = 20, ...rest }: P) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...rest,
  }
}

export const IconLeaf = (p: P) => (
  <svg {...base(p)}><path d="M4 20c0-8 4-14 16-16-1 10-6 15-14 15" /><path d="M4 20c3-5 7-9 12-12" /></svg>
)
export const IconSprout = (p: P) => (
  <svg {...base(p)}><path d="M12 21v-8" /><path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6Z" /><path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" /><path d="M6 21h12" /></svg>
)
export const IconGrass = (p: P) => (
  <svg {...base(p)}><path d="M3 20h18" /><path d="M6 20c0-5 1-9 3-12" /><path d="M10 20c0-4 1-8 2-11" /><path d="M14 20c0-5 1-8 4-11" /><path d="M18 20c0-3 .5-6 2-8" /></svg>
)
export const IconDrop = (p: P) => (
  <svg {...base(p)}><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" /><path d="M9 14a3 3 0 0 0 3 3" /></svg>
)
export const IconExcavator = (p: P) => (
  <svg {...base(p)}><path d="M3 18h12" /><circle cx="6" cy="18" r="2" /><circle cx="12" cy="18" r="2" /><path d="M5 14h8l1-4H7l-2 4Z" /><path d="M13 10l4-5 3 2-3 5" /><path d="M17 12l3 2-1 3" /></svg>
)
export const IconMower = (p: P) => (
  <svg {...base(p)}><path d="M4 16h11a3 3 0 0 1 3 3v1" /><circle cx="6" cy="19" r="2" /><circle cx="15" cy="19" r="2" /><path d="M4 16V9h9l2 7" /><path d="M13 9l5-5 2 2-3 3" /></svg>
)
export const IconShears = (p: P) => (
  <svg {...base(p)}><circle cx="7" cy="18" r="3" /><circle cx="17" cy="18" r="3" /><path d="M9 16 19 4" /><path d="M15 16 5 4" /></svg>
)
export const IconTree = (p: P) => (
  <svg {...base(p)}><path d="M12 21v-5" /><path d="M8 16h8" /><path d="M12 3 6 11h3l-3 5h12l-3-5h3L12 3Z" /></svg>
)
export const IconCalendar = (p: P) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18" /><path d="M8 3v4M16 3v4" /><path d="M8 15h3" /></svg>
)
export const IconBricks = (p: P) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M3 14h18" /><path d="M8 5v5M14 5v5M11 10v4M17 10v4M8 14v5M14 14v5" /></svg>
)
export const IconStairs = (p: P) => (
  <svg {...base(p)}><path d="M3 20h4v-4h4v-4h4V8h4" /><path d="M3 20V4" /></svg>
)
export const IconTerrace = (p: P) => (
  <svg {...base(p)}><rect x="3" y="12" width="18" height="8" rx="1.5" /><path d="M3 16h18M9 12v8M15 12v8" /><path d="M8 12V8l4-4 4 4v4" /></svg>
)
export const IconFence = (p: P) => (
  <svg {...base(p)}><path d="M5 20V8l2-3 2 3v12M15 20V8l2-3 2 3v12" /><path d="M3 11h18M3 16h18" /></svg>
)
export const IconPath = (p: P) => (
  <svg {...base(p)}><path d="M4 20c5-2 3-9 8-10s4-6 8-7" /><path d="M9 20c3-1 2-5 5-6" /></svg>
)
export const IconChat = (p: P) => (
  <svg {...base(p)}><path d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-5 4V6Z" /><path d="M8 9h8M8 12h5" /></svg>
)
export const IconPhone = (p: P) => (
  <svg {...base(p)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
)
export const IconMail = (p: P) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
)
export const IconPin = (p: P) => (
  <svg {...base(p)}><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
)
export const IconUser = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
)
export const IconCheck = (p: P) => (
  <svg {...base({ ...p, strokeWidth: 2.5 })}><path d="m5 12 4.5 4.5L19 7" /></svg>
)
export const IconArrow = (p: P) => (
  <svg {...base({ ...p, strokeWidth: 2 })}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const IconRefresh = (p: P) => (
  <svg {...base(p)}><path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 3v6h-6" /></svg>
)
export const IconRuler = (p: P) => (
  <svg {...base(p)}><rect x="3" y="8" width="18" height="8" rx="2" transform="rotate(-45 12 12)" /><path d="m8 11 1.5 1.5M11 8l1.5 1.5M14 5l1.5 1.5" /></svg>
)
export const IconClock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const IconSparkle = (p: P) => (
  <svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
)
export const IconHome = (p: P) => (
  <svg {...base(p)}><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>
)
export const IconShield = (p: P) => (
  <svg {...base(p)}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
)
