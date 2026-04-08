import type { Metadata } from 'next'
import Breadcrumb from '@/app/components/Breadcrumb'
import FAQ from '@/app/components/FAQ'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'FAQ | Agence IA, SEO, AEO, GEO Québec',
  description:
    "Questions fréquentes sur l'AEO, le GEO, les agents IA, les chatbots IA, le SEO local à Joliette et les services de MAAD-AI pour les PME du Québec.",
  openGraph: {
    title: 'FAQ | MAAD-AI',
    description: "Réponses aux questions sur l'AEO, GEO, agents IA, chatbots et SEO pour PME québécoises.",
    url: 'https://maad-ai.com/faq/',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: { canonical: 'https://maad-ai.com/faq/' },
}

const faqItems = [
  {
    question: "C'est quoi l'AEO?",
    answer:
      "L'Answer Engine Optimization (AEO) est la pratique d'optimiser votre contenu pour apparaître comme réponse directe dans les moteurs de recherche et les assistants IA. Contrairement au SEO qui vise les liens bleus, l'AEO vise la position zéro — devenir LA réponse, pas un résultat parmi d'autres.",
    linkHref: '/services/aeo/',
    linkText: "Découvrir notre service d'Answer Engine Optimization",
  },
  {
    question: "C'est quoi le GEO?",
    answer:
      "Le Generative Engine Optimization (GEO) est l'optimisation de votre présence en ligne pour être cité et recommandé par les moteurs IA génératifs comme ChatGPT, Perplexity, Claude et Gemini. C'est le nouveau canal de visibilité qui grandit chaque mois à mesure que les acheteurs utilisent les LLMs pour comparer les solutions.",
    linkHref: '/services/geo/',
    linkText: "Découvrir comment apparaître dans ChatGPT",
  },
  {
    question: "C'est quoi un agent IA?",
    answer:
      "Un agent IA est un système d'intelligence artificielle autonome qui peut exécuter des tâches complexes — analyser des données, prendre des décisions et interagir avec d'autres systèmes — sans intervention humaine constante. Contrairement à un chatbot qui répond à des questions, un agent IA exécute des tâches.",
    linkHref: '/services/agents-ia/',
    linkText: "Voir notre service d'agents IA sur mesure",
  },
  {
    question: 'Combien coûte un agent IA?',
    answer:
      "Un agent IA sur mesure pour PME commence généralement à partir de 2 500 $ pour un agent simple (automatisation d'une tâche) et peut atteindre 15 000 $+ pour un système multi-agents complexe. Le ROI se mesure en heures économisées par semaine — typiquement 10 à 30 heures libérées.",
    linkHref: '/services/agents-ia/',
    linkText: 'Parler de ton projet d\u2019agent IA',
  },
  {
    question: "C'est quoi un chatbot IA?",
    answer:
      "Un chatbot IA est un assistant conversationnel propulsé par un LLM (comme Claude ou GPT) qui comprend le langage naturel. Contrairement aux chatbots scriptés, il peut répondre à des questions imprévues, qualifier des leads et prendre des rendez-vous de façon fluide — sur ton site web, WhatsApp ou par téléphone via Retell AI.",
    linkHref: '/services/chatbot-ia/',
    linkText: 'Voir notre service de chatbot IA',
  },
  {
    question: 'Combien coûte un site web à Joliette?',
    answer:
      "À Joliette, un site web PME professionnel se situe généralement entre 3 500 $ et 12 000 $ selon la complexité. Chez MAAD-AI, nos sites incluent d'office le SEO technique, l'AEO et le GEO — ce que les agences web traditionnelles facturent en extra, et qui devient critique quand tes prospects utilisent ChatGPT pour comparer les solutions.",
    linkHref: '/services/conception-web/',
    linkText: 'Notre service de conception web à Joliette',
  },
  {
    question: "C'est quoi le SEO local?",
    answer:
      "Le SEO local est l'optimisation d'un site et d'une fiche Google Business Profile pour apparaître dans les recherches géolocalisées et le Local Pack (la carte Google avec les 3 meilleurs résultats). Pour les PME de Joliette, Repentigny, L'Assomption et Terrebonne, c'est souvent le premier levier de croissance organique.",
    linkHref: '/services/seo-local/',
    linkText: 'Notre service de SEO local à Joliette',
  },
  {
    question: "Pourquoi une PME a besoin d'IA en 2026?",
    answer:
      "Parce que tes clients changent leurs habitudes : ils demandent à ChatGPT de leur recommander une solution avant même de googler, et les tâches répétitives qui coûtaient 10+ heures par semaine à tes équipes peuvent être automatisées pour une fraction du coût d'un employé. Les PME qui adoptent maintenant prennent une avance compétitive difficile à rattraper.",
    linkHref: '/services/',
    linkText: 'Voir tous nos services IA pour PME',
  },
  {
    question: 'AEO vs SEO — quelle différence?',
    answer:
      "Le SEO cherche à ranker dans les 10 liens bleus classiques de Google. L'AEO cherche à devenir la réponse directe affichée au-dessus — featured snippet, Google AI Overview, réponse d'assistant vocal. Le SEO génère des clics, l'AEO génère des citations et de l'autorité même quand il n'y a pas de clic.",
    linkHref: '/services/aeo/',
    linkText: "Voir notre service d'Answer Engine Optimization",
  },
  {
    question: 'Comment apparaître dans ChatGPT?',
    answer:
      "Cinq leviers : 1) Définir ton entité clairement sur ton site (qui tu es, ce que tu fais). 2) Publier un fichier llms.txt à la racine de ton domaine. 3) Ajouter des données structurées Schema.org complètes. 4) Bâtir des mentions cohérentes de ta marque sur des sources que ChatGPT considère fiables. 5) Créer du contenu avec des définitions citation-ready que les LLMs peuvent extraire verbatim.",
    linkHref: '/services/geo/',
    linkText: "Découvre notre service de Generative Engine Optimization",
  },
]

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://maad-ai.com' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://maad-ai.com/faq/' },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section pt-32 md:pt-40">
        <div className="container">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge badge-pulse">Questions fr&eacute;quentes</span>
            <h1 className="mt-6 mb-6">
              Tout ce que tu veux <span className="gradient-text">savoir</span>
            </h1>
            <p className="text-lg text-[var(--color-text-dim)]">
              R&eacute;ponses directes aux questions les plus courantes sur l&rsquo;AEO, le GEO, les agents IA,
              les chatbots et nos services pour PME qu&eacute;b&eacute;coises.
            </p>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      <CTA
        title="Tu as d'autres questions?"
        description="R&eacute;serve un appel gratuit de 30 minutes. On r&eacute;pond &agrave; toutes tes questions et on analyse ta visibilit&eacute; en ligne."
      />
    </main>
  )
}
