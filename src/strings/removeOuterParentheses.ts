export function removeOuterParentheses(s: string): string {
  let depth = 0;
  const OPENING_PARENTHESIS = "(";
  const CLOSING_PARENTHESIS = ")";
  let result = "";
  for (const char of s) {
    if (char === OPENING_PARENTHESIS) {
      if (depth > 0) {
        result += char;
      }
      depth++;
    } else {
      depth--;
      if (depth > 0) {
        result += char;
      }
    }
  }
  return result;
}
