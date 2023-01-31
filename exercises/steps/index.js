 // --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* Algorithm
- iterate from 0 to `n` (iterate through rows)
  - create an empty string `stair`
  - from 0 to `n` (iterate through columns)
    - if the current column is equal to or less than the current row
      - add a `#` to `stair`
    - else
      - add a space to `stair`
  - console.log `stair`
  */

// function steps(num) {
//   for (let row = 0; row < num; row += 1) {
//     let stair = '';

//     for (let column = 0; column < num; column += 1) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }

// function steps(num) {
//   for (let row = 0; row < num; row += 1) {
//     let stair = '';

//     for (let column = 0; column < num; column += 1) {
//       if (column <= row) {
//         stair += `#`;
//       } else {
//         stair += ` `;
//       }
//     }

//     console.log(stair);
//   }
// }

// function steps(num, row = 0, stair = '') {
//   if (num === row) return;

//   if (num === stair.length) {
//     console.log(stair);
//     return steps(num, row + 1);
//   }

//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//   steps(num, row, stair);
// }

// function steps(num, row = 0, stair = '') {
//   if (num === row) return;

//   if (num === stair.length) {
//     console.log(stair);
//     return steps(num, row + 1);
//   }

//   const add = stair.length <= row ? '#' : ' ';
//   steps(num, row, stair + add);
// }

/* Recursive Version

- if (row === n) then we have hit the end of our problem
- if the `stair` string has length === n then we are at the end of a row
- If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise, add a space
*/

function steps(num, row = 0, stair = '') {
  if (num === row) return;

  if (num === stair.length) {
    console.log(stair);
    return steps(num, row + 1)
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(num, row, stair);
}

module.exports = steps;

