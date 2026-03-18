import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// ---------------------------------------------------------------------------
// Input schema
// ---------------------------------------------------------------------------
const SERVICES = ["SEO Audit", "SEO Retainer", "Web Development", "Other"] as const;

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  company: z.string().max(100).optional(),
  service: z.enum(SERVICES).optional(),
  message: z.string().min(10).max(5000),
  _hp: z.string().optional(), // honeypot
});

// ---------------------------------------------------------------------------
// Rate limiting (Upstash — no-op when env vars absent)
// ---------------------------------------------------------------------------
async function checkRateLimit(ip: string): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return true; // no limiter configured → allow

  const { Ratelimit } = await import("@upstash/ratelimit");
  const { Redis } = await import("@upstash/redis");

  const rl = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    prefix: "contact",
  });

  const { success } = await rl.limit(ip);
  return success;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@bessdamm.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "noreply@bessdamm.com";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const allowed = await checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  const { name, email, company, service, message, _hp } = parsed.data;

  // Honeypot — bots fill hidden field, humans don't
  if (_hp) {
    return NextResponse.json({ ok: true });
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
