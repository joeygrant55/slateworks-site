import Link from "next/link";

export default function HavenPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/haven" className="mb-8 inline-flex items-center text-emerald-400 transition hover:text-emerald-300">
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Haven
        </Link>

        <div className="rounded-xl border border-slate-700 bg-slate-800 p-8 shadow-xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-2 text-slate-400">Haven - AI Home Design</p>
            <p className="mt-1 text-sm text-slate-500">Last Updated: December 8, 2025</p>
          </div>

          <div className="space-y-8 text-slate-300">
            <p>Haven ("we", "our", or "the app") respects your privacy. This policy explains how we handle your information.</p>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Information We Collect</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Photos you take or upload within the app for room design transformation</li>
                <li>Usage data to improve app performance</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Photos are processed by AI services (OpenAI, Google) to generate design transformations</li>
                <li>We do not store your photos on our servers after processing</li>
                <li>We do not sell your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Third-Party Services</h2>
              <p>
                Haven uses AI services from OpenAI and Google to power design transformations.
                These services process your photos according to their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Camera and Photo Access</h2>
              <p>
                Haven requests camera and photo library access solely to capture and transform room images.
                This access is used only when you actively use the design features.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information during transmission
                and processing. Photos are transmitted securely and are not retained after transformation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Contact</h2>
              <p>
                For privacy questions or concerns, please contact us at:{" "}
                <a href="mailto:support@slateworks.io" className="text-emerald-400 transition hover:text-emerald-300">
                  support@slateworks.io
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Continued use of Haven after
                changes are posted means you accept the updated policy.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-slate-700 pt-6">
            <p className="text-sm text-slate-500">&copy; 2025 Slateworks, LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
