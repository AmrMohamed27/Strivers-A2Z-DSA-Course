export function findMin(nums: number[]): number {
  return binarySearch(nums, 0, nums.length - 1);
}

function binarySearch(nums: number[], lo: number, hi: number): number {
  // Base case
  if (lo >= hi) return nums[lo];

  const mid = Math.floor((lo + hi) / 2);

  if (nums[mid] < nums[hi]) {
    return binarySearch(nums, lo, mid);
  } else {
    return binarySearch(nums, lo + 1, hi);
  }
}
