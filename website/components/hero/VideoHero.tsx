"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Typewriter } from "@/components/ui/Typewriter";

type Phase = "loading" | "intro" | "revealing" | "visible";

const VIDEO_SRC =
  "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";
const INTRO_DURATION_MS = 3500;
const REVEAL_DURATION_MS = 1400;
const TEXT_START_DELAY_MS = 1800; // must match Typewriter h1 startDelay
const SESSION_KEY = "maad_intro_seen";

export function VideoHero() {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("loading");
  const [titleDone, setTitleDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);

  // Phase state machine
  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem(SESSION_KEY) === "1";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Nav is hidden from the very first paint on every path
    document.body.classList.add("nav-hidden");

    if (reduced) {
      setPhase("visible");
      document.body.classList.remove("nav-hidden");
      return () => {
        document.body.classList.remove("nav-hidden");
      };
    }

    if (seen) {
      // Skip intro — jump straight to content, but still sync nav with text
      setPhase("visible");
      const tNavSeen = window.setTimeout(() => {
        document.body.classList.remove("nav-hidden");
      }, TEXT_START_DELAY_MS);
      return () => {
        window.clearTimeout(tNavSeen);
        document.body.classList.remove("nav-hidden");
      };
    }

    setPhase("intro");
    document.body.classList.add("intro-playing");

    const t1 = window.setTimeout(() => {
      setPhase("revealing");
      document.body.classList.remove("intro-playing");
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* noop */
      }
    }, INTRO_DURATION_MS);

    const t2 = window.setTimeout(() => {
      setPhase("visible");
    }, INTRO_DURATION_MS + REVEAL_DURATION_MS);

    // Nav fades in at the exact moment the h1 starts typing
    const tNav = window.setTimeout(
      () => {
        document.body.classList.remove("nav-hidden");
      },
      INTRO_DURATION_MS + TEXT_START_DELAY_MS,
    );

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(tNav);
      document.body.classList.remove("intro-playing");
      document.body.classList.remove("nav-hidden");
    };
  }, []);

  // HLS attach (both videos)
  useEffect(() => {
    let hls1: { destroy: () => void } | null = null;
    let hls2: { destroy: () => void } | null = null;
    let cancelled = false;

    async function setupHls(
      video: HTMLVideoElement | null,
    ): Promise<{ destroy: () => void } | null> {
      if (!video) return null;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = VIDEO_SRC;
        video.play().catch(() => {});
        return null;
      }
      const mod = await import("hls.js");
      const Hls = mod.default;
      if (!Hls.isSupported()) return null;
      const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return hls;
    }

    (async () => {
      const a = await setupHls(introVideoRef.current);
      const b = await setupHls(bgVideoRef.current);
      if (cancelled) {
        a?.destroy();
        b?.destroy();
        return;
      }
      hls1 = a;
      hls2 = b;
    })();

    return () => {
      cancelled = true;
      hls1?.destroy();
      hls2?.destroy();
    };
  }, []);

  const introVisible = phase === "intro" || phase === "revealing";
  const introFading = phase === "revealing";
  const contentVisible = phase === "revealing" || phase === "visible";

  const itemStyle = (delay: string): CSSProperties =>
    ({ ["--d" as string]: delay }) as CSSProperties;

  return (
    <>
      {/* Fullscreen intro overlay (portal-style, fixed) */}
      {introVisible && (
        <div
          className={`video-intro-wrap ${introFading ? "video-intro-wrap--fading" : ""}`}
          aria-hidden="true"
        >
          <video
            ref={introVideoRef}
            className="video-intro"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
          <div className="video-intro-vignette" />
        </div>
      )}

      {/* Hero section — full viewport, video background */}
      <section className="hero-root relative overflow-hidden -mt-24 md:-mt-28 min-h-[100svh] flex items-center">
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
        <div className="video-overlay" />
        <div className="bg-grid opacity-25" />
        <div className="bg-noise" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-emerald/[0.08] blur-[120px] pointer-events-none" />

        <div
          className={`hero-content container-rail relative z-10 pt-40 md:pt-44 pb-40 ${
            contentVisible ? "hero-content--visible" : ""
          }`}
        >
          <div className="flex flex-col gap-8 max-w-5xl">
            <div className="relative">
              <p
                className="text-display tagline relative"
                aria-label="Tu es trouvé. Tu es sélectionné. Tu es automatisé."
              >
                <Typewriter
                  active={contentVisible}
                  startDelay={1500}
                  cps={30}
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

            <p className="max-w-2xl text-lg text-muted min-h-[6.5rem]">
              <Typewriter
                active={titleDone}
                startDelay={450}
                cps={110}
                onDone={() => setSubtitleDone(true)}
                segments={[
                  {
                    text:
                      "On bâtit des agents IA, des automatisations et des chatbots pour les PME du Québec — et on te positionne sur Google, ChatGPT et Perplexity.",
                  },
                ]}
              />
            </p>

            <div
              className={`flex flex-wrap gap-3 hero-fade ${
                subtitleDone ? "hero-fade--in" : ""
              }`}
              style={itemStyle("0.15s")}
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
          style={itemStyle("0.55s")}
          aria-hidden="true"
        >
          <span className="label-mono text-[0.58rem] opacity-60 tracking-[0.2em]">
            SCROLL
          </span>
          <span className="hero-scroll-line" />
        </div>
      </section>
    </>
  );
}
