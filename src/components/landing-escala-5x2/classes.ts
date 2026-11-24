/** Classes compartilhadas entre as seções da landing da Escala 5x2. */

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold";

export const containerClass = "mx-auto max-w-[1120px] px-6";

export const sectionClass = "relative py-13.5 min-[681px]:py-18";

/** Rótulo em caixa-alta precedido do losango dourado. */
const rotuloBase =
  "mb-3.5 flex items-center gap-2.5 text-[11.5px] font-bold uppercase tracking-[0.22em] before:size-2.25 before:flex-none before:rotate-45 before:bg-gold before:content-['']";

export const rotuloClass = `${rotuloBase} text-trab-ouro-escuro`;
export const rotuloClaroClass = `${rotuloBase} text-trab-ouro-claro`;

export const h2Class =
  "mb-3 font-playfair text-[clamp(26px,3.6vw,40px)] font-bold leading-[1.14] tracking-[-0.01em]";

export const h3Class = "mb-2 font-playfair text-[19px] font-bold leading-[1.3]";

const ledeBase = "mb-3.75 max-w-[66ch] text-[clamp(16px,1.9vw,18.5px)] font-light";

export const ledeClass = `${ledeBase} text-trab-cinza`;
export const ledeEscuroClass = `${ledeBase} text-trab-pedra`;

export const notaClass = "text-[13.5px] leading-[1.6] text-graphite";

export const botoesClass = "mt-7 flex flex-wrap gap-3";

const buttonBase =
  `inline-flex items-center gap-2.25 rounded-full border-2 px-6.5 py-3.5 text-[15px] font-bold no-underline transition-all duration-180 ${focusRing}`;

export const buttonOuro = `${buttonBase} border-transparent bg-gold text-black hover:bg-trab-ouro-claro`;

export const buttonContorno =
  `${buttonBase} border-trab-borda-botao text-white hover:border-gold hover:text-trab-ouro-claro`;

export const buttonPreto = `${buttonBase} border-transparent bg-black text-white hover:bg-trab-carvao-2`;

export const buttonZap = `${buttonBase} border-transparent bg-trab-zap text-white`;

/** Losango dourado usado como marcador das listas. */
export const marcadorLosango =
  "before:absolute before:left-0 before:rotate-45 before:bg-gold before:content-['']";
