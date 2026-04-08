import type { Metadata } from 'next'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation',
  description: 'Conditions d\'utilisation du site web MAAD-AI. Consultez nos termes et conditions pour l\'utilisation de nos services SEO, AEO et GEO.',
  openGraph: {
    title: 'Conditions d\'utilisation | MAAD-AI',
    description: 'Conditions d\'utilisation du site web et des services MAAD-AI.',
    url: 'https://maad-ai.com/terms',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Breadcrumb items={[{ label: 'Conditions d\'utilisation' }]} />
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6">Conditions d&apos;utilisation</h1>
            <p className="text-sm mb-12" style={{ color: 'var(--color-text-muted)' }}>
              Dernière mise à jour : 1er avril 2026
            </p>

            <div className="space-y-8">
              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">1. Acceptation des conditions</h2>
                <p className="mb-3">
                  En accédant au site web maad-ai.com (ci-après « le Site »), tu acceptes d&apos;être lié par les présentes conditions d&apos;utilisation. Si tu n&apos;acceptes pas ces conditions, tu ne dois pas utiliser le Site.
                </p>
                <p>
                  MAAD-AI se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site. Il est de ta responsabilité de consulter régulièrement ces conditions.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">2. Description des services</h2>
                <p className="mb-3">
                  MAAD-AI offre des services de consultation et d&apos;optimisation en marketing digital, incluant le SEO (Search Engine Optimization), l&apos;AEO (Answer Engine Optimization), le GEO (Generative Engine Optimization), la conception web et l&apos;automatisation par intelligence artificielle.
                </p>
                <p>
                  Les services spécifiques, livrables et tarifs sont détaillés dans les ententes individuelles conclues entre MAAD-AI et chaque client.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">3. Propriété intellectuelle</h2>
                <p className="mb-3">
                  L&apos;ensemble du contenu présent sur le Site — incluant les textes, images, logos, design, code source et marques de commerce — est la propriété de MAAD-AI ou de ses partenaires et est protégé par les lois canadiennes et internationales sur la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, distribution ou utilisation non autorisée du contenu du Site est strictement interdite sans le consentement écrit préalable de MAAD-AI.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">4. Utilisation du site</h2>
                <p className="mb-3">Tu t&apos;engages à utiliser le Site de manière légale et responsable. Il est interdit de :</p>
                <ul className="list-disc list-inside space-y-2 mt-3" style={{ color: 'var(--color-text-dim)' }}>
                  <li>Utiliser le Site à des fins illégales ou non autorisées</li>
                  <li>Tenter d&apos;accéder à des zones restreintes du Site</li>
                  <li>Introduire des virus, logiciels malveillants ou tout code nuisible</li>
                  <li>Collecter des données personnelles d&apos;autres utilisateurs sans leur consentement</li>
                  <li>Reproduire, dupliquer ou copier le contenu du Site à des fins commerciales</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">5. Limitation de responsabilité</h2>
                <p className="mb-3">
                  Le Site et son contenu sont fournis « tels quels », sans garantie d&apos;aucune sorte, expresse ou implicite. MAAD-AI ne garantit pas que le Site sera disponible en tout temps, sans erreur ou sécurisé.
                </p>
                <p>
                  MAAD-AI ne saurait être tenu responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser le Site ou les services offerts.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">6. Liens externes</h2>
                <p>
                  Le Site peut contenir des liens vers des sites web tiers. Ces liens sont fournis à titre informatif seulement. MAAD-AI n&apos;a aucun contrôle sur le contenu de ces sites et n&apos;assume aucune responsabilité quant à leur contenu, leurs pratiques de confidentialité ou leur disponibilité.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">7. Droit applicable</h2>
                <p className="mb-3">
                  Les présentes conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada qui s&apos;y appliquent. Tout litige découlant de ces conditions sera soumis à la compétence exclusive des tribunaux du district judiciaire de Joliette, Québec.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">8. Contact</h2>
                <p>
                  Pour toute question concernant ces conditions d&apos;utilisation, tu peux nous contacter via notre <a href="/contact" className="text-em underline">page de contact</a> ou par courriel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
