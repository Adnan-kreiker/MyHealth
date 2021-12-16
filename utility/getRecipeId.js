export function getRecipeId(string) {
  const start = string.indexOf('_') + 1
  return string.slice(start)
}
