import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technical SEO audits, monthly SEO retainers, and web development for London businesses ready to grow.",
};

const services = [
  {
    title: "SEO Audits",
    href: "/services/seo-audits",
    description:
      "A full crawl of your site, identifying indexing issues, Core Web Vitals failures, broken links, and schema gaps — with a prioritised fix list.",
    cta: "See what's included →",
  },
  {
    title: "SEO Retainers",
    href: "/services/seo-retainers",
    description:
      "Monthly strategy, content briefs, rank tracking, and reporting so you stay ahead of algorithm changes.",
    cta: "View retainer plans →",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Next.js sites and web apps built for speed, accessibility, and conversions. From landing pages to full product builds.",
    cta: "Explore our stack →",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-brand-navy mb-4">Services</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-16">
        Everything you need to rank higher, convert better, and ship faster.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group rounded-2xl border border-gray-100 bg-brand-light p-8 hover:border-brand-teal/40 hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
              {s.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
            <p className="text-brand-teal text-sm font-semibold">{s.cta}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-600 transition-colors"
        >
          Talk to us about your project
        </Link>
      </div>
    </div>
  );
}
