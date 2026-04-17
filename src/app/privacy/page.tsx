import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NetTrackers privacy policy — how we collect, use, and protect your data.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | NetTrackers",
    description: "NetTrackers privacy policy — how we collect, use, and protect your data.",
    url: "https://nettrackers.co.uk/privacy",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630, alt: "NetTrackers" }],
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-10">Last updated: 18 March 2026</p>

      <div className="prose prose-gray max-w-none prose-headings:text-brand-navy prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline">
        <h2>Who we are</h2>
        <p>
          NetTrackers is an SEO and programming agency based in London, UK. Our website address is{" "}
          <a href="https://nettrackers.co.uk">nettrackers.co.uk</a>. You can contact us at{" "}
          <a href="mailto:hello@nettrackers.co.uk">hello@nettrackers.co.uk</a>.
        </p>

        <h2>What data we collect</h2>
        <h3>Contact form</h3>
        <p>
          When you submit our contact form we collect your name, email address, company name
          (optional), and your message. We use this information solely to respond to your enquiry.
          We do not add you to any marketing list without your explicit consent.
        </p>

        <h3>Analytics cookies (with consent only)</h3>
        <p>
          If you accept cookies, we use Google Analytics 4 (GA4) to collect anonymised data about
          how visitors use our site — pages visited, time on site, and traffic sources. This helps
          us improve content and user experience. GA4 operates under Google&apos;s{" "}
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
            Privacy Policy
          </a>
          .
        </p>
        <p>
          No analytics cookies are set if you choose &ldquo;Reject&rdquo; on our cookie banner.
          You can change your preference at any time by clearing your browser&apos;s local storage
          for this site.
        </p>

        <h2>Legal basis for processing (UK GDPR)</h2>
        <ul>
          <li>
            <strong>Contact form data</strong> — legitimate interest (responding to a direct
            enquiry you initiated).
          </li>
          <li>
            <strong>Analytics data</strong> — consent (you must opt in via the cookie banner).
          </li>
        </ul>

        <h2>How long we keep your data</h2>
        <p>
          Contact form submissions are retained for up to 24 months, after which they are deleted.
          Analytics data is retained in Google Analytics for 14 months (our default GA4 setting).
        </p>

        <h2>Who we share data with</h2>
        <p>
          We do not sell or rent your data. We share data only with the following processors, each
          operating under their own privacy frameworks:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — anonymised site usage data (consent-gated).
          </li>
          <li>
            <strong>Vercel</strong> — our hosting provider, which processes request logs in the
            normal course of serving the site.
          </li>
        </ul>

        <h2>Your rights</h2>
        <p>Under UK GDPR you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Object to or restrict processing.</li>
          <li>Lodge a complaint with the ICO (<a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">ico.org.uk</a>).</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href="mailto:hello@nettrackers.co.uk">hello@nettrackers.co.uk</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          We use a single first-party localStorage value (<code>cookie_consent</code>) to remember
          your cookie preference. This is not a tracking cookie. Analytics cookies are only set by
          Google Analytics when you have given consent.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
          top of this page reflects the most recent revision.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-sm text-brand-teal hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
