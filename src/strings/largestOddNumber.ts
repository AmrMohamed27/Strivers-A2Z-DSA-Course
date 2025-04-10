export function largestOddNumber(num: string): string {
  let right = num.length - 1;
  while (Number(num[right]) % 2 === 0 && right >= 0) {
    right--;
  }
  return num.slice(0, right + 1);
}
