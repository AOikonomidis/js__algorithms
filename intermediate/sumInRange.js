/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Sum All Numbers in a Range

  instructions:

  We'll pass you an array of two numbers. 
  Return the sum of those two numbers 
  and all numbers between them.

*/

function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var i=0, k=min, array = [];
  while (k<=max) {
    array[i] = k;
    k++;
    i++;
  }
  var sum = array.reduce(function(a,b) {
    return a+b;
  }, 0);
  return sum;
}

// some testing
console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
console.log(sumAll([10, 5])); // should return 45.