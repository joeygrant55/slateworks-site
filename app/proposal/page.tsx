export default function ProposalIndexPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-neutral">
      <p className="max-w-xl text-lg leading-relaxed text-neutral-dark">
        Proposal not found. Contact us at
        {" "}
        <a href="mailto:joey@slateworks.io" className="font-semibold text-secondary hover:text-secondary-light">
          joey@slateworks.io
        </a>
        .
      </p>
    </main>
  );
}
