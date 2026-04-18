interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl font-medium leading-[1.05] max-w-4xl">
          {title}
        </h1>
        <div className="gold-divider mt-8" />
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-primary-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
