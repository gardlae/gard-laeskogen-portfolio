import type { Metadata, Viewport } from "next";
import { Analytics } from "./Analytics";
import { site } from "./content";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import "./globals.css";

const description =
  "Gard Laeskogen: visiting graduate student at UC Berkeley and MSc student in Cybernetics and Robotics at NTNU, working on learned world models for drone control under compute constraints.";

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalUrl),
  title: {
    default: "Gard Laeskogen",
    template: "%s | Gard Laeskogen",
  },
  description,
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
    description,
    images: [{ url: "/social-card.jpg", width: 1200, height: 630, alt: "Gard Laeskogen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gard Laeskogen",
    description,
    images: ["/social-card.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.canonicalUrl,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github],
  affiliation: [
    { "@type": "CollegeOrUniversity", name: "University of California, Berkeley" },
    { "@type": "CollegeOrUniversity", name: "Norwegian University of Science and Technology (NTNU)" },
  ],
  homeLocation: { "@type": "Place", name: site.location },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Norwegian University of Science and Technology (NTNU)",
  },
  knowsAbout: ["Cybernetics", "Robotics", "World models", "Model predictive control", "UAV systems"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link as="font" crossOrigin="" href="/fonts/SourceSans3-normal-latin.woff2" rel="preload" type="font/woff2" />
        <link as="font" crossOrigin="" href="/fonts/SourceSerif4-normal-latin.woff2" rel="preload" type="font/woff2" />
      </head>
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
