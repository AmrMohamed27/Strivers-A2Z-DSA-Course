export function singleNumber(nums: number[]): number {
  // Solution using hashing
  //   let freq: { [key: number]: number } = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     if (freq[nums[i]]) {
  //       freq[nums[i]] += 1;
  //     } else {
  //       freq[nums[i]] = 1;
  //     }
  //   }
  //   for (const [key, value] of Object.entries(freq)) {
  //     if (value == 1) return parseInt(key);
  //   }
  //   return -1;

  //   Solution using XOR
  let result = 0;
  for (const n of nums) {
    result ^= n;
  }
  return result;
}
