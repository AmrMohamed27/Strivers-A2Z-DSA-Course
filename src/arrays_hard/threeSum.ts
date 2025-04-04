export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let result: number[][] = [];
  for (let fixed = 0; fixed < nums.length; fixed++) {
    // Skip Duplicate Numbers
    if (fixed !== 0 && nums[fixed] === nums[fixed - 1]) {
      continue;
    }
    let left = fixed + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[fixed];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[left], nums[right], nums[fixed]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return result;
}
