import type { Article } from '@/lib/article-types'

const article: Article = {
  slug: 'cloture-jardin-reglementation',
  title: "Clôture de jardin : règles, autorisations et 7 matériaux, le guide complet",
  metaTitle: "Clôture de jardin : règles, autorisations et matériaux",
  metaDescription: "Clôture de jardin : quand faut-il une déclaration préalable, que dit le PLU, quelles hauteurs et distances respecter, quel matériau choisir ? Le guide.",
  focusKeyword: 'clôture de jardin',
  secondaryKeywords: [
    'réglementation clôture',
    'déclaration préalable clôture',
    'hauteur clôture',
    'clôture mitoyenne',
    'PLU clôture',
    'clôture Beaujolais',
  ],
  category: 'Réglementation',
  excerpt: "Déclaration préalable, PLU, hauteur, mitoyenneté, haies et matériaux : tout ce qu'il faut vérifier avant d'installer une clôture de jardin, expliqué simplement.",
  publishedAt: '2026-10-16',
  updatedAt: '2026-10-16',
  cover: {
    src: '/images/instagram/gazon-cloture.jpg',
    alt: "Clôture de jardin en limite de terrain avec un gazon fraîchement posé le long du grillage",
  },
  blocks: [
    {
      type: 'p',
      text: "Installer une **clôture de jardin** semble simple : on choisit un modèle, on plante des poteaux, et le tour est joué. En réalité, quelques règles d'urbanisme et de voisinage s'appliquent, et les ignorer peut coûter cher : démontage, conflit avec un voisin, travaux à refaire.",
    },
    {
      type: 'p',
      text: "Bonne nouvelle : dans la majorité des cas, aucune autorisation n'est nécessaire. Mais il existe des exceptions, des règles locales propres à chaque commune et des distances à respecter, notamment pour les haies. Dans le Beaujolais comme dans l'Ouest lyonnais, chaque commune a son propre document d'urbanisme.",
    },
    {
      type: 'p',
      text: "Ce guide fait le point sur la réglementation, les démarches et les matériaux, pour que votre projet se passe sans mauvaise surprise. Les règles citées s'appuient sur les fiches officielles de service-public.fr.",
    },

    { type: 'h2', text: "Clôture de jardin : faut-il une autorisation ?" },
    {
      type: 'p',
      text: "Le principe est rassurant : clôturer son terrain ne demande en général aucune formalité, que vous soyez en ville ou à la campagne. Le Code civil reconnaît d'ailleurs à tout propriétaire le droit de se clore (article 647), sous réserve de ne pas bloquer une servitude de passage.",
    },
    {
      type: 'p',
      text: "Ce principe connaît toutefois des exceptions importantes. Selon la fiche [Quelles sont les règles pour construire ou installer une clôture ?](https://www.service-public.gouv.fr/particuliers/vosdroits/F3131) de service-public.fr, une déclaration préalable est nécessaire dans plusieurs situations.",
    },
    { type: 'h3', text: "Les cas où la déclaration préalable est obligatoire" },
    {
      type: 'ul',
      items: [
        "Votre terrain se trouve dans un **secteur protégé** (par exemple aux abords d'un monument historique ou dans un site patrimonial).",
        "Votre terrain est situé dans un **périmètre délimité par le PLU**, comme certaines zones naturelles ou forestières.",
        "Votre **commune a décidé de soumettre les clôtures à déclaration** sur tout ou partie de son territoire.",
        "Vous construisez un **mur de clôture de 2 mètres ou plus**.",
        "Vous installez une **clôture électrifiée**.",
      ],
    },
    {
      type: 'p',
      text: "À noter : un mur de soutènement, qui retient la terre d'un talus, est dispensé de formalité, sauf en secteur protégé. Si votre projet mêle clôture et soutènement, notre article sur le [mur de soutènement pour terrain en pente](/conseils/mur-soutenement-jardin/) vous aidera à y voir clair.",
    },
    { type: 'h3', text: "Comment se déroule la déclaration préalable" },
    {
      type: 'p',
      text: "Le dossier se dépose en mairie, sur papier ou en ligne selon les modalités de la commune. Le délai d'instruction est en principe d'un mois à partir d'un dossier complet. En secteur protégé, la mairie vous notifie un délai plus long, de deux mois en général.",
    },
    {
      type: 'p',
      text: "Sans réponse dans le délai, le silence vaut en principe non-opposition, avec certaines exceptions en secteur protégé. Une fois l'accord obtenu, un panneau doit être affiché sur le terrain, visible depuis la voie, pendant toute la durée des travaux. Le détail figure sur la [fiche service-public.fr consacrée à la déclaration préalable](https://www.service-public.gouv.fr/particuliers/vosdroits/F17578).",
    },

    { type: 'h2', text: "PLU, lotissement, copropriété : les règles locales" },
    {
      type: 'p',
      text: "Même sans déclaration préalable, votre clôture de jardin doit respecter le plan local d'urbanisme (PLU) ou les usages locaux. Ces documents peuvent fixer une hauteur maximale, imposer un aspect, des couleurs, un type de matériau, ou exiger une transparence pour laisser passer la petite faune.",
    },
    {
      type: 'p',
      text: "Si vous habitez un lotissement, le cahier des charges peut ajouter ses propres règles. En copropriété, c'est le règlement de copropriété qu'il faut consulter. Ces règles s'additionnent : la plus stricte s'impose.",
    },
    {
      type: 'tip',
      title: 'Le bon réflexe avant de commander',
      text: "Appelez ou passez au service urbanisme de votre mairie avec un croquis de votre projet : hauteur, matériau, couleur, emplacement. Demandez si votre terrain est en secteur protégé et si la commune soumet les clôtures à déclaration. Cette vérification prend quelques minutes et évite de devoir démonter une clôture déjà posée.",
    },
    {
      type: 'p',
      text: "Dans les villages de caractère du Beaujolais et des Pierres Dorées, les règles d'aspect sont souvent particulièrement suivies : la clôture participe au paysage de la rue. Il est donc utile de connaître le règlement de votre zone avant même de choisir un matériau.",
    },

    { type: 'h2', text: "Hauteur, mitoyenneté, bornage : ce que dit le Code civil" },
    { type: 'h3', text: "Hauteur d'un mur de clôture" },
    {
      type: 'p',
      text: "En l'absence de règle locale, la loi fixe pour un mur de clôture une hauteur **minimale**, chaperon compris : 2,60 m dans une commune de moins de 50 000 habitants, 3,20 m dans une commune de 50 000 habitants ou plus (article 663 du Code civil). Il ne s'agit pas d'une hauteur maximale.",
    },
    {
      type: 'p',
      text: "En pratique, ce sont surtout le PLU et les usages locaux qui encadrent la hauteur. Et n'oubliez pas qu'un mur de 2 m ou plus nécessite une déclaration préalable.",
    },
    { type: 'h3', text: "Clôture de jardin privative ou mitoyenne" },
    {
      type: 'p',
      text: "Vous pouvez implanter la clôture en retrait de la limite, entièrement chez vous : elle est alors privative, vous la financez et l'entretenez seul. Vous pouvez aussi la construire sur la limite séparative avec l'accord de votre voisin : elle devient mitoyenne, et les frais de construction et d'entretien sont partagés.",
    },
    {
      type: 'p',
      text: "Dans tous les cas, pour une clôture de jardin comme pour une haie en limite, mettez-vous d'accord par écrit avant les travaux. Un simple échange de courriers sur l'emplacement, le matériau et la répartition des frais évite bien des malentendus.",
    },
    { type: 'h3', text: "Bornage, eaux de pluie et servitudes" },
    {
      type: 'p',
      text: "Avant de clôturer, il est conseillé de faire borner le terrain pour connaître précisément la limite. La clôture ne doit pas non plus barrer un passage existant ni gêner l'écoulement naturel des eaux de pluie (article 640 du Code civil), un point important sur les terrains en pente du secteur.",
    },
    {
      type: 'p',
      text: "En bordure de voie publique, l'alignement doit être vérifié auprès du gestionnaire de la voirie. En bordure d'un cours d'eau, une distance minimale de 6 m est en principe à respecter : à garder en tête si votre terrain longe l'Azergues ou l'un de ses affluents.",
    },

    { type: 'h2', text: "Haie, grillage, mur : les règles propres à chaque clôture" },
    { type: 'h3', text: "La haie végétale" },
    {
      type: 'p',
      text: "Une haie est une clôture à part entière, avec ses propres distances, mesurées depuis le milieu du tronc. Une haie qui ne dépasse pas 2 m de haut doit être plantée à au moins 0,5 m de la limite. Au-delà de 2 m de haut, il faut planter à au moins 2 m de la limite.",
    },
    {
      type: 'p',
      text: "Pour choisir les arbustes adaptés à votre terrain et à l'effet recherché, consultez notre guide des [essences pour une haie brise-vue](/conseils/haie-brise-vue-essences/).",
    },
    { type: 'h3', text: "Grillage, palissade, brise-vue" },
    {
      type: 'p',
      text: "Pour les autres clôtures, la hauteur est fixée par le PLU ou les usages locaux. En zone naturelle ou forestière, lorsque le terrain jouxte une habitation, la clôture doit laisser un passage de 30 cm au-dessus du sol et ne pas dépasser 1,20 m, pour permettre la libre circulation de la faune sauvage.",
    },
    {
      type: 'table',
      head: ['Type de clôture', 'Formalité', 'Points de vigilance'],
      rows: [
        ['Grillage, panneaux, palissade', 'Aucune en principe, déclaration préalable dans les cas listés plus haut', 'Hauteur et aspect fixés par le PLU'],
        ['Mur de clôture de moins de 2 m', 'Aucune en principe, sauf secteur protégé ou commune soumise à déclaration', 'Fondations, chaperon, écoulement des eaux'],
        ['Mur de clôture de 2 m ou plus', 'Déclaration préalable obligatoire', 'Règles du PLU, accord du voisin si mitoyen'],
        ['Haie végétale', 'Aucune', '0,5 m de la limite si haie de 2 m maximum, 2 m de la limite au-delà'],
        ['Clôture électrifiée', 'Déclaration préalable obligatoire', 'Attestation de conformité du matériel'],
        ['Mur de soutènement', 'Aucune, sauf secteur protégé', 'Calcul de la poussée des terres et drainage'],
      ],
    },

    { type: 'h2', text: "Quels matériaux pour une clôture de jardin ?" },
    {
      type: 'p',
      text: "Une fois la réglementation vérifiée, le choix du matériau d'une clôture de jardin dépend de trois questions : que voulez-vous cacher ou protéger, combien d'entretien acceptez-vous, et quel style s'accorde avec votre maison et votre rue ?",
    },
    {
      type: 'ol',
      items: [
        "**Le grillage souple** : économique et discret, il délimite sans fermer la vue. Il gagne à être doublé d'une haie.",
        "**Les panneaux rigides en treillis soudé** : plus tenus et plus durables qu'un grillage souple, ils se combinent avec des lames d'occultation.",
        "**Le bois** : chaleureux et naturel, il demande un entretien régulier (lasure, saturateur) selon l'essence et l'exposition.",
        "**Le composite** : il imite le bois avec moins d'entretien, mais son aspect reste plus uniforme.",
        "**L'aluminium ou l'acier** : moderne et robuste, il s'accorde souvent avec un portail assorti.",
        "**Le mur ou muret maçonné** : enduit ou en pierre, il offre la meilleure intimité et une grande longévité. Dans le Beaujolais, la pierre dorée locale s'intègre naturellement au paysage.",
        "**Le gabion** : des cages métalliques remplies de pierres, solides et contemporaines, qui peuvent aussi servir de petit soutènement.",
      ],
    },
    {
      type: 'image',
      src: '/images/instagram/cypres-tailles.jpg',
      alt: "Alignement de cyprès taillés en limite d'une grande pelouse",
      caption: "Une haie taillée peut jouer le rôle de clôture végétale, à condition de respecter les distances de plantation.",
    },
    {
      type: 'p',
      text: "Souvent, la meilleure clôture de jardin combine deux éléments : un muret bas surmonté d'un panneau, ou un grillage rigide doublé d'une haie fleurie. Vous obtenez à la fois la sécurité, l'intimité et un jardin plus vivant.",
    },

    { type: 'h2', text: "Les 7 étapes d'un projet de clôture de jardin réussi" },
    {
      type: 'ol',
      items: [
        "**Connaître la limite exacte** du terrain, si besoin grâce à un bornage.",
        "**Consulter la mairie** : PLU, secteur protégé, obligation de déclaration.",
        "**Parler avec le voisin**, surtout pour une clôture mitoyenne ou une haie en limite.",
        "**Déposer la déclaration préalable** si votre cas l'exige, et attendre l'accord avant de commencer.",
        "**Choisir les matériaux** en fonction de l'usage, de l'entretien et du style.",
        "**Préparer le terrain** : piquetage, gestion de la pente, fondations ou plots adaptés au sol.",
        "**Poser la clôture et le portail**, en vérifiant les aplombs, les niveaux et l'écoulement de l'eau.",
      ],
    },
    {
      type: 'p',
      text: "Sur les sols argilo-calcaires fréquents autour de Chessy-les-Mines et de la vallée d'Azergues, la qualité des fondations est déterminante. Un poteau mal scellé finit par pencher, et un mur sans drainage peut se fissurer. Pour un muret ou un mur en pierre, l'intervention d'un professionnel de la [maçonnerie paysagère](/services/maconnerie-paysagere/) est souvent la solution la plus sûre.",
    },

    { type: 'h2', text: "Votre clôture de jardin avec Lila Paysage" },
    {
      type: 'p',
      text: "Lila Paysage, paysagiste installé à Chessy-les-Mines depuis 2011, réalise des [clôtures et portails](/services/clotures-portails/) dans le Beaujolais, la vallée d'Azergues, autour de Villefranche-sur-Saône et dans l'Ouest lyonnais : grillage rigide, panneaux, murets, haies. Nous vous aidons à choisir une solution adaptée à votre terrain et à votre budget.",
    },
    {
      type: 'p',
      text: "Les démarches d'urbanisme restent à votre nom, mais nous pouvons vous indiquer les points à vérifier en mairie avant de lancer le chantier. La visite et le devis sont sans engagement : vous pouvez [demander un devis](/devis/) en décrivant simplement votre projet.",
    },
  ],
  faq: [
    {
      q: "Faut-il une autorisation pour poser une clôture de jardin ?",
      a: "En principe non, aucune formalité n'est requise. Une déclaration préalable est toutefois obligatoire en secteur protégé, dans certains périmètres du PLU, dans les communes qui soumettent les clôtures à déclaration, pour un mur de 2 m ou plus et pour une clôture électrifiée. Renseignez-vous auprès du service urbanisme de votre mairie.",
    },
    {
      q: "Quelle hauteur maximale pour une clôture ?",
      a: "La loi ne fixe pas de hauteur maximale générale : c'est le PLU ou les usages locaux qui la déterminent. En l'absence de règle locale, le Code civil prévoit même une hauteur minimale pour les murs de clôture, de 2,60 m ou 3,20 m selon la taille de la commune. Vérifiez donc le règlement de votre zone.",
    },
    {
      q: "Quelle distance respecter pour une haie en limite de propriété ?",
      a: "Une haie de 2 m de haut maximum doit être plantée à au moins 0,5 m de la limite, mesurés depuis le milieu du tronc. Une haie plus haute doit être plantée à au moins 2 m de la limite. Le PLU peut ajouter ses propres règles.",
    },
    {
      q: "Qui paie une clôture mitoyenne ?",
      a: "Une clôture mitoyenne est construite sur la limite avec l'accord du voisin, et les frais de construction et d'entretien sont partagés. Une clôture installée entièrement chez vous, en retrait de la limite, est privative et reste à votre charge. Formalisez l'accord par écrit avant les travaux.",
    },
    {
      q: "Combien de temps dure l'instruction d'une déclaration préalable ?",
      a: "Le délai est en principe d'un mois à partir du dépôt d'un dossier complet. En secteur protégé, la mairie notifie un délai plus long, de deux mois en général. Ne commencez pas les travaux avant d'avoir obtenu l'accord ou l'expiration du délai.",
    },
  ],
  relatedServices: ['clotures', 'maconnerie', 'creation'],
  relatedArticles: ['haie-brise-vue-essences', 'mur-soutenement-jardin', 'elagage-arbre-reglementation'],
}

export default article
