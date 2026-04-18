import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Comment MAAD-AI collecte, utilise et protège tes données personnelles. Conforme à la Loi 25 du Québec.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        breadcrumbs={[{ name: "Confidentialité", path: "/privacy" }]}
        title={
          <>
            Politique de{" "}
            <span className="text-italic-serif text-emerald">confidentialité</span>.
          </>
        }
        lede={
          <>
            Ce qu&apos;on collecte, pourquoi, et ce qu&apos;on ne fera jamais avec tes
            données. Conforme à la Loi 25 du Québec.
          </>
        }
      />

      <SectionWrapper>
        <div className="max-w-3xl flex flex-col gap-10 text-muted leading-relaxed">
          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              01 — Responsable du traitement
            </h2>
            <p>
              {SITE.name}, opérée par {SITE.founder} au {SITE.province}, Canada.
              Pour toute question relative à tes données : {SITE.email}.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              02 — Ce qu&apos;on collecte
            </h2>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              <li>
                Les informations que tu nous donnes via le formulaire de contact (nom,
                courriel, entreprise, message).
              </li>
              <li>
                Des données de navigation anonymisées via Google Analytics 4 (pages
                visitées, durée, source de trafic).
              </li>
              <li>
                Des cookies techniques nécessaires au fonctionnement du site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              03 — Pourquoi on les collecte
            </h2>
            <ul className="flex flex-col gap-2 pl-5 list-disc">
              <li>Pour répondre à tes questions et propositions commerciales.</li>
              <li>Pour comprendre comment le site est utilisé et l&apos;améliorer.</li>
              <li>Pour respecter nos obligations légales.</li>
            </ul>
            <p className="mt-4">
              On ne vend jamais tes données. On ne fait pas de profilage publicitaire. On
              ne t&apos;envoie pas de newsletter sans ton accord explicite.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              04 — Partage avec des tiers
            </h2>
            <p>
              Tes données peuvent être traitées par les fournisseurs techniques suivants,
              tous soumis à des clauses de confidentialité :
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc mt-3">
              <li>Vercel (hébergement du site)</li>
              <li>Google Analytics (statistiques anonymisées)</li>
              <li>Resend ou équivalent (envoi de courriels transactionnels)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              05 — Durée de conservation
            </h2>
            <p>
              Les messages du formulaire de contact sont conservés 24 mois. Les données
              Analytics sont conservées 14 mois. Les données contractuelles sont
              conservées selon les obligations légales comptables.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              06 — Tes droits
            </h2>
            <p>
              En vertu de la Loi 25 du Québec, tu as le droit d&apos;accéder, rectifier,
              supprimer et porter tes données. Tu peux aussi demander la cessation de
              leur traitement. Écris à {SITE.email} avec l&apos;objet « Loi 25 ». On
              répond en moins de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="text-display text-2xl md:text-3xl mb-4 text-bone">
              07 — Cookies
            </h2>
            <p>
              Le site utilise uniquement des cookies techniques et des cookies
              analytiques anonymisés. Tu peux les désactiver dans les paramètres de ton
              navigateur sans affecter ta navigation.
            </p>
          </section>

          <p className="label-mono text-xs">Dernière mise à jour — 2026</p>
        </div>
      </SectionWrapper>
    </>
  );
}
