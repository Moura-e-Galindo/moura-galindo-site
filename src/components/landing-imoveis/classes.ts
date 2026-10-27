/** Classes compartilhadas entre as seções da landing de Regularização de Imóveis. */

export const focusRing =
  "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold";

export const buttonBase =
  "inline-flex items-center justify-center rounded-[4px] font-bold no-underline transition-colors";

export const buttonGold = `${buttonBase} bg-gold text-black hover:bg-gold-soft hover:text-black ${focusRing}`;

export const buttonBlack = `${buttonBase} bg-black text-white hover:bg-neutral-800 hover:text-white ${focusRing}`;

export const inputBase =
  "rounded-[4px] border border-neutral-500 bg-white text-[16px] text-neutral-900 focus:outline-3 focus:outline-offset-1 focus:outline-gold";

export const grayText = "text-neutral-600";
