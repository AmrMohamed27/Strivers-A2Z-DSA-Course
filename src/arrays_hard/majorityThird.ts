/* 

  * This is an extended version of the Boyer Moore's Voting Algorithm

    Instead of tracking one majority element, we track two and that's it, as there can never be more than two elements repeating more than N/3 times

*/

export function majorityThird(nums: number[]): number[] {
  let element1 = Number.MIN_SAFE_INTEGER;
  let element2 = Number.MIN_SAFE_INTEGER;
  let count1 = 0,
    count2 = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(element1);
    console.log(element2);
    if (count1 === 0 && element1 !== nums[i]) {
      element1 = nums[i];
      count1++;
    } else if (count2 === 0 && element2 !== nums[i]) {
      element2 = nums[i];
      count2++;
    } else if (element1 === nums[i]) {
      count1++;
    } else if (element2 === nums[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  if (element1 !== Number.MIN_SAFE_INTEGER) {
    result.push(element1);
  }
  if (element2 !== Number.MIN_SAFE_INTEGER) {
    result.push(element2);
  }
  return result;
}
