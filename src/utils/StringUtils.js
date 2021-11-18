export function capitalize(text) {
  if (!text || text === undefined) return '';
  return text[0].toUpperCase() + text.slice(1);
}
