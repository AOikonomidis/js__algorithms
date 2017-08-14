/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Seek and Destroy

  instructions:

  You will be provided with an initial array 
  (the first argument in the destroyer function), 
  followed by one or more arguments. 
  Remove all elements from the initial array 
  that are of the same value as these arguments.

*/

function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  return arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });
}

// some testing
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // should return [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // should return [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)); // should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"].