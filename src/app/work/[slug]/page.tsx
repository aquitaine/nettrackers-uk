import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudy } from "@/lib/work";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let cs;
  try {
    cs = getCaseStudy(params.slug);
  } catch {
    return {};
  }
  return {
    title: cs.title,
    description: cs.description,
    openGraph: {
      type: "article",
      title: cs.title,
      description: cs.description,
      publishedTime: cs.datePublished,
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  let cs;
  try {
    cs = getCaseStudy(params.slug);
  } catch {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.description,
    datePublished: cs.datePublished,
    author: {
      "@type": "Organization",
      name: "Bess Damm",
      url: "https://bessdamm.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Bess Damm",
      url: "https://bessdamm.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14">
        <div className="mx-auto max-w-4xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-5 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/work" className="hover:text-brand-teal transition-colors">
              Our Work
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{cs.client}</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold text-brand-teal bg-brand-teal/20 rounded-full px-3 py-1">
              {cs.industry}
            </span>
            {cs.services.map((svc) => (
              <span
                key={svc}
                className="text-xs text-gray-300 bg-white/10 rounded-full px-3 py-1"
              >
                {svc}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-3xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">{cs.description}</p>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="bg-brand-light border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl font-extrabold text-brand-teal">{m.value}</p>
                <p className="mt-1 text-sm text-gray-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-14 lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
        {/* Article body */}
        <article className="prose prose-gray max-w-none prose-headings:text-brand-navy prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:rounded prose-code:px-1 prose-table:text-sm">
          <MDXRemote source={cs.content} />
        </article>

        {/* Sidebar */}
        <aside className="mt-12 lg:mt-0 space-y-6">
          {/* Testimonial */}
          <div className="rounded-2xl bg-brand-navy text-white p-6">
            <blockquote className="text-sm leading-relaxed italic text-gray-200">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-teal/30 flex items-center justify-center text-brand-teal font-bold text-sm">
                {cs.testimonial.author[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{cs.testimonial.author}</p>
                <p className="text-xs text-gray-400">{cs.testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-brand-light border border-gray-200 p-6 text-center">
            <p className="text-sm font-semibold text-brand-navy">
              Want results like these?
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Get a free consultation — we&apos;ll come back within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block w-full rounded-lg bg-brand-teal px-4 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors text-center"
            >
              Get in touch
            </Link>
          </div>

          {/* More work */}
          <div className="rounded-2xl bg-white border border-gray-100 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              More case studies
            </p>
            <Link
              href="/work"
              className="text-sm font-semibold text-brand-teal hover:underline"
            >
              ← View all work
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
