function removeSpecialCharsAndSpaces(text: string) {
  const allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789 ";
  return text
    .toLowerCase()
    .replaceAll("   ", "  ")
    .replaceAll("  ", " ")
    .split("")
    .filter((char) => allowedChars.includes(char))
    .join("");
}

export default function Search(text: string, searchQuery: string) {
  const lowerSearchQuery = removeSpecialCharsAndSpaces(searchQuery);
  const lowerText = removeSpecialCharsAndSpaces(text);

  return lowerText.includes(lowerSearchQuery);
}
