import type { Article } from '@/lib/article-types'

const article: Article = {
  slug: 'arrosage-automatique-jardin',
  title: "Arrosage automatique : le guide complet en 7 étapes pour économiser l'eau",
  metaTitle: 'Arrosage automatique : guide complet en 7 étapes',
  metaDescription:
    "Arrosage automatique au jardin : composants, installation en 7 étapes, réglages économes et restrictions d'eau dans le Rhône. Le guide d'un paysagiste.",
  focusKeyword: 'arrosage automatique',
  secondaryKeywords: [
    'arrosage automatique jardin',
    'goutte-à-goutte',
    'programmateur arrosage',
    'économiser l\'eau au jardin',
    'restrictions d\'eau Rhône',
  ],
  category: 'Guides',
  excerpt:
    "Goutte-à-goutte, tuyères, programmateur, sonde de pluie : comment concevoir un arrosage automatique qui arrose juste, respecte les restrictions d'eau et dure dans le temps.",
  publishedAt: '2026-10-16',
  updatedAt: '2026-10-16',
  cover: {
    src: '/images/instagram/gazon-cloture.jpg',
    alt: "Gazon posé le long d'une clôture sur un terrain préparé, avant la mise en place d'un arrosage automatique",
  },
  blocks: [
    {
      type: 'p',
      text: "Un **arrosage automatique** bien conçu apporte au jardin la bonne quantité d'eau, au bon endroit et au bon moment, sans que vous ayez à tirer le tuyau chaque soir. Bien pensé, il ne sert pas à arroser plus : il sert à arroser mieux, et donc souvent moins.",
    },
    {
      type: 'p',
      text: "Dans le Beaujolais et l'Ouest lyonnais, les étés sont chauds et secs, et les arrêtés de restriction d'eau sont devenus une réalité presque chaque été. Un système mal réglé gaspille de l'eau ; un système bien pensé protège vos plantations tout en restant compatible avec les règles en vigueur.",
    },
    {
      type: 'p',
      text: "Ce guide vous explique comment fonctionne une installation, quels équipements choisir selon les zones du jardin, comment se déroule la pose en 7 étapes et comment régler votre arrosage pour économiser l'eau. Nous y ajoutons les réflexes d'entretien qui évitent les mauvaises surprises au printemps.",
    },

    { type: 'h2', text: "Pourquoi installer un arrosage automatique au jardin ?" },
    {
      type: 'p',
      text: "Le premier intérêt est la régularité. Une pelouse, un massif ou une haie récemment plantée supportent mal l'alternance entre trop d'eau un jour et rien pendant une semaine. Le système arrose à heures fixes, à la dose prévue, même pendant vos vacances.",
    },
    {
      type: 'p',
      text: "Le second intérêt est la précision. Chaque zone reçoit un apport adapté : quelques goutteurs au pied des arbustes, une aspersion courte sur le gazon, rien du tout sur les vivaces de terrain sec. C'est là que se jouent les vraies économies d'eau.",
    },
    {
      type: 'ul',
      items: [
        "**Moins d'évaporation** : l'arrosage se déclenche tôt le matin ou la nuit, quand le soleil et le vent ne volent pas l'eau.",
        "**Moins de maladies** : le feuillage reste sec avec le goutte-à-goutte, ce qui limite certaines maladies fongiques.",
        "**Moins de temps passé** : plus besoin de déplacer un arroseur ou de surveiller un robinet.",
        "**Des plantations mieux installées** : les deux premiers étés sont décisifs pour un arbre ou une haie, et un apport régulier fait la différence.",
      ],
    },
    {
      type: 'p',
      text: "Sur les sols argilo-calcaires fréquents autour de Chessy-les-Mines et dans la vallée d'Azergues, la régularité compte encore plus : une terre argileuse qui a séché devient dure et l'eau ruisselle au lieu de pénétrer. Des apports moins abondants mais mieux répartis sont plus efficaces.",
    },

    { type: 'h2', text: "Les composants d'un arrosage automatique" },
    {
      type: 'p',
      text: "Une installation se compose toujours des mêmes briques. Les connaître vous aide à comprendre un devis et à poser les bonnes questions.",
    },
    { type: 'h3', text: "Le programmateur d'arrosage automatique" },
    {
      type: 'p',
      text: "C'est le cerveau du système. Il ouvre et ferme les vannes selon les jours, les heures et les durées que vous avez définis. Les modèles à plusieurs voies permettent de piloter chaque zone indépendamment, avec ses propres réglages.",
    },
    {
      type: 'p',
      text: "Certains programmateurs acceptent une **sonde de pluie** ou d'humidité du sol, qui suspend l'arrosage quand il a plu. C'est un petit équipement, mais il évite l'image absurde d'un arroseur qui tourne sous l'averse.",
    },
    { type: 'h3', text: 'Les électrovannes et le regard' },
    {
      type: 'p',
      text: "Chaque zone d'arrosage est commandée par une électrovanne. Les vannes sont regroupées dans un regard enterré, accessible par un couvercle, ce qui facilite l'entretien et la purge avant l'hiver.",
    },
    { type: 'h3', text: 'La filtration et la régulation de pression' },
    {
      type: 'p',
      text: "Un filtre en tête d'installation protège les goutteurs et les buses contre les particules. Selon la pression disponible au compteur, un réducteur de pression peut être nécessaire, en particulier pour le goutte-à-goutte, qui fonctionne à basse pression.",
    },
    { type: 'h3', text: 'Les émetteurs : goutteurs, tuyères, turbines' },
    {
      type: 'p',
      text: "Ce sont eux qui distribuent l'eau. Le bon choix dépend de ce que vous arrosez. Le tableau ci-dessous résume les grandes familles.",
    },
    {
      type: 'table',
      head: ["Type d'émetteur", 'Usage idéal', 'Points forts', 'Limites'],
      rows: [
        [
          '**Goutte-à-goutte** (goutteurs ou tuyau goutteur)',
          'Haies, massifs, arbustes, potager, arbres',
          "Eau apportée au pied, très peu d'évaporation, feuillage sec",
          'Sensible au calcaire et aux particules, filtre indispensable',
        ],
        [
          '**Micro-aspersion**',
          'Massifs denses, couvre-sols, jardinières',
          'Couverture homogène sur de petites surfaces',
          "Plus d'évaporation que le goutte-à-goutte",
        ],
        [
          '**Tuyères** (arroseurs escamotables fixes)',
          'Petites et moyennes pelouses, bandes étroites',
          'Escamotables, discrètes, réglables en angle',
          'Débit élevé : durées à caler finement',
        ],
        [
          '**Turbines** (arroseurs rotatifs)',
          'Grandes pelouses',
          'Grande portée, pluie fine et régulière',
          'Peu adaptées aux formes étroites ou complexes',
        ],
        [
          '**Tuyau poreux**',
          'Rangs de potager, haies basses',
          'Simple et économique à mettre en place',
          'Répartition moins régulière sur les longues longueurs',
        ],
      ],
    },

    { type: 'h2', text: "Installer un arrosage automatique : les 7 étapes" },
    {
      type: 'p',
      text: "Qu'il s'agisse d'un jardin neuf ou d'un jardin existant, la démarche suit le même ordre. Sauter une étape, c'est souvent devoir rouvrir une tranchée plus tard.",
    },
    {
      type: 'ol',
      items: [
        "**Faire le relevé du jardin** : surfaces, exposition, pente, nature du sol, emplacement du compteur ou de la cuve de récupération.",
        "**Mesurer le débit et la pression disponibles** : ils déterminent combien d'émetteurs peuvent fonctionner en même temps.",
        "**Découper le jardin en zones homogènes** : on n'arrose pas une pelouse en plein soleil comme une haie à l'ombre.",
        "**Dessiner le réseau** : position des vannes, tracé des canalisations, choix et emplacement des émetteurs.",
        "**Ouvrir les tranchées et poser les canalisations** : à une profondeur qui les protège des outils et du gel.",
        "**Raccorder, tester et équilibrer** : vérification des fuites, de la portée des arroseurs et du recouvrement entre eux.",
        "**Programmer et ajuster** : durées, fréquences et horaires, puis réglages affinés au fil des premières semaines.",
      ],
    },
    { type: 'h3', text: 'Bien découper les zones' },
    {
      type: 'p',
      text: "Le découpage en zones est l'étape qui conditionne les économies d'eau. Une zone regroupe des plantes aux besoins proches, sous la même exposition, arrosées par le même type d'émetteur. Mélanger goutteurs et tuyères sur une même vanne donne forcément une partie trop arrosée et l'autre pas assez.",
    },
    {
      type: 'p',
      text: "En pratique, on distingue souvent la pelouse au soleil, la pelouse à l'ombre, les haies, les massifs et le potager. Les massifs de plantes de terrain sec peuvent avoir leur propre zone, arrosée seulement les premières années, voire pas du tout ensuite.",
    },
    { type: 'h3', text: "Arrosage automatique en jardin neuf ou existant" },
    {
      type: 'p',
      text: "Dans un jardin en création, l'idéal est de poser le réseau avant le semis ou la pose du gazon : les tranchées se font sans abîmer quoi que ce soit. Si vous hésitez encore sur le type de pelouse, notre article [gazon en plaques ou semé](/conseils/gazon-plaques-ou-seme/) vous aide à trancher.",
    },
    {
      type: 'p',
      text: "Dans un jardin existant, l'installation reste possible. Les tranchées sont étroites et la pelouse se referme assez vite. Le goutte-à-goutte, posé en surface sous un paillage, s'installe dans les massifs sans tout bouleverser.",
    },
    {
      type: 'image',
      src: '/images/instagram/cour-engazonnee.jpg',
      alt: 'Cour de maison en pierre engazonnée, une surface de pelouse à arroser régulièrement',
      caption: 'Une cour engazonnée : sur ce type de surface, des tuyères escamotables restent discrètes.',
    },

    { type: 'h2', text: "Régler son arrosage automatique pour économiser l'eau" },
    {
      type: 'p',
      text: "Un système installé n'est qu'un outil : ce sont les réglages qui font les économies. Quelques principes simples suffisent à éviter l'essentiel du gaspillage.",
    },
    {
      type: 'ul',
      items: [
        "**Arroser tôt le matin** : l'eau a le temps de pénétrer avant la chaleur, et le feuillage sèche vite ensuite.",
        "**Arroser moins souvent mais plus longtemps** : les racines descendent chercher l'eau en profondeur et la plante résiste mieux aux coups de chaud.",
        "**Fractionner sur sol argileux ou en pente** : deux cycles courts séparés d'une pause limitent le ruissellement.",
        "**Adapter au fil de la saison** : les besoins de mai n'ont rien à voir avec ceux de juillet. Revoyez les durées au moins à chaque changement de saison.",
        "**Pailler les massifs** : un paillage organique ou minéral réduit nettement l'évaporation au pied des plantes.",
      ],
    },
    {
      type: 'tip',
      title: 'Le test du gobelet',
      text: "Pour vérifier qu'un arrosage de pelouse est homogène, posez plusieurs gobelets identiques sur la surface et lancez un cycle. Si certains se remplissent beaucoup plus que d'autres, la portée ou l'orientation des arroseurs est à corriger avant de toucher aux durées.",
    },
    { type: 'h3', text: 'Récupérer l\'eau de pluie pour arroser' },
    {
      type: 'p',
      text: "Une cuve de récupération d'eau de pluie peut alimenter tout ou partie de l'arrosage, à condition de prévoir une pompe et une filtration adaptées. L'arrosage du jardin fait partie des usages extérieurs autorisés de l'eau de pluie ; une déclaration en mairie n'est demandée que si l'installation est raccordée au réseau intérieur de la maison.",
    },
    {
      type: 'p',
      text: "Le volume stocké s'épuise vite en plein été. La cuve est donc surtout utile pour les massifs et le potager arrosés au goutte-à-goutte, plus économes que l'aspersion d'une grande pelouse.",
    },
    { type: 'h3', text: 'Moins arroser grâce aux bons végétaux' },
    {
      type: 'p',
      text: "La meilleure économie reste de ne pas avoir besoin d'arroser. Choisir des vivaces, arbustes et graminées adaptés à la chaleur réduit fortement les besoins une fois les plantes installées. Nous détaillons une sélection dans notre guide des [plantes pour jardin sec dans le Rhône](/conseils/plantes-jardin-sec-rhone/).",
    },

    { type: 'h2', text: "Arrosage automatique et restrictions d'eau dans le Rhône" },
    {
      type: 'p',
      text: "En période de sécheresse, le préfet peut limiter les usages de l'eau selon quatre niveaux de gravité : vigilance, alerte, alerte renforcée et crise. Le département du Rhône a déjà connu ces différents niveaux, y compris des épisodes de crise sur une partie de son territoire.",
    },
    {
      type: 'p',
      text: "Le [guide national de mise en œuvre des mesures de restriction](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide_secheresse-2026.pdf) publié par le ministère de la Transition écologique donne des mesures de référence. Pour l'arrosage des pelouses, massifs fleuris et espaces verts, il prévoit par exemple une interdiction entre 11 h et 18 h au niveau alerte, puis une interdiction en alerte renforcée.",
    },
    {
      type: 'p',
      text: "Ces mesures sont des références nationales : chaque arrêté préfectoral peut les adapter, et les rendre plus strictes selon le territoire. Le même guide précise que ces mesures ne s'appliquent pas lorsque l'arrosage utilise de l'eau de pluie récupérée ; vérifiez toujours ce que prévoit l'arrêté en vigueur.",
    },
    {
      type: 'ul',
      items: [
        "**Consultez la situation de votre commune** sur [VigiEau](https://vigieau.gouv.fr/), le service public d'information sur les restrictions d'eau, avant de reprogrammer vos cycles en été.",
        "**Décalez les horaires** de votre programmateur pour qu'ils restent en dehors des plages interdites.",
        "**Coupez les zones non prioritaires** (pelouse) en premier et gardez le goutte-à-goutte des jeunes arbres si l'arrêté le permet.",
      ],
    },
    {
      type: 'p',
      text: "Un programmateur multizone prend ici tout son sens : il permet de suspendre la pelouse en quelques secondes tout en conservant, lorsque c'est autorisé, l'arrosage ciblé des plantations récentes.",
    },

    { type: 'h2', text: "Entretenir son arrosage automatique au fil des saisons" },
    {
      type: 'p',
      text: "Un réseau d'arrosage vit dehors, sous le soleil, le gel et le calcaire. Un entretien régulier, simple, prolonge sa durée de vie et maintient sa précision.",
    },
    { type: 'h3', text: 'Au printemps : la remise en route' },
    {
      type: 'ul',
      items: [
        "Ouvrir l'alimentation progressivement et rechercher les fuites.",
        "Nettoyer le filtre et vérifier chaque zone une par une.",
        "Redresser et dégager les arroseurs envahis par le gazon.",
        "Remplacer les piles du programmateur si besoin et vérifier l'heure.",
      ],
    },
    { type: 'h3', text: "En été : la surveillance" },
    {
      type: 'p',
      text: "Un coup d'œil régulier suffit : une tache jaune sur la pelouse signale souvent un arroseur bouché ou dévié, une flaque permanente une fuite. Pensez aussi à adapter les durées lors des fortes chaleurs, dans le respect des restrictions.",
    },
    { type: 'h3', text: "À l'automne : l'hivernage" },
    {
      type: 'p',
      text: "Avant les premières gelées, il faut couper l'alimentation et vidanger le réseau. L'eau qui gèle dans une électrovanne ou un raccord peut le fendre. Le programmateur peut rester en place en mode arrêt, ou être rentré s'il est exposé.",
    },
    {
      type: 'p',
      text: "Ces opérations peuvent être intégrées à un [contrat d'entretien de jardin](/services/entretien-jardin/), ce qui vous évite d'y penser à chaque changement de saison.",
    },

    { type: 'h2', text: "Les erreurs fréquentes à éviter" },
    {
      type: 'ul',
      items: [
        "**Arroser tous les jours un peu** : les racines restent en surface et la plante souffre dès la première chaleur.",
        "**Une seule zone pour tout le jardin** : impossible de régler correctement pelouse, haie et massif en même temps.",
        "**Oublier la filtration** sur le goutte-à-goutte : les goutteurs se bouchent en une saison avec une eau calcaire.",
        "**Arroser les allées et les murs** : des arroseurs mal orientés gaspillent l'eau et tachent les façades.",
        "**Ne jamais revoir la programmation** : un réglage de juillet laissé tel quel en septembre noie le jardin.",
        "**Négliger la vidange avant l'hiver** : c'est la cause la plus courante de casse au printemps.",
      ],
    },

    { type: 'h2', text: "Votre projet d'arrosage automatique avec Lila Paysage" },
    {
      type: 'p',
      text: "Depuis 2011, Lila Paysage aménage et entretient des jardins à Chessy-les-Mines, dans la vallée d'Azergues, le Beaujolais et l'Ouest lyonnais. L'arrosage automatique fait partie de nos prestations, souvent associé à la création d'une pelouse ou à la plantation d'une haie.",
    },
    {
      type: 'p',
      text: "Nous partons de votre jardin tel qu'il est : surfaces, exposition, sol, source d'eau disponible. Découvrez notre prestation [arrosage automatique et engazonnement](/services/arrosage-engazonnement/), puis [demandez un devis](/devis/) pour que nous étudiions ensemble la solution la plus adaptée et la plus économe en eau.",
    },
  ],
  faq: [
    {
      q: "Un arrosage automatique consomme-t-il plus d'eau qu'un arrosage manuel ?",
      a: "Pas s'il est bien conçu et bien réglé. Le découpage en zones, le goutte-à-goutte au pied des plantes et l'arrosage tôt le matin limitent les pertes. C'est un système mal programmé, jamais ajusté, qui gaspille.",
    },
    {
      q: "Peut-on installer un arrosage automatique dans un jardin déjà aménagé ?",
      a: "Oui. Les tranchées sont étroites et la pelouse se referme assez vite. Dans les massifs, un tuyau goutteur peut être posé en surface sous le paillage, sans déplanter.",
    },
    {
      q: "Mon arrosage automatique est-il concerné par les restrictions d'eau ?",
      a: "Oui, comme tout arrosage. Les arrêtés préfectoraux fixent des plages horaires interdites ou des interdictions selon le niveau de sécheresse. Consultez VigiEau pour connaître la situation de votre commune et adaptez votre programmateur en conséquence.",
    },
    {
      q: "Quand faut-il vidanger son installation ?",
      a: "Avant les premières gelées, généralement à l'automne. Il faut couper l'alimentation et purger les canalisations et les vannes, car l'eau qui gèle peut fendre les raccords et les électrovannes.",
    },
    {
      q: "Goutte-à-goutte ou arroseurs : que choisir ?",
      a: "Les deux sont complémentaires. Le goutte-à-goutte convient aux haies, massifs, arbres et potager. Les tuyères et turbines conviennent aux pelouses. Une bonne installation combine souvent les deux, sur des zones séparées.",
    },
  ],
  relatedServices: ['arrosage', 'entretien'],
  relatedArticles: ['gazon-plaques-ou-seme', 'plantes-jardin-sec-rhone', 'calendrier-entretien-jardin'],
}

export default article
