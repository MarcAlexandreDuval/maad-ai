"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import React from "react";

const faqs = [
  {
    q: "What exactly is AEO and GEO?",
    a: "Answer Engine Optimization (AEO) optimizes your content to be directly cited by AI assistants — ChatGPT, Perplexity, Google AI Overviews. Generative Engine Optimization (GEO) builds your brand's authority so generative AI models recommend you when synthesizing answers for buyer queries. Together, they ensure you're the answer AI gives, not just a link in a list.",
  },
  {
    q: "How long before I start seeing results?",
    a: "AI citation visibility typically begins within 30–60 days for brands with existing online presence. Full authority across major AI platforms — ChatGPT, Perplexity, Google AI, Copilot — usually consolidates over 3–6 months. Unlike traditional SEO, AI citations compound quickly: once an AI model trusts your source, it cites you broadly across related queries.",
  },
  {
    q: "How is this different from traditional SEO?",
    a: "Traditional SEO optimizes for ranking in a list of links that users click. AEO/GEO optimizes for being the answer AI surfaces before users even see a list. The goal isn't a position — it's being cited as the authoritative source. This requires different content architecture, entity building, and structured data strategies that most SEO agencies have never touched.",
  },
  {
    q: "Which AI platforms will my brand appear on?",
    a: "We optimize for all major AI discovery surfaces: ChatGPT (including Browse and GPT-4o), Google AI Overviews, Perplexity, Microsoft Copilot, and Claude. Each platform uses different trust signals and training data — we build a unified content authority strategy that covers all of them simultaneously.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work primarily with service businesses in Quebec and across Canada: legal, medical, real estate, financial services, agencies, and local businesses. If your customers ask AI questions before buying your service, we can position you as the answer. We work in both English and French.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-28 md:py-36 px-6 md:px-10 border-t border-white/[0.07]"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B7A8D] mb-6">
            FAQ
          </div>
          <h2
            className="font-extrabold text-white"
            style={
              {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 56px)",
                letterSpacing: "-0.03em",
              } as React.CSSProperties
            }
          >
            Common questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.06]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between py-6 text-left group"
              >
                <span
                  className={`text-sm md:text-base leading-snug pr-6 transition-colors duration-150 ${
                    open === i
                      ? "text-white font-medium"
                      : "text-[#9AAABB] font-normal group-hover:text-white"
                  }`}
                  style={
                    {
                      fontFamily: "var(--font-body)",
                    } as React.CSSProperties
                  }
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/[0.1] flex items-center justify-center text-[#34D399] text-base leading-none mt-0.5 transition-all duration-200 ${
                    open === i
                      ? "rotate-45 border-[#34D399]/30 bg-[#34D399]/10"
                      : "rotate-0 group-hover:border-white/20"
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-[#6B7A8D] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
