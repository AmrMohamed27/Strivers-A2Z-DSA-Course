export function smallestDivisor(nums: number[], threshold: number): number {
  let lo = 1;
  let hi = Math.max(...nums);
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const sum = computeSum(nums, mid);
    if (sum <= threshold) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

function computeSum(nums: number[], divisor: number): number {
  let sum = 0;
  for (const num of nums) {
    sum += Math.ceil(num / divisor);
  }
  return sum;
}
