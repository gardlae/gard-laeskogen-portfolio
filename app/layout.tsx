import type { Metadata, Viewport } from "next";
import { Analytics } from "./Analytics";
import { site } from "./content";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalUrl),
  title: {
    default: "Gard Laeskogen",
    template: "%s | Gard Laeskogen",
  },
  description:
    "Technical portfolio across cybernetics, UAV systems, analog electronics, operations, and leadership.",
  alternates: { canonical: site.canonicalUrl },
  icons: {
    icon: [
      { url: "/gard-laeskogen-favicon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.ico?v=4", sizes: "any" },
      { url: "/gard-laeskogen-favicon-256.png?v=4", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico?v=4",
    apple: "/gard-laeskogen-favicon-256.png?v=4",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.canonicalUrl,
    siteName: site.name,
    title: "Gard Laeskogen",
    description:
      "Technical portfolio across cybernetics, UAV systems, analog electronics, operations, and leadership.",
    images: [{ url: "/social-card.jpg", width: 1200, height: 630, alt: "Gard Laeskogen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gard Laeskogen",
    description:
      "Technical portfolio across cybernetics, UAV systems, analog electronics, operations, and leadership.",
    images: ["/social-card.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f3ef",
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.canonicalUrl,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github, site.yCombinator],
  homeLocation: { "@type": "Place", name: site.location },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Norwegian University of Science and Technology (NTNU)",
  },
  knowsAbout: ["Cybernetics", "Robotics", "UAV systems", "Analog electronics", "Leadership"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
