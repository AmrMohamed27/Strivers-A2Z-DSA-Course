/*
  Moore's Voting Algorithm
  - We initialize two variables: count and element
  - Then we loop over the array and have 2 conditionals:
    - if count is 0, then store the current element in the element variable
    - if the current element equals the stored element, we increment count by 1. If not, we decrement count by 1.
  

  Dry Run:
    - So for example if we have an array like so: [1, 1, 2, 3, 3, 3, 3, 3]
      We first store the first element which is 1 and increment the count until it equals 2
      Then we encounter a different element "2" than the one we stored "1" so we decrement the count by 1
      Then we encounter another different element, so we decrement again so the count becomes 0
      when the count becomes zero, we store the current element "3"
      the count then is incremented until the end of the array and we exit the array with the stored element = "3" which is the majority element.
  Why does it work?
    - Because the majority element appears more than N/2 times where N is the length of the array, so the other elements cancel each other while counting and we end up
      with the majority element stored.


*/

export function majorityElement(nums: number[]): number {
  let element = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i];
    }
    if (element === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}
