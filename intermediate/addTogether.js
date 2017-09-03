/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Arguments Optional

  instructions:

  Create a function that sums two arguments together. 
  If only one argument is provided, 
  then return a function that expects one argument and returns the sum.

*/

function addTogether() {
  
  let checkNum = num => {
    if(typeof num !== 'number') {
      return undefined;
    } else {
      return num;
    }
  };
  
  if(arguments.length > 1) {
    let arg1 = checkNum(arguments[0]);
    let arg2 = checkNum(arguments[1]);
    if(arg1 === undefined || arg2 === undefined) {
      return undefined;
    } else {
      return arg1+arg2;
    }
  } else {
    let a = arguments[0];
    if(checkNum(a)) {
      return b => {
        if(a === undefined || checkNum(b) === undefined) {
          return undefined;
        } else {
          return a+b;
        }
      };
    }
  }
}

// some testing
console.log(addTogether(2,3)); // should return 5.
console.log(addTogether(2)(3)); // should return 5.
console.log(addTogether(2, "3")); // should return undefined.
console.log(addTogether(2)([3])); // should return undefined.
