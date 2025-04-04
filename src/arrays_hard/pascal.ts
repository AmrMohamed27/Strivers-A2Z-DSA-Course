export function generate(numRows: number): number[][] {
  let result = [];
  result.push([1]);
  if (numRows === 1) return result;
  result.push([1, 1]);
  if (numRows === 2) return result;
  for (let n = 2; n < numRows; n++) {
    let row = [];
    for (let i = 0; i < n + 1; i++) {
      if (i === 0 || i === n) {
        row.push(1);
        continue;
      }
      row.push(result[n - 1][i - 1] + result[n - 1][i]);
    }
    result.push(row);
  }
  return result;
}
