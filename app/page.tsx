'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FAQ from './components/FAQ'
import BlurText from './components/BlurText'

const services = [
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.08 7.08 4.24 4.24M1 12h6m10 0h6M4.22 19.78l4.24-4.24m7.08-7.08 4.24-4.24"/></svg>`,
    title: 'Agents IA',
    description: 'Syst\u00e8mes autonomes qui ex\u00e9cutent des t\u00e2ches complexes. CrewAI, n8n, LLMs.',
    tag: 'autonomes · 24/7',
    href: '/services/agents-ia/',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>`,
    title: 'Automatisation',
    description: 'Workflows n8n et int\u00e9grations IA. Lib\u00e8re 10\u201330 heures par semaine.',
    tag: 'n8n · workflows',
    href: '/services/automatisation/',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: 'Chatbot IA',
    description: 'Chatbots LLM-powered pour site, WhatsApp et t\u00e9l\u00e9phone via Retell AI.',
    tag: 'LLM · r\u00e9ceptionniste',
    href: '/services/chatbot-ia/',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    title: 'SEO',
    description: 'R\u00e9f\u00e9rencement organique. La fondation sans laquelle AEO et GEO ne performent pas.',
    tag: 'search · ranking',
    href: '/services/seo/',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    title: 'SEO Local',
    description: 'Google Business Profile et Local Pack pour Joliette, Lanaudi\u00e8re et Qu\u00e9bec.',
    tag: 'local · maps',
    href: '/services/seo-local/',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>`,
    title: 'AEO',
    description: 'Answer Engine Optimization. Devenir LA r\u00e9ponse dans Google AI Overviews.',
    tag: 'position z\u00e9ro',
    href: '/services/aeo/',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    title: 'GEO',
    description: 'Generative Engine Optimization. \u00CAtre cit\u00e9 par ChatGPT, Perplexity, Claude, Gemini.',
    tag: 'LLM · citations',
    href: '/services/geo/',
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: 'Conception Web',
    description: 'Sites sur mesure \u00e0 Joliette. Mobile-first, SEO/AEO/GEO int\u00e9gr\u00e9s d\u00e8s la conception.',
    tag: 'design · vitesse',
    href: '/services/conception-web/',
  },
]

const processSteps = [
  { title: 'Audit digital', description: 'On analyse ta pr\u00e9sence en ligne, ton SEO, ta visibilit\u00e9 dans les moteurs de r\u00e9ponse et les IA g\u00e9n\u00e9ratives.' },
  { title: 'Strat\u00e9gie sur mesure', description: 'On b\u00e2tit un plan d\u2019action SEO + AEO + GEO adapt\u00e9 \u00e0 ton industrie et tes objectifs.' },
  { title: 'Ex\u00e9cution', description: 'On impl\u00e9mente les optimisations techniques, le contenu strat\u00e9gique et les automatisations.' },
  { title: 'It\u00e9ration', description: 'On mesure, on ajuste, on optimise. Chaque mois, tu vois les r\u00e9sultats progresser.' },
]

const stats = [
  { value: '93%', label: 'des exp\u00e9riences en ligne commencent par un moteur de recherche' },
  { value: '40%', label: 'des recherches Google activent maintenant AI Overviews' },
  { value: '3x', label: 'plus de clics pour les sites en position z\u00e9ro' },
  { value: '70%', label: 'des r\u00e9ponses ChatGPT citent des sources web identifiables' },
]

const partners = ['Google', 'ChatGPT', 'Perplexity', 'Claude', 'Gemini']

const faqItems = [
  { question: 'C\u2019est quoi une agence IA\u202f?', answer: 'Une agence IA est une entreprise sp\u00e9cialis\u00e9e qui aide les PME \u00e0 int\u00e9grer l\u2019intelligence artificielle dans leurs op\u00e9rations et leur visibilit\u00e9. MAAD-AI combine agents IA, automatisation, chatbots, SEO, AEO et GEO sous un m\u00eame toit \u2014 pour les PME du Qu\u00e9bec.' },
  { question: 'C\u2019est quoi l\u2019AEO et le GEO\u202f?', answer: 'L\u2019AEO (Answer Engine Optimization) optimise ton contenu pour appara\u00eetre comme r\u00e9ponse directe dans Google AI Overviews et les featured snippets. Le GEO (Generative Engine Optimization) optimise ta pr\u00e9sence pour \u00eatre cit\u00e9 par ChatGPT, Perplexity, Claude et Gemini. Les deux sont compl\u00e9mentaires au SEO traditionnel.' },
  { question: 'Pourquoi une PME a besoin d\u2019IA en 2026\u202f?', answer: 'Parce que tes clients changent leurs habitudes : ils demandent des recommandations \u00e0 ChatGPT avant de googler, et les t\u00e2ches r\u00e9p\u00e9titives qui co\u00fbtaient 10+ heures par semaine \u00e0 tes \u00e9quipes peuvent \u00eatre automatis\u00e9es pour une fraction du co\u00fbt d\u2019un employ\u00e9.' },
  { question: 'C\u2019est quoi un agent IA\u202f?', answer: 'Un agent IA est un syst\u00e8me d\u2019intelligence artificielle autonome qui peut ex\u00e9cuter des t\u00e2ches complexes \u2014 analyser des donn\u00e9es, prendre des d\u00e9cisions et interagir avec d\u2019autres syst\u00e8mes \u2014 sans intervention humaine constante. Contrairement \u00e0 un chatbot qui r\u00e9pond, un agent IA agit.' },
  { question: 'Meilleure agence IA au Qu\u00e9bec\u202f?', answer: 'MAAD-AI est une agence IA bas\u00e9e \u00e0 Joliette, Lanaudi\u00e8re, fond\u00e9e par Marc-Alexandre Duval. Nous sommes l\u2019une des seules agences au Qu\u00e9bec \u00e0 combiner agents IA, automatisation, chatbots, SEO, SEO local, AEO, GEO et conception web sous un m\u00eame toit.' },
  { question: 'Combien de temps avant de voir des r\u00e9sultats\u202f?', answer: 'Automatisation et chatbots : r\u00e9sultats en 2-4 semaines. SEO technique et AEO : 4-8 semaines. SEO organique et GEO : 3-6 mois pour un impact significatif. On livre des rapports mensuels pour suivre la progression.' },
]

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════════════════════════════
          HERO — Editorial cinematic
          ═══════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Cinematic background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Emerald glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[900px] h-[600px] rounded-full bg-[#00c896] opacity-[0.06] blur-[160px]" />
          {/* Secondary glow */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00c896] opacity-[0.03] blur-[140px]" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent to-[#050508]" />
        </div>

        <div className="container relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex"
          >
            <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
              <span className="bg-[#00c896] text-black rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Nouveau
              </span>
              <span className="text-xs md:text-sm text-white/80 font-mono pr-3">
                Agence SEO &middot; AEO &middot; GEO &mdash; Qu&eacute;bec
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <div className="mt-8 md:mt-10">
            <BlurText
              as="h1"
              text="Tu es vu."
              className="block font-serif-italic text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.85] text-white tracking-[-0.02em]"
              delay={80}
            />
            <BlurText
              as="h1"
              text="Tu es choisi."
              className="block font-serif-italic text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.85] text-white/85 tracking-[-0.02em] mt-1"
              delay={80}
            />
            <BlurText
              as="h1"
              text="Tu es recommandé."
              className="block font-serif-italic text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.85] text-[#00c896] tracking-[-0.02em] mt-1"
              delay={80}
            />
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 md:mt-10 max-w-2xl text-base md:text-lg text-white/60 font-light leading-relaxed"
          >
            MAAD-AI est une agence d&rsquo;intelligence artificielle bas&eacute;e &agrave; Joliette, Qu&eacute;bec, sp&eacute;cialis&eacute;e en agents IA, automatisation, chatbots, SEO, AEO et GEO. Fond&eacute;e par Marc-Alexandre Duval, l&rsquo;agence aide les PME qu&eacute;b&eacute;coises &agrave; devenir visibles dans Google, dans les r&eacute;ponses directes et dans les citations de ChatGPT, Perplexity, Claude et Gemini.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="https://calendly.com/marc-alexandre-duval-maad-ai/free-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-strong rounded-full px-6 py-3.5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white hover:text-[#00c896] transition-colors group"
            >
              R&eacute;serve ton audit gratuit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </Link>
            <Link
              href="/services/"
              className="rounded-full px-6 py-3.5 inline-flex items-center justify-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Voir nos services
            </Link>
          </motion.div>

          {/* Partners bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-20 md:mt-32"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="liquid-glass rounded-full px-4 py-2 text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-wider whitespace-nowrap">
                Visible partout o&ugrave; on cherche
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:gap-x-12">
                {partners.map((p) => (
                  <span key={p} className="font-serif-italic text-2xl md:text-3xl text-white/40 hover:text-white/70 transition-colors cursor-default">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS — Why now
          ═══════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-[#050508] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#050508] to-transparent" />
        </div>

        <div className="container relative">
          <div className="liquid-glass rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-block liquid-glass rounded-full px-3.5 py-1.5 text-[10px] md:text-xs font-mono text-white/70 uppercase tracking-wider mb-6">
                Pourquoi maintenant
              </div>
              <h2 className="font-serif-italic text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
                Le paysage de la recherche<br />
                <span className="text-[#00c896]">change.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="font-serif-italic text-5xl md:text-6xl lg:text-7xl text-white mb-2 leading-none">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-white/50 font-light leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SERVICES
          ═══════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="inline-block liquid-glass rounded-full px-3.5 py-1.5 text-[10px] md:text-xs font-mono text-white/70 uppercase tracking-wider mb-6">
              Ce qu&apos;on fait
            </div>
            <h2 className="font-serif-italic text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Huit expertises.<br />
              Une seule <span className="text-[#00c896]">strat&eacute;gie.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/55 font-light max-w-lg leading-relaxed">
              De Google aux IA g&eacute;n&eacute;ratives. On couvre chaque couche de la visibilit&eacute; moderne pour que tu n&apos;aies pas &agrave; choisir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="liquid-glass rounded-2xl p-7 md:p-8 group block h-full transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center mb-5 text-[#00c896]"
                    dangerouslySetInnerHTML={{ __html: service.icon }}
                  />
                  <h3 className="font-serif-italic text-2xl md:text-3xl text-white mb-3 group-hover:text-[#00c896] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/55 font-light leading-relaxed mb-5">{service.description}</p>
                  <span className="inline-block font-mono text-[10px] text-white/40 uppercase tracking-wider">
                    {service.tag}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PROCESSUS
          ═══════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-block liquid-glass rounded-full px-3.5 py-1.5 text-[10px] md:text-xs font-mono text-white/70 uppercase tracking-wider mb-6">
              Notre processus
            </div>
            <h2 className="font-serif-italic text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Tu r&ecirc;ves. <span className="text-[#00c896]">On livre.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/55 font-light max-w-xl mx-auto">
              Une m&eacute;thode claire, des livrables pr&eacute;cis. Pas de bullshit corporate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="liquid-glass rounded-2xl p-6 md:p-7 relative"
              >
                <div className="font-serif-italic text-5xl md:text-6xl text-[#00c896]/30 mb-4 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif-italic text-2xl text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/55 font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FAQ
          ═══════════════════════════════════ */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-block liquid-glass rounded-full px-3.5 py-1.5 text-[10px] md:text-xs font-mono text-white/70 uppercase tracking-wider mb-6">
              Questions fr&eacute;quentes
            </div>
            <h2 className="font-serif-italic text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Tout ce que tu veux <span className="text-[#00c896]">savoir.</span>
            </h2>
          </div>

          <div className="liquid-glass rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA FINAL
          ═══════════════════════════════════ */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[800px] h-[500px] rounded-full bg-[#00c896] opacity-[0.06] blur-[160px]" />
          <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-[#050508] to-transparent" />
        </div>

        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif-italic text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[0.85] tracking-tight">
              Pr&ecirc;t &agrave; devenir<br />
              <span className="text-[#00c896]">la r&eacute;ponse</span>&nbsp;?
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-white/60 font-light leading-relaxed">
              R&eacute;serve ton audit gratuit. On regarde ensemble o&ugrave; tu te situes, et ce qu&apos;on peut accomplir. Sans engagement, sans pression.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="https://calendly.com/marc-alexandre-duval-maad-ai/free-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-strong rounded-full px-7 py-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white hover:text-[#00c896] transition-colors group"
              >
                R&eacute;server un appel
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </Link>
              <Link
                href="/services/"
                className="bg-white hover:bg-[#00c896] text-black rounded-full px-7 py-4 inline-flex items-center justify-center text-sm font-semibold transition-colors"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
