/* 
    Insertion Sort
    Time Complexity: O(n^2)

    Algorithm:
    1. Iterate through the array starting from index 1 (second element as the first element is sorted)
    Builds the sorted array one element at a time.
    Takes each element from the unsorted part and inserts it into its correct position in the sorted part.
    Similar to how you sort playing cards in your hands.


*/

export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}
