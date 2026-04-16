"use client";

import { useState } from "react";
import { trackContactFormSubmit } from "@/lib/analytics";

const SERVICES = ["SEO Audit", "SEO Retainer", "Web Development", "Other"] as const;

type Status = "idle" | "submitting" | "success" | "error";

interface DebugInfo {
  payload: Record<string, string>;
  httpStatus: number;
  responseBody: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [debug, setDebug] = useState<DebugInfo | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    setDebug(null);

    const form = e.currentTarget;
    // Clear honeypot before reading — browser autofill sometimes fills hidden
    // off-screen fields, which triggers the bot-detection check on the server.
    const hp = form.querySelector<HTMLInputElement>('input[name="_hp"]');
    if (hp) hp.value = "";

    const data = Object.fromEntries(
      Object.entries(Object.fromEntries(new FormData(form))).filter(([, v]) => v !== "")
    ) as Record<string, string>;

    let httpStatus = 0;
    let responseBody = "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      httpStatus = res.status;
      responseBody = await res.text();

      setDebug({ payload: data, httpStatus, responseBody });

      if (!res.ok) {
        let errMsg = "Something went wrong";
        try { errMsg = JSON.parse(responseBody).error ?? errMsg; } catch {}
        throw new Error(errMsg);
      }

      trackContactFormSubmit();
      setStatus("success");
    } catch (err) {
      setDebug((d) => d ?? { payload: data, httpStatus, responseBody });
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input id="company" name="company" type="text" className={inputClass} placeholder="Acme Ltd" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service interest</label>
          <select id="service" name="service" className={`${inputClass} bg-white`}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-none`} placeholder="Tell us about your project…" />
      </div>

      {/* ── DEBUG PANEL — remove once form is confirmed working ── */}
      {debug && (
        <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-xs font-mono space-y-2">
          <p className="font-bold text-yellow-800">DEBUG — what was sent / received</p>
          <p><span className="text-yellow-700">HTTP status:</span> <strong className={debug.httpStatus === 200 ? "text-green-700" : "text-red-700"}>{debug.httpStatus}</strong></p>
          <p><span className="text-yellow-700">Response body:</span> {debug.responseBody}</p>
          <p><span className="text-yellow-700">Payload sent:</span></p>
          <pre className="whitespace-pre-wrap break-all text-gray-700">{JSON.stringify(debug.payload, null, 2)}</pre>
        </div>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg || "Something went wrong. Please try again or email us directly."}
        </p>
      )}

      {status === "success" && (
        <div className="rounded-2xl bg-teal-50 border border-teal-200 px-8 py-8 text-center space-y-2">
          <div className="text-3xl">✓</div>
          <p className="font-bold text-brand-navy">Message received</p>
          <p className="text-gray-600 text-sm">We&apos;ll get back to you within one business day.</p>
        </div>
      )}

      {status !== "success" && (
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-brand-teal py-3 font-semibold text-white hover:bg-teal-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      )}
    </form>
  );
}
