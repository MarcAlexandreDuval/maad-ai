type LogoProps = {
  size?: number;
  className?: string;
  color?: string;
  withWordmark?: boolean;
};

/**
 * MAAD-AI logo — 5-fold rose spirograph.
 * Generates a dense overlapping mesh of rose curves (r = cos(5θ/2))
 * at slight rotation offsets to create the hand-drawn spirograph look.
 */
export function Logo({
  size = 40,
  className = "",
  color = "currentColor",
  withWordmark = false,
}: LogoProps) {
  // Generate one rose curve path once
  const rosePath = (() => {
    const N = 360;
    const parts: string[] = [];
    for (let i = 0; i <= N; i++) {
      const theta = (i / N) * 4 * Math.PI;
      const r = Math.cos((5 * theta) / 2);
      const x = 50 + 44 * r * Math.cos(theta);
      const y = 50 + 44 * r * Math.sin(theta);
      parts.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`);
    }
    return parts.join(" ");
  })();

  // Eight slight rotations for the dense mesh
  const rotations = [0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5];

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      style={{ color }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <g>
          {rotations.map((r) => (
            <path
              key={r}
              d={rosePath}
              transform={`rotate(${r} 50 50)`}
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.55"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>
      {withWordmark && (
        <span className="text-display text-lg md:text-xl tracking-tight leading-none whitespace-nowrap">
          MAAD<span className="text-emerald">-AI</span>
        </span>
      )}
    </span>
  );
}
