/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Falsy Bouncer

  instructions:

  Remove all falsy values from an array.

*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(Boolean);
  return arr;
}

// some testing
console.log(bouncer([7, "ate", "", false, 9])); // should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])); // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // should return [].
console.log(bouncer([1, null, NaN, 2, undefined])); // should return [1, 2].