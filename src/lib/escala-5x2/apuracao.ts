import { gerarAvisos } from "./avisos";
import { intervaloExigido } from "./jornada";
import type { Apuracao, Parametros, Semana } from "./types";

/** Fator de conversão de semana para mês. */
const SEMANAS_POR_MES = 30 / 7;

/**
 * Teto efetivo: na primeira etapa (42h), sem norma coletiva que amplie a
 * jornada diária, cinco dias de 8h limitam a semana a 40h.
 */
function calcularTetoAplicavel({ etapa, temNormaColetiva }: Parametros): number {
  return etapa === 42 && !temNormaColetiva ? 40 : etapa;
}

export function apurar(semana: Semana, parametros: Parametros): Apuracao {
  const tetoAplicavel = calcularTetoAplicavel(parametros);
  const tetoMin = tetoAplicavel * 60;
  const adicional = parametros.adicionalPercentual / 100;

  let totalMin = 0;
  let diasTrabalhados = 0;
  let repousos = 0;
  let maiorDia = 0;
  let diaIntervaloCurto: number | null = null;

  semana.minutos.forEach((minutos, dia) => {
    if (semana.folga[dia]) {
      repousos++;
      return;
    }
    totalMin += minutos;
    if (minutos > 0) diasTrabalhados++;
    if (minutos > maiorDia) maiorDia = minutos;
    if (
      minutos > 0
      && semana.intervalo[dia] < intervaloExigido(minutos)
      && diaIntervaloCurto === null
    ) {
      diaIntervaloCurto = dia;
    }
  });

  const jornadaNormalMin = Math.min(totalMin, tetoMin);
  const divisor = (jornadaNormalMin / 60) / 6 * 30;
  const valorHora = divisor > 0 ? parametros.salario / divisor : 0;
  const valorHoraExtra = valorHora * (1 + adicional);

  const excedenteSemanal = Math.max(0, totalMin - tetoMin);
  const horasExtrasMesMin = excedenteSemanal * SEMANAS_POR_MES;
  const custoHorasExtras = (horasExtrasMesMin / 60) * valorHoraExtra;

  const repousosMes = repousos * SEMANAS_POR_MES;
  const diasUteis = Math.max(1, 30 - repousosMes);
  const custoRepouso = (custoHorasExtras / diasUteis) * repousosMes;
  const total = parametros.salario + custoHorasExtras + custoRepouso;
  const reposicaoContratacao = (horasExtrasMesMin / 60) * valorHora;

  const { avisos, gravidade } = gerarAvisos({
    semana,
    totalMin,
    repousos,
    maiorDia,
    diaIntervaloCurto,
    excedenteSemanal,
    tetoAplicavel,
    adicional,
    temNormaColetiva: parametros.temNormaColetiva
  });

  return {
    teto: parametros.etapa,
    tetoAplicavel,
    totalMin,
    diasTrabalhados,
    repousos,
    jornadaNormalMin,
    divisor,
    salario: parametros.salario,
    adicional,
    valorHora,
    valorHoraExtra,
    excedenteSemanal,
    horasExtrasMesMin,
    custoHorasExtras,
    repousosMes,
    diasUteis,
    custoRepouso,
    total,
    reposicaoContratacao,
    avisos,
    gravidade
  };
}
