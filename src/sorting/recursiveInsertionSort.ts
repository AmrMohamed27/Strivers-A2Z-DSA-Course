export function recursiveInsertionSort(arr: number[], n: number) {
  // Base case
  if (n <= 1) return;

  // Sort first n-1 elements
  recursiveInsertionSort(arr, n - 1);

  // Insert last element into sorted array
  let last = arr[n - 1];
  let j = n - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
}
