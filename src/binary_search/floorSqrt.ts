export function floorSqrt(n: number): number {
  return binarySearch(n, 0, n);
}

function binarySearch(n: number, lo: number, hi: number): number {
  // Base case
  if (lo >= hi) {
    const square = lo * lo;
    if (square > n) return lo - 1;
    return lo;
  }

  const mid = Math.floor((lo + hi) / 2);
  const square = mid * mid;

  // If the square is larger than n, then we need to search the left numbers
  if (square > n) return binarySearch(n, lo, mid - 1);

  // If the square is less than n, then we need to search the right numbers
  if (square < n) return binarySearch(n, mid + 1, hi);

  // If neither of these cases apply, then we are at the square root
  return mid;
}
