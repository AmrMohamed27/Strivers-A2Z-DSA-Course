export function floorAndCeil(nums: number[], x: number): number[] {
  const f = getFloor(nums, 0, nums.length - 1, x, -1);
  const c = getCeil(nums, 0, nums.length - 1, x, -1);
  return [nums[f], nums[c]];
}

function getFloor(
  nums: number[],
  lo: number,
  hi: number,
  target: number,
  res: number
): number {
  // Base case
  if (lo > hi) return res;
  let mid = Math.floor((lo + hi) / 2);
  if (nums[mid] <= target) {
    return getFloor(nums, mid + 1, hi, target, mid);
  } else {
    return getFloor(nums, lo, mid - 1, target, res);
  }
}
function getCeil(
  nums: number[],
  lo: number,
  hi: number,
  target: number,
  res: number
): number {
  // Base case
  if (lo > hi) return res;
  let mid = Math.floor((lo + hi) / 2);
  if (nums[mid] >= target) {
    return getCeil(nums, lo, mid - 1, target, mid);
  } else {
    return getCeil(nums, mid + 1, hi, target, res);
  }
}
