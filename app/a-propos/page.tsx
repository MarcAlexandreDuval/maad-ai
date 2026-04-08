import type { Metadata } from 'next'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'À propos | MAAD-AI agence IA Joliette | Marc-Alexandre Duval',
  description:
    "MAAD-AI est une agence d'intelligence artificielle basée à Joliette, Québec, fondée par Marc-Alexandre Duval. Spécialisée en agents IA, automatisation, SEO, AEO et GEO pour les PME du Québec.",
  openGraph: {
    title: 'À propos | MAAD-AI',
    description: "Agence IA à Joliette fondée par Marc-Alexandre Duval. Agents IA, SEO, AEO, GEO.",
    url: 'https://maad-ai.com/a-propos/',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: { canonical: 'https://maad-ai.com/a-propos/' },
}

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Innovation',
    description: 'On reste à la fine pointe des avancées en IA et en marketing digital. Ce qui fonctionnait hier ne suffit plus demain — on anticipe les changements pour que tu gardes une longueur d\'avance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Transparence',
    description: 'Pas de jargon inutile ni de promesses en l\'air. On t\'explique exactement ce qu\'on fait, pourquoi on le fait, et quels résultats tu peux attendre. Tu as accès à tout, en tout temps.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Résultats',
    description: 'On mesure tout. Chaque action est guidée par les données et orientée vers un objectif clair : augmenter ta visibilité, ton trafic qualifié et tes conversions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Accessibilité',
    description: 'Les stratégies de pointe ne devraient pas être réservées aux grandes corporations. On rend le SEO, l\'AEO et le GEO accessibles aux PME, avec des forfaits adaptés à ta réalité.',
  },
]

export default function AProposPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'À propos de MAAD-AI',
    url: 'https://maad-ai.com/a-propos/',
    description:
      "MAAD-AI est une agence d'intelligence artificielle basée à Joliette, Québec, spécialisée en agents IA, automatisation, chatbots, SEO, AEO et GEO pour les PME québécoises.",
    mainEntity: {
      '@type': 'Organization',
      name: 'MAAD-AI',
      url: 'https://maad-ai.com',
      description:
        "Agence d'intelligence artificielle basée à Joliette, Québec, spécialisée en agents IA, automatisation, chatbots, SEO, AEO (Answer Engine Optimization) et GEO (Generative Engine Optimization) pour les PME québécoises.",
      founder: {
        '@type': 'Person',
        name: 'Marc-Alexandre Duval',
        jobTitle: 'Fondateur',
        worksFor: { '@type': 'Organization', name: 'MAAD-AI' },
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Joliette',
        addressRegion: 'Québec',
        addressCountry: 'CA',
      },
      areaServed: { '@type': 'AdministrativeArea', name: 'Québec' },
      knowsAbout: [
        'Intelligence artificielle',
        'Agents IA',
        'Automatisation',
        'Chatbot IA',
        'SEO',
        'SEO Local',
        'Answer Engine Optimization',
        'Generative Engine Optimization',
        'Conception web',
      ],
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero */}
      <section className="section pt-32 md:pt-40">
        <div className="container">
          <Breadcrumb items={[{ label: '\u00c0 propos' }]} />
          <div className="max-w-3xl">
            <span className="badge badge-pulse">MAAD-AI &middot; Joliette, Qu&eacute;bec</span>
            <h1 className="mt-6 mb-6">
              Agence d&rsquo;intelligence artificielle bas&eacute;e &agrave; <span className="gradient-text">Joliette, Qu&eacute;bec</span>
            </h1>
            <p className="text-lg text-[var(--color-text-dim)] leading-relaxed">
              MAAD-AI est une agence d&rsquo;intelligence artificielle bas&eacute;e &agrave; Joliette, Lanaudi&egrave;re, Qu&eacute;bec,
              fond&eacute;e par Marc-Alexandre Duval. L&rsquo;agence se sp&eacute;cialise en agents IA, automatisation,
              chatbots IA, SEO, SEO local, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization)
              et conception web. Nous aidons les PME qu&eacute;b&eacute;coises &agrave; devenir visibles dans Google, dans les
              r&eacute;ponses directes et dans les citations des moteurs IA g&eacute;n&eacute;ratifs comme ChatGPT, Perplexity,
              Claude et Gemini.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">L&apos;histoire</p>
              <h2 className="mb-6">D&apos;une passion tech à une agence avec une mission</h2>
              <div className="space-y-5">
                <p>
                  MAAD-AI a été fondée à Joliette, au cœur de Lanaudière, avec une vision claire : aider les entreprises québécoises à naviguer la transformation digitale provoquée par l&apos;intelligence artificielle.
                </p>
                <p>
                  Alors que Google intègre des réponses IA directement dans ses résultats, que ChatGPT et Perplexity deviennent des moteurs de recherche à part entière, et que les utilisateurs posent de plus en plus de questions complexes aux assistants vocaux, les règles du jeu ont changé.
                </p>
                <p>
                  Le SEO traditionnel ne suffit plus. Il faut maintenant maîtriser l&apos;AEO (Answer Engine Optimization) pour apparaître dans les réponses directes, et le GEO (Generative Engine Optimization) pour être cité par les IA génératives. C&apos;est exactement ce qu&apos;on fait chez MAAD-AI.
                </p>
              </div>
            </div>
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[rgba(0,200,150,0.08)] border border-[rgba(0,200,150,0.15)] flex items-center justify-center">
                  <span className="text-[var(--color-emerald)] font-mono text-xl font-bold">MAD</span>
                </div>
                <div>
                  <h3 className="text-lg">Marc-Alexandre Duval</h3>
                  <p className="text-sm" style={{ color: 'var(--color-emerald)' }}>Fondateur, MAAD-AI</p>
                </div>
              </div>
              <div className="space-y-4">
                <p>
                  Passionné de technologie et de marketing digital depuis plus de 10 ans, Marc-Alexandre combine une expertise technique approfondie avec une compréhension fine des besoins des PME.
                </p>
                <p>
                  Son parcours en développement web, en stratégie numérique et en intelligence artificielle lui permet d&apos;offrir des solutions concrètes et mesurables aux entrepreneurs qui veulent se démarquer en ligne.
                </p>
                <p>
                  &laquo;&nbsp;Mon objectif, c&apos;est que chaque PME du Québec puisse être trouvée, citée et recommandée — autant par Google que par les IA. C&apos;est pas un luxe, c&apos;est une nécessité.&nbsp;&raquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AEO & GEO Now */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-label">Le contexte</p>
            <h2 className="mb-6">Pourquoi l&apos;AEO et le GEO <span className="text-em">maintenant</span></h2>
            <p className="text-lg">
              L&apos;industrie du search vit sa plus grande transformation depuis l&apos;invention de Google. Si tu n&apos;adaptes pas ta stratégie aujourd&apos;hui, tu seras invisible demain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <div className="step-number mb-6">01</div>
              <h3 className="mb-4">Les IA répondent aux questions</h3>
              <p>
                ChatGPT, Gemini, Perplexity et Copilot génèrent des réponses complètes au lieu de listes de liens. Si ton contenu n&apos;est pas structuré pour être cité, tu n&apos;existes pas dans ces réponses.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="step-number mb-6">02</div>
              <h3 className="mb-4">Google évolue avec AI Overviews</h3>
              <p>
                Google affiche maintenant des résumés IA en haut des résultats. Les clics organiques diminuent. Pour rester visible, il faut optimiser pour ces nouveaux formats — c&apos;est l&apos;AEO.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="step-number mb-6">03</div>
              <h3 className="mb-4">Les habitudes de recherche changent</h3>
              <p>
                Les utilisateurs posent des questions en langage naturel, utilisent la voix, et s&apos;attendent à des réponses instantanées. Le contenu optimisé pour ces comportements a un avantage décisif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Nos valeurs</p>
            <h2 className="mb-6">Ce qui nous guide au quotidien</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8">
                <div className="text-[var(--color-emerald)] mb-4">{value.icon}</div>
                <h3 className="mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
