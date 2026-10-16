import type { Article } from '@/lib/article-types'

const article: Article = {
  slug: 'planter-olivier-rhone',
  title: "Planter un olivier dans le Rhône : le guide complet en 7 étapes",
  metaTitle: "Planter un olivier dans le Rhône : guide en 7 étapes",
  metaDescription: "Planter un olivier dans le Rhône : emplacement, sol argileux, période, tuteur, arrosage et protection contre le gel. Les 7 étapes pour qu'il s'installe.",
  focusKeyword: 'planter un olivier',
  secondaryKeywords: [
    'olivier Rhône',
    'olivier pleine terre',
    'olivier gel',
    'quand planter un olivier',
    'arrosage olivier',
    'olivier Beaujolais',
  ],
  category: 'Création',
  excerpt: "Le Rhône n'est pas la Provence, mais un olivier peut s'y plaire à condition de bien choisir l'emplacement, le sol et la saison. Nos conseils, étape par étape.",
  publishedAt: '2026-10-16',
  updatedAt: '2026-10-16',
  cover: {
    src: '/images/instagram/olivier.jpg',
    alt: "Olivier adulte en pleine terre : bien planter un olivier pour qu'il s'installe durablement",
  },
  blocks: [
    {
      type: 'p',
      text: "**Planter un olivier** dans le Rhône est un projet séduisant : son feuillage argenté persistant, sa silhouette tortueuse et son allure méditerranéenne donnent du caractère à un jardin, une cour ou une terrasse. Mais le climat local n'est pas celui de la Provence, et quelques précautions font toute la différence.",
    },
    {
      type: 'p',
      text: "Entre le Beaujolais, la vallée d'Azergues et l'Ouest lyonnais, le climat est semi-continental à influence méridionale : des étés chauds et secs, mais aussi des hivers avec de vraies gelées. Les sols, souvent argilo-calcaires, retiennent l'eau en hiver. Or l'olivier aime le soleil et déteste avoir les pieds dans l'eau.",
    },
    {
      type: 'p',
      text: "Ce guide vous explique où, quand et comment planter un olivier pour qu'il s'installe durablement. Les données techniques citées proviennent de France Olive, l'interprofession française de l'olive.",
    },

    { type: 'h2', text: "Planter un olivier dans le Rhône : est-ce raisonnable ?" },
    {
      type: 'p',
      text: "Oui, à condition de connaître ses limites. Selon France Olive, les dégâts de gel peuvent apparaître à partir de -8 °C sur les jeunes oliviers et de -12 °C sur les arbres plus âgés. Un sujet adulte bien installé résiste donc mieux qu'un jeune plant fraîchement mis en terre.",
    },
    {
      type: 'p',
      text: "Selon les hivers et l'emplacement, ces seuils peuvent être atteints dans le Rhône, surtout dans les endroits où le froid s'accumule. Les gelées de printemps peuvent aussi brûler les extrémités des rameaux et les boutons floraux.",
    },
    { type: 'h3', text: "Un arbre d'ornement avant tout" },
    {
      type: 'p',
      text: "Dans un jardin du Rhône, l'olivier est d'abord planté pour sa beauté. La récolte d'olives n'est pas garantie : l'olivier est une espèce auto-incompatible, qui a besoin du pollen d'une autre variété, et une floraison dans une atmosphère humide ou brumeuse est mal pollinisée.",
    },
    {
      type: 'p',
      text: "Côté variétés, France Olive indique que la Bouteillan et la Picholine sont plus sensibles au gel. Demandez conseil à votre pépiniériste sur l'origine et la variété du sujet, surtout pour un arbre de grande taille.",
    },

    { type: 'h2', text: "Choisir le bon emplacement pour votre olivier" },
    { type: 'h3', text: "Du soleil, encore du soleil" },
    {
      type: 'p',
      text: "L'olivier est un arbre de lumière. Réservez-lui la place la plus ensoleillée du jardin, idéalement exposée au sud. Sur les coteaux du Beaujolais et des Pierres Dorées, une pente bien exposée est un atout. Évitez l'ombre d'un bâtiment ou d'une haie haute placée au sud.",
    },
    {
      type: 'p',
      text: "Un emplacement abrité, le long d'un mur exposé au sud, profite en plus de la chaleur restituée par la pierre la nuit. C'est souvent la meilleure option dans une cour ou un petit jardin.",
    },
    { type: 'h3', text: "Éviter les poches de froid et l'humidité" },
    {
      type: 'p',
      text: "Dans sa fiche sur les [étapes en amont de la plantation](https://www.franceolive.fr/categorie/agronomie/etapes-en-amont-de-la-plantation), France Olive recommande d'éviter les zones particulièrement gélives : bas-fonds, bords de rivière, altitude élevée, ainsi que les secteurs à brouillard. Dans la vallée d'Azergues ou en bord de Saône, préférez donc un point haut du terrain à un fond de parcelle où l'air froid stagne.",
    },
    { type: 'h3', text: "Respecter les distances avec le voisin" },
    {
      type: 'p',
      text: "Un olivier destiné à dépasser 2 m de haut doit être planté à au moins 2 m de la limite séparative, distance mesurée depuis le milieu du tronc. En dessous de 2 m de haut, la distance minimale est de 0,5 m. Ces règles du Code civil sont rappelées sur la fiche [Quelles sont les règles pour construire ou installer une clôture ?](https://www.service-public.gouv.fr/particuliers/vosdroits/F3131) de service-public.fr.",
    },

    { type: 'h2', text: "Préparer un sol argilo-calcaire pour l'olivier" },
    {
      type: 'p',
      text: "France Olive résume le besoin en une phrase : l'olivier aime l'eau qui passe sur ses racines et déteste l'eau qui stagne. Les sols caillouteux ou graveleux lui conviennent mieux que les sols argileux. Il est en revanche peu exigeant sur le pH : sol calcaire ou légèrement acide, il s'adapte.",
    },
    {
      type: 'p',
      text: "Sur un sol argilo-calcaire lourd, fréquent autour de Chessy-les-Mines et dans le Beaujolais, tout se joue donc sur le drainage. Voici les points à surveiller :",
    },
    {
      type: 'ul',
      items: [
        "**Testez le drainage** : creusez un trou, remplissez-le d'eau et observez. Si l'eau reste plusieurs heures, il faut améliorer l'évacuation.",
        "**Décompactez largement** autour du trou de plantation, pour que les racines ne restent pas prisonnières d'une cuvette d'argile.",
        "**Allégez la terre** avec des graviers ou de la pouzzolane mélangés à la terre d'origine.",
        "**Surélevez légèrement** la plantation, en butte, sur les terrains plats et humides.",
        "**Pensez aux eaux de ruissellement** sur les terrains en pente : un olivier en bas de talus reçoit toute l'eau de la pente.",
      ],
    },
    {
      type: 'p',
      text: "Pour des terrains très argileux ou mal drainés, l'aménagement global du jardin compte autant que le trou de plantation. C'est un point que nous étudions systématiquement lors d'une [création ou d'un aménagement de jardin](/services/creation-amenagement-jardin/).",
    },

    { type: 'h2', text: "Quand planter un olivier dans le Rhône ?" },
    {
      type: 'p',
      text: "France Olive préconise une plantation entre mi-mars et mi-juin selon les secteurs, en dehors des périodes de gel. Les jeunes plants supportent mal les températures inférieures à -6 °C pendant leurs premiers mois en terre.",
    },
    {
      type: 'p',
      text: "Dans le Rhône, le printemps, une fois les fortes gelées passées, est donc la saison la plus sûre. L'arbre a ensuite tout l'été pour s'enraciner avant son premier hiver, à condition d'être arrosé.",
    },
    {
      type: 'table',
      head: ['Période', 'Avantages', 'Points de vigilance'],
      rows: [
        ['Fin d\'hiver', 'Sol humide, arbre au repos', 'Risque de gel sur un arbre pas encore enraciné : à éviter'],
        ['Printemps (mi-mars à mi-juin)', 'Période recommandée par France Olive, enracinement avant l\'hiver', 'Surveiller les gelées tardives et arroser dès les premières chaleurs'],
        ['Plein été', 'Sol chaud', 'Stress hydrique fort et restrictions d\'eau possibles'],
        ['Automne', 'Sol encore chaud', 'Le jeune arbre affronte l\'hiver sans être bien installé'],
      ],
    },

    { type: 'h2', text: "Planter un olivier : les 7 étapes" },
    {
      type: 'ol',
      items: [
        "**Creusez le trou à l'avance** : France Olive conseille de le préparer environ un mois avant la mise en terre. Faites-le nettement plus large que la motte.",
        "**Préparez le fond** : décompactez-le et, en sol argileux, ajoutez une couche drainante sans créer de cuvette fermée.",
        "**Installez le tuteur avant l'arbre** : France Olive préconise un tuteur de 2 m de haut, enfoncé d'au moins 60 cm, placé face au vent dominant.",
        "**Positionnez la motte** sans enterrer le collet, le haut de la motte au niveau du sol fini.",
        "**Rebouchez** avec la terre allégée, en tassant légèrement par couches pour chasser les poches d'air.",
        "**Formez une cuvette** d'environ 50 cm de diamètre autour du pied et remplissez-la d'eau.",
        "**Attachez l'arbre** au tuteur avec un lien souple, en forme de 8 et sans serrer, puis paillez le pied.",
      ],
    },
    { type: 'h3', text: "Planter un olivier adulte : un chantier à part" },
    {
      type: 'p',
      text: "Les gros sujets vendus en conteneur pèsent lourd et demandent des moyens de manutention adaptés. Avant l'achat, vérifiez l'accès au jardin (portail, allée, pente) et l'emplacement des réseaux enterrés.",
    },
    {
      type: 'p',
      text: "Un arbre adulte se tuteure plus solidement, souvent avec plusieurs piquets ou un haubanage, le temps que les racines ancrent la motte. Le drainage du trou est encore plus important qu'avec un jeune plant.",
    },

    { type: 'h2', text: "Arrosage et entretien de l'olivier la première année" },
    {
      type: 'p',
      text: "Même s'il résiste bien à la sécheresse une fois installé, l'olivier a besoin d'eau pour s'enraciner. France Olive indique un arrosage d'environ 20 litres par arbre tous les quinze jours au printemps et en été suivant la plantation, si nécessaire, jusqu'aux premières pluies d'automne.",
    },
    {
      type: 'p',
      text: "Dans le Rhône, les restrictions d'eau sont fréquentes en été. Un goutte-à-goutte au pied de l'arbre apporte l'eau au bon endroit, sans gaspillage : c'est le type de solution que nous mettons en place dans nos installations d'[arrosage automatique](/services/arrosage-engazonnement/). Respectez toujours les arrêtés en vigueur dans votre commune.",
    },
    {
      type: 'tip',
      title: 'Arrosez peu souvent, mais en profondeur',
      text: "Un arrosage copieux toutes les deux semaines vaut mieux qu'un petit arrosage quotidien : il pousse les racines à descendre. Avant d'arroser, grattez la terre sur quelques centimètres. Si elle est encore fraîche, attendez. En sol argileux, un excès d'eau est plus dangereux pour l'olivier que la sécheresse.",
    },
    { type: 'h3', text: "La taille de formation" },
    {
      type: 'p',
      text: "Les premières années, la taille reste légère. France Olive conseille notamment de conserver l'axe central, de supprimer les départs du tiers inférieur jusqu'à 60 à 80 cm de hauteur, là où partiront les charpentières, et de ne pas pincer les rameaux. Pour un sujet adulte à la silhouette déjà formée, une [taille par un professionnel](/services/elagage-taille/) préserve son allure.",
    },
    {
      type: 'p',
      text: "Gardez aussi le pied propre : un paillage minéral ou organique limite la concurrence des herbes et garde la fraîcheur en été.",
    },

    { type: 'h2', text: "Protéger l'olivier du gel en hiver" },
    {
      type: 'p',
      text: "Les premiers hivers sont les plus délicats. Quelques gestes simples réduisent les risques lors des vagues de froid :",
    },
    {
      type: 'ul',
      items: [
        "**Paillez généreusement le pied** à l'automne pour protéger les racines superficielles.",
        "**Gardez un voile d'hivernage** à portée de main et posez-le sur la ramure lors des épisodes de grand froid annoncés, puis retirez-le ensuite.",
        "**Secouez la neige** qui s'accumule sur les branches : son poids peut les casser.",
        "**Évitez les apports d'eau** juste avant une période de gel.",
        "**Abritez les oliviers en pot** contre un mur ou dans un local lumineux et non chauffé : en pot, les racines sont beaucoup plus exposées au froid.",
      ],
    },
    {
      type: 'p',
      text: "Pour les autres gestes de saison, consultez notre article pour [préparer son jardin pour l'hiver](/conseils/preparer-jardin-hiver/).",
    },

    { type: 'h2', text: "Olivier en pot ou en pleine terre ?" },
    {
      type: 'p',
      text: "En pot, l'olivier se déplace à l'abri l'hiver, ce qui est rassurant dans les secteurs froids. En revanche, il demande des arrosages plus fréquents en été, un rempotage régulier, et ses racines craignent davantage le gel.",
    },
    {
      type: 'p',
      text: "En pleine terre, il développe un système racinaire profond, devient plus autonome face à la sécheresse et prend plus d'ampleur. Pour un jardin sec et méditerranéen, il se marie bien avec les plantes présentées dans notre guide des [plantes pour jardin sec dans le Rhône](/conseils/plantes-jardin-sec-rhone/).",
    },

    { type: 'h2', text: "Planter un olivier avec Lila Paysage" },
    {
      type: 'p',
      text: "Installé à Chessy-les-Mines depuis 2011, Lila Paysage intervient dans le Beaujolais, la vallée d'Azergues, autour de Villefranche-sur-Saône et dans l'Ouest lyonnais. Nous pouvons étudier avec vous l'emplacement, le drainage du sol, la manutention d'un gros sujet et l'arrosage de reprise.",
    },
    {
      type: 'p',
      text: "Vous avez un projet d'olivier ou d'aménagement méditerranéen ? La visite et le devis sont sans engagement : [demander un devis](/devis/) ne prend que quelques minutes.",
    },
  ],
  faq: [
    {
      q: "Un olivier peut-il vivre dehors toute l'année dans le Rhône ?",
      a: "Oui, à condition de bien choisir son emplacement : plein soleil, sol drainé, à l'écart des poches de froid. Selon France Olive, les dégâts de gel peuvent apparaître dès -8 °C sur un jeune olivier et vers -12 °C sur un arbre plus âgé. Les premiers hivers demandent donc une protection lors des grands froids.",
    },
    {
      q: "Quelle est la meilleure période pour planter un olivier ?",
      a: "France Olive recommande de planter entre mi-mars et mi-juin selon les secteurs, en dehors des périodes de gel. Dans le Rhône, le printemps après les fortes gelées est la saison la plus sûre. L'arbre a ainsi tout l'été pour s'enraciner avant l'hiver.",
    },
    {
      q: "Peut-on planter un olivier dans un sol argileux ?",
      a: "Oui, mais le drainage est indispensable, car l'olivier supporte mal l'eau stagnante. Allégez la terre avec des graviers, décompactez largement et, si besoin, plantez en légère butte. Testez toujours le drainage avant la plantation.",
    },
    {
      q: "Combien faut-il arroser un olivier qui vient d'être planté ?",
      a: "France Olive indique environ 20 litres par arbre tous les quinze jours au printemps et en été suivant la plantation, si nécessaire, jusqu'aux premières pluies d'automne. Vérifiez l'humidité du sol avant chaque arrosage. Respectez aussi les éventuelles restrictions d'eau de votre commune.",
    },
    {
      q: "Mon olivier donnera-t-il des olives dans le Rhône ?",
      a: "Ce n'est pas garanti. L'olivier est auto-incompatible : il a besoin du pollen d'une autre variété, et une floraison par temps humide est mal pollinisée. Dans un jardin du Rhône, il est surtout planté pour sa valeur ornementale.",
    },
    {
      q: "À quelle distance de la limite planter un olivier ?",
      a: "S'il doit dépasser 2 m de haut, plantez-le à au moins 2 m de la limite séparative, mesurés depuis le milieu du tronc. En dessous de 2 m, la distance minimale est de 0,5 m. Le PLU de votre commune peut prévoir des règles complémentaires.",
    },
  ],
  relatedServices: ['creation', 'arrosage', 'elagage'],
  relatedArticles: ['plantes-jardin-sec-rhone', 'preparer-jardin-hiver', 'arrosage-automatique-jardin'],
}

export default article
