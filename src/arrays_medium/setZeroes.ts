/*
  * Solution using O(1) space and O(N*M) time

  * How do we achieve that?
  - We use the first row and first column as markers to tell us if a specific row or column should be set to zeroes
    for example: if matrix[2][4] equals 0, then we mark the second row and fourth column -zero indexed ofcourse- by setting the first element in the row and the first element
    in the column both to zeroes like so:
    matrix[2][0] and matrix[0][4] to 0
    And then we do another loop over the matrix and for each element that doesnt equal zero, we check if the first element in their row or column is zero and if so, we set them to zero.
  * But what about that first row and column?
  - Well for the first row, we will use the element at matrix[0][0] to be the marker for us to set it to zero
    As for the column, there is no way to mark an element in the matrix to indiciate if we should set the first column to zeroes, so we use an extra variable to keep track of it.
*/

export function setZeroes(matrix: number[][]): void {
  // Variable to track if the first column should be set to zeroes
  let col0 = 1;
  // Mark the first element of the row or column where there is a zero
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      // Skip non-zero elements
      if (matrix[row][col] !== 0) continue;
      // Mark the row
      matrix[row][0] = 0;
      // Mark the column while taking care of the special case -being the first column-
      if (col === 0) {
        col0 = 0;
      } else {
        matrix[0][col] = 0;
      }
    }
  }
  // Set zeroes in rows and columns except the first ones -special case-
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // Skip already zero elements
      if (matrix[row][col] === 0) continue;
      // Check for marks on the current element's row or column
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  // Check the special case for the first row
  if (matrix[0][0] === 0) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }
  // Check the special case for the first column
  if (col0 === 0) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
}
