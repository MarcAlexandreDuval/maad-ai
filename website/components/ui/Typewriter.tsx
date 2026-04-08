"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type TypeSegment = {
  text: string;
  className?: string;
  block?: boolean;
};

type Props = {
  segments: TypeSegment[];
  active: boolean;
  startDelay?: number; // ms before typing begins
  cps?: number; // base characters per second
  className?: string;
  cursor?: boolean;
  natural?: boolean; // variable rhythm + punctuation pauses (default true)
  onDone?: () => void;
};

/**
 * Build a per-character timestamp schedule with natural rhythm.
 * - Spaces are faster (gliding between words)
 * - Punctuation gets a pronounced pause AFTER the character
 * - Small jitter on each char
 * Deterministic (seeded LCG) so SSR/CSR match and re-renders don't reshuffle.
 */
function buildSchedule(text: string, cps: number, natural: boolean): number[] {
  const base = 1000 / cps;
  const schedule: number[] = new Array(text.length);
  let t = 0;
  // Tiny seeded PRNG so jitter is stable across renders
  let seed = 0xc0ffee ^ text.length;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0xffffffff;
  };
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const prev = i > 0 ? text[i - 1] : "";
    let d = base;
    if (natural) {
      // Slight jitter +/- 25%
      d *= 0.75 + rand() * 0.5;
      if (ch === " ") d *= 0.55;
      // Pause AFTER punctuation
      if (prev === "." || prev === "!" || prev === "?") d += base * 9;
      if (prev === "," || prev === ";" || prev === ":") d += base * 4;
      // Mini-breath after a word (space following a letter)
      if (ch === " " && prev && prev !== " ") d += base * 0.4;
    }
    t += d;
    schedule[i] = t;
  }
  return schedule;
}

/**
 * Character-by-character typing reveal.
 * Reserves full text width via an invisible placeholder so layout never shifts.
 */
export function Typewriter({
  segments,
  active,
  startDelay = 0,
  cps = 55,
  className = "",
  cursor = false,
  natural = true,
  onDone,
}: Props) {
  const fullText = useMemo(
    () => segments.map((s) => s.text).join(""),
    [segments],
  );
  const total = fullText.length;
  const schedule = useMemo(
    () => buildSchedule(fullText, cps, natural),
    [fullText, cps, natural],
  );
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);

  // Keep onDone in a ref so a fresh closure from the parent doesn't
  // re-trigger the typing effect (which would reset count to 0 mid-render).
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!active) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setCount(total);
      if (!doneRef.current) {
        doneRef.current = true;
        onDoneRef.current?.();
      }
      return;
    }

    // If we already finished once, don't re-run on parent re-renders.
    if (doneRef.current) {
      setCount(total);
      return;
    }

    let raf = 0;
    let startTime: number | null = null;

    const delayTimer = window.setTimeout(() => {
      const tick = (t: number) => {
        if (startTime === null) startTime = t;
        const elapsed = t - startTime;
        // Schedule is monotonic — walk forward
        let n = 0;
        while (n < total && schedule[n] <= elapsed) n++;
        setCount(n);
        if (n < total) {
          raf = requestAnimationFrame(tick);
        } else if (!doneRef.current) {
          doneRef.current = true;
          onDoneRef.current?.();
        }
      };
      raf = requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      window.clearTimeout(delayTimer);
      cancelAnimationFrame(raf);
    };
  }, [active, total, schedule, startDelay]);

  let remaining = count;
  return (
    <span className={className}>
      {segments.map((seg, i) => {
        const take = Math.max(0, Math.min(seg.text.length, remaining));
        const shown = seg.text.slice(0, take);
        const hidden = seg.text.slice(take);
        remaining -= seg.text.length;
        const blockClass = seg.block ? "block" : "";
        return (
          <span key={i} className={`${blockClass} ${seg.className ?? ""}`.trim()}>
            {shown}
            <span aria-hidden className="opacity-0">
              {hidden}
            </span>
          </span>
        );
      })}
      {cursor && count > 0 && count < total && (
        <span className="tw-cursor" aria-hidden>
          ▍
        </span>
      )}
    </span>
  );
}
