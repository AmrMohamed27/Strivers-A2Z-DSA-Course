export function findPeakElement(nums: number[]): number {
  return binarySearch(nums, 0, nums.length - 1);
}

function binarySearch(nums: number[], lo: number, hi: number): number {
  // Base case
  if (lo >= hi) return lo;

  const mid = Math.floor((lo + hi) / 2);
  //   Get the left and right neighbours, if we are at a boundary, consider the value to be negative infinity
  const left = mid - 1 >= 0 ? nums[mid - 1] : Number.NEGATIVE_INFINITY;
  const right =
    mid + 1 < nums.length ? nums[mid + 1] : Number.NEGATIVE_INFINITY;
  //   Check if the right element is greater than mid, then we check the right half
  if (right > nums[mid]) {
    return binarySearch(nums, mid + 1, hi);
  }
  // Check if the left element is greater than mid, then we check the left half
  if (left > nums[mid]) {
    return binarySearch(nums, lo, mid - 1);
  }
  //   If the previous cases are false, then the current mid index is a peak, as we know that no two adjacent elements are equal in this array
  return mid;
}
