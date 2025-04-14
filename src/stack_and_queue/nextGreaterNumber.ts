// A monotonic stack is a stack that is either increasing or decreasing, when u push a new number that violates that rule, you keep popping until u no longer violate it
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let result = new Array(nums1.length).fill(-1);
  let stack: number[] = [];
  let idxMap = new Map<number, number>();
  // Fill the map with the first array
  for (let i = 0; i < nums1.length; i++) {
    idxMap.set(nums1[i], i);
  }
  // Fill the stack and result
  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      const popped = stack.pop()!;
      const indexInNums1 = idxMap.get(popped);
      if (indexInNums1 !== undefined) {
        result[indexInNums1] = num;
      }
    }
    stack.push(num);
  }
  return result;
}
