/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Wherefore Art Thou

  instructions:

  Make a function that looks through an array of objects (first argument) 
  and returns an array of all objects that have matching property 
  and value pairs (second argument). Each property 
  and value pair of the source object has to be present 
  in the object from the collection if it is 
  to be included in the returned array.

*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// some testing
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
console.log(whatIsInAName(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })); // should return [{ "a": 1, "b": 2, "c": 2 }].