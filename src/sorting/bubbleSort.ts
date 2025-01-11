/* 

    Bubble Sort
    Time Complexity: O(n^2)

    Algorithm:
      Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
      This process is repeated until no swaps are needed, meaning the list is sorted.

*/

export function bubbleSort(arr: number[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
