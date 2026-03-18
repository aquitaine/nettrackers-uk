"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: FaqItem[];
  heading?: string;
}

export function FaqSection({ faqs, heading = "Frequently asked questions" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-brand-navy text-center mb-10">{heading}</h2>
        <dl className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const id = `faq-answer-${i}`;
            return (
              <div key={i}>
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-base font-semibold text-brand-navy pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 shrink-0 text-brand-teal transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={id}
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
