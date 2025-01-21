/*
  Kadane's Algorithm
  - The idea of Kadane’s algorithm is to traverse over the array from left to right and for each element,
    find the maximum sum among all subarrays ending at that element. The result will be the maximum of all these values.
  How do we do that?
  We loop over the array, and for each element we have two choices:
    - Choice 1: Extend the maximum sum subarray ending at the previous element by adding the current element to it.
      If the maximum subarray sum ending at the previous index is positive, then it is always better to extend the subarray.
    - Choice 2: Start a new subarray starting from the current element. If the maximum subarray sum ending at the previous index is negative,
      it is always better to start a new subarray from the current element.

*/


export function maxSubArray(nums: number[]): number {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (const num of nums) {
    sum = Math.max(num, sum + num);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
