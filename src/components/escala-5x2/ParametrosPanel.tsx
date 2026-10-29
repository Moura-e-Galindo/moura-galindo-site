import { OPCOES_ADICIONAL, OPCOES_ETAPA } from "@/lib/escala-5x2/constants";
import type { ParametrosForm, Teto } from "@/lib/escala-5x2/types";
import { Panel } from "./Panel";
import { fieldClass, helpClass, labelClass, numericFieldClass } from "./classes";

interface Props {
  parametros: ParametrosForm;
  onChange: (alteracao: Partial<ParametrosForm>) => void;
  onEtapaChange: (etapa: Teto) => void;
}

export function ParametrosPanel({ parametros, onChange, onEtapaChange }: Props) {
  return (
    <Panel title="Parâmetros">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="salario" className={labelClass}>Salário mensal (R$)</label>
          <input
            id="salario"
            type="number"
            min={0}
            step={50}
            inputMode="decimal"
            value={parametros.salario}
            onChange={(event) => onChange({ salario: event.target.value })}
            className={numericFieldClass}
          />
        </div>

        <div>
          <label htmlFor="etapa" className={labelClass}>Etapa da transição</label>
          <select
            id="etapa"
            value={parametros.etapa}
            onChange={(event) => onEtapaChange(Number(event.target.value) as Teto)}
            className={fieldClass}
          >
            {OPCOES_ETAPA.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="adicional" className={labelClass}>Adicional de hora extra</label>
          <select
            id="adicional"
            value={parametros.adicionalPercentual}
            onChange={(event) => onChange({ adicionalPercentual: Number(event.target.value) })}
            className={fieldClass}
          >
            {OPCOES_ADICIONAL.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="normaColetiva" className={labelClass}>Há norma coletiva vigente</label>
          <select
            id="normaColetiva"
            value={parametros.temNormaColetiva ? "sim" : "nao"}
            onChange={(event) => onChange({ temNormaColetiva: event.target.value === "sim" })}
            className={fieldClass}
          >
            <option value="sim">Sim, com cláusula de jornada</option>
            <option value="nao">Não, ou sem cláusula</option>
          </select>
        </div>
      </div>

      <p className={helpClass}>
        Sem norma coletiva, a jornada diária não pode ultrapassar oito horas. Na primeira etapa
        isso limita a semana a 40h, e o que exceder é hora extraordinária.
      </p>
    </Panel>
  );
}
