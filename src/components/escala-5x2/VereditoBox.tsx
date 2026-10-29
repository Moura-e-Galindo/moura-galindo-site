import type { Veredito } from "@/lib/escala-5x2/veredito";
import { toneClass } from "./classes";

export function VereditoBox({ veredito }: { veredito: Veredito }) {
  const tone = toneClass[veredito.tipo];

  return (
    <div className={`mb-4 border p-4 ${tone.box}`} aria-live="polite">
      <p className={`mb-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${tone.text}`}>
        {veredito.rotulo}
      </p>
      <p className="text-sm leading-relaxed text-foreground">{veredito.frase}</p>
    </div>
  );
}
