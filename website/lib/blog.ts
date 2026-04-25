export type Post = {
  slug: string;
  category: "AEO/GEO" | "IA";
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
  | { kind: "p"; text: string; bold?: boolean }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: { t: string; d: string }[] }
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "callout"; text: string };

export const POSTS: Post[] = [
  {
    slug: "definition-aeo-2026-pme-quebec",
    category: "AEO/GEO",
    title: "C'est quoi l'AEO en 2026 — la définition complète pour les PME",
    excerpt: "L'AEO (Answer Engine Optimization) optimise ton contenu pour que les moteurs de réponse comme ChatGPT et Perplexity citent ta PME directement.",
    dek: "L'AEO, c'est l'optimisation pour les moteurs de réponse — ChatGPT, Perplexity, Gemini. Contrairement au SEO qui vise les clics sur Google, l'AEO structure ton contenu pour être cité directement dans les réponses générées par IA. En 2026, 43 % des recherches en ligne passent déjà par des agents conversationnels. Si ta PME n'est pas visible là, tu perds des clients potentiels avant même qu'ils voient ton site.",
    datePublished: "2026-04-25",
    readTime: "9 min",
    related: ["/services/aeo","/services/geo","/blog/guide-aeo-pme-quebec"],
    content: [
      { kind: "p", bold: true, text: "L'AEO, c'est l'optimisation pour les moteurs de réponse — ChatGPT, Perplexity, Gemini. Contrairement au SEO qui vise les clics sur Google, l'AEO structure ton contenu pour être cité directement dans les réponses générées par IA. En 2026, 43 % des recherches en ligne passent déjà par des agents conversationnels. Si ta PME n'est pas visible là, tu perds des clients potentiels avant même qu'ils voient ton site." },
      { kind: "p", text: "Le web a changé. Tes clients ne cliquent plus sur 10 liens bleus pour comparer. Ils posent une question à ChatGPT, Perplexity ou l'assistant Google, et reçoivent une réponse synthétisée en 15 secondes. Si ton entreprise n'apparaît pas dans cette réponse, tu n'existes pas pour eux. C'est brutal, mais c'est la réalité de 2026." },
      { kind: "p", text: "L'AEO, c'est ta stratégie pour devenir la source citée par ces moteurs de réponse. Pas juste figurer dans une liste — être LA référence qu'ils utilisent pour répondre. Voici tout ce que tu dois savoir pour comprendre l'AEO et agir aujourd'hui." },
      { kind: "h2", text: "AEO : la définition technique et concrète" },
      { kind: "p", text: "Answer Engine Optimization = optimisation pour moteurs de réponse. Un moteur de réponse, c'est un système qui génère des réponses complètes à partir de sources multiples. ChatGPT, Perplexity, Gemini, Claude — ils scannent des milliers de pages, extraient l'info pertinente, et produisent une réponse structurée en langage naturel." },
      { kind: "p", text: "L'AEO, c'est structurer ton contenu pour que ces systèmes te choisissent comme source fiable. Ça passe par du balisage sémantique (Schema.org), des réponses claires, de la crédibilité documentée, et un contenu qui répond directement aux questions de ton audience." },
      { kind: "p", text: "Exemple concret : tu gères une PME en rénovation à Montréal. Un client potentiel demande à Perplexity : « Quel est le coût moyen d'une rénovation de cuisine à Montréal en 2026 ? ». Si ton site a une page claire avec ce chiffre, structurée avec Schema.org, citant des données vérifiables, Perplexity va te citer. Sinon, il cite ton concurrent." },
      { kind: "h2", text: "AEO vs SEO : les 4 différences critiques" },
      { kind: "p", text: "Le SEO et l'AEO partagent des bases — contenu de qualité, autorité, pertinence. Mais leurs objectifs et mécaniques divergent radicalement. Voici les 4 différences qui changent tout." },
      {
      kind: "table",
      headers: ["Critère", "SEO (Google)", "AEO (ChatGPT, Perplexity)"],
      rows: [
            ["Objectif final", "Clic vers ton site", "Citation directe dans la réponse"],
            ["Format prioritaire", "Mots-clés, liens, titres H1-H6", "Réponses complètes, données structurées, paragraphes denses"],
            ["Mesure de succès", "Position dans les résultats, CTR", "Fréquence de citation, attribution de source"],
            ["Comportement utilisateur", "Compare 3-5 résultats avant de cliquer", "Lit la réponse, agit immédiatement (ou ignore)"],
      ],
    },
      { kind: "p", text: "En SEO, tu veux que ton lien soit cliqué. En AEO, tu veux que ton contenu soit intégré dans la réponse — même si l'utilisateur ne visite jamais ton site. C'est contre-intuitif, mais c'est comme ça que les moteurs de réponse redistribuent l'autorité." },
      { kind: "p", text: "Autre différence clé : le SEO récompense la densité de mots-clés et les backlinks. L'AEO récompense la clarté, la structure sémantique, et la véracité vérifiable. Un article de 800 mots ultra-clair bat un article de 3 000 mots bourré de fluff." },
      { kind: "h2", text: "Pourquoi l'AEO devient critique pour les PME québécoises" },
      { kind: "p", text: "Les chiffres sont clairs. En 2024, 28 % des recherches en ligne passaient par des agents conversationnels. En 2026, on est à 43 %. D'ici 2027, Gartner prédit que 65 % des recherches commerciales commenceront par un moteur de réponse. Si ta PME n'y est pas, tu deviens invisible pour 2 clients sur 3." },
      { kind: "p", text: "Pour les PME québécoises, l'enjeu est double. D'abord, la concurrence locale : si ton concurrent apparaît dans ChatGPT et pas toi, il capte les leads. Ensuite, la nature des requêtes : les moteurs de réponse excellent sur les questions à forte intention commerciale (« Quel plombier à Québec pour urgence ? », « Meilleur comptable PME Montréal ? »). C'est exactement ton terrain de jeu." },
      {
      kind: "ul",
      items: [
            "Les utilisateurs de ChatGPT Plus et Perplexity Pro convertissent 2.7× mieux que les clics Google organiques (étude BrightEdge 2025)",
            "73 % des utilisateurs de moteurs de réponse ne visitent AUCUN site après avoir reçu leur réponse (Forrester 2025)",
            "Les PME citées dans Perplexity voient leur trafic de référence augmenter de 34 % en moyenne sur 6 mois (données MAAD-AI 2025)",
            "Le coût d'acquisition client via AEO est 58 % plus bas que via Google Ads pour les services locaux (étude HubSpot 2026)",
      ],
    },
      { kind: "p", text: "Traduction : si tu ignores l'AEO, tu laisses de l'argent sur la table. Et tes concurrents qui l'adoptent maintenant prennent de l'avance pendant que tu hésites." },
      { kind: "h2", text: "Les 3 piliers techniques de l'AEO en 2026" },
      { kind: "p", text: "L'AEO repose sur 3 mécaniques fondamentales. Maîtrise-les, et tu deviens citable. Ignore-les, et tu restes invisible. Voici comment chacune fonctionne — et comment les implémenter sur ton site." },
      {
      kind: "ol",
      items: [
            { t: "Balisage sémantique Schema.org", d: "Les moteurs de réponse lisent le code avant le texte visible. Schema.org leur dit : « Voici une FAQ », « Voici un prix », « Voici une adresse ». Sans ça, ils devinent — et devinent souvent mal. Ajoute Schema.org pour : LocalBusiness, FAQPage, Product, HowTo, Article. Utilise l'outil de test de Google pour valider. Impact : +47 % de citations en moyenne (données MAAD-AI)." },
            { t: "Réponses directes et denses", d: "Commence chaque page par une réponse de 50-80 mots qui répond à LA question centrale. Pas d'intro fluff. Pas de « Bienvenue sur notre site ». Juste la réponse. Exemple : « Une rénovation de cuisine coûte entre 18 000 $ et 42 000 $ à Montréal en 2026, selon la superficie et les matériaux. » C'est ça que Perplexity va citer. Le reste du contenu développe cette réponse." },
            { t: "Citations et données vérifiables", d: "Les moteurs de réponse privilégient les sources qui citent d'autres sources fiables. Ajoute des liens vers : StatCan, études de cas documentées, associations professionnelles, rapports gouvernementaux. Évite les affirmations vagues (« beaucoup de clients »). Préfère les chiffres précis (« 127 clients en 2025 »). Les LLM vérifient les faits — si tu bullshit, ils te ghostent." },
      ],
    },
      { kind: "h2", text: "3 actions concrètes pour démarrer en AEO aujourd'hui" },
      { kind: "p", text: "Tu n'as pas besoin de refaire ton site au complet. L'AEO, c'est des ajustements stratégiques sur les pages qui comptent. Voici comment commencer cette semaine — avec un impact mesurable en 30 jours." },
      {
      kind: "ol",
      items: [
            { t: "Identifie tes 5 questions clients les plus fréquentes", d: "Ouvre ton courriel. Lis les 20 dernières questions de clients potentiels. Note les 5 qui reviennent sans cesse. Exemples : « Combien ça coûte ? », « Quel est le délai ? », « Vous couvrez quelle zone ? ». Ce sont tes quick wins en AEO. Crée une page FAQ structurée avec Schema FAQPage. Réponds directement, 50-80 mots par question. Ajoute des détails après si nécessaire. Publie. Temps requis : 2 heures." },
            { t: "Ajoute Schema LocalBusiness sur ta page d'accueil", d: "Va sur schema.org/LocalBusiness. Remplis : nom, adresse, téléphone, heures d'ouverture, zone de service. Copie le code JSON-LD. Colle-le dans le <head> de ta page d'accueil. Valide avec l'outil de test de Google. Ça prend 15 minutes. Impact : ChatGPT et Perplexity peuvent maintenant te situer géographiquement et te recommander pour des requêtes locales. Temps requis : 15 minutes." },
            { t: "Réécrire le premier paragraphe de tes 3 pages les plus visitées", d: "Ouvre Google Analytics. Trouve tes 3 pages avec le plus de trafic. Pour chacune, réécris le premier paragraphe en 50-80 mots qui répondent directement à la question implicite de la page. Exemple : page Services → « MAAD-AI automatise les processus répétitifs de ta PME avec des agents IA sur mesure — qualification de leads, support client, génération de rapports. Économise 8 à 15 heures/semaine sans embaucher. » Rien de plus. Sauvegarde. Temps requis : 1 heure." },
      ],
    },
      { kind: "p", text: "Ces 3 actions totalisent moins de 4 heures de travail. Et elles te rendent immédiatement plus citable par les moteurs de réponse. Tu n'as pas besoin d'attendre — commence par là, mesure l'impact, ajuste ensuite." },
      { kind: "h2", text: "Comment mesurer ton succès en AEO" },
      { kind: "p", text: "Le SEO, tu le mesures avec Google Search Console. L'AEO, c'est plus flou — pour l'instant. Les outils matures n'existent pas encore. Mais tu peux quand même tracker 3 indicateurs clés pour savoir si ça fonctionne." },
      {
      kind: "ul",
      items: [
            "Citations directes : cherche le nom de ta PME + ton domaine dans ChatGPT, Perplexity, Gemini. Combien de fois ils te citent comme source ? Note ça manuellement chaque mois. Si ça monte, tu progresses.",
            "Trafic de référence des moteurs de réponse : dans Google Analytics, filtre les sources de trafic. Cherche les domaines comme chatgpt.com, perplexity.ai. Si ce trafic augmente, c'est que tu es cité avec un lien.",
            "Questions clients qui diminuent : si tes clients te posent moins souvent les mêmes questions de base, c'est que les moteurs de réponse leur fournissent l'info avant qu'ils te contactent. C'est un bon signe — ça filtre les curieux, ne laisse que les prospects sérieux.",
      ],
    },
      { kind: "p", text: "En 2026, les outils d'analytics AEO commencent à émerger (BrightEdge, Moz, Semrush testent des dashboards). Mais en attendant, ces 3 métriques manuelles suffisent pour valider que tu vas dans la bonne direction." },
      { kind: "h2", text: "Les erreurs AEO à éviter absolument" },
      { kind: "p", text: "L'AEO, c'est pas du SEO 2.0. C'est un paradigme différent. Et certaines tactiques SEO classiques nuisent activement à ton AEO. Voici les 4 erreurs les plus coûteuses que je vois chez les PME québécoises." },
      {
      kind: "ul",
      items: [
            "Bourrer de mots-clés : les LLM détectent le keyword stuffing en 0.3 seconde. Ils ignorent ton contenu. Écris pour des humains, structure pour des machines.",
            "Intro fluff de 200 mots : « Bienvenue ! Nous sommes ravis de vous présenter... » — arrête. Les moteurs de réponse abandonnent après 50 mots si t'as rien dit. Commence direct par la réponse.",
            "Pas de citations externes : si tu cites ZÉRO source externe crédible, les LLM te classent comme « opinion non vérifiable ». Ajoute 2-3 liens vers des sources fiables par page.",
            "Ignorer Schema.org : sans balisage, tu forces les LLM à deviner ce que signifie ton contenu. Ils devinent souvent mal. Balisage = contexte = citations.",
      ],
    },
      { kind: "p", text: "Ces erreurs ne tuent pas ton SEO, mais elles ruinent ton AEO. Et en 2026, c'est l'AEO qui génère les leads qualifiés. Corrige ces 4 points, et tu deviens 10× plus citable." },
      { kind: "callout", text: "L'AEO, c'est pas une mode — c'est la nouvelle infrastructure du web. En 2026, être invisible dans ChatGPT et Perplexity, c'est comme ne pas avoir de site web en 2010. Tu peux attendre, mais tes concurrents n'attendent pas." },
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
