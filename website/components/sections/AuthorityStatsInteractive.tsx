"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * AuthorityStatsInteractive — switcher interactif pour les 3 stats sourcées
 * de la section "Pourquoi ça rapporte".
 *
 * - Un seul chiffre énorme à la fois (vs grid statique qui ressemble trop
 *   au bloc "Pourquoi maintenant" juste au-dessus).
 * - Tabs cliquables + auto-rotation 5s.
 * - Auto-rotation s'arrête au hover ET définitivement quand l'utilisateur
 *   clique un tab (il prend le contrôle).
 * - Animation morphing : blur + scale + opacity sur swap.
 */

const STATS = [
  {
    value: 94,
    label:
      "des décideurs B2B utilisent un LLM pendant leur processus d'achat",
    source: "Forrester · State of Business Buying 2026",
  },
  {
    value: 85,
    label:
      "des acheteurs perçoivent un fournisseur comme plus crédible quand une IA le recommande",
    source: "G2 · Software Buyer Behavior 2026",
  },
  {
    value: 90,
    label:
      "des achats B2B passeront par des agents IA d'ici 2028 — 15T$ de spend",
    source: "Gartner · B2B AI Predictions",
  },
];

/**
 * DonutChart — radial progress chart with animated draw-on.
 * Animation : strokeDashoffset from full circumference to target.
 */
function DonutChart({ value }: { value: number }) {
  const size = 280; // SVG viewport (responsive via CSS)
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (value / 100) * circumference;

  return (
    <div
      className="relative"
      style={{
        width: "min(72vw, 320px)",
        aspectRatio: "1 / 1",
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full -rotate-90"
        aria-hidden
      >
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(244, 242, 236, 0.08)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress ring — animated */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#00c896"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: targetOffset }}
          transition={{
            duration: 1.4,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.1,
          }}
        />
      </svg>

      {/* Percentage at center — small editorial accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="text-italic-serif text-emerald"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            lineHeight: 1,
          }}
          aria-label={`${value} pour cent`}
        >
          {value}
          <span
            style={{
              fontSize: "0.55em",
              marginLeft: "0.05em",
              verticalAlign: "0.1em",
            }}
          >
            %
          </span>
        </motion.span>
      </div>
    </div>
  );
}

export function AuthorityStatsInteractive() {
  const [active, setActive] = useState(0);
  const [userControlled, setUserControlled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Auto-rotation : pause si hover OU si user a déjà cliqué un tab
  useEffect(() => {
    if (userControlled || hovered) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % STATS.length);
    }, 5000);
    return () => clearInterval(id);
  }, [userControlled, hovered]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setUserControlled(true);
  };

  const stat = STATS[active];

  return (
    <div
      className="my-16 md:my-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Big animated stat — un seul à la fois */}
      <div className="relative min-h-[460px] md:min-h-[540px] flex items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1], // cubic-bezier strong ease-out
            }}
            className="flex flex-col items-center gap-8 max-w-2xl"
          >
            <DonutChart value={stat.value} />
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl text-balance">
              {stat.label}
            </p>
            <span className="label-mono text-[0.65rem] opacity-50 tracking-wider">
              {stat.source}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tabs */}
      <div
        className="flex justify-center gap-2 md:gap-3 mt-12 flex-wrap px-4"
        role="tablist"
        aria-label="Sélectionner une statistique"
      >
        {STATS.map((s, i) => (
          <button
            key={s.value}
            onClick={() => handleTabClick(i)}
            role="tab"
            aria-selected={active === i}
            aria-label={`Statistique ${s.value}% — ${s.label}`}
            className={`
              px-5 py-2.5 rounded-full label-mono text-[0.7rem] tracking-wider
              transition-all duration-300 ease-out
              border
              ${
                active === i
                  ? "bg-emerald/10 text-emerald border-emerald/40 scale-105"
                  : "text-muted border-white/10 hover:border-white/30 hover:text-white hover:scale-[1.02]"
              }
            `}
            style={{
              transition:
                "all 280ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            {s.value}%
          </button>
        ))}
      </div>

      {/* Progress indicator — montre la stat active + progression auto-rotation */}
      <div className="flex justify-center mt-5">
        <div className="flex gap-1.5 items-center">
          {STATS.map((_, i) => (
            <span
              key={i}
              className={`h-[2px] rounded-full transition-all duration-500 ease-out ${
                active === i
                  ? "w-10 bg-emerald"
                  : "w-4 bg-white/15"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
