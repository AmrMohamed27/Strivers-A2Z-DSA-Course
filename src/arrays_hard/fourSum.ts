export function fourSum(nums: number[], target: number): number[][] {
  let result: number[][] = [];
  nums.sort((a, b) => a - b);
  // First Fixed Pointer
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // Second Fixed Pointer
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      // Left and Right moving pointers
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[left] + nums[right] + nums[i] + nums[j];
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          result.push([nums[left], nums[right], nums[i], nums[j]]);
          do {
            left++;
          } while (left < right && nums[left] === nums[left - 1]);
          do {
            right--;
          } while (left < right && nums[right] === nums[right + 1]);
        }
      }
    }
  }
  return result;
}
