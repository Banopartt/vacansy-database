export function extractFirstName(fullName) {
  const parts = fullName.trim().split(/\s+/)

  // эвристика: отчества заканчиваются на эти суффиксы
  const patronymicSuffixes = ['вич', 'ич', 'вна', 'ична', 'евна']

  // ищем слово, которое не фамилия (часто первое или последнее) и не отчество (по суффиксу)
  for (const part of parts) {
    const lower = part.toLowerCase()
    const isPatronymic = patronymicSuffixes.some((suffix) => lower.endsWith(suffix))

    if (!isPatronymic && part[0] === part[0].toUpperCase()) {
      return part // считаем это именем
    }
  }

  return null
}
