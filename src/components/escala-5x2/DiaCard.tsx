import { useState } from "react";
import { OPCOES_INTERVALO } from "@/lib/escala-5x2/constants";
import {
  formatHm,
  formatHorarioInput,
  formatJornadaCampo,
  formatRelogio,
  parseHorario,
  parseJornada
} from "@/lib/escala-5x2/format";
import { calcularSaida, horariosDoDia } from "@/lib/escala-5x2/jornada";
import type { Semana } from "@/lib/escala-5x2/types";
import type { EscalaActions } from "@/hooks/use-escala-5x2";
import { fieldClass, labelClass, numericFieldClass } from "./classes";

type CampoEditavel = "entrada" | "saida" | "jornada";

interface Props {
  dia: number;
  nome: string;
  semana: Semana;
  actions: EscalaActions;
}

/**
 * Ponto de um dia. Os quatro campos conversam entre si: entrada, intervalo
 * ou saída recalculam a jornada; a jornada sugere a saída.
 */
export function DiaCard({ dia, nome, semana, actions }: Props) {
  // Texto dos campos enquanto estão em edição; ao sair, voltam ao valor calculado.
  const [rascunho, setRascunho] = useState<Partial<Record<CampoEditavel, string>>>({});

  const folga = semana.folga[dia];
  const minutos = semana.minutos[dia];
  const horarios = horariosDoDia(semana, dia);
  const prefixo = `dia-${dia}`;

  function editar(campo: CampoEditavel, valor: string) {
    setRascunho((atual) => ({ ...atual, [campo]: valor }));
  }

  function encerrarEdicao(campo: CampoEditavel) {
    setRascunho((atual) => ({ ...atual, [campo]: undefined }));
  }

  function handleHorario(campo: CampoEditavel, valor: string, aplicar: (min: number) => void) {
    editar(campo, valor);
    const minutosHorario = parseHorario(valor);
    if (minutosHorario !== null) aplicar(minutosHorario);
  }

  return (
    <div className={`border p-4 ${folga ? "border-dashed border-border bg-card" : "border-border bg-background"}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium text-foreground">{nome}</span>
        <label
          htmlFor={`${prefixo}-folga`}
          className="inline-flex cursor-pointer select-none items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          <input
            id={`${prefixo}-folga`}
            type="checkbox"
            checked={folga}
            onChange={(event) => actions.alterarFolga(dia, event.target.checked)}
            className="h-4 w-4 accent-gold"
          />
          Folga
        </label>
      </div>

      {!folga && (
        <div className="mt-3 grid grid-cols-2 gap-3 border-t border-dashed border-border pt-3 md:grid-cols-4">
          <div>
            <label htmlFor={`${prefixo}-entrada`} className={labelClass}>Entrada</label>
            <input
              id={`${prefixo}-entrada`}
              type="time"
              value={rascunho.entrada ?? formatHorarioInput(semana.entrada[dia])}
              onChange={(event) =>
                handleHorario("entrada", event.target.value, (min) => actions.alterarEntrada(dia, min))}
              onBlur={() => encerrarEdicao("entrada")}
              className={numericFieldClass}
            />
          </div>

          <div>
            <label htmlFor={`${prefixo}-intervalo`} className={labelClass}>Intervalo</label>
            <select
              id={`${prefixo}-intervalo`}
              value={semana.intervalo[dia]}
              onChange={(event) => actions.alterarIntervalo(dia, Number(event.target.value))}
              className={fieldClass}
            >
              {OPCOES_INTERVALO.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={`${prefixo}-saida`} className={labelClass}>Saída</label>
            <input
              id={`${prefixo}-saida`}
              type="time"
              value={rascunho.saida ?? (minutos ? formatHorarioInput(calcularSaida(semana, dia)) : "")}
              onChange={(event) =>
                handleHorario("saida", event.target.value, (min) => actions.alterarSaida(dia, min))}
              onBlur={() => encerrarEdicao("saida")}
              className={numericFieldClass}
            />
          </div>

          <div>
            <label htmlFor={`${prefixo}-jornada`} className={labelClass}>Jornada total</label>
            <input
              id={`${prefixo}-jornada`}
              type="text"
              inputMode="decimal"
              placeholder="8:24"
              value={rascunho.jornada ?? formatJornadaCampo(minutos)}
              onChange={(event) => {
                editar("jornada", event.target.value);
                actions.alterarJornada(dia, parseJornada(event.target.value));
              }}
              onBlur={() => encerrarEdicao("jornada")}
              className={`${numericFieldClass} border-gold/50 text-center font-semibold`}
            />
          </div>
        </div>
      )}

      <p className="mt-2.5 font-mono text-xs text-muted-foreground">
        {folga && "Repouso semanal remunerado"}
        {!folga && !horarios && "Informe a saída ou a jornada total"}
        {!folga && horarios && (
          <>
            {horarios.inicioIntervalo !== null && horarios.retorno !== null
              ? `Intervalo ${formatRelogio(horarios.inicioIntervalo)} às ${formatRelogio(horarios.retorno)} · jornada `
              : "Sem intervalo · jornada "}
            <b className="font-semibold text-gold-deep dark:text-gold">{formatHm(horarios.jornada)}</b>
            {` · permanência ${formatHm(horarios.jornada + horarios.pausa)}`}
          </>
        )}
      </p>
    </div>
  );
}
