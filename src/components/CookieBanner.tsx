"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent";
type Consent = "accepted" | "rejected";

export function CookieBanner({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as Consent | null;
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
    setVisible(false);
  };

  return (
    <>
      {consent === "accepted" && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}</Script>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-navy text-white px-6 py-5 shadow-2xl md:flex md:items-center md:gap-6"
        >
          <p className="text-sm text-gray-300 flex-1 mb-4 md:mb-0">
            We use cookies to analyse site traffic and improve your experience.{" "}
            <Link href="/privacy" className="underline text-brand-teal hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={reject}
              className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={accept}
              className="rounded-lg bg-brand-teal px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
