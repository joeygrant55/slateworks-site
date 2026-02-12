"use client";

import { FormEvent, useState } from "react";

export default function LeadCaptureForm() {
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

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong while submitting your request.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-none border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm">
      <h3 className="mb-4 text-xl font-bold text-white">Start Your Project</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-zinc-300">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-zinc-300">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm text-zinc-300">Company (Optional)</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="mb-1 block text-sm text-zinc-300">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            required
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-secondary focus:outline-none"
          >
            <option value="" disabled>Select project type</option>
            <option value="website">Website</option>
            <option value="web_app">Web Application</option>
            <option value="mobile_app">Mobile App</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1 block text-sm text-zinc-300">Budget</label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            required
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:border-secondary focus:outline-none"
          >
            <option value="" disabled>Select budget range</option>
            <option value="Under $2,000">Under $2,000</option>
            <option value="$2,000 - $5,000">$2,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-sm text-zinc-300">Project Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Tell us about your project"
            rows={4}
            required
            className="min-h-[100px] w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Get Started"}
        </button>

        {status === "success" && <p className="text-sm text-secondary">We will be in touch within 24 hours.</p>}
        {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
      </form>
    </div>
  );
}
