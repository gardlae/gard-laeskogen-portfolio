import type { Metadata, Viewport } from "next";
import { Analytics } from "./Analytics";
import { site } from "./content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalUrl),
  title: {
    default: "Gard Laeskogen | Cybernetics, UAV Systems, Leadership",
    template: "%s | Gard Laeskogen",
  },
  description:
    "Technical portfolio across cybernetics, UAV systems, analog electronics, operations, and leadership.",
  alternates: { canonical: site.canonicalUrl },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.canonicalUrl,
    siteName: site.name,
    title: "Gard Laeskogen | Cybernetics, UAV Systems, Leadership",
    description:
      "Technical portfolio across cybernetics, UAV systems, analog electronics, operations, and leadership.",
    images: [{ url: "/social-card.jpg", width: 1200, height: 630, alt: "Gard Laeskogen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gard Laeskogen | Cybernetics, UAV Systems, Leadership",
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
  sameAs: [site.linkedin],
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
