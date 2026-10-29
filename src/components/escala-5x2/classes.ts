/** Classes compartilhadas entre os blocos da calculadora da escala 5x2. */

export const panelClass = "border border-border bg-card p-6 md:p-7 shadow-card";

export const panelTitleClass =
  "mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold";

export const subtitleClass = "mt-8 mb-3 font-serif text-lg font-medium text-foreground";

export const labelClass =
  "mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground";

export const fieldClass =
  "w-full border border-border bg-background px-3 py-2.5 text-sm text-foreground transition-colors focus:border-gold focus:outline-none dark:[color-scheme:dark]";

export const numericFieldClass = `${fieldClass} font-mono tabular-nums`;

export const helpClass = "mt-3 text-xs leading-relaxed text-muted-foreground";

export const ghostButtonClass =
  "border border-border bg-background px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export const solidButtonClass =
  "bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-gold-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

/** Cores por tipo de apontamento, alinhadas aos badges do painel. */
export const toneClass = {
  ok: {
    box: "border-green-600/40 bg-green-500/10",
    text: "text-green-700 dark:text-green-400"
  },
  atencao: {
    box: "border-gold/50 bg-gold/10",
    text: "text-gold-deep dark:text-gold"
  },
  erro: {
    box: "border-red-600/40 bg-red-500/10",
    text: "text-red-700 dark:text-red-400"
  }
} as const;
