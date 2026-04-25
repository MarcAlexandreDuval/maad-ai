"use client";

import { useEffect, useRef, useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Typewriter } from "@/components/ui/Typewriter";

const VIDEO_SRC =
  "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

/**
 * Detect if we should skip animations / video loading entirely.
 * - Mobile viewport (< 768px) → text-only, no video
 * - Reduced motion preference → instant content
 * - Slow connection → instant content
 */
function shouldSkipHeavyHero(): boolean {
  if (typeof window === "undefined") return false;
  const isMobile = window.innerWidth < 768;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // navigator.connection is non-standard but supported in Chrome/Safari iOS
  const conn = (navigator as { connection?: { effectiveType?: string } }).connection;
  const slowConnection = conn?.effectiveType
    ? ["slow-2g", "2g", "3g"].includes(conn.effectiveType)
    : false;
  return isMobile || reduced || slowConnection;
}

export function VideoHero() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [titleDone, setTitleDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);
  const [skipHeavy, setSkipHeavy] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Detect skipHeavy after mount (SSR-safe)
  useEffect(() => {
    setSkipHeavy(shouldSkipHeavyHero());
    setHydrated(true);
  }, []);

  // Background video — only attach if NOT skipping heavy
  useEffect(() => {
    if (!hydrated || skipHeavy) return;

    const video = bgVideoRef.current;
    if (!video) return;

    let hls: { destroy: () => void } | null = null;
    let cancelled = false;

    const ua = navigator.userAgent;
    const isSafari = /safari/i.test(ua) && !/chrome|crios|android/i.test(ua);

    if (isSafari && video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
      video.play().catch(() => {});
    } else {
      (async () => {
        const mod = await import("hls.js");
        const Hls = mod.default;
        if (!Hls.isSupported() || cancelled) return;
        const h = new Hls({ enableWorker: true, lowLatencyMode: false });
        h.loadSource(VIDEO_SRC);
        h.attachMedia(video);
        h.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
        if (cancelled) {
          h.destroy();
        } else {
          hls = h;
        }
      })();
    }

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [hydrated, skipHeavy]);

  return (
    <section className="hero-root relative overflow-hidden -mt-24 md:-mt-28 min-h-[100svh] flex items-center">
      {/* Background video — desktop + fast connections only */}
      {hydrated && !skipHeavy && (
        <video
          ref={bgVideoRef}
          className="video-background"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden="true"
        />
      )}
      <div className="video-overlay" />
      <div className="bg-grid opacity-25" />
      <div className="bg-noise" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald/[0.08] blur-[120px] pointer-events-none" />

      <div className="hero-content hero-content--visible container-rail relative z-10 pt-32 md:pt-44 pb-28 md:pb-40">
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl">
          <div className="relative">
            <p
              className="text-display tagline relative"
              aria-label="Tu es trouvé. Tu es sélectionné. Tu es automatisé."
            >
              <Typewriter
                active={true}
                startDelay={skipHeavy ? 0 : 200}
                cps={skipHeavy ? 999 : 30}
                onDone={() => setTitleDone(true)}
                segments={[
                  {
                    text: "Tu es trouvé.",
                    block: true,
                    className: "tagline-line tagline-line-1",
                  },
                  {
                    text: "Tu es sélectionné.",
                    block: true,
                    className: "tagline-line tagline-line-2",
                  },
                  {
                    text: "Tu es automatisé.",
                    block: true,
                    className: "tagline-line tagline-line-3",
                  },
                ]}
              />
            </p>
          </div>

          <p className="hero-subtitle text-lg text-muted min-h-[5rem] md:min-h-[6.5rem]">
            <Typewriter
              active={titleDone}
              startDelay={skipHeavy ? 0 : 300}
              cps={skipHeavy ? 999 : 110}
              onDone={() => setSubtitleDone(true)}
              segments={[
                {
                  text:
                    "On bâtit des agents IA, des automatisations et des chatbots pour les PME du Québec.",
                  block: true,
                },
                {
                  text:
                    "Et on te positionne sur Google, ChatGPT et Perplexity.",
                  block: true,
                },
              ]}
            />
          </p>

          <div
            className={`flex flex-wrap gap-3 hero-fade ${
              subtitleDone ? "hero-fade--in" : ""
            }`}
          >
            <CTAButton href="/contact" variant="primary">
              Parle-nous de ton projet
            </CTAButton>
            <CTAButton href="#services" variant="ghost">
              Voir nos services
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator — pinned to the bottom of the hero section */}
      <div
        className={`hero-scroll ${subtitleDone ? "hero-scroll--visible" : ""}`}
        aria-hidden="true"
      >
        <span className="label-mono text-[0.58rem] opacity-60 tracking-[0.2em]">
          SCROLL
        </span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
