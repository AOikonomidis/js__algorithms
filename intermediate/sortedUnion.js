/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Sorted Union

  instructions:

  Write a function that takes two or more arrays 
  and returns a new array of unique values 
  in the order of the original provided arrays.

*/

function uniteUnique() {
  let newArr = [];
  let i = 0;
  
  while(arguments[i]) {
    newArr = newArr.concat(arguments[i]);
    i++;
  }
  
  let finalArr = newArr.filter((item, pos) => (newArr.indexOf(item) == pos));
  return finalArr;
}

// some testing
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].