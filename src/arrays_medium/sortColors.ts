/* 
    This is a variant of the "Dutch National Flag Problem" Proposed by Dijkstra, which was intended to optimize Quick Sort for datasets with repeating elements
    A simple solution in O(n) time would be to keep count of each of the three elements and then override the array according to these counts.
    This solution however, using three pointers, was the solution Dijkstra himself proposed and solves it in a more elegant way.

*/

export function sortColors(nums: number[]): void {
  /* 
    Initiate three pointers where:
    the portion of the array from 0 to low - 1 should be less than mid
    the portion from low to mid should be equal to mid
    the portion from mid to high is the unsorted part
    the portion from high to length - 1 should be bigger than mid
    */
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  // Iterate until mid is larger than high, i.e. There is no unsorted part.
  while (mid <= high) {
    // If the current mid value is 0, we want it in the left portion of the array so we swap with low
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      mid++;
      low++;
      //   If it's 1, then it's in its correct place and we just increment the mid pointer
    } else if (nums[mid] === 1) {
      mid++;
      //   If it's 2, then we move it to the right portion of the array by swapping with high
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}
