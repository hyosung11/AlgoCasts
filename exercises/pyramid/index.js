// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* PEDAC
input: number
output: pyramid shape with #

Rules
- pyramid has as many rows as number
- first row one #
- second row three ###
- third row #####

Examples
      '#'
      ' # '
      '###'
      '  #  '
      ' ### '
      '#####'

Data Structure

Algorithm
- input `n` for number of rows
- calculate midpoint of each row
- iterate over rows
  - declare `level` and assign to empty string
  - iterate over columns
    - if midpoint - row <= column and midpoint + row >= column
      - increment level with '#'
    - else increment level with ' '
  - log level
*/

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row += 1) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column += 1) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
