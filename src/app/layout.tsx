import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "NetTrackers | SEO & Programming Agency London",
    template: "%s | NetTrackers",
  },
  description:
    "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
  keywords: ["SEO agency London", "web development London", "SEO services", "programming agency"],
  metadataBase: new URL("https://nettrackers.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://nettrackers.co.uk",
    siteName: "NetTrackers",
    title: "NetTrackers | SEO & Programming Agency London",
    description:
      "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
    images: [
      {
        url: "/images/og-default.webp",
        width: 1200,
        height: 630,
        alt: "NetTrackers — SEO & Programming Agency London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetTrackers | SEO & Programming Agency London",
    description:
      "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
    images: ["/images/og-default.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  }),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: "NetTrackers",
  url: "https://nettrackers.co.uk",
  logo: "https://nettrackers.co.uk/logo.svg",
  description:
    "London-based SEO and programming agency. Technical SEO, web development, and bespoke SEO tooling for London businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "City",
    name: "London",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@nettrackers.co.uk",
    url: "https://nettrackers.co.uk/contact",
  },
  sameAs: [],
  knowsAbout: [
    "Technical SEO",
    "Core Web Vitals",
    "Web Development",
    "Next.js",
    "Google Analytics",
    "Search Engine Optimisation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-gray-900 antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-brand-teal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Analytics />
      </body>
    </html>
  );
}
