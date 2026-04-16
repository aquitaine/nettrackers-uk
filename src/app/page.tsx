import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";
import { HeroBackground } from "@/components/HeroBackground";

const testimonials = [
  {
    quote:
      "Bess Damm rebuilt our technical SEO foundation from the ground up. Organic traffic more than doubled in six months and we now rank for terms our competitors have owned for years.",
    author: "Head of Growth",
    role: "Series A FinTech",
    company: "London",
  },
  {
    quote:
      "We went from relying entirely on referrals to getting qualified enquiries through Google every week. The website they built is the best investment we've made in years.",
    author: "Managing Partner",
    role: "Boutique Law Firm",
    company: "London",
  },
  {
    quote:
      "They didn't just do SEO — they built us tooling, reported on what actually mattered, and helped us make better product decisions based on search data. True extension of our team.",
    author: "VP Marketing",
    role: "B2B SaaS",
    company: "London",
  },
];

export const metadata: Metadata = {
  title: "Bess Damm | SEO & Programming Agency London",
  description:
    "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#F2EFE9] overflow-hidden" style={{ minHeight: "calc(100vh - 72px)" }}>

        {/* Cityscape — full bleed, heavily desaturated and faded */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-home.webp"
            alt=""
            fill
            className="object-cover object-center opacity-[0.14] saturate-0"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Left-to-right fade keeps the copy zone clean */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #F2EFE9 38%, rgba(242,239,233,0.72) 62%, rgba(242,239,233,0.18) 100%)",
          }}
        />

        {/* Animated network lines */}
        <HeroBackground />

        {/* Thin teal left-rail accent */}
        <div className="absolute left-[max(calc(50%-38rem),24px)] top-16 bottom-16 w-px bg-brand-teal/20 hidden md:block" />

        {/* ── Copy block ────────────────────────────────── */}
        <div
          className="relative mx-auto max-w-6xl px-6 flex flex-col justify-center"
          style={{ minHeight: "inherit", paddingTop: "6rem", paddingBottom: "5rem" }}
        >
          <div className="max-w-[640px]">

            {/* Eyebrow */}
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-7"
              style={{ animation: "fadeIn 0.7s ease both", animationDelay: "0.1s" }}
            >
              Islington SEO Consultancy
            </p>

            {/* Headline */}
            <h1
              className="font-serif text-[3rem] md:text-[3.75rem] leading-[1.06] tracking-[-0.02em] text-[#1A1A1A] mb-7"
              style={{ animation: "fadeInUp 0.85s ease both", animationDelay: "0.25s" }}
            >
              Search authority for<br />
              London businesses<br />
              with global ambition
            </h1>

            {/* Supporting paragraph */}
            <p
              className="text-[1.0625rem] text-gray-500 leading-[1.7] max-w-[460px] mb-10"
              style={{ animation: "fadeInUp 0.85s ease both", animationDelay: "0.45s" }}
            >
              We help ambitious businesses improve visibility, strengthen
              authority, and turn search into sustained commercial growth
              through strategic SEO and bespoke web tooling.
            </p>

            {/* CTA row */}
            <div
              className="flex flex-wrap gap-4 mb-10"
              style={{ animation: "fadeInUp 0.85s ease both", animationDelay: "0.6s" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-brand-teal px-7 py-3.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/10"
              >
                Request a Proposal
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#1A1A1A] hover:bg-white/90 transition-colors backdrop-blur-sm"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust cue row */}
            <div
              className="flex flex-wrap items-center gap-y-2 text-[13px] text-gray-400"
              style={{ animation: "fadeIn 1s ease both", animationDelay: "0.8s" }}
            >
              {[
                "Local SEO",
                "Technical SEO",
                "Content Strategy",
                "Growth-Focused Consultancy",
              ].map((tag, i, arr) => (
                <span key={tag} className="flex items-center">
                  <span>{tag}</span>
                  {i < arr.length - 1 && (
                    <span className="mx-3 text-brand-teal/40 select-none">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Proof strip ──────────────────────────────── */}
        <div className="relative border-t border-gray-200/60 bg-white/55 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-baseline gap-2.5">
              <span className="text-[1.4rem] font-bold text-brand-teal">+184%</span>
              <span className="text-sm text-gray-500">Organic Traffic</span>
            </div>
            <div className="hidden sm:block h-5 w-px bg-gray-200" />
            <div className="flex items-baseline gap-2.5">
              <span className="text-[1.4rem] font-bold text-[#1A1A1A]">3×</span>
              <span className="text-sm text-gray-500">Lead Volume Growth</span>
            </div>
            <div className="hidden sm:block h-5 w-px bg-gray-200" />
            <div className="flex items-baseline gap-2.5">
              <span className="text-[1.4rem] font-bold text-brand-teal">Top&nbsp;3</span>
              <span className="text-sm text-gray-500">Page-One Ranking Gains</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we do ───────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-3">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] max-w-lg leading-tight">
              Everything your search presence needs to grow
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Technical SEO",
                description:
                  "Deep-crawl audits, Core Web Vitals fixes, schema markup, and ongoing rank tracking so Google rewards your site.",
                image: "/images/service-seo-audit.webp",
                alt: "SEO audit illustration",
                href: "/services",
              },
              {
                number: "02",
                title: "Web Development",
                description:
                  "Fast, accessible Next.js sites and web apps — built to load in under 2 s and convert visitors into clients.",
                image: "/images/service-web-dev.webp",
                alt: "Web development illustration",
                href: "/services/web-development",
              },
              {
                number: "03",
                title: "SEO Tooling",
                description:
                  "Custom dashboards, audit automation, and GSC/GA4 integrations that give you data without the spreadsheet wrangling.",
                image: "/images/service-seo-tooling.webp",
                alt: "SEO tooling dashboard illustration",
                href: "/services",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl bg-[#F8F7F4] border border-gray-100 p-8 flex flex-col hover:border-brand-teal/30 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-semibold tracking-widest text-gray-300">
                    {item.number}
                  </span>
                  <div className="rounded-xl overflow-hidden bg-white flex items-center justify-center h-14 w-14 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={48}
                      height={48}
                      className="object-contain h-10 w-10"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3 group-hover:text-brand-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed flex-1">{item.description}</p>
                <div className="mt-6 text-[13px] font-semibold text-brand-teal flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <Testimonials testimonials={testimonials} />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EFE9] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            Get Started
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-5 leading-tight">
            Ready to own your search presence?
          </h2>
          <p className="text-gray-500 text-[1.0625rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your business and we&apos;ll come back with a clear picture
            of the opportunity — within one working day, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/10 text-sm"
          >
            Request a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
