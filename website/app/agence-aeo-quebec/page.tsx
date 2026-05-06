import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogCTA } from "@/components/ui/BlogCTA";
import {
  ComparisonTable,
  NumberedList,
  RelatedServices,
} from "@/components/ui/ServicePageSections";
import { IconAeo } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  serviceSchema,
  faqSchema,
  definedTermSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Agence AEO Québec — Answer Engine Optimization",
  description:
    "Agence AEO au Québec : on rend ton entreprise visible dans Google AI Overviews, ChatGPT et les réponses IA. Audit gratuit. Joliette, Montréal, Lanaudière.",
  path: "/agence-aeo-quebec",
});

const faqs = [
  {
    q: "C'est quoi une agence AEO au Québec ?",
    a: "Une agence AEO au Québec est une firme spécialisée en Answer Engine Optimization, c'est-à-dire l'optimisation de ton contenu pour devenir la réponse directe affichée par Google AI Overviews, les featured snippets et les moteurs IA comme ChatGPT. MAAD-AI est basée à Joliette et accompagne les PME francophones partout dans la province.",
  },
  {
    q: "Combien de temps pour voir les résultats AEO ?",
    a: "Les premiers signaux apparaissent en 4 à 8 semaines : nouveaux featured snippets, citations dans Perplexity, hausse du CTR. Les résultats stables (positions zéro consolidées, mentions ChatGPT régulières) prennent 3 à 6 mois selon la compétitivité de ton secteur et l'état actuel de ton site.",
  },
  {
    q: "AEO vs GEO — quelle différence ?",
    a: "L'AEO (Answer Engine Optimization) cible Google et ses moteurs de réponse — featured snippets, AI Overviews, People Also Ask. Le GEO (Generative Engine Optimization) cible les LLMs comme ChatGPT, Perplexity et Claude. Même logique de citation, écosystèmes différents. On combine les deux pour 100 % de couverture.",
  },
  {
    q: "Combien coûte une stratégie AEO au Québec ?",
    a: "L'audit AEO initial est gratuit. La refonte AEO (restructuration de 15-25 pages, schema, llms.txt, optimisation citation-ready) commence à 5 000 $ CAD. Le suivi récurrent — création de contenu, tracking citations, ajustements — se situe entre 1 500 $ et 4 000 $ par mois selon le volume et l'industrie.",
  },
  {
    q: "Mon site Wix ou Squarespace est-il compatible AEO ?",
    a: "Oui, mais avec limitations. Wix et Squarespace permettent d'ajouter du schema basique et de structurer ton contenu citation-ready. Les vraies contraintes sont la vitesse, la profondeur du contrôle technique et l'intégration de llms.txt. Pour des résultats AEO sérieux, on recommande une migration vers Next.js ou WordPress optimisé.",
  },
  {
    q: "Pourquoi choisir une agence AEO basée au Québec plutôt qu'une firme américaine ?",
    a: "Trois raisons : la maîtrise du français québécois (les LLMs traitent le FR-CA différemment du français de France), la connaissance des requêtes locales (Joliette, Lanaudière, Estrie), et la proximité pour les rencontres en personne. Les firmes US optimisent en anglais — tes prospects québécois cherchent en français.",
  },
  {
    q: "Est-ce que l'AEO va remplacer le SEO traditionnel ?",
    a: "Non. L'AEO complète le SEO. Le SEO bâtit l'autorité de domaine et le crawl de base; sans cette fondation, l'AEO ne fonctionne pas. La bonne stratégie 2026 combine SEO classique (positions Google) + AEO (réponses directes Google) + GEO (citations ChatGPT/Perplexity) en parallèle.",
  },
  {
    q: "Combien de PME québécoises font déjà de l'AEO en 2026 ?",
    a: "Moins de 0,3 % des PME québécoises ont une stratégie AEO formalisée selon notre audit interne sur 1 200 sites de Lanaudière, Montréal et Estrie. C'est exactement la fenêtre d'opportunité — la concurrence est quasi inexistante alors que 94 % des acheteurs B2B utilisent maintenant un assistant IA pour rechercher des fournisseurs.",
  },
  {
    q: "Travaillez-vous avec les PME hors Montréal ?",
    a: "Oui. MAAD-AI est basée à Joliette dans Lanaudière. On travaille à 100 % à distance partout au Québec — Montréal, Québec, Laval, Sherbrooke, Trois-Rivières, Gatineau, Saguenay. Tous nos livrables sont en français québécois. Visioconférence pour les calls, livraison numérique pour les rapports.",
  },
  {
    q: "Garantissez-vous des résultats AEO ?",
    a: "On garantit le travail, pas l'algorithme — c'est la seule réponse honnête. Notre engagement : audit transparent, livrables datés, KPIs mesurables (featured snippets, citations IA, CTR), reporting mensuel clair. Si après 90 jours aucun progrès mesurable n'est observé, on retravaille la stratégie sans frais additionnels.",
  },
];

export default function AgenceAeoQuebecPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Agence AEO Québec — Answer Engine Optimization",
            description:
              "Agence AEO basée à Joliette, Québec. On optimise ton contenu pour devenir la réponse directe dans Google AI Overviews, featured snippets et moteurs IA pour les PME francophones du Québec.",
            path: "/agence-aeo-quebec",
          }),
          faqSchema(faqs),
          definedTermSchema({
            term: "Agence AEO (Answer Engine Optimization)",
            description:
              "Une agence AEO est une firme spécialisée dans l'optimisation de contenu pour devenir la réponse directe affichée par les moteurs de recherche IA — Google AI Overviews, featured snippets, ChatGPT et Perplexity.",
            path: "/agence-aeo-quebec",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Agence AEO Québec", path: "/agence-aeo-quebec" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="AGENCE AEO QUÉBEC"
        breadcrumbs={[
          { name: "Accueil", path: "/" },
          { name: "Agence AEO Québec", path: "/agence-aeo-quebec" },
        ]}
        title={
          <>
            L&apos;agence AEO{" "}
            <span className="text-italic-serif text-emerald">du Québec</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">
              MAAD-AI est l&apos;agence AEO (Answer Engine Optimization) du Québec
              spécialisée dans la visibilité des PME francophones sur Google AI
              Overviews, ChatGPT et Perplexity.
            </strong>{" "}
            Basée à Joliette, on rend ton entreprise sélectionnable par les moteurs IA —
            avant que tes compétiteurs ne s&apos;y mettent.
          </>
        }
        visual={<IconAeo />}
      />

      {/* Stat bar */}
      <section className="border-y border-white/5 bg-ink-50/30">
        <div className="container-rail py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { v: "94 %", l: "des acheteurs B2B utilisent une IA pour pré-qualifier" },
            { v: "0,3 %", l: "des PME québécoises ont une stratégie AEO formalisée" },
            { v: "+206 %", l: "trafic référé par ChatGPT en 2025 vs 2024" },
            { v: "65 %", l: "des recherches Google sont zero-click en 2026" },
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

      {/* Qu'est-ce que l'AEO */}
      <SectionWrapper>
        <div className="mb-10 max-w-4xl">
          <div className="label-mono mb-5">Définition</div>
          <h2 className="text-display mb-8">
            Qu&apos;est-ce que{" "}
            <span className="text-italic-serif text-emerald">l&apos;AEO</span> ?
          </h2>
          <p className="text-lg text-bone leading-relaxed mb-6">
            <strong>
              L&apos;AEO (Answer Engine Optimization) est l&apos;optimisation
              technique et éditoriale de ton site pour devenir la réponse directe
              affichée par les moteurs de réponse — Google AI Overviews, featured
              snippets, People Also Ask et assistants IA.
            </strong>{" "}
            Au lieu de viser la position #1 dans les liens bleus classiques, l&apos;AEO
            vise la position zéro : la réponse extraite et affichée au-dessus de tous
            les résultats, avec ta marque comme source.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Concrètement, ça veut dire structurer ton contenu en blocs de
            questions-réponses extractibles (50-80 mots), ajouter du schema JSON-LD
            sur chaque page (FAQPage, HowTo, DefinedTerm, Service), publier un fichier{" "}
            <Link href="/services/geo" className="text-emerald hover:underline">
              llms.txt
            </Link>{" "}
            à la racine du site, et bâtir une autorité sémantique reconnue par Google
            et les LLMs.
          </p>
          <p className="text-muted leading-relaxed">
            Au Québec, l&apos;AEO est encore une discipline jeune — moins de 0,3 % des
            PME ont une stratégie formalisée. C&apos;est exactement la raison pour
            laquelle MAAD-AI s&apos;est positionnée tôt : les premières marques
            citées par ChatGPT et Google AI Overviews dans une niche y resteront
            longtemps.
          </p>
        </div>
      </SectionWrapper>

      {/* Pourquoi MAAD-AI */}
      <SectionWrapper>
        <div className="mb-14 max-w-4xl">
          <div className="label-mono mb-5">Pourquoi MAAD-AI</div>
          <h2 className="text-display">
            L&apos;agence AEO de référence au{" "}
            <span className="text-italic-serif text-emerald">Québec</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              t: "Spécialistes francophones",
              d: "Tout notre contenu, code et reporting est en français québécois. Les LLMs traitent le FR-CA différemment du français de France — on calibre chaque page pour l'écosystème local.",
            },
            {
              t: "Méthode citation-ready",
              d: "Plus de 140 articles audités et 280 pages restructurées selon notre framework propriétaire. On sait exactement ce qui se fait extraire par Google AI Overviews — et ce qui ne sera jamais cité.",
            },
            {
              t: "Stack technique propre",
              d: "Schema.org JSON-LD complet, Core Web Vitals optimisés, llms.txt déployé, sitemap dynamique, balises meta calibrées. Pas d'astuces — juste les fondations qui durent.",
            },
            {
              t: "Cas concrets PME",
              d: "Cabinet comptable Québec : 2 → 19 featured snippets en 5 mois. SaaS B2B : citations ChatGPT en 3 semaines. Manufacturier Lanaudière : visibilité Perplexity dès la 6e semaine.",
            },
            {
              t: "Couverture provinciale",
              d: "On travaille à distance partout au Québec — Montréal, Joliette, Sherbrooke, Trois-Rivières, Québec, Saguenay, Outaouais. Bureau central à Joliette pour les rencontres en personne.",
            },
            {
              t: "AEO + GEO + SEO",
              d: "On ne fait pas que de l'AEO. On combine SEO classique (fondation), AEO (Google IA) et GEO (ChatGPT, Perplexity, Claude) en stratégie cohérente. Couverture 360° sur toutes les surfaces de recherche.",
            },
          ].map((p) => (
            <GlassCard key={p.t}>
              <h3 className="text-display text-lg mb-3">{p.t}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.d}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Méthode AEO 5 étapes */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Notre méthode AEO</div>
          <h2 className="text-display max-w-3xl">
            5 étapes pour que ton site{" "}
            <span className="text-italic-serif text-emerald">devienne la réponse</span>.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "Audit AEO complet",
              d: "On scanne ton site, ton schema actuel, tes positions Google, tes mentions IA dans ChatGPT et Perplexity. Livrable : rapport de 12-18 pages avec les 3 fix prioritaires. Gratuit.",
            },
            {
              n: "02",
              t: "Refonte citation-ready",
              d: "Restructuration des 15-25 pages stratégiques avec premiers paragraphes extractibles, H2 en questions, listes numérotées, tableaux comparatifs et définitions courtes.",
            },
            {
              n: "03",
              t: "Schema JSON-LD complet",
              d: "Implémentation de Organization, Service, FAQPage, HowTo, DefinedTerm, BreadcrumbList sur chaque page. Les LLMs et Google adorent les données propres.",
            },
            {
              n: "04",
              t: "llms.txt + entity clarity",
              d: "Publication du fichier llms.txt à la racine, clarification de ton nom de marque, fondateur, services et localisation sur chaque page. Pas d'ambiguïté pour les IA.",
            },
            {
              n: "05",
              t: "Suivi mensuel + optimisation",
              d: "Tracking des featured snippets gagnés, citations ChatGPT/Perplexity détectées, CTR sur requêtes ciblées. Ajustements et nouveaux contenus chaque mois pour empiler les positions.",
            },
          ]}
        />
      </SectionWrapper>

      {/* AEO vs SEO */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">AEO vs SEO traditionnel</div>
          <h2 className="text-display">
            Deux disciplines.{" "}
            <span className="text-italic-serif text-emerald">Deux</span>{" "}
            philosophies.
          </h2>
        </div>
        <ComparisonTable
          leftTitle="SEO classique"
          leftItems={[
            "Cible : ranker dans les 10 liens bleus de Google",
            "Métrique : position moyenne, trafic organique",
            "Format : pages longues, narratives",
            "Délai : 4-12 mois pour des résultats stables",
            "Saturation : très élevée, millions de concurrents",
            "Mort en 2026 ? Non, mais insuffisant seul",
          ]}
          rightTitle="AEO moderne"
          rightItems={[
            "Cible : devenir la réponse directe affichée",
            "Métrique : featured snippets, citations IA, CTR",
            "Format : blocs extractibles 50-80 mots, schema",
            "Délai : 4-8 semaines pour les premiers signaux",
            "Saturation : très faible, opportunité ouverte",
            "Indispensable : 65 % des recherches sont zero-click",
          ]}
        />
        <p className="text-muted text-sm mt-8 max-w-3xl">
          Pour comprendre les 7 différences critiques en profondeur, lis notre article{" "}
          <Link
            href="/blog/aeo-vs-seo-7-differences-critiques-2026"
            className="text-emerald hover:underline"
          >
            AEO vs SEO : 7 différences critiques en 2026
          </Link>
          .
        </p>
      </SectionWrapper>

      {/* Industries servies */}
      <SectionWrapper>
        <div className="mb-14 max-w-4xl">
          <div className="label-mono mb-5">Industries servies au Québec</div>
          <h2 className="text-display">
            Là où on{" "}
            <span className="text-italic-serif text-emerald">livre des résultats</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              t: "B2B services professionnels",
              d: "Cabinets comptables, avocats, consultants. Montréal, Québec, Sherbrooke, Outaouais. Spécialité : capter les recherches « meilleur [service] [ville] » dans ChatGPT.",
              href: "/industries/b2b",
            },
            {
              t: "SaaS et logiciels",
              d: "Startups SaaS québécoises B2B. Montréal et corridor Joliette-Trois-Rivières. AEO sur la documentation produit + GEO pour citations dans Perplexity Pro.",
              href: "/industries/saas",
            },
            {
              t: "E-commerce",
              d: "Boutiques Shopify et WooCommerce au Québec. Optimisation des fiches produits pour Google Shopping AI + descriptions citation-ready pour comparateurs ChatGPT.",
              href: "/industries/e-commerce",
            },
            {
              t: "Manufacturiers",
              d: "PME industrielles de Lanaudière, Mauricie, Estrie. AEO B2B technique : fiches produits, certifications, études de cas — extractibles par les acheteurs IA.",
              href: "/industries/b2b",
            },
            {
              t: "Immobilier",
              d: "Courtiers résidentiels et commerciaux. Montréal, Laval, Rive-Sud, Lanaudière. AEO local + schema RealEstateListing pour visibilité dans Google AI Overviews.",
              href: "/industries/immobilier",
            },
            {
              t: "Personnalités publiques",
              d: "Créateurs, conférenciers, dirigeants. Optimisation de la knowledge box Google + citations ChatGPT sur leur expertise. Tout le Québec.",
              href: "/industries/personnalite-publique",
            },
          ].map((p) => (
            <GlassCard key={p.t} href={p.href}>
              <h3 className="text-display text-lg mb-3">{p.t}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.d}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Tarification */}
      <SectionWrapper>
        <div className="mb-10 max-w-4xl">
          <div className="label-mono mb-5">Tarification AEO Québec</div>
          <h2 className="text-display mb-8">
            Combien coûte une stratégie AEO au{" "}
            <span className="text-italic-serif text-emerald">Québec</span> ?
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Une stratégie AEO complète au Québec coûte entre 5 000 $ CAD pour la
            refonte initiale et 1 500 $ à 4 000 $ par mois pour le suivi récurrent.
            L&apos;audit AEO de départ est gratuit — on évalue ton site, tes
            positions actuelles et tes citations IA, puis on te livre un plan
            d&apos;action en 12-18 pages, sans engagement.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Étape 1</div>
            <h3 className="text-display text-2xl mb-3">Audit AEO</h3>
            <div className="text-display text-4xl text-bone mb-4">Gratuit</div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Scan complet de ton site : schema, vitesse, structure citation-ready,
              positions Google, mentions ChatGPT et Perplexity actuelles.
            </p>
            <ul className="text-sm text-muted space-y-2">
              <li>— Rapport 12-18 pages</li>
              <li>— 3 fix prioritaires</li>
              <li>— Roadmap 90 jours</li>
              <li>— Aucun engagement</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Étape 2</div>
            <h3 className="text-display text-2xl mb-3">Refonte AEO</h3>
            <div className="text-display text-4xl text-bone mb-4">5 000 $+ CAD</div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Restructuration de 15-25 pages, schema complet, llms.txt, optimisation
              citation-ready de tout ton contenu stratégique.
            </p>
            <ul className="text-sm text-muted space-y-2">
              <li>— 15-25 pages restructurées</li>
              <li>— Schema JSON-LD complet</li>
              <li>— llms.txt + entity clarity</li>
              <li>— Livraison en 4-6 semaines</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Étape 3</div>
            <h3 className="text-display text-2xl mb-3">Suivi récurrent</h3>
            <div className="text-display text-4xl text-bone mb-4">1 500 $/mo+</div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Création de contenu mensuelle, tracking citations IA, ajustements
              continus, reporting clair. De 1 500 $ à 4 000 $ selon le volume.
            </p>
            <ul className="text-sm text-muted space-y-2">
              <li>— 4-8 articles citation-ready/mois</li>
              <li>— Tracking GSC + IA mentions</li>
              <li>— Reporting mensuel transparent</li>
              <li>— Sans engagement long terme</li>
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            L&apos;AEO au Québec —{" "}
            <span className="text-italic-serif text-emerald">expliqué</span>{" "}
            directement.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <BlogCTA topic="l'AEO, les featured snippets et la visibilité IA pour les PME du Québec" />

      <RelatedServices
        items={[
          {
            href: "/services/aeo",
            label: "Service AEO",
            number: "v.03",
            desc: "Le détail technique de notre offre AEO.",
          },
          {
            href: "/agence-geo-montreal",
            label: "Agence GEO Montréal",
            number: "GEO",
            desc: "Le pendant ChatGPT/Perplexity de l'AEO.",
          },
          {
            href: "/blog/comment-apparaitre-chatgpt-quebec-2026",
            label: "Guide ChatGPT 2026",
            number: "guide",
            desc: "Comment apparaître sur ChatGPT pour les PME québécoises.",
          },
        ]}
      />

      <CTABanner
        title="Demande ton audit AEO gratuit."
        text="On évalue ta visibilité actuelle dans Google AI Overviews, ChatGPT et Perplexity. Rapport en 5 jours ouvrables. Aucun engagement."
        ctaLabel="Demande ton audit gratuit"
      />
    </>
  );
}
