import { formatHm } from "./format";
import type { Apuracao, TipoAviso } from "./types";

export interface Veredito {
  tipo: TipoAviso;
  rotulo: string;
  frase: string;
}

export function getVeredito(apuracao: Apuracao): Veredito {
  const { gravidade, totalMin, diasTrabalhados, repousos } = apuracao;

  const tipo: TipoAviso = gravidade === 2 ? "erro" : gravidade === 1 ? "atencao" : "ok";
  const rotulo = gravidade === 2 ? "Irregular" : gravidade === 1 ? "Com ressalvas" : "Conforme";

  let frase: string;
  if (totalMin === 0) {
    frase = "Preencha o ponto de cada dia para iniciar a apuração.";
  } else if (gravidade === 2) {
    frase = "A escala, como está, não se sustenta diante da Emenda Constitucional 141. Veja os apontamentos abaixo.";
  } else if (gravidade === 1) {
    frase = "A escala é viável, mas gera hora extraordinária ou depende de cláusula coletiva. Veja os apontamentos.";
  } else {
    frase = `Jornada de ${formatHm(totalMin)} em ${diasTrabalhados} dias, com ${repousos} dias de repouso.`;
  }

  return { tipo, rotulo, frase };
}

/** Texto explicativo do teto aplicável. */
export function getExplicacaoTeto(apuracao: Apuracao): string {
  const { teto, tetoAplicavel, jornadaNormalMin, divisor } = apuracao;
  if (tetoAplicavel !== teto) {
    return `A etapa admite ${teto}h, mas sem norma coletiva a jornada diária fica em 8h e a semana não passa de 40h. O que exceder é hora extraordinária.`;
  }
  return `Jornada normal apurada de ${formatHm(jornadaNormalMin)}, base do divisor ${Math.round(divisor)}.`;
}

/** Nota sobre o cálculo do repouso semanal remunerado sobre as horas extras. */
export function getNotaRepouso(apuracao: Apuracao): string {
  const { diasUteis, repousosMes } = apuracao;
  return `Repouso apurado sobre ${Math.round(diasUteis)} dias úteis e ${Math.round(repousosMes)} dias de repouso no mês, o que corresponde a um fator de ${Math.round((repousosMes / diasUteis) * 100)}% sobre o valor das horas extras.`;
}
