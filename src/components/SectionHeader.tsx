interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
        {title}
      </h2>
      <div className={`gold-divider mt-6 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
