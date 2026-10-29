/** Teto semanal de cada etapa da transição (EC 141/2026), em horas. */
export type Teto = 40 | 42 | 44;

export type ModeloEscala = "uniforme" | "sabado" | "pico" | "atual";

export type AtalhoEscala = ModeloEscala | "zerar";

/**
 * Ponto da semana. Cada array tem 7 posições (segunda a domingo),
 * com valores em minutos.
 */
export interface Semana {
  minutos: number[];
  folga: boolean[];
  entrada: number[];
  intervalo: number[];
}

/** Parâmetros da apuração. */
export interface Parametros {
  salario: number;
  etapa: Teto;
  adicionalPercentual: number;
  temNormaColetiva: boolean;
}

/** Valores do formulário de parâmetros (o salário fica como texto enquanto é digitado). */
export interface ParametrosForm extends Omit<Parametros, "salario"> {
  salario: string;
}

/** Horário padrão aplicado a todos os dias trabalhados. */
export interface PadraoHorario {
  entrada: number | null;
  intervalo: number;
  saida: number | null;
}

export interface HorariosDia {
  entrada: number;
  jornada: number;
  pausa: number;
  inicioIntervalo: number | null;
  retorno: number | null;
  saida: number;
}

export type TipoAviso = "ok" | "atencao" | "erro";

/** 0 = conforme, 1 = com ressalvas, 2 = irregular */
export type Gravidade = 0 | 1 | 2;

export interface Aviso {
  tipo: TipoAviso;
  titulo: string;
  texto: string;
}

export interface Apuracao {
  teto: Teto;
  tetoAplicavel: number;
  totalMin: number;
  diasTrabalhados: number;
  repousos: number;
  jornadaNormalMin: number;
  divisor: number;
  salario: number;
  adicional: number;
  valorHora: number;
  valorHoraExtra: number;
  excedenteSemanal: number;
  horasExtrasMesMin: number;
  custoHorasExtras: number;
  repousosMes: number;
  diasUteis: number;
  custoRepouso: number;
  total: number;
  reposicaoContratacao: number;
  avisos: Aviso[];
  gravidade: Gravidade;
}
