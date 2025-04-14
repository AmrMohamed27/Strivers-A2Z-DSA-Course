export function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (const str of strs.slice(1)) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) return prefix;
    }
  }
  return prefix;
}
