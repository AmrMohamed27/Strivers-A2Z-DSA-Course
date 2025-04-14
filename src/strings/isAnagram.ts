function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  // Map solution
  //   let map = new Map<string, number>();
  //   for (const char of s) {
  //     map.set(char, (map.get(char) ?? 0) + 1);
  //   }
  //   for (const char of t) {
  //     if (!map.has(char)) return false;
  //     if (map.get(char)! > 1) {
  //       map.set(char, map.get(char)! - 1);
  //     } else {
  //       map.delete(char);
  //     }
  //   }
  //   return map.size === 0;

  //   Array solution
  let arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) return false;
  }
  return true;
}
