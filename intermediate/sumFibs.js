/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Sum All Odd Fibonacci Numbers

  instructions:

  Given a positive integer num, 
  return the sum of all odd Fibonacci numbers 
  that are less than or equal to num.

*/

function sumFibs(num) {
  let prev = 0,
      cur = 1,
      result = 0;
  while(cur <= num) {
    if(cur%2 !== 0)
      result += cur;
    
    cur += prev;
    prev = cur - prev;
  }
  return result;
}

 // some testing
console.log(sumFibs(1)); // should return 2.
console.log(sumFibs(1000)); // should return 1785.
console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(4)); // should return 5.
console.log(sumFibs(75024)); // should return 60696.
console.log(sumFibs(75025)); // should return 135721.