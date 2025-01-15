export function findMissingNumber(arr: number[], n: number): number {
  // O(n) solution if the array is sorted
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] !== i + 1) {
  //     return i + 1;
  //   }
  // }
  // return n;
  // O(n) solution using summation
  const correctSum = (n * (n + 1)) / 2;
  let arraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }
  return correctSum - arraySum;
}
