export function singleNonDuplicate(nums: number[]): number {
  return binarySearch(nums, 0, nums.length - 1);
}

function binarySearch(nums: number[], lo: number, hi: number): number {
  // We are going to exploit the fact that on the left of the single number, each pair begins with an even index and then odd
  //  and on the right each pair begins with an odd index and then even

  //   Base case
  if (lo >= hi) return nums[lo];

  const mid = Math.floor((lo + hi) / 2);
  const isEven = mid % 2 === 0;
  //   Check if the mid is even index and start of pair
  if (isEven && nums[mid] === nums[mid + 1]) {
    // We are on the left of the single number, so we search the right half
    return binarySearch(nums, mid + 2, hi);
  }
  //   Check if the mid is odd index and end of pair
  else if (!isEven && nums[mid] === nums[mid - 1]) {
    // We are on the left of the single number, so we search the right half
    return binarySearch(nums, mid + 1, hi);
  }
  //   Check if the mid is even index and end of pair
  else if (isEven && nums[mid] === nums[mid - 1]) {
    // We are on the right of the single number, so we search the left half
    return binarySearch(nums, lo, mid - 2);
  }
  //   Check if the mid is odd index and start of pair
  else if (!isEven && nums[mid] === nums[mid + 1]) {
    // We are on the right of the single number, so we search the left half
    return binarySearch(nums, lo, mid - 1);
  }
  //   If none of the above cases is true, then the mid element is not a part of a pair i.e. it is the single number so we return it
  return nums[mid];
}
