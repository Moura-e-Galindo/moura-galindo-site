interface Props {
  value: string;
  label: string;
  highlight?: boolean;
}

export function StatBox({ value, label, highlight = false }: Props) {
  return (
    <div className={`border p-3.5 ${highlight ? "border-gold/40 bg-gold/10" : "border-border bg-background"}`}>
      <p
        className={`font-mono text-xl font-semibold leading-tight tabular-nums md:text-2xl ${
          highlight ? "text-gold-deep dark:text-gold" : "text-foreground"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
