/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Confirm the Ending

  instructions:

  Check if a string (first argument, str) ends with 
  the given target string (second argument, target).

*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you." ~ Falcor
  let indexStr = str.length;
  let indexTar = target.length;
  
  return str.substring(indexStr-indexTar, indexStr) === target;
}

// some testing
console.log(confirmEnding("Bastian", "n")); // should return true.
console.log(confirmEnding("Connor", "n")); // should return false.
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // should return false.
console.log(confirmEnding("He has to give me a new name", "name")); // should return true.
console.log(confirmEnding("Open sesame", "same")); // should return true.
console.log(confirmEnding("Open sesame", "pen")); // should return false.
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // should return false.
