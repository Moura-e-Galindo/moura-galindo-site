import { Link } from "@tanstack/react-router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import footerLightFull from "@/assets/footer-light-full.png";
import footerDarkFull from "@/assets/footer-dark-full.png";
import footerLightCompact from "@/assets/footer-light-compact.png";
import footerDarkCompact from "@/assets/footer-dark-compact.png";

type LogoVariant = "full" | "compact";
type LogoTheme = "light" | "dark";

const LOGO_SOURCES: Record<LogoVariant, Record<LogoTheme, string>> = {
  full: {
    light: footerLightFull,
    dark: footerDarkFull,
  },
  compact: {
    light: footerLightCompact,
    dark: footerDarkCompact,
  },
};

const DEFAULT_SIZES: Record<LogoVariant, { width: number; height: number }> = {
  full: { width: 240, height: 80 },
  compact: { width: 56, height: 56 },
};

interface LogoProps {
  /** Quando verdadeiro, renderiza a versão compacta (apenas o símbolo). */
  compact?: boolean;
  /** Largura customizada em pixels. Se omitida, usa o tamanho adequado da variante. */
  width?: number;
  /** Altura customizada em pixels. Se omitida, usa o tamanho adequado da variante. */
  height?: number;
  /** Classe adicional para o container Link. */
  className?: string;
  /** Classe adicional para a imagem. */
  imgClassName?: string;
}

export function Logo({
  compact = false,
  width,
  height,
  className = "",
  imgClassName = "",
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const variant: LogoVariant = compact ? "compact" : "full";
  const theme: LogoTheme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  const src = LOGO_SOURCES[variant][theme];
  const defaults = DEFAULT_SIZES[variant];

  const finalWidth = width ?? defaults.width;
  const finalHeight = height ?? defaults.height;

  return (
    <Link
      to="/"
      className={`group inline-flex items-center ${className}`.trim()}
      aria-label="Moura & Galindo Advogados Associados — página inicial"
    >
      <img
        src={src}
        alt="Moura & Galindo Advogados Associados"
        width={finalWidth}
        height={finalHeight}
        style={{ width: finalWidth, height: finalHeight }}
        className={`object-contain ${imgClassName}`.trim()}
      />
    </Link>
  );
}
