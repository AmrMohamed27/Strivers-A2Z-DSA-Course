export function mergeSort(arr: number[], low: number, high: number) {
  // Base case
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  //   Recursively half the array in each iteration
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr: number[], low: number, mid: number, high: number) {
  // Declare variables
  let tmpArray: number[] = [];
  let left = low;
  let right = mid + 1;
  // Main loop to select two elements from each half and insert the smallest of them
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      tmpArray.push(arr[left]);
      left++;
    } else {
      tmpArray.push(arr[right]);
      right++;
    }
  }
  //   fill in the left out elements after copying the smallest ones
  while (left <= mid) {
    tmpArray.push(arr[left]);
    left++;
  }
  while (right <= high) {
    tmpArray.push(arr[right]);
    right++;
  }
  //   Fill in the main array with the sorted elements
  for (let i = low; i <= high; i++) {
    arr[i] = tmpArray[i - low];
  }
}
