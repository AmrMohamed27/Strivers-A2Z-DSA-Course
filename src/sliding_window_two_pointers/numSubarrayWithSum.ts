export function numSubarraysWithSum(nums: number[], goal: number): number {
  // Because we can't use a sliding window to calculate the number of subarrays with sum equal to goal,
  // Instead we use it to calculate the number of subarrays with sum less than or equal to goal , and then subtract from it
  // the number of subarrays with sum less than or equal to goal - 1, so we end up with the required number.
  return helper(nums, goal) - helper(nums, goal - 1);
}

function helper(nums: number[], goal: number): number {
  // We have to add this edge case for the subtraction if the original goal was 0
  if (goal < 0) return 0;
  let result = 0,
    sum = 0;
  let left = 0,
    right = 0;
  for (; right < nums.length; right++) {
    sum += nums[right];
    while (left <= right && sum > goal) {
      sum -= nums[left];
      left++;
    }
    result += right - left + 1;
  }
  return result;
}
