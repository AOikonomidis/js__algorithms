/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  No repeats please

  instructions:

  Return the number of total permutations 
  of the provided string that don't have 
  repeated consecutive letters. 
  Assume that all characters 
  in the provided string are each unique.

*/

function permAlone(str) {
  
  let arr = str.split('');
  let total = 0;
  
  let swap = (a, b) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };
  
  let generate = n => {
    const regex = /([a-z])\1+/;
    
    if (n === 1 && !regex.test(arr.join(''))) {
      total++;
    } else {
      for (let i = 0; i < n; i++) {
        generate(n-1);
        swap(n%2 ? 0 : i, n-1);
      }
    }
  };
  
  generate(arr.length);
  
  return total;
}

// some testing
console.log(permAlone('aab')); // should return 2.
console.log(permAlone('aaa')); // should return 0.
console.log(permAlone('aabb')); // should return 8.
console.log(permAlone('zzzzzzzz')); // should return 0.
