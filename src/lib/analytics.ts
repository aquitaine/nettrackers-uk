import { sendGAEvent } from "@next/third-parties/google";

export function trackContactFormSubmit() {
  sendGAEvent("event", "generate_lead", {
    event_category: "Contact",
    event_label: "Contact Form Submission",
  });
}

export function trackCtaClick(label: string) {
  sendGAEvent("event", "cta_click", {
    event_category: "Engagement",
    event_label: label,
  });
}
