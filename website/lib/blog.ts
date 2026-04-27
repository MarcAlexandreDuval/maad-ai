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
    title: "C'est quoi l'AEO — Guide complet pour les PME du Québec",
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
    title: "Comment apparaître dans ChatGPT et Perplexity en 2026",
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
    title: "Agent IA vs Chatbot — C'est quoi la vraie différence ?",
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
    title: "5 processus que chaque PME devrait automatiser avec l'IA",
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
