import type { Metadata } from 'next'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Confidentialité',
  description: 'Politique de confidentialité de MAAD-AI. Découvre comment nous collectons, utilisons et protégeons tes données personnelles.',
  openGraph: {
    title: 'Confidentialité | MAAD-AI',
    description: 'Politique de confidentialité de MAAD-AI. Comment nous protégeons tes données.',
    url: 'https://maad-ai.com/privacy',
    type: 'website',
    locale: 'fr_CA',
    siteName: 'MAAD-AI',
  },
  alternates: {
    canonical: 'https://maad-ai.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Breadcrumb items={[{ label: 'Confidentialité' }]} />
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6">Politique de confidentialité</h1>
            <p className="text-sm mb-12" style={{ color: 'var(--color-text-muted)' }}>
              Dernière mise à jour : 1er avril 2026
            </p>

            <div className="space-y-8">
              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">1. Introduction</h2>
                <p className="mb-3">
                  Chez MAAD-AI, la protection de tes renseignements personnels est une priorité. Cette politique de confidentialité explique quelles données nous recueillons, comment nous les utilisons et quels sont tes droits.
                </p>
                <p>
                  En utilisant le site maad-ai.com (ci-après « le Site »), tu consens à la collecte et à l&apos;utilisation de tes données conformément à la présente politique.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">2. Données collectées</h2>
                <p className="mb-4">Nous pouvons collecter les types de données suivants :</p>
                <h3 className="text-base font-semibold mb-2 text-white">Données fournies volontairement</h3>
                <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--color-text-dim)' }}>
                  <li>Nom et prénom (via le formulaire de contact)</li>
                  <li>Adresse courriel</li>
                  <li>Nom de l&apos;entreprise</li>
                  <li>Contenu des messages envoyés via le formulaire</li>
                </ul>
                <h3 className="text-base font-semibold mb-2 text-white">Données collectées automatiquement</h3>
                <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--color-text-dim)' }}>
                  <li>Adresse IP</li>
                  <li>Type de navigateur et système d&apos;exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de trafic (référent)</li>
                  <li>Données de localisation approximative</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">3. Google Analytics 4 (GA4)</h2>
                <p className="mb-3">
                  Nous utilisons Google Analytics 4 (identifiant : G-BJ57QZ92KX) pour analyser le trafic sur notre site. GA4 collecte des données anonymisées sur ton comportement de navigation, incluant :
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--color-text-dim)' }}>
                  <li>Les pages que tu visites et la durée de chaque visite</li>
                  <li>Les interactions avec le site (clics, défilement)</li>
                  <li>Ton appareil, navigateur et résolution d&apos;écran</li>
                  <li>Ta localisation géographique approximative</li>
                  <li>La source par laquelle tu es arrivé sur le site</li>
                </ul>
                <p>
                  Google Analytics 4 utilise un modèle axé sur les événements et ne stocke pas d&apos;adresses IP complètes. Les données sont traitées conformément à la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-em underline">politique de confidentialité de Google</a>.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">4. Cookies et technologies de suivi</h2>
                <p className="mb-3">
                  Le Site utilise des cookies pour améliorer ton expérience et analyser le trafic. Les types de cookies utilisés sont :
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--color-text-dim)' }}>
                  <li><strong className="text-white">Cookies essentiels</strong> : nécessaires au fonctionnement du Site</li>
                  <li><strong className="text-white">Cookies analytiques</strong> : utilisés par Google Analytics 4 pour mesurer l&apos;audience et comprendre comment le Site est utilisé</li>
                </ul>
                <p>
                  Tu peux désactiver les cookies dans les paramètres de ton navigateur. Note que la désactivation de certains cookies peut affecter le fonctionnement du Site.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">5. Utilisation des données</h2>
                <p className="mb-3">Les données collectées sont utilisées pour :</p>
                <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--color-text-dim)' }}>
                  <li>Répondre à tes demandes de contact et de renseignements</li>
                  <li>Améliorer le contenu et la performance du Site</li>
                  <li>Analyser les tendances d&apos;utilisation et le comportement des visiteurs</li>
                  <li>Personnaliser ton expérience sur le Site</li>
                  <li>T&apos;envoyer des communications si tu y as consenti</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">6. Partage des données</h2>
                <p className="mb-3">
                  Nous ne vendons, ne louons et ne partageons pas tes données personnelles avec des tiers à des fins commerciales. Tes données peuvent être partagées uniquement avec :
                </p>
                <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--color-text-dim)' }}>
                  <li>Google (via Google Analytics 4) pour l&apos;analyse du trafic</li>
                  <li>Nos fournisseurs de services essentiels (hébergement, courriel)</li>
                  <li>Les autorités compétentes si la loi l&apos;exige</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">7. Conservation des données</h2>
                <p>
                  Nous conservons tes données personnelles aussi longtemps que nécessaire pour atteindre les fins pour lesquelles elles ont été collectées. Les données de formulaire de contact sont conservées pour une durée maximale de 24 mois. Les données analytiques de GA4 sont conservées selon les paramètres configurés (14 mois par défaut).
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">8. Tes droits</h2>
                <p className="mb-3">
                  Conformément à la Loi 25 du Québec sur la protection des renseignements personnels, tu as le droit de :
                </p>
                <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--color-text-dim)' }}>
                  <li>Accéder à tes données personnelles que nous détenons</li>
                  <li>Demander la rectification de données inexactes</li>
                  <li>Demander la suppression de tes données</li>
                  <li>Retirer ton consentement à tout moment</li>
                  <li>Déposer une plainte auprès de la Commission d&apos;accès à l&apos;information du Québec</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">9. Sécurité</h2>
                <p>
                  Nous prenons des mesures raisonnables pour protéger tes données contre l&apos;accès non autorisé, la perte, l&apos;utilisation abusive ou la divulgation. Le Site utilise le protocole HTTPS pour chiffrer les communications entre ton navigateur et nos serveurs.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-xl mb-4">10. Contact</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité, pour exercer tes droits ou pour signaler un problème lié à tes données, contacte-nous via notre <a href="/contact" className="text-em underline">page de contact</a>.
                </p>
                <p className="mt-3">
                  <strong className="text-white">Responsable de la protection des renseignements personnels :</strong><br />
                  <span style={{ color: 'var(--color-text-dim)' }}>Marc-Alexandre Duval, Fondateur — MAAD-AI, Joliette, Québec</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
