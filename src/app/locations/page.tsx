import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Locations We Serve | NetTrackers",
  description:
    "London-based SEO and digital agency serving businesses across Islington, the City, Greater London and the UK. Find the areas we cover.",
  openGraph: {
    title: "Locations We Serve | NetTrackers",
    description:
      "London-based SEO and digital agency serving businesses across Islington, the City, Greater London and the UK.",
    url: "https://nettrackers.co.uk/locations",
  },
};

const locations = [
  {
    name: "Islington",
    slug: "islington",
    blurb:
      "Our home turf. We work with independent businesses, clinics, agencies, and studios across Angel, Highbury, Upper Street and Old Street — often meeting in person for quarterly strategy days.",
  },
  {
    name: "City of London",
    slug: "city-of-london",
    blurb:
      "We support professional services firms, fintech teams, and law practices across the Square Mile — specialising in technical SEO for high-trust, high-regulation businesses.",
  },
  {
    name: "Greater London",
    slug: "greater-london",
    blurb:
      "From Shoreditch and Hackney out to Hammersmith, Greenwich, and Richmond — we run local SEO programmes for multi-branch businesses across the capital.",
  },
  {
    name: "UK-wide (remote)",
    slug: "uk",
    blurb:
      "Most of our retainer work is delivered remotely. We partner with businesses in Manchester, Bristol, Edinburgh, Leeds, and beyond — same process, same accountability, no geography tax.",
  },
];

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NetTrackers",
    url: "https://nettrackers.co.uk",
    areaServed: locations.map((l) => ({
      "@type": "AdministrativeArea",
      name: l.name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressRegion: "Islington",
      addressCountry: "GB",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Locations", href: "/locations" }]}
      />

      {/* Hero */}
      <section className="bg-[#f0ece4]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            Locations
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.015em] text-[#1a1a1a] max-w-3xl">
            Rooted in Islington,{" "}
            <em className="italic font-normal">working across the UK</em>
          </h1>
          <p className="mt-6 text-[17px] text-gray-600 leading-[1.65] max-w-2xl">
            We&apos;re a London agency by origin and by name. Most of our work happens remotely,
            but we meet clients in person across the capital and take on projects UK-wide.
          </p>
        </div>
      </section>

      {/* Location cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.slug}
                className="rounded-2xl bg-[#F8F7F4] border border-gray-100 p-8"
              >
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3">{loc.name}</h2>
                <p className="text-gray-600 leading-relaxed">{loc.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EFE9] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            Work with us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-5 leading-tight">
            Whichever postcode you&apos;re in — we&apos;d love to talk
          </h2>
          <p className="text-gray-500 text-[1.0625rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us where you are and where you want to rank. We&apos;ll send a free opportunity
            breakdown within one working day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/10 text-sm"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
