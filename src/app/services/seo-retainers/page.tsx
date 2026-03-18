import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { Testimonials } from "@/components/Testimonials";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const testimonial = [
  {
    quote:
      "Bess Damm became a true extension of our marketing team. They didn't just do SEO — they built us tooling, reported on what actually mattered, and helped us make better product decisions based on search data.",
    author: "VP Marketing",
    role: "B2B SaaS Company",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "SEO Retainer Services London",
  description:
    "Monthly SEO management for London businesses. Ongoing strategy, content briefs, rank tracking, and reporting — so you stay ahead of algorithm changes.",
  openGraph: {
    title: "SEO Retainer Services | Bess Damm",
    description:
      "Monthly SEO management: strategy, content, rank tracking, reporting. Stay ahead of algorithm changes.",
    url: "https://bessdamm.com/services/seo-retainers",
  },
};

const whatIsIncluded = [
  {
    heading: "Monthly strategy session",
    body: "A 60-minute call each month to review performance, set priorities, and align SEO work with your business goals.",
  },
  {
    heading: "Content briefs & optimisation",
    body: "Keyword research, content gap analysis, and fully written briefs your team or writers can execute immediately.",
  },
  {
    heading: "Rank tracking & reporting",
    body: "Weekly rank snapshots and a monthly dashboard covering impressions, clicks, position changes, and conversion impact.",
  },
  {
    heading: "Technical health monitoring",
    body: "Ongoing crawl monitoring so regressions — new 404s, dropped pages, Core Web Vitals dips — get caught before Google does.",
  },
  {
    heading: "Link building",
    body: "Proactive outreach and digital PR to earn high-authority backlinks that move domain authority over time.",
  },
  {
    heading: "Algorithm update response",
    body: "When Google updates, we assess impact within 48 hours and adjust strategy before traffic has time to slip.",
  },
];

const faqs = [
  {
    question: "How quickly will I see results from an SEO retainer?",
    answer:
      "Technical fixes and quick wins typically show impact within 4–8 weeks. Meaningful keyword ranking improvements usually appear in 3–6 months. Content-driven growth compounds over 6–12 months. We set realistic expectations at kickoff with a milestone timeline.",
  },
  {
    question: "What is the minimum commitment?",
    answer:
      "We ask for a 3-month minimum to give SEO time to work — meaningful results require consistency. After 3 months you can cancel with 30 days notice.",
  },
  {
    question: "Do I need to have done an SEO audit first?",
    answer:
      "Not necessarily — all retainers start with a baseline audit in Month 1. If you've already had a recent audit from us, we'll skip straight to strategy.",
  },
  {
    question: "Will you write the content or just brief it?",
    answer:
      "It depends on your plan. Essential includes one content brief per month (you write or commission it). Growth includes four fully written briefs. Scale includes unlimited briefs and can include written content. We can always add content writing to any plan.",
  },
  {
    question: "How do you report on progress?",
    answer:
      "You receive a weekly rank snapshot and a monthly dashboard report covering organic impressions, clicks, position changes, traffic trends, and conversion attribution. We also do a monthly call to walk through the numbers together.",
  },
  {
    question: "Can I pause or change plans?",
    answer:
      "You can upgrade plans with 7 days notice. Pausing is available once per year for up to 4 weeks. We don't offer downgrades mid-contract but will discuss at renewal.",
  },
  {
    question: "Do you work with our in-house team?",
    answer:
      "Yes — most clients have internal marketers or developers. We work as an extension of your team: providing strategy, briefs, and technical direction while your team handles execution where it makes sense.",
  },
];

const plans = [
  {
    name: "Essential",
    price: "£1,500",
    period: "/mo",
    description:
      "Rank tracking, monthly reporting, technical monitoring, and one content brief per month.",
    highlight: false,
  },
  {
    name: "Growth",
    price: "£3,000",
    period: "/mo",
    description:
      "Everything in Essential plus four content briefs, proactive link building, and weekly check-ins.",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description:
      "Dedicated SEO lead, unlimited briefs, full technical dev support, and bespoke tooling.",
    highlight: false,
  },
];

export default function SeoRetainersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Retainer",
    provider: {
      "@type": "ProfessionalService",
      name: "Bess Damm",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    description:
      "Monthly SEO management including strategy, content briefs, rank tracking, and algorithm response.",
    areaServed: "London",
    url: "https://bessdamm.com/services/seo-retainers",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/services" }, { name: "SEO Retainers", href: "/services/seo-retainers" }]} />

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-4">
            Service · SEO Retainers
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Consistent SEO that compounds — month after month
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            Search is not a one-time fix. Our retainer keeps your site optimised, your content
            targeted, and your rankings climbing — while you focus on running your business.
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

      {/* What's included */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-4">
            What&apos;s included every month
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            A full-service SEO partnership — not just a report drop. Every retainer includes
            strategy, execution, and clear measurement.
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
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Onboarding audit", body: "We start with a baseline technical audit so we know exactly where you stand." },
              { step: "02", title: "90-day plan", body: "A prioritised roadmap of quick wins and long-term plays, agreed at kickoff." },
              { step: "03", title: "Monthly execution", body: "We work on briefs, fixes, and links while you receive weekly rank updates." },
              { step: "04", title: "Review & adjust", body: "Monthly call to review results, recalibrate priorities, and plan the next sprint." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <p className="text-4xl font-extrabold text-brand-teal/30 mb-3">{s.step}</p>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${
                  plan.highlight
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                <p
                  className={`font-semibold text-sm uppercase tracking-widest mb-2 ${
                    plan.highlight ? "text-brand-teal" : "text-brand-teal"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`text-3xl font-extrabold mb-1 ${
                    plan.highlight ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {plan.price}
                  <span className="text-base font-normal opacity-70">{plan.period}</span>
                </p>
                <p
                  className={`mt-4 leading-relaxed ${
                    plan.highlight ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Minimum 3-month commitment. Cancel with 30 days notice after that.
          </p>
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
            Let&apos;s grow your organic traffic together
          </h2>
          <p className="mt-4 text-gray-600">
            Tell us where you are and where you want to be — we&apos;ll recommend the right plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-600 transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
