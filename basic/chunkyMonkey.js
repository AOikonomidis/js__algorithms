/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Chunky Monkey

  instructions:

  Write a function that splits an array (first argument) 
  into groups the length of size (second argument) and 
  returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var chunkArray = [];
  var i = 0;
  
  while (i < arr.length) {
    chunkArray.push(arr.slice(i, i+size));
    i += size;
  }
  return chunkArray;
}

// some testing
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2)); // should return [["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // should return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // should return [[0, 1, 2, 3], [4, 5]].
console.log(chunkArrayInGroups(0, 1, 2, 3, 4, 5, 6], 3)); // should return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].