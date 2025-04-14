function longestOnes(nums: number[], k: number): number {
  let result = 0;
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right] === 1) {
      result = Math.max(result, right - left + 1);
      right++;
      continue;
    } else if (k > 0) {
      result = Math.max(result, right - left + 1);
      k--;
      right++;
      continue;
    } else {
      while (nums[left] === 1) {
        left++;
      }
      left++;
      k = 1;
    }
  }
  return result;
}
