/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Repeat a string repeat a string

  instructions:

  Repeat a given string (first argument) num times (second argument). 
  Return an empty string if num is not a positive number.

*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var exit = "";
  
  while (num>0) {
    exit = exit.concat(str);
    num--;
  }
  
  return exit;
}

// some testing
console.log(repeatStringNumTimes("abc", 3)); // should return "abcabcabc".
console.log(repeatStringNumTimes("*", 3)); // should return "***".
console.log(repeatStringNumTimes("abc", 4)); // should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)); // should return "abc".
console.log(repeatStringNumTimes("*", 8)); // should return "********".
console.log(repeatStringNumTimes("abc", -2)); // should return "".