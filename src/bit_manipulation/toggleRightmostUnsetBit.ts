export function toggleRightmostUnsetBit(n: number): number {
  return n | (n + 1);

  // Why this works?
  // Adding 1 to a number sets the least significant unset bit to 1 and unsets the less significant bits to zero, so when we or both we get the result we need
  // Example:
  // n =
  // 00100111
  // n + 1 =
  // 00101000
  // bitwise OR Result
  // 00101111
}
