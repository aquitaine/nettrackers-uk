import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { Testimonials } from "@/components/Testimonials";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const testimonial = [
  {
    quote:
      "NetTrackers built us a content engine that consistently produces articles ranking on page one. Six months in, organic traffic from content alone accounts for 40% of all our new leads.",
    author: "Head of Marketing",
    role: "B2B SaaS Platform",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "Content Strategy Services | NetTrackers",
  description:
    "SEO-led content strategy for UK businesses. From keyword research and topical authority mapping to written content that ranks and converts.",
  openGraph: {
    title: "Content Strategy Services | NetTrackers",
    description:
      "SEO-led content strategy for UK businesses. Keyword research, topical authority mapping, and content that ranks.",
    url: "https://nettrackers.co.uk/services/content-strategy",
  },
};

const whatIsIncluded = [
  {
    heading: "Topical authority mapping",
    body: "We identify the clusters of topics your site needs to own to rank for high-value terms — then build a structured content plan that earns authority systematically.",
  },
  {
    heading: "Keyword research & prioritisation",
    body: "Beyond search volume: we analyse intent, competition, and commercial value to prioritise keywords that drive revenue, not just traffic.",
  },
  {
    heading: "Content brief creation",
    body: "Every piece gets a detailed brief covering target keywords, intent, recommended structure, internal linking, and competitive differentiators — ready for your writer or ours.",
  },
  {
    heading: "SEO copywriting",
    body: "We write high-quality, search-optimised content: blog posts, landing pages, pillar pages, and FAQs — all written to rank and convert, never keyword-stuffed.",
  },
  {
    heading: "Content audit & pruning",
    body: "Existing content drags your site down if it's thin, outdated, or cannibalising itself. We audit your archive and recommend what to update, consolidate, or remove.",
  },
  {
    heading: "Performance tracking",
    body: "We track rankings, impressions, clicks, and conversions for every piece — so you know exactly what the content investment is delivering.",
  },
];

const faqs = [
  {
    question: "What is SEO content strategy?",
    answer:
      "SEO content strategy is the process of planning, creating, and optimising content specifically to rank in search engines and attract qualified organic traffic. It goes beyond writing blog posts — it's about building topical authority, matching content to search intent, and connecting content to commercial outcomes.",
  },
  {
    question: "Do you write the content or just plan it?",
    answer:
      "Both. We can provide strategy and detailed briefs for your in-house writers, or we can handle end-to-end production — research, writing, optimisation, and publishing. Most clients start with strategy and move to full production as they see results.",
  },
  {
    question: "How long does it take to see results from content?",
    answer:
      "New content typically takes 3–6 months to rank meaningfully in competitive niches. Less competitive keywords can move faster. We focus early efforts on quick-win opportunities so you see traction while the longer-term authority builds.",
  },
  {
    question: "How is this different from hiring a copywriter?",
    answer:
      "A copywriter produces words. A content strategist builds a system — keyword research, topical mapping, competitive analysis, and a publishing cadence — that turns those words into organic traffic. We combine both: strategy that works and content good enough to rank.",
  },
  {
    question: "Can you work with our existing content team?",
    answer:
      "Yes. Many clients use us as a strategic layer above their in-house or freelance writers — we handle research, briefs, and SEO optimisation while they handle production. We're designed to slot in alongside existing teams.",
  },
  {
    question: "What industries do you cover?",
    answer:
      "We work across B2B SaaS, professional services, legal, finance, e-commerce, and health. Content strategy principles are universal — the specifics depend on your audience and competitive landscape, which we research thoroughly.",
  },
];

const pricingTiers = [
  {
    name: "Strategy",
    price: "£1,800",
    description: "One-time topical authority map, keyword research, and 6-month content plan.",
  },
  {
    name: "Strategy + Content",
    price: "From £2,500/mo",
    description: "Ongoing strategy plus 4–8 pieces of written content per month.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "High-volume content operations for larger sites. Let's scope it.",
  },
];

export default function ContentStrategyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Strategy",
    provider: {
      "@type": "ProfessionalService",
      name: "NetTrackers",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    description:
      "SEO-led content strategy and copywriting for UK businesses. Topical authority mapping, keyword research, and content that ranks.",
    areaServed: "United Kingdom",
    url: "https://nettrackers.co.uk/services/content-strategy",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Services", href: "/services" },
          { name: "Content Strategy", href: "/services/content-strategy" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-4">
            Service · Content Strategy
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Content that earns rankings, authority, and revenue
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            We build and execute SEO content strategies that systematically grow your organic
            traffic — through keyword research, topical authority mapping, and content that is
            genuinely worth reading and ranking.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-teal-600 transition-colors"
            >
              Get a free content audit
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

      {/* What's included */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-4">
            What&apos;s included
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            From strategy to published content — we handle every stage of the process.
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

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">How we work</h2>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Discovery call to understand your audience, goals, and existing content",
                  "Full keyword research and topical authority mapping",
                  "Prioritised content plan — quick wins first, authority-builders over time",
                  "Detailed content briefs for every piece",
                  "Writing, SEO optimisation, and internal linking",
                  "Monthly reporting on rankings, traffic, and conversions from content",
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
                Typical time to traction
              </p>
              <p className="text-brand-navy text-2xl font-bold mb-4">3–6 months</p>
              <p className="text-gray-600">
                Content SEO is a compounding investment. Results build over time, but we focus early
                efforts on lower-competition quick wins so you see movement within the first quarter.
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
          <h2 className="text-3xl font-bold text-brand-navy">
            Ready to build a content engine that ranks?
          </h2>
          <p className="mt-4 text-gray-600">
            Share your site and we&apos;ll identify the content opportunities your competitors are
            already exploiting.
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
