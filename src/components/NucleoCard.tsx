import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

/**
 * Card de um núcleo (área de atuação).
 *
 * Exibe um banner temático no topo e o conteúdo textual abaixo.
 * As propriedades são passadas no local de uso (normalmente iterando
 * sobre `nucleos` de `@/data/nucleos`).
 *
 * Duas variantes:
 * - "full"    : página de Áreas (/areas) — banner maior, descrição e link "Saiba mais".
 *               Pensada para seções com fundo `background`.
 * - "compact" : home — banner menor, sem descrição, botão "Saiba +".
 *               Pensada para seções com fundo `card`.
 */
export interface NucleoCardProps {
  /** Slug usado na rota /areas/$slug. */
  slug: string;
  /** Nome do núcleo. */
  title: string;
  /** Banner temático exibido no topo do card. */
  image: string;
  /** Variante visual do card. Padrão: "full". */
  variant?: "full" | "compact";
  /** Descrição curta — exibida apenas na variante "full". */
  shortDesc?: string;
}

export function NucleoCard({
  slug,
  title,
  image,
  variant = "full",
  shortDesc,
}: NucleoCardProps) {
  const isCompact = variant === "compact";

  // A superfície do card contrasta com o fundo da seção onde ele é usado.
  const surface = isCompact ? "bg-background" : "bg-card";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden border border-border ${surface} shadow-card hover:border-gold transition-colors`}
    >
      {/* Banner temático */}
      <div className={`overflow-hidden bg-ink ${isCompact ? "h-32" : "h-44"}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className={`flex flex-1 flex-col px-8 ${isCompact ? "pb-8 pt-7" : "pb-10 pt-8"}`}>
        <h3
          className={`font-serif font-medium text-foreground ${
            isCompact ? "min-h-[3.5rem] text-xl leading-snug" : "text-2xl"
          }`}
        >
          {title}
        </h3>

        {!isCompact && <div className="gold-divider mt-3" />}

        {!isCompact && shortDesc && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {shortDesc}
          </p>
        )}

        {isCompact ? (
          <Link
            to="/areas/$slug"
            params={{ slug }}
            className="mt-4 inline-flex items-center justify-center self-start rounded-full bg-gold px-5 py-2 text-xs font-medium uppercase tracking-wider text-gold-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Saiba +
          </Link>
        ) : (
          <Link
            to="/areas/$slug"
            params={{ slug }}
            className="mt-6 inline-flex items-center gap-2 self-start text-xs font-medium uppercase tracking-[0.25em] text-gold hover:gap-3 transition-all"
          >
            Saiba mais <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
