import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { Testimonials } from "@/components/Testimonials";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const testimonial = [
  {
    quote:
      "The audit report was unlike anything we'd received before — every issue was prioritised by impact, not just listed. We fixed the top 10 items and rankings moved within a month.",
    author: "Marketing Director",
    role: "E-commerce Brand",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "SEO Audit Services London",
  description:
    "One-time technical and on-page SEO audits for London businesses. Get a prioritised fix list covering Core Web Vitals, indexing, schema, and more.",
  openGraph: {
    title: "SEO Audit Services | NetTrackers",
    description:
      "One-time technical and on-page SEO audits for London businesses. Prioritised fix list, actionable insights.",
    url: "https://nettrackers.co.uk/services/seo-audits",
  },
};

const whatIsIncluded = [
  {
    heading: "Full site crawl",
    body: "We crawl every URL on your site to surface broken links, redirect chains, orphaned pages, and duplicate content.",
  },
  {
    heading: "Core Web Vitals analysis",
    body: "LCP, INP, and CLS measured in the field and lab — with specific recommendations for your tech stack.",
  },
  {
    heading: "On-page SEO review",
    body: "H1 hierarchy, title tags, meta descriptions, internal linking, and keyword cannibalisation flagged and fixed.",
  },
  {
    heading: "Schema & structured data",
    body: "We validate your existing markup and implement missing schemas (FAQ, LocalBusiness, Article) to unlock rich results.",
  },
  {
    heading: "Indexing & crawlability",
    body: "robots.txt, sitemap integrity, noindex misuse, and Google Search Console coverage report — all checked.",
  },
  {
    heading: "Prioritised fix list",
    body: "Every finding scored by impact and effort so your team knows what to fix first to move rankings.",
  },
];

const faqs = [
  {
    question: "How long does an SEO audit take?",
    answer:
      "Our turnaround is 5–7 business days from when you grant access. We'll agree a precise deadline at kickoff and hit it. Larger sites (Enterprise tier) may take slightly longer — we'll confirm scope upfront.",
  },
  {
    question: "What access do you need to run the audit?",
    answer:
      "Read-only access to Google Search Console and Google Analytics 4 is sufficient for most audits. We may also ask for a staging URL, CMS access, or server logs if specific issues warrant deeper investigation.",
  },
  {
    question: "Do you fix the issues or just report them?",
    answer:
      "The SEO Audit is a diagnostic and prioritised fix list — we tell you exactly what to fix and why, scored by impact and effort. If you want us to implement the fixes, we can scope that as a separate project or an ongoing retainer.",
  },
  {
    question: "Can a one-time audit really improve our rankings?",
    answer:
      "Yes — particularly if technical issues are holding the site back. We've seen audits unblock significant ranking improvements within weeks (see our case studies). That said, SEO is ongoing: an audit is the best starting point, but a retainer is often needed to sustain gains.",
  },
  {
    question: "What if my site is on WordPress / Shopify / Webflow?",
    answer:
      "We audit sites on any platform. Our recommendations will be specific to your CMS — we know which issues are platform-level limitations and which are configurable. Some fixes may require developer involvement on your end.",
  },
  {
    question: "Do you cover local SEO in the audit?",
    answer:
      "Yes — if your business has a local presence we include Google Business Profile review, local citation consistency, and LocalBusiness schema as part of the audit.",
  },
  {
    question: "How is this different from a free tool like Ahrefs or Semrush site audit?",
    answer:
      "Automated tools flag issues but don't prioritise them, explain their business impact, or tell you what to fix first. Our audits combine automated crawls with manual expert analysis — we interpret the data and give you a clear, ranked action plan, not a 200-item checklist.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "£1,200",
    description: "Up to 500 pages. Ideal for small business or brochure sites.",
  },
  {
    name: "Growth",
    price: "£2,500",
    description: "Up to 5,000 pages. Full audit + 1-hour strategy call.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Large catalogues, multi-region, or e-commerce. Let's scope it together.",
  },
];

export default function SeoAuditsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Audit",
    provider: {
      "@type": "ProfessionalService",
      name: "NetTrackers",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    description:
      "One-time technical and on-page SEO audits covering Core Web Vitals, indexing, schema, and more.",
    areaServed: "London",
    url: "https://nettrackers.co.uk/services/seo-audits",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/services" }, { name: "SEO Audits", href: "/services/seo-audits" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-4">
            Service · SEO Audits
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            See exactly why your site is not ranking — and how to fix it
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            A comprehensive one-time audit that uncovers every technical and on-page SEO issue
            holding your site back, delivered as a prioritised action plan your team can act on
            immediately.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-teal-600 transition-colors"
            >
              Get a free consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-4">
            What&apos;s included
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Every audit covers the six pillars that determine how well Google can find, crawl,
            understand, and rank your site.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIsIncluded.map((item) => (
              <div
                key={item.heading}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-navy mb-3">{item.heading}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">What you receive</h2>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Full written audit report (PDF + Notion)",
                  "Prioritised issue tracker (by impact × effort)",
                  "Annotated screenshots and crawl exports",
                  "1-hour debrief call to walk through findings",
                  "30-day follow-up check-in",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-light rounded-2xl p-8">
              <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-2">
                Turnaround
              </p>
              <p className="text-brand-navy text-2xl font-bold mb-4">5–7 business days</p>
              <p className="text-gray-600">
                From access grant to delivered report. We don&apos;t sit on work — you get a clear
                timeline at kickoff and we hit it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
              >
                <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-2">
                  {tier.name}
                </p>
                <p className="text-3xl font-extrabold text-brand-navy mb-4">{tier.price}</p>
                <p className="text-gray-600">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <Testimonials testimonials={testimonial} variant="single" />

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Ready to find your quick wins?</h2>
          <p className="mt-4 text-gray-600">
            Tell us your URL and we&apos;ll scope an audit that fits your site and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-600 transition-colors"
          >
            Book a free discovery call
          </Link>
        </div>
      </section>
    </>
  );
}
