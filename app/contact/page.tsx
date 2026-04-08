'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: integrate with form backend
    setSubmitted(true)
  }

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacte MAAD-AI',
    url: 'https://maad-ai.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'MAAD-AI',
      url: 'https://maad-ai.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['fr', 'en'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Joliette',
        addressRegion: 'Québec',
        addressCountry: 'CA',
      },
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="section">
        <div className="container">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge badge-pulse">Parlons-nous</span>
            <h1 className="mt-6 mb-6">
              Prêt à <span className="gradient-text">passer à l&apos;action</span>&nbsp;?
            </h1>
            <p className="text-lg">
              Que tu aies une question, un projet en tête ou que tu veuilles simplement explorer tes options, on est là pour t&apos;aider.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[rgba(0,200,150,0.1)] border border-[rgba(0,200,150,0.2)] flex items-center justify-center mx-auto mb-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mb-3">Message envoyé!</h3>
                    <p>Merci pour ton message. On te revient dans les 24 prochaines heures.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-dim)' }}>
                        Ton nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="form-input"
                        placeholder="Jean Tremblay"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-dim)' }}>
                        Ton courriel
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="form-input"
                        placeholder="jean@monentreprise.ca"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-dim)' }}>
                        Ton entreprise <span style={{ color: 'var(--color-text-muted)' }}>(optionnel)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="form-input"
                        placeholder="Mon Entreprise Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-dim)' }}>
                        Ton message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="form-input"
                        placeholder="Décris-nous ton projet ou ta question..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Calendly */}
              <div className="glass-card p-8">
                <div className="text-[var(--color-emerald)] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3 className="mb-3">Réserve un appel gratuit</h3>
                <p className="mb-4 text-sm">
                  Préfères-tu en discuter de vive voix? Réserve un créneau de 30 minutes pour un audit gratuit de ta visibilité en ligne.
                </p>
                <Link
                  href="https://calendly.com/marc-alexandre-duval-maad-ai/free-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center w-full justify-center"
                >
                  Réserver sur Calendly
                </Link>
              </div>

              {/* Location */}
              <div className="glass-card p-8">
                <div className="text-[var(--color-emerald)] mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="mb-3">Notre localisation</h3>
                <p className="text-sm mb-1">Joliette, Québec</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  On dessert les PME partout au Québec, en personne dans Lanaudière et à distance ailleurs.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="glass-card overflow-hidden">
                <div
                  className="w-full"
                  style={{
                    aspectRatio: '16/10',
                    background: 'linear-gradient(135deg, var(--color-bg-alt), rgba(0, 200, 150, 0.03))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs font-mono" style={{ color: 'var(--color-text-muted)' }}>
                    Joliette, QC — Lanaudière
                  </span>
                </div>
              </div>

              {/* Response time */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-emerald)]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                  <p className="text-sm" style={{ color: 'var(--color-text-dim)' }}>
                    Temps de réponse moyen : <strong className="text-white">moins de 24h</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
