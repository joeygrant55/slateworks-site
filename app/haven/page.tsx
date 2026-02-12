import Link from "next/link";

export default function HavenLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
            Built by Slateworks
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-6xl">Haven</h1>
          <p className="mb-4 text-xl text-slate-300 sm:text-2xl">AI Home Design</p>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            Transform any room in your home with AI-powered design visualization.
            Snap a photo, describe your vision, and watch your space come to life.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">Coming Soon to the App Store</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-slate-700 px-4 py-16">
        <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">Reimagine Your Space</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
              <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Snap a Photo</h3>
            <p className="text-slate-400">Capture any room in your home with your camera</p>
          </div>
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
              <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">AI Transforms</h3>
            <p className="text-slate-400">Describe your vision and watch AI redesign your space</p>
          </div>
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
              <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Save Collections</h3>
            <p className="text-slate-400">Organize your favorite designs for each room</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-slate-700 px-4 py-16">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Powered by Advanced AI</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Haven uses cutting-edge AI from OpenAI and Google to deliver stunning,
            realistic room transformations in seconds.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-slate-700 px-4 py-16" id="support">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Support</h2>
          <p className="mb-6 text-slate-400">Need help with Haven? We&apos;re here for you.</p>
          <a
            href="mailto:support@slateworks.io"
            className="inline-flex items-center text-emerald-400 transition hover:text-emerald-300"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@slateworks.io
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-slate-700 px-4 py-8">
        <div className="flex flex-col items-center justify-between text-sm text-slate-500 sm:flex-row">
          <p>&copy; 2025 Slateworks, LLC. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="/haven/privacy" className="transition hover:text-slate-300">
              Privacy Policy
            </Link>
            <a href="https://slateworks.io" className="transition hover:text-slate-300">
              Slateworks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
