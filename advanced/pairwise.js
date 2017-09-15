/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Pairwise

  instructions:

  Given an array arr, find element pairs 
  whose sum equal the second argument arg 
  and return the sum of their indices.

  If multiple pairs are possible 
  that have the same numeric elements 
  but different indices, 
  return the smallest sum of indices. 
  Once an element has been used, 
  it cannot be reused to pair with another.

*/

function pairwise(arr, arg) {
  let total = 0;
  let checkDuplicates = [];
  
  for (let i =0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && checkDuplicates.indexOf(i) == -1 && checkDuplicates.indexOf(j) == -1) {
        total += i + j;
        checkDuplicates.push(i);
        checkDuplicates.push(j);
      }
    }
  }
  
  return total;
}

// some testing
console.log(pairwise([1,4,2,3,0,5], 7)); // should return 11.
console.log(pairwise([1, 3, 2, 4], 4)); // should return 1.
console.log(pairwise([1, 1, 1], 2)); // should return 1.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // should return 10.
console.log(pairwise([], 100)); // should return 0.
