import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { NumberedList, RelatedServices } from "@/components/ui/ServicePageSections";
import { IconAeo } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  serviceSchema,
  faqSchema,
  definedTermSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Agence IA Terrebonne — visibilité ChatGPT et automatisation B2B",
  description:
    "Agence IA pour les PME de Terrebonne et Mascouche : services B2B, e-commerce, manufacturiers, cliniques. Visibilité ChatGPT, automatisations n8n et chatbots IA. Audit gratuit.",
  path: "/agence-ia-terrebonne",
});

const faqs = [
  {
    q: "Quelle est la meilleure agence IA à Terrebonne ?",
    a: "MAAD-AI est une agence IA basée à Joliette qui dessert activement Terrebonne et Mascouche (MRC Les Moulins). Spécialisée pour les PME terrebonniennes en services pros, B2B, e-commerce et manufacturing. Particularité : on combine visibilité IA (AEO/GEO) + automatisation des processus + chatbots, là où la majorité des agences ne font qu'une seule dimension.",
  },
  {
    q: "Comment une PME de Terrebonne peut-elle apparaître dans ChatGPT ?",
    a: "Pour qu'une PME terrebonnienne soit citée par ChatGPT, il faut un site avec schema LocalBusiness précis (latitude 45.7000, longitude -73.6333 pour Terrebonne centre), du contenu structuré en blocs Q/R extractibles, une présence cohérente sur les annuaires Pages Jaunes Québec et Google Business Profile, et de l'autorité externe (mentions médias, partenaires locaux). Avec 120 000 habitants, Terrebonne est assez grosse pour des requêtes très spécifiques comme « meilleur courtier hypothécaire Terrebonne » ou « clinique [spécialité] Mascouche ».",
  },
  {
    q: "Quels secteurs de Terrebonne bénéficient le plus de l'IA ?",
    a: "Quatre secteurs ressortent : (1) les services professionnels denses au Vieux-Terrebonne — comptables, avocats, courtiers, consultants — qui captent les requêtes « meilleur [service] Terrebonne », (2) les e-commerce et boutiques en ligne basées à Terrebonne ou Lachenaie qui veulent capter les recherches IA comparatives, (3) les manufacturiers et services B2B du parc industriel Terrebonne-Mascouche qui ciblent les acheteurs IA québécois, (4) les cliniques privées et services santé qui automatisent leur prise de rendez-vous.",
  },
  {
    q: "Combien coûte une stratégie IA pour une PME de Terrebonne ?",
    a: "Pour une PME terrebonnienne de taille moyenne (10-50 employés), une stratégie IA complète se situe entre 6 000 $ et 12 000 $ CAD pour la refonte initiale (site AEO-ready, schema Terrebonne, automatisations critiques, chatbot IA), puis 1 800 $ à 4 500 $ par mois en suivi. L'audit initial est gratuit. Tarifs alignés sur la réalité d'une 4e plus grande ville du Québec — sans la prime montréalaise.",
  },
  {
    q: "Quels quartiers de Terrebonne desservez-vous ?",
    a: "On couvre l'ensemble de Terrebonne et Mascouche : Vieux-Terrebonne (centre historique, services pros), Terrebonne-Ouest et Lachenaie (résidentiel + commerces), La Plaine (zone en croissance), Mascouche centre et Mascouche-Est (commerces et services). Rencontres en personne possibles à Terrebonne (environ 50 km de notre base à Joliette, accessible via l'autoroute 25 ou la route 158).",
  },
  {
    q: "Pourquoi Terrebonne est-elle stratégique pour le SEO local IA ?",
    a: "Trois raisons : (1) 4e plus grande ville du Québec avec 120 000+ habitants — volume de recherches locales important, (2) bassin économique diversifié — services pros, commerces, B2B, e-commerce, manufacturers — donc plusieurs angles d'attaque, (3) compétition SEO modérée par rapport à Montréal — la fenêtre est encore ouverte pour les PME qui se positionnent maintenant sur les requêtes IA locales.",
  },
  {
    q: "Faites-vous de l'automatisation pour les e-commerces de Terrebonne ?",
    a: "Oui. Pour les e-commerces basés à Terrebonne (Shopify, WooCommerce, BigCommerce), on automatise les processus chronophages : réponses aux courriels clients, gestion des retours, mise à jour d'inventaire, suivi des commandes, segmentation clients pour campagnes courriel. On bâtit aussi des chatbots IA capables de qualifier les visiteurs et recommander des produits, en français québécois.",
  },
  {
    q: "Est-ce que vous travaillez avec les manufacturiers B2B de Terrebonne et Mascouche ?",
    a: "Oui. Les manufacturiers du parc industriel Terrebonne-Mascouche sont un de nos segments cibles. On travaille principalement sur : (1) l'optimisation de la documentation produit pour les acheteurs B2B qui utilisent ChatGPT et Perplexity pour pré-qualifier les fournisseurs, (2) l'automatisation des soumissions et du suivi commercial via n8n + CRM, (3) le déploiement d'agents IA capables de répondre aux demandes techniques 24/7.",
  },
  {
    q: "Combien d'agences IA y a-t-il à Terrebonne en 2026 ?",
    a: "Très peu. Selon notre veille concurrentielle, environ 4 à 7 agences se positionnent spécifiquement comme « agence IA Terrebonne » en 2026, et la majorité sont en réalité des agences SEO/marketing qui ajoutent « IA » à leur offre sans vraie spécialisation technique. MAAD-AI est l'une des seules agences IA québécoises spécifiquement dédiées à la visibilité IA + automatisation pour les PME francophones.",
  },
  {
    q: "Pouvez-vous m'aider à mesurer le ROI de l'IA pour mon entreprise terrebonnienne ?",
    a: "Oui. On mesure le ROI sur trois axes : (1) visibilité IA — featured snippets gagnés, citations ChatGPT/Perplexity détectées, trafic IA, (2) automatisation — heures économisées par mois sur les processus automatisés, valeur monétaire à ton taux horaire, (3) conversion — qualification de leads, prises de rendez-vous, ventes attribuables. Reporting mensuel clair avec dashboards Looker Studio ou interface custom.",
  },
];

const TERREBONNE_AREA = [
  "Terrebonne",
  "Mascouche",
  "Vieux-Terrebonne",
  "Lachenaie",
  "La Plaine",
  "Mascouche-Est",
  "Bois-des-Filion",
  "Sainte-Anne-des-Plaines",
];

export default function AgenceIaTerrebonnePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({
            cityName: "Terrebonne",
            description:
              "Agence IA pour les PME de Terrebonne et Mascouche : services pros, e-commerce, B2B, manufacturiers, cliniques. Visibilité ChatGPT, automatisations et chatbots.",
            path: "/agence-ia-terrebonne",
            latitude: 45.7,
            longitude: -73.6333,
            areaServed: TERREBONNE_AREA,
          }),
          serviceSchema({
            name: "Agence IA Terrebonne",
            description:
              "Agence IA basée à Joliette qui dessert Terrebonne et Mascouche. Visibilité ChatGPT, automatisations n8n, chatbots IA et agents intelligents pour PME locales.",
            path: "/agence-ia-terrebonne",
          }),
          faqSchema(faqs),
          definedTermSchema({
            term: "Agence IA Terrebonne",
            description:
              "Une agence IA Terrebonne est une firme spécialisée en intelligence artificielle qui accompagne les PME de Terrebonne et Mascouche (services pros, e-commerce, B2B, manufacturiers, cliniques) dans la visibilité IA et l'automatisation.",
            path: "/agence-ia-terrebonne",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Agence IA Lanaudière", path: "/agence-ia-lanaudiere" },
            { name: "Agence IA Terrebonne", path: "/agence-ia-terrebonne" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="AGENCE IA TERREBONNE"
        breadcrumbs={[
          { name: "Accueil", path: "/" },
          { name: "Lanaudière", path: "/agence-ia-lanaudiere" },
          { name: "Terrebonne", path: "/agence-ia-terrebonne" },
        ]}
        title={
          <>
            L&apos;agence IA{" "}
            <span className="text-italic-serif text-emerald">à Terrebonne</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">
              MAAD-AI accompagne les PME de Terrebonne et Mascouche dans la
              visibilité IA, l&apos;automatisation et les chatbots intelligents.
            </strong>{" "}
            4e plus grande ville du Québec, 120 000 habitants, économie B2B
            dense — et une fenêtre AEO encore largement ouverte. Du
            Vieux-Terrebonne au parc industriel Mascouche-Est, on parle ton
            langage.
          </>
        }
        visual={<IconAeo />}
      />

      {/* Stat bar Terrebonne */}
      <section className="border-y border-white/5 bg-ink-50/30">
        <div className="container-rail py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { v: "120 K+", l: "habitants à Terrebonne (4e plus grande ville Québec)" },
            { v: "180 K+", l: "habitants combinés Terrebonne + Mascouche" },
            { v: "<7", l: "agences IA spécialisées à Terrebonne en 2026" },
            { v: "0,5 %", l: "des PME terrebonniennes avec stratégie AEO formalisée" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-display text-4xl md:text-5xl text-emerald mb-2">
                {s.v}
              </div>
              <div className="label-mono text-[0.62rem]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi Terrebonne */}
      <SectionWrapper>
        <div className="mb-10 max-w-4xl">
          <div className="label-mono mb-5">Pourquoi Terrebonne compte</div>
          <h2 className="text-display mb-8">
            120 000 habitants. Une économie{" "}
            <span className="text-italic-serif text-emerald">qui scale</span>.
          </h2>
          <p className="text-lg text-bone leading-relaxed mb-6">
            <strong>
              Terrebonne, c&apos;est la quatrième plus grande ville du Québec, avec
              une économie qui ne ressemble à aucune autre ville lanaudoise.
            </strong>{" "}
            Plus de 120 000 habitants à Terrebonne, plus 60 000 à Mascouche, soit
            près de 180 000 personnes dans la MRC Les Moulins. Le tissu économique
            mélange services pros denses du Vieux-Terrebonne, e-commerce et
            commerces dans les pôles modernes, manufacturers B2B du parc
            industriel Terrebonne-Mascouche, et cliniques privées en croissance.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Le contraste avec Joliette est important : Terrebonne a un volume de
            recherche local 6 à 8 fois supérieur pour la plupart des niches.
            Quand quelqu&apos;un demande à ChatGPT « meilleur courtier
            hypothécaire Terrebonne » ou « comptable Mascouche », il y a un vrai
            volume — et très peu d&apos;entreprises optimisées pour répondre. La
            fenêtre est large.
          </p>
          <p className="text-muted leading-relaxed">
            Notre angle pour Terrebonne : on combine visibilité IA (AEO + GEO) +
            automatisation des processus + déploiement de chatbots intelligents.
            La majorité des agences ne couvrent qu&apos;une seule dimension. On
            offre les trois en stack cohérente, pour des PME qui ont la taille
            critique pour en tirer un vrai ROI.
          </p>
        </div>
      </SectionWrapper>

      {/* Segments terrebonniens */}
      <SectionWrapper>
        <div className="mb-14 max-w-4xl">
          <div className="label-mono mb-5">Qui on aide à Terrebonne</div>
          <h2 className="text-display">
            Quatre profils. Quatre{" "}
            <span className="text-italic-serif text-emerald">stratégies IA</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              t: "Services pros Vieux-Terrebonne",
              d: "Comptables, avocats, notaires, courtiers hypothécaires et courtiers immobiliers du centre historique. Volume de recherche local élevé, concurrence SEO modérée. Captation des requêtes « meilleur [service] Terrebonne » dans ChatGPT et AI Overviews.",
              tag: "AEO + GEO local",
            },
            {
              t: "E-commerces et boutiques en ligne",
              d: "Shopify, WooCommerce et autres plateformes basées à Terrebonne ou Lachenaie. Automatisation du service client, optimisation des fiches produits pour Google Shopping IA, descriptions citation-ready pour comparateurs ChatGPT.",
              tag: "Automatisation + GEO",
            },
            {
              t: "Manufacturiers B2B parc industriel",
              d: "PME industrielles Terrebonne-Mascouche. Optimisation de la documentation produit pour les acheteurs IA, automatisation des soumissions et du suivi commercial. Agents IA capables de répondre aux questions techniques 24/7.",
              tag: "B2B + agents IA",
            },
            {
              t: "Cliniques privées",
              d: "Dentisterie, médecine esthétique, physiothérapie, vétérinaires, services santé. Chatbot IA pour FAQ patients et prise de rendez-vous, visibilité sur les requêtes « clinique [spécialité] Terrebonne ou Mascouche ».",
              tag: "Chatbot + SEO local",
            },
          ].map((p) => (
            <GlassCard key={p.t}>
              <div className="label-mono text-emerald text-[0.62rem] mb-3">
                {p.tag}
              </div>
              <h3 className="text-display text-xl mb-3">{p.t}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.d}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Notre méthode Terrebonne */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Notre méthode à Terrebonne</div>
          <h2 className="text-display max-w-3xl">
            5 étapes pour devenir la PME{" "}
            <span className="text-italic-serif text-emerald">que ChatGPT cite</span>.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "Audit local Terrebonne + IA",
              d: "Scan complet : positions Google sur tes requêtes « [service] Terrebonne » et « [service] Mascouche », mentions actuelles dans ChatGPT et Perplexity, qualité du schema, cohérence NAP sur les annuaires. Rapport 12-18 pages, gratuit.",
            },
            {
              n: "02",
              t: "Schema LocalBusiness Terrebonne",
              d: "Déploiement du schema LocalBusiness avec coordonnées géographiques précises (latitude 45.7, longitude -73.6333) et areaServed couvrant Terrebonne, Mascouche, Lachenaie, La Plaine, Bois-des-Filion. Les LLMs comprennent ta zone exacte.",
            },
            {
              n: "03",
              t: "Refonte AEO-ready",
              d: "Restructuration de tes pages stratégiques avec contenu citation-ready, blocs Q/R extractibles, llms.txt configuré, Google Business Profile optimisé. Spécifique à ton secteur (services pros, e-commerce, B2B, clinique).",
            },
            {
              n: "04",
              t: "Automatisation + agents IA",
              d: "Déploiement des workflows n8n pour automatiser tes 3 processus les plus chronophages. Implémentation d'un agent IA ou chatbot capable de qualifier tes visiteurs et de prendre des actions concrètes (rendez-vous, devis, qualification leads).",
            },
            {
              n: "05",
              t: "Tracking + optimisation continue",
              d: "Suivi mensuel des positions Google, des citations IA (ChatGPT, Perplexity, Gemini), de l'usage des automatisations, du chatbot. Ajustements continus, nouveaux contenus créés. Reporting clair en français québécois.",
            },
          ]}
        />
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            Agence IA Terrebonne —{" "}
            <span className="text-italic-serif text-emerald">expliqué</span>{" "}
            directement.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <BlogCTA topic="l'IA pour les PME de Terrebonne et Mascouche, la visibilité ChatGPT et l'automatisation B2B" />

      <RelatedServices
        items={[
          {
            href: "/agence-ia-lanaudiere",
            label: "Agence IA Lanaudière",
            number: "loc",
            desc: "Notre couverture régionale complète des six MRC.",
          },
          {
            href: "/agence-ia-joliette",
            label: "Agence IA Joliette",
            number: "loc",
            desc: "Notre ville mère — chef-lieu Lanaudière.",
          },
          {
            href: "/services/intelligence-artificielle",
            label: "Services IA complets",
            number: "ia",
            desc: "Le détail de nos services IA pour PME.",
          },
        ]}
      />

      <CTABanner
        title="Ton entreprise terrebonnienne mérite d'être citée par ChatGPT."
        text="Audit IA gratuit. On évalue ta visibilité actuelle dans les moteurs IA et on te livre un plan d'action en 5 jours ouvrables."
        ctaLabel="Demande ton audit gratuit"
      />
    </>
  );
}
