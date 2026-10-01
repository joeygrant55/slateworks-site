import SectionLabel from "@/components/studio/section-label";

type PageIntroProps = {
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
};

/** Opening block for interior pages — same rhythm as the homepage hero, at a quieter scale. */
export default function PageIntro({ label, title, lede, children }: PageIntroProps) {
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-44">
        <SectionLabel index="●">{label}</SectionLabel>
        <h1 className="mt-6 max-w-4xl text-[2.4rem] font-semibold leading-[1.04] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lede && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
