/* 
    Selection Sort
    Time Complexity: O(n^2)
    
    Algorithm:
      Divides the array into a sorted and an unsorted part.
      Repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the first unsorted element.
      The sorted part grows from left to right.

*/

export function selectionSort(arr: number[], start: number, end: number) {
  if (start >= end) return;
  let minIndex = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];
  selectionSort(arr, start + 1, end);
}
