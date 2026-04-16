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
      <section className="bg-[#F5F3EE] relative overflow-hidden">
        {/* Right-side background image with grid overlay */}
        <div className="absolute inset-0 hidden md:block">
          {/* Solid left panel so text is never over the image */}
          <div className="absolute left-0 top-0 bottom-0 w-[42%] bg-[#F5F3EE]" />
          {/* Image occupies the right 58% */}
          <div className="absolute right-0 top-0 bottom-0 w-[62%]">
            <Image
              src="/images/hero-home.webp"
              alt=""
              fill
              className="object-cover object-center"
              priority
              aria-hidden="true"
            />
            {/* Geometric grid lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M60 0L0 60M0 0l60 60" stroke="white" strokeWidth="0.75" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Fade to left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EE] via-[#F5F3EE]/50 to-transparent" />
          </div>
        </div>

        {/* Mobile: subtle full-bleed image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/hero-home.webp"
            alt=""
            fill
            className="object-cover opacity-10"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-[560px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Bess Damm · SEO &amp; Programming Agency
            </p>
            <h1 className="font-serif text-5xl md:text-[3.5rem] leading-[1.1] text-brand-navy">
              Search authority for London businesses with global ambition
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We help ambitious businesses improve visibility, strengthen authority,
              and turn search into sustained commercial growth through strategic SEO
              and bespoke web tooling.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-brand-teal px-6 py-3.5 font-semibold text-white hover:bg-teal-700 transition-colors shadow-sm"
              >
                Request a Proposal
              </Link>
              <Link
                href="/work"
                className="rounded-lg border border-gray-300 bg-white/70 px-6 py-3.5 font-semibold text-brand-navy hover:bg-white transition-colors"
              >
                View Case Studies
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-gray-500">
              {["Local SEO", "Technical SEO", "Content Strategy", "Growth-Focused Consultancy"].map(
                (tag, i, arr) => (
                  <span key={tag} className="flex items-center gap-1">
                    {tag}
                    {i < arr.length - 1 && <span className="mx-1 text-gray-300">·</span>}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="relative border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-brand-teal">+184%</span>
              <span className="text-sm text-gray-600">Organic Traffic</span>
            </div>
            <div className="hidden sm:block h-7 w-px bg-gray-200" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-brand-navy">3×</span>
              <span className="text-sm text-gray-600">Lead Volume Growth</span>
            </div>
            <div className="hidden sm:block h-7 w-px bg-gray-200" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-brand-teal">Top&nbsp;3</span>
              <span className="text-sm text-gray-600">Local Ranking Gains</span>
            </div>
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
