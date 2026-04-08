import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'SEO B2B au Québec',
  description:
    'Stratégies SEO, AEO et GEO conçues pour les entreprises B2B au Québec. Thought leadership, génération de leads et visibilité auprès des décideurs.',
  openGraph: {
    title: 'SEO B2B au Québec | MAAD-AI',
    description:
      'Positionnement organique pour les cycles de vente longs. On fait de ta marque la référence que les décideurs trouvent en premier.',
    url: 'https://maad-ai.com/industries/b2b',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/industries/b2b',
  },
}

const features = [
  {
    title: 'Thought leadership',
    description:
      'On crée du contenu de fond qui positionne ton équipe comme experte — articles, livres blancs et études de cas optimisés pour le référencement.',
  },
  {
    title: 'Content marketing SEO',
    description:
      'Stratégie éditoriale alignée sur chaque étape du funnel B2B : sensibilisation, considération et décision. Chaque contenu cible une intention de recherche précise.',
  },
  {
    title: 'Génération de leads organiques',
    description:
      'Pages d\'atterrissage, guides téléchargeables et séquences de contenu qui captent des prospects qualifiés directement depuis Google.',
  },
  {
    title: 'Visibilité LinkedIn & IA',
    description:
      'Stratégie GEO pour que ton entreprise soit citée par ChatGPT, Perplexity et les outils IA utilisés par les professionnels dans leur processus de recherche.',
  },
  {
    title: 'Ciblage des décideurs',
    description:
      'Contenu optimisé pour les requêtes spécifiques des C-level et directeurs : comparatifs, ROI, analyses sectorielles — le vocabulaire de ceux qui signent les chèques.',
  },
  {
    title: 'Support ABM',
    description:
      'Stratégie de contenu personnalisée par segment de comptes. On optimise ta présence pour que tes comptes cibles te trouvent avant tes compétiteurs.',
  },
]

export default function B2BPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://maad-ai.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://maad-ai.com/industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'B2B',
        item: 'https://maad-ai.com/industries/b2b',
      },
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="section pt-32 md:pt-40">
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Industries', href: '/industries' },
              { label: 'B2B' },
            ]}
          />

          <div className="max-w-3xl">
            <span className="badge badge-pulse mb-6">B2B · Cycle de vente long</span>
            <h1 className="mb-6">
              Deviens la <span className="gradient-text">référence</span> que tes
              prospects trouvent en premier
            </h1>
            <p className="text-lg max-w-2xl">
              En B2B, la décision d&apos;achat prend des semaines, parfois des mois.
              Pendant tout ce temps, tes futurs clients cherchent, comparent et
              consultent. Notre mission : s&apos;assurer qu&apos;ils tombent toujours
              sur toi — dans Google, dans les réponses IA et dans leur fil LinkedIn.
            </p>
          </div>
        </div>
      </section>

      {/* Why B2B is different */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">Le défi B2B</p>
          <h2 className="mb-6">
            Un cycle de vente long exige une{' '}
            <span className="text-em">visibilité constante</span>
          </h2>
          <p className="mb-4">
            Contrairement au B2C, ton acheteur ne convertit pas sur un coup de tête. Il
            fait des recherches approfondies, consulte ses collègues, lit des comparatifs
            et demande à ChatGPT. Si ta marque n&apos;apparaît pas à chacune de ces
            étapes, tu perds le deal avant même de savoir qu&apos;il existait.
          </p>
          <p className="mb-4">
            Le SEO B2B traditionnel se concentrait sur les mots-clés transactionnels.
            Aujourd&apos;hui, avec l&apos;AEO et le GEO, il faut aussi dominer les
            réponses générées par l&apos;IA — parce que c&apos;est là que les décideurs
            commencent leur recherche en 2025.
          </p>
          <p>
            Chez MAAD-AI, on bâtit une stratégie de visibilité complète : du premier
            contact informationnel jusqu&apos;à la page de conversion, en passant par
            tous les points de contact intermédiaires.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <p className="section-label">Notre approche</p>
          <h2 className="mb-10">
            Six piliers pour dominer ton <span className="text-em">marché B2B</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card p-6">
                <div className="step-number mb-4">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg mb-3">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">Résultats concrets</p>
          <h2 className="mb-6">
            Ce que ça change pour ton <span className="text-em">pipeline</span>
          </h2>
          <div className="space-y-4">
            <div className="glass-card p-6 flex items-start gap-4">
              <span className="text-em text-2xl font-bold">+</span>
              <div>
                <h3 className="text-base mb-1">Plus de leads entrants qualifiés</h3>
                <p className="text-sm">
                  Un contenu bien positionné attire des prospects qui ont déjà identifié
                  leur problème — pas besoin de faire du cold call.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <span className="text-em text-2xl font-bold">+</span>
              <div>
                <h3 className="text-base mb-1">Cycle de vente raccourci</h3>
                <p className="text-sm">
                  Quand tes prospects te trouvent à chaque étape de leur recherche, la
                  confiance se bâtit avant même le premier appel de vente.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <span className="text-em text-2xl font-bold">+</span>
              <div>
                <h3 className="text-base mb-1">Autorité de marque renforcée</h3>
                <p className="text-sm">
                  Être cité par les IA et apparaître en premier sur Google, ça crée un
                  effet de halo : tes prospects te perçoivent comme le leader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services recommandés */}
      <section className="section">
        <div className="container">
          <p className="section-label">Services recommand&eacute;s pour le B2B</p>
          <h2 className="mb-10">Notre stack pour acc&eacute;l&eacute;rer ton cycle de vente B2B</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services/agents-ia/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Agents IA pour prospection B2B</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Un agent IA peut qualifier tes leads entrants, enrichir tes prospects, mettre &agrave; jour ton CRM et relancer les opportunit&eacute;s dormantes &mdash; 24/7, sans jamais rater une relance.</p>
            </Link>
            <Link href="/services/automatisation/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Automatisation du pipeline B2B</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Workflows n8n qui connectent HubSpot, LinkedIn Sales Nav, Apollo et ton email pour automatiser le nurturing et le scoring des leads.</p>
            </Link>
            <Link href="/services/seo/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">SEO thought leadership</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Le SEO B2B thought-leadership positionne ta marque comme r&eacute;f&eacute;rence sur les requ&ecirc;tes que tes d&eacute;cideurs tapent pendant leur phase de recherche.</p>
            </Link>
            <Link href="/services/seo-local/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">SEO local pour B2B</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Pour les services B2B qui ciblent les PME de Joliette, Lanaudi&egrave;re et Qu&eacute;bec, le SEO local reste un levier sous-exploit&eacute;.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
