/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Where Do I Belong

  instructions:

  Return the lowest index at which a value (second argument) 
  should be inserted into an array (first argument) 
  once it has been sorted. The returned value should be a number.

*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b) {
    return a-b;
  });
  var min = 0, 
      flag = true,
      output;
  
  while (flag) {
    if (num > arr[arr.length-1]) {
      output = arr.length;
      flag = false;
    }
    if (num > arr[min]) {
      min++;
    }
    else {
      output = min;
      flag = false;
    }
  }
  
  return output;
}

// some testing
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // should return 2.
console.log(getIndexToIns([40, 60], 50)); // should return 1.
console.log(getIndexToIns([3, 10, 5], 3)); // should return 0.
console.log(getIndexToIns([5, 3, 20, 3], 5)); // should return 2.
console.log(getIndexToIns([2, 20, 10], 19)); // should return 2.
console.log(getIndexToIns([2, 5, 10], 15)); // should return 3.