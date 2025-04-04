export function findTwoElements(nums: number[]): number[] {
  let N = nums.length;
  let originalSum = (N * (N + 1)) / 2;
  let arraySum = 0;
  let originalSquare = (N * (N + 1) * (2 * N + 1)) / 6;
  let arraySquare = 0;
  for (const num of nums) {
    arraySum += num;
    arraySquare += Math.pow(num, 2);
  }
  let diff = originalSum - arraySum;
  let add = (originalSquare - arraySquare) / diff;
  let a = (diff + add) / 2;
  let b = add - a;
  return [a, b];
}
