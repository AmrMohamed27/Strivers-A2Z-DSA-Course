export function longestZeroSum(nums: number[]): number {
  let result = 0;
  let map = new Map<number, number>();
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (prefixSum === 0) {
      result = i + 1;
    }
    if (map.has(prefixSum)) {
      result = Math.max(result, i - map.get(prefixSum)!);
    } else {
      map.set(prefixSum, i);
    }
  }
  return result;
}
