import { useState } from "react";
import { OPCOES_INTERVALO, PADRAO_INICIAL } from "@/lib/escala-5x2/constants";
import { formatHorarioInput, parseHorario } from "@/lib/escala-5x2/format";
import type { PadraoHorario } from "@/lib/escala-5x2/types";
import { fieldClass, labelClass, numericFieldClass, solidButtonClass } from "./classes";

interface Props {
  onAplicar: (padrao: PadraoHorario) => void;
}

/** Horário padrão (entrada, intervalo e saída) aplicado de uma vez a todos os dias trabalhados. */
export function PadraoBar({ onAplicar }: Props) {
  const [entrada, setEntrada] = useState(formatHorarioInput(PADRAO_INICIAL.entrada ?? 0));
  const [intervalo, setIntervalo] = useState(PADRAO_INICIAL.intervalo);
  const [saida, setSaida] = useState(formatHorarioInput(PADRAO_INICIAL.saida ?? 0));

  function handleAplicar() {
    onAplicar({ entrada: parseHorario(entrada), intervalo, saida: parseHorario(saida) });
  }

  return (
    <div className="mb-5 grid items-end gap-3 border border-gold/40 bg-gold/10 p-4 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <label htmlFor="padEntrada" className={labelClass}>Entrada padrão</label>
        <input
          id="padEntrada"
          type="time"
          value={entrada}
          onChange={(event) => setEntrada(event.target.value)}
          className={numericFieldClass}
        />
      </div>
      <div>
        <label htmlFor="padIntervalo" className={labelClass}>Intervalo intrajornada</label>
        <select
          id="padIntervalo"
          value={intervalo}
          onChange={(event) => setIntervalo(Number(event.target.value))}
          className={fieldClass}
        >
          {OPCOES_INTERVALO.map((opcao) => (
            <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="padSaida" className={labelClass}>Saída padrão</label>
        <input
          id="padSaida"
          type="time"
          value={saida}
          onChange={(event) => setSaida(event.target.value)}
          className={numericFieldClass}
        />
      </div>
      <button type="button" onClick={handleAplicar} className={solidButtonClass}>
        Aplicar a todos
      </button>
    </div>
  );
}
