export default function FormSection({
  title,
  isExpanded = true,
  headerChildren,
  children,
}: {
  title: string;
  isExpanded?: boolean;
  headerChildren?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex max-h-max flex-col gap-4 rounded-2xl border border-[var(--clr-neutral-300)] p-4 data-[expanded=false]:gap-0"
      data-expanded={isExpanded}
    >
      <header
        className={`flex flex-wrap items-center justify-between gap-4 ${isExpanded ? "border-b border-[var(--clr-neutral-300)] pb-4" : ""}`}
      >
        <h2>{title}</h2>
        {headerChildren}
      </header>
      <main
        className={`grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 max-[700px]:grid-cols-1 ${isExpanded ? "" : "hidden"}`}
      >
        {children}
      </main>
    </section>
  );
}
