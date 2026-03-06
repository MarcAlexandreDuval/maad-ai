"use client";
import { motion } from "framer-motion";
import React from "react";

const stats = [
  { value: "70%",  label: "of searches now trigger AI-generated answers",     note: "up from 12% in 2022" },
  { value: "3.2B", label: "AI search queries processed daily worldwide",       note: "and growing fast" },
  { value: "47%",  label: "of users never click a single search result",       note: "they take the AI answer" },
  { value: "2×",   label: "more brand citations vs traditional SEO",           note: "when AEO is applied" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] overflow-hidden">

      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(52,211,153,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 relative">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={[
              "flex flex-col gap-2 py-10 px-6 md:px-8",
              i % 2 !== 0 ? "border-l border-white/[0.06]" : "",
              i >= 2    ? "border-t border-white/[0.06] lg:border-t-0" : "",
              i > 0     ? "lg:border-l lg:border-white/[0.06]" : "",
              i === 1   ? "border-l border-white/[0.06]" : "",
            ].filter(Boolean).join(" ")}
          >
            {/* Number */}
            <span
              style={{
                fontFamily:      "var(--font-display)",
                fontSize:        "clamp(44px, 5.5vw, 68px)",
                fontWeight:      800,
                letterSpacing:   "-0.045em",
                lineHeight:      1,
                background:      "linear-gradient(135deg, #34D399 0%, #6EE7B7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip: "text",
              } as React.CSSProperties}
            >
              {stat.value}
            </span>

            {/* Label */}
            <span className="text-[13px] text-[#6B7A8D] leading-snug max-w-[160px]">
              {stat.label}
            </span>

            {/* Note */}
            <span className="text-[11px] text-[#6B7A8D]/50 font-medium tracking-wide">
              {stat.note}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
