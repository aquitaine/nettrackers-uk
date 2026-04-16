"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { trackContactFormSubmit } from "@/lib/analytics";

const SERVICES = ["SEO Audit", "SEO Retainer", "Web Development", "Other"] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMsg("Security check not ready yet — please wait a moment and try again.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    // Strip empty strings so optional fields don't fail Zod enum validation,
    // then inject the Turnstile token captured via onSuccess callback
    const data = {
      ...Object.fromEntries(Object.entries(raw).filter(([, v]) => v !== "")),
      "cf-turnstile-response": turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        // Reset Turnstile so user can try again
        turnstileRef.current?.reset();
        throw new Error(body.error ?? "Something went wrong");
      }

      trackContactFormSubmit();
      setStatus("success");
    } catch (err) {
      turnstileRef.current?.reset();
      setTurnstileToken(null);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-teal-50 border border-teal-200 px-8 py-12 text-center space-y-3">
        <div className="text-4xl">✓</div>
        <h2 className="text-xl font-bold text-brand-navy">Message received</h2>
        <p className="text-gray-600">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className={inputClass}
            placeholder="Acme Ltd"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service interest
          </label>
          <select id="service" name="service" className={`${inputClass} bg-white`}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project…"
        />
      </div>

      {/* Turnstile — captures token in state via onSuccess, not via FormData */}
      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        options={{ appearance: "interaction-only" }}
        onSuccess={(token) => setTurnstileToken(token)}
        onExpire={() => setTurnstileToken(null)}
        onError={() => setTurnstileToken(null)}
      />

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg || "Something went wrong. Please try again or email us directly."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-brand-teal py-3 font-semibold text-white hover:bg-teal-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
