import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  /** @deprecated kept for API compatibility; PNG colors are baked-in */
  color?: string;
  withWordmark?: boolean;
  /** Set true only when this logo is above-the-fold and is the LCP element */
  priority?: boolean;
};

/**
 * MAAD-AI logo — official brand asset.
 * PNG transparent (500x500 source) served via next/image for optimal sizing.
 *
 * NOTE: This logo is currently only used in the footer (below-the-fold).
 * Setting `priority` would force it into the LCP candidate set and slow FCP.
 * Default is lazy/non-priority — opt in if you ever place it in the nav/hero.
 */
export function Logo({
  size = 40,
  className = "",
  withWordmark = false,
  priority = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="MAAD-AI"
        width={size}
        height={size}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="shrink-0"
      />
      {withWordmark && (
        <span className="text-display text-lg md:text-xl tracking-tight leading-none whitespace-nowrap">
          MAAD<span className="text-emerald">-AI</span>
        </span>
      )}
    </span>
  );
}
