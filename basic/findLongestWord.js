/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Find the Longest Word in a String
  
  instructions:

  Return the length of the longest word in the provided sentence.

*/

function findLongestWord(str) {
  
  var splitStr = str.split(" ");
  var max = 0;
  
  for (var i=0; i<splitStr.length; i++) {
    if (splitStr[i].length > max) {
      max = splitStr[i].length;
    }
  }
  
  return max;
}

// some testing
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // should return 6.
console.log(findLongestWord("May the force be with you")); // should return 5.
console.log(findLongestWord("Google do a barrel roll")); // should return 6.
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")); // should return 8.
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")); // should return 19.
