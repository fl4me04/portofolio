const SectionHeading = ({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) => (
  <div className="mb-10 md:mb-16">
    {/* The rule sits on both sides on a phone, so the heading lands in the
        middle of the centred column instead of hanging off its left edge. */}
    <div className="flex items-center gap-4 md:gap-6">
      <span className="h-px flex-1 bg-line md:hidden" />
      <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
    {intro && (
      <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-ink-muted md:mx-0 md:text-left">
        {intro}
      </p>
    )}
  </div>
);

export default SectionHeading;
