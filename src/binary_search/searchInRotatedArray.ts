export function searchInRotatedArray(nums: number[], target: number): number {
  return binarySearch(nums, 0, nums.length - 1, target);
}

function binarySearch(
  nums: number[],
  lo: number,
  hi: number,
  target: number
): number {
  // Base case
  if (lo > hi) return -1;
  const mid = Math.floor((lo + hi) / 2);
  if (nums[mid] === target) return mid;
  //   Left half is sorted
  if (nums[lo] <= nums[mid]) {
    // target is in the sorted half
    if (nums[lo] <= target && target <= nums[mid]) {
      return binarySearch(nums, lo, mid - 1, target);
    }
    // Target Is not in the sorted half
    else {
      return binarySearch(nums, mid + 1, hi, target);
    }
  }
  //   Right half is sorted
  else {
    // target is in the sorted half
    if (nums[mid] <= target && target <= nums[hi]) {
      return binarySearch(nums, mid + 1, hi, target);
    }
    // target is not in the sorted half
    else {
      return binarySearch(nums, lo, mid - 1, target);
    }
  }
}
