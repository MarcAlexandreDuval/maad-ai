export function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`text-display text-5xl md:text-6xl ${
          accent ? "text-emerald" : "text-bone"
        }`}
      >
        {value}
      </div>
      <div className="label-mono max-w-[24ch]">{label}</div>
    </div>
  );
}
