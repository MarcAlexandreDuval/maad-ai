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

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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
