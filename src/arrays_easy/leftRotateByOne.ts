export function leftRotateByOne(arr: number[]) {
  let head = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = head;
}
