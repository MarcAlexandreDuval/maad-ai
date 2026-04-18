"use client";

import { useRef, useState, useCallback, type KeyboardEvent } from "react";

type Step = { title: string; desc: string };

const STEPS: Record<"ia" | "viz", Step[]> = {
  ia: [
    {
      title: "Diagnostic opérationnel",
      desc: "On map tes processus actuels : qu'est-ce qui est manuel, qu'est-ce qui prend du temps, qu'est-ce qui peut être automatisé. On identifie les quick wins.",
    },
    {
      title: "Architecture IA",
      desc: "On design la solution : quels agents, quels workflows, quelles intégrations. Tu sais exactement ce qui va être construit avant qu'on touche une ligne de code.",
    },
    {
      title: "Build et déploiement",
      desc: "On construit tes agents IA, tes automatisations et tes chatbots. On teste, on ajuste, on déploie. Tu vois les résultats en temps réel.",
    },
    {
      title: "Optimisation continue",
      desc: "L'IA apprend et s'améliore. On monitore les performances, on ajuste les workflows, on ajoute de nouvelles automatisations quand t'es prêt à scaler.",
    },
  ],
  viz: [
    {
      title: "Audit de visibilité",
      desc: "On scan ta présence complète : SEO technique, contenu, Google Business, featured snippets, et ce que ChatGPT et Perplexity disent de toi (spoiler : probablement rien).",
    },
    {
      title: "Stratégie SEO + AEO + GEO",
      desc: "On bâtit ton plan d'attaque : quels keywords, quelles pages, quel contenu créer pour ranker sur Google ET être recommandé par les IA.",
    },
    {
      title: "Implémentation",
      desc: "On optimise ton site, on structure ton contenu pour les featured snippets, on déploie le Schema, le llms.txt, et tout ce qui fait que les moteurs te comprennent.",
    },
    {
      title: "Mesure et itération",
      desc: "Les SERPs et les IA évoluent vite. On track tes positions Google, tes citations IA, et on ajuste chaque mois. Ce qui marche, on double. Ce qui marche pas, on coupe.",
    },
  ],
};

type Mode = "ia" | "viz";

const TABS: { id: Mode; label: string; shortLabel: string }[] = [
  { id: "ia", label: "Intelligence Artificielle", shortLabel: "IA" },
  { id: "viz", label: "Visibilité Web", shortLabel: "Visibilité" },
];

export function ProcessTabs() {
  const [mode, setMode] = useState<Mode>("ia");
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

  const steps = STEPS[mode];

  return (
    <div className="process-tabs">
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
            aria-controls={`steps-${t.id}`}
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

      {/* Panel */}
      <div
        role="tabpanel"
        id={`steps-${mode}`}
        aria-labelledby={`tab-${mode}`}
        className="process-grid"
        key={mode /* re-mount triggers stagger fade-in */}
      >
        {steps.map((s, i) => (
          <article
            key={`${mode}-${i}`}
            className="process-card"
            style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}
          >
            <div className="process-num">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="process-title">{s.title}</h3>
            <p className="process-desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
