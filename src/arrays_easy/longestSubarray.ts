export function longestSubarray(nums: number[], k: number): number {
  let left = 0,
    right = 0;
  let maxLength = 0;
  let sum = nums[0];
  while (right < nums.length) {
    while (left < nums.length && sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
    if (right < nums.length) sum += nums[right];
  }
  return maxLength;
}
