"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

const timeline = [
  {
    year: "2020",
    label: "Traditional SEO Era",
    status: "past" as const,
    desc: "Ten blue links. Brands competed for page-one rankings. Traffic came from clicks. Google was the only gatekeeper that mattered.",
    metric: "Keyword rankings & click-through rate",
    detail: "If you were in the top 3, you existed.",
  },
  {
    year: "2025",
    label: "AI Search Dominance",
    status: "now" as const,
    desc: "ChatGPT, Perplexity, and Google AI Mode answer questions directly. The brand cited in the answer is the brand that wins — no click required.",
    metric: "AI citations & brand mentions",
    detail: "If AI doesn't know you, your customers won't either.",
  },
  {
    year: "2027",
    label: "AI-First Web",
    status: "future" as const,
    desc: "AI agents book appointments, compare services, and make purchases autonomously. Brands not in their training context simply don't exist.",
    metric: "Agent trust score & data availability",
    detail: "The window to build authority is open now.",
  },
];

export default function WhyNow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-now"
      className="py-28 md:py-36 px-6 md:px-10 border-t border-white/[0.07]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B7A8D] mb-6">
            Why now
          </div>
          <h2
            className="font-extrabold text-white leading-none"
            style={
              {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "-0.03em",
              } as React.CSSProperties
            }
          >
            The window is open.
            <br />
            <span className="text-[#34D399]">
              It won&apos;t stay that way.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated gradient vertical line */}
          <div
            className="absolute left-[11px] top-3 bottom-3 w-px hidden md:block timeline-line"
          />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative flex gap-8 md:gap-14 pb-16 last:pb-0"
              >
                {/* Dot */}
                <div className="flex-shrink-0 pt-1 relative z-10">
                  <div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={
                      {
                        borderColor:
                          item.status === "now"
                            ? "#34D399"
                            : item.status === "past"
                            ? "rgba(255,255,255,0.15)"
                            : "rgba(255,255,255,0.08)",
                        background:
                          item.status === "now"
                            ? "rgba(52,211,153,0.12)"
                            : "#080A0C",
                        boxShadow:
                          item.status === "now"
                            ? "0 0 12px rgba(52,211,153,0.4)"
                            : "none",
                      } as React.CSSProperties
                    }
                  >
                    {item.status === "now" && (
                      <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                    )}
                    {item.status === "past" && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 min-w-0 rounded-2xl p-7 transition-all duration-300 ${
                    item.status === "past" ? "opacity-45" : ""
                  }`}
                  style={
                    item.status === "now"
                      ? ({
                          background: "rgba(52,211,153,0.03)",
                          border: "1px solid rgba(52,211,153,0.22)",
                          boxShadow:
                            "0 0 40px rgba(52,211,153,0.07), inset 0 1px 0 rgba(52,211,153,0.08)",
                        } as React.CSSProperties)
                      : ({
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.05)",
                        } as React.CSSProperties)
                  }
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-[#34D399]"
                      style={
                        {
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(28px, 4vw, 44px)",
                          fontWeight: 800,
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                        } as React.CSSProperties
                      }
                    >
                      {item.year}
                    </span>
                    {item.status === "now" && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/20 px-3 py-1 rounded-full">
                        We are here
                      </span>
                    )}
                    {item.status === "future" && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#6B7A8D] bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full">
                        Coming fast
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-xl font-semibold text-white mb-3"
                    style={
                      {
                        fontFamily: "var(--font-display)",
                        letterSpacing: "-0.02em",
                      } as React.CSSProperties
                    }
                  >
                    {item.label}
                  </h3>
                  <p className="text-[#6B7A8D] text-base leading-relaxed max-w-2xl mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-xs text-[#6B7A8D]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#34D399]">↳</span>
                      <span>
                        Metric:{" "}
                        <span className="text-[#9AAABB] font-medium">
                          {item.metric}
                        </span>
                      </span>
                    </div>
                    <div className="text-[#9AAABB] italic">{item.detail}</div>
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
