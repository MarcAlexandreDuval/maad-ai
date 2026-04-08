import Link from "next/link";
import { JsonLd } from "../seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = { name: string; path: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Accueil", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Fil d'ariane" className="label-mono flex flex-wrap items-center gap-2">
        {trail.map((c, i) => (
          <span key={c.path} className="flex items-center gap-2">
            {i < trail.length - 1 ? (
              <Link href={c.path} className="hover:text-emerald transition-colors">
                {c.name}
              </Link>
            ) : (
              <span className="text-bone">{c.name}</span>
            )}
            {i < trail.length - 1 && <span className="opacity-40">/</span>}
          </span>
        ))}
      </nav>
    </>
  );
}
