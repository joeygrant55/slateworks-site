"use client";

import { FormEvent, useState } from "react";

export default function LeadCaptureForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-none border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm">
      <h3 className="mb-4 text-xl font-bold text-white">Start Your Project</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="mb-1 block text-sm text-zinc-300">Name</label>
          <input
            id="fullName"
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
            type="text"
            placeholder="Your company"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="mb-1 block text-sm text-zinc-300">Project Type</label>
          <select
            id="projectType"
            defaultValue=""
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
          <label htmlFor="description" className="mb-1 block text-sm text-zinc-300">Project Description</label>
          <textarea
            id="description"
            placeholder="Tell us about your project"
            rows={4}
            className="min-h-[100px] w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-secondary focus:outline-none"
          />
        </div>

        <button type="submit" className="w-full rounded-md bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-zinc-200">
          Submit
        </button>

        <p className="text-xs text-zinc-400">Static form only. Submission is currently disabled.</p>
        {submitted && <p className="text-sm text-secondary">Thanks. We&apos;ll contact you soon.</p>}
      </form>
    </div>
  );
}
