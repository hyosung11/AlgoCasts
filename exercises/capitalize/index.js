// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

/* Algorithm
- create `result` which is the first char of the input string capitalized
- for each char in the string
  - if the char to the left is a space
    - capitalize it and add it to `result`
  - else
    - add it to `result` */

// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let idx = 1; idx < str.length; idx += 1) {
//     if (str[idx - 1] === ' ') {
//       result += str[idx].toUpperCase()
//     } else {
//       result += str[idx];
//     }
//   }

//   return result;
// }

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;
