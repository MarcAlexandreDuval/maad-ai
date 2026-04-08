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
