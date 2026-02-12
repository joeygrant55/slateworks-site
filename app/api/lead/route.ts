import { NextResponse } from "next/server";
import { Resend } from "resend";

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  description: string;
  budget: string;
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRateLimit = new Map<string, { count: number; expiresAt: number }>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  for (const [key, value] of ipRateLimit.entries()) {
    if (value.expiresAt <= now) {
      ipRateLimit.delete(key);
    }
  }

  const entry = ipRateLimit.get(ip);
  if (!entry || entry.expiresAt <= now) {
    ipRateLimit.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  ipRateLimit.set(ip, entry);
  return false;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: unknown): LeadPayload {
  if (typeof body !== "object" || body === null) {
    throw new Error("Invalid payload");
  }

  const data = body as Record<string, unknown>;
  return {
    name: asString(data.name),
    email: asString(data.email),
    company: asString(data.company),
    projectType: asString(data.projectType),
    description: asString(data.description),
    budget: asString(data.budget),
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const payload = parsePayload(await request.json());

    if (!payload.name || !payload.email || !payload.projectType || !payload.description || !payload.budget) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    const formattedSummary = [
      "New lead submitted on slateworks.io",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "N/A"}`,
      `Project Type: ${payload.projectType}`,
      `Budget: ${payload.budget}`,
      `Description: ${payload.description}`,
    ].join("\n");

    const emailConfigured = Boolean(resendApiKey);
    let emailDelivered = false;
    let webhookDelivered = false;

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Slateworks Leads <onboarding@resend.dev>",
          to: "hello@slateworks.io",
          replyTo: payload.email,
          subject: `New lead from ${payload.name}`,
          text: formattedSummary,
        });
        emailDelivered = true;
      } catch (error) {
        console.warn("Failed to deliver lead email through Resend.", error);
      }
    } else {
      console.warn("RESEND_API_KEY is not set. Skipping lead email delivery.");
    }

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "slateworks.io",
            submittedAt: new Date().toISOString(),
            lead: payload,
            summary: formattedSummary,
          }),
        });

        if (!webhookResponse.ok) {
          console.warn(`Lead webhook returned non-OK status: ${webhookResponse.status}`);
        } else {
          webhookDelivered = true;
        }
      } catch (error) {
        console.warn("Failed to deliver lead webhook.", error);
      }
    }

    if (!resendApiKey && !webhookDelivered && !webhookUrl) {
      console.warn("Lead received with no delivery transport configured.");
    }

    if (emailConfigured && !emailDelivered && webhookUrl && !webhookDelivered) {
      return NextResponse.json({ success: false, error: "Unable to deliver lead notification." }, { status: 502 });
    }

    if (emailConfigured && !emailDelivered && !webhookUrl) {
      return NextResponse.json({ success: false, error: "Unable to deliver lead notification." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed.", error);
    return NextResponse.json({ success: false, error: "Failed to submit lead." }, { status: 500 });
  }
}
