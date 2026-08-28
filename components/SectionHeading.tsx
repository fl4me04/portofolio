/**
 * One heading treatment for every section.
 *
 * Each section used to open with a large centred title on its own panel,
 * which is what made the page read as a slide deck. A smaller heading
 * with a rule running off to the right is an editorial device instead of
 * a title card: it marks a new part of one continuous document.
 */
const SectionHeading = ({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) => (
  <div className="mb-12 md:mb-16">
    <div className="flex items-center gap-6">
      <h2 className="font-display text-2xl text-ink md:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-line" />
    </div>
    {intro && (
      <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">{intro}</p>
    )}
  </div>
);

export default SectionHeading;
