import type { Article } from '@/lib/article-types'
import calendrierEntretienJardin from './calendrier-entretien-jardin'
import creditImpotEntretienJardin from './credit-impot-entretien-jardin'
import quandTaillerHaie from './quand-tailler-haie'
import gazonPlaquesOuSeme from './gazon-plaques-ou-seme'
import arrosageAutomatiqueJardin from './arrosage-automatique-jardin'
import plantesJardinSecRhone from './plantes-jardin-sec-rhone'
import murSoutenementJardin from './mur-soutenement-jardin'
import terrassePierreBoisGres from './terrasse-pierre-bois-gres'
import elagageArbreReglementation from './elagage-arbre-reglementation'
import haieBriseVueEssences from './haie-brise-vue-essences'
import gazonSynthetiqueAvantages from './gazon-synthetique-avantages'
import preparerJardinHiver from './preparer-jardin-hiver'
import choisirPaysagisteBeaujolais from './choisir-paysagiste-beaujolais'
import clotureJardinReglementation from './cloture-jardin-reglementation'
import planterOlivierRhone from './planter-olivier-rhone'
import desherbageNaturelJardin from './desherbage-naturel-jardin'

/** Ordre d'affichage : du plus utile au plus spécifique */
export const articles: Article[] = [
  calendrierEntretienJardin,
  creditImpotEntretienJardin,
  quandTaillerHaie,
  gazonPlaquesOuSeme,
  arrosageAutomatiqueJardin,
  plantesJardinSecRhone,
  murSoutenementJardin,
  terrassePierreBoisGres,
  elagageArbreReglementation,
  haieBriseVueEssences,
  gazonSynthetiqueAvantages,
  preparerJardinHiver,
  choisirPaysagisteBeaujolais,
  clotureJardinReglementation,
  planterOlivierRhone,
  desherbageNaturelJardin,
]

export const articleCategories = ['Entretien', 'Création', 'Aménagement', 'Réglementation', 'Guides'] as const

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
