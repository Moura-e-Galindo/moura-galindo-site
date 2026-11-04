/** Classes compartilhadas entre as seções da landing de Rescisão Indireta. */

export const focusRing =
  "focus-visible:rounded-lg focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-resc-petroleo";

export const focusRingDark =
  "focus-visible:rounded-lg focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold";

export const containerClass = "mx-auto w-full max-w-[1200px] px-5";

export const eyebrowClass =
  "text-[13px] font-bold uppercase tracking-[0.14em] text-resc-petroleo";

export const sectionTitleClass =
  "font-playfair text-[32px] font-extrabold leading-[1.1] text-balance md:text-[44px]";

export const linkClass = `text-resc-tinta underline underline-offset-2 hover:text-resc-petroleo ${focusRing}`;

export const linkDarkClass = `text-white underline underline-offset-2 hover:text-gold ${focusRingDark}`;

const pillBase =
  "inline-flex min-h-13 items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold no-underline transition-transform hover:-translate-y-px motion-reduce:transition-none";

export const pillDark = `${pillBase} bg-resc-tinta text-white hover:text-white ${focusRing}`;

export const pillOutline = `${pillBase} border-2 border-resc-tinta text-resc-tinta hover:text-resc-tinta ${focusRing}`;

/** Resumo de <details> sem o marcador nativo do navegador. */
export const summaryReset = "cursor-pointer list-none [&::-webkit-details-marker]:hidden";
