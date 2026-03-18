import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bess Damm — London SEO and programming agency. We'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-brand-navy mb-4">Get in touch</h1>
      <p className="text-gray-600 mb-12">
        Tell us about your project and we&apos;ll come back to you within one business day.
      </p>

      {/* Static form — wire up to backend in a later task */}
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 resize-none"
            placeholder="Tell us about your project…"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-brand-teal py-3 font-semibold text-white hover:bg-teal-600 transition-colors"
        >
          Send message
        </button>
      </form>

      <p className="mt-8 text-sm text-gray-500 text-center">
        Or email us directly at{" "}
        <a href="mailto:hello@bessdamm.com" className="text-brand-teal hover:underline">
          hello@bessdamm.com
        </a>
      </p>
    </div>
  );
}
