export function isOdd(n: number): boolean {
  // This line checks whether the first bit of a number is 1 or not
  return ((n >> 0) & 1) === 1;
}
