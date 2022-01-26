/**
 * Truncates a text
 * @param { string } text - The string to truncate
 * @param { number } maxLength - The maximum length of the string. Defaults
 * to 30.
 */
 export function truncate(text: string, maxLength: number) {
  return text.length <= maxLength ? text : `${text.slice(0, maxLength - 1)}...`;
}