import { DIAS } from "./constants";
import { formatHm } from "./format";
import { intervaloExigido } from "./jornada";
import type { Aviso, Gravidade, Semana } from "./types";

interface ContextoAvisos {
  semana: Semana;
  totalMin: number;
  repousos: number;
  maiorDia: number;
  diaIntervaloCurto: number | null;
  excedenteSemanal: number;
  tetoAplicavel: number;
  adicional: number;
  temNormaColetiva: boolean;
}

/** Apontamentos da escala e a gravidade resultante (0 conforme, 1 ressalvas, 2 irregular). */
export function gerarAvisos(contexto: ContextoAvisos): { avisos: Aviso[]; gravidade: Gravidade } {
  const {
    semana, totalMin, repousos, maiorDia, diaIntervaloCurto,
    excedenteSemanal, tetoAplicavel, adicional, temNormaColetiva
  } = contexto;

  const avisos: Aviso[] = [];
  let gravidade: Gravidade = 0;
  const elevar = (nivel: Gravidade) => {
    if (nivel > gravidade) gravidade = nivel;
  };

  if (repousos === 0) {
    elevar(2);
    avisos.push({
      tipo: "erro",
      titulo: "Semana sem repouso",
      texto: "Nenhuma semana pode transcorrer sem ao menos um dia de repouso remunerado, trava expressa do § 2º do art. 7º da Constituição."
    });
  } else if (repousos === 1) {
    elevar(temNormaColetiva ? 1 : 2);
    avisos.push({
      tipo: temNormaColetiva ? "atencao" : "erro",
      titulo: "Apenas um repouso nesta semana",
      texto: temNormaColetiva
        ? "Admissível pelo regime compensatório do § 2º, desde que outra semana do mesmo mês assegure três repousos e a média mensal de dois seja alcançada."
        : "Só é possível mediante convenção ou acordo coletivo que institua o regime compensatório mensal do § 2º. Sem norma coletiva, a semana é irregular."
    });
  } else if (repousos > 2) {
    avisos.push({
      tipo: "ok",
      titulo: "Três ou mais repousos nesta semana",
      texto: "Serve para compensar semana anterior ou posterior com repouso único, no regime do § 2º."
    });
  }

  if (maiorDia > 600) {
    elevar(2);
    avisos.push({
      tipo: "erro",
      titulo: "Jornada diária acima de 10h",
      texto: `O art. 59 da CLT admite no máximo duas horas suplementares por dia. A jornada de ${formatHm(maiorDia)} extrapola esse limite.`
    });
  } else if (maiorDia > 480) {
    elevar(1);
    avisos.push({
      tipo: "atencao",
      titulo: temNormaColetiva
        ? "Jornada diária acima de 8h"
        : "Jornada diária acima de 8h sem norma coletiva",
      texto: temNormaColetiva
        ? `Amparada no art. 7º da Emenda, na primeira etapa, ou no regime de compensação do inciso XIII, na segunda. Confira se a cláusula vigente contempla a jornada de ${formatHm(maiorDia)}.`
        : "A jornada normal fica limitada a oito horas diárias. O que exceder em cada dia é trabalho extraordinário, e a semana não ultrapassa 40h de jornada normal."
    });
  }

  if (diaIntervaloCurto !== null) {
    elevar(2);
    const jornada = semana.minutos[diaIntervaloCurto];
    avisos.push({
      tipo: "erro",
      titulo: "Intervalo abaixo do mínimo legal",
      texto: `${DIAS[diaIntervaloCurto]}: jornada de ${formatHm(jornada)} exige intervalo de ${formatHm(intervaloExigido(jornada))}, e está marcado ${formatHm(semana.intervalo[diaIntervaloCurto])}.`
    });
  }

  if (excedenteSemanal > 0) {
    elevar(1);
    avisos.push({
      tipo: "atencao",
      titulo: "Jornada acima do teto aplicável",
      texto: `Excedente de ${formatHm(excedenteSemanal)} por semana sobre o teto de ${tetoAplicavel}h, remunerado como hora extraordinária com adicional de ${Math.round(adicional * 100)}%, acrescido do reflexo no repouso.`
    });
  }

  if (gravidade === 0 && totalMin > 0) {
    avisos.push({
      tipo: "ok",
      titulo: "Escala conforme",
      texto: `A jornada respeita o teto de ${tetoAplicavel}h, o limite diário de 8h, os intervalos do art. 71 da CLT e os dois dias de repouso.`
    });
  }

  return { avisos, gravidade };
}
