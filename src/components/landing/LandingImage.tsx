import { ImagePlus } from "lucide-react";

interface LandingImageProps {
  /**
   * Caminho da imagem — normalmente um import de `src/assets`
   * (ex.: `import maeBebe from "@/assets/mae-bebe.jpg"`).
   * Se omitido, é exibido um espaço reservado elegante para você
   * adicionar a foto depois.
   */
  src?: string;
  alt?: string;
  /** Proporção do quadro (classe `aspect-*`). Padrão: retrato suave. */
  aspectClassName?: string;
  /** Texto do espaço reservado. */
  placeholderLabel?: string;
  className?: string;
}

/**
 * Moldura de imagem padrão da landing page. Mantém cantos arredondados,
 * sombra suave e — enquanto não houver foto — um espaço reservado no tom
 * rosé da página, deixando claro onde inserir cada imagem.
 */
export function LandingImage({
  src,
  alt = "",
  aspectClassName = "aspect-[4/5]",
  placeholderLabel = "Adicione uma imagem aqui",
  className = "",
}: LandingImageProps) {
  const shape = `${aspectClassName} w-full overflow-hidden rounded-3xl`;

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${shape} object-cover shadow-xl ${className}`.trim()}
      />
    );
  }

  return (
    <div
      className={`${shape} flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#e0aeba] bg-gradient-to-br from-[#fbecef] to-[#f4d7df] text-center shadow-sm ${className}`.trim()}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
        <ImagePlus className="h-6 w-6 text-[#c06a85]" strokeWidth={1.5} />
      </span>
      <span className="px-6 text-sm font-medium text-[#a05a72]">
        {placeholderLabel}
      </span>
    </div>
  );
}
