import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="bg-grid" />
      <div className="bg-noise" />
      <div className="container-rail relative z-10 max-w-3xl">
        <div className="label-mono text-emerald mb-5">Erreur 404</div>
        <h1 className="text-display text-5xl md:text-7xl mb-6 leading-none">
          Cette page{" "}
          <span className="text-italic-serif text-emerald">n&apos;existe pas</span>.
        </h1>
        <p className="text-muted text-lg leading-relaxed mb-10 max-w-2xl">
          Soit le lien est mort, soit on a déplacé la page, soit tu l&apos;as tapée à la
          main et t&apos;as manqué une lettre. Ça arrive. Voilà par où repartir.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/services/intelligence-artificielle" className="btn btn-ghost">
            Intelligence Artificielle
          </Link>
          <Link href="/services/visibilite-web" className="btn btn-ghost">
            Visibilité Web
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Nous contacter
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-white/5 text-sm text-muted">
          Besoin d&apos;aide ? Écris-nous à{" "}
          <a href={`mailto:${SITE.email}`} className="text-emerald hover:underline">
            {SITE.email}
          </a>
          . On répond en 24h.
        </div>
      </div>
    </section>
  );
}
