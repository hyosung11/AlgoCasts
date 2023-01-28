// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const reversed = String(n).split('').reverse().join('');
//   if (n < 0) return parseInt(reversed) * -1
//   return parseInt(reversed);
// }

function reverseInt(integer) {
  const reversed = String(integer).split('').reverse().join('');

  return parseInt(reversed) * Math.sign(integer);
}

module.exports = reverseInt;
