"use client";
import { motion } from "framer-motion";
import React from "react";

const timeline = [
  {
    year: "2020",
    label: "Traditional SEO Era",
    status: "past" as const,
    desc: "Ten blue links. Brands competed for page-one rankings. Traffic came from clicks. Google was the only gatekeeper.",
    metric: "Keyword rankings & CTR",
    detail: "If you were in the top 3, you existed.",
  },
  {
    year: "2025",
    label: "AI Search Dominance",
    status: "now" as const,
    desc: "ChatGPT, Perplexity, and Google AI Mode answer questions directly. The brand cited in the answer wins — no click required.",
    metric: "AI citations & brand mentions",
    detail: "If AI doesn't know you, your customers won't either.",
  },
  {
    year: "2027",
    label: "AI-First Web",
    status: "future" as const,
    desc: "AI agents book appointments, compare services, and make purchases autonomously. Brands absent from their context simply don't exist.",
    metric: "Agent trust score & data availability",
    detail: "The window to build authority is open now.",
  },
];

export default function WhyNow() {
  return (
    <section
      id="why-now"
      className="py-28 md:py-36 px-6 md:px-10 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-label mb-6 inline-flex">Why now</span>
          <h2 className="heading-xl">
            The window is open.
            <br />
            <span className="text-[#34D399]">It won&apos;t stay that way.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Animated gradient line */}
          <div className="timeline-line absolute left-[11px] top-2 bottom-2 w-px hidden md:block" />

          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                className="relative flex gap-8 md:gap-14 pb-8 last:pb-0"
              >
                {/* Node dot */}
                <div className="flex-shrink-0 relative z-10 pt-8">
                  <div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor:
                        item.status === "now"
                          ? "#34D399"
                          : item.status === "past"
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.08)",
                      background:
                        item.status === "now" ? "rgba(52,211,153,0.1)" : "#080A0C",
                      boxShadow:
                        item.status === "now"
                          ? "0 0 0 4px rgba(52,211,153,0.08), 0 0 16px rgba(52,211,153,0.3)"
                          : "none",
                    } as React.CSSProperties}
                  >
                    {item.status === "now" && (
                      <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                    )}
                    {item.status === "past" && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`relative flex-1 min-w-0 rounded-2xl p-7 mb-6 ${
                    item.status === "past" ? "opacity-40" : ""
                  }`}
                  style={
                    item.status === "now"
                      ? ({
                          background: "rgba(52,211,153,0.03)",
                          border: "1px solid rgba(52,211,153,0.2)",
                          boxShadow:
                            "0 0 50px rgba(52,211,153,0.07), inset 0 1px 0 rgba(52,211,153,0.07)",
                        } as React.CSSProperties)
                      : ({
                          background: "rgba(255,255,255,0.015)",
                          border: "1px solid rgba(255,255,255,0.05)",
                        } as React.CSSProperties)
                  }
                >
                  {/* Top shimmer for "now" */}
                  {item.status === "now" && (
                    <div
                      className="absolute top-0 left-8 right-8 h-px rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)",
                      }}
                    />
                  )}

                  {/* Year + badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-[#34D399]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(32px, 4.5vw, 52px)",
                        fontWeight: 800,
                        letterSpacing: "-0.045em",
                        lineHeight: 1,
                      } as React.CSSProperties}
                    >
                      {item.year}
                    </span>

                    {item.status === "now" && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                        style={{
                          color: "#34D399",
                          background: "rgba(52,211,153,0.1)",
                          border: "1px solid rgba(52,211,153,0.2)",
                        }}
                      >
                        We are here
                      </span>
                    )}
                    {item.status === "future" && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                        style={{
                          color: "#6B7A8D",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        Coming fast
                      </span>
                    )}
                  </div>

                  <h3 className="heading-sm mb-3">{item.label}</h3>
                  <p className="text-[14px] text-[#6B7A8D] leading-relaxed max-w-2xl mb-5">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-[12px] text-[#6B7A8D]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#34D399]">↳</span>
                      <span>
                        Metric:{" "}
                        <span className="text-[#9AAABB] font-medium">
                          {item.metric}
                        </span>
                      </span>
                    </div>
                    <span className="text-[#9AAABB]/70 italic">{item.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
