export function moveZeroes(nums: number[]) {
  // Keeping track of where we should put the next non-zero number
  let insertPos = 0;

  // Loop over each element
  for (let i = 0; i < nums.length; i++) {
    // If it's a non-zero element, insert it at the insertPos
    if (nums[i] !== 0) {
      [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
      insertPos++;
    }
  }
}
