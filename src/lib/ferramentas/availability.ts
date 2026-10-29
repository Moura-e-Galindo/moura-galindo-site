import type { FaseAcesso, JanelaAcesso } from "./types";

function toTimestamp(value: string | null): number | null {
  if (!value) return null;
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? null : timestamp;
}

/** Calcula em que fase a ferramenta está no instante `now` (ms). */
export function getFaseAcesso(janela: JanelaAcesso, now: number): FaseAcesso {
  if (!janela.enabled) return "desativada";

  const abre = toTimestamp(janela.available_from);
  const fecha = toTimestamp(janela.available_until);

  if (abre !== null && now < abre) return "antes";
  if (fecha !== null && now >= fecha) return "encerrada";
  return "aberta";
}

/** Milissegundos até a liberação ou o encerramento, conforme a fase. */
export function getTempoRestante(janela: JanelaAcesso, now: number): number | null {
  const fase = getFaseAcesso(janela, now);
  if (fase === "antes") return (toTimestamp(janela.available_from) ?? now) - now;
  if (fase === "aberta") {
    const fecha = toTimestamp(janela.available_until);
    return fecha === null ? null : fecha - now;
  }
  return null;
}

/** Duração legível: "45min", "3h", "5h20", "2 dias e 4h". */
export function formatDuracao(ms: number): string {
  if (!(ms > 0)) return "menos de um minuto";

  const totalMinutos = Math.floor(ms / 60000);
  if (totalMinutos === 0) return "menos de um minuto";

  const dias = Math.floor(totalMinutos / 1440);
  const horas = Math.floor((totalMinutos % 1440) / 60);
  const minutos = totalMinutos % 60;

  if (dias > 0) {
    const rotuloDias = dias === 1 ? "1 dia" : `${dias} dias`;
    return horas > 0 ? `${rotuloDias} e ${horas}h` : rotuloDias;
  }
  if (horas === 0) return `${minutos}min`;
  if (minutos === 0) return `${horas}h`;
  return `${horas}h${String(minutos).padStart(2, "0")}`;
}
