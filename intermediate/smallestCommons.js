/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Smallest Common Multiple

  instructions:

  Find the smallest common multiple of the provided parameters 
  that can be evenly divided by both, 
  as well as by all sequential numbers 
  in the range between these parameters.

  The range will be an array of two numbers 
  that will not necessarily be in numerical order.

*/

function smallestCommons(arr) {
  
  arr.sort((a, b) => (b - a));

  // Create new array and add all values from greater to smaller from the
  // original array.
  let newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  let quote = 0,
      loop = 1,
      n;

  // Run code while n is not the same as the array length.
  do {
    quote = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quote % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quote;
}

// some testing
console.log(smallestCommons([1,5])); // should return 60.
console.log(smallestCommons([5, 1])); // should return 60.
console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.