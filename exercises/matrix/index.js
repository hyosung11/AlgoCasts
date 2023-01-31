// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/* PEDAC

Problem
- input: number
- output: array of arrays

Rules
- return a NxN spiral matrix
- subarrays are size N

Examples
- see above

Data Structure
- arrays and subarrays
- numbers

Algorithm
- declare function `matrix()` with one parameter `n`
- input number
- create empty array of array called `results`
- create a `counter` variable starting at 1
- while (start column <= end column) AND (start row <= end row)
  - loop from start column to end column
    - at results (start row[i]) assign counter variable
    - increment counter
  - increment start row
  - loop from start row to end row
    - at results[i](end column) assign counter variable
    - increment counter
  - decrement end column
  - repeat for other two sides
- return results
 */

function matrix(num) {
  const results = [];

  for (let idx = 0; idx < num; idx += 1) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = num - 1;
  let startRow = 0;
  let endRow = num - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let idx = startColumn; idx <= endColumn; idx += 1) {
      results[startRow][idx] = counter;
      counter += 1;
    }
    startRow += 1;

    // Right column
    for (let idx = startRow; idx <= endRow; idx += 1) {
      results[idx][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;

    // Bottom row
    for (let idx = endColumn; idx >= startColumn; idx -= 1) {
      results[endRow][idx] = counter;
      counter += 1;
    }
    endRow -= 1;

    // Start column
    for (let idx = endRow; idx >= startRow; idx -= 1) {
      results[idx][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;
  }

  return results;
}

module.exports = matrix;
