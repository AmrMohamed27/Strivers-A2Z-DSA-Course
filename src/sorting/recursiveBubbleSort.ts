export function recursiveBubbleSort(arr: number[], end?: number) {
  // Default value for end
  end = end ?? arr.length - 1;
  // Base case
  if (end === 0) return;
  //   Flag for if a swap occurred. If not, then the array is already sorted and we finish in O(n) time.
  let swapped = false;
  //   Iterate and swap until maximum element is at the end of the array
  for (let i = 0; i < end; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      if (!swapped) swapped = true;
    }
  }
  //   If no swaps happened, return
  if (!swapped) return;
  //   Recurse
  recursiveBubbleSort(arr, end - 1);
}
