import type { Metadata } from "next";
import { site } from "./content";

type PageMetadata = {
  description: string;
  path: `/${string}`;
  title: string;
};

export function buildPageMetadata({ description, path, title }: PageMetadata): Metadata {
  const url = `${site.canonicalUrl}${path}`;
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: site.name,
      title: socialTitle,
      description,
      images: [{ url: "/social-card.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/social-card.jpg"],
    },
  };
}
