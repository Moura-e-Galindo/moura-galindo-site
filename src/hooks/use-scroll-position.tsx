import { useEffect, useState } from "react";

/**
 * Hook que retorna `true` quando a posição vertical de scroll da janela
 * ultrapassa o limite (em pixels) informado. Útil para mostrar/esconder
 * elementos com base no quanto o usuário rolou.
 *
 * @param threshold Distância (em px) a partir da qual o estado vira `true`. Padrão: 400.
 */
export function useScrolledPast(threshold: number = 400): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Sincroniza o estado inicial caso a página já esteja rolada (ex.: refresh).
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
