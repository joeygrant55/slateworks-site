"use client";

import { FormEvent, useState } from "react";
import { analyticsEvents, trackEvent } from "@/lib/analytics-events";

const field =
  "w-full rounded-md border border-rule bg-paper px-3.5 py-2.5 text-ink placeholder:text-ink-muted/70 focus:border-ink focus:outline-none";
const label = "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      description: String(formData.get("description") ?? ""),
      budget: String(formData.get("budget") ?? ""),
    };

    trackEvent(analyticsEvents.leadFormStarted, {
      projectType: payload.projectType || "unknown",
      budget: payload.budget || "unknown",
      source: "studio_contact_form",
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong while sending your message.");
      }

      form.reset();
      setStatus("success");
      trackEvent(analyticsEvents.leadFormSubmitted, {
        projectType: payload.projectType,
        budget: payload.budget,
        source: "studio_contact_form",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
      trackEvent(analyticsEvents.leadFormFailed, {
        projectType: payload.projectType || "unknown",
        budget: payload.budget || "unknown",
        source: "studio_contact_form",
      });
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-rule bg-paper p-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">Received</p>
        <p className="mt-3 font-display text-2xl text-ink">
          Thanks — I&apos;ll reply personally within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-rule bg-paper p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="company" className={label}>
          Company
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={label}>
            Looking for
          </label>
          <select id="projectType" name="projectType" defaultValue="" required className={field}>
            <option value="" disabled>
              Choose one
            </option>
            <option value="fractional_ai_team">Fractional AI team</option>
            <option value="ai_sprint">AI Opportunity Sprint</option>
            <option value="white_label_build">White-label build partner</option>
            <option value="product_build">A product or app build</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={label}>
            Budget
          </label>
          <select id="budget" name="budget" defaultValue="" required className={field}>
            <option value="" disabled>
              Choose a range
            </option>
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000 - $25,000">$10,000 – $25,000</option>
            <option value="$25,000 - $75,000">$25,000 – $75,000</option>
            <option value="$75,000+">$75,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="description" className={label}>
          What are you building?
        </label>
        <textarea id="description" name="description" rows={4} required className={`${field} min-h-[120px]`} />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-signal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send"}
      </button>
      {status === "error" && <p className="text-sm text-red-700">{errorMessage}</p>}
    </form>
  );
}
