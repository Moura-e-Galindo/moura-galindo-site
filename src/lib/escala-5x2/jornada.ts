import { MODELOS } from "./constants";
import type { AtalhoEscala, HorariosDia, PadraoHorario, Semana, Teto } from "./types";

const TOTAL_DIAS = 7;
const LIMITE_TRABALHO_CONTINUO = 360;
const JORNADA_DIARIA_MAXIMA = 960;

/** Intervalo mínimo do art. 71 da CLT para a jornada informada. */
export function intervaloExigido(jornada: number): number {
  if (jornada > 360) return 60;
  if (jornada > 240) return 15;
  return 0;
}

export function calcularSaida(semana: Semana, dia: number): number {
  return semana.entrada[dia] + semana.minutos[dia] + semana.intervalo[dia];
}

/**
 * Janela do intervalo sugerida no meio da jornada, arredondada em 30 minutos
 * e limitada a seis horas de trabalho contínuo.
 */
function janelaIntervalo(semana: Semana, dia: number) {
  const jornada = semana.minutos[dia];
  const pausa = semana.intervalo[dia];
  if (!jornada || !pausa) return null;

  let primeiroPeriodo = Math.round(jornada / 2 / 30) * 30;
  if (primeiroPeriodo > LIMITE_TRABALHO_CONTINUO) primeiroPeriodo = LIMITE_TRABALHO_CONTINUO;
  if (primeiroPeriodo < 30) primeiroPeriodo = Math.min(jornada, 30);

  const inicio = semana.entrada[dia] + primeiroPeriodo;
  return { inicio, retorno: inicio + pausa };
}

export function horariosDoDia(semana: Semana, dia: number): HorariosDia | null {
  const jornada = semana.minutos[dia];
  if (!jornada) return null;

  const janela = janelaIntervalo(semana, dia);
  return {
    entrada: semana.entrada[dia],
    jornada,
    pausa: semana.intervalo[dia],
    inicioIntervalo: janela ? janela.inicio : null,
    retorno: janela ? janela.retorno : null,
    saida: calcularSaida(semana, dia)
  };
}

/** Com a saída informada, a jornada é o tempo entre entrada e saída, menos a pausa. */
export function jornadaPelaSaida(entrada: number, intervalo: number, saida: number): number {
  let bruto = saida - entrada;
  if (bruto < 0) bruto += 1440;
  const liquida = bruto - intervalo;
  return liquida > 0 && liquida <= JORNADA_DIARIA_MAXIMA ? liquida : 0;
}

export function aplicarAtalho(semana: Semana, atalho: AtalhoEscala, teto: Teto): Semana {
  if (atalho === "zerar") {
    return {
      ...semana,
      minutos: Array(TOTAL_DIAS).fill(0),
      folga: Array(TOTAL_DIAS).fill(false)
    };
  }

  const base = MODELOS[atalho][teto] ?? MODELOS.uniforme[teto];
  return {
    ...semana,
    minutos: [...base],
    folga: base.map((minutos) => minutos === 0)
  };
}

export function aplicarPadrao(semana: Semana, padrao: PadraoHorario): Semana {
  const proxima: Semana = {
    minutos: [...semana.minutos],
    folga: [...semana.folga],
    entrada: [...semana.entrada],
    intervalo: [...semana.intervalo]
  };

  for (let dia = 0; dia < TOTAL_DIAS; dia++) {
    if (proxima.folga[dia]) continue;
    if (padrao.entrada !== null) proxima.entrada[dia] = padrao.entrada;
    proxima.intervalo[dia] = padrao.intervalo;
    if (padrao.saida !== null) {
      proxima.minutos[dia] = jornadaPelaSaida(proxima.entrada[dia], padrao.intervalo, padrao.saida);
    }
  }

  return proxima;
}
