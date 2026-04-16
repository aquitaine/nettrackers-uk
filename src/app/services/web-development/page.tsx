import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { Testimonials } from "@/components/Testimonials";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const testimonial = [
  {
    quote:
      "We went from relying entirely on referrals to getting qualified enquiries through Google every week. The website NetTrackers built is the best investment we've made in years.",
    author: "Managing Partner",
    role: "Boutique Law Firm",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "Web Development Services London",
  description:
    "Custom Next.js websites and web apps built for speed, accessibility, and conversions. London web development agency — from landing pages to full product builds.",
  openGraph: {
    title: "Web Development Services | NetTrackers",
    description:
      "Custom Next.js websites and web apps built for speed, accessibility, and conversions.",
    url: "https://nettrackers.co.uk/services/web-development",
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

const faqs = [
  {
    question: "Do you only build with Next.js?",
    answer:
      "Next.js is our default for all marketing sites and content-heavy builds. For certain use cases — pure SPAs, internal tools, or clients with existing stacks — we'll use the right tool. We'll always recommend what makes sense for your project, not what's convenient for us.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "A landing page takes 2–3 weeks. A brochure site typically 6–10 weeks from signed brief to launch. Web applications vary by complexity — we'll give you a milestone plan before you commit. We don't pad timelines.",
  },
  {
    question: "What's included in the price?",
    answer:
      "All projects include design review, responsive build, SEO technical setup (metadata, sitemap, schema, robots.txt), analytics integration, CMS configuration, Vercel deployment, and a 30-day post-launch support window. No surprise costs.",
  },
  {
    question: "Can you redesign our existing site rather than start from scratch?",
    answer:
      "Yes — we do both greenfield builds and redesigns/rebuilds of existing sites. If you have content, branding, and a site that works but is slow or outdated, a rebuild is often faster and less risky than starting from zero.",
  },
  {
    question: "Will we be able to update the content ourselves?",
    answer:
      "Absolutely. All brochure sites and web apps include a headless CMS (typically Sanity or MDX, depending on complexity) so your team can update pages, blog posts, and structured content without touching code.",
  },
  {
    question: "Do you guarantee Lighthouse scores?",
    answer:
      "We target 90+ Lighthouse performance on all projects and include it in our definition of done. If a page doesn't hit that threshold at launch, we fix it before closing the project — no extra charge.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "All projects include 30 days of post-launch support for bug fixes and minor content changes. After that, we offer monthly maintenance retainers or can hand the site over to your team with full documentation.",
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
      name: "NetTrackers",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    description:
      "Custom Next.js websites and web apps built for speed, accessibility, and conversions.",
    areaServed: "London",
    url: "https://nettrackers.co.uk/services/web-development",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/services" }, { name: "Web Development", href: "/services/web-development" }]} />

      {/* Hero */}
      <section className="bg-[#f0ece4]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            Service · Web Development
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.015em] text-[#1a1a1a] max-w-3xl">
            Websites that load fast, rank high,{" "}
            <em className="italic font-normal">and convert visitors</em>
          </h1>
          <p className="mt-6 text-[17px] text-gray-600 leading-[1.65] max-w-2xl">
            We build custom Next.js sites and web apps with performance and SEO at the core —
            not bolted on at the end. From a focused landing page to a full product build.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-brand-teal px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/15"
            >
              Discuss your project
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
          <p className="text-center text-sm text-gray-600 mt-6">
            All projects include design review, SEO setup, and a 30-day post-launch support window.
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
