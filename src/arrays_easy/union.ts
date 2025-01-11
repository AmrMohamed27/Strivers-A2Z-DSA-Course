export function union(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let [i, j] = [0, 0];

  while (i < a.length || j < b.length) {
    // Get current values (or Infinity if we're past array bounds)
    const val1 = i < a.length ? a[i] : Infinity;
    const val2 = j < b.length ? b[j] : Infinity;

    // Choose the smaller value
    const nextVal = Math.min(val1, val2);

    // Only add the value if the result array is empty or the value is different from the last added value
    if (!result.length || result[result.length - 1] !== nextVal) {
      result.push(nextVal);
    }

    // Move pointers past the current value
    if (val1 === nextVal) i++;
    if (val2 === nextVal) j++;
  }

  return result;
}
