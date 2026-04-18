"use client";

import { useCallback, useRef, useState, type KeyboardEvent } from "react";

type Step = {
  title: string;
  desc: string;
  deliverables: string[];
};

const STEPS: Record<"ia" | "viz", Step[]> = {
  ia: [
    {
      title: "Diagnostic opérationnel",
      desc: "On map tes processus actuels : qu'est-ce qui est manuel, qu'est-ce qui prend du temps, qu'est-ce qui peut être automatisé. On identifie les quick wins.",
      deliverables: [
        "Cartographie de tes processus actuels",
        "Identification des tâches automatisables",
        "Liste des quick wins classés par impact",
        "Rapport de diagnostic complet",
      ],
    },
    {
      title: "Architecture IA",
      desc: "On design la solution : quels agents, quels workflows, quelles intégrations. Tu sais exactement ce qui va être construit avant qu'on touche une ligne de code.",
      deliverables: [
        "Choix des modèles IA adaptés",
        "Architecture des workflows n8n",
        "Plan d'intégration avec tes outils existants",
        "Estimation des délais par phase",
      ],
    },
    {
      title: "Build et déploiement",
      desc: "On construit tes agents IA, tes automatisations et tes chatbots. On teste, on ajuste, on déploie. Tu vois les résultats en temps réel.",
      deliverables: [
        "Agents IA configurés et testés",
        "Workflows automatisés et connectés",
        "Chatbot déployé sur tes canaux",
        "Formation de ton équipe",
      ],
    },
    {
      title: "Optimisation continue",
      desc: "L'IA apprend et s'améliore. On monitore les performances, on ajuste les workflows, on ajoute de nouvelles automatisations quand t'es prêt à scaler.",
      deliverables: [
        "Dashboard de performance en temps réel",
        "Rapports mensuels d'optimisation",
        "Ajustements et nouveaux workflows",
        "Support technique continu",
      ],
    },
  ],
  viz: [
    {
      title: "Audit de visibilité",
      desc: "On scan ta présence complète : SEO technique, contenu, Google Business, featured snippets, et ce que ChatGPT et Perplexity disent de toi — spoiler : probablement rien.",
      deliverables: [
        "Audit SEO technique complet",
        "Analyse de tes positions Google actuelles",
        "Vérification de tes citations IA (ChatGPT, Perplexity)",
        "Analyse compétitive de ton marché",
      ],
    },
    {
      title: "Stratégie SEO + AEO + GEO",
      desc: "On bâtit ton plan d'attaque : quels keywords, quelles pages, quel contenu créer pour ranker sur Google ET être recommandé par les IA.",
      deliverables: [
        "Keyword map complète par page",
        "Architecture de site optimisée",
        "Stratégie de contenu AEO et GEO",
        "Plan de maillage interne",
      ],
    },
    {
      title: "Implémentation",
      desc: "On optimise ton site, on structure ton contenu pour les featured snippets, on déploie le Schema JSON-LD, le llms.txt, et tout ce qui fait que les moteurs te comprennent.",
      deliverables: [
        "Optimisation on-page de chaque page",
        "Schema JSON-LD déployé",
        "Fichier llms.txt configuré",
        "Contenu AEO-ready structuré",
      ],
    },
    {
      title: "Mesure et itération",
      desc: "Les SERPs et les IA évoluent vite. On track tes positions Google, tes citations IA, et on ajuste chaque mois. Ce qui marche, on double. Ce qui marche pas, on coupe.",
      deliverables: [
        "Suivi des positions Google hebdomadaire",
        "Monitoring des citations ChatGPT et Perplexity",
        "Rapports mensuels avec recommandations",
        "Ajustement continu du contenu et du Schema",
      ],
    },
  ],
};

type Mode = "ia" | "viz";

const TABS: { id: Mode; label: string; shortLabel: string }[] = [
  { id: "ia", label: "Intelligence Artificielle", shortLabel: "IA" },
  { id: "viz", label: "Visibilité Web", shortLabel: "Visibilité" },
];

export function ProcessTimeline() {
  const [mode, setMode] = useState<Mode>("ia");
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Record<Mode, HTMLButtonElement | null>>({
    ia: null,
    viz: null,
  });

  const onTabKey = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const next: Mode = mode === "ia" ? "viz" : "ia";
      setMode(next);
      tabRefs.current[next]?.focus();
    },
    [mode],
  );

  return (
    <div className="proc-timeline">
      {/* Toggle */}
      <div
        role="tablist"
        aria-label="Choisir le parcours"
        className={`process-toggle process-toggle--${mode}`}
      >
        <span className="process-toggle__thumb" aria-hidden />
        {TABS.map((t) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[t.id] = el;
            }}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={mode === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={mode === t.id ? 0 : -1}
            className={`process-toggle__btn ${mode === t.id ? "is-active" : ""}`}
            onClick={() => setMode(t.id)}
            onKeyDown={onTabKey}
          >
            <span className="process-toggle__btn-full">{t.label}</span>
            <span className="process-toggle__btn-short">{t.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Horizontal timeline */}
      <div className="proc-track" aria-hidden>
        <div className="proc-track__line" />
        <div
          className="proc-track__progress"
          style={{ width: `${(activeIndex / 3) * 100}%` }}
        />
        <div className="proc-track__dots">
          {[0, 1, 2, 3].map((i) => {
            const state =
              i < activeIndex
                ? "completed"
                : i === activeIndex
                  ? "active"
                  : "upcoming";
            return (
              <button
                key={i}
                type="button"
                className={`proc-dot proc-dot--${state}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Étape ${i + 1}`}
              >
                <span className="proc-dot__core" />
                {state === "active" && (
                  <span className="proc-dot__pulse" aria-hidden />
                )}
                <span className="proc-dot__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Both panels stay in DOM for SEO; only the active one is visible */}
      <div className="proc-panels">
        {(["ia", "viz"] as const).map((m) => (
          <div
            key={m}
            id={`panel-${m}`}
            role="tabpanel"
            aria-labelledby={`tab-${m}`}
            className={`proc-panel ${mode === m ? "proc-panel--active" : "proc-panel--inactive"}`}
          >
            <ol className="proc-steps">
              {STEPS[m].map((step, i) => {
                const expanded = i === activeIndex;
                return (
                  <li
                    key={i}
                    className={`proc-step ${expanded ? "proc-step--expanded" : "proc-step--compressed"} ${i < activeIndex ? "is-completed" : ""}`}
                  >
                    <button
                      type="button"
                      className="proc-step__head"
                      onClick={() => setActiveIndex(i)}
                      aria-expanded={expanded}
                    >
                      <span className="proc-step__num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="proc-step__text">
                        <h3 className="proc-step__title">{step.title}</h3>
                        {!expanded && (
                          <span className="proc-step__preview">
                            {step.desc.split(".")[0]}.
                          </span>
                        )}
                      </span>
                      <span className="proc-step__chev" aria-hidden>
                        →
                      </span>
                    </button>

                    <div className="proc-step__body">
                      <p className="proc-step__desc">{step.desc}</p>
                      <hr className="proc-step__sep" />
                      <div className="proc-step__deliv-label">
                        Ce que tu reçois
                      </div>
                      <ul className="proc-step__deliv">
                        {step.deliverables.map((d, j) => (
                          <li key={j}>
                            <span className="proc-step__check" aria-hidden>
                              ✓
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
