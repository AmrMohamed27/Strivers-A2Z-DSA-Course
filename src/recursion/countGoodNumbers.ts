function countGoodNumbers(n: number): number {
  function recurse(index: number): number {
    // Base case
    if (index === 0) return 5;

    // Is Even
    if (index % 2 === 0) return 5 * recurse(index - 1);
    // Is Odd
    return 4 * recurse(index - 1);
  }
  return recurse(n - 1);
}
