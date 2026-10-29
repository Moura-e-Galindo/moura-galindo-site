import { useMemo, useState } from "react";
import { apurar } from "@/lib/escala-5x2/apuracao";
import { PARAMETROS_INICIAIS, SEMANA_INICIAL } from "@/lib/escala-5x2/constants";
import { aplicarAtalho, aplicarPadrao, jornadaPelaSaida } from "@/lib/escala-5x2/jornada";
import type {
  AtalhoEscala,
  PadraoHorario,
  ParametrosForm,
  Semana,
  Teto
} from "@/lib/escala-5x2/types";

function substituir<T>(lista: T[], indice: number, valor: T): T[] {
  return lista.map((item, i) => (i === indice ? valor : item));
}

/** Estado da calculadora da escala 5x2 e as ações que o alteram. */
export function useEscala5x2() {
  const [parametros, setParametros] = useState<ParametrosForm>(PARAMETROS_INICIAIS);
  const [semana, setSemana] = useState<Semana>(SEMANA_INICIAL);

  const apuracao = useMemo(
    () => apurar(semana, { ...parametros, salario: parseFloat(parametros.salario) || 0 }),
    [semana, parametros]
  );

  function atualizarParametros(alteracao: Partial<ParametrosForm>) {
    setParametros((atual) => ({ ...atual, ...alteracao }));
  }

  /** Ao trocar de etapa, a semana preenchida é refeita no modelo uniforme do novo teto. */
  function alterarEtapa(etapa: Teto) {
    atualizarParametros({ etapa });
    setSemana((atual) =>
      atual.minutos.every((minutos) => minutos === 0)
        ? atual
        : aplicarAtalho(atual, "uniforme", etapa)
    );
  }

  function alterarFolga(dia: number, folga: boolean) {
    setSemana((atual) => ({
      ...atual,
      folga: substituir(atual.folga, dia, folga),
      minutos: folga ? substituir(atual.minutos, dia, 0) : atual.minutos
    }));
  }

  function alterarEntrada(dia: number, entrada: number) {
    setSemana((atual) => ({ ...atual, entrada: substituir(atual.entrada, dia, entrada) }));
  }

  function alterarIntervalo(dia: number, intervalo: number) {
    setSemana((atual) => ({ ...atual, intervalo: substituir(atual.intervalo, dia, intervalo) }));
  }

  function alterarSaida(dia: number, saida: number) {
    setSemana((atual) => ({
      ...atual,
      minutos: substituir(
        atual.minutos,
        dia,
        jornadaPelaSaida(atual.entrada[dia], atual.intervalo[dia], saida)
      )
    }));
  }

  function alterarJornada(dia: number, minutos: number) {
    setSemana((atual) => ({ ...atual, minutos: substituir(atual.minutos, dia, minutos) }));
  }

  function usarAtalho(atalho: AtalhoEscala) {
    setSemana((atual) => aplicarAtalho(atual, atalho, parametros.etapa));
  }

  function usarPadrao(padrao: PadraoHorario) {
    setSemana((atual) => aplicarPadrao(atual, padrao));
  }

  return {
    parametros,
    semana,
    apuracao,
    atualizarParametros,
    alterarEtapa,
    alterarFolga,
    alterarEntrada,
    alterarIntervalo,
    alterarSaida,
    alterarJornada,
    usarAtalho,
    usarPadrao
  };
}

export type EscalaActions = Omit<ReturnType<typeof useEscala5x2>, "parametros" | "semana" | "apuracao">;
