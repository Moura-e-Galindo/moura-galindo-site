import { formatDuracao, getTempoRestante } from "@/lib/ferramentas/availability";
import { formatDataHoraExtenso } from "@/lib/ferramentas/format";
import type { FerramentaRow } from "@/lib/ferramentas/types";

interface Props {
  ferramenta: FerramentaRow;
  now: number;
}

/** Faixa exibida acima da ferramenta aberta quando há data de encerramento. */
export function AccessBanner({ ferramenta, now }: Props) {
  if (!ferramenta.available_until) return null;

  const restante = getTempoRestante(ferramenta, now);

  return (
    <div className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border border-gold/40 border-l-4 border-l-gold bg-gold/10 px-4 py-3 text-sm text-foreground">
      <b className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep dark:text-gold">
        Acesso por prazo determinado
      </b>
      <span>Disponível até {formatDataHoraExtenso(ferramenta.available_until)}.</span>
      {restante !== null && (
        <span className="font-mono font-semibold text-gold-deep dark:text-gold" aria-live="polite">
          Restam {formatDuracao(restante)}.
        </span>
      )}
    </div>
  );
}
