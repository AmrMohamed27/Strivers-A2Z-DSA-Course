export function reverseStack(s: number[]): void {
  reverse(s);
  return;
}

function insert(s: number[], val: number): void {
  // Base case
  if (s.length === 0) {
    s.push(val);
    return;
  }
  // We know the array is not empty because of the base case
  let temp = s.pop()!;
  insert(s, val);
  s.push(temp);
  return;
}
function reverse(s: number[]): void {
  // Base case
  if (s.length === 0) return;

  let temp = s.pop()!;
  reverse(s);
  insert(s, temp);
  return;
}
