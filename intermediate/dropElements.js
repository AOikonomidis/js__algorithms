/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Drop It

  instructions:

  Drop the elements of an array (first argument), 
  starting from the front, until the predicate 
  (second argument) returns true.

  The second argument, func, is a function you'll use 
  to test the first elements of the array to decide 
  if you should drop it or not.

  Return the rest of the array, 
  otherwise return an empty array.

*/

function dropElements(arr, func) {
  // Drop them elements.
  let i = 0, x = arr.length, sum = 0;
  while (i<x) {    
    if (func(arr[i]))
      break;
    
    sum++;
    
    i++;
  }
  
  for (i=0; i<sum; i++)
    arr.shift();
  
  return arr;
}

// some testing
console.log(dropElements([1, 2, 3, 4], n => (n >= 3))); // should return [3, 4].
console.log(dropElements([0, 1, 0, 1], n => (n === 1))); // should return [1, 0, 1].
console.log(dropElements([1, 2, 3], n => (n > 0))); // should return [1, 2, 3].
console.log(dropElements([1, 2, 3, 4], n => (n > 5))); // should return [].
console.log(dropElements([1, 2, 3, 7, 4], n => (n > 3))); // should return [7, 4].
console.log(dropElements([1, 2, 3, 9, 2], n => (n > 2))); // should return [3, 9, 2].