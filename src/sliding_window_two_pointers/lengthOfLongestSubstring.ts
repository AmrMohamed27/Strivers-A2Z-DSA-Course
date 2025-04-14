export function lengthOfLongestSubstring(s: string): number {
  let map = new Map<string, number>();
  let result = 0;
  let left = 0,
    right = 0;
  while (right < s.length) {
    const rightChar = s.charAt(right);
    if (!map.has(rightChar) || map.get(rightChar)! < left) {
      map.set(rightChar, right);
      result = Math.max(result, right - left + 1);
      right++;
    } else {
      left = map.get(rightChar)! + 1;
    }
  }
  return result;
}
