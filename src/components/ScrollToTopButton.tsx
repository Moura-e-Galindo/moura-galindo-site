import { ArrowUp } from "lucide-react";
import { useScrolledPast } from "@/hooks/use-scroll-position";

/**
 * Botão flutuante que aparece quando o usuário rola a página para baixo
 * e ao ser clicado leva de volta ao topo com transição suave.
 *
 * Posicionado fixo no canto inferior direito, usa as cores do design system
 * do site (dourado / gold) e respeita acessibilidade (aria-label, foco visível,
 * `prefers-reduced-motion` para usuários que preferem movimento reduzido).
 */
export function ScrollToTopButton() {
  const isVisible = useScrolledPast(400);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Voltar ao topo"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        bg-gold text-gold-foreground
        shadow-elegant
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"}
      `}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.25} />
    </button>
  );
}
