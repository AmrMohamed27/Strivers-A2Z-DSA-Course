export function rearrangeArray(nums: number[]): number[] {
  let result = new Array(nums.length);
  let positiveIndex = 0,
    negativeIndex = 1;
  for (const num of nums) {
    if (num > 0) {
      result[positiveIndex] = num;
      positiveIndex += 2;
    } else {
      result[negativeIndex] = num;
      negativeIndex += 2;
    }
  }
  return result;
}
