import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'Services IA entreprise Québec | Agents IA, SEO, AEO, GEO, Automatisation',
  description:
    "Services IA intégrés pour PME du Québec : agents IA, automatisation, chatbots, SEO, SEO local, AEO, GEO, conception web. Une seule agence pour toute ta visibilité.",
  alternates: { canonical: 'https://maad-ai.com/services/' },
  openGraph: {
    title: 'Services IA entreprise Québec | MAAD-AI',
    description: 'Services IA intégrés pour PME québécoises. Agents IA, SEO, AEO, GEO, automatisation.',
    url: 'https://maad-ai.com/services/',
    type: 'website',
    locale: 'fr_CA',
  },
}

const services = [
  {
    title: 'Agents IA',
    href: '/services/agents-ia/',
    description:
      "Un agent IA est un système autonome qui exécute des tâches complexes sans supervision humaine constante. On conçoit des agents sur mesure avec CrewAI, n8n et LLMs pour les PME du Québec.",
    who: 'Pour les B2B et SaaS qui veulent automatiser prospection, qualification et opérations.',
  },
  {
    title: 'Automatisation',
    href: '/services/automatisation/',
    description:
      "L'automatisation IA utilise n8n et les LLMs pour exécuter automatiquement des processus métier répétitifs — de l'entrée de données à la décision complexe. Self-hosted, flexible, puissant.",
    who: 'Pour les PME qui perdent 10+ heures par semaine sur des tâches répétitives.',
  },
  {
    title: 'Chatbot IA',
    href: '/services/chatbot-ia/',
    description:
      "Chatbot IA propulsé par LLMs (Claude, GPT) pour site web, WhatsApp ou téléphone via Retell AI. Comprend le langage naturel — pas des scripts rigides. Réceptionniste IA 24/7.",
    who: 'Pour les e-commerce, SaaS, cliniques et services pros qui veulent un support 24/7.',
  },
  {
    title: 'SEO',
    href: '/services/seo/',
    description:
      "Le SEO (Search Engine Optimization) optimise ton site pour les résultats organiques de Google. Technique, on-page, off-page. La fondation sans laquelle l'AEO et le GEO ne performent pas.",
    who: 'Pour les PME qui veulent une fondation de visibilité organique durable.',
  },
  {
    title: 'SEO Local',
    href: '/services/seo-local/',
    description:
      "Optimisation Google Business Profile, Local Pack et contenu géo-ciblé pour les PME de Joliette, Lanaudière et Québec. Premier levier de croissance pour les entreprises de proximité.",
    who: 'Pour restaurants, cliniques, plombiers, comptables et services locaux.',
  },
  {
    title: 'AEO',
    href: '/services/aeo/',
    description:
      "L'Answer Engine Optimization vise la position zéro — devenir LA réponse directe dans Google AI Overviews, featured snippets et assistants vocaux. Pas un résultat parmi d'autres.",
    who: 'Pour dominer les questions de ton secteur dans Google AI Overviews.',
  },
  {
    title: 'GEO',
    href: '/services/geo/',
    description:
      "Le Generative Engine Optimization optimise ta présence pour être cité et recommandé par ChatGPT, Perplexity, Claude et Gemini. Le nouveau canal de visibilité qui grandit chaque mois.",
    who: 'Pour les SaaS et B2B dont les acheteurs utilisent ChatGPT pour comparer.',
  },
  {
    title: 'Conception Web',
    href: '/services/conception-web/',
    description:
      "Sites web sur mesure à Joliette : React, Next.js, mobile-first, Core Web Vitals 95+, avec SEO, AEO et GEO intégrés dès la conception. Pas de templates WordPress.",
    who: 'Pour les PME de Lanaudière qui veulent un site optimisé pour Google ET ChatGPT.',
  },
]

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: { '@type': 'ProfessionalService', name: 'MAAD-AI', url: 'https://maad-ai.com' },
    name: 'Services IA, SEO, AEO, GEO pour PME Québec',
    description:
      "Services intégrés d'agents IA, automatisation, chatbots, SEO, AEO, GEO et conception web pour PME québécoises.",
    areaServed: { '@type': 'AdministrativeArea', name: 'Québec' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services MAAD-AI',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
          url: `https://maad-ai.com${s.href}`,
        },
        position: i + 1,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://maad-ai.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://maad-ai.com/services/' },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="section pt-32 md:pt-40">
        <div className="container">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="badge badge-pulse mb-6">Services IA · SEO · AEO · GEO</div>
          <h1 className="mb-6 max-w-3xl">
            Une agence. Huit services. Toute ta visibilit&eacute; sous un m&ecirc;me toit.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 text-[var(--color-text-dim)]">
            MAAD-AI est l&rsquo;une des seules agences au Qu&eacute;bec &agrave; combiner SEO, AEO, GEO, agents IA,
            chatbots et automatisation sous un m&ecirc;me toit. Pendant que tes comp&eacute;titeurs empilent
            trois fournisseurs qui ne se parlent pas, toi tu as une strat&eacute;gie int&eacute;gr&eacute;e.
          </p>
        </div>
      </section>

      {/* SEO vs AEO vs GEO comparison */}
      <section className="section">
        <div className="container">
          <p className="section-label">Les trois piliers de la visibilit&eacute; en 2026</p>
          <h2 className="mb-8">SEO, AEO et GEO &mdash; quelle diff&eacute;rence?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card p-8">
              <div className="step-number mb-4">01</div>
              <h3 className="text-lg mb-3">SEO</h3>
              <p className="text-sm text-[var(--color-text-dim)] mb-3">
                Optimise pour les 10 liens bleus de Google. Technique, on-page, off-page.
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Cible : r&eacute;sultats organiques classiques.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="step-number mb-4">02</div>
              <h3 className="text-lg mb-3">AEO</h3>
              <p className="text-sm text-[var(--color-text-dim)] mb-3">
                Optimise pour la position z&eacute;ro &mdash; featured snippets et Google AI Overviews.
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Cible : r&eacute;ponses directes de Google.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="step-number mb-4">03</div>
              <h3 className="text-lg mb-3">GEO</h3>
              <p className="text-sm text-[var(--color-text-dim)] mb-3">
                Optimise pour &ecirc;tre cit&eacute; par ChatGPT, Perplexity, Claude, Gemini.
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                Cible : moteurs IA g&eacute;n&eacute;ratifs.
              </p>
            </div>
          </div>
          <p className="text-base text-[var(--color-text-dim)] max-w-3xl leading-relaxed">
            Les trois sont compl&eacute;mentaires. Le SEO reste la fondation technique. L&rsquo;AEO vise les
            r&eacute;ponses directes de Google. Le GEO cible les nouveaux moteurs IA. Chez MAAD-AI, on les
            travaille ensemble &mdash; parce qu&rsquo;une strat&eacute;gie int&eacute;gr&eacute;e donne toujours plus que trois
            strat&eacute;gies en silos.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="section">
        <div className="container">
          <p className="section-label">Nos 8 services</p>
          <h2 className="mb-12">Tout ce qu&rsquo;il faut pour &ecirc;tre trouv&eacute;</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="glass-card p-8 group hover:border-[var(--color-emerald)] transition-colors flex flex-col"
              >
                <div className="step-number mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg mb-3 group-hover:text-[var(--color-emerald)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-dim)] mb-3">{service.description}</p>
                <p className="text-xs text-[var(--color-text-muted)] italic mt-auto">{service.who}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--color-emerald)]">
                  En savoir plus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
