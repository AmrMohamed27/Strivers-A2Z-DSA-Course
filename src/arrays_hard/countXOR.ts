export function countXOR(nums: number[], k: number): number {
  let count = 0;
  let map = new Map<number, number>();
  let prefixXOR = 0;
  for (const num of nums) {
    prefixXOR ^= num;
    let remove = prefixXOR ^ k;
    if (map.has(remove)) {
      count += map.get(remove)!;
    }
    map.set(prefixXOR, (map.get(prefixXOR) || 0) + 1);
  }
  if (map.has(k)) {
    count += map.get(k)!;
  }
  return count;
}
