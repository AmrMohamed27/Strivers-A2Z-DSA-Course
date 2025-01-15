export function twoSum(nums: number[], target: number): number[] {
  nums = nums.sort();
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [nums[left], nums[right]];
    }
  }
  return [-1, -1];
}
