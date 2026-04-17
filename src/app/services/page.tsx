import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | NetTrackers",
  description:
    "Technical SEO, local SEO, content strategy, PPC and web development for UK businesses that want measurable growth from search.",
};

const services = [
  {
    title: "SEO Audits",
    href: "/services/seo-audits",
    description:
      "A full crawl of your site covering indexing, Core Web Vitals, schema, and on-page — delivered as a prioritised fix list.",
    cta: "See what's included",
  },
  {
    title: "SEO Retainers",
    href: "/services/seo-retainers",
    description:
      "Monthly strategy, content briefs, rank tracking, and reporting so you stay ahead of algorithm changes.",
    cta: "View retainer plans",
  },
  {
    title: "Local SEO",
    href: "/services/local-seo",
    description:
      "Google Business Profile, citations, reviews and local content — everything to win the map pack in your area.",
    cta: "Rank locally",
  },
  {
    title: "Content Strategy",
    href: "/services/content-strategy",
    description:
      "Topical authority mapping, keyword research, and SEO copywriting that earns rankings and converts traffic.",
    cta: "Plan your content",
  },
  {
    title: "PPC & Google Ads",
    href: "/services/ppc",
    description:
      "Paid search management with a conversion focus — lower CPLs, transparent reporting, and tight feedback loops with SEO.",
    cta: "Audit your ads",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Next.js sites and web apps built for speed, accessibility, and conversions — from landing pages to full product builds.",
    cta: "Explore our stack",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0ece4]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            Our Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.015em] text-[#1a1a1a] max-w-3xl">
            Services built for{" "}
            <em className="italic font-normal">measurable search growth</em>
          </h1>
          <p className="mt-6 text-[17px] text-gray-600 leading-[1.65] max-w-2xl">
            Everything you need to rank higher, convert better, and ship faster — delivered by a
            team that treats your numbers like they&apos;re our own.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-gray-100 bg-[#F8F7F4] p-8 hover:border-brand-teal/40 hover:shadow-lg hover:shadow-teal-900/5 transition-all"
              >
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-3 group-hover:text-brand-teal transition-colors">
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                <p className="text-brand-teal text-sm font-semibold flex items-center gap-1.5">
                  {s.cta}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-brand-teal px-8 py-4 text-sm font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/10"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
