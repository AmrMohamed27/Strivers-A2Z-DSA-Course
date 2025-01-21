/*
  * Rotating a matrix by 90 degrees is done in 2 steps:
  - First Transpose the matrix
  - Then Reverse each row eg. the first column in the row becomes the last and vice versa.

*/

export function rotate(matrix: number[][]): void {
  // Get the transpose of the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[0].length; col++) {
      transposeElement(matrix, row, col);
    }
  }
  // Now reverse each row
  for (let row of matrix) {
    reverse(row);
  }
}

// helper function to transpose an element (swap row with column)
function transposeElement(matrix: number[][], row: number, col: number) {
  [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
}
// helper function to reverse an array
function reverse(arr: number[]): void {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
