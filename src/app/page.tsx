import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bess Damm | SEO & Programming Agency London",
  description:
    "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
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
              },
              {
                title: "Web Development",
                description:
                  "Fast, accessible Next.js sites and web apps — built to load in under 2 s and convert visitors into clients.",
              },
              {
                title: "SEO Tooling",
                description:
                  "Custom dashboards, audit automation, and GSC/GA4 integrations that give you data without the spreadsheet wrangling.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
