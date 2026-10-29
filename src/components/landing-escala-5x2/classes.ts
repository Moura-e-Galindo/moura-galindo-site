import type { Tom } from "@/data/escala-5x2";

/** Classes compartilhadas entre as seções da landing da Escala 5x2. */

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold";

export const containerClass =
  "mx-auto max-w-[1120px] px-4 py-[clamp(40px,6vw,74px)] sm:px-6";

export const eyebrowClass =
  "mb-3.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-trab-ouro-texto";

export const h2Class =
  "mb-3 font-spectral text-[clamp(25px,3.7vw,37px)] font-semibold leading-[1.18] text-balance text-neutral-900";

export const paragraphClass = "mb-3.5 text-neutral-600";

const buttonBase =
  `inline-flex items-center justify-center gap-2 rounded-[3px] border-[1.5px] px-5.5 py-3 text-[15px] font-semibold no-underline transition-colors ${focusRing}`;

export const buttonGold = `${buttonBase} border-gold bg-gold text-ink-deep hover:bg-gold-soft`;

export const buttonOutline =
  `${buttonBase} border-trab-linha bg-transparent text-neutral-900 hover:border-gold`;

export const buttonPill =
  `inline-flex items-center justify-center rounded-full bg-gold font-bold text-ink-deep no-underline transition-colors hover:bg-gold-soft ${focusRing}`;

/** Cores de cada tom (borda/acento, fundo suave, texto do rótulo e fundo sólido). */
export const tomClasses: Record<Tom, { borda: string; fundo: string; texto: string; solido: string }> = {
  ouro: {
    borda: "border-gold",
    fundo: "bg-trab-ouro-fundo",
    texto: "text-trab-ouro-texto",
    solido: "bg-gold"
  },
  azul: {
    borda: "border-trab-azul",
    fundo: "bg-trab-azul-fundo",
    texto: "text-trab-azul",
    solido: "bg-trab-azul"
  },
  verde: {
    borda: "border-trab-verde",
    fundo: "bg-trab-verde-fundo",
    texto: "text-trab-verde",
    solido: "bg-trab-verde"
  },
  vinho: {
    borda: "border-trab-vinho",
    fundo: "bg-trab-vinho-fundo",
    texto: "text-trab-vinho",
    solido: "bg-trab-vinho"
  },
  grafite: {
    borda: "border-trab-grafite",
    fundo: "bg-trab-grafite-fundo",
    texto: "text-trab-grafite",
    solido: "bg-trab-grafite"
  }
};
