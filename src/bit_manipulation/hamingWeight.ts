function hammingWeight(n: number): number {
  let count = 0;

  while (n) {
    n = n & (n - 1);
    count++;
  }

  return count;
}

// Example
// n = 25 = 11001
// 11001
// 11000
// ______
// 11000, (count = 1)
// 10111
// _______
// 10000, (count = 2)
// 01111
// ________
// 00000, (count = 3)
