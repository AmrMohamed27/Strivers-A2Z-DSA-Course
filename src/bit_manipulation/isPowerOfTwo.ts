function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;

  // Why does this work?
  // Because any power of 2 number in binary will be 1 followed by a number of zeroes for example 4 is 100
  // the number less than this number by 1 is 3 which is 011
  // You can see the pattern here as all the bits are different to each other and this only happens with power of 2 numbers
  // As if you compare 7 and 6 they are 0111 and 0110 respectively, so they only differ by one bit
}
