import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from Bess Damm — real results for London businesses. See how we've grown organic traffic, improved Core Web Vitals, and built websites that convert.",
};

export default function WorkIndexPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Results that speak for themselves
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Real projects, real numbers. Here&apos;s how we&apos;ve helped London businesses grow
            through technical SEO and bespoke web development.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-brand-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
              >
                {/* Industry + services bar */}
                <div className="bg-brand-navy/5 border-b border-gray-100 px-6 py-3 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-brand-navy bg-brand-navy/10 rounded-full px-3 py-1">
                    {cs.industry}
                  </span>
                  {cs.services.map((svc) => (
                    <span
                      key={svc}
                      className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-brand-navy leading-snug">
                    <Link
                      href={`/work/${cs.slug}`}
                      className="hover:text-brand-teal transition-colors"
                    >
                      {cs.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {cs.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {cs.metrics.slice(0, 4).map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-brand-light p-3 border border-gray-100"
                      >
                        <p className="text-xl font-extrabold text-brand-teal leading-none">
                          {m.value}
                        </p>
                        <p className="mt-1 text-xs text-gray-500 leading-snug">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial snippet */}
                  <blockquote className="mt-5 border-l-4 border-brand-teal pl-4 text-sm text-gray-600 italic leading-relaxed line-clamp-2 flex-1">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="mt-1 text-xs text-gray-400 pl-4">
                    — {cs.testimonial.author}, {cs.testimonial.role}
                  </p>

                  <Link
                    href={`/work/${cs.slug}`}
                    className="mt-5 text-sm font-semibold text-brand-teal hover:underline"
                  >
                    Read case study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">
            Ready to write your own case study?
          </h2>
          <p className="mt-4 text-gray-600">
            Tell us about your business and we&apos;ll come back within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-600 transition-colors"
          >
            Get a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
