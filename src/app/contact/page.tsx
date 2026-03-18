import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";

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

      <ErrorBoundary>
        <ContactForm />
      </ErrorBoundary>

      <p className="mt-8 text-sm text-gray-600 text-center">
        Or email us directly at{" "}
        <a href="mailto:hello@bessdamm.com" className="text-brand-teal hover:underline">
          hello@bessdamm.com
        </a>
      </p>
    </div>
  );
}
