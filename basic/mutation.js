/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Mutations

  instructions:

  Return true if the string in the first element of the array 
  contains all of the letters of the string 
  in the second element of the array.

*/

function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  
  for (var i=0; i<str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) {
      return false;
    }
  }
  return true;
}

// some testing
console.log(mutation(["hello", "hey"])); // should return false.
console.log(mutation(["hello", "Hello"])); // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
console.log(mutation(["Mary", "Army"])); // should return true.
console.log(mutation(["Mary", "Aarmy"])); // should return true.
console.log(mutation(["Alien", "line"])); // should return true.
console.log(mutation(["floor", "for"])); // should return true.
console.log(mutation(["hello", "neo"])); // should return false.
console.log(mutation(["voodoo", "no"])); // should return false.