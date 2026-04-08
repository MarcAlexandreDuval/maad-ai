import { Reveal } from "./Reveal";

/**
 * Faint emerald gradient divider with subtle glow halo.
 * Reveals on scroll via fade-in.
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`container-rail ${className}`}>
      <Reveal variant="fade-in" duration={1400}>
        <div className="section-divider" />
      </Reveal>
    </div>
  );
}
