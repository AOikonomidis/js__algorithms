/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Streamroller

  instructions:

  Flatten a nested array. 
  You must account for varying levels of nesting.

*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let finalArr = [].concat(...arr);
  return finalArr.some(Array.isArray) ? steamrollArray(finalArr) : finalArr;
}

// some testing
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4].