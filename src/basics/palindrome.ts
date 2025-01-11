export function palindrome(str: string, start: number, end: number) {
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return palindrome(str, start + 1, end - 1);
}

