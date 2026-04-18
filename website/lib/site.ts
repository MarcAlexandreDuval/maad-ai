export const SITE = {
  name: "MAAD-AI",
  url: "https://maad-ai.com",
  locale: "fr_CA",
  language: "fr-CA",
  founder: "Marc-Alexandre Duval",
  email: "contact@maad-ai.com",
  city: "Joliette",
  region: "Lanaudière",
  province: "Québec",
  country: "Canada",
  tagline: "Tu es vu. Tu es choisi. Tu es recommandé.",
  ga4: "G-BJ57QZ92KX",
  description:
    "MAAD-AI est une agence d'intelligence artificielle basée à Joliette, Québec, spécialisée en agents IA, automatisation, chatbots, SEO, AEO et GEO pour les PME du Québec. Fondée par Marc-Alexandre Duval.",
};

export const NAV = {
  ia: {
    label: "Intelligence Artificielle",
    pillar: { href: "/services/intelligence-artificielle", label: "Vue d'ensemble" },
    items: [
      { href: "/services/agents-ia", label: "Agents IA", tagline: "Autonomes. Connectés." },
      { href: "/services/automatisation", label: "Automatisation", tagline: "Workflows qui travaillent seuls." },
      { href: "/services/chatbot-ia", label: "Chatbot IA", tagline: "Conversation. Conversion." },
    ],
  },
  visibility: {
    label: "Visibilité Web",
    pillar: { href: "/services/visibilite-web", label: "Vue d'ensemble" },
    items: [
      { href: "/services/seo", label: "SEO", tagline: "La fondation qui ranke." },
      { href: "/services/seo-local", label: "SEO Local", tagline: "Trouvé dans ton quartier." },
      { href: "/services/aeo", label: "AEO", tagline: "Deviens la réponse." },
      { href: "/services/geo", label: "GEO", tagline: "Cité par les IA." },
      { href: "/services/conception-web", label: "Conception Web", tagline: "Sites faits pour être trouvés." },
    ],
  },
};

export const SOCIALS = [
  { name: "X", href: "https://x.com/maad_ai", label: "Suivre sur X (Twitter)" },
  { name: "Instagram", href: "https://www.instagram.com/maadai_tech/", label: "Suivre sur Instagram" },
  { name: "TikTok", href: "https://www.tiktok.com/@maad_ai", label: "Suivre sur TikTok" },
  { name: "YouTube", href: "https://www.youtube.com/@MAAD-AI", label: "S'abonner sur YouTube" },
  { name: "Facebook", href: "https://www.facebook.com/share/1CPAb92h3c/", label: "Suivre sur Facebook" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/maad-ai/", label: "Suivre sur LinkedIn" },
] as const;

export const INDUSTRIES = [
  { href: "/industries/b2b", label: "B2B", desc: "Pipelines prévisibles, prospection augmentée." },
  { href: "/industries/e-commerce", label: "E-commerce", desc: "Trafic qualifié, conversion sans friction." },
  { href: "/industries/startup", label: "Startup", desc: "Du MVP au momentum, en mois pas années." },
  { href: "/industries/saas", label: "SaaS", desc: "SEO de feature, activation par IA." },
  { href: "/industries/personnalite-publique", label: "Personnalité publique", desc: "Image de marque, visibilité et automatisation pour créateurs." },
  { href: "/industries/immobilier", label: "Immobilier", desc: "Leads qualifiés, visibilité locale et IA pour courtiers." },
];
