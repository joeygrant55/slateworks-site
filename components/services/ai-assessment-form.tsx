"use client";

import { FormEvent, useMemo, useState } from "react";

type AssessmentData = {
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  industry: string;
  teamSize: string;
  annualRevenueRange: string;
  tools: string;
  mostTimeQuestion: string;
  idealOutcome: string;
  aiToolsQuestion: string;
  biggestFrustration: string;
  budgetRange: string;
  timeline: string;
  additionalNotes: string;
};

const initialState: AssessmentData = {
  name: "",
  email: "",
  company: "",
  role: "",
  website: "",
  industry: "",
  teamSize: "",
  annualRevenueRange: "",
  tools: "",
  mostTimeQuestion: "",
  idealOutcome: "",
  aiToolsQuestion: "",
  biggestFrustration: "",
  budgetRange: "",
  timeline: "",
  additionalNotes: "",
};

export default function AIServiceAssessmentForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<AssessmentData>(initialState);

  const updateField = (field: keyof AssessmentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const stepIsValid = useMemo(() => {
    if (step === 1) {
      return Boolean(formData.name.trim() && formData.email.trim() && formData.company.trim() && formData.role.trim());
    }
    if (step === 2) {
      return Boolean(
        formData.industry.trim() &&
          formData.teamSize.trim() &&
          formData.annualRevenueRange.trim() &&
          formData.tools.trim(),
      );
    }
    if (step === 3) {
      return Boolean(
        formData.mostTimeQuestion.trim() &&
          formData.idealOutcome.trim() &&
          formData.aiToolsQuestion.trim() &&
          formData.biggestFrustration.trim(),
      );
    }
    if (step === 4) {
      return Boolean(formData.budgetRange.trim() && formData.timeline.trim());
    }
    return false;
  }, [step, formData]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stepIsValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong while submitting your assessment.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
  };

  const stepFields = [
    {
      title: "Step 1: About You",
      description: "Tell us who we are helping.",
    },
    {
      title: "Step 2: Your Business",
      description: "Help us understand your operation.",
    },
    {
      title: "Step 3: AI Opportunity",
      description: "Show us your process and pain points.",
    },
    {
      title: "Step 4: Investment",
      description: "Define scope, timing, and priorities.",
    },
  ];

  if (status === "success") {
    return (
      <div className="rounded-sm border border-secondary/20 bg-secondary/5 p-8 text-center">
        <h3 className="mb-3 text-2xl font-bold">Thanks for the submission</h3>
        <p className="text-neutral-dark">
          Check your inbox — your AI Opportunity Brief is on its way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-sm border border-white/10 bg-black/40 p-4">
        <p className="text-sm uppercase tracking-wide text-secondary">Async AI Services Flow</p>
        <h2 className="mt-2 text-2xl font-bold">{stepFields[step - 1].title}</h2>
        <p className="mt-1 text-sm text-neutral-dark">{stepFields[step - 1].description}</p>
      </div>

      {step === 1 && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-neutral-dark">Name</label>
            <input
              id="name"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-neutral-dark">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-1 block text-sm text-neutral-dark">Company</label>
            <input
              id="company"
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="Company name"
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-1 block text-sm text-neutral-dark">Role</label>
            <input
              id="role"
              value={formData.role}
              onChange={(e) => updateField("role", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="Founder, COO, Operations Lead..."
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="website" className="mb-1 block text-sm text-neutral-dark">Website</label>
            <input
              id="website"
              value={formData.website}
              onChange={(e) => updateField("website", e.target.value)}
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="https://yourcompany.com"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="industry" className="mb-1 block text-sm text-neutral-dark">Industry</label>
            <input
              id="industry"
              value={formData.industry}
              onChange={(e) => updateField("industry", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="E.g. SaaS, Clinic, eCommerce"
            />
          </div>

          <div>
            <label htmlFor="teamSize" className="mb-1 block text-sm text-neutral-dark">Team Size</label>
            <select
              id="teamSize"
              value={formData.teamSize}
              onChange={(e) => updateField("teamSize", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-secondary focus:outline-none"
            >
              <option value="">Select team size</option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="51+">51+</option>
            </select>
          </div>

          <div>
            <label htmlFor="annualRevenueRange" className="mb-1 block text-sm text-neutral-dark">Annual Revenue Range</label>
            <select
              id="annualRevenueRange"
              value={formData.annualRevenueRange}
              onChange={(e) => updateField("annualRevenueRange", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-secondary focus:outline-none"
            >
              <option value="">Select revenue range</option>
              <option value="Under $250k">Under $250k</option>
              <option value="$250k - $1M">$250k - $1M</option>
              <option value="$1M - $5M">$1M - $5M</option>
              <option value="$5M - $10M">$5M - $10M</option>
              <option value="$10M+">$10M+</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="tools" className="mb-1 block text-sm text-neutral-dark">Tools you use</label>
            <textarea
              id="tools"
              value={formData.tools}
              onChange={(e) => updateField("tools", e.target.value)}
              rows={3}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="CRM, help desk, project management stack, etc."
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="grid gap-4">
          <label className="block">
            <span className="mb-1 block text-sm text-neutral-dark">What takes the most time right now?</span>
            <textarea
              value={formData.mostTimeQuestion}
              onChange={(e) => updateField("mostTimeQuestion", e.target.value)}
              rows={4}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="Ops, onboarding, reporting, support, etc."
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-neutral-dark">What do you wish just happened?</span>
            <textarea
              value={formData.idealOutcome}
              onChange={(e) => updateField("idealOutcome", e.target.value)}
              rows={3}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="E.g., "
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-neutral-dark">Have you tried AI tools for this already?</span>
            <textarea
              id="aiToolsQuestion"
              value={formData.aiToolsQuestion}
              onChange={(e) => updateField("aiToolsQuestion", e.target.value)}
              rows={3}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="Tell us what you&apos;ve tried and what did/didn&apos;t work"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm text-neutral-dark">Biggest frustration in your current workflow</span>
            <textarea
              value={formData.biggestFrustration}
              onChange={(e) => updateField("biggestFrustration", e.target.value)}
              rows={3}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="Where your team loses momentum"
            />
          </label>
        </div>
      )}

      {step === 4 && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="budgetRange" className="mb-1 block text-sm text-neutral-dark">Budget Range</label>
            <select
              id="budgetRange"
              value={formData.budgetRange}
              onChange={(e) => updateField("budgetRange", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-secondary focus:outline-none"
            >
              <option value="">Select budget range</option>
              <option value="$2,500 Audit only">$2,500 Audit only</option>
              <option value="$5,000 - $10,000 monthly">$5,000 - $10,000 monthly</option>
              <option value="$10,000+ monthly + equity">$10,000+ monthly + equity</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="mb-1 block text-sm text-neutral-dark">Timeline</label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => updateField("timeline", e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-secondary focus:outline-none"
            >
              <option value="">Select timeline</option>
              <option value="ASAP (Within 30 days)">ASAP (Within 30 days)</option>
              <option value="1-2 months">1-2 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="additionalNotes" className="mb-1 block text-sm text-neutral-dark">Anything else we should know?</label>
            <textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => updateField("additionalNotes", e.target.value)}
              rows={4}
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
              placeholder="Constraints, goals, deadlines, integration requirements..."
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="rounded-md border border-zinc-700 px-5 py-2 transition-colors hover:border-white"
            disabled={isSubmitting}
          >
            Back
          </button>
        ) : (
          <span />
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev + 1)}
            disabled={!stepIsValid}
            className="ml-auto rounded-md bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={!stepIsValid || isSubmitting}
            className="ml-auto rounded-md bg-secondary px-6 py-2 font-medium text-black transition-colors hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Send Assessment"}
          </button>
        )}
      </div>

      {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
    </form>
  );
}
