import type { AtalhoEscala, ModeloEscala, PadraoHorario, ParametrosForm, Semana, Teto } from "./types";

export const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"] as const;

export const OPCOES_INTERVALO: ReadonlyArray<{ value: number; label: string }> = [
  { value: 0, label: "Sem intervalo" },
  { value: 15, label: "15 minutos" },
  { value: 30, label: "30 minutos" },
  { value: 60, label: "1h" },
  { value: 75, label: "1h15" },
  { value: 90, label: "1h30" },
  { value: 105, label: "1h45" },
  { value: 120, label: "2h" }
];

export const OPCOES_ETAPA: ReadonlyArray<{ value: Teto; label: string }> = [
  { value: 44, label: "Até 15/12/2026 — teto de 44h" },
  { value: 42, label: "1ª etapa, de 16/12/2026 — teto de 42h" },
  { value: 40, label: "2ª etapa, de 16/12/2027 — teto de 40h" }
];

export const OPCOES_ADICIONAL: ReadonlyArray<{ value: number; label: string }> = [
  { value: 50, label: "50% — mínimo constitucional" },
  { value: 70, label: "70% — convenção do comércio" },
  { value: 100, label: "100% — domingo ou feriado em dobro" }
];

/** Jornada diária (minutos) de cada modelo de escala, por teto. Zero = folga. */
export const MODELOS: Record<ModeloEscala, Record<Teto, number[]>> = {
  uniforme: {
    42: [504, 504, 504, 0, 504, 504, 0],
    40: [480, 480, 480, 0, 480, 480, 0],
    44: [528, 528, 528, 0, 528, 528, 0]
  },
  sabado: {
    42: [540, 540, 540, 0, 540, 360, 0],
    40: [510, 510, 510, 0, 510, 360, 0],
    44: [552, 552, 552, 0, 552, 432, 0]
  },
  pico: {
    42: [420, 420, 420, 420, 420, 420, 0],
    40: [400, 400, 400, 400, 400, 400, 0],
    44: [440, 440, 440, 440, 440, 440, 0]
  },
  atual: {
    44: [480, 480, 480, 480, 480, 240, 0],
    42: [480, 480, 480, 480, 480, 120, 0],
    40: [480, 480, 480, 480, 400, 0, 0]
  }
};

export const ATALHOS: ReadonlyArray<{ value: AtalhoEscala; label: string }> = [
  { value: "uniforme", label: "Jornada uniforme" },
  { value: "sabado", label: "Sábado reduzido" },
  { value: "pico", label: "Semana de pico" },
  { value: "atual", label: "Escala 6x1 atual" },
  { value: "zerar", label: "Zerar" }
];

export const SEMANA_INICIAL: Semana = {
  minutos: [504, 504, 504, 0, 504, 504, 0],
  folga: [false, false, false, true, false, false, true],
  entrada: [480, 480, 480, 480, 480, 480, 480],
  intervalo: [60, 60, 60, 60, 60, 60, 60]
};

export const PARAMETROS_INICIAIS: ParametrosForm = {
  salario: "2000",
  etapa: 42,
  adicionalPercentual: 70,
  temNormaColetiva: true
};

export const PADRAO_INICIAL: PadraoHorario = {
  entrada: 480,
  intervalo: 60,
  saida: 1044
};
