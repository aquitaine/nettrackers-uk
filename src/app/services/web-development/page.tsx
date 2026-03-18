import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services London",
  description:
    "Custom Next.js websites and web apps built for speed, accessibility, and conversions. London web development agency — from landing pages to full product builds.",
  openGraph: {
    title: "Web Development Services | Bess Damm",
    description:
      "Custom Next.js websites and web apps built for speed, accessibility, and conversions.",
    url: "https://bessdamm.com/services/web-development",
  },
};

const whatIsIncluded = [
  {
    heading: "Next.js & React",
    body: "Every build uses Next.js App Router — server components, edge rendering, and built-in image optimisation out of the box.",
  },
  {
    heading: "Performance-first",
    body: "We target 90+ Lighthouse scores and sub-2-second LCP on mobile. Fast pages rank better and convert more.",
  },
  {
    heading: "SEO baked in",
    body: "Metadata, structured data, sitemap, robots.txt, and canonical handling set up correctly from day one.",
  },
  {
    heading: "Accessible by default",
    body: "WCAG 2.1 AA compliance as standard — semantic HTML, keyboard navigation, ARIA where needed.",
  },
  {
    heading: "CMS integration",
    body: "Headless CMS (Sanity, Contentful, or MDX) so your team can update content without touching code.",
  },
  {
    heading: "Vercel deployment",
    body: "CI/CD on Vercel with preview URLs per PR, rollback in one click, and edge caching globally.",
  },
];

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Postgres / Supabase", "Sanity CMS"];

const projectTypes = [
  {
    name: "Landing page",
    price: "From £3,000",
    description: "Single-page marketing site with analytics, contact form, and full SEO setup.",
  },
  {
    name: "Brochure site",
    price: "From £6,000",
    description: "5–15 page website with CMS, blog, and conversion-optimised design.",
  },
  {
    name: "Web application",
    price: "Custom",
    description: "Full-stack product builds with auth, database, and custom business logic.",
  },
];

export default function WebDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development",
    provider: {
      "@type": "ProfessionalService",
      name: "Bess Damm",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    description:
      "Custom Next.js websites and web apps built for speed, accessibility, and conversions.",
    areaServed: "London",
    url: "https://bessdamm.com/services/web-development",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-4">
            Service · Web Development
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Websites that load fast, rank high, and convert visitors
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            We build custom Next.js sites and web apps with performance and SEO at the core —
            not bolted on at the end. From a focused landing page to a full product build.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-teal-600 transition-colors"
            >
              Discuss your project
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
            How we build
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Every project follows the same engineering standards — no shortcuts that create
            technical debt six months down the line.
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

      {/* Tech stack */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Our stack</h2>
              <p className="text-gray-600 mb-8">
                We use a modern, battle-tested stack that&apos;s fast to ship, easy to maintain,
                and well-supported for years to come.
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand-teal/30 bg-brand-teal/5 px-4 py-2 text-sm font-medium text-brand-navy"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Lighthouse performance score", value: "90+" },
                { label: "Largest Contentful Paint (mobile)", value: "< 2.5 s" },
                { label: "Cumulative Layout Shift", value: "< 0.1" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-brand-light border border-gray-100 p-6 flex items-center justify-between"
                >
                  <p className="text-gray-700 font-medium">{metric.label}</p>
                  <p className="text-brand-teal font-bold text-lg">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project types / pricing */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Project types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((pt) => (
              <div
                key={pt.name}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
              >
                <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-2">
                  {pt.name}
                </p>
                <p className="text-2xl font-extrabold text-brand-navy mb-4">{pt.price}</p>
                <p className="text-gray-600">{pt.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            All projects include design review, SEO setup, and a 30-day post-launch support window.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Ready to build something great?</h2>
          <p className="mt-4 text-gray-600">
            Share your brief and we&apos;ll scope the project and send a proposal within two
            business days.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-600 transition-colors"
          >
            Start your project
          </Link>
        </div>
      </section>
    </>
  );
}
