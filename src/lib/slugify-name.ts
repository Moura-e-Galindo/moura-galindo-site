/**
 * Converte um nome proprio em um slug usado para nomes de arquivo.
 *
 * - Remove acentos (NFD + diacriticos)
 * - Coloca em minusculas
 * - Pega apenas as primeiras `wordCount` palavras
 * - Junta as palavras com hifen
 *
 * Exemplos:
 *   slugifyName("Jean Bezerra de Moura")          -> "jean-bezerra"
 *   slugifyName("Perpetua Dantas")                 -> "perpetua-dantas"
 *   slugifyName("Kilma Galindo do Nascimento", 3)  -> "kilma-galindo-do"
 *
 * @param name      Nome completo da pessoa.
 * @param wordCount Quantas palavras iniciais usar. Padrao: 2.
 */
export function slugifyName(name: string, wordCount: number = 2): string {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .slice(0, wordCount)
    .join("-");
}
