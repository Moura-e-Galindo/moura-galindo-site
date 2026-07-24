/**
 * Utilitários de formatação de data e hora usados nas páginas de notícias.
 *
 * As notícias armazenam `date` (ISO, ex.: "2026-04-12") e `time` (ex.: "09:30")
 * separadamente para facilitar uma futura migração para banco de dados, onde
 * esses campos tendem a vir como colunas distintas (DATE / TIME ou um TIMESTAMP).
 */

const MESES = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
] as const;

/**
 * Formata uma data ISO ("yyyy-MM-dd") em formato longo, em português.
 * Ex.: formatNoticiaDate("2026-04-12") -> "12 de abril de 2026"
 */
export function formatNoticiaDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return `${day} de ${MESES[month - 1]} de ${year}`;
}

/**
 * Formata data e hora juntas, em português.
 * Ex.: formatNoticiaDateTime("2026-04-12", "09:30") -> "12 de abril de 2026 às 09h30"
 */
export function formatNoticiaDateTime(date: string, time: string): string {
  const [hour, minute] = time.split(":");
  return `${formatNoticiaDate(date)} às ${hour}h${minute}`;
}
