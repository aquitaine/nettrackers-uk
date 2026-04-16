import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";
import { HeroBackground } from "@/components/HeroBackground";

const testimonials = [
  {
    quote:
      "NetTrackers rebuilt our technical SEO foundation from the ground up. Organic traffic more than doubled in six months and we now rank for terms our competitors have owned for years.",
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
  title: "NetTrackers | SEO & Programming Agency London",
  description:
    "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
};

const trustTags = [
  "Local SEO",
  "Technical SEO",
  "Content Strategy",
  "Growth-Focused Consultancy",
];

const clients = ["Client 1", "Client 2"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col bg-[#f0ece4]"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        {/* Full-colour, full-opacity cityscape */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-home.webp"
            alt=""
            fill
            className="object-cover object-[center_35%]"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Layer 1 — upper-left text-zone wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,252,247,0.88) 0%, rgba(255,252,247,0.62) 28%, rgba(255,252,247,0.22) 52%, rgba(255,252,247,0) 72%)",
          }}
        />

        {/* Layer 2 — bottom blend into trust bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,252,247,0.75) 0%, rgba(255,252,247,0) 100%)",
          }}
        />

        {/* Constellation animation */}
        <HeroBackground />

        {/* ── Copy block ─────────────────────────────────────────────── */}
        <div className="relative flex-1 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-20 pb-10 md:pt-28 md:pb-12">
            <div className="max-w-[600px]">

              {/* Eyebrow */}
              <div
                style={{ animation: "fadeIn 0.7s ease both", animationDelay: "0.1s" }}
              >
                <p className="text-[15px] text-gray-700 mb-3 tracking-wide">
                  Islington SEO Consultancy
                </p>
                <div className="h-px w-16 bg-gray-500/40 mb-8" />
              </div>

              {/* Headline */}
              <h1
                className="font-serif text-[2.6rem] md:text-[3.6rem] lg:text-[4.1rem] leading-[1.05] tracking-[-0.015em] text-[#1a1a1a] mb-7"
                style={{ animation: "fadeInUp 0.85s ease both", animationDelay: "0.25s" }}
              >
                Search authority for Islington businesses{" "}
                <em className="italic font-normal">with London ambition</em>
              </h1>

              {/* Subtext */}
              <p
                className="text-[17px] text-gray-800 leading-[1.65] mb-10 max-w-[520px]"
                style={{ animation: "fadeInUp 0.85s ease both", animationDelay: "0.45s" }}
              >
                We help ambitious businesses improve visibility, strengthen authority,
                and turn search into sustained commercial growth through strategic SEO.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4"
                style={{ animation: "fadeInUp 0.85s ease both", animationDelay: "0.6s" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-brand-teal px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/15"
                >
                  Request a Proposal
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white/80 px-7 py-3.5 text-[15px] font-semibold text-[#1a1a1a] hover:bg-white transition-colors backdrop-blur-sm"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Trust bar ──────────────────────────────────────────────── */}
        <div
          className="relative bg-white/50 backdrop-blur-sm border-t border-white/60"
          style={{ animation: "fadeIn 1s ease both", animationDelay: "0.8s" }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-[14px] flex items-center justify-center flex-wrap gap-y-2">
            <span className="h-px w-6 bg-gray-400/50 hidden sm:block" />
            {trustTags.map((tag, i) => (
              <span key={tag} className="flex items-center">
                <span className="px-4 md:px-5 text-[13px] text-gray-700 tracking-wide">
                  {tag}
                </span>
                {i < trustTags.length - 1 && (
                  <span className="h-[14px] w-px bg-gray-400/50" />
                )}
              </span>
            ))}
            <span className="h-px w-6 bg-gray-400/50 hidden sm:block" />
          </div>
        </div>

        {/* ── Proof strip ────────────────────────────────────────────── */}
        <div
          className="relative bg-white/65 backdrop-blur-sm border-t border-white/40"
          style={{ animation: "fadeIn 1s ease both", animationDelay: "0.9s" }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">

            {/* Client logos */}
            <div className="flex items-center gap-6">
              {clients.map((name) => (
                <span
                  key={name}
                  className="flex items-center gap-2 text-[11px] tracking-[0.18em] font-semibold text-gray-400 uppercase"
                >
                  <span className="inline-block w-2.5 h-2.5 rotate-45 bg-gray-300 shrink-0" />
                  {name}
                </span>
              ))}
            </div>

            <span className="hidden sm:block h-5 w-px bg-gray-300/60" />

            <div className="flex items-baseline gap-2">
              <span className="text-[1.35rem] font-bold text-brand-teal">+184%</span>
              <span className="text-[13px] text-gray-600">Organic Traffic</span>
            </div>

            <span className="hidden sm:block h-5 w-px bg-gray-300/60" />

            <span className="text-[13px] text-gray-600">Page-One Local Ranking Gains</span>

            <span className="hidden sm:block h-5 w-px bg-gray-300/60" />

            <span className="text-[13px] text-gray-600 leading-snug text-right">
              Trusted Across<br />
              Islington &amp; London
            </span>
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
                <p className="text-[15px] text-gray-500 leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-6 text-[13px] font-semibold text-brand-teal flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
