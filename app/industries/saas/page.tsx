import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import CTA from '@/app/components/CTA'

export const metadata: Metadata = {
  title: 'SEO SaaS Québec',
  description:
    'Stratégies SEO, AEO et GEO pour entreprises SaaS. Pages de fonctionnalités, comparatifs, onboarding et visibilité IA pour réduire ton coût d\'acquisition.',
  openGraph: {
    title: 'SEO SaaS Québec | MAAD-AI',
    description:
      'Acquisition organique pour SaaS : feature pages, contenu comparatif et stratégie GEO pour être recommandé par les IA.',
    url: 'https://maad-ai.com/industries/saas',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/industries/saas',
  },
}

const features = [
  {
    title: 'SEO de pages fonctionnalités',
    description:
      'Chaque fonctionnalité de ton logiciel mérite sa propre page optimisée. On crée une architecture qui capture le trafic « solution-aware » — les utilisateurs qui savent ce qu\'ils cherchent.',
  },
  {
    title: 'Contenu comparatif',
    description:
      'Pages « X vs Y », alternatives et comparatifs détaillés. Quand un prospect compare les options, c\'est toi qui contrôles le narratif — pas un site d\'avis tiers.',
  },
  {
    title: 'Optimisation de l\'onboarding',
    description:
      'Base de connaissances, tutoriels et guides SEO-friendly qui servent double : ils aident tes utilisateurs actuels ET attirent de nouveaux prospects via la recherche organique.',
  },
  {
    title: 'Contenu anti-churn',
    description:
      'Contenu stratégique qui montre la valeur avancée de ton produit. Cas d\'usage, workflows, intégrations — tout pour que tes utilisateurs découvrent des raisons de rester.',
  },
  {
    title: 'Stratégie de citation IA',
    description:
      'Optimisation GEO ciblée pour que les IA recommandent ton SaaS. Quand un utilisateur demande « quel outil pour [cas d\'usage] », ta plateforme apparaît dans la réponse.',
  },
  {
    title: 'SEO de documentation & API',
    description:
      'Documentation technique optimisée pour le référencement. Les développeurs cherchent des solutions dans Google — ta doc API devient un canal d\'acquisition à part entière.',
  },
]

export default function SaaSPage() {
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
        name: 'SaaS',
        item: 'https://maad-ai.com/industries/saas',
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
              { label: 'SaaS' },
            ]}
          />

          <div className="max-w-3xl">
            <span className="badge badge-pulse mb-6">SaaS · Logiciel en ligne</span>
            <h1 className="mb-6">
              Fais découvrir ton logiciel{' '}
              <span className="gradient-text">par ceux qui en ont besoin</span>
            </h1>
            <p className="text-lg max-w-2xl">
              En SaaS, le SEO est ton moteur d&apos;acquisition le plus scalable.
              Chaque page de fonctionnalité, chaque comparatif, chaque guide technique
              travaille 24/7 pour amener des utilisateurs qualifiés. Avec l&apos;AEO et
              le GEO, on s&apos;assure que ton logiciel est aussi recommandé par les IA
              que trouvé sur Google.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">Le défi SaaS</p>
          <h2 className="mb-6">
            Réduire le CAC tout en{' '}
            <span className="text-em">augmentant le MRR</span>
          </h2>
          <p className="mb-4">
            Le modèle SaaS repose sur un équilibre délicat : ton coût d&apos;acquisition
            client (CAC) doit rester inférieur à la valeur vie client (LTV). Le paid
            advertising devient de plus en plus cher chaque année, mais le trafic
            organique, lui, a un coût marginal qui tend vers zéro une fois le contenu
            créé.
          </p>
          <p className="mb-4">
            Le défi, c&apos;est que le SEO SaaS est devenu ultra-compétitif. Tes
            concurrents investissent massivement en contenu. Pour sortir du lot, il faut
            une stratégie chirurgicale : cibler les bonnes intentions de recherche, créer
            du contenu 10x meilleur et exploiter les nouveaux canaux comme les moteurs IA.
          </p>
          <p>
            Chez MAAD-AI, on combine expertise SEO technique et connaissance du modèle
            SaaS pour bâtir une machine d&apos;acquisition organique qui alimente ton
            pipeline de façon prévisible.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <p className="section-label">Notre approche</p>
          <h2 className="mb-10">
            Six stratégies pour{' '}
            <span className="text-em">scaler ton acquisition</span> SaaS
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

      {/* SaaS SEO Funnel */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-label">Le funnel SEO SaaS</p>
          <h2 className="mb-8">
            Du visiteur au <span className="text-em">client payant</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="step-number flex-shrink-0">01</div>
              <div>
                <h3 className="text-base mb-2">Découverte</h3>
                <p className="text-sm">
                  Articles de blog et guides qui répondent aux questions de ton audience
                  cible. Ils ne connaissent pas encore ton produit, mais ils ont un
                  problème que tu résous.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="step-number flex-shrink-0">02</div>
              <div>
                <h3 className="text-base mb-2">Considération</h3>
                <p className="text-sm">
                  Pages de fonctionnalités, comparatifs et cas d&apos;usage. Le prospect
                  évalue ses options — et ton contenu le guide naturellement vers ta
                  solution.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="step-number flex-shrink-0">03</div>
              <div>
                <h3 className="text-base mb-2">Conversion</h3>
                <p className="text-sm">
                  Pages d&apos;inscription, démos et essais gratuits optimisés pour
                  convertir. Chaque élément est testé et affiné pour maximiser le taux de
                  conversion.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="step-number flex-shrink-0">04</div>
              <div>
                <h3 className="text-base mb-2">Rétention</h3>
                <p className="text-sm">
                  Base de connaissances, tutoriels et contenu d&apos;activation qui
                  aident tes utilisateurs à tirer le maximum de ton produit — et qui
                  attirent de nouveaux visiteurs par la même occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services recommandés */}
      <section className="section">
        <div className="container">
          <p className="section-label">Services recommand&eacute;s pour le SaaS</p>
          <h2 className="mb-10">Notre stack pour scaler ton acquisition SaaS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services/seo/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">SEO pour pages de fonctionnalit&eacute;s</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Architecture SEO pour que chaque feature capture son propre trafic qualifi&eacute;, des pages comparatives au contenu &laquo;&nbsp;alternatives&nbsp;&raquo;.</p>
            </Link>
            <Link href="/services/geo/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">GEO &mdash; &ecirc;tre recommand&eacute; par les IA</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Quand un utilisateur demande &agrave; ChatGPT &laquo;&nbsp;quel outil pour X&nbsp;?&nbsp;&raquo;, ton SaaS appara&icirc;t dans la r&eacute;ponse. C&apos;est le nouveau canal d&apos;acquisition SaaS.</p>
            </Link>
            <Link href="/services/agents-ia/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Agents IA pour activation &amp; support</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Un agent IA qui guide tes nouveaux utilisateurs, r&eacute;pond aux questions techniques et r&eacute;duit ton churn sans alourdir ton &eacute;quipe support.</p>
            </Link>
            <Link href="/services/automatisation/" className="glass-card p-6 hover:border-[var(--color-emerald)] transition-colors">
              <h3 className="text-lg mb-2">Automatisation du growth</h3>
              <p className="text-sm text-[var(--color-text-dim)]">Workflows n8n qui connectent ton produit, ton CRM et tes outils marketing pour automatiser onboarding, nurturing et reporting.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
