/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Return Largest Numbers in Arrays

  instructions:

  Return an array consisting of the largest number 
  from each provided sub-array. For simplicity, 
  the provided array will contain exactly 4 sub-arrays.

*/

function largestNum(arr) {
  
  var max = [];
  // initializing the max array
  for (var k=0; k<arr.length; k++) {
    max.push(-1);
  }
  
  for (var i=0; i<arr.length; i++) {
    for (j=0; j<arr[i].length; j++) {
      if (arr[i][j] > max[i]) {
        max[i] = arr[i][j];
      }
    }
  }
  return max;
}

// some testing
console.log(largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // should return [27,5,39,1001].
console.log(largestNum([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); // should return [9, 35, 97, 1000000].
