export function quickSort(arr: number[], low: number, high: number) {
  // Base Case
  if (low >= high || low < 0 || high > arr.length - 1) return;
  // Move the pivot to its correct position and put smaller elements on its left, then return the pivot's index
  let pivot = partition(arr, low, high);
  //   Repeat for the left and right sub arrays.
  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[low];
  let [left, right] = [low, high];
  while (left < right) {
    // Find the first element from the left that is greater than the pivot
    while (arr[left] <= pivot && left <= high - 1) {
      left++;
    }
    // Find the first element from the right that is smaller than the pivot
    while (arr[right] > pivot && right >= low + 1) {
      right--;
    }
    // Swap to bring the smaller elements on the left and vice versa.
    if (left < right) [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  [arr[right], arr[low]] = [arr[low], arr[right]];
  return right;
}
