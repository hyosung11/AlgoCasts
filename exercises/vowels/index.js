// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let vowels = 'aeiou';
//   let count = 0;

//   for (let char of str.split('')) {
//     if (vowels.includes(char.toLowerCase())) {
//       count += 1;
//     }
//   }

//   return count;
// }

// function vowels(str) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) count += 1;
//   }

//   return count;
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
