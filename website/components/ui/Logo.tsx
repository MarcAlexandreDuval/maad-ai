import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
  /** @deprecated kept for API compatibility; PNG colors are baked-in */
  color?: string;
  withWordmark?: boolean;
};

/**
 * MAAD-AI logo — official brand asset.
 * PNG transparent (500x500 source) served via next/image for optimal sizing.
 */
export function Logo({
  size = 40,
  className = "",
  withWordmark = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="MAAD-AI"
        width={size}
        height={size}
        priority
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
