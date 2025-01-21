/*
 * Intuition: Think of peeling an onion layer by layer using 4 pointers
 * - Use left, right, top, bottom pointers to track boundaries
 * - For each layer:
 *   1. Go left → right (in the top row)
 *   2. Go top → bottom (in the right column)
 *   3. Go right → left (in the bottom row)
 *   4. Go bottom → top (in the left column)
 * - After each direction, update the corresponding pointer of the layer where we were moving
 * - Continue until pointers meet (all layers processed)
 */

export function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];
  let result: number[] = [];
  let n = matrix.length;
  let m = matrix[0].length;
  let left = 0,
    right = m - 1,
    bottom = n - 1,
    top = 0;
  while (left <= right && top <= bottom) {
    // Move from left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    // Move from top right to bottom right
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    // Check if we still have rows to move
    if (top <= bottom) {
      // Move from bottom right to bottom left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    // Check if we still have columns to move
    if (left <= right) {
      // Move from bottom left to top left
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}
