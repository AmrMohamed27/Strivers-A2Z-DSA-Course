export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let map = new Map<string, string>();
  let visited = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    let char1 = s[i];
    let char2 = t[i];
    if (!map.has(char1)) {
      if (visited.has(char2)) {
        return false;
      }
      map.set(char1, char2);
      visited.add(char2);
    } else if (map.get(char1) !== char2) {
      return false;
    }
  }
  return true;
}
