/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Map the Debris

  instructions:

  Return a new array that transforms 
  the element's average altitude 
  into their orbital periods.

*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];
  let result;
  
  for (let value of arr) {
    result = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + value.avgAlt, 3)/GM));
    newArr.push({
      name: value.name,
      orbitalPeriod: result
    });
  }
  
  return newArr;
}

// some testing
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); // should return [{name: "sputnik", orbitalPeriod: 86400}].
