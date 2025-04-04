/*
  The intuition looks similar to merge sort but instead of merging from the beginning, we merge from the end

*/

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let current = n + m - 1;
  let max1 = m - 1;
  let max2 = n - 1;
  while (current >= 0) {
    if (max2 < 0 || nums1[max1] > nums2[max2]) {
      nums1[current] = nums1[max1];
      max1--;
    } else {
      nums1[current] = nums2[max2];
      max2--;
    }
    current--;
  }
}
