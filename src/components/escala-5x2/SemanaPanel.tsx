import { ATALHOS, DIAS } from "@/lib/escala-5x2/constants";
import type { Semana } from "@/lib/escala-5x2/types";
import type { EscalaActions } from "@/hooks/use-escala-5x2";
import { DiaCard } from "./DiaCard";
import { PadraoBar } from "./PadraoBar";
import { Panel } from "./Panel";
import { ghostButtonClass, helpClass } from "./classes";

interface Props {
  semana: Semana;
  actions: EscalaActions;
}

export function SemanaPanel({ semana, actions }: Props) {
  return (
    <Panel title="O ponto da semana">
      <PadraoBar onAplicar={actions.usarPadrao} />

      <div className="grid gap-2.5">
        {DIAS.map((nome, dia) => (
          <DiaCard key={nome} dia={dia} nome={nome} semana={semana} actions={actions} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {ATALHOS.map((atalho) => (
          <button
            key={atalho.value}
            type="button"
            onClick={() => actions.usarAtalho(atalho.value)}
            className={ghostButtonClass}
          >
            {atalho.label}
          </button>
        ))}
      </div>

      <p className={helpClass}>
        Os quatro campos de cada dia conversam entre si. Mudando entrada, intervalo ou saída, a
        jornada é recalculada. Mudando a jornada, a saída é sugerida a partir da entrada e do
        intervalo.
      </p>
    </Panel>
  );
}
