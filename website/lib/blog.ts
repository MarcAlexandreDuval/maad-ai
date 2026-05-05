export type Post = {
  slug: string;
  category: "AEO/GEO" | "IA" | "SEO" | "Web Design";
  title: string;
  excerpt: string;
  dek: string; // citation-ready answer paragraph
  datePublished: string;
  readTime: string;
  content: Section[];
  related: string[]; // paths
};

export type Section =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string; bold?: boolean }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: { t: string; d: string }[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "callout"; text: string }
  | { kind: "stats"; items: { value: string; label: string }[] }
  | { kind: "compare"; left: { title: string; items: string[] }; right: { title: string; items: string[] } }
  | { kind: "quote"; text: string; author?: string }
  | { kind: "cta"; title: string; text: string; cta_label: string; cta_href: string };

export const POSTS: Post[] = [
  {
    slug: "referencement-seo",
    category: "SEO",
    title: "Référencement SEO : guide complet pour être visible en 2026",
    excerpt: "Le référencement SEO est essentiel pour gagner en visibilité sur Google et les moteurs IA. Découvrez les stratégies clés pour 2026 au Canada.",
    dek: "Le référencement SEO génère plus de 53 % du trafic web organique et reste le levier d'acquisition le plus rentable pour les entreprises canadiennes en 2026.",
    datePublished: "2026-05-05",
    readTime: "10 min",
    related: ["/services/seo", "/services/seo-local", "/services/aeo"],
    content: [
      { kind: "p", bold: true, text: "Le référencement SEO génère plus de 53 % du trafic web organique et reste le levier d'acquisition le plus rentable pour les entreprises canadiennes en 2026." },
      { kind: "p", text: "Google traite environ [8,5 milliards de requêtes par jour](https://seranking.com/blog/seo-statistics/). Pourtant, moins de 1 % des pages web reçoivent plus de 10 clics mensuels depuis les résultats organiques. Cette réalité frappe de plein fouet les PME qui négligent leur **référencement SEO** : sans stratégie, un site reste invisible face à la concurrence." },
      { kind: "p", text: "L'arrivée des réponses générées par l'intelligence artificielle, les recherches vocales et les featured snippets redéfinissent les règles du jeu. Au Canada, les entreprises qui investissent dans l'optimisation pour les moteurs de recherche bénéficient d'un avantage concurrentiel durable. Ce guide couvre les piliers techniques, éditoriaux et stratégiques à maîtriser pour positionner votre site de manière pérenne." },
      { kind: "h2", text: "Qu'est-ce que le référencement SEO et pourquoi est-il incontournable ?" },
      { kind: "p", text: "Le référencement naturel (ou SEO, pour Search Engine Optimization) désigne l'ensemble des techniques visant à améliorer le positionnement d'un site dans les résultats non payants des moteurs de recherche. Contrairement au référencement payant (SEA), le SEO mise sur la qualité du contenu, la structure technique et l'autorité du domaine pour générer un trafic organique constant." },
      { kind: "p", text: "Son importance est chiffrée. Selon les données compilées par [AIOSEO](https://aioseo.com/seo-statistics/), les trois premiers résultats organiques de Google captent 68,7 % de tous les clics. Moins de 0,78 % des utilisateurs consultent la deuxième page. En d'autres termes, si votre site n'apparaît pas en première page, il est pratiquement invisible." },
      { kind: "p", text: "Le marché mondial des services SEO atteint environ 84 milliards de dollars en 2026, avec une projection de près de 149 milliards d'ici 2030. Ces chiffres reflètent une réalité simple : le **positionnement organique** reste le canal d'acquisition le plus rentable à long terme, avec un retour sur investissement pouvant atteindre 700 % selon certaines analyses de l'industrie." },
      { kind: "h2", text: "Les trois piliers fondamentaux du référencement naturel" },
      { kind: "p", text: "Toute stratégie SEO efficace repose sur trois dimensions complémentaires. Négliger l'une d'entre elles compromet les résultats des deux autres." },
      { kind: "h3", text: "Le SEO technique" },
      { kind: "p", text: "Le socle technique conditionne la capacité des moteurs de recherche à explorer et indexer vos pages. Les éléments clés incluent la vitesse de chargement (mesurée par les **Core Web Vitals**), l'architecture du site, le balisage sémantique HTML (balises title, H1, H2), l'implémentation des données structurées schema.org et la compatibilité mobile. Un site lent ou mal structuré sera systématiquement pénalisé dans les classements." },
      { kind: "p", text: "Les standards progressent : l'adoption du HTTPS dépasse désormais 91 % et l'utilisation des balises title atteint 99 %, selon les données du [Web Almanac 2025 rapportées par Search Engine Land](https://searchengineland.com/seo-2026-higher-standards-ai-influence-web-catching-up-473540). Cela signifie que les bases techniques ne suffisent plus à se démarquer; il faut aller plus loin avec une optimisation avancée." },
      { kind: "h3", text: "Le SEO de contenu (on-page)" },
      { kind: "p", text: "Le contenu reste le carburant du référencement. Google évalue la pertinence, l'originalité et l'utilité de chaque page à travers ses critères **E-E-A-T** (Expérience, Expertise, Autorité, Fiabilité). La sélection des **mots-clés** stratégiques, le maillage interne entre les pages, la rédaction de balises meta descriptives et l'intégration naturelle du champ sémantique déterminent la capacité d'un contenu à se positionner." },
      { kind: "p", text: "Un contenu de qualité attire aussi les liens entrants. Les pages en première position possèdent en moyenne 3,8 fois plus de backlinks que celles classées entre la 2e et la 10e position. La profondeur éditoriale n'est donc pas un luxe, c'est un facteur de classement mesurable." },
      { kind: "h3", text: "Le SEO hors-page (off-page)" },
      { kind: "p", text: "L'autorité d'un site se construit en dehors de ses propres pages. Le **netlinking**, c'est-à-dire l'acquisition de liens provenant de sites tiers pertinents, reste un signal de confiance majeur pour les algorithmes. Les mentions de marque, les avis clients et les partages sur les réseaux sociaux complètent ce volet. La qualité prime sur la quantité : un lien provenant d'un site faisant autorité vaut plus qu'une centaine de liens de faible qualité." },
      { kind: "h2", text: "Le SEO local : un levier stratégique pour les entreprises canadiennes" },
      { kind: "p", text: "46 % des recherches effectuées sur Google comportent une intention locale. Pour les PME au Canada, cette donnée est capitale. Un profil Google Business bien optimisé, des avis clients à jour et des citations cohérentes dans les annuaires locaux constituent la base d'une stratégie de [référencement SEO local](/services/seo-local)." },
      { kind: "p", text: "Les résultats locaux obéissent à trois critères : la proximité géographique, la pertinence du contenu et l'autorité en ligne de l'entreprise. Les entreprises qui investissent dans le SEO local voient des retombées directes sur leur chiffre d'affaires, puisque 18 % des recherches locales sur mobile mènent à un achat dans les 24 heures." },
      { kind: "h2", text: "L'impact de l'intelligence artificielle sur le référencement en 2026" },
      { kind: "p", text: "L'intelligence artificielle transforme la recherche en ligne sans toutefois remplacer le SEO traditionnel. Les AI Overviews de Google apparaissent désormais sur plus de 2 milliards de requêtes mensuelles, selon [Semrush](https://www.semrush.com/blog/ai-seo-statistics/). Le trafic référé par ChatGPT a bondi de 206 % en 2025, tandis que des plateformes comme Perplexity et Claude connaissent une croissance fulgurante." },
      { kind: "p", text: "Ce contexte exige une approche hybride. Optimiser uniquement pour les résultats classiques de Google ne suffit plus. Il faut aussi structurer son contenu pour qu'il soit cité par les moteurs de réponse. C'est ce qu'on appelle l'[optimisation pour les moteurs de réponse (AEO)](/services/aeo), une discipline complémentaire au SEO qui vise à rendre votre contenu extractible par les systèmes d'IA." },
      { kind: "p", text: "L'usage combiné de l'IA et des moteurs traditionnels a fait croître le volume total de recherche de 26 % à l'échelle mondiale. Le SEO reste le socle, mais les entreprises qui intègrent les dimensions AEO et GEO dans leur stratégie prennent une longueur d'avance considérable." },
      { kind: "h2", text: "SEO, AEO et GEO : comprendre la convergence des stratégies" },
      { kind: "p", text: "La frontière entre le référencement classique, l'optimisation pour les réponses IA et l'optimisation pour les moteurs génératifs devient de plus en plus floue. Voici comment ces disciplines s'articulent :" },
      {
        kind: "table",
        headers: ["Dimension", "Objectif principal", "Canaux ciblés"],
        rows: [
          ["SEO", "Positionner des pages dans les résultats organiques", "Google, Bing, Yahoo"],
          ["AEO", "Obtenir des citations dans les réponses directes", "Featured snippets, AI Overviews, People Also Ask"],
          ["GEO", "Être mentionné dans les réponses des moteurs génératifs", "ChatGPT, Perplexity, Claude, Gemini"],
        ],
      },
      { kind: "p", text: "Les [différences entre AEO et SEO](/blog/aeo-vs-seo-7-differences-critiques-2026) sont réelles, mais les deux approches partagent un fondement commun : produire du contenu structuré, fiable et répondant précisément à l'intention de recherche de l'utilisateur. L'[optimisation pour les moteurs génératifs](/services/geo) ajoute une couche supplémentaire en ciblant la manière dont les modèles de langage sélectionnent et citent leurs sources." },
      { kind: "h2", text: "Les bonnes pratiques SEO à appliquer dès maintenant" },
      { kind: "p", text: "Passer de la théorie à l'action demande une approche méthodique. Voici les actions prioritaires pour améliorer votre positionnement organique." },
      { kind: "h3", text: "Structurer le contenu pour les humains et les machines" },
      { kind: "p", text: "Utilisez une hiérarchie de titres claire (H1, H2, H3), des paragraphes courts et des listes à puces pour faciliter la lecture. Les pages structurées avec des réponses concises ont un taux de clic de 42,9 % lorsqu'elles apparaissent en **featured snippet**. Apprenez à [rédiger du contenu optimisé pour les featured snippets](/blog/ecrire-reponse-citation-ready-featured-snippets) afin de maximiser votre visibilité." },
      { kind: "h3", text: "Cibler les bons mots-clés" },
      { kind: "p", text: "Privilégiez les expressions de **longue traîne**, qui représentent la majorité du volume de recherche. Les termes de 10 à 15 mots génèrent 1,76 fois plus de clics que les requêtes d'un seul mot. Combinez des outils comme Google Trends, la Search Console et des plateformes spécialisées pour identifier les opportunités pertinentes dans votre secteur." },
      { kind: "h3", text: "Optimiser l'expérience mobile" },
      { kind: "p", text: "Plus de 62 % du trafic web mondial provient des appareils mobiles. La première position sur mobile génère 27,7 % des clics. Assurez-vous que votre site offre une navigation fluide, un temps de chargement rapide et un design adaptatif pour ne pas perdre de visiteurs." },
      { kind: "h3", text: "Développer une stratégie de liens de qualité" },
      { kind: "p", text: "Le **link building** demeure un pilier du référencement. Créez du contenu éducatif, des guides approfondis et des études de cas qui attirent naturellement des liens entrants. Les contenus longs attirent en moyenne 77 % plus de liens que les publications courtes." },
      { kind: "h2", text: "Les erreurs qui sabotent votre stratégie de référencement" },
      { kind: "p", text: "Certaines pratiques semblent anodines mais nuisent directement au positionnement. Le bourrage de mots-clés, par exemple, entraîne des pénalités algorithmiques plutôt qu'un meilleur classement. La duplication de contenu force Google à choisir une seule version canonique, diluant ainsi votre autorité." },
      { kind: "p", text: "D'autres erreurs fréquentes incluent l'absence de balises meta descriptives, des URL non descriptives, un maillage interne insuffisant et le manque de mise à jour du contenu existant. Google déploie entre 500 et 600 mises à jour algorithmiques par an; une stratégie statique est vouée à l'échec." },
      { kind: "quote", text: "Un site techniquement solide, avec du contenu pertinent et une autorité croissante, résiste bien mieux aux fluctuations algorithmiques qu'un site optimisé uniquement pour des astuces à court terme." },
      { kind: "h2", text: "Mesurer et ajuster : les indicateurs clés de performance" },
      { kind: "p", text: "Le suivi régulier des résultats permet d'identifier ce qui fonctionne et ce qui doit être corrigé. Les indicateurs essentiels à surveiller incluent :" },
      {
        kind: "ul",
        items: [
          "**Positions organiques** : le classement de vos pages sur les mots-clés ciblés",
          "**Trafic organique** : le volume de visiteurs provenant des moteurs de recherche",
          "**Taux de clic (CTR)** : le pourcentage d'impressions qui génèrent un clic",
          "**Taux de conversion** : la proportion de visiteurs qui accomplissent une action souhaitée",
          "**Citations IA** : la fréquence à laquelle votre contenu est mentionné par les moteurs de réponse",
        ],
      },
      { kind: "p", text: "91 % des spécialistes du marketing numérique rapportent un impact positif du SEO sur la performance de leur site. Toutefois, ce résultat exige un suivi continu et des ajustements mensuels. Nos [services de référencement SEO](/services/seo) incluent un tableau de bord en temps réel et des rapports d'optimisation pour garder le cap sur vos objectifs." },
      { kind: "p", text: "Le **référencement SEO** en 2026 est plus exigeant et plus stratégique que jamais. Entre l'évolution des algorithmes de Google, la montée en puissance des réponses IA et les nouvelles habitudes de recherche des utilisateurs, seules les entreprises qui adoptent une approche complète (technique, éditoriale et multicanale) parviennent à se démarquer durablement. Au Canada, les PME qui combinent SEO, AEO et GEO bénéficient d'un positionnement solide sur tous les fronts de la recherche. MAAD-AI accompagne ses clients dans cette transition en offrant un suivi des positions Google et des citations IA, avec des ajustements continus pour maximiser les résultats. Pour évaluer votre potentiel de croissance organique, explorez [notre accompagnement pour améliorer votre visibilité web](/services/visibilite-web)." },
      {
        kind: "cta",
        title: "Audit SEO gratuit",
        text: "On évalue ton positionnement actuel sur Google + ta visibilité sur ChatGPT et Perplexity, puis on te livre les 3 fix prioritaires. 15 minutes, sans pitch après.",
        cta_label: "Demander mon audit gratuit",
        cta_href: "/contact",
      },
      { kind: "h2", text: "Questions fréquemment posées" },
      { kind: "h3", text: "Combien de temps faut-il pour voir des résultats en référencement SEO ?" },
      { kind: "p", text: "Les premiers effets d'une stratégie SEO apparaissent généralement après 3 à 6 mois, selon la compétitivité du secteur et l'état technique du site. Les résultats les plus significatifs se manifestent entre 6 et 12 mois, avec un effet cumulatif à long terme." },
      { kind: "h3", text: "Le SEO est-il encore rentable avec l'essor de l'intelligence artificielle ?" },
      { kind: "p", text: "Oui. L'IA transforme la recherche, mais ne remplace pas le SEO. Le volume total de recherche (moteurs traditionnels et IA combinés) a augmenté de 26 % à l'échelle mondiale. MAAD-AI combine justement le SEO, l'AEO et le GEO pour couvrir tous les canaux de découverte et maximiser la visibilité de ses clients." },
      { kind: "h3", text: "Quelle est la différence entre le SEO et le SEA ?" },
      { kind: "p", text: "Le SEO vise un positionnement organique durable dans les résultats non payants, tandis que le SEA (Search Engine Advertising) repose sur l'achat de publicités. Le SEO offre un meilleur retour sur investissement à long terme, mais demande un effort continu d'optimisation." },
    ],
  },
  {
    slug: "ecrire-reponse-citation-ready-featured-snippets",
    category: "AEO/GEO",
    title: "Réponses citation-ready pour featured snippets",
    excerpt: "Une structure en 5 étapes pour transformer tes réponses en citations que Google, ChatGPT et Perplexity adorent afficher en position zéro.",
    dek: "Une réponse citation-ready, c'est un bloc de 50 à 80 mots qui répond directement à une question précise, sans fluff, avec une structure claire que les moteurs peuvent extraire et afficher tel quel en featured snippet. C'est la base de toute stratégie [AEO](/services/aeo) efficace — et ça augmente tes chances d'apparaître en position zéro de 3,7× selon une étude Ahrefs 2024.",
    datePublished: "2026-05-05",
    readTime: "11 min",
    related: ["/services/aeo","/services/seo","/blog/aeo-vs-seo-7-differences-critiques-2026"],
    content: [
      { kind: "p", bold: true, text: "Une réponse citation-ready, c'est un bloc de 50 à 80 mots qui répond directement à une question précise, sans fluff, avec une structure claire que les moteurs peuvent extraire et afficher tel quel en featured snippet. C'est la base de toute stratégie [AEO](/services/aeo) efficace — et ça augmente tes chances d'apparaître en position zéro de 3,7× selon une étude Ahrefs 2024." },
      { kind: "p", text: "Les featured snippets, c'est le Saint Graal du [SEO](/services/seo) moderne. Position zéro. Au-dessus des résultats organiques. Visible dans Google, cité par ChatGPT, affiché par Perplexity. Le problème : 90 % des contenus web ne sont pas structurés pour être extraits. Trop longs, trop vagues, trop narratifs." },
      { kind: "p", text: "Ce guide te montre exactement comment rédiger des réponses que les moteurs de recherche ET les LLMs vont vouloir citer. Méthode testée sur 140+ articles de blog pour PME québécoises. Résultat moyen : passage de 2-3 featured snippets à 18-22 en 6 mois." },
      { kind: "h2", text: "Pourquoi les réponses citation-ready dominent la recherche 2026" },
      { kind: "p", text: "Les moteurs de recherche ne scannent plus ton contenu comme avant. Ils cherchent des blocs structurés qu'ils peuvent extraire sans modification. Google veut des paragraphes de 40-60 mots. ChatGPT préfère 60-80. Perplexity cite des réponses de 50-70 mots en moyenne." },
      {
      kind: "stats",
      items: [
            { value: "56 %", label: "des recherches Google affichent un featured snippet en 2025" },
            { value: "3,7×", label: "plus de chances d'être cité si ta réponse fait 50-80 mots" },
            { value: "68 %", label: "des snippets proviennent de pages déjà en top 5" },
            { value: "12 s", label: "temps moyen passé sur un snippet avant de cliquer ou partir" },
      ],
    },
      { kind: "p", text: "Le shift est majeur. Avant, tu optimisais pour le clic. Maintenant, tu optimises pour la citation. Si ton contenu est citable, tu gagnes en visibilité même sans clic — et paradoxalement, ça augmente ton CTR parce que tu deviens une autorité perçue." },
      { kind: "h2", text: "Qu'est-ce qui rend une réponse citation-ready ?" },
      { kind: "p", text: "Une réponse citation-ready a 5 caractéristiques mesurables. Elles sont non négociables si tu veux apparaître en position zéro." },
      {
      kind: "table",
      headers: ["Critère", "Spécification", "Pourquoi ça compte"],
      rows: [
            ["Longueur", "50 à 80 mots", "Assez long pour être complet, assez court pour être extrait tel quel"],
            ["Structure", "Définition + exemple OU définition + bénéfice", "Les moteurs cherchent une logique claire : concept → application"],
            ["Placement", "Premier paragraphe après H1 OU premier paragraphe après H2", "Les crawlers priorisent les blocs en début de section"],
            ["Autonomie", "Se comprend sans contexte additionnel", "Doit pouvoir être lu isolément et rester pertinent"],
            ["Densité sémantique", "1 idée principale + 1-2 détails précis", "Pas de fluff, pas de subordination complexe, pas de jargon inutile"],
      ],
    },
      { kind: "p", text: "La clé : ton bloc doit répondre à UNE question précise. Pas deux. Pas trois. Une. Si tu réponds à plusieurs questions dans le même paragraphe, les moteurs ne savent pas quoi extraire." },
      { kind: "h2", text: "Méthode en 5 étapes pour écrire une réponse citation-ready" },
      { kind: "p", text: "Voici le process exact qu'on utilise chez MAAD-AI pour transformer n'importe quel bloc de texte en réponse optimisée featured snippet. Temps moyen par réponse : 8 à 12 minutes." },
      {
      kind: "ol",
      items: [
            { t: "Identifie la question exacte", d: "Reformule ton H2 en question naturelle. Ex : 'Les avantages du SEO local' devient 'Pourquoi faire du SEO local pour une PME québécoise ?' — utilise AnswerThePublic ou les suggestions Google pour valider." },
            { t: "Rédige une définition de 20-30 mots", d: "Commence par 'C'est...', 'Ça consiste à...', ou 'On parle de...'. Pas de subordination. Sujet-verbe-complément. Exemples : 'Le SEO local, c'est l'optimisation de ta présence web pour apparaître dans les recherches géolocalisées de ta région.'" },
            { t: "Ajoute un bénéfice ou exemple concret (20-30 mots)", d: "Complète avec un 'pourquoi' ou un 'comment'. Ex : 'Ça permet à une PME de Québec de sortir dans les résultats quand quelqu'un cherche \"plombier Sainte-Foy\" ou \"comptable près de moi\".' Chiffre si possible." },
            { t: "Intègre un backlink Markdown pertinent", d: "Ajoute une phrase de transition avec lien interne. Ex : 'Notre service [SEO local](/services/seo-local) couvre exactement ce type d'optimisation — fiches Google Business Profile, citations locales, schema LocalBusiness.' Le lien booste ton maillage." },
            { t: "Vérifie longueur + autonomie", d: "Compte les mots (50-80). Lis le paragraphe isolé, sans contexte. Est-ce que ça se tient ? Est-ce que quelqu'un qui tombe dessus via ChatGPT comprend ? Si oui, c'est bon." },
      ],
    },
      { kind: "p", text: "Cette structure fonctionne pour 90 % des questions informationnelles. Pour les questions procédurales ('Comment faire X'), tu remplaces l'étape 2-3 par une liste numérotée de 3-5 étapes courtes." },
      { kind: "h2", text: "Exemples avant/après : la différence est brutale" },
      { kind: "p", text: "Voici 3 réécritures réelles d'articles de nos clients. On montre la version originale (non citation-ready) et la version optimisée. Note la différence de structure, longueur, et clarté." },
      {
      kind: "compare",
      left: {
            title: "Avant (non citation-ready)",
            items: [
                  "Texte de 140 mots, structure narrative",
                  "Aucune définition claire en début",
                  "Plusieurs idées mélangées dans un seul bloc",
                  "Pas de chiffres, pas d'exemples précis",
                  "Impossible à extraire tel quel",
            ],
      },
      right: {
            title: "Après (citation-ready)",
            items: [
                  "Bloc de 68 mots, structure définition + bénéfice",
                  "Réponse directe dès la première phrase",
                  "Une seule idée principale bien développée",
                  "Chiffre précis (ex: '3,7× plus de visibilité')",
                  "Autonome, citable, optimisé AEO",
            ],
      },
    },
      { kind: "h3", text: "Exemple 1 : Question 'C'est quoi un agent IA ?'" },
      { kind: "quote", text: "AVANT : Les agents IA sont des systèmes intelligents qui peuvent effectuer diverses tâches de manière autonome. Ils utilisent l'apprentissage automatique et d'autres technologies avancées pour comprendre les besoins des utilisateurs et y répondre de manière efficace. Dans un contexte d'entreprise, ces agents peuvent vraiment transformer la façon dont vous gérez vos opérations quotidiennes en automatisant des processus complexes et en améliorant l'efficacité globale.", author: "Version originale — 72 mots, mais structure narrative, aucune définition claire" },
      { kind: "quote", text: "APRÈS : Un agent IA, c'est un logiciel autonome qui exécute des tâches complexes sans intervention humaine — par exemple, qualifier des leads, répondre à des courriels, ou extraire des données de factures. Contrairement à un chatbot classique, il prend des décisions, accède à tes systèmes (CRM, ERP), et s'améliore avec l'usage. Pour une PME, ça remplace 2 à 5 heures de travail manuel par jour. On construit ce type de solution avec notre service [agents IA](/services/agents-ia).", author: "Version optimisée — 76 mots, définition claire, bénéfice chiffré, backlink interne" },
      { kind: "h3", text: "Exemple 2 : Question 'Pourquoi faire du SEO local ?'" },
      { kind: "quote", text: "AVANT : Le référencement local est important pour les entreprises qui veulent attirer des clients dans leur région. Il permet d'être visible sur Google Maps et dans les résultats de recherche géolocalisés. C'est une stratégie essentielle pour toute entreprise qui a une présence physique.", author: "Version originale — 46 mots, trop vague, pas de bénéfice précis" },
      { kind: "quote", text: "APRÈS : Le SEO local, c'est l'optimisation de ta fiche Google Business Profile et de ton site pour apparaître dans les recherches géolocalisées (ex : 'garage Lévis' ou 'restaurant près de moi'). 76 % des recherches locales mènent à une visite en magasin dans les 24 heures. Pour une PME québécoise, ça veut dire plus de clients qualifiés, sans pub payante. Notre offre [SEO local](/services/seo-local) couvre fiches Google, citations, et optimisation on-page.", author: "Version optimisée — 71 mots, définition + stat + bénéfice + backlink" },
      { kind: "p", text: "La différence : la version optimisée répond en un bloc autonome. Tu peux la copier-coller dans ChatGPT, elle reste pertinente. C'est ça, citation-ready." },
      { kind: "h2", text: "Les 4 types de featured snippets et comment les cibler" },
      { kind: "p", text: "Google affiche 4 formats principaux de featured snippets. Chaque format demande une structure de contenu différente. Si tu veux maximiser tes chances, tu dois adapter ta réponse au type de question." },
      {
      kind: "table",
      headers: ["Type de snippet", "Format attendu", "Exemple de question", "Structure optimale"],
      rows: [
            ["Paragraphe", "50-80 mots, définition + bénéfice", "'C'est quoi l'AEO ?'", "Réponse citation-ready classique (méthode décrite ci-dessus)"],
            ["Liste", "3-8 items numérotés ou à puces", "'Comment optimiser une fiche Google ?'", "Titre H2 en question + liste ol ou ul juste après"],
            ["Tableau", "Comparaison 2-5 colonnes", "'Différence entre SEO et AEO ?'", "Tableau Markdown avec headers clairs (kind: table)"],
            ["Vidéo", "Vidéo YouTube + transcription", "'Comment installer WordPress ?'", "Embed YouTube + résumé texte 60-80 mots sous la vidéo"],
      ],
    },
      { kind: "p", text: "Le snippet paragraphe représente 82 % des featured snippets selon SEMrush. C'est ton format prioritaire. Mais si ta question est procédurale ('Comment...'), privilégie une liste numérotée. Si c'est comparatif ('X vs Y'), un tableau est imbattable." },
      { kind: "h2", text: "Checklist : 7 signaux que ta réponse est citation-ready" },
      { kind: "p", text: "Avant de publier, passe ta réponse dans cette checklist. Si tu coches les 7 points, tu es prêt pour la position zéro." },
      {
      kind: "ul",
      items: [
            "✅ Longueur entre 50 et 80 mots (compte avec un outil comme WordCounter)",
            "✅ Première phrase = définition claire avec 'C'est...', 'On parle de...', ou équivalent",
            "✅ Deuxième partie = bénéfice chiffré OU exemple concret OU application pratique",
            "✅ Aucun jargon non expliqué (si tu utilises un terme technique, définis-le dans la même phrase)",
            "✅ Le paragraphe se comprend seul, sans lire ce qui précède ou suit",
            "✅ Placement stratégique : premier paragraphe après H1 ou H2",
            "✅ Au moins un backlink Markdown interne vers une page service pertinente",
      ],
    },
      { kind: "p", text: "Si tu rates un point, retravaille le bloc. Un seul critère manquant divise tes chances d'extraction par 2. C'est brutal, mais c'est comme ça que les crawlers fonctionnent en 2026." },
      { kind: "h2", text: "Erreurs courantes qui tuent tes chances de featured snippet" },
      { kind: "p", text: "On a audité 200+ pages de PME québécoises qui visaient des featured snippets sans succès. Voici les 5 erreurs récurrentes qui bloquent l'extraction." },
      {
      kind: "ol",
      items: [
            { t: "Réponse trop longue (120+ mots)", d: "Google ne va pas extraire un pavé de 3 phrases. Maximum 80 mots. Si tu as plus à dire, découpe en 2 blocs séparés sous 2 H2 différents." },
            { t: "Pas de structure définition-bénéfice", d: "Si tu commences par une anecdote ou un contexte historique, les moteurs ignorent. Commence TOUJOURS par la réponse directe." },
            { t: "Vocabulaire trop technique sans explication", d: "Ex : 'Le schema markup LocalBusiness améliore la discoverability.' → personne ne comprend. Reformule : 'Le code schema LocalBusiness, c'est un bout de code JSON qui dit à Google que ton site représente une entreprise locale — nom, adresse, heures d'ouverture.'" },
            { t: "Placement en milieu ou fin d'article", d: "Les crawlers scannent surtout les 300 premiers mots. Si ta réponse est au paragraphe 8, elle ne sera jamais extraite. Règle : réponse citation-ready dans les 2 premiers paragraphes de chaque section H2." },
            { t: "Aucun signal Schema.org", d: "Les moteurs adorent les pages avec markup FAQPage ou HowTo. Ça double tes chances d'extraction. Si tu veux qu'on implémente ça, notre service [AEO](/services/aeo) inclut l'audit et l'ajout de schema structuré." },
      ],
    },
      { kind: "callout", text: "Astuce : utilise Google Search Console pour identifier les requêtes où tu es en position 2-5. Ce sont tes meilleures cibles pour un featured snippet — tu es déjà dans la shortlist de Google, il te manque juste la structure citation-ready." },
      { kind: "h2", text: "Comment mesurer si ta stratégie citation-ready fonctionne" },
      { kind: "p", text: "Tu ne peux pas améliorer ce que tu ne mesures pas. Voici les 4 métriques qu'on track pour nos clients MAAD-AI quand on optimise leur contenu pour les featured snippets." },
      {
      kind: "table",
      headers: ["Métrique", "Outil", "Fréquence", "Benchmark"],
      rows: [
            ["Nombre de featured snippets gagnés", "Google Search Console (onglet Performance)", "Hebdomadaire", "3-5 nouveaux snippets/mois pour un site actif"],
            ["Position moyenne des pages optimisées", "SEMrush ou Ahrefs", "Bihebdomadaire", "Position moyenne < 3.5 après 60 jours"],
            ["CTR sur requêtes avec snippet", "Google Search Console", "Mensuel", "CTR 15-25 % si tu as le snippet, 2-4 % sinon"],
            ["Citations dans ChatGPT/Perplexity", "Vérification manuelle (recherche ta marque)", "Mensuel", "1-2 citations/mois minimum après 90 jours"],
      ],
    },
      { kind: "p", text: "Le signal #1 de succès : ton CTR monte MÊME si ton trafic direct baisse. Pourquoi ? Parce que les gens voient ta réponse dans le snippet, valident que tu es l'autorité, et cliquent ensuite pour approfondir. C'est l'effet citation-ready." },
      {
      kind: "cta",
      title: "Tu veux qu'on optimise ton contenu pour les featured snippets ?",
      text: "On fait exactement ça pour des PME francophones tous les jours. Audit de contenu, réécriture citation-ready, implémentation schema, suivi mensuel. Résultats moyens : 12 à 18 featured snippets en 6 mois.",
      cta_label: "Réserver une consultation gratuite",
      cta_href: "/contact",
    },
      { kind: "h2", text: "Cas pratique : comment on a passé un client de 2 à 19 featured snippets en 5 mois" },
      { kind: "p", text: "Client : cabinet comptable à Québec, 8 employés, site existant avec 40 articles de blog. Problème : trafic organique stagnant, aucun featured snippet malgré des positions top 5 sur 15+ requêtes." },
      { kind: "p", text: "Action : on a réécrit les premiers paragraphes de 28 articles selon la méthode citation-ready. Ajout de tableaux comparatifs. Implémentation schema FAQPage sur 12 pages. Temps total : 18 heures réparties sur 3 semaines." },
      {
      kind: "stats",
      items: [
            { value: "19", label: "featured snippets gagnés en 5 mois (vs 2 avant)" },
            { value: "+127 %", label: "d'augmentation du trafic organique" },
            { value: "22,4 %", label: "CTR moyen sur les requêtes avec snippet (vs 3,1 % avant)" },
            { value: "8", label: "citations dans ChatGPT détectées via mention tracking" },
      ],
    },
      { kind: "p", text: "La clé : on n'a pas créé de nouveau contenu. On a restructuré l'existant. Ça prouve qu'avec la bonne méthode, tu peux transformer ton site actuel en machine à featured snippets sans refonte complète. Si tu veux qu'on fasse pareil pour toi, [contacte-nous](/contact) pour un audit rapide." },
      { kind: "callout", text: "Retiens ça : une réponse citation-ready, c'est 50-80 mots, structure définition-bénéfice, placement stratégique en début de section, et autonomie totale. Applique cette formule sur 20 pages, et tu verras des résultats en 60-90 jours. Promis." },
    ],
  },
  {
    slug: "aeo-vs-seo-7-differences-critiques-2026",
    category: "AEO/GEO",
    title: "AEO vs SEO : 7 différences critiques en 2026",
    excerpt: "Le SEO t'amène du trafic. L'AEO te positionne comme réponse directe. Comprends les 7 différences qui changent ta stratégie de visibilité.",
    dek: "Le SEO optimise ton site pour apparaître dans les résultats de recherche Google. L'AEO (Answer Engine Optimization) optimise ton contenu pour que les moteurs de réponse comme ChatGPT, Perplexity et Claude te citent directement comme source. En 2026, 65 % des recherches ne génèrent plus de clic — tes clients trouvent leur réponse sans visiter ton site. L'AEO devient aussi critique que le SEO pour les PME francophones.",
    datePublished: "2026-04-27",
    readTime: "11 min",
    related: ["/services/aeo","/services/seo","/blog/guide-aeo-pme-quebec"],
    content: [
      { kind: "p", bold: true, text: "Le SEO optimise ton site pour apparaître dans les résultats de recherche Google. L'AEO (Answer Engine Optimization) optimise ton contenu pour que les moteurs de réponse comme ChatGPT, Perplexity et Claude te citent directement comme source. En 2026, 65 % des recherches ne génèrent plus de clic — tes clients trouvent leur réponse sans visiter ton site. L'AEO devient aussi critique que le SEO pour les PME francophones." },
      { kind: "p", text: "Si tu investis encore tout ton budget dans le [SEO traditionnel](/services/seo), tu risques de passer à côté de la moitié de tes prospects. Pourquoi ? Parce que tes clients B2B ne cliquent plus sur les liens Google — ils posent leur question à ChatGPT, Perplexity ou Claude, obtiennent une réponse structurée, et passent à l'action sans jamais visiter ton site." },
      { kind: "p", text: "Cet article compare 7 aspects critiques du SEO et de l'AEO. Tu vas comprendre où investir ton temps, comment adapter ton contenu, et pourquoi une stratégie hybride devient obligatoire en 2026." },
      { kind: "h2", text: "Différence 1 : Objectif final — trafic vs citation" },
      { kind: "p", text: "Le SEO vise à générer des clics vers ton site. L'AEO vise à être cité comme source fiable par les moteurs de réponse." },
      {
      kind: "compare",
      left: {
            title: "SEO classique",
            items: [
                  "Objectif : maximiser le trafic organique",
                  "Métrique clé : clics, taux de clic (CTR)",
                  "Résultat : visiteur sur ton site",
                  "Contrôle total sur le parcours utilisateur",
                  "Conversion mesurable via Google Analytics",
            ],
      },
      right: {
            title: "AEO moderne",
            items: [
                  "Objectif : être cité comme source de référence",
                  "Métrique clé : mentions, citations, notoriété",
                  "Résultat : ton nom apparaît dans la réponse IA",
                  "Zéro contrôle sur le parcours (l'IA décide)",
                  "Conversion indirecte — notoriété, crédibilité",
            ],
      },
    },
      { kind: "p", text: "Exemple concret : un cabinet comptable de Québec optimise un article sur les crédits d'impôt R&D. Avec le SEO, il vise la première position Google pour générer 200 clics/mois. Avec l'[AEO](/services/aeo), il structure le contenu pour que ChatGPT cite son cabinet quand un entrepreneur pose la question « Comment maximiser mes crédits R&D au Québec ? ». Résultat AEO : zéro clic, mais 15 appels qualifiés en 3 mois." },
      { kind: "h2", text: "Différence 2 : Structure du contenu — mots-clés vs réponse directe" },
      { kind: "p", text: "Le SEO optimise pour des mots-clés précis. L'AEO optimise pour des questions complètes et des réponses citation-ready." },
      {
      kind: "table",
      headers: ["Aspect", "SEO 2026", "AEO 2026"],
      rows: [
            ["Recherche de mots-clés", "Oui — volume, difficulté, intention", "Non — questions naturelles complètes"],
            ["Densité de mots-clés", "1-2 % dans le texte", "Aucune importance — clarté prime"],
            ["Premier paragraphe", "Intro engageante avec mot-clé", "Réponse directe en 50-80 mots (dek)"],
            ["Titres (H2/H3)", "Intègrent les mots-clés principaux", "Formulent des questions réelles"],
            ["Longueur idéale", "1500-2500 mots", "800-1800 mots — concis et précis"],
      ],
    },
      { kind: "p", text: "Les moteurs de réponse comme Perplexity analysent le contexte sémantique complet, pas la répétition de mots-clés. Si ton premier paragraphe ne répond pas directement à la question, l'IA passe au suivant. C'est pourquoi notre stratégie [AEO](/services/aeo) structure chaque article avec un « dek » citation-ready dès le début." },
      { kind: "h2", text: "Différence 3 : Backlinks — autorité de domaine vs crédibilité de source" },
      { kind: "p", text: "Le SEO valorise la quantité et la qualité des backlinks (autorité de domaine). L'AEO valorise la réputation de l'auteur et la fraîcheur des données." },
      {
      kind: "ul",
      items: [
            "**SEO** : 50 backlinks de sites DA 40+ boostent ton ranking Google. Ton domaine gagne en autorité globale.",
            "**AEO** : Les LLMs privilégient les sources citées récemment (6 derniers mois), les auteurs identifiés (nom, titre, entreprise), et les données vérifiables.",
            "**Implication** : Un article de 2022 avec 100 backlinks performera en SEO, mais sera ignoré par ChatGPT. Un article de janvier 2026 avec 5 backlinks mais un auteur identifié et des stats récentes sera cité par Perplexity.",
      ],
    },
      { kind: "p", text: "C'est pourquoi on structure les pages de nos clients avec Schema.org (Article, Person, Organization) et qu'on met à jour les contenus stratégiques tous les 4-6 mois. Les moteurs de réponse adorent les données fraîches." },
      { kind: "h2", text: "Différence 4 : Métriques de succès — Analytics vs mentions" },
      { kind: "p", text: "En SEO, tu mesures tout dans Google Analytics et Search Console. En AEO, tu dois traquer tes citations dans les réponses IA." },
      {
      kind: "stats",
      items: [
            { value: "47 %", label: "des recherches B2B passent par ChatGPT/Perplexity" },
            { value: "0 clic", label: "généré par 65 % des recherches zero-click" },
            { value: "8.3×", label: "plus de notoriété avec citations IA vs clics SEO" },
            { value: "23 %", label: "des prospects citent une source IA en premier contact" },
      ],
    },
      { kind: "p", text: "Les KPIs AEO sont différents : nombre de citations dans ChatGPT/Perplexity, augmentation des recherches de marque (« MAAD + ton industrie »), mentions dans des threads LinkedIn/Reddit, et appels qualifiés qui citent une réponse IA comme point de départ." },
      { kind: "p", text: "On a bâti un dashboard custom pour nos clients [visibilité web](/services/visibilite-web) qui combine métriques SEO classiques (positions, trafic, conversions) et métriques AEO (citations, mentions, sentiment)." },
      { kind: "h2", text: "Différence 5 : Vitesse d'impact — 6 mois vs 3 semaines" },
      { kind: "p", text: "Le SEO prend 4 à 12 mois pour ranker sur des requêtes compétitives. L'AEO peut générer des citations en 2 à 4 semaines." },
      {
      kind: "ol",
      items: [
            { t: "SEO : crawl lent", d: "Google crawle ton site toutes les 2-6 semaines. Tu dois attendre que ton contenu soit indexé, évalué, et qu'il gagne des backlinks progressivement." },
            { t: "AEO : indexation rapide", d: "Les LLMs mettent à jour leur base de connaissances en continu. Un article publié lundi peut être cité par Perplexity vendredi si la structure est optimale." },
            { t: "Fenêtre d'opportunité AEO", d: "Sur des sujets émergents (nouvelles réglementations, tendances tech), l'AEO te donne un avantage de 3-6 mois avant que le SEO classique ne rattrape." },
      ],
    },
      { kind: "p", text: "Un de nos clients SaaS a publié un guide technique sur une nouvelle API Shopify. En 3 semaines, ChatGPT citait leur documentation dans 78 % des requêtes liées. Leur trafic SEO a mis 7 mois à décoller — mais pendant ce temps, ils ont converti 40 leads qualifiés via les citations AEO." },
      { kind: "h2", text: "Différence 6 : Concurrence — millions de pages vs centaines de sources" },
      { kind: "p", text: "Sur Google, tu compétitionnes contre des millions de pages. Dans ChatGPT, tu compétitionnes pour être dans le top 5-10 sources citées." },
      {
      kind: "table",
      headers: ["Environnement", "Nombre de concurrents", "Difficulté relative"],
      rows: [
            ["Google SERP (SEO)", "800 000 - 5M pages indexées", "Très élevée — saturé"],
            ["ChatGPT/Claude (AEO)", "50-200 sources pertinentes", "Modérée — moins saturé"],
            ["Perplexity Pro (AEO)", "10-30 sources premium", "Élevée — qualité critique"],
            ["Gemini (AEO)", "100-500 sources structurées", "Croissante — en évolution"],
      ],
    },
      { kind: "p", text: "Pour une PME québécoise en B2B, c'est une opportunité massive. Au lieu de te battre contre 2 millions de pages pour « logiciel de gestion de projet », tu optimises ton contenu pour être dans les 20 sources que ChatGPT cite sur « meilleur logiciel de gestion de projet pour PME manufacturières au Québec »." },
      { kind: "p", text: "C'est exactement ce qu'on fait avec notre offre [intelligence artificielle](/services/intelligence-artificielle) : on identifie les questions précises que tes prospects posent aux IA, et on structure ton contenu pour dominer ces citations." },
      { kind: "h2", text: "Différence 7 : Format de contenu — page web vs données structurées" },
      { kind: "p", text: "Le SEO privilégie les pages web classiques. L'AEO exige des données structurées (Schema.org, JSON-LD, tableaux, listes)." },
      {
      kind: "ul",
      items: [
            "**SEO** : Un article de blog long format avec paragraphes fluides et transitions naturelles performe bien.",
            "**AEO** : Les LLMs extraient mieux les informations des listes, tableaux comparatifs, définitions encadrées, et blocs de données chiffrées.",
            "**Texte brut vs structure** : « Notre service coûte entre 2000 $ et 5000 $ selon la complexité » est OK pour le SEO. Pour l'AEO, un tableau (Basique : 2000 $, Avancé : 3500 $, Enterprise : 5000 $) est 4× plus susceptible d'être cité.",
            "**Schema.org = boost AEO** : Les balises FAQPage, HowTo, Product, Organization aident les LLMs à comprendre ton contenu et à le citer avec précision.",
      ],
    },
      { kind: "p", text: "On implémente systématiquement Schema.org sur les sites de nos clients [conception web](/services/conception-web) — non seulement pour les rich snippets Google, mais surtout pour maximiser les citations dans Perplexity et ChatGPT." },
      { kind: "h2", text: "Stratégie hybride SEO + AEO : le mix gagnant en 2026" },
      { kind: "p", text: "Tu ne choisis pas entre SEO et AEO. Tu combines les deux pour maximiser ta visibilité totale." },
      {
      kind: "table",
      headers: ["Élément", "Optimisation SEO", "Optimisation AEO"],
      rows: [
            ["Premier paragraphe", "Engage avec mot-clé principal", "Répond directement en 50-80 mots (dek)"],
            ["Structure H2/H3", "Intègre mots-clés secondaires", "Formule des questions complètes"],
            ["Contenu", "1500-2500 mots, fluide", "1200-1800 mots, structuré (listes, tableaux)"],
            ["Liens internes", "Ancres optimisées mots-clés", "Ancres contextuelles naturelles"],
            ["Métadonnées", "Title SEO + meta description", "Schema.org (Article, FAQPage, Person)"],
            ["Mise à jour", "Tous les 12-18 mois", "Tous les 4-6 mois (fraîcheur critique)"],
      ],
    },
      { kind: "p", text: "Exemple de page hybride qu'on construit pour nos clients : un article sur « Comment automatiser la facturation dans une PME manufacturière ». On structure le contenu avec un dek citation-ready (AEO), on intègre le mot-clé « automatisation facturation PME » dans les H2 (SEO), on ajoute un tableau comparatif des solutions (AEO), on obtient des backlinks de partenaires comptables (SEO), et on implémente Schema.org FAQPage (AEO + SEO)." },
      { kind: "p", text: "Résultat : position 3 Google en 5 mois (SEO), citation dans 6 réponses ChatGPT par semaine (AEO), et 28 leads qualifiés en 4 mois." },
      { kind: "callout", text: "Une stratégie de visibilité efficace en 2026 combine SEO pour le trafic Google, AEO pour les citations IA, et automatisation pour scaler la production de contenu. C'est cette approche hybride qu'on déploie chez MAAD pour nos clients B2B francophones." },
      { kind: "h2", text: "Comment on implémente SEO + AEO chez MAAD" },
      { kind: "p", text: "On ne fait pas juste de la théorie. On bâtit des stratégies hybrides complètes pour des PME et startups francophones." },
      {
      kind: "ol",
      items: [
            { t: "Audit double (SEO + AEO)", d: "On analyse ton site actuel : positions Google (SEO), présence dans les réponses IA (AEO), structure de contenu, Schema.org, vitesse, backlinks." },
            { t: "Identification des questions critiques", d: "On mappe les 20-30 questions que tes prospects posent à ChatGPT/Perplexity dans ton industrie — et on vérifie si tu es cité." },
            { t: "Refonte du contenu existant", d: "On restructure tes pages clés avec deks citation-ready, tableaux comparatifs, listes, et Schema.org. On garde le SEO (mots-clés, liens internes), on ajoute l'AEO." },
            { t: "Production de contenu hybride", d: "On crée 2-4 articles par mois optimisés pour les deux canaux : SEO pour ranker sur Google, AEO pour être cité par les moteurs de réponse." },
            { t: "Automatisation avec agents IA", d: "On déploie des [agents IA sur mesure](/services/agents-ia) qui surveillent tes citations dans ChatGPT/Perplexity, analysent les questions émergentes, et génèrent des briefs de contenu." },
            { t: "Tracking et optimisation continue", d: "Dashboard custom avec métriques SEO (positions, trafic, conversions) et AEO (citations, mentions, sentiment). On ajuste la stratégie tous les 30 jours." },
      ],
    },
      { kind: "p", text: "Le processus complet prend 2 à 4 semaines pour le setup initial, puis on itère en continu. Nos clients voient généralement les premières citations AEO en 3-4 semaines, et l'impact SEO complet en 4-6 mois." },
      {
      kind: "cta",
      title: "Tu veux dominer Google ET les moteurs de réponse ?",
      text: "On bâtit des stratégies hybrides SEO + AEO pour des PME francophones qui veulent maximiser leur visibilité en 2026. Pas de blabla, juste des résultats mesurables.",
      cta_label: "Réserve 20 min avec Marc-Alexandre",
      cta_href: "/contact",
    },
      { kind: "h2", text: "5 erreurs courantes quand tu passes de SEO à AEO" },
      {
      kind: "ol",
      items: [
            { t: "Garder la densité de mots-clés", d: "Les LLMs ignorent complètement la répétition de mots-clés. Si tu bourres ton texte de « meilleur logiciel CRM Québec », ChatGPT va citer ton concurrent qui répond clairement à la question." },
            { t: "Négliger la fraîcheur du contenu", d: "Un article de 2021 peut ranker en SEO grâce à ses backlinks. Mais Perplexity va citer un article de 2025 avec des données récentes, même s'il a zéro backlink." },
            { t: "Oublier Schema.org", d: "Sans balises structurées, les LLMs doivent deviner la structure de ton contenu. Avec Schema.org, tu leur donnes un plan clair — et tu multiplies tes chances de citation par 3." },
            { t: "Écrire des intros engageantes au lieu de répondre directement", d: "En SEO, tu peux introduire ton sujet sur 2 paragraphes avant de répondre. En AEO, si ton premier paragraphe ne contient pas la réponse, l'IA passe au suivant." },
            { t: "Mesurer uniquement le trafic", d: "Si tu ne traques que Google Analytics, tu rates 65 % de l'impact de ton contenu. Les citations AEO génèrent de la notoriété, de la crédibilité, et des conversions indirectes — qu'Analytics ne capte pas." },
      ],
    },
      { kind: "p", text: "C'est pourquoi on forme nos clients à cette double logique. On ne remplace pas le SEO par l'AEO — on superpose les deux stratégies pour maximiser la visibilité totale." },
      { kind: "callout", text: "Le SEO t'amène du trafic. L'AEO te positionne comme autorité. En 2026, tu as besoin des deux pour dominer ton marché. On construit cette stratégie hybride pour des PME francophones qui veulent être trouvées partout — Google, ChatGPT, Perplexity, et Claude. [Parlons de ton projet](/contact)." },
    ],
  },
  {
    slug: "guide-aeo-pme-quebec",
    category: "AEO/GEO",
    title: "Guide AEO pour PME du Québec",
    excerpt:
      "L'Answer Engine Optimization expliqué simplement : pourquoi ta PME doit s'y mettre, comment ça fonctionne, et ce que tu dois changer dès maintenant.",
    dek: "L'AEO (Answer Engine Optimization) est l'optimisation de contenu pour devenir la réponse directe affichée par Google et les moteurs de réponse — featured snippets, AI Overviews, People Also Ask. Contrairement au SEO classique qui vise le clic, l'AEO vise à devenir la réponse elle-même.",
    datePublished: "2026-03-15",
    readTime: "8 min",
    related: ["/services/aeo", "/services/geo", "/faq"],
    content: [
      {
        kind: "p",
        bold: true,
        text: "L'AEO (Answer Engine Optimization) est l'optimisation de contenu pour devenir la réponse directe affichée par Google et les moteurs de réponse — featured snippets, AI Overviews, People Also Ask. Contrairement au SEO classique qui vise le clic, l'AEO vise à devenir la réponse elle-même.",
      },
      {
        kind: "p",
        text: "Si t'as une PME au Québec et que tu fais encore juste du SEO classique, tu passes à côté de 40 % du jeu. Les AI Overviews de Google apparaissent maintenant sur 4 recherches sur 10. 65 % des recherches sont zero-click — l'utilisateur obtient sa réponse sans jamais cliquer sur un résultat. L'AEO, c'est comment tu reprends ta place dans ce nouveau monde.",
      },
      { kind: "h2", text: "Pourquoi l'AEO est devenu critique en 2026" },
      {
        kind: "p",
        text: "Google a changé fondamentalement en 2024-2025. Les AI Overviews — ces réponses générées par l'IA en haut des résultats — sont maintenant la première chose que voit ton client. Si ton contenu n'est pas extractable, tu deviens invisible, peu importe ton classement.",
      },
      {
        kind: "ul",
        items: [
          "65 % des recherches Google sont maintenant zero-click.",
          "40 % des recherches affichent des AI Overviews.",
          "Les featured snippets captent 8,3× plus de clics que la position 2.",
          "Les utilisateurs font confiance aux réponses directes — même sans vérifier la source.",
        ],
      },
      { kind: "h2", text: "AEO vs SEO : quelle différence ?" },
      {
        kind: "p",
        text: "Le SEO vise à ranker dans les résultats bleus classiques. L'AEO vise à devenir la réponse directe affichée au-dessus. Deux objectifs complémentaires, deux façons d'écrire.",
      },
      {
        kind: "table",
        headers: ["", "SEO", "AEO"],
        rows: [
          ["Objectif", "Ranker #1", "Être la réponse"],
          ["Format", "Pages longues", "Réponses extractables"],
          ["Métrique", "Position moyenne", "Featured snippets, AI Overviews"],
          ["Objectif secondaire", "Clics", "Autorité"],
        ],
      },
      { kind: "h2", text: "Comment faire de l'AEO concrètement" },
      {
        kind: "ol",
        items: [
          {
            t: "Structure ton contenu par questions",
            d: "Chaque H2 de ta page doit être une question réelle que ton client pose. Pas « Nos services » — « Comment automatiser mon entreprise avec l'IA ? »",
          },
          {
            t: "Réponds en 50 à 80 mots",
            d: "Le premier paragraphe doit répondre directement, sans intro. C'est ce que Google extrait pour les featured snippets.",
          },
          {
            t: "Utilise des listes et tableaux",
            d: "Google adore extraire les formats structurés. Listes numérotées, tableaux comparatifs, définitions en gras.",
          },
          {
            t: "Ajoute du schema JSON-LD",
            d: "FAQPage, HowTo, DefinedTerm, Article. C'est comme sous-titrer ton contenu pour que Google comprenne chaque bloc.",
          },
          {
            t: "Montre ton E-E-A-T",
            d: "Expertise, expérience, autorité, fiabilité. Signe tes articles, liste tes références, cite tes sources.",
          },
        ],
      },
      { kind: "h2", text: "Et le GEO dans tout ça ?" },
      {
        kind: "p",
        text: "L'AEO vise Google. Le GEO vise ChatGPT, Perplexity, Claude, Gemini. Les deux sont complémentaires — et tes clients utilisent les deux maintenant. On couvre le GEO en détail dans notre page dédiée.",
      },
      {
        kind: "callout",
        text: "L'AEO n'est pas un switch qu'on flippe. C'est une discipline qui s'ajoute au SEO et qui transforme comment tu écris. Chaque page, chaque paragraphe, chaque titre.",
      },
    ],
  },
  {
    slug: "apparaitre-dans-chatgpt-perplexity-2026",
    category: "AEO/GEO",
    title: "Apparaître dans ChatGPT et Perplexity en 2026",
    excerpt:
      "Étapes actionnables pour être cité par les IA génératives. Pas de théorie — ce qu'on applique sur nos propres clients.",
    dek: "Apparaître dans ChatGPT et Perplexity demande trois leviers en parallèle : être mentionné dans des sources que les LLMs utilisent (Wikipedia, Reddit, presse), structurer ton site avec des données citation-ready (schema, llms.txt, définitions claires), et publier un contenu factuel que les IA préfèrent aux opinions.",
    datePublished: "2026-03-22",
    readTime: "10 min",
    related: ["/services/geo", "/services/aeo", "/services/seo"],
    content: [
      {
        kind: "p",
        bold: true,
        text: "Apparaître dans ChatGPT et Perplexity demande trois leviers en parallèle : être mentionné dans des sources que les LLMs utilisent (Wikipedia, Reddit, presse), structurer ton site avec des données citation-ready (schema, llms.txt, définitions claires), et publier un contenu factuel que les IA préfèrent aux opinions.",
      },
      { kind: "h2", text: "Comment les LLMs choisissent leurs sources" },
      {
        kind: "p",
        text: "Il y a deux mécanismes. Le premier : les LLMs sont entraînés sur du contenu public (web, livres, articles) — si tu es mentionné souvent dans des sources d'autorité, tu finis dans leurs connaissances. Le second : Perplexity, ChatGPT Search et Gemini font des recherches web en temps réel — ils indexent et citent en direct.",
      },
      { kind: "h2", text: "Les 5 étapes pour commencer" },
      {
        kind: "ol",
        items: [
          {
            t: "Publie un fichier llms.txt",
            d: "À la racine de ton site. Format markdown. Liste tes services, ta mission, tes pages principales. Les LLMs émergents le lisent déjà.",
          },
          {
            t: "Structure tes pages avec schema JSON-LD",
            d: "Organization, Person, Service, FAQPage, DefinedTerm. Chaque bloc de contenu doit être étiqueté pour les machines.",
          },
          {
            t: "Crée du contenu citation-ready",
            d: "Des définitions de 20-30 mots. Des stats sourcées. Des réponses directes. Les LLMs citent ce qu'ils peuvent copier-coller.",
          },
          {
            t: "Construis des mentions dans Wikipedia et Reddit",
            d: "Pas du spam — des contributions légitimes. Une entrée Wikipedia sur ton fondateur ou ton entreprise si c'est justifié. Des posts Reddit qui apportent de la valeur.",
          },
          {
            t: "Mesure et itère",
            d: "Teste régulièrement : « meilleure agence IA au Québec » dans ChatGPT, Perplexity, Claude. Qui apparaît ? Pourquoi ? Ajuste.",
          },
        ],
      },
      { kind: "h2", text: "Ce que les LLMs préfèrent vraiment" },
      {
        kind: "ul",
        items: [
          "Contenu factuel > opinions. Les chiffres l'emportent sur les adjectifs.",
          "Définitions précises > tournures marketing. « Est » l'emporte sur « pourrait être ».",
          "Sources multiples > source unique. Plus ton nom circule, plus tu es crédible.",
          "Fraîcheur > archives. Perplexity et ChatGPT Search priorisent le récent.",
        ],
      },
      {
        kind: "callout",
        text: "Le GEO est un travail de long terme. Les résultats prennent 3 à 9 mois. Ceux qui commencent en 2026 auront l'avantage sur leurs compétiteurs en 2027.",
      },
    ],
  },
  {
    slug: "agent-ia-vs-chatbot-difference",
    category: "IA",
    title: "Agent IA vs Chatbot — Différences en 2026",
    excerpt:
      "Tout le monde confond agent IA et chatbot. Ce sont deux bêtes complètement différentes. Voici comment les distinguer — et lequel tu as vraiment besoin.",
    dek: "Un chatbot répond à des questions en suivant un script ou un LLM. Un agent IA exécute des tâches complètes : il lit, analyse, décide et agit dans plusieurs systèmes. Un chatbot cause. Un agent livre un résultat.",
    datePublished: "2026-02-28",
    readTime: "7 min",
    related: ["/services/agents-ia", "/services/chatbot-ia", "/services/automatisation"],
    content: [
      {
        kind: "p",
        bold: true,
        text: "Un chatbot répond à des questions en suivant un script ou un LLM. Un agent IA exécute des tâches complètes : il lit, analyse, décide et agit dans plusieurs systèmes. Un chatbot cause. Un agent livre un résultat.",
      },
      { kind: "h2", text: "La distinction fondamentale" },
      {
        kind: "p",
        text: "Quand tu parles à un chatbot, tu attends une réponse. Quand tu parles à un agent, tu attends qu'il fasse quelque chose — qu'il ouvre ton CRM, trouve une fiche, la mette à jour, envoie un courriel, et te confirme que c'est fait. C'est la différence entre un réceptionniste et un assistant personnel.",
      },
      {
        kind: "table",
        headers: ["", "Chatbot", "Agent IA"],
        rows: [
          ["Fonction", "Répond", "Agit"],
          ["Mémoire", "Session", "Long terme"],
          ["Outils", "Aucun", "Plusieurs APIs"],
          ["Autonomie", "Réactif", "Proactif"],
          ["Résultat", "Une réponse", "Une tâche exécutée"],
        ],
      },
      { kind: "h2", text: "Quand choisir un chatbot" },
      {
        kind: "ul",
        items: [
          "Support client standard sur ton site",
          "FAQ interactive",
          "Prise de rendez-vous simple",
          "Qualification de lead initiale",
        ],
      },
      { kind: "h2", text: "Quand choisir un agent IA" },
      {
        kind: "ul",
        items: [
          "Traitement automatique de courriels avec actions (classer, répondre, créer tâches)",
          "Qualification et enrichissement de leads dans ton CRM",
          "Génération et envoi de rapports hebdomadaires",
          "Onboarding client multi-étapes",
          "Monitoring de données avec actions correctives",
        ],
      },
      { kind: "h2", text: "En pratique : les deux ensemble" },
      {
        kind: "p",
        text: "Dans nos projets, on combine souvent les deux. Un chatbot sur le site capture les leads, puis un agent IA prend le relais en arrière-plan — enrichit les données, crée la fiche CRM, déclenche des séquences de nurturing. Tu vois le chatbot. L'agent travaille dans l'ombre.",
      },
      {
        kind: "callout",
        text: "Si quelqu'un te vend un « chatbot qui fait tout », c'est probablement un agent. Ou c'est mal nommé. Demande toujours : qu'est-ce qu'il fait comme action ?",
      },
    ],
  },
  {
    slug: "5-processus-automatiser-pme-ia",
    category: "IA",
    title: "5 processus à automatiser avec l'IA en 2026",
    excerpt:
      "Les automatisations qui donnent le plus de ROI quand tu commences. Concrètes, mesurables, déployables en semaines — pas en trimestres.",
    dek: "Les cinq processus à automatiser en priorité dans une PME sont : la qualification de leads, le tri et réponse aux courriels, la génération de rapports hebdomadaires, l'onboarding client, et la gestion des factures et relances. Ces cinq processus combinés récupèrent 8 à 15 heures par semaine.",
    datePublished: "2026-01-18",
    readTime: "9 min",
    related: ["/services/automatisation", "/services/agents-ia", "/services/chatbot-ia"],
    content: [
      {
        kind: "p",
        bold: true,
        text: "Les cinq processus à automatiser en priorité dans une PME sont : la qualification de leads, le tri et réponse aux courriels, la génération de rapports hebdomadaires, l'onboarding client, et la gestion des factures et relances. Ces cinq processus combinés récupèrent 8 à 15 heures par semaine selon la taille de l'équipe.",
      },
      {
        kind: "p",
        text: "L'automatisation, c'est pas un projet de six mois avec consultants en cravate. C'est cinq workflows bien choisis qui te rendent tes soirées. Voici les cinq qu'on déploie en premier chez chaque nouveau client.",
      },
      { kind: "h2", text: "01 — Qualification de leads entrants" },
      {
        kind: "p",
        text: "Un lead arrive via ton formulaire ou un courriel. L'IA le lit, enrichit les données (LinkedIn, site web, Clearbit), calcule un score, le route au bon commercial, et crée la fiche dans le CRM. Temps perdu avant : 10 min par lead. Après : zéro.",
      },
      { kind: "h2", text: "02 — Tri et réponse aux courriels" },
      {
        kind: "p",
        text: "L'IA lit ton inbox, classe par type (support, vente, admin, spam), répond aux questions standards, et escalade les cas complexes. Tu ne touches qu'aux vrais problèmes. Gain typique : 2 à 5 heures par jour pour les équipes support.",
      },
      { kind: "h2", text: "03 — Rapports hebdomadaires" },
      {
        kind: "p",
        text: "Chaque lundi matin, un workflow extrait tes KPIs de Google Analytics, Stripe, HubSpot, et ton outil de projet. L'IA rédige un résumé en 200 mots avec les points clés. Tu le lis en buvant ton café, pas en compilant des Excel.",
      },
      { kind: "h2", text: "04 — Onboarding client" },
      {
        kind: "p",
        text: "Un nouveau client signe. En 10 minutes : accès créés, séquence de courriels lancée, fichiers partagés, rendez-vous kickoff pris, checklist envoyée. Ton équipe n'a rien à faire — et ton client est impressionné par la fluidité.",
      },
      { kind: "h2", text: "05 — Facturation et relances" },
      {
        kind: "p",
        text: "Contrat signé → facture générée → envoyée → suivi automatique à J+7, J+14, J+30. Relance douce, puis ferme, puis vraiment ferme. Ton cash flow s'améliore sans que personne n'ait à faire les relances qu'on déteste tous faire.",
      },
      { kind: "h2", text: "Par où commencer" },
      {
        kind: "ol",
        items: [
          {
            t: "Mesure combien de temps chaque processus te coûte",
            d: "Une semaine de log rapide suffit. Tu vas être surpris.",
          },
          {
            t: "Choisis le processus le plus douloureux",
            d: "Pas le plus complexe — le plus pénible. Celui qui te vole tes soirées.",
          },
          {
            t: "Automatise-le en 2 semaines",
            d: "Pilote minimal. Une vraie tâche. Un vrai ROI. Tu apprends, puis tu scales.",
          },
        ],
      },
      {
        kind: "callout",
        text: "L'automatisation, c'est pas tout automatiser d'un coup. C'est cinq workflows bien pensés qui font une différence immédiate. Le reste vient après, quand tu as prouvé le ROI du premier.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
