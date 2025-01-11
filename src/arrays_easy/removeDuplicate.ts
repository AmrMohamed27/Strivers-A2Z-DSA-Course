export function removeDuplicate(arr: number[]): number {
  // Empty Array Case
  if (arr.length === 0) return 0;
  let k = 0;
  //  Add unique elements to the left of the array.
  for (let i = 0; i < arr.length; i++) {
    // Only add the first element or elements that don't equal the previous element, because the given array is sorted.
    if (i === 0 || arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }
  //  Zero elements after the unique ones (optional)
  for (let i = k; i < arr.length; i++) {
    arr[i] = 0;
  }
  return k;
}
