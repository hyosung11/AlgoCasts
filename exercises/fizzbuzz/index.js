// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(number) {
  for (let idx = 1; idx <= number; idx += 1) {
    if (idx % 5 === 0 && idx % 3 === 0) {
      console.log('fizzbuzz');
    } else if (idx % 3 === 0) {
      console.log('fizz');
    } else if (idx % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(idx);
    }
  }
}

module.exports = fizzBuzz;
