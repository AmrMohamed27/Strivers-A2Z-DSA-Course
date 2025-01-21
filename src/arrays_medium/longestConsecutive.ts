export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let max = 0;
  for (const num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let i = 0;
    while (set.has(num + i)) {
      i++;
    }
    max = Math.max(max, i);
  }
  return max;
}
