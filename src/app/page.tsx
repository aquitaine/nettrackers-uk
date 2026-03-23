import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";

const testimonials = [
  {
    quote:
      "Bess Damm rebuilt our technical SEO foundation from the ground up. Organic traffic more than doubled in six months and we now rank for terms our competitors have owned for years.",
    author: "Head of Growth",
    role: "Series A FinTech",
    company: "London",
  },
  {
    quote:
      "We went from relying entirely on referrals to getting qualified enquiries through Google every week. The website they built is the best investment we've made in years.",
    author: "Managing Partner",
    role: "Boutique Law Firm",
    company: "London",
  },
  {
    quote:
      "They didn't just do SEO — they built us tooling, reported on what actually mattered, and helped us make better product decisions based on search data. True extension of our team.",
    author: "VP Marketing",
    role: "B2B SaaS",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "Bess Damm | SEO & Programming Agency London",
  description:
    "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white relative overflow-hidden">
        <Image
          src="/images/hero-home.webp"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          priority
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-4">
            SEO &amp; Programming Agency · London
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            Grow faster with technical SEO and bespoke software
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            We help London businesses rank higher and convert better — through expert SEO
            strategy and hand-crafted web tools built for scale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-lg bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-teal-600 transition-colors"
            >
              See our services
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">
            What we do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical SEO",
                description:
                  "Deep-crawl audits, Core Web Vitals fixes, schema markup, and ongoing rank tracking so Google rewards your site.",
                image: "/images/service-seo-audit.webp",
                alt: "SEO audit illustration",
              },
              {
                title: "Web Development",
                description:
                  "Fast, accessible Next.js sites and web apps — built to load in under 2 s and convert visitors into clients.",
                image: "/images/service-web-dev.webp",
                alt: "Web development illustration",
              },
              {
                title: "SEO Tooling",
                description:
                  "Custom dashboards, audit automation, and GSC/GA4 integrations that give you data without the spreadsheet wrangling.",
                image: "/images/service-seo-tooling.webp",
                alt: "SEO tooling dashboard illustration",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="mb-6 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center h-40">
                  <Image src={item.image} alt={item.alt} width={160} height={160} className="object-contain h-36 w-36" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Ready to grow?</h2>
          <p className="mt-4 text-gray-600">
            Tell us about your project and we&apos;ll come back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-600 transition-colors"
          >
            Get a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
