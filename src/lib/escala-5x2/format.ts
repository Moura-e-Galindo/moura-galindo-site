function doisDigitos(valor: number): string {
  return String(valor).padStart(2, "0");
}

function normalizarDia(min: number): number {
  return ((Math.round(min) % 1440) + 1440) % 1440;
}

/** Interpreta a jornada digitada ("8:24", "8h24", "8,4", "8") em minutos. */
export function parseJornada(texto: string): number {
  const valor = texto.trim().toLowerCase().replace(/\s/g, "");
  if (!valor) return 0;

  const relogio = valor.match(/^(\d{1,2})[:h](\d{1,2})?$/);
  if (relogio) {
    return (parseInt(relogio[1], 10) || 0) * 60 + (parseInt(relogio[2], 10) || 0);
  }

  const decimal = valor.replace(",", ".");
  if (/^\d{1,2}(\.\d+)?$/.test(decimal)) return Math.round(parseFloat(decimal) * 60);
  return 0;
}

/** Duração em minutos para "8h24", "45min", "0h". */
export function formatHm(min: number): string {
  if (!Number.isFinite(min)) return "—";

  const sinal = min < 0 ? "-" : "";
  const absoluto = Math.abs(Math.round(min));
  const horas = Math.floor(absoluto / 60);
  const minutos = absoluto % 60;

  if (horas === 0 && minutos === 0) return "0h";
  if (horas === 0) return `${sinal}${minutos}min`;
  if (minutos === 0) return `${sinal}${horas}h`;
  return `${sinal}${horas}h${doisDigitos(minutos)}`;
}

/** Horário do dia em minutos para "8h" ou "12h30". */
export function formatRelogio(min: number): string {
  const total = normalizarDia(min);
  const horas = Math.floor(total / 60);
  const minutos = total % 60;
  return minutos === 0 ? `${horas}h` : `${horas}h${doisDigitos(minutos)}`;
}

/** Valor exibido no campo de jornada ("8:24" ou "8"). */
export function formatJornadaCampo(min: number): string {
  if (!min) return "";
  const horas = Math.floor(min / 60);
  const minutos = min % 60;
  return minutos ? `${horas}:${doisDigitos(minutos)}` : String(horas);
}

/** Valor de um `<input type="time">` ("08:00") para minutos. */
export function parseHorario(valor: string): number | null {
  const partes = valor.split(":");
  if (partes.length < 2) return null;
  return (parseInt(partes[0], 10) || 0) * 60 + (parseInt(partes[1], 10) || 0);
}

/** Minutos para o valor de um `<input type="time">` ("08:00"). */
export function formatHorarioInput(min: number): string {
  const total = normalizarDia(min);
  return `${doisDigitos(Math.floor(total / 60))}:${doisDigitos(total % 60)}`;
}

export function formatBRL(valor: number): string {
  if (!Number.isFinite(valor)) return "—";
  return `R$ ${valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
