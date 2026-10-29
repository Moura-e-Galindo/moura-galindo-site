import { useEffect, useState } from "react";

/**
 * Relógio que se atualiza a cada `intervalMs` e ao voltar para a aba.
 * `initial` deve vir do loader, para o HTML do servidor e o do navegador
 * coincidirem na hidratação.
 */
export function useNow(intervalMs: number, initial: number): number {
  const [now, setNow] = useState(initial);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const handleVisibility = () => {
      if (!document.hidden) tick();
    };

    tick();
    const timer = window.setInterval(tick, intervalMs);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [intervalMs]);

  return now;
}
