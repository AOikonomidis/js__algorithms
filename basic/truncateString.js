/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Truncate a String

  instructions:

  Truncate a string (first argument) 
  if it is longer than the given maximum string length (second argument). 
  Return the truncated string with a ... ending.

  However, if the given maximum string length num is less than or equal to 3, 
  then the addition of the three dots does not add to the string length 
  in determining the truncated string.

*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    if (str.length > 3 && num >3) {
      num -= 3;
    }
    str = str.slice(0, num).concat("...");
  }
  return str;
}

// some testing
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); // should return "A-tisket...".
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // should return "Peter Piper...".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-", 1)); // "A...".
console.log(truncateString("Absolutely Longer", 2)); // should return "Ab...".