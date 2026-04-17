import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { Testimonials } from "@/components/Testimonials";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const testimonial = [
  {
    quote:
      "NetTrackers took over our Google Ads account and cut our cost per lead in half within eight weeks. Same budget, twice the pipeline — it's the fastest commercial lift we've seen from any agency.",
    author: "Commercial Director",
    role: "Professional Services Firm",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "PPC & Google Ads Management | NetTrackers",
  description:
    "Google Ads and paid search management for UK businesses. Lower CPLs, higher quality traffic, and transparent reporting — run by an SEO-first agency.",
  openGraph: {
    title: "PPC & Google Ads Management | NetTrackers",
    description:
      "Google Ads and paid search management for UK businesses. Lower CPLs, higher quality traffic, transparent reporting.",
    url: "https://nettrackers.co.uk/services/ppc",
  },
};

const whatIsIncluded = [
  {
    heading: "Account audit & restructure",
    body: "We audit your existing account for wasted spend, weak match-type strategy, and missing negatives — then restructure campaigns so every click has a job.",
  },
  {
    heading: "Campaign build & launch",
    body: "New account? We build tight, themed campaigns from the ground up — Search, Performance Max, Display, and YouTube where they fit your funnel.",
  },
  {
    heading: "Bid strategy & budget pacing",
    body: "Smart bidding is only smart with the right signals. We feed conversion data, calibrate target CPAs, and pace budget to maximise qualified volume.",
  },
  {
    heading: "Ad copy & creative",
    body: "Responsive search ads that actually respond. We write and test ad copy variants monthly, and brief creative for display and video where it matters.",
  },
  {
    heading: "Landing page CRO",
    body: "PPC works only if the landing page converts. We audit destinations, recommend improvements, and can build dedicated landing pages that lift conversion rates.",
  },
  {
    heading: "Reporting & insights",
    body: "Monthly reporting on what drove results, what didn't, and what we're testing next. No vanity metrics — just spend, leads, CPL, and revenue.",
  },
];

const faqs = [
  {
    question: "Do I need a minimum ad spend to work with you?",
    answer:
      "Our retainer fees start at £950/mo, and we recommend a minimum ad spend of £2,000/mo to give campaigns enough signal to optimise properly. Below that, paid search is unlikely to compound in your favour.",
  },
  {
    question: "How is this different from using a freelancer or in-house manager?",
    answer:
      "We bring SEO-trained eyes to paid. That means landing page quality, conversion tracking, and attribution get treated as first-class concerns — not afterthoughts. It also means every £ you spend on paid feeds insight back into your organic strategy.",
  },
  {
    question: "What platforms do you manage?",
    answer:
      "Google Ads (Search, Performance Max, Display, YouTube) and Microsoft Ads as primary platforms. We also run Meta and LinkedIn campaigns for clients where those channels materially move the needle.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Google Ads can generate leads within days of launch, but meaningful optimisation takes 6–8 weeks as algorithms learn and data accumulates. Expect noticeable CPL improvements by month two and compounding gains thereafter.",
  },
  {
    question: "Will you share my account access?",
    answer:
      "Always. You own the Google Ads account — we're granted access as managers. If we ever part ways, you keep everything: campaigns, data, landing pages, and learnings.",
  },
  {
    question: "Can you handle Shopping and e-commerce feeds?",
    answer:
      "Yes. Merchant Center setup, product feed optimisation, and Performance Max / Shopping campaign management are all in scope. We've run feeds for Shopify, WooCommerce, and custom catalogues.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "£950/mo",
    description: "Single Google Ads account, up to £5k/mo spend. Includes monthly optimisation and reporting.",
  },
  {
    name: "Growth",
    price: "£1,800/mo",
    description: "Up to £25k/mo spend across Search + Performance Max. Weekly optimisation, ad copy testing.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Multi-account, multi-region, or spend > £25k/mo. Full strategic partnership. Let's scope it.",
  },
];

export default function PpcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PPC & Google Ads Management",
    provider: {
      "@type": "ProfessionalService",
      name: "NetTrackers",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    description:
      "Google Ads and paid search management for UK businesses — campaign build, bid strategy, ad copy, landing page CRO, and transparent reporting.",
    areaServed: "United Kingdom",
    url: "https://nettrackers.co.uk/services/ppc",
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
          { name: "PPC", href: "/services/ppc" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#f0ece4]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            Service · PPC & Google Ads
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.015em] text-[#1a1a1a] max-w-3xl">
            Paid search that pays back{" "}
            <em className="italic font-normal">every pound you put in</em>
          </h1>
          <p className="mt-6 text-[17px] text-gray-600 leading-[1.65] max-w-2xl">
            We run Google Ads accounts for UK businesses that want fewer wasted clicks, lower cost
            per lead, and reporting that actually ties back to revenue — not impressions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-brand-teal px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/15"
            >
              Get a free PPC audit
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white/80 px-7 py-3.5 text-[15px] font-semibold text-[#1a1a1a] hover:bg-white transition-colors backdrop-blur-sm"
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
            Everything required to turn a Google Ads account into a predictable revenue channel.
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

      {/* How we work */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">How we work</h2>
              <ul className="space-y-4 text-gray-600">
                {[
                  "Account audit and conversion tracking sanity check",
                  "Campaign restructure or ground-up build",
                  "Keyword, audience, and negative keyword strategy",
                  "Ad copy and creative production",
                  "Landing page recommendations — or custom builds",
                  "Weekly optimisation, monthly strategy call & report",
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
                Typical time to meaningful gains
              </p>
              <p className="text-brand-navy text-2xl font-bold mb-4">6–8 weeks</p>
              <p className="text-gray-600">
                Leads can arrive in week one, but real CPL improvements show up once algorithms
                have enough conversion data to optimise against. We target a measurable lift by
                month two.
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
            Ready to stop wasting ad spend?
          </h2>
          <p className="mt-4 text-gray-600">
            Share your account and we&apos;ll show you exactly where the leaks are — free, no
            obligation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-600 transition-colors"
          >
            Book a free PPC audit
          </Link>
        </div>
      </section>
    </>
  );
}
