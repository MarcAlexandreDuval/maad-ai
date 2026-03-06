"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const stats = [
  { value: "70%", label: "of searches now trigger AI-generated answers" },
  { value: "3.2B", label: "AI search queries processed daily worldwide" },
  { value: "47%", label: "of users never click a single search result" },
  { value: "2×", label: "more brand citations vs traditional SEO" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-y border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={[
              "py-12 px-6 md:px-10 flex flex-col gap-3",
              i % 2 !== 0 ? "border-l border-white/[0.07]" : "",
              i >= 2 ? "border-t border-white/[0.07] lg:border-t-0" : "",
              i !== 0 && i !== 2 ? "lg:border-l lg:border-white/[0.07]" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div
              style={
                {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 5vw, 72px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  background:
                    "linear-gradient(135deg, #34D399 0%, #6EE7B7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } as React.CSSProperties
              }
            >
              {stat.value}
            </div>
            <div className="text-sm text-[#6B7A8D] leading-snug max-w-[160px]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
