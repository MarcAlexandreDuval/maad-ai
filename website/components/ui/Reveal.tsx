"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type ElementType,
} from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "fade-down"
  | "scale-in"
  | "slide-left"
  | "slide-right"
  | "blur-in";

type Props = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  as?: ElementType;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

/**
 * Scroll-triggered reveal. Uses IntersectionObserver to toggle a class
 * once the element enters the viewport. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 900,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined") return;

    // Skip animations entirely on:
    //  - prefers-reduced-motion
    //  - mobile viewport (< 768px) — too janky with 30+ Reveals on home
    //  - slow connection (3g and below)
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const conn = (navigator as { connection?: { effectiveType?: string } }).connection;
    const slowConnection = conn?.effectiveType
      ? ["slow-2g", "2g", "3g"].includes(conn.effectiveType)
      : false;

    if (reduced || isMobile || slowConnection) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
