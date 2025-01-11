export function leftRotateByK(arr: number[], k: number) {
  if (arr.length <= 1) return;
  //   Consider full rotations if array length is less than k
  k %= arr.length;
  //   Use Reversal Algorithm
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
}

export function rightRotateByK(arr: number[], k: number) {
  if (arr.length <= 1) return;
  //   Consider full rotations if array length is less than k
  k %= arr.length;
  //   Use Reversal Algorithm
  reverse(arr, 0, arr.length - 1 - k);
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
}

function reverse(arr: number[], start: number, end: number) {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
