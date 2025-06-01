export function shortDescription(text) {
  if (!text) return 'Описание не указано'
  const words = text.trim().split(/\s+/)
  const sliced = words.slice(0, 12)
  return sliced.join(' ') + (words.length > 12 ? '…' : '')
}
