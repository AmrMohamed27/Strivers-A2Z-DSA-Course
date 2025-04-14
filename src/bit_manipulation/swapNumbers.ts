export function swapNumbers(n: number, m: number): number[] {
  n = n ^ m;
  m = m ^ n;
  n = n ^ m;
  return [n, m];
}
