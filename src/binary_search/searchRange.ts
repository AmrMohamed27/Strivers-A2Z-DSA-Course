export function searchRange(nums: number[], target: number): number[] {
  let l = findLowerBound(nums, target, 0, nums.length - 1, -1);
  let h = findHigherBound(nums, target, 0, nums.length - 1, -1);
  return [l, h];
}

function findLowerBound(
  nums: number[],
  target: number,
  lo: number,
  hi: number,
  res: number
): number {
  // Base case
  if (lo > hi) return res;
  let mid = Math.floor((lo + hi) / 2);
  if (nums[mid] === target) {
    // We need to check for if the res is -1 first as -1 will qualify as "less than" the current index
    let newRes = res === -1 ? mid : Math.min(res, mid);
    // We check the left half as we want to find the lowest index of the target
    return findLowerBound(nums, target, lo, mid - 1, newRes);
  } else if (nums[mid] < target) {
    return findLowerBound(nums, target, mid + 1, hi, res);
  } else {
    return findLowerBound(nums, target, lo, mid - 1, res);
  }
}

function findHigherBound(
  nums: number[],
  target: number,
  lo: number,
  hi: number,
  res: number
): number {
  // Base case
  if (lo > hi) return res;
  let mid = Math.floor((lo + hi) / 2);
  if (nums[mid] === target) {
    let newRes = Math.max(res, mid);
    // We check the right half as we need to find the largest possible index
    return findHigherBound(nums, target, mid + 1, hi, newRes);
  } else if (nums[mid] < target) {
    return findHigherBound(nums, target, mid + 1, hi, res);
  } else {
    return findHigherBound(nums, target, lo, mid - 1, res);
  }
}
