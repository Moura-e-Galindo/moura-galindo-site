/**
 * As janelas de acesso são definidas e exibidas no horário de Brasília.
 * O Brasil não adota horário de verão desde 2019, então o deslocamento é fixo.
 */
const TIME_ZONE = "America/Recife";
const BRASILIA_OFFSET = "-03:00";
const BRASILIA_OFFSET_MS = -3 * 60 * 60 * 1000;

const DATA_EXTENSO = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: TIME_ZONE
});

const HORA_PARTES = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: TIME_ZONE
});

function formatHora(date: Date): string {
  const partes = HORA_PARTES.formatToParts(date);
  const hora = Number(partes.find((parte) => parte.type === "hour")?.value ?? 0);
  const minuto = partes.find((parte) => parte.type === "minute")?.value ?? "00";
  return minuto === "00" ? `${hora}h` : `${hora}h${minuto}`;
}

/** "28 de outubro de 2026, às 11h" */
export function formatDataHoraExtenso(value: string): string {
  const date = new Date(value);
  return `${DATA_EXTENSO.format(date)}, às ${formatHora(date)}`;
}

/** Converte um ISO para o valor de um `<input type="datetime-local">` em Brasília. */
export function toBrasiliaInputValue(value: string | null): string {
  if (!value) return "";
  const date = new Date(Date.parse(value) + BRASILIA_OFFSET_MS);
  return date.toISOString().slice(0, 16);
}

/** Converte o valor de um `<input type="datetime-local">` (Brasília) para ISO. */
export function fromBrasiliaInputValue(value: string): string | null {
  if (!value) return null;
  const date = new Date(`${value}:00${BRASILIA_OFFSET}`);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}
