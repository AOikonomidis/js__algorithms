/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Factorialize a Number

  instructions:

  Return the factorial of the provided integer.
  If the integer is represented with the letter n, 
  a factorial is the product of all positive integers less than 
  or equal to n.

*/

function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  else {
    return num*factorialize(num-1);
  }
}

// some testing
console.log(factorialize(5)); // should return 120.
console.log(factorialize(10)); // should return 3628800.
console.log(factorialize(20)); // should return 2432902008176640000.
console.log(factorialize(0)); // should return 1.
