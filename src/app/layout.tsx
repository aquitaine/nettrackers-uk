import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bess Damm | SEO & Programming Agency London",
    template: "%s | Bess Damm",
  },
  description:
    "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
  keywords: ["SEO agency London", "web development London", "SEO services", "programming agency"],
  metadataBase: new URL("https://bessdamm.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bessdamm.com",
    siteName: "Bess Damm",
    title: "Bess Damm | SEO & Programming Agency London",
    description:
      "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
    images: [
      {
        url: "/images/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Bess Damm — SEO & Programming Agency London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bess Damm | SEO & Programming Agency London",
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
  name: "Bess Damm",
  url: "https://bessdamm.com",
  logo: "https://bessdamm.com/logo.svg",
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
    email: "hello@bessdamm.com",
    url: "https://bessdamm.com/contact",
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
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
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
      </body>
    </html>
  );
}
