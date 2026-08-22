export default function ProseSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-lg font-bold text-text-primary mb-3">{title}</h2>
      <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
        {children}
      </div>
    </section>
  );
}
