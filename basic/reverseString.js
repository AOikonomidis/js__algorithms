/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Reverse a String

  instructions:

  Reverse a provided string.

*/

function reverseString(str) {
  var reversedStr;
  for (var i=0; i<str.length+1; i++) {
    reversedStr = str.split(str.charAt(i));
  }
  
  reversedStr = reversedStr.reverse().join("");
  
  return reversedStr;
}

// some testing
console.log(reverseString("hello")); // should return "olleh"
console.log(reverseString("Howdy")); // should return "ydwoH"
console.log(reverseString("Greetings from Earth")); // should return "htraE morf sgniteerG"
