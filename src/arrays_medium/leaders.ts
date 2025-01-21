export function leaders(nums: number[]): number[] {
  let max = nums[nums.length - 1];
  let result: number[] = [max];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= max) {
      max = nums[i];
      result.push(max);
    }
  }
  return result.reverse();
}
