import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABanner } from "@/components/ui/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Secteurs desservis — MAAD-AI partout au Québec",
  description:
    "MAAD-AI dessert toutes les régions du Québec : Lanaudière, Grand Montréal, Capitale-Nationale, Laurentides, Estrie, Outaouais, Saguenay, Mauricie. Pages dédiées par ville pour visibilité IA, automatisations et chatbots.",
  path: "/secteurs",
});

type City = {
  name: string;
  href?: string; // Si défini, page existante ; sinon "à venir"
  highlight?: boolean;
};

type Region = {
  name: string;
  slug: string;
  href?: string; // Page régionale dédiée si existante
  description: string;
  cities: City[];
  highlight?: boolean;
};

const REGIONS: Region[] = [
  {
    name: "Lanaudière",
    slug: "lanaudiere",
    href: "/agence-ia-lanaudiere",
    description:
      "Notre base. Six MRC, 550 000 habitants, des centaines de PME à équiper. De Mascouche à Saint-Michel-des-Saints, on couvre toute la région depuis Joliette — rencontres en personne possibles partout.",
    highlight: true,
    cities: [
      { name: "Joliette", href: "/agence-ia-joliette", highlight: true },
      { name: "Terrebonne", href: "/agence-ia-terrebonne", highlight: true },
      { name: "Mascouche" },
      { name: "Repentigny" },
      { name: "L'Assomption" },
      { name: "Saint-Charles-Borromée" },
      { name: "Notre-Dame-des-Prairies" },
      { name: "Crabtree" },
      { name: "Saint-Paul" },
      { name: "Lavaltrie" },
      { name: "Berthierville" },
      { name: "Rawdon" },
      { name: "Saint-Donat" },
      { name: "Saint-Gabriel-de-Brandon" },
      { name: "Saint-Jean-de-Matha" },
      { name: "Saint-Michel-des-Saints" },
      { name: "Saint-Lin–Laurentides" },
      { name: "Sainte-Julienne" },
    ],
  },
  {
    name: "Grand Montréal",
    slug: "grand-montreal",
    href: "/agence-geo-montreal",
    description:
      "Le marché le plus dense en PME du Québec. Concurrence SEO élevée mais fenêtre AEO/GEO encore ouverte. Notre page Montréal cible spécifiquement les recherches IA et GEO pour le Grand Montréal.",
    cities: [
      { name: "Montréal", href: "/agence-geo-montreal", highlight: true },
      { name: "Laval" },
      { name: "Longueuil" },
      { name: "Brossard" },
      { name: "Saint-Lambert" },
      { name: "Boucherville" },
      { name: "Vaudreuil-Dorion" },
      { name: "Sainte-Julie" },
    ],
  },
  {
    name: "Capitale-Nationale",
    slug: "capitale-nationale",
    href: "/agence-aeo-quebec",
    description:
      "Ville de Québec et région. PME services pros, technologie, tourisme, restauration. Notre page AEO Québec est conçue spécifiquement pour les entreprises de la Capitale-Nationale qui veulent ranker sur les moteurs IA.",
    cities: [
      { name: "Québec", href: "/agence-aeo-quebec", highlight: true },
      { name: "Lévis" },
      { name: "Sainte-Foy" },
      { name: "Beauport" },
      { name: "Charlesbourg" },
      { name: "L'Ancienne-Lorette" },
    ],
  },
  {
    name: "Laurentides",
    slug: "laurentides",
    description:
      "Région touristique et résidentielle en pleine croissance. Saint-Jérôme, Mirabel, Mont-Tremblant, Sainte-Adèle. Pour les commerces, services pros et hébergements qui veulent capter les recherches IA touristiques et locales.",
    cities: [
      { name: "Saint-Jérôme" },
      { name: "Mirabel" },
      { name: "Boisbriand" },
      { name: "Sainte-Adèle" },
      { name: "Mont-Tremblant" },
      { name: "Sainte-Agathe-des-Monts" },
      { name: "Blainville" },
      { name: "Sainte-Thérèse" },
    ],
  },
  {
    name: "Estrie / Cantons-de-l'Est",
    slug: "estrie",
    description:
      "Sherbrooke et sa région. Économie diversifiée — manufacturing, technologie, universités, tourisme. PME francophones qui veulent ranker sur ChatGPT pour les requêtes Estrie et Cantons-de-l'Est.",
    cities: [
      { name: "Sherbrooke" },
      { name: "Magog" },
      { name: "Granby" },
      { name: "Cowansville" },
      { name: "Bromont" },
      { name: "Coaticook" },
    ],
  },
  {
    name: "Outaouais",
    slug: "outaouais",
    description:
      "Gatineau et la région de l'Outaouais. Proche d'Ottawa, économie bilingue, services pros, gouvernement, technologie. PME qui veulent être trouvées par les acheteurs francophones et anglophones via les moteurs IA.",
    cities: [
      { name: "Gatineau" },
      { name: "Aylmer" },
      { name: "Hull" },
      { name: "Buckingham" },
      { name: "Maniwaki" },
    ],
  },
  {
    name: "Saguenay-Lac-Saint-Jean",
    slug: "saguenay",
    description:
      "Saguenay, Alma, Roberval. PME en manufacturing, agroalimentaire, tourisme, services. Marché souvent oublié par les agences IA — la fenêtre est ouverte pour ranker rapidement sur les requêtes locales.",
    cities: [
      { name: "Saguenay" },
      { name: "Chicoutimi" },
      { name: "Jonquière" },
      { name: "Alma" },
      { name: "Roberval" },
      { name: "Dolbeau-Mistassini" },
    ],
  },
  {
    name: "Mauricie",
    slug: "mauricie",
    description:
      "Trois-Rivières, Shawinigan, et la vallée du Saint-Maurice. Manufacturing, services pros, commerces. Marché de taille moyenne avec concurrence SEO modérée — bon ROI pour une stratégie IA bien exécutée.",
    cities: [
      { name: "Trois-Rivières" },
      { name: "Shawinigan" },
      { name: "Cap-de-la-Madeleine" },
      { name: "Bécancour" },
      { name: "Louiseville" },
    ],
  },
  {
    name: "Centre-du-Québec",
    slug: "centre-du-quebec",
    description:
      "Drummondville, Victoriaville, Nicolet. Économie manufacturière forte, agroalimentaire, services pros. PME qui veulent capter les recherches IA des acheteurs B2B et locaux.",
    cities: [
      { name: "Drummondville" },
      { name: "Victoriaville" },
      { name: "Nicolet" },
      { name: "Plessisville" },
    ],
  },
  {
    name: "Montérégie",
    slug: "monteregie",
    description:
      "Rive-Sud de Montréal et région étendue. Saint-Jean-sur-Richelieu, Saint-Hyacinthe, Sorel-Tracy, Salaberry-de-Valleyfield. Très dense en PME, économie diversifiée.",
    cities: [
      { name: "Saint-Jean-sur-Richelieu" },
      { name: "Saint-Hyacinthe" },
      { name: "Salaberry-de-Valleyfield" },
      { name: "Sorel-Tracy" },
      { name: "Chambly" },
      { name: "Beloeil" },
    ],
  },
];

// Schema CollectionPage avec ItemList des régions
const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE.url}/secteurs`,
  name: "Secteurs desservis — MAAD-AI au Québec",
  description:
    "Index géographique des régions et villes du Québec desservies par MAAD-AI — agence IA, AEO, GEO et automatisation pour PME francophones.",
  url: `${SITE.url}/secteurs`,
  inLanguage: "fr-CA",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: REGIONS.length,
    itemListElement: REGIONS.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `MAAD-AI en ${r.name}`,
      url: r.href ? `${SITE.url}${r.href}` : `${SITE.url}/secteurs#${r.slug}`,
    })),
  },
};

export default function SecteursPage() {
  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema,
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Secteurs", path: "/secteurs" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="SECTEURS DESSERVIS"
        breadcrumbs={[
          { name: "Accueil", path: "/" },
          { name: "Secteurs", path: "/secteurs" },
        ]}
        title={
          <>
            Tous nos secteurs{" "}
            <span className="text-italic-serif text-emerald">au Québec</span>.
          </>
        }
        lede={
          <>
            <strong className="text-bone">
              MAAD-AI dessert l&apos;ensemble du Québec — 10 régions, des centaines
              de villes, partout en français québécois.
            </strong>{" "}
            Notre base est à Joliette, en Lanaudière, et on couvre à distance
            tout le territoire. Trouve ta région ci-dessous et accède à notre
            page dédiée — ou contacte-nous directement pour un audit personnalisé.
          </>
        }
      />

      {/* Quick stats bar */}
      <section className="border-y border-white/5 bg-ink-50/30">
        <div className="container-rail py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { v: "10", l: "régions du Québec desservies" },
            { v: "120+", l: "villes et municipalités couvertes" },
            { v: "100 %", l: "en français québécois natif" },
            { v: "À distance", l: "+ rencontres en personne à Joliette" },
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

      {/* Région featured : Lanaudière */}
      <SectionWrapper>
        <div className="mb-10 max-w-4xl">
          <div className="label-mono mb-5">Notre base</div>
          <h2 className="text-display mb-8">
            On opère depuis{" "}
            <span className="text-italic-serif text-emerald">Lanaudière</span>.
          </h2>
          <p className="text-lg text-bone leading-relaxed mb-6">
            <strong>
              Lanaudière n&apos;est pas juste une région qu&apos;on couvre — c&apos;est
              notre base.
            </strong>{" "}
            Marc-Alexandre Duval, fondateur de MAAD-AI, est physiquement implanté
            à Joliette. C&apos;est de là qu&apos;on construit l&apos;agence IA la
            plus complète pour les PME québécoises — visibilité ChatGPT, agents
            intelligents, automatisations et chatbots.
          </p>
          <p className="text-muted leading-relaxed">
            Pour les entreprises de Lanaudière, on offre des rencontres en
            personne partout dans un rayon de 60 km autour de Joliette : Mascouche,
            Repentigny, Terrebonne, L&apos;Assomption, Rawdon, Saint-Donat,
            Saint-Michel-des-Saints, et toutes les municipalités des six MRC.
          </p>
        </div>
        <RegionBlock region={REGIONS[0]} featured />
      </SectionWrapper>

      {/* Autres régions du Québec */}
      <SectionWrapper>
        <div className="mb-14 max-w-4xl">
          <div className="label-mono mb-5">À travers le Québec</div>
          <h2 className="text-display">
            Couverture{" "}
            <span className="text-italic-serif text-emerald">province</span>.
          </h2>
        </div>
        <div className="grid gap-10">
          {REGIONS.slice(1).map((r) => (
            <RegionBlock key={r.slug} region={r} />
          ))}
        </div>
      </SectionWrapper>

      {/* Hors Québec — placeholder pour expansion future */}
      <SectionWrapper>
        <div className="max-w-4xl">
          <div className="label-mono mb-5">Hors Québec</div>
          <h2 className="text-display mb-6">
            Tu es au{" "}
            <span className="text-italic-serif text-emerald">Canada anglais</span>{" "}
            ou en Europe francophone ?
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            MAAD-AI travaille en priorité avec les PME francophones du Québec.
            Pour les entreprises ailleurs au Canada (Ontario, Nouveau-Brunswick,
            Maritimes) ou en Europe francophone (France, Belgique, Suisse,
            Luxembourg), on peut accompagner en anglais ou en français
            international au cas par cas.
          </p>
          <p className="text-muted leading-relaxed">
            Si tu es à Toronto, Ottawa, Calgary, Vancouver ou Paris et que tu
            veux profiter de notre expertise AEO/GEO, écris-nous à{" "}
            <Link
              href="/contact"
              className="text-emerald hover:underline"
            >
              contact@maad-ai.com
            </Link>{" "}
            — on évaluera ensemble.
          </p>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Ta ville n'est pas listée ?"
        text="On couvre tout le Québec à distance — services pros, manufacturers, commerces, e-commerce, cliniques. Demande ton audit IA gratuit, peu importe où tu es."
        ctaLabel="Demande ton audit gratuit"
      />
    </>
  );
}

/**
 * RegionBlock — affiche une région avec sa description + liste de villes.
 * Villes avec href = lien actif vers la page existante.
 * Villes sans href = texte simple (page à venir).
 */
function RegionBlock({
  region,
  featured = false,
}: {
  region: Region;
  featured?: boolean;
}) {
  return (
    <section id={region.slug} className="scroll-mt-32">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
        {/* Header — region name + description + link */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-display text-3xl md:text-4xl">{region.name}</h3>
            {featured && (
              <span className="label-mono text-[0.55rem] text-emerald border border-emerald/40 px-2 py-0.5 rounded-full">
                NOTRE BASE
              </span>
            )}
          </div>
          <p className="text-muted leading-relaxed text-sm mb-5">
            {region.description}
          </p>
          {region.href && (
            <Link
              href={region.href}
              className="label-mono text-emerald text-[0.7rem] tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Page régionale dédiée
              <span aria-hidden>→</span>
            </Link>
          )}
        </div>

        {/* Cities grid */}
        <div>
          <div className="label-mono text-[0.62rem] opacity-50 mb-4">
            Villes & municipalités desservies
          </div>
          <ul
            className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2.5 text-sm"
            role="list"
          >
            {region.cities.map((city) => (
              <li key={city.name}>
                {city.href ? (
                  <Link
                    href={city.href}
                    className={`inline-flex items-center gap-2 transition-colors ${
                      city.highlight
                        ? "text-emerald hover:text-bone"
                        : "text-bone hover:text-emerald"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`w-1 h-1 rounded-full ${
                        city.highlight ? "bg-emerald" : "bg-emerald/40"
                      }`}
                    />
                    {city.name}
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-muted opacity-70">
                    <span
                      aria-hidden
                      className="w-1 h-1 rounded-full bg-bone/20"
                    />
                    {city.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
