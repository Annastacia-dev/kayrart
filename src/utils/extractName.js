export function extractTwitterUsername(link) {
  const parts = link?.split('/');
  return parts ? parts[parts.length - 1] : ""
}
