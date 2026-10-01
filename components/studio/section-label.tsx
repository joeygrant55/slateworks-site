export default function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
      <span className="text-signal">{index}</span>
      <span className="h-px w-8 bg-rule" />
      {children}
    </p>
  );
}
