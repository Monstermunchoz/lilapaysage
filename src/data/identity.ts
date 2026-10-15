import type { CompanyIdentity } from '@/lib/types'

/**
 * Données factuelles de l'entreprise.
 * Sources : Pappers, annuaire-entreprises.data.gouv.fr, Societe.com,
 * Kompass, Pages Jaunes (relevé du 15 octobre 2026).
 * Les champs marqués « à confirmer » ne doivent pas être publiés
 * sans validation préalable du client.
 */
export const identity: CompanyIdentity = {
  brandName: 'Lila Paysage',
  legalName: 'LILA PAYSAGE',
  siren: '529 886 673',
  siret: '529 886 673 00027',
  rcs: '529 886 673 R.C.S. Villefranche-Tarare',
  vatNumber: 'FR72529886673',   // status: à vérifier auprès de VIES
  activityStart: '17 janvier 2011',
  apeCode: '81.30Z',
  apeLabel: 'Services d\'aménagement paysager',
  manager: 'Jérôme Diasparra',

  // Pages Jaunes (portable) — à confirmer comme numéro principal
  phone: '06 50 42 81 20',
  phoneLink: 'tel:+33650428120',
  // Kompass (fixe) — à confirmer
  phoneSecondary: '04 72 17 08 55',
  phoneSecondaryLink: 'tel:+33472170855',

  email: 'lilapaysage@hotmail.fr',  // Kompass — à confirmer
  domain: 'lila-paysage.fr',        // domaine cible, à confirmer (non acheté)

  headquarters: {
    label: 'Siège social',
    lines: [
      '8 impasse du Clos de la Bergerie',
      '69380 Chessy-les-Mines',
      'France',
    ],
    mapLink: 'https://maps.google.com/?q=8+impasse+du+Clos+de+la+Bergerie,+69380+Chessy',
  },

  // Territoires plausibles autour de Chessy-les-Mines — à confirmer avec le client
  territories: [
    'Chessy-les-Mines',
    'Vallée d\'Azergues',
    'Beaujolais',
    'Villefranche-sur-Saône',
    'Ouest lyonnais',
    'Métropole de Lyon',
  ],
}

/**
 * Éléments à confirmer avec le client avant publication.
 * Ne pas afficher dans les pages commerciales sans validation.
 */
export const pendingConfirmation = {
  servicesALaPersonne: true,   // agrément « services à la personne » non vérifié : formulation conditionnelle uniquement
  decennaleInsurance: true,    // assureur / numéro à confirmer
  teamSize: true,              // 1 à 2 salariés (donnée 2022) — ne pas afficher de compteur
  phoneNumbers: true,          // deux numéros relevés sur des annuaires différents
}

export const commitments = {
  servicesALaPersonne: {
    logo: '/images/services-a-la-personne.jpg',
    title: 'Services à la personne',
    text: 'L\'entretien courant de votre jardin peut ouvrir droit à un avantage fiscal, selon les conditions en vigueur et sous réserve d\'agrément. Nous vous le précisons lors du premier échange.',
  },
}

/**
 * Mentions légales – données manquantes à compléter.
 * À ne pas exposer publiquement dans cet état.
 */
export const legalPending = {
  publisher: 'Jérôme Diasparra',    // à confirmer : responsable de publication
  hosting: null,                     // hébergeur : à renseigner
  privacyContact: null,              // coordonnées contact RGPD : à définir
  cookiePolicy: null,                // politique cookies : pas de traceurs en démo
  mediationInfo: null,               // médiation consommateurs : à renseigner
}
