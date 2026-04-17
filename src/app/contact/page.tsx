import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Contact | NetTrackers",
  description:
    "Get in touch with NetTrackers — London SEO and programming agency. We'll respond within one business day.",
};

const expectations = [
  {
    title: "Reply within 1 day",
    body: "Every enquiry gets a personal response from a senior team member — usually within a few hours.",
  },
  {
    title: "Free opportunity audit",
    body: "We'll review your site and send a short breakdown of the biggest search opportunities, free.",
  },
  {
    title: "No hard sell",
    body: "If we're not the right fit, we'll say so — and point you somewhere that is. Straightforward, always.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0ece4]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.015em] text-[#1a1a1a] max-w-3xl">
            Tell us about{" "}
            <em className="italic font-normal">your search challenge</em>
          </h1>
          <p className="mt-6 text-[17px] text-gray-600 leading-[1.65] max-w-2xl">
            The more you share, the sharper our reply. Whether it&apos;s an audit, a retainer, or
            a full rebuild — we&apos;ll come back with a clear path forward.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {expectations.map((e) => (
              <div key={e.title}>
                <h2 className="font-serif text-lg text-[#1A1A1A] mb-2">{e.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <ErrorBoundary>
            <ContactForm />
          </ErrorBoundary>

          <p className="mt-8 text-sm text-gray-600 text-center">
            Or email us directly at{" "}
            <a href="mailto:hello@nettrackers.co.uk" className="text-brand-teal hover:underline">
              hello@nettrackers.co.uk
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
