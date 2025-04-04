export function findKthRotation(nums: number[]): number {
  return binarySearch(nums, 0, nums.length - 1, 0);
}

function binarySearch(
  nums: number[],
  lo: number,
  hi: number,
  k: number
): number {
  // Base cases
  if (lo >= hi) return k;
  //   If the left most element is less than the right most element, the array is already sorted so we return k
  if (nums[lo] < nums[hi]) return k;
  const mid = Math.floor((lo + hi) / 2);

  if (nums[mid] < nums[hi]) {
    // We only check in the left half as this is where the rotated elements exist
    return binarySearch(nums, lo, mid, k);
  } else {
    // We are in the left half and we have encountered a rotated element, so we increment k and increment the left pointer to find if there is other rotated elements
    return binarySearch(nums, lo + 1, hi, k + 1);
  }
}
