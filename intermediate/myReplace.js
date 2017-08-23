/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Search and Replace

  instructions:

  Perform a search and replace on the sentence 
  using the arguments provided and return the new sentence.

*/

function myReplace(str, before, after) {
  var beforeArr = before.split("");
  var afterArr = after.split("");
  
  if (beforeArr[0] === beforeArr[0].toUpperCase()) 
    afterArr[0] = afterArr[0].toUpperCase();
  
  before = beforeArr.join("");
  after = afterArr.join("");
  
  str = str.replace(before, after);
  return str;
}

// some testing
console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms".