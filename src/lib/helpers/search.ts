export default function Search(text: string, searchQuery: string) {
  let lowerSearchQuery = searchQuery.toLowerCase().replace(/./, "");
  for (let i of ".()") {
    lowerSearchQuery = lowerSearchQuery.replaceAll(i, "");
  }
  lowerSearchQuery = lowerSearchQuery
    .replaceAll("   ", "  ")
    .replaceAll("  ", " ");

  return text.includes(lowerSearchQuery);
}
