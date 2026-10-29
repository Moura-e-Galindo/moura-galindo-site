import { DIAS } from "@/lib/escala-5x2/constants";
import { formatHm, formatRelogio } from "@/lib/escala-5x2/format";
import { horariosDoDia } from "@/lib/escala-5x2/jornada";
import type { Semana } from "@/lib/escala-5x2/types";
import { Panel } from "./Panel";
import { helpClass } from "./classes";

const COLUNAS = ["Entrada", "Intervalo", "Retorno", "Saída", "Jornada", "Permanência"];
const VAZIO = ["—", "—", "—", "—", "—", "—"];

function colunasDoDia(semana: Semana, dia: number): string[] {
  if (semana.folga[dia]) return ["folga", "—", "—", "—", "—", "—"];

  const horarios = horariosDoDia(semana, dia);
  if (!horarios) return VAZIO;

  return [
    formatRelogio(horarios.entrada),
    horarios.inicioIntervalo !== null ? formatRelogio(horarios.inicioIntervalo) : "—",
    horarios.retorno !== null ? formatRelogio(horarios.retorno) : "—",
    formatRelogio(horarios.saida),
    formatHm(horarios.jornada),
    formatHm(horarios.jornada + horarios.pausa)
  ];
}

export function HorariosPanel({ semana }: { semana: Semana }) {
  return (
    <Panel title="Horários da semana">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-2 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Dia
              </th>
              {COLUNAS.map((coluna) => (
                <th
                  key={coluna}
                  className="px-2 py-2 text-right text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {coluna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {DIAS.map((nome, dia) => (
              <tr key={nome}>
                <td className="px-2 py-2.5 text-foreground">{nome}</td>
                {colunasDoDia(semana, dia).map((valor, indice) => (
                  <td
                    key={COLUNAS[indice]}
                    className="px-2 py-2.5 text-right font-mono tabular-nums text-foreground"
                  >
                    {valor}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={helpClass}>
        A janela do intervalo é sugerida no meio da jornada, respeitado o limite de seis horas
        contínuas de trabalho do art. 71 da CLT. A permanência é a soma da jornada com o intervalo.
      </p>
    </Panel>
  );
}
