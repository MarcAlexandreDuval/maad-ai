import type { Metadata } from "next";
import { SITE } from "./site";

type ArticleMeta = {
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** When set, OG type becomes "article" with publishedTime + authors. */
  article?: ArticleMeta;
};

export function buildMetadata({ title, description, path, article }: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const ogTitle = `${title} | ${SITE.name}`;

  const openGraph: Metadata["openGraph"] = article
    ? {
        title: ogTitle,
        description,
        url,
        siteName: SITE.name,
        locale: SITE.locale,
        type: "article",
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime ?? article.publishedTime,
        authors: article.authors ?? [SITE.founder],
        section: article.section,
      }
    : {
        title: ogTitle,
        description,
        url,
        siteName: SITE.name,
        locale: SITE.locale,
        type: "website",
      };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}
