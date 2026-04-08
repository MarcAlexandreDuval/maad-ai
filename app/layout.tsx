import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollAnimator from './components/ScrollAnimator'
import AppWrapper from './components/AppWrapper'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://maad-ai.com'),
  title: {
    default: 'MAAD-AI | Agence SEO, AEO & GEO — Québec',
    template: '%s | MAAD-AI',
  },
  description: 'Agence spécialisée en SEO, AEO (Answer Engine Optimization) et GEO (Generative Engine Optimization) pour les PME du Québec. Joliette, Lanaudière.',
  keywords: ['SEO', 'AEO', 'GEO', 'Answer Engine Optimization', 'Generative Engine Optimization', 'Québec', 'Joliette', 'PME', 'agence SEO'],
  authors: [{ name: 'Marc-Alexandre Duval' }],
  creator: 'MAAD-AI',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://maad-ai.com',
    siteName: 'MAAD-AI',
    title: 'MAAD-AI | Agence SEO, AEO & GEO — Québec',
    description: "Agence d'intelligence artificielle basée à Joliette, Québec, spécialisée en agents IA, automatisation, chatbots, SEO, AEO et GEO pour les PME du Québec.",
  },
  alternates: {
    canonical: 'https://maad-ai.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MAAD-AI',
    url: 'https://maad-ai.com',
    logo: 'https://maad-ai.com/logo-maad-ai.png',
    description: "Agence d'intelligence artificielle basée à Joliette, Québec, spécialisée en agents IA, automatisation, chatbots, SEO, AEO et GEO pour les PME du Québec.",
    founder: {
      '@type': 'Person',
      name: 'Marc-Alexandre Duval',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Joliette',
      addressRegion: 'Québec',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Québec, Canada',
    },
    serviceType: ['Agents IA', 'Automatisation IA', 'Chatbot IA', 'SEO', 'SEO Local', 'Answer Engine Optimization (AEO)', 'Generative Engine Optimization (GEO)', 'Conception web'],
    sameAs: [],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MAAD-AI',
    url: 'https://maad-ai.com',
    inLanguage: 'fr-CA',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://maad-ai.com/blog/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="fr-CA">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BJ57QZ92KX" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BJ57QZ92KX');`}
        </Script>
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <AppWrapper>
          <ScrollAnimator />
          <Navbar />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  )
}
