/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Missing letters

  instructions:

  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
  let i = 1;
  while (i<str.length) {
    if ((str.charCodeAt(i)-str.charCodeAt(i-1)) > 1) {
      return String.fromCharCode(str.charCodeAt(i-1)+1);
    }
    i++;
  }
  return undefined;
}

// some testing
console.log(fearNotLetter("abce")); // should return "d".
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("bcd")); // should return undefined.
console.log(fearNotLetter("yz")); // should return undefined.