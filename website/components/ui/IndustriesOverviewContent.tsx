"use client";

import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/site";

const STATS = [
  { value: "6+", label: "industries spécialisées au Québec" },
  { value: "100 %", label: "des stratégies adaptées au secteur" },
  { value: "IA + SEO", label: "combinés pour chaque verticale" },
  { value: "24/7", label: "systèmes qui travaillent sans arrêt" },
];

const WHY = [
  {
    title: "Un SaaS ne vend pas comme un courtier",
    desc: "Le cycle de vente, les canaux d'acquisition, le parcours client — tout est différent. On ne plaque pas la même recette sur deux industries différentes.",
  },
  {
    title: "Les IA ne recommandent pas tout le monde",
    desc: "ChatGPT, Perplexity et Google AI Overviews ont des biais par industrie. On sait lesquels cibler et comment se positionner dans chaque verticale.",
  },
  {
    title: "Le ROI se mesure différemment",
    desc: "En e-commerce c'est le taux de conversion, en B2B c'est le coût par lead, en immobilier c'est le temps de réponse. On parle ta langue.",
  },
];

const APPROACH = [
  {
    title: "Audit sectoriel",
    desc: "On commence par comprendre ton marché, tes concurrents et tes enjeux spécifiques. Pas de template générique — un diagnostic sur mesure.",
  },
  {
    title: "Stack adapté",
    desc: "On sélectionne les bons outils selon ton industrie : agents IA, chatbots, SEO, AEO, GEO, automatisation. Chaque secteur a sa combinaison gagnante.",
  },
  {
    title: "Déploiement rapide",
    desc: "On livre en semaines, pas en mois. Chaque composante est testée dans le contexte réel de ton industrie avant d'aller en production.",
  },
  {
    title: "Itération continue",
    desc: "On mesure les résultats avec les KPI qui comptent dans ton secteur et on ajuste. L'optimisation ne s'arrête jamais.",
  },
];

export function IndustriesOverviewContent() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
        title={
          <>
            Chaque secteur a{" "}
            <span className="text-italic-serif text-emerald">ses blocages</span>.
          </>
        }
        lede={
          <>
            On adapte nos services à ton industrie : les priorités d&apos;un SaaS ne sont
            pas celles d&apos;un e-commerce, et un B2B n&apos;a pas les mêmes enjeux qu&apos;une
            startup. Six terrains de jeu, six approches.
          </>
        }
      />

      {/* ============ STATS ============ */}
      <section className="container-rail py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} variant="fade-up" delay={i * 120}>
              <div className="glass-flat p-6 md:p-8 text-center">
                <div className="text-display text-3xl md:text-4xl text-emerald mb-2">
                  {s.value}
                </div>
                <div className="text-muted text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ INDUSTRIES GRID ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Nos verticales</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">
            Une approche{" "}
            <span className="text-italic-serif text-emerald">sur mesure</span> pour
            chaque industrie.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.href} variant="fade-up" delay={i * 120}>
              <GlassCard href={ind.href} className="h-full">
                <div className="flex flex-col gap-4 h-full">
                  <div className="label-mono text-emerald">0{i + 1}</div>
                  <h3 className="text-display text-3xl md:text-4xl">{ind.label}</h3>
                  <p className="text-muted">{ind.desc}</p>
                  <div className="mt-auto pt-6 label-mono flex items-center gap-2 text-emerald">
                    Explorer →
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ POURQUOI ADAPTER ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Pourquoi c&apos;est important</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-6">
            Une stratégie{" "}
            <span className="text-italic-serif text-emerald">générique</span> donne
            des résultats génériques.
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={180}>
          <p className="text-muted max-w-2xl mb-14">
            Les agences qui appliquent la même recette à tous leurs clients
            gaspillent ton budget. On a construit des playbooks spécifiques à
            chaque industrie parce que les enjeux, les canaux et les KPI sont
            fondamentalement différents.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {WHY.map((w, i) => (
            <Reveal key={w.title} variant="fade-up" delay={i * 150}>
              <div className="glass p-7 md:p-8 h-full">
                <h3 className="text-display text-xl mb-3">{w.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ APPROCHE ============ */}
      <SectionWrapper>
        <Reveal variant="fade-up">
          <div className="label-mono mb-5">Notre approche</div>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <h2 className="text-display max-w-3xl mb-14">
            Toujours le même{" "}
            <span className="text-italic-serif text-emerald">processus</span>.
            Jamais la même solution.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH.map((s, i) => (
            <Reveal key={s.title} variant="fade-up" delay={i * 150}>
              <div className="glass-flat p-7 md:p-8 h-full">
                <div className="text-display text-5xl text-emerald/20 mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-display text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <Reveal variant="fade-up">
        <CTABanner
          title="Ton industrie n'est pas listée ?"
          text="On travaille aussi avec du manufacturier, des services pro, des OBNL. Écris-nous."
        />
      </Reveal>
    </>
  );
}
