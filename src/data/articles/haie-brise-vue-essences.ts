import type { Article } from '@/lib/article-types'

const article: Article = {
  slug: 'haie-brise-vue-essences',
  title: 'Haie brise-vue : le guide complet pour choisir parmi 12 essences',
  metaTitle: 'Haie brise-vue : 12 essences à choisir (guide complet)',
  metaDescription:
    "Haie brise-vue : persistantes, champêtres, à croissance rapide ou peu gourmandes en eau, 12 essences comparées et les distances à respecter avec le voisin.",
  focusKeyword: 'haie brise-vue',
  secondaryKeywords: [
    'haie persistante',
    'arbuste brise-vue',
    'haie champêtre',
    'haie croissance rapide',
    'distance haie voisin',
  ],
  category: 'Création',
  excerpt:
    "Persistante ou champêtre, rapide ou résistante à la sécheresse : comment choisir les essences d'une haie brise-vue adaptée à votre sol, à votre climat et à votre temps d'entretien.",
  publishedAt: '2026-10-16',
  updatedAt: '2026-10-16',
  cover: {
    src: '/images/instagram/pelouse-terrasse-bois.jpg',
    alt: 'Haie brise-vue taillée bordant une pelouse entretenue et une terrasse en bois',
  },
  blocks: [
    {
      type: 'p',
      text: "Une **haie brise-vue** bien choisie fait plus que cacher le jardin des regards. Elle coupe le vent, filtre la poussière et le bruit, abrite les oiseaux et donne au jardin un vrai cadre vert. Mal choisie, elle devient au contraire une corvée de taille, un mur brun après un été sec ou une source de conflit avec le voisin.",
    },
    {
      type: 'p',
      text: "Tout se joue sur le choix des essences. Une même haie brise-vue ne se comporte pas de la même façon sur un sol argilo-calcaire du Beaujolais, sur un terrain en pente exposé au vent ou dans un petit jardin de ville.",
    },
    {
      type: 'p',
      text: "Ce guide vous aide à faire le tri : les critères qui comptent vraiment, 12 essences comparées, les associations qui fonctionnent et les règles de distance à respecter. Il tient compte de notre climat, avec des étés chauds et secs et des restrictions d'eau fréquentes dans le Rhône.",
    },

    { type: 'h2', text: 'Haie brise-vue : les 5 critères avant de choisir' },
    {
      type: 'p',
      text: "Avant de regarder les catalogues, prenez le temps de répondre à quelques questions simples. Elles éliminent d'emblée les essences qui ne conviendront pas.",
    },
    {
      type: 'ol',
      items: [
        "**La hauteur visée** : un brise-vue de 1,80 m à 2 m ne demande pas les mêmes végétaux ni la même distance de plantation qu'un écran de 3 ou 4 m.",
        "**L'opacité en hiver** : un feuillage persistant cache toute l'année ; un feuillage caduc laisse passer la vue et la lumière en hiver, sauf pour les essences marcescentes qui gardent leurs feuilles sèches.",
        "**Le sol et l'exposition** : sol calcaire ou acide, sec ou frais, plein soleil ou mi-ombre. Une essence qui souffre dans votre sol restera clairsemée.",
        "**Le temps d'entretien** : une haie taillée au cordeau demande une à deux tailles par an ; une haie libre se contente d'une intervention plus légère.",
        "**La place disponible** : une haie libre s'élargit vite. Dans un jardin étroit, privilégiez des essences qui supportent bien une taille serrée.",
      ],
    },
    {
      type: 'tip',
      title: 'Persistant ne veut pas dire sans entretien',
      text: "Les haies persistantes perdent aussi leurs feuilles, simplement de façon étalée dans l'année. Comptez le ramassage dans vos tâches, surtout près d'une terrasse ou d'une piscine. Une haie mixte, avec quelques caducs, est souvent plus facile à vivre qu'on ne l'imagine.",
    },

    { type: 'h2', text: 'Les essences persistantes pour une haie brise-vue toute l\'année' },
    {
      type: 'p',
      text: "Ce sont les plus demandées pour une haie brise-vue, car elles cachent en toutes saisons. Voici celles que nous jugeons les plus intéressantes dans notre région.",
    },
    { type: 'h3', text: 'Éléagnus (Elaeagnus × ebbingei)' },
    {
      type: 'p',
      text: "Feuillage vert argenté, croissance rapide, très bonne tenue au vent et à la sécheresse une fois installé. Il accepte la plupart des sols, y compris calcaires. Sa floraison discrète d'automne est parfumée. Un excellent choix pour une haie brise-vue rapide et peu exigeante.",
    },
    { type: 'h3', text: 'Laurier-tin (Viburnum tinus)' },
    {
      type: 'p',
      text: "Arbuste d'origine méditerranéenne au feuillage dense, il fleurit en hiver, au moment où le jardin en a le plus besoin. Il supporte la taille, la chaleur et les sols calcaires. Sa croissance est moyenne, ce qui limite le nombre de tailles.",
    },
    { type: 'h3', text: 'Osmanthe (Osmanthus)' },
    {
      type: 'p',
      text: "Croissance lente, feuillage dense et fleurs blanches très parfumées selon les variétés. L'osmanthe forme une haie basse à moyenne, compacte et élégante. Il demande de la patience, mais très peu d'entretien ensuite.",
    },
    { type: 'h3', text: 'Photinia (Photinia × fraseri)' },
    {
      type: 'p',
      text: "Apprécié pour ses jeunes pousses rouge vif, le photinia a été très planté. Il reste décoratif, mais il est sensible à certaines maladies du feuillage, surtout en haie monospécifique. Nous le conseillons plutôt en mélange qu'en haie continue.",
    },
    { type: 'h3', text: 'If (Taxus baccata)' },
    {
      type: 'p',
      text: "Persistant, très dense, il supporte la taille la plus stricte et vit très longtemps. Sa croissance est lente. Attention : presque toutes ses parties sont toxiques, à éviter si de jeunes enfants ou des animaux ont accès à la haie.",
    },
    { type: 'h3', text: 'Troène (Ligustrum)' },
    {
      type: 'p',
      text: "Le troène commun, indigène, est semi-persistant : il garde une partie de ses feuilles en hiver selon le froid. Rustique, peu exigeant, il se taille facilement et ses fleurs attirent les pollinisateurs. Ses baies noires ne sont pas comestibles.",
    },

    { type: 'h2', text: 'Les caducs et marcescents : une haie brise-vue plus vivante' },
    {
      type: 'p',
      text: "Une haie brise-vue n'a pas besoin d'être verte en janvier pour être efficace. Certaines essences caduques offrent un écran suffisant une grande partie de l'année, avec de vrais atouts pour la biodiversité.",
    },
    { type: 'h3', text: 'Charme commun (Carpinus betulus)' },
    {
      type: 'p',
      text: "C'est l'essence reine de la charmille. Le charme est marcescent : ses feuilles sèchent en automne mais restent en grande partie sur les branches jusqu'au printemps. La haie garde donc une bonne opacité en hiver, avec une jolie teinte cuivrée. Il supporte la taille et les sols calcaires.",
    },
    { type: 'h3', text: 'Hêtre (Fagus sylvatica)' },
    {
      type: 'p',
      text: "Également marcescent, le hêtre forme de superbes haies taillées. Il préfère toutefois les sols frais et supporte moins bien les étés très secs que le charme. Sur les terrains séchants, nous lui préférons généralement le charme.",
    },
    { type: 'h3', text: 'Les arbustes de haie champêtre' },
    {
      type: 'p',
      text: "Fusain d'Europe, cornouiller sanguin, viorne lantane, érable champêtre, noisetier : ces arbustes indigènes composent les haies champêtres. Mélangés, ils offrent fleurs, fruits et abris aux oiseaux et aux insectes. La LPO rappelle d'ailleurs qu'une haie constituée de diverses essences indigènes est particulièrement favorable à la faune, comme l'explique sa fiche [La haie champêtre et la loi](https://www.lpo.fr/la-lpo-en-actions/mobilisation-citoyenne/refuges-lpo/fiches-conseils-refuges/la-haie-champetre-et-la-loi).",
    },

    { type: 'h2', text: 'Tableau comparatif des essences pour haie brise-vue' },
    {
      type: 'p',
      text: "Ce tableau résume les principales caractéristiques. Les comportements peuvent varier selon la variété, le sol et l'exposition : prenez-le comme une base de discussion.",
    },
    {
      type: 'table',
      head: ['Essence', 'Feuillage', 'Croissance', 'Atout principal', 'Point de vigilance'],
      rows: [
        ['Éléagnus', 'Persistant', 'Rapide', 'Résiste au vent et à la sécheresse', 'Prend vite de la largeur'],
        ['Laurier-tin', 'Persistant', 'Moyenne', 'Floraison hivernale', 'Taille après la floraison'],
        ['Osmanthe', 'Persistant', 'Lente', 'Parfum, très compact', 'Patience à la plantation'],
        ['Photinia', 'Persistant', 'Moyenne', 'Pousses rouges décoratives', 'Maladies du feuillage'],
        ['If', 'Persistant', 'Lente', 'Très dense, longévité', 'Toxique'],
        ['Troène commun', 'Semi-persistant', 'Moyenne à rapide', 'Rustique, mellifère', 'Baies non comestibles'],
        ['Charme', 'Marcescent', 'Moyenne', 'Opaque même en hiver', 'Feuilles sèches au printemps'],
        ['Hêtre', 'Marcescent', 'Moyenne', 'Très belle haie taillée', 'Craint les sols secs'],
        ['Fusain d\'Europe', 'Caduc', 'Moyenne', 'Fruits décoratifs, indigène', 'Fruits toxiques'],
        ['Cornouiller sanguin', 'Caduc', 'Rapide', 'Bois rouge en hiver, indigène', 'Drageonne'],
        ['Viorne lantane', 'Caduc', 'Moyenne', 'Aime le calcaire, indigène', 'Peu opaque en hiver'],
        ['Érable champêtre', 'Caduc', 'Moyenne', 'Supporte la taille, indigène', 'Peu opaque en hiver'],
      ],
    },

    { type: 'h2', text: 'Les essences à éviter ou à utiliser avec prudence' },
    {
      type: 'p',
      text: "Certaines plantes ont longtemps été des valeurs sûres et le sont beaucoup moins aujourd'hui. D'autres sont tout simplement difficiles à maîtriser.",
    },
    {
      type: 'ul',
      items: [
        "**Thuya et cyprès en haie continue** : ils forment vite un écran, mais une haie d'une seule essence est fragile face aux maladies, et ils supportent mal les étés secs à répétition. Une partie brunie ne repart pas sur le vieux bois.",
        "**Buis** : la pyrale du buis, une chenille, a ravagé de nombreuses haies. Pour une haie brise-vue, d'autres essences sont aujourd'hui plus sûres.",
        "**Laurier-palme** : très vigoureux, il demande des tailles fréquentes et s'élargit beaucoup. Ses feuilles sont toxiques.",
        "**Bambou traçant** : il colonise vite le terrain, y compris chez le voisin. Si vous y tenez, choisissez un bambou non traçant ou installez une barrière anti-rhizomes sérieuse.",
      ],
    },
    {
      type: 'p',
      text: "La meilleure assurance reste la diversité. Une haie brise-vue composée de trois à cinq essences résiste mieux aux maladies, aux ravageurs et aux aléas climatiques. Si une essence souffre, les autres maintiennent l'écran.",
    },
    {
      type: 'image',
      src: '/images/instagram/cypres-tailles.jpg',
      alt: 'Alignement de cyprès taillés en bordure de pelouse',
      caption: 'Les conifères taillés structurent un jardin, mais une haie mixte résiste mieux aux aléas.',
    },

    { type: 'h2', text: 'Haie brise-vue et voisinage : distances et hauteur' },
    {
      type: 'p',
      text: "Une haie brise-vue est soumise aux mêmes règles que les arbres. Le Code civil renvoie d'abord aux règlements et usages locaux : renseignez-vous en mairie. À défaut, une plantation qui dépasse 2 m de haut doit être plantée à 2 m de la limite de propriété ; une plantation de 2 m maximum peut être plantée à 0,5 m.",
    },
    {
      type: 'p',
      text: "En pratique, la plupart des haies plantées en limite doivent donc être maintenues à 2 m de hauteur au plus. La distance se mesure depuis le milieu du tronc. Les règles complètes figurent sur la fiche officielle [Plantation de végétaux (haies, arbres, bambous...)](https://www.service-public.gouv.fr/particuliers/vosdroits/F614) de Service-Public.",
    },
    { type: 'h3', text: 'Haie brise-vue mitoyenne ou privative ?' },
    {
      type: 'p',
      text: "Si la haie est mitoyenne, chaque voisin entretient son côté. Si elle vous appartient, vous devez couper les branches qui dépassent chez le voisin. Pour aller plus loin, lisez notre article sur l'[élagage et les règles du Code civil](/conseils/elagage-arbre-reglementation/).",
    },
    {
      type: 'p',
      text: "Pour un écran immédiat en limite, une clôture doublée d'une haie basse est souvent la solution la plus simple. Les règles propres aux clôtures sont détaillées dans notre guide [clôture de jardin : règles et autorisations](/conseils/cloture-jardin-reglementation/).",
    },

    { type: 'h2', text: 'Planter et entretenir une haie brise-vue réussie' },
    { type: 'h3', text: 'La plantation' },
    {
      type: 'ul',
      items: [
        "**Période** : l'automne est idéal, quand le sol est encore chaud et que les pluies reviennent. La plantation reste possible jusqu'à la fin de l'hiver, hors gel.",
        "**Préparation du sol** : décompactez largement sur toute la longueur. Dans les sols argileux, une bonne préparation évite l'asphyxie des racines.",
        "**Densité** : une plantation trop serrée donne un effet rapide mais crée de la concurrence. Mieux vaut respecter l'espacement conseillé pour chaque essence.",
        "**Paillage** : un paillis organique au pied limite l'évaporation et la concurrence des herbes.",
      ],
    },
    { type: 'h3', text: 'Les premières années' },
    {
      type: 'p',
      text: "Les deux premiers étés sont décisifs. Un arrosage profond et espacé vaut mieux que de petits arrosages quotidiens. Un goutte-à-goutte au pied de la haie est une vraie sécurité ; voyez notre guide sur l'[arrosage automatique du jardin](/conseils/arrosage-automatique-jardin/).",
    },
    {
      type: 'p',
      text: "Côté taille, mieux vaut tailler un peu chaque année dès la plantation pour densifier la base. Respectez la période de nidification : la LPO recommande de ne pas tailler les haies du 16 mars au 31 août. Notre article [quand tailler une haie](/conseils/quand-tailler-haie/) détaille le calendrier.",
    },

    { type: 'h2', text: 'Votre haie brise-vue avec Lila Paysage' },
    {
      type: 'p',
      text: "Le bon choix d'essences dépend de votre sol, de l'exposition, de la hauteur souhaitée et du temps que vous voulez consacrer à l'entretien. C'est précisément ce que nous regardons avec vous avant toute plantation.",
    },
    {
      type: 'p',
      text: "Lila Paysage, installée à Chessy-les-Mines depuis 2011, conçoit et plante des haies dans le Beaujolais et l'Ouest lyonnais, dans le cadre de nos projets de [création et d'aménagement de jardin](/services/creation-amenagement-jardin/). Nous assurons aussi la [taille de vos haies](/services/elagage-taille/) au fil des années.",
    },
    {
      type: 'p',
      text: "Vous avez un projet de haie brise-vue ? Décrivez-nous votre terrain et vos attentes pour [demander un devis](/devis/).",
    },
  ],
  faq: [
    {
      q: 'Quelle est la haie brise-vue qui pousse le plus vite ?',
      a: "Parmi les persistants, l'éléagnus et le troène font partie des plus rapides. Le cornouiller sanguin pousse aussi vite parmi les caducs. Une croissance rapide signifie toutefois plus de tailles par la suite.",
    },
    {
      q: 'Quelle haie brise-vue choisir pour un sol calcaire et sec ?',
      a: "Le laurier-tin, l'éléagnus, le charme et la viorne lantane s'accommodent bien des sols calcaires. Pour les terrains très séchants, privilégiez des essences méditerranéennes ou réputées résistantes à la sécheresse, et soignez l'arrosage les deux premiers étés.",
    },
    {
      q: 'À quelle distance du voisin planter une haie brise-vue ?',
      a: "Sauf règle locale différente, une haie qui dépasse 2 m de haut doit être plantée à 2 m de la limite. Si elle reste à 2 m maximum, elle peut être plantée à 0,5 m. Renseignez-vous d'abord en mairie sur les règles locales.",
    },
    {
      q: 'Faut-il éviter les haies de thuyas ?',
      a: "Elles ne sont pas interdites, mais une haie d'une seule essence de conifères est fragile face aux maladies et aux étés secs à répétition. Un mélange de plusieurs essences offre un écran plus durable et plus favorable à la biodiversité.",
    },
    {
      q: 'Quand planter une haie brise-vue ?',
      a: "L'automne est la meilleure période : le sol est encore chaud et les racines s'installent avant l'été. On peut planter jusqu'à la fin de l'hiver, en évitant les périodes de gel et les sols détrempés.",
    },
  ],
  relatedServices: ['creation', 'elagage', 'clotures'],
  relatedArticles: ['quand-tailler-haie', 'plantes-jardin-sec-rhone', 'cloture-jardin-reglementation'],
}

export default article
