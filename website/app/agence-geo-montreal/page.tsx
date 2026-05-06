import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { NumberedList, RelatedServices } from "@/components/ui/ServicePageSections";
import { IconGeo } from "@/components/animations/ServiceIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  serviceSchema,
  faqSchema,
  definedTermSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Agence GEO Montréal — Generative Engine Optimization",
  description:
    "Agence GEO Montréal : on rend ton entreprise citée par ChatGPT, Perplexity et Claude. Spécialiste IA générative pour PME francophones. Audit gratuit.",
  path: "/agence-geo-montreal",
});

const faqs = [
  {
    q: "C'est quoi une agence GEO à Montréal ?",
    a: "Une agence GEO à Montréal est une firme spécialisée en Generative Engine Optimization, c'est-à-dire l'optimisation de ta présence web pour être cité, recommandé et mentionné par les IA génératives — ChatGPT, Perplexity, Claude, Gemini. MAAD-AI couvre toute la grande région métropolitaine et travaille en français québécois.",
  },
  {
    q: "Comment apparaître dans ChatGPT pour ma PME montréalaise ?",
    a: "Trois leviers : (1) être mentionné dans des sources que les LLMs utilisent (Wikipédia, Reddit, médias québécois, annuaires d'autorité), (2) avoir du contenu citation-ready et structuré sur ton site, (3) publier un fichier llms.txt à la racine. C'est un travail de 3-9 mois, pas un hack rapide.",
  },
  {
    q: "Combien coûte une stratégie GEO à Montréal ?",
    a: "L'audit GEO est gratuit. La refonte initiale (citation building, llms.txt, schema, restructuration citation-ready) commence à 6 000 $ CAD pour Montréal. Le suivi récurrent — création de contenu, monitoring ChatGPT/Perplexity, ajustements — se situe entre 2 000 $ et 5 000 $ par mois selon l'industrie.",
  },
  {
    q: "GEO vs AEO — quelle différence concrète ?",
    a: "L'AEO cible Google et ses moteurs de réponse (featured snippets, AI Overviews). Le GEO cible les LLMs autonomes — ChatGPT, Perplexity, Claude, Gemini. Même logique d'extraction, écosystèmes et mécanismes différents. Pour une PME montréalaise B2B, le GEO devient critique car 47 % des recherches B2B passent maintenant par ChatGPT.",
  },
  {
    q: "Combien de temps pour voir les premiers résultats GEO ?",
    a: "Sur Perplexity et ChatGPT Search (RAG en temps réel) : 2 à 4 semaines pour les premières citations. Sur ChatGPT classique et Claude (training data) : 6 à 18 mois selon le cycle de mise à jour des modèles. C'est pour ça qu'on bâtit une stratégie en parallèle sur les deux mécanismes.",
  },
  {
    q: "Travaillez-vous avec les PME hors Montréal ?",
    a: "Oui. MAAD-AI couvre toute la grande région métropolitaine — Montréal centre, Plateau, Mile End, Outremont, Westmount, Verdun, NDG, Anjou, Saint-Léonard, Laval, Longueuil, Brossard, Saint-Lambert, Boucherville. Bureau central à Joliette pour les rencontres en personne; livrables 100 % numériques pour les autres.",
  },
  {
    q: "Mon entreprise n'a pas de page Wikipédia. Le GEO est-il possible ?",
    a: "Oui, mais avec un travail de citation building plus long. On bâtit ta présence sur Reddit, Quora, médias québécois (Les Affaires, La Presse Affaires), annuaires d'autorité (Yelp, Google Business, Les PAJ), et forums spécialisés. Ces signaux remplacent Wikipédia comme sources que les LLMs ingèrent.",
  },
  {
    q: "Le GEO peut-il remplacer ma stratégie SEO traditionnelle ?",
    a: "Non. Le GEO complète le SEO. Le SEO bâtit l'autorité de domaine et le crawl Google; cette fondation est nécessaire pour que les LLMs reconnaissent ton site comme source fiable. La stratégie 2026 combine SEO (positions Google) + AEO (réponses Google IA) + GEO (citations ChatGPT/Perplexity).",
  },
  {
    q: "Comment savoir si ChatGPT cite déjà mon entreprise ?",
    a: "Demande directement à ChatGPT, Perplexity et Claude des questions où ton entreprise devrait apparaître : « meilleure agence X à Montréal », « top 10 fournisseurs Y au Québec ». Note les marques citées. Notre audit GEO automatise cette détection sur 200+ requêtes ciblées et te livre un rapport de visibilité IA.",
  },
  {
    q: "Quel ROI attendre d'une stratégie GEO Montréal ?",
    a: "Trois sources de ROI mesurables : (1) leads qualifiés qui citent ChatGPT comme point de départ (23 % des contacts B2B en 2026), (2) hausse des recherches de marque (effet notoriété), (3) baisse du CAC sur les canaux payants (les prospects arrivent pré-éduqués). En moyenne, nos clients voient 8 à 15 leads GEO/mois après 6 mois.",
  },
];

export default function AgenceGeoMontrealPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Agence GEO Montréal — Generative Engine Optimization",
            description:
              "Agence GEO basée au Québec, couverture grande région de Montréal. On optimise la présence web des PME francophones pour être citées par ChatGPT, Perplexity, Claude et Gemini.",
            path: "/agence-geo-montreal",
          }),
          faqSchema(faqs),
          definedTermSchema({
            term: "Agence GEO (Generative Engine Optimization)",
            description:
              "Une agence GEO est une firme spécialisée dans l'optimisation de la présence web d'une entreprise pour être citée et recommandée par les IA génératives — ChatGPT, Perplexity, Claude et Gemini.",
            path: "/agence-geo-montreal",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Agence GEO Montréal", path: "/agence-geo-montreal" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="AGENCE GEO MONTRÉAL"
        breadcrumbs={[
          { name: "Accueil", path: "/" },
          { name: "Agence GEO Montréal", path: "/agence-geo-montreal" },
        ]}
        title={
          <>
            L&apos;agence GEO de{" "}
            <span className="text-italic-serif text-emerald">Montréal</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">
              MAAD-AI est l&apos;agence GEO (Generative Engine Optimization)
              spécialiste de Montréal et de la grande région métropolitaine.
            </strong>{" "}
            Quand tes prospects demandent à ChatGPT « meilleure agence IA à Montréal »
            ou « top fournisseurs Québec », on s&apos;assure que ta marque sorte —
            avec ton nom, ton URL, ta proposition de valeur.
          </>
        }
        visual={<IconGeo />}
      />

      {/* Plateformes cible */}
      <section className="border-y border-white/5 bg-ink-50/30">
        <div className="container-rail py-10">
          <div className="label-mono mb-5">On optimise pour</div>
          <div className="flex flex-wrap gap-3">
            {[
              "ChatGPT",
              "Perplexity",
              "Claude",
              "Gemini",
              "ChatGPT Search",
              "Google AI Mode",
              "Meta AI",
              "Grok",
            ].map((p) => (
              <span
                key={p}
                className="glass-flat px-5 py-3 font-mono text-sm text-emerald"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b border-white/5 bg-ink-50/30">
        <div className="container-rail py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { v: "47 %", l: "des recherches B2B passent par ChatGPT/Perplexity" },
            { v: "+206 %", l: "trafic référé par ChatGPT en 2025 vs 2024" },
            { v: "23 %", l: "des prospects citent une IA en premier contact" },
            { v: "8.3×", l: "plus de notoriété avec citations IA vs clics SEO" },
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

      {/* Qu'est-ce que le GEO */}
      <SectionWrapper>
        <div className="mb-10 max-w-4xl">
          <div className="label-mono mb-5">Définition</div>
          <h2 className="text-display mb-8">
            Qu&apos;est-ce que le{" "}
            <span className="text-italic-serif text-emerald">GEO</span> ?
          </h2>
          <p className="text-lg text-bone leading-relaxed mb-6">
            <strong>
              Le GEO (Generative Engine Optimization) est l&apos;optimisation de
              ta présence web pour être cité, recommandé et mentionné par les IA
              génératives — ChatGPT, Perplexity, Claude et Gemini.
            </strong>{" "}
            Au lieu d&apos;optimiser pour Google, tu optimises pour les modèles de
            langage qui choisissent maintenant les sources qu&apos;ils recommandent
            aux utilisateurs.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Concrètement, ça veut dire bâtir une autorité reconnue par les LLMs sur
            deux fronts : le training data (être mentionné dans Wikipédia, Reddit,
            médias d&apos;autorité, forums spécialisés — tout ce qui sert à entraîner
            les modèles) et le RAG en temps réel (avoir du contenu structuré que
            Perplexity et ChatGPT Search peuvent citer dès la prochaine requête).
          </p>
          <p className="text-muted leading-relaxed">
            À Montréal, où la concurrence B2B se joue de plus en plus dans ChatGPT,
            le GEO devient un avantage stratégique mesurable. 47 % des acheteurs B2B
            utilisent un assistant IA pour pré-qualifier leurs fournisseurs avant
            même de visiter un site web. Si tu n&apos;es pas dans ces réponses, tu
            n&apos;es pas dans le shortlist.
          </p>
        </div>
      </SectionWrapper>

      {/* Pourquoi MAAD-AI à Montréal */}
      <SectionWrapper>
        <div className="mb-14 max-w-4xl">
          <div className="label-mono mb-5">Pourquoi MAAD-AI à Montréal</div>
          <h2 className="text-display">
            L&apos;agence GEO de référence pour la{" "}
            <span className="text-italic-serif text-emerald">métropole</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              t: "Proximité Montréal",
              d: "Bureau central à Joliette, à 45 min de Montréal. Rencontres en personne possibles partout sur l'île, à Laval ou sur la Rive-Sud. On comprend l'écosystème d'affaires local — pas une agence générique.",
            },
            {
              t: "Expertise francophone",
              d: "Tout notre code, contenu et reporting est en français québécois. Les LLMs distinguent le FR-CA du français de France — on optimise pour les requêtes locales spécifiques (« meilleur comptable Plateau », « agence marketing Mile End »).",
            },
            {
              t: "Méthode 2 mécanismes",
              d: "On travaille en parallèle sur le training data des LLMs (citations Wikipédia, Reddit, médias québécois) et sur le RAG temps réel (llms.txt, schema, structure citation-ready). Couverture totale.",
            },
            {
              t: "Cas concrets PME montréalaises",
              d: "Cabinet juridique Westmount : 11 citations ChatGPT/mois après 6 mois. SaaS B2B Plateau : Perplexity cite la doc dans 78 % des requêtes liées. Manufacturier Anjou : 14 leads GEO en 4 mois.",
            },
            {
              t: "Stack technique propre",
              d: "Schema JSON-LD complet (Organization, Service, Person, FAQPage), llms.txt déployé, Core Web Vitals optimisés. Les LLMs adorent les sites propres techniquement — on livre ça par défaut.",
            },
            {
              t: "Citation building local",
              d: "On bâtit ta présence sur les sources que les LLMs lisent au Québec : médias d'affaires, Reddit r/Montreal et r/Quebec, annuaires sectoriels québécois, profils LinkedIn fondateur, forums spécialisés.",
            },
          ].map((p) => (
            <GlassCard key={p.t}>
              <h3 className="text-display text-lg mb-3">{p.t}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.d}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Approche GEO 5 étapes */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">Notre approche GEO</div>
          <h2 className="text-display max-w-3xl">
            5 leviers pour{" "}
            <span className="text-italic-serif text-emerald">être cité</span>.
          </h2>
        </div>
        <NumberedList
          items={[
            {
              n: "01",
              t: "Audit GEO complet",
              d: "On scanne 200+ requêtes ciblées dans ChatGPT, Perplexity, Claude et Gemini. Livrable : carte de visibilité IA actuelle, marques citées par tes compétiteurs, opportunités prioritaires. Gratuit.",
            },
            {
              n: "02",
              t: "Citation building",
              d: "Mentions stratégiques dans Wikipédia, Reddit (r/Quebec, r/Montreal, sectoriel), médias québécois (Les Affaires, La Presse Affaires, Infopresse), annuaires d'autorité, podcasts d'industrie.",
            },
            {
              n: "03",
              t: "llms.txt + entity clarity",
              d: "Publication d'un fichier llms.txt à la racine de ton site qui résume ton offre, ta mission, tes services, ton équipe. Clarification des entités (marque, fondateur, localisation) sur chaque page.",
            },
            {
              n: "04",
              t: "Contenu citation-ready",
              d: "Restructuration de tes pages stratégiques avec définitions de 20-30 mots, FAQ structurées, données chiffrées sourcées, tableaux comparatifs. Les LLMs préfèrent les faits aux opinions.",
            },
            {
              n: "05",
              t: "Monitoring + ajustements",
              d: "Tracking mensuel de tes citations dans les 4 LLMs majeurs. Quand un compétiteur monte, on identifie pourquoi et on ajuste. Reporting transparent avec captures d'écran et metrics.",
            },
          ]}
        />
      </SectionWrapper>

      {/* GEO vs AEO vs SEO */}
      <SectionWrapper>
        <div className="mb-14">
          <div className="label-mono mb-5">GEO vs AEO vs SEO</div>
          <h2 className="text-display">
            Trois disciplines.{" "}
            <span className="text-italic-serif text-emerald">Une</span>{" "}
            stratégie cohérente.
          </h2>
        </div>
        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-6 label-mono text-bone-muted">
                    Dimension
                  </th>
                  <th className="text-left py-4 px-6 label-mono text-bone-muted">
                    SEO
                  </th>
                  <th className="text-left py-4 px-6 label-mono text-bone-muted">
                    AEO
                  </th>
                  <th className="text-left py-4 pl-6 label-mono text-emerald">
                    GEO
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  [
                    "Cible",
                    "Google SERP classique",
                    "Google AI Overviews + featured snippets",
                    "ChatGPT, Perplexity, Claude, Gemini",
                  ],
                  [
                    "Métrique #1",
                    "Position moyenne, trafic organique",
                    "Featured snippets, position zéro",
                    "Citations IA, mentions de marque",
                  ],
                  [
                    "Format gagnant",
                    "Pages longues 1500-2500 mots",
                    "Blocs extractibles 50-80 mots",
                    "Définitions, schema, llms.txt",
                  ],
                  [
                    "Délai résultats",
                    "4 à 12 mois",
                    "4 à 8 semaines",
                    "2 à 4 sem (RAG) / 6-18 mois (training)",
                  ],
                  [
                    "Saturation",
                    "Très élevée — millions de pages",
                    "Modérée — opportunité réelle",
                    "Faible — fenêtre ouverte",
                  ],
                  [
                    "Effort principal",
                    "Backlinks, contenu, technique",
                    "Schema, structure citation-ready",
                    "Citation building + RAG-ready",
                  ],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-white/5">
                    <td className="py-4 pr-6 text-bone">{row[0]}</td>
                    <td className="py-4 px-6">{row[1]}</td>
                    <td className="py-4 px-6">{row[2]}</td>
                    <td className="py-4 pl-6 text-bone">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
        <p className="text-muted text-sm mt-8 max-w-3xl">
          Pour creuser les 7 différences entre AEO et SEO, lis notre article{" "}
          <Link
            href="/blog/aeo-vs-seo-7-differences-critiques-2026"
            className="text-emerald hover:underline"
          >
            AEO vs SEO : 7 différences critiques en 2026
          </Link>
          . Pour comprendre comment apparaître spécifiquement sur ChatGPT, voir le{" "}
          <Link
            href="/blog/comment-apparaitre-chatgpt-quebec-2026"
            className="text-emerald hover:underline"
          >
            guide ChatGPT 2026
          </Link>
          .
        </p>
      </SectionWrapper>

      {/* Quartiers desservis */}
      <SectionWrapper>
        <div className="mb-14 max-w-4xl">
          <div className="label-mono mb-5">Quartiers et villes desservis</div>
          <h2 className="text-display">
            Toute la grande région{" "}
            <span className="text-italic-serif text-emerald">métropolitaine</span>.
          </h2>
          <p className="text-muted leading-relaxed mt-6">
            On travaille avec les PME de Montréal centre, des arrondissements et de
            la grande région métropolitaine. Bureau à Joliette pour les rencontres,
            visioconférence pour le suivi quotidien. Tous les livrables et reporting
            en français québécois.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Île de Montréal</div>
            <h3 className="text-display text-lg mb-3">Centre + arrondissements</h3>
            <p className="text-sm text-muted leading-relaxed">
              Centre-ville, Plateau Mont-Royal, Mile End, Outremont, Westmount,
              Verdun, NDG, Hochelaga, Rosemont, Villeray, Anjou, Saint-Léonard,
              Saint-Laurent, Lachine.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Couronne nord</div>
            <h3 className="text-display text-lg mb-3">Laval + Lanaudière</h3>
            <p className="text-sm text-muted leading-relaxed">
              Laval (tous secteurs), Terrebonne, Mascouche, Repentigny, Joliette
              (bureau central), Saint-Charles-Borromée, L&apos;Assomption,
              Lavaltrie.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Rive-Sud</div>
            <h3 className="text-display text-lg mb-3">Montérégie</h3>
            <p className="text-sm text-muted leading-relaxed">
              Longueuil, Brossard, Saint-Lambert, Boucherville, Saint-Bruno,
              Saint-Hubert, Châteauguay, Saint-Hyacinthe, Saint-Jean-sur-Richelieu.
            </p>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Tarification GEO */}
      <SectionWrapper>
        <div className="mb-10 max-w-4xl">
          <div className="label-mono mb-5">Tarification GEO Montréal</div>
          <h2 className="text-display mb-8">
            Combien coûte une stratégie GEO à{" "}
            <span className="text-italic-serif text-emerald">Montréal</span> ?
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Une stratégie GEO complète à Montréal coûte entre 6 000 $ CAD pour la
            refonte initiale et 2 000 $ à 5 000 $ par mois pour le suivi récurrent.
            L&apos;audit GEO de départ est gratuit — on évalue ta visibilité actuelle
            sur 200+ requêtes ChatGPT, Perplexity, Claude et Gemini, puis on te
            livre un plan d&apos;action en 12-18 pages.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Étape 1</div>
            <h3 className="text-display text-2xl mb-3">Audit GEO</h3>
            <div className="text-display text-4xl text-bone mb-4">Gratuit</div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Scan de 200+ requêtes ciblées dans ChatGPT, Perplexity, Claude et
              Gemini. Carte de visibilité IA + opportunités prioritaires.
            </p>
            <ul className="text-sm text-muted space-y-2">
              <li>— Rapport 12-18 pages</li>
              <li>— Captures écran citations</li>
              <li>— Roadmap 90 jours</li>
              <li>— Aucun engagement</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Étape 2</div>
            <h3 className="text-display text-2xl mb-3">Refonte GEO</h3>
            <div className="text-display text-4xl text-bone mb-4">6 000 $+ CAD</div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Citation building, llms.txt, schema, restructuration citation-ready.
              Mentions stratégiques sur Reddit, médias, annuaires.
            </p>
            <ul className="text-sm text-muted space-y-2">
              <li>— 15-25 pages restructurées</li>
              <li>— Citations stratégiques bâties</li>
              <li>— llms.txt + schema complet</li>
              <li>— Livraison en 6-8 semaines</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <div className="label-mono text-emerald mb-3">Étape 3</div>
            <h3 className="text-display text-2xl mb-3">Suivi récurrent</h3>
            <div className="text-display text-4xl text-bone mb-4">2 000 $/mo+</div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Création de contenu mensuelle, monitoring 4 LLMs, ajustements,
              reporting. De 2 000 $ à 5 000 $ selon le volume et l&apos;industrie.
            </p>
            <ul className="text-sm text-muted space-y-2">
              <li>— 4-8 articles citation-ready/mois</li>
              <li>— Monitoring ChatGPT/Perplexity</li>
              <li>— Reporting mensuel transparent</li>
              <li>— Sans engagement long terme</li>
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Test it */}
      <SectionWrapper>
        <GlassCard>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="label-mono mb-3">Test en live</div>
              <h3 className="text-display text-3xl md:text-4xl mb-4">
                Demande à{" "}
                <span className="text-italic-serif text-emerald">ChatGPT</span>{" "}
                maintenant.
              </h3>
              <p className="text-muted">
                Va dans ChatGPT. Tape « meilleure agence GEO Montréal » ou « top
                agence IA Montréal francophone ». Regarde qui est cité — et qui
                ne l&apos;est pas. C&apos;est exactement le résultat qu&apos;on
                inverse en 6 mois.
              </p>
            </div>
            <div className="font-mono text-sm space-y-2 glass-flat p-5 min-w-[280px]">
              <div className="text-emerald">$ chatgpt</div>
              <div className="text-muted">&gt; agence GEO Montréal</div>
              <div className="text-bone">...</div>
              <div className="text-emerald">MAAD-AI</div>
            </div>
          </div>
        </GlassCard>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="mb-12">
          <div className="label-mono mb-5">Questions fréquentes</div>
          <h2 className="text-display">
            Le GEO à Montréal —{" "}
            <span className="text-italic-serif text-emerald">démystifié</span>.
          </h2>
        </div>
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <BlogCTA topic="le GEO, ChatGPT, Perplexity et la visibilité IA pour les PME montréalaises" />

      <RelatedServices
        items={[
          {
            href: "/services/geo",
            label: "Service GEO",
            number: "v.04",
            desc: "Le détail technique de notre offre GEO.",
          },
          {
            href: "/agence-aeo-quebec",
            label: "Agence AEO Québec",
            number: "AEO",
            desc: "Le pendant Google AI Overviews du GEO.",
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
        title="Demande ton audit GEO gratuit."
        text="On scanne 200+ requêtes ChatGPT, Perplexity, Claude et Gemini où ton entreprise devrait apparaître. Rapport en 7 jours ouvrables. Aucun engagement."
        ctaLabel="Demande ton audit gratuit"
      />
    </>
  );
}
