import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { Testimonials } from "@/components/Testimonials";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const testimonial = [
  {
    quote:
      "Within three months of working with NetTrackers our Google Business Profile was ranking in the local pack for every term that matters. Enquiries from people in our area went up by over 60%.",
    author: "Owner",
    role: "Independent Dental Practice",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "Local SEO Services | NetTrackers",
  description:
    "Local SEO services for UK businesses. Rank in Google Maps, dominate your local pack, and turn nearby searches into paying customers.",
  openGraph: {
    title: "Local SEO Services | NetTrackers",
    description:
      "Local SEO services for UK businesses. Rank in Google Maps, dominate your local pack, and turn nearby searches into paying customers.",
    url: "https://nettrackers.co.uk/services/local-seo",
  },
};

const whatIsIncluded = [
  {
    heading: "Google Business Profile optimisation",
    body: "We audit and optimise every section of your GBP — categories, attributes, photos, posts, and Q&A — so Google surfaces you for the searches that matter most.",
  },
  {
    heading: "Local citation building & cleanup",
    body: "Consistent NAP (Name, Address, Phone) data across directories like Yell, Bing Places, and Apple Maps is a local ranking signal. We build and fix citations at scale.",
  },
  {
    heading: "Local keyword research",
    body: "We map the exact search terms your local customers use — including near-me queries, borough-level searches, and service + location combinations — and build your content around them.",
  },
  {
    heading: "On-page local signals",
    body: "Location pages, LocalBusiness schema, area-specific FAQs, and geo-targeted title tags all strengthen your relevance signals for local search.",
  },
  {
    heading: "Review strategy",
    body: "Reviews are a major local ranking factor. We help you build a repeatable process for generating genuine 5-star reviews and handling responses professionally.",
  },
  {
    heading: "Local link building",
    body: "Links from locally relevant sites — local press, chambers of commerce, and community organisations — carry disproportionate weight for local rankings.",
  },
];

const faqs = [
  {
    question: "What is local SEO and how is it different from regular SEO?",
    answer:
      "Local SEO focuses on ranking in Google's map pack and local organic results for searches with a geographic intent — 'accountant near me', 'plumber in Bristol', and so on. It differs from broader SEO in its emphasis on Google Business Profile, local citations, and proximity signals.",
  },
  {
    question: "How long before I see results from local SEO?",
    answer:
      "Most clients see movement in Google Business Profile visibility within 6–10 weeks of optimisation. Sustained local pack rankings for competitive terms typically take 3–6 months of consistent work.",
  },
  {
    question: "Do I need a physical address to rank locally?",
    answer:
      "A verified address strengthens local rankings significantly. Service-area businesses (those that travel to customers) can still rank — Google allows you to set a service area without displaying a physical address.",
  },
  {
    question: "Can you help businesses with multiple locations?",
    answer:
      "Yes. We have a systematic approach for multi-location businesses: individual location pages, separate GBP profiles for each branch, and location-specific citation building.",
  },
  {
    question: "How important are Google reviews for local SEO?",
    answer:
      "Very. Review count, recency, and sentiment are confirmed local ranking signals. We help you build a sustainable review generation process rather than one-off pushes.",
  },
  {
    question: "Do you work with businesses outside London?",
    answer:
      "Absolutely. We work with businesses across the UK. Local SEO is equally important whether you're targeting customers in Manchester, Edinburgh, or a specific London borough.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "£650/mo",
    description: "Single location. GBP optimisation, citation cleanup, and monthly reporting.",
  },
  {
    name: "Growth",
    price: "£1,200/mo",
    description: "Up to 3 locations. Full local strategy, content, review management.",
  },
  {
    name: "Multi-site",
    price: "Custom",
    description: "4+ locations or franchise groups. Let's scope it together.",
  },
];

export default function LocalSeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO",
    provider: {
      "@type": "ProfessionalService",
      name: "NetTrackers",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    description:
      "Local SEO services to rank in Google Maps and local search results for UK businesses.",
    areaServed: "United Kingdom",
    url: "https://nettrackers.co.uk/services/local-seo",
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
          { name: "Local SEO", href: "/services/local-seo" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-4">
            Service · Local SEO
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Be the first business local customers find on Google
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            We help UK businesses dominate their local search results — ranking in the Google Maps
            pack, local organic listings, and near-me searches that convert at the highest rates.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-teal-600 transition-colors"
            >
              Get a free local SEO audit
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
            Local search is won across six interconnected disciplines. We cover all of them.
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
              <h2 className="text-3xl font-bold text-brand-navy mb-6">What you receive monthly</h2>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Google Business Profile management & posting",
                  "Citation audit, build, and ongoing cleanup",
                  "Location page content and schema updates",
                  "Review monitoring and response guidance",
                  "Monthly local rankings report",
                  "Dedicated account manager and strategy call",
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
                Typical time to results
              </p>
              <p className="text-brand-navy text-2xl font-bold mb-4">6–10 weeks</p>
              <p className="text-gray-600">
                Initial GBP improvements are often visible within 6–10 weeks. Sustained local pack
                dominance builds over 3–6 months of consistent optimisation.
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
            Ready to own your local search results?
          </h2>
          <p className="mt-4 text-gray-600">
            Tell us your location and target area and we&apos;ll show you exactly where the
            opportunity is.
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
