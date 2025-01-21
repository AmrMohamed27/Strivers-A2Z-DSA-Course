export function subarraySum(nums: number[], k: number): number {
  let map = new Map<number, number>();
  let count = 0;
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // Add current element to prefix sum
    prefixSum += nums[i];
    // Get the difference
    let remove = prefixSum - k;
    // Add the count of subarrays that sum to the difference
    if (map.has(remove)) {
      count += map.get(remove)!;
    }
    // Update the count of subarrays that have the prefix sum
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  // Check if k exists in the map
  if (map.has(k)) {
    count += map.get(k)!;
  }
  return count;
}
