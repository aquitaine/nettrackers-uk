import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technical SEO audits, web development, and custom SEO tooling for London businesses ready to grow.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-brand-navy mb-4">Services</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-16">
        Everything you need to rank higher, convert better, and ship faster.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Technical SEO Audits",
            description:
              "A full crawl of your site, identifying indexing issues, Core Web Vitals failures, broken links, and schema gaps — with a prioritised fix list.",
          },
          {
            title: "Ongoing SEO Management",
            description:
              "Monthly strategy, content briefs, rank tracking, and reporting so you stay ahead of algorithm changes.",
          },
          {
            title: "Web Development",
            description:
              "Next.js sites and web apps built for speed, accessibility, and conversions. From landing pages to full product builds.",
          },
          {
            title: "Custom SEO Tooling",
            description:
              "Bespoke dashboards, GSC/GA4 integrations, and automation scripts that save your team hours every week.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl border border-gray-100 bg-brand-light p-8">
            <h2 className="text-xl font-semibold text-brand-navy mb-3">{s.title}</h2>
            <p className="text-gray-600 leading-relaxed">{s.description}</p>
          </div>
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
