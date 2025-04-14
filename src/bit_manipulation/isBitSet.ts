export function isBitSet(n: number, i: number): boolean {
  return ((n >> i) & 1) === 1;
}
