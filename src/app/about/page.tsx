import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | NetTrackers",
  description:
    "NetTrackers is a London SEO and programming agency. Meet the team behind the strategy and code.",
};

const principles = [
  {
    title: "Search is an engineering problem",
    body: "Most SEO problems are technical. We bring developers, data, and custom tooling to a discipline that too often stops at spreadsheets.",
  },
  {
    title: "Numbers, not opinions",
    body: "Every recommendation ties back to traffic, rankings, or revenue. If we can't measure it, we don't promise it.",
  },
  {
    title: "A small team, fully invested",
    body: "We take on a limited number of clients. Every engagement has a senior lead — not a junior wearing a headset in a call centre.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0ece4]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            About
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.015em] text-[#1a1a1a] max-w-3xl">
            A London agency built at the intersection of{" "}
            <em className="italic font-normal">search and engineering</em>
          </h1>
          <p className="mt-6 text-[17px] text-gray-600 leading-[1.65] max-w-2xl">
            Deep technical knowledge, genuine craft, and a small team that stays close to every
            project.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
                Our story
              </p>
              <h2 className="font-serif text-3xl text-[#1A1A1A] mb-6 leading-tight">
                Why NetTrackers exists
              </h2>
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-5">
                <p>
                  NetTrackers was founded on a single belief: the best search results come from
                  combining deep technical knowledge with genuine craft — not from template
                  checklists or cookie-cutter retainers.
                </p>
                <p>
                  We work with growth-stage companies and established brands who want more from
                  their digital presence. Not just more traffic, but the right traffic that
                  converts. Our work sits at the intersection of search strategy and software
                  engineering, which means we spot problems that generalist agencies miss and build
                  the tools to fix them.
                </p>
                <p>
                  Based in Islington, we operate across London, the UK, and internationally — with
                  a small team that stays close to every project.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-brand-light">
              <Image
                src="/images/about-team.webp"
                alt="The NetTrackers team collaborating"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-3">
              How we work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
              Three principles that shape every engagement
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
              >
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EFE9] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-5 leading-tight">
            Let&apos;s build something worth ranking
          </h2>
          <p className="text-gray-500 text-[1.0625rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your business and we&apos;ll come back with a clear picture of the
            opportunity — within one working day, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-teal-700 transition-colors shadow-md shadow-teal-900/10 text-sm"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
