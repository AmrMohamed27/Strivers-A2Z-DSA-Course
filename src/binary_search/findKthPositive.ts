export function findKthPositive(arr: number[], k: number): number {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const midValue = arr[mid];
    const missing = midValue - mid - 1;
    // Go Right Half
    if (missing < k) {
      lo = mid + 1;
    }
    // Go Left Half
    else {
      hi = mid - 1;
    }
  }
  return lo + k;
}
