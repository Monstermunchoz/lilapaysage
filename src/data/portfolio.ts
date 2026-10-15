import type { PortfolioItem } from '@/lib/types'

/**
 * Photos issues du compte Instagram public @lila.paysage (640 px).
 * Les titres décrivent ce qui est visible ; aucune localisation, date de
 * chantier ni surface n'est affirmée. Demander les originaux haute
 * définition au client avant la mise en production.
 */
const IG = '/images/instagram'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'allee-pavee',
    title: 'Allée pavée et pelouse',
    description: 'Entrée de maison : allée en pavés, bordures et pelouse fraîchement installée.',
    image: `${IG}/allee-pavee.jpg`,
    imageAlt: 'Allée pavée devant une maison, bordée d\'une pelouse et d\'arbustes',
    imageWidth: 640, imageHeight: 480,
    categories: ['allees-acces', 'pelouses-gazon'],
  },
  {
    id: 'gazon-cloture',
    title: 'Pelouse et clôture',
    description: 'Pelouse en plaques posée sur un terrain nivelé, le long d\'une clôture.',
    image: `${IG}/gazon-cloture.jpg`,
    imageAlt: 'Pelouse verte bien tondue le long d\'une clôture',
    imageWidth: 512, imageHeight: 640,
    categories: ['pelouses-gazon', 'maconnerie-clotures'],
  },
  {
    id: 'massif-fleuri',
    title: 'Massif fleuri en terrasses',
    description: 'Massif de vivaces couvre-sol sur des paliers retenus par des traverses bois.',
    image: `${IG}/massif-fleuri.jpg`,
    imageAlt: 'Massif de fleurs roses sur des terrasses en bois',
    imageWidth: 640, imageHeight: 640,
    categories: ['jardins-plantations'],
  },
  {
    id: 'olivier',
    title: 'Plantation d\'un olivier',
    description: 'Mise en place d\'un olivier adulte, sujet remarquable au cœur du jardin.',
    image: `${IG}/olivier.jpg`,
    imageAlt: 'Olivier adulte planté devant un ciel bleu',
    imageWidth: 512, imageHeight: 640,
    categories: ['jardins-plantations'],
  },
  {
    id: 'dallage-chantier',
    title: 'Dallage le long de la maison',
    description: 'Préparation et pose d\'un dallage grand format contre un mur en pierre.',
    image: `${IG}/dallage-chantier.jpg`,
    imageAlt: 'Chantier de dallage en cours le long d\'une maison, mur en pierre',
    imageWidth: 640, imageHeight: 640,
    categories: ['terrasses-dallages'],
  },
  {
    id: 'terrain-foot',
    title: 'Mini-terrain de foot en gazon synthétique',
    description: 'Gazon synthétique posé sur un terrain préparé, avec ses cages.',
    image: `${IG}/terrain-foot-synthetique.jpg`,
    imageAlt: 'Petit terrain de football en gazon synthétique dans un jardin',
    imageWidth: 640, imageHeight: 640,
    categories: ['pelouses-gazon'],
  },
  {
    id: 'pelouse-terrasse-bois',
    title: 'Pelouse, haies et terrasse bois',
    description: 'Jardin entretenu : pelouse, haies taillées et terrasse en bois.',
    image: `${IG}/pelouse-terrasse-bois.jpg`,
    imageAlt: 'Pelouse entretenue bordée de haies avec une terrasse en bois',
    imageWidth: 640, imageHeight: 480,
    categories: ['pelouses-gazon', 'jardins-plantations'],
  },
  {
    id: 'cour-gazon',
    title: 'Cour engazonnée',
    description: 'Cour de maison en pierre transformée en pelouse.',
    image: `${IG}/cour-engazonnee.jpg`,
    imageAlt: 'Pelouse dans la cour d\'une maison en pierre',
    imageWidth: 640, imageHeight: 479,
    categories: ['pelouses-gazon'],
  },
  {
    id: 'cypres-taille',
    title: 'Alignement de cyprès taillés',
    description: 'Cyprès et arbustes taillés en topiaire sur une grande pelouse.',
    image: `${IG}/cypres-tailles.jpg`,
    imageAlt: 'Alignement de cyprès taillés sur une pelouse',
    imageWidth: 512, imageHeight: 640,
    categories: ['jardins-plantations'],
  },
]

export const portfolioCategories = [
  { id: 'tous' as const, label: 'Tout' },
  { id: 'jardins-plantations' as const, label: 'Jardins et plantations' },
  { id: 'pelouses-gazon' as const, label: 'Pelouses et gazon' },
  { id: 'terrasses-dallages' as const, label: 'Terrasses et dallages' },
  { id: 'allees-acces' as const, label: 'Allées et accès' },
  { id: 'maconnerie-clotures' as const, label: 'Maçonnerie et clôtures' },
]
