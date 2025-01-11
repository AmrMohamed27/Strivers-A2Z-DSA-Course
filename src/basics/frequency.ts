export function frequency(arr: number[]): Map<number, number> {
  const map = new Map<number, number>();
  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      let freq = map.get(num)!;
      map.set(num, freq + 1);
    }
  }
  return map;
}
