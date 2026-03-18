import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@bessdamm.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "noreply@bessdamm.com";

const SERVICES = [
  "SEO Audit",
  "SEO Retainer",
  "Web Development",
  "Other",
] as const;

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, company, message, service, _hp } = body;

  // Honeypot check — bots fill the hidden field, humans don't
  if (_hp) {
    // Silently accept to avoid training bots
    return NextResponse.json({ ok: true });
  }

  // Validate required fields
  if (
    typeof name !== "string" || name.trim().length < 1 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" || message.trim().length < 10
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  if (service && !SERVICES.includes(service as typeof SERVICES[number])) {
    return NextResponse.json({ error: "Invalid service" }, { status: 422 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name.trim()}${company ? ` (${company.trim()})` : ""}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email}`,
        company ? `Company: ${company.trim()}` : null,
        service ? `Service interest: ${service}` : null,
        "",
        message.trim(),
      ]
        .filter((l) => l !== null)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
