/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Finders Keepers

  instructions:

  Create a function that looks through an array (first argument) 
  and returns the first element in the array 
  that passes a truth test (second argument).

*/

function findElement(arr, func) {
  for (let i of arr) {
    if (func(i))
      return i;
  }
  return undefined;
}
 // some testing
console.log(findElement([1, 2, 3, 4], num => (num % 2 === 0))); // should return 2.
console.log(findElement([1, 3, 5, 8, 9, 10], num => (num % 2 === 0))); // should return 8.
console.log(findElement([1, 3, 5, 9], num => (num % 2 === 0))); // should return undefined.