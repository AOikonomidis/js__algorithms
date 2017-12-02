/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Check for Palindromes

  instructions:

  Return true if the given string is a palindrome. 
  Otherwise, return false.

  A palindrome is a word or sentence 
  that's spelled the same way both forward and backward, 
  ignoring punctuation, case, and spacing.

*/

function palindrome(str) {
  // Good luck!
  let palStr = str.toLowerCase().replace(/[^a-z|0-9]/g, "").split("").reverse().join("");
  return str.toLowerCase().replace(/[^a-z|0-9]/g, "") === palStr;
}

// some testing
console.log(palindrome("eye")); // should return true.
console.log(palindrome("_eye")); // should return true.
console.log(palindrome("race car")); // should return true.
console.log(palindrome("not a palindrome")); // should return false.
console.log(palindrome("A man, a plan, a canal. Panama")); // should return true.
console.log(palindrome("never odd or even")); // should return true.
console.log(palindrome("nope")); // should return false.
