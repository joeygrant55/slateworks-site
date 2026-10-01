import InquiryForm from "@/components/studio/inquiry-form";
import SectionLabel from "@/components/studio/section-label";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-paper-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionLabel index="05">Contact</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Every inquiry reaches me directly. If we&apos;re not the right fit, I&apos;ll tell you who is.
          </p>
          <dl className="mt-10 space-y-4 border-t border-rule pt-8 text-[15px]">
            <div className="flex gap-6">
              <dt className="w-16 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Email</dt>
              <dd>
                <a
                  href="mailto:joey@slateworks.io"
                  className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
                >
                  joey@slateworks.io
                </a>
              </dd>
            </div>
            <div className="flex gap-6">
              <dt className="w-16 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Based</dt>
              <dd className="text-ink">St. Petersburg, FL — working with teams everywhere</dd>
            </div>
          </dl>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
