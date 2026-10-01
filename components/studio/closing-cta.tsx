import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ClosingCta({
  title = "Have something worth building?",
  body = "Every inquiry reaches me directly. If we're not the right fit, I'll tell you who is.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/60">{body}</p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-paper px-6 py-3.5 font-medium text-ink transition-colors hover:bg-signal hover:text-paper md:self-auto"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
