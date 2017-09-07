/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Symmetric Difference

  instructions:

  Create a function that takes two or more arrays 
  and returns an array of the symmetric difference 
  of the provided arrays. The mathematical term 
  "symmetric difference" of two sets 
  is the set of elements which are 
  in either of the two sets, but not in both.

*/

function sym() {
  let args = [];
  
  for(let value of arguments)
    args.push(value);
  
  function symDiff(arg1, arg2) {
    let result = [];
    
    arg1.forEach(a => {
      if((arg2.indexOf(a) < 0) && (result.indexOf(a) < 0))
        result.push(a);
    });
    
    arg2.forEach(a => {
      if((arg1.indexOf(a) < 0) && (result.indexOf(a) < 0))
        result.push(a);
    });
    
    return result.sort();
  }
  
  return args.reduce(symDiff);
}

// some testing
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3, 4, 5].
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // should return [1, 4, 5].
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); // should return [1, 4, 5].
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // should return [2, 3, 4, 6, 7].