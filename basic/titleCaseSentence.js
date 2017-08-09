/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Title Case a Sentence

  instructions:

  Return the provided string 
  with the first letter of each word capitalized. 
  Make sure the rest of the word is in lower case.

*/

function titleCase(str) {
  
  str = str.toLowerCase().split("");
  str[0] = str[0].toUpperCase();
  
  for (var i=1; i<str.length; i++) {
    if (str[i-1] === " ") {
      str[i] = str[i].toUpperCase();
    }
  }
  
  return str.join("");
}

// some testing
console.log(titleCase("I'm a little tea pot")); // should return "I'm A Little Tea Pot".
console.log(titleCase("sHoRt AnD sToUt")); // should return "Short And Stout".
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // should return "Here Is My Handle Here Is My Spout".
