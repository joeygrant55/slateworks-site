export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-display text-[1.35rem] font-bold tracking-[-0.04em] text-ink ${className}`}>
      slateworks
      <span aria-hidden className="ml-[2px] inline-block h-[0.32em] w-[0.32em] rounded-[1px] bg-signal" />
    </span>
  );
}
