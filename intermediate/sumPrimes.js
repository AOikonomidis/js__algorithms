/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Sum All Primes

  instructions:

  Sum all the prime numbers up to and including the provided number.
  The provided number may not be a prime.

*/

function sumPrimes(num) {
  // Function to get the primes up to max in an array
  let getPrimes = max => {
    let sieve = [];
    let primes = [];
    for (let i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (let j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  };
  
  let sum = 0;
  let primes = getPrimes(num);
  for (let k = 0; k < primes.length; k++) {
    sum += primes[k];
  }
  return sum;
}

// some testing
console.log(sumPrimes(10));
console.log(sumPrimes(10));